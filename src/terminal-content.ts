import { cv } from "./content";

export const banner =
  "\n ____  ___  __   __  ____  ___\n" +
  "(    \\(__ )(  ) (  )(  __)/ __)\n" +
  " ) D ( (_ \\ \\ \\/ /  ) _)( (__\n" +
  "(____/(___/  \\__/  (____)\\___)\n";

export const statsLines = cv.stats
  .map((s) => "  " + s.value.padEnd(4) + " " + s.label)
  .join("\n");

function buildExperienceBlock() {
  const out = ["["];
  cv.experience.forEach((j, idx) => {
    out.push("  {");
    out.push('    "period":  "' + j.period + '",');
    out.push('    "role":    "' + j.role + '",');
    out.push('    "company": "' + j.company + '",');
    out.push('    "summary": "' + j.summary + '",');
    out.push('    "wins":    [');
    j.highlights.forEach((h) => out.push('      "' + h + '",'));
    out.push("    ]");
    out.push(idx < cv.experience.length - 1 ? "  }," : "  }");
  });
  out.push("]");
  return out.join("\n");
}
export const experienceBlock = buildExperienceBlock();

export const projectLines = cv.projects
  .map(
    (p) =>
      "drwxr-xr-x  " +
      p.name.padEnd(14) +
      " → " +
      p.tagline +
      "\n            stack: " +
      p.stack.join(", "),
  )
  .join("\n");

export const skillsBlock =
  'languages = [' + cv.skills.languages.map((s) => '"' + s + '"').join(", ") + "]\n" +
  'infra     = [' + cv.skills.infra.map((s) => '"' + s + '"').join(", ") + "]\n" +
  'security  = [' + cv.skills.security.map((s) => '"' + s + '"').join(", ") + "]";

export const contactBlock =
  "{\n" +
  '  "email":    "' + cv.identity.email + '",\n' +
  '  "github":   "' + cv.identity.github + '",\n' +
  '  "linkedin": "' + cv.identity.linkedin + '",\n' +
  '  "website":  "' + cv.identity.website + '"\n' +
  "}";
