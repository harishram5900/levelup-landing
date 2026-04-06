import fs from "node:fs/promises";
import path from "node:path";
import LevelupWebsiteRawClient from "@/components/LevelupWebsiteRawClient";

function extractTag(html: string, tagName: "style" | "body") {
  const re = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "i");
  const m = html.match(re);
  return m?.[1] ?? "";
}

export default async function Home() {
  const filePath = path.join(process.cwd(), "levelup-website.html");
  const html = await fs.readFile(filePath, "utf8");

  const rawCss = extractTag(html, "style");
  const bodyInner = extractTag(html, "body");

  const css = `@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');\n${rawCss}`;

  return <LevelupWebsiteRawClient css={css} bodyHtml={bodyInner} />;
}
