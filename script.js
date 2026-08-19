/* =========================================================
   BCA STUDYHUB — script.js
   Data + interactivity for the study material site.
   ========================================================= */

/* ---------- 1. CURRICULUM DATA (own knowledge-based notes) ---------- */

const curriculum = {
  1: {
    label: "Semester 1",
    theme: "Foundations",
    subjects: [
      {
        id: "s1-foc",
        name: "Fundamentals of Computers",
        topics: [
          "Computer generations & classification",
          "Number systems: binary, octal, hex conversions",
          "Input/output & storage devices",
          "Software types: system vs application",
          "Basics of operating systems"
        ],
        notes: "Covers how a computer represents and processes data at a high level. Focus on number-system conversions and the difference between hardware, system software, and application software — these show up again in later architecture and OS courses."
      },
      {
        id: "s1-c",
        name: "Programming in C",
        topics: [
          "Variables, data types, operators",
          "Control flow: if/else, loops, switch",
          "Functions & recursion",
          "Arrays, strings, pointers",
          "Structures, unions & file handling"
        ],
        notes: "C is the base language for the whole degree — pointers and manual memory handling here make Data Structures in Semester 2 far easier. Practice writing programs by hand before typing them; C punishes sloppy syntax."
      },
      {
        id: "s1-math1",
        name: "Mathematics I",
        topics: [
          "Set theory & relations",
          "Matrices & determinants",
          "Limits, continuity, differentiation",
          "Basic integration",
          "Mathematical logic & propositions"
        ],
        notes: "Discrete-math topics (sets, logic) directly support algorithm analysis later, while calculus builds the numerical reasoning used in data science electives."
      },
      {
        id: "s1-de",
        name: "Digital Electronics",
        topics: [
          "Logic gates & Boolean algebra",
          "Karnaugh maps (K-maps)",
          "Combinational circuits: adders, multiplexers",
          "Sequential circuits: flip-flops, counters",
          "Number representation in hardware"
        ],
        notes: "Explains the hardware layer underneath every program you write. K-maps and Boolean simplification are the most commonly tested topics."
      },
      {
        id: "s1-comm",
        name: "Communication Skills",
        topics: [
          "Grammar & technical writing",
          "Report and email writing",
          "Presentation skills",
          "Group discussion techniques",
          "Listening & comprehension"
        ],
        notes: "Underrated subject — the report-writing and presentation skills here are reused directly in your final-year project documentation and viva."
      }
    ]
  },

  2: {
    label: "Semester 2",
    theme: "Structures & Objects",
    subjects: [
      {
        id: "s2-cpp",
        name: "Object Oriented Programming with C++",
        topics: [
          "Classes, objects, constructors/destructors",
          "Inheritance & polymorphism",
          "Operator overloading",
          "Virtual functions & abstract classes",
          "Exception handling"
        ],
        notes: "This is your first real exposure to OOP thinking — encapsulation and inheritance here are the same concepts you'll reuse conceptually in Java in Semester 3."
      },
      {
        id: "s2-ds",
        name: "Data Structures",
        topics: [
          "Arrays, stacks, queues",
          "Linked lists (singly, doubly, circular)",
          "Trees: binary trees, BST, traversals",
          "Graphs: representation, BFS/DFS",
          "Sorting & searching algorithms"
        ],
        notes: "Arguably the most important subject in the whole degree for interviews. Don't just memorize — implement each structure from scratch in C or C++ at least once."
      },
      {
        id: "s2-math2",
        name: "Mathematics II",
        topics: [
          "Differential equations",
          "Probability & distributions",
          "Vector algebra",
          "Numerical methods basics",
          "Statistics fundamentals"
        ],
        notes: "The probability and statistics sections here become directly relevant if you move toward data analytics or machine learning electives later."
      },
      {
        id: "s2-dbms",
        name: "DBMS Fundamentals",
        topics: [
          "ER modeling & normalization",
          "Relational model & keys",
          "Basic SQL: DDL, DML queries",
          "Transactions basics",
          "File organization concepts"
        ],
        notes: "Get comfortable drawing ER diagrams and normalizing to 3NF by hand — this is asked in almost every DBMS exam and every backend developer interview."
      },
      {
        id: "s2-evs",
        name: "Environmental Studies",
        topics: [
          "Ecosystems & biodiversity",
          "Pollution & control measures",
          "Natural resources",
          "Environmental policies & laws",
          "Sustainable development"
        ],
        notes: "A general-education subject; focus on conceptual understanding rather than depth, since it's usually a lighter-weight paper."
      }
    ]
  },

  3: {
    label: "Semester 3",
    theme: "Systems & the Web",
    subjects: [
      {
        id: "s3-java",
        name: "Java Programming",
        topics: [
          "OOP in Java: classes, interfaces, packages",
          "Exception handling & multithreading",
          "Collections framework",
          "File I/O & streams",
          "Basic GUI with Swing/AWT"
        ],
        notes: "Java's strict typing forces disciplined OOP habits. The Collections framework (ArrayList, HashMap, etc.) is used constantly in real backend work, so know it beyond syntax."
      },
      {
        id: "s3-os",
        name: "Operating Systems",
        topics: [
          "Process management & scheduling",
          "Memory management & paging",
          "Deadlocks: detection & prevention",
          "File systems",
          "Synchronization (semaphores, mutex)"
        ],
        notes: "CPU scheduling algorithms and deadlock questions (Banker's algorithm) are exam favorites. Understanding processes vs threads also helps a lot with Java's multithreading."
      },
      {
        id: "s3-cn",
        name: "Computer Networks",
        topics: [
          "OSI & TCP/IP models",
          "IP addressing & subnetting",
          "Routing & switching basics",
          "Application layer protocols: HTTP, DNS, FTP",
          "Network security basics"
        ],
        notes: "The OSI model is the mental map for the rest of networking. Subnetting needs practice with real numbers, not just theory."
      },
      {
        id: "s3-sql",
        name: "Advanced DBMS & SQL",
        topics: [
          "Joins, subqueries, views",
          "Stored procedures & triggers",
          "Indexing & query optimization",
          "Transaction management & ACID",
          "NoSQL basics (conceptual)"
        ],
        notes: "Builds directly on Semester 2 DBMS. Practice writing multi-table JOIN queries until they're second nature — this is a core skill tested in almost every tech interview."
      },
      {
        id: "s3-web",
        name: "Web Technologies (HTML, CSS, JS)",
        topics: [
          "HTML semantic structure",
          "CSS box model, flexbox, grid",
          "JavaScript basics: DOM manipulation",
          "Forms & client-side validation",
          "Responsive design principles"
        ],
        notes: "This exact stack is what this website you're building right now is made of — a genuinely practical subject. Build small real projects instead of only reading syntax."
      }
    ]
  },

  4: {
    label: "Semester 4",
    theme: "Engineering & Design",
    subjects: [
      {
        id: "s4-python",
        name: "Python Programming",
        topics: [
          "Core syntax, data types, collections",
          "Functions, modules & packages",
          "File handling & exceptions",
          "OOP in Python",
          "Intro to libraries (NumPy/Pandas basics)"
        ],
        notes: "Python's readability makes it a great second look at concepts learned in C/Java. The library ecosystem here is your on-ramp to data science and automation work."
      },
      {
        id: "s4-se",
        name: "Software Engineering",
        topics: [
          "SDLC models: Waterfall, Agile, Spiral",
          "Requirement analysis & SRS",
          "Software design principles",
          "Testing types: unit, integration, system",
          "Project management basics"
        ],
        notes: "This gives you the vocabulary used in every real dev team — sprints, backlogs, testing stages. Understand Agile/Scrum well since it comes up in almost every job interview."
      },
      {
        id: "s4-daa",
        name: "Design & Analysis of Algorithms",
        topics: [
          "Time & space complexity (Big-O)",
          "Divide & conquer (merge sort, quicksort)",
          "Greedy algorithms",
          "Dynamic programming",
          "Graph algorithms: Dijkstra, MST"
        ],
        notes: "The backbone of coding interviews. Don't just learn the algorithms — practice deriving their complexity, since that reasoning is what's actually tested."
      },
      {
        id: "s4-coa",
        name: "Computer Organization & Architecture",
        topics: [
          "CPU architecture & instruction cycle",
          "Memory hierarchy & cache",
          "Pipelining basics",
          "Addressing modes",
          "I/O organization"
        ],
        notes: "Explains what actually happens beneath your code at the hardware level — useful context for understanding performance and optimization later."
      },
      {
        id: "s4-webdev",
        name: "Server-side Web Development (PHP/MySQL)",
        topics: [
          "PHP syntax & server-side scripting",
          "Form handling & sessions",
          "Connecting PHP to MySQL",
          "CRUD operations",
          "Basic authentication systems"
        ],
        notes: "A practical pairing with Semester 3's front-end subject — together they let you build a complete, working full-stack application, which makes a great portfolio project."
      }
    ]
  },

  5: {
    label: "Semester 5",
    theme: "Applied & Emerging Tech",
    subjects: [
      {
        id: "s5-dwm",
        name: "Data Warehousing & Mining",
        topics: [
          "OLAP vs OLTP",
          "Star & snowflake schemas",
          "Association rule mining (Apriori)",
          "Classification & clustering basics",
          "ETL concepts"
        ],
        notes: "A conceptual bridge into analytics/data-science roles. Focus on understanding schema design and the intuition behind clustering rather than heavy math."
      },
      {
        id: "s5-cloud",
        name: "Cloud Computing",
        topics: [
          "Cloud service models: IaaS, PaaS, SaaS",
          "Deployment models: public/private/hybrid",
          "Virtualization concepts",
          "Major providers: AWS, Azure, GCP basics",
          "Cloud security fundamentals"
        ],
        notes: "Even a basic hands-on account with a free-tier cloud provider will make this subject far more concrete — try deploying one small app yourself."
      },
      {
        id: "s5-cyber",
        name: "Cyber Security",
        topics: [
          "Security principles: CIA triad",
          "Common attacks: phishing, SQLi, XSS",
          "Cryptography basics",
          "Firewalls & network security",
          "Security policies & ethics"
        ],
        notes: "Understand SQL injection and XSS conceptually — they connect directly back to the DBMS and web-dev subjects and are commonly asked about in interviews."
      },
      {
        id: "s5-ai",
        name: "Elective: AI & Machine Learning Basics",
        topics: [
          "What is AI vs ML vs DL",
          "Supervised vs unsupervised learning",
          "Basic algorithms: regression, decision trees",
          "Intro to neural networks",
          "Real-world ML applications"
        ],
        notes: "Kept intentionally conceptual at this stage — the goal is to know the vocabulary and general workflow (data → model → evaluation), not to master the math yet."
      },
      {
        id: "s5-project1",
        name: "Minor Project Work",
        topics: [
          "Problem statement selection",
          "Requirement gathering",
          "System design documentation",
          "Implementation & basic testing",
          "Project report writing"
        ],
        notes: "Pick something you'll actually enjoy building — a good minor project can be expanded into your final-year major project in Semester 6."
      }
    ]
  },

  6: {
    label: "Semester 6",
    theme: "Specialization & Career Launch",
    subjects: [
      {
        id: "s6-project",
        name: "Major Project",
        topics: [
          "Full system design & architecture",
          "Implementation of a complete application",
          "Testing & deployment",
          "Documentation (SRS, design docs)",
          "Final presentation & viva prep"
        ],
        notes: "Treat this like a real portfolio piece, not just a grade requirement — this is what you'll actually show in job interviews. Choose a problem with visible impact and document your decisions."
      },
      {
        id: "s6-elective",
        name: "Elective: .NET / Big Data / Advanced ML",
        topics: [
          "Framework-specific fundamentals",
          "Practical hands-on exercises",
          "Integration with existing skill set",
          "Industry use-cases",
          "Comparison with alternative technologies"
        ],
        notes: "Pick the elective that aligns with the job roadmap below — e.g. choose Big Data if you're aiming at data roles, or .NET/advanced web if you're targeting enterprise development."
      },
      {
        id: "s6-internship",
        name: "Industry Internship",
        topics: [
          "Real-world development workflow",
          "Version control in a team (Git/GitHub)",
          "Code reviews & collaboration",
          "Working with existing codebases",
          "Professional communication"
        ],
        notes: "Even a short internship teaches things no classroom subject can — particularly working inside an existing codebase and using Git collaboratively."
      },
      {
        id: "s6-seminar",
        name: "Seminar & Emerging Trends",
        topics: [
          "Researching a current tech topic",
          "Technical paper writing",
          "Presenting to an audience",
          "Q&A handling",
          "Industry trend awareness"
        ],
        notes: "A light subject, but the presenting and Q&A practice directly prepares you for technical interviews and your final project viva."
      }
    ]
  }
};

/* ---------- 2. ROADMAP DATA ---------- */

const courseRoadmap = [
  { sem: "Sem 1–2", title: "Build the Base", detail: "Programming logic (C), OOP basics (C++), data structures, discrete math & digital electronics." },
  { sem: "Sem 3–4", title: "Systems + Web", detail: "Java, OS, networks, advanced SQL, front-end web, algorithms, software engineering process." },
  { sem: "Sem 5", title: "Specialize", detail: "Pick a direction — data, cloud, security, or AI/ML — while shipping a minor project." },
  { sem: "Sem 6", title: "Prove It", detail: "Major project, internship, and one deep elective. This is what recruiters will actually look at." }
];

const careerTracks = [
  {
    track: "Industry — Software & Web Development",
    roles: [
      { role: "Front-end Developer", skills: "HTML/CSS/JS, React or Vue, responsive design, Git" },
      { role: "Back-end Developer", skills: "Java/Python/PHP, REST APIs, SQL, server basics" },
      { role: "Full-Stack Developer", skills: "Front-end + back-end + database + deployment basics" },
      { role: "Mobile App Developer", skills: "Android (Kotlin/Java) or Flutter, app lifecycle, APIs" }
    ]
  },
  {
    track: "Industry — Data & Infrastructure",
    roles: [
      { role: "Data Analyst", skills: "SQL, Excel, Python (Pandas), data visualization" },
      { role: "QA / Test Engineer", skills: "Manual + automation testing, test case design, SDLC" },
      { role: "System / Database Administrator", skills: "OS internals, networking, SQL admin, security basics" },
      { role: "Cloud / DevOps Engineer", skills: "AWS/Azure basics, CI/CD, Linux, containers" }
    ]
  },
  {
    track: "Higher Studies",
    roles: [
      { role: "MCA", skills: "Deepens CS fundamentals; common path for core software/product roles" },
      { role: "MBA (Systems/IT)", skills: "For product management or tech-leadership tracks" },
      { role: "MS Abroad (CS/Data Science)", skills: "Requires strong DSA + math + a good GRE/IELTS score" }
    ]
  }
];

const certifications = [
  "AWS Certified Cloud Practitioner",
  "Google Data Analytics Certificate",
  "Oracle SQL / OCA",
  "CompTIA Security+",
  "Meta Front-End / Back-End Developer Certificate",
  "Cisco CCNA (for networking track)"
];

/* ---------- 3. VIDEO LINK STORAGE (localStorage) ---------- */

const STORAGE_KEY = "bcaStudyhubVideos";

function loadVideoStore() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveVideoStore(store) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

function extractYouTubeId(url) {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([\w-]{11})/,
    /(?:youtu\.be\/)([\w-]{11})/,
    /(?:youtube\.com\/embed\/)([\w-]{11})/
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

function addVideoLink(subjectId) {
  const input = document.getElementById(`input-${subjectId}`);
  const url = input.value.trim();
  if (!url) return;

  const videoId = extractYouTubeId(url);
  if (!videoId) {
    alert("That doesn't look like a valid YouTube link. Paste a full youtube.com or youtu.be URL.");
    return;
  }

  const store = loadVideoStore();
  if (!store[subjectId]) store[subjectId] = [];
  if (store[subjectId].some(v => v.videoId === videoId)) {
    input.value = "";
    return;
  }
  store[subjectId].push({ videoId, url });
  saveVideoStore(store);
  input.value = "";
  renderVideoList(subjectId);
}

function removeVideoLink(subjectId, videoId) {
  const store = loadVideoStore();
  if (!store[subjectId]) return;
  store[subjectId] = store[subjectId].filter(v => v.videoId !== videoId);
  saveVideoStore(store);
  renderVideoList(subjectId);
}

function renderVideoList(subjectId) {
  const store = loadVideoStore();
  const list = store[subjectId] || [];
  const container = document.getElementById(`videos-${subjectId}`);
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `<p class="video-empty">No video lectures added yet. Paste a YouTube link above to file it under this subject.</p>`;
    return;
  }

  container.innerHTML = list.map(v => `
    <div class="video-chip">
      <a href="${v.url}" target="_blank" rel="noopener noreferrer">
        <img src="https://img.youtube.com/vi/${v.videoId}/mqdefault.jpg" alt="Video thumbnail" loading="lazy">
        <span>Open lecture ↗</span>
      </a>
      <button class="video-remove" title="Remove link" onclick="removeVideoLink('${subjectId}','${v.videoId}')">✕</button>
    </div>
  `).join("");
}

/* ---------- 4. RENDERING ---------- */

function renderSemesterTabs() {
  const tabWrap = document.getElementById("semester-tabs");
  tabWrap.innerHTML = Object.keys(curriculum).map(sem => `
    <button class="tab-btn" data-sem="${sem}" onclick="switchSemester('${sem}')">
      <span class="tab-num">0${sem}</span>
      <span class="tab-label">${curriculum[sem].label}</span>
    </button>
  `).join("");
}

function subjectCardHTML(subject, semKey) {
  return `
    <article class="sheet subject-card" id="card-${subject.id}">
      <div class="sheet-crop tl"></div>
      <div class="sheet-crop tr"></div>
      <div class="sheet-crop bl"></div>
      <div class="sheet-crop br"></div>

      <h3 class="subject-name">${subject.name}</h3>

      <div class="subject-topics">
        <p class="block-label">Core topics</p>
        <ul>
          ${subject.topics.map(t => `<li>${t}</li>`).join("")}
        </ul>
      </div>

      <div class="subject-notes">
        <p class="block-label">Study notes</p>
        <p>${subject.notes}</p>
      </div>

      <div class="subject-videos">
        <p class="block-label">Video lectures <span class="hint">(add your own YouTube links)</span></p>
        <div class="video-input-row">
          <input type="url" id="input-${subject.id}" placeholder="Paste a YouTube link…" />
          <button class="add-btn" onclick="addVideoLink('${subject.id}')">+ Add</button>
        </div>
        <div class="video-list" id="videos-${subject.id}"></div>
      </div>

      <div class="title-block">
        <div><span class="tb-key">SEM</span><span class="tb-val">${semKey}</span></div>
        <div><span class="tb-key">SHEET</span><span class="tb-val">${subject.id.toUpperCase()}</span></div>
        <div><span class="tb-key">SCALE</span><span class="tb-val">1:1</span></div>
      </div>
    </article>
  `;
}

function renderSubjects(semKey) {
  const grid = document.getElementById("subject-grid");
  const data = curriculum[semKey];
  document.getElementById("semester-theme").textContent = data.theme;
  grid.innerHTML = data.subjects.map(s => subjectCardHTML(s, semKey)).join("");
  data.subjects.forEach(s => renderVideoList(s.id));
}

function switchSemester(semKey) {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.sem === semKey);
  });
  renderSubjects(semKey);
}

function renderCourseRoadmap() {
  const wrap = document.getElementById("course-roadmap");
  wrap.innerHTML = courseRoadmap.map((stop, i) => `
    <div class="road-stop">
      <div class="road-node">
        <span class="road-index">${String(i + 1).padStart(2, "0")}</span>
      </div>
      <div class="road-copy">
        <p class="road-sem">${stop.sem}</p>
        <h4>${stop.title}</h4>
        <p>${stop.detail}</p>
      </div>
    </div>
  `).join("");
}

function renderCareerTracks() {
  const wrap = document.getElementById("career-tracks");
  wrap.innerHTML = careerTracks.map(track => `
    <div class="career-col">
      <h4>${track.track}</h4>
      ${track.roles.map(r => `
        <div class="role-card">
          <p class="role-name">${r.role}</p>
          <p class="role-skills">${r.skills}</p>
        </div>
      `).join("")}
    </div>
  `).join("");

  const certWrap = document.getElementById("cert-list");
  certWrap.innerHTML = certifications.map(c => `<li>${c}</li>`).join("");
}

/* ---------- 5. NAV + INIT ---------- */

function initNav() {
  document.querySelectorAll(".site-nav a").forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId.startsWith("#")) {
        e.preventDefault();
        document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderSemesterTabs();
  switchSemester("1");
  renderCourseRoadmap();
  renderCareerTracks();
  initNav();

  document.getElementById("year").textContent = new Date().getFullYear();
});
