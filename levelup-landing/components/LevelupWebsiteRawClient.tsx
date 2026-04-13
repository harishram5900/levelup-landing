"use client";

import { useEffect } from "react";

type Props = {
  css: string;
  bodyHtml: string;
};

export default function LevelupWebsiteRawClient({ css, bodyHtml }: Props) {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursor) {
        (cursor as HTMLElement).style.left = `${mx}px`;
        (cursor as HTMLElement).style.top = `${my}px`;
      }
    };

    let raf = 0;
    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ring) {
        (ring as HTMLElement).style.left = `${rx}px`;
        (ring as HTMLElement).style.top = `${ry}px`;
      }
      raf = window.requestAnimationFrame(animateRing);
    };

    document.addEventListener("mousemove", onMouseMove);
    raf = window.requestAnimationFrame(animateRing);

    const hoverTargets = Array.from(
      document.querySelectorAll(
        'a,button,[data-card],.nav-cta,.btn-primary,.btn-secondary,.plat-card,.feature-card'
      )
    );
    const onEnter = () => {
      if (!cursor || !ring) return;
      (cursor as HTMLElement).style.width = "20px";
      (cursor as HTMLElement).style.height = "20px";
      (ring as HTMLElement).style.width = "52px";
      (ring as HTMLElement).style.height = "52px";
    };
    const onLeave = () => {
      if (!cursor || !ring) return;
      (cursor as HTMLElement).style.width = "12px";
      (cursor as HTMLElement).style.height = "12px";
      (ring as HTMLElement).style.width = "36px";
      (ring as HTMLElement).style.height = "36px";
    };
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    // Navbar scroll state
    const navbar = document.getElementById("navbar");
    const onScrollNav = () => {
      navbar?.classList.toggle("scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScrollNav);
    onScrollNav();

    // Particles
    const particleContainer = document.getElementById("particles");
    const particles: HTMLElement[] = [];
    if (particleContainer) {
      for (let i = 0; i < 40; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        const size = Math.random() * 3 + 1;
        p.style.cssText = `
          left:${Math.random() * 100}%;
          width:${size}px; height:${size}px;
          animation-duration:${Math.random() * 12 + 8}s;
          animation-delay:${Math.random() * 10}s;
          --dx:${(Math.random() - 0.5) * 200}px;
          opacity:${Math.random() * 0.6 + 0.1};
          background:${Math.random() > 0.7 ? "rgba(255,255,255,0.6)" : "rgba(201,168,76,0.8)"};
        `;
        particleContainer.appendChild(p);
        particles.push(p);
      }
    }

    // Scroll reveal
    const revealEls = Array.from(document.querySelectorAll(".reveal,.reveal-left,.reveal-right"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) (e.target as HTMLElement).classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    revealEls.forEach((el) => observer.observe(el));

    // Feature card mouse glow
    const glowCards = Array.from(document.querySelectorAll("[data-card]"));
    const onCardMove = (e: Event) => {
      const ev = e as MouseEvent;
      const card = e.currentTarget as HTMLElement | null;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = (((ev.clientX - rect.left) / rect.width) * 100).toFixed(1);
      const y = (((ev.clientY - rect.top) / rect.height) * 100).toFixed(1);
      card.style.setProperty("--mx", `${x}%`);
      card.style.setProperty("--my", `${y}%`);
    };
    glowCards.forEach((c) => c.addEventListener("mousemove", onCardMove));

    // Stats motion (slow left -> right marquee)
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const statsBand = document.querySelector(".stats-band") as HTMLElement | null;
    const statsGrid = statsBand?.querySelector(".stats-grid") as HTMLElement | null;

    // Keep the exact stat blocks/layout, but move the whole row horizontally.
    // We wrap+duplicate the grid to create an infinite track.
    let createdTrack: HTMLElement | null = null;
    const isSmallScreen =
      typeof window !== "undefined" ? window.matchMedia("(max-width: 700px)").matches : false;

    if (statsBand && statsGrid && !prefersReducedMotion && !isSmallScreen) {
      const track = document.createElement("div");
      track.className = "stats-track";
      track.style.display = "flex";
      track.style.gap = "80px";
      track.style.width = "max-content";
      track.style.animationDuration = "38s"; // slower than the marquee above
      track.style.animationTimingFunction = "linear";
      track.style.animationIterationCount = "infinite";
      track.style.animationDirection = "reverse"; // left -> right

      // preserve existing max-width centering by moving it onto a shell wrapper
      const shell = document.createElement("div");
      shell.style.maxWidth = "900px";
      shell.style.margin = "0 auto";
      shell.style.overflow = "hidden";

      // Ensure the band clips the moving content (premium feel)
      statsBand.style.overflow = "hidden";

      const gridA = statsGrid;
      const gridB = statsGrid.cloneNode(true) as HTMLElement;

      // A CSS grid inside a flex "ticker" can collapse to min-content width.
      // Force a stable width equal to the shell width so the stats stay visible.
      // (shell isn't in DOM yet, so insert it before measuring)
      // Remove the original grid from band, then mount into track
      gridA.remove();
      // Insert the track before the footnote line
      const footnote = statsBand.querySelector('div[style*="margin-top:20px"]');
      if (footnote) {
        statsBand.insertBefore(shell, footnote);
      } else {
        statsBand.insertBefore(shell, statsBand.firstChild);
      }

      const shellWidth = Math.max(320, shell.getBoundingClientRect().width || 900);
      [gridA, gridB].forEach((g) => {
        g.style.width = `${shellWidth}px`;
        g.style.flex = "0 0 auto";
      });

      track.appendChild(gridA);
      track.appendChild(gridB);
      shell.appendChild(track);
      createdTrack = track;
    }

    // Waitlist submit -> keep backend integration working
    async function submitWaitlist() {
      const nameEl = document.getElementById("wl-name") as HTMLInputElement | null;
      const emailEl = document.getElementById("wl-email") as HTMLInputElement | null;
      const interestEl = document.getElementById("wl-interest") as HTMLSelectElement | null;
      const btn = document.getElementById("wl-submit") as HTMLButtonElement | null;
      const form = document.getElementById("waitlist-form") as HTMLElement | null;
      const success = document.getElementById("waitlist-success") as HTMLElement | null;

      const name = nameEl?.value?.trim() ?? "";
      const email = emailEl?.value?.trim() ?? "";
      const interest = interestEl?.value ?? "";

      const invalidBorder = "rgba(255,91,91,0.6)";
      const normalBorder = "rgba(255,255,255,0.09)";

      if (!name) {
        if (nameEl) nameEl.style.borderColor = invalidBorder;
        nameEl?.focus();
        return;
      }
      if (!email || !email.includes("@")) {
        if (emailEl) emailEl.style.borderColor = invalidBorder;
        emailEl?.focus();
        return;
      }
      if (!interest) {
        if (interestEl) interestEl.style.borderColor = invalidBorder;
        return;
      }

      if (nameEl) nameEl.style.borderColor = normalBorder;
      if (emailEl) emailEl.style.borderColor = normalBorder;
      if (interestEl) interestEl.style.borderColor = normalBorder;

      const oldBtnHtml = btn?.innerHTML ?? "";
      if (btn) {
        btn.innerHTML =
          '<div style="width:16px;height:16px;border:2px solid rgba(26,10,0,0.3);border-top:2px solid #1A0A00;border-radius:50%;animation:spin .7s linear infinite"></div> Joining...';
        btn.disabled = true;
      }

      try {
        const res = await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            full_name: name,
            email,
            interest:
              interest === "creators"
                ? "LevelUp Creators"
                : interest === "productivity"
                  ? "LevelUp Productivity"
                  : interest === "both"
                    ? "Both"
                    : interest,
            notes: null,
          }),
        });

        if (!res.ok) {
          // Restore button so user can retry
          if (btn) {
            btn.disabled = false;
            btn.innerHTML = oldBtnHtml || btn.innerHTML;
          }
          return;
        }

        if (form) form.style.display = "none";
        if (success) success.style.display = "block";
      } catch {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = oldBtnHtml || btn.innerHTML;
        }
      }
    }

    // Expose for inline onclick="submitWaitlist()"
    (window as unknown as { submitWaitlist?: () => void }).submitWaitlist = submitWaitlist;

    // Nav highlight active on scroll
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
    const onScrollActive = () => {
      let cur = "";
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 120) cur = (s as HTMLElement).id;
      });
      navLinks.forEach((a) => {
        const href = a.getAttribute("href");
        (a as HTMLElement).style.color = href === `#${cur}` ? "var(--gold)" : "";
      });
    };
    window.addEventListener("scroll", onScrollActive);
    onScrollActive();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScrollNav);
      window.removeEventListener("scroll", onScrollActive);

      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });

      particles.forEach((p) => p.remove());
      observer.disconnect();
      glowCards.forEach((c) => c.removeEventListener("mousemove", onCardMove));

      createdTrack?.parentElement?.remove();

      if (raf) window.cancelAnimationFrame(raf);
      try {
        delete (window as unknown as { submitWaitlist?: () => void }).submitWaitlist;
      } catch {
        // ignore
      }
    };
  }, []);

  return (
    <main>
      <style jsx global>
        {css}
      </style>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </main>
  );
}

