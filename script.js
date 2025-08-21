/* Terminal portfolio — Siddhartha (Mohana Siddhartha Chivukula) */
const $ = (s, el=document) => el.querySelector(s);
const out = $("#output");
const form = $("#cmdForm");
const input = $("#cmd");
const themeToggle = $("#themeToggle");
const YEAR = $("#year");

YEAR.textContent = new Date().getFullYear();

const profile = {
  name: "Mohana Siddhartha Chivukula",
  alias: "Siddhartha",
  email: "REPLACE_ME@example.com",
  location: "Tempe, AZ, USA",
  roles: ["Software Developer Intern @ Superstars", "BTS Data Engineering Intern @ ZS (2024)", "SCAI Grader @ ASU"],
  links: {
    github: "https://github.com/iamsiddhu3007",
    linkedin: "https://www.linkedin.com/in/siddharthachivukula/",
    resume: "./resume.pdf"
  },
  skills: [
    "Flutter/Dart", "Python", "Java", "C/C++", "SQL",
    "React", "Flask", "GitHub Actions", "Postman",
    "Snowflake", "Informatica IICS", "REST APIs",
    "Android Studio", "MongoDB/Realm", "MySQL"
  ],
  experience: [
    {
      role: "SCAI Grader",
      org: "Ira A. Fulton Schools of Engineering, ASU",
      time: "Aug 2025 – Present · Tempe, AZ (Hybrid)",
      bullets: [
        "Grader for CSE 469 (Computer & Network Forensics) and CSE 543 (Information Assurance & Security).",
        "Built Python sanity checks for hash/auth tasks; standardized rubrics via Gradescope."
      ]
    },
    {
      role: "Software Developer Intern",
      org: "Superstars",
      time: "May 2025 – Aug 2025 · Remote",
      bullets: [
        "Shipped Stories & Action Feed modules in Flutter/Dart with REST integrations.",
        "Profiled UI and optimized caching; strengthened CI via GitHub Actions + Postman tests."
      ]
    },
    {
      role: "Business Technology Solutions Associate (Intern)",
      org: "ZS",
      time: "Feb 2024 – Jul 2024 · Gurugram, India",
      bullets: [
        "Designed multi‑layer Snowflake DWH; developed IICS pipelines for 70+ vendor feeds.",
        "Added SQL‑based DQ checks and reporting views; supported legacy→cloud migration."
      ]
    }
  ],
  education: [
    {
      school: "Arizona State University",
      degree: "M.S. in Computer Science",
      time: "Aug 2024 – May 2026",
      details: "Coursework: Data Mining, Data Visualization, Mobile Computing, KRR, SW V&V, InfoSec, Data at Scale, Applied Crypto, Blockchain Apps"
    },
    {
      school: "Shiv Nadar University",
      degree: "B.Tech in Computer Science & Engineering",
      time: "Aug 2020 – May 2024",
      details: "Projects in ML, IR/NLP, algorithms"
    }
  ],
  projects: [
    { name: "Stories/Action Feed (Superstars)", url: "#", desc: "Flutter modules: responsive UI, REST, caching & CI/CD" },
    { name: "Attrition Prediction", url: "#", desc: "XGBoost/SMOTE; SHAP insights; 5‑fold CV" },
    { name: "Blockchain Security in Finance", url: "#", desc: "Hybrid design; ZK concepts; anomaly detection" },
    { name: "AI Tic‑Tac‑Toe", url: "#", desc: "Minimax + alpha‑beta; Bluetooth multiplayer; local storage" },
    { name: "Context‑Aware Health App", url: "#", desc: "CameraX PPG + accelerometer; RealmDB" },
    { name: "StockVision", url: "https://github.com/cmdsiraj/stock_vision", desc: "Flask + React time‑series baseline" },
    { name: "Tweet Classification", url: "https://github.com/iamsiddhu3007/Information-retrieval-project", desc: "IR ranking + spam detection (LogReg/MNB)" },
    { name: "Sokoban Solver", url: "https://github.com/aaaa760/sokoban", desc: "A*/IDA* with heuristics" },
    { name: "Holiday Destination", url: "https://github.com/Hemanth-Boyapati/HolidayDestination", desc: "PHP/MySQL/Tailwind travel site" },
    { name: "Library Management", url: "https://github.com/iamsiddhu3007/Library-Management-System", desc: "OOP Java lending/records" }
  ]
};

const commands = {
  help: { desc: "List available commands", run() {
    print([
      "Available commands:",
      "  help               — show this help",
      "  about              — quick intro",
      "  skills             — tech I use",
      "  projects           — selected work",
      "  exp                — experience",
      "  edu                — education",
      "  contact            — email & links",
      "  resume             — open resume.pdf",
      "  clear              — clear the screen",
      "  theme              — toggle light/dark"
    ]);
  }},
  about: { desc: "About me", run() {
    print([
      `hi, i'm ${profile.alias} (${profile.name}).`,
      `${profile.roles.join(" · ")} — based in ${profile.location}.`,
      "i build mobile apps, data pipelines, and clean ci/cd."
    ]);
  }},
  skills: { desc: "Skills list", run() {
    print(["skills:", "  " + profile.skills.join(", ")]);
  }},
  projects: { desc: "Show projects", run() {
    print(["projects:"]);
    profile.projects.forEach(p => {
      print([`  • ${p.name} — <a class="link" href="${p.url}" target="_blank" rel="noopener">${p.url}</a>`, `    ${p.desc}`]);
    });
  }},
  exp: { desc: "Experience", run() {
    print(["experience:"]);
    profile.experience.forEach(e => {
      print([`  • ${e.role} — ${e.org} (${e.time})`]);
      e.bullets.forEach(b => print([`     - ${b}`]));
      print([""]);
    });
  }},
  edu: { desc: "Education", run() {
    print(["education:"]);
    profile.education.forEach(ed => {
      print([`  • ${ed.school} — ${ed.degree} (${ed.time})`, `     ${ed.details}`]);
    });
  }},
  contact: { desc: "Contact info", run() {
    print([
      `email: <a class="link" href="mailto:${profile.email}">${profile.email}</a>`,
      `github: <a class="link" href="${profile.links.github}" target="_blank" rel="noopener">${profile.links.github}</a>`,
      `linkedin: <a class="link" href="${profile.links.linkedin}" target="_blank" rel="noopener">${profile.links.linkedin}</a>`
    ]);
  }},
  resume: { desc: "Open resume", run() {
    window.open(profile.links.resume, "_blank");
    print(["opening resume…"]);
  }},
  clear: { desc: "Clear screen", run() { out.innerHTML = ""; }},
  theme: { desc: "Toggle theme", run() {
    document.documentElement.classList.toggle("light");
    localStorage.setItem("theme", document.documentElement.classList.contains("light") ? "light" : "dark");
  }}
};

function print(lines){
  if(!Array.isArray(lines)) lines = [String(lines)];
  lines.forEach(l => {
    const div = document.createElement("div");
    div.className = "line";
    div.innerHTML = l;
    out.appendChild(div);
  });
  out.scrollTop = out.scrollHeight;
}

function promptEcho(cmd){
  const div = document.createElement("div");
  div.className = "line";
  div.innerHTML = `<span class="caret">sid@portfolio</span>:<span class="tag">~</span>$ ${escapeHtml(cmd)}`;
  out.appendChild(div);
}

function escapeHtml(unsafe) {
  return unsafe.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");
}

// Greeting
print(["welcome to siddhartha's terminal. type <span class='caret'>help</span> to begin."]);
print(["—"]);
commands.about.run();
print(["—"]);

// Form handling
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const val = input.value.trim();
  if(!val){ return; }
  promptEcho(val);
  const [cmd, ...rest] = val.split(/\s+/);
  const arg = rest.join(" ");
  const c = commands[cmd];
  if(c){ c.run(arg); } else { print([`command not found: ${cmd}. try 'help'.`]); }
  input.value = "";
});

// Theme
themeToggle.addEventListener("click", () => commands.theme.run());
const saved = localStorage.getItem("theme");
if(saved === "light"){ document.documentElement.classList.add("light"); }
