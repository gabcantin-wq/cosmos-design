"""Build the two static presentation pages. Branding is defined in brand.json."""
from pathlib import Path
import html
import json
import re

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
BRAND = json.loads((HERE / "brand.json").read_text(encoding="utf-8"))
SHELL = (HERE / "shell.html").read_text(encoding="utf-8")

def render(template, values):
    def replace(match):
        key = match.group(1)
        if key not in values:
            raise ValueError(f"Unknown template value: {key}")
        return values[key]
    return re.sub(r"\{\{([a-z_]+)\}\}", replace, template)

PAGES = (
    ("home.html", "docs/index.html", {
        "title": BRAND["tagline"],
        "description": "A collective of agents, a memory that carries experience forward, and a ray dedicated to your mission. Discover intelligence organised for useful work.",
        "page_path": "/", "page_class": "commercial", "nav_home": 'aria-current="page"', "nav_tech": ""
    }),
    ("technical.html", "docs/technique/index.html", {
        "title": "Architecture: agents, memory and evolution",
        "description": "Explore autonomous rays, agent functions, memory, cooperation and development. Understand the differences between deduplication, mitosis and the egg.",
        "page_path": "/technique/", "page_class": "technical", "nav_home": "", "nav_tech": 'aria-current="page"'
    }),
)

for source, destination, page in PAGES:
    values = {key: html.escape(value, quote=True) for key, value in BRAND.items()}
    values["brand_descriptor"] = html.escape(BRAND["company"].removeprefix(BRAND["brand"]).strip(), quote=True)
    values.update({key: html.escape(value, quote=True) if key in ("title", "description") else value for key, value in page.items()})
    first, _, rest = BRAND["tagline"].partition(" ")
    values["hero_title"] = html.escape(first) + "<br><span>" + html.escape(rest) + "</span>"
    values["content"] = render((HERE / source).read_text(encoding="utf-8"), values)
    values["preload"] = '<link rel="preload" as="image" href="/assets/prism/prism-hero.png" fetchpriority="high">' if page["page_class"] == "commercial" else ""
    output = ROOT / destination
    output.parent.mkdir(parents=True, exist_ok=True)
    rendered = "\n".join(line.rstrip() for line in render(SHELL, values).splitlines()) + "\n"
    output.write_text(rendered, encoding="utf-8", newline="\n")
    print(destination)
