// ============================================================
//  data.js  -  Single source of truth for all site content
//  Edit THIS file to update text, add blogs, change skills, etc.
// ============================================================

export const BASE = import.meta.env.BASE_URL;

export const D = {
  email: "gnanaganeshgm@gmail.com",
  phone: "+91-8190976506",
  location: "Bengaluru, Karnataka",
  li: "https://www.linkedin.com/in/gnana-ganesh-m/",
  gh: "https://github.com/gnaanmohan2118",
  tw: "https://twitter.com/53agati",
  map: "https://maps.app.goo.gl/DqCpEaK8F9yYFexo7",
  form: "https://formspree.io/f/xjkovypw",

  roles: [
    "Software Engineer at Oracle",
    "AWS Solutions Architect",
    "Terraform Associate Certified",
    "Cloud & DevOps Specialist",
    "Gen AI Engineer",
    "CS50W Certified"
  ],

  skills: [
    ["Python (OOP, Scripting)", 90],
    ["Django / FastAPI", 85],
    ["AWS (EC2, EKS, Lambda, S3)", 95],
    ["Docker / Kubernetes", 88],
    ["Terraform / Ansible", 95],
    ["CI/CD (GitHub Actions)", 90],
    ["LangChain / RAG / LLMs", 80],
    ["Nginx / Redis", 80],
    ["Prometheus / Grafana", 80],
    ["SQL / NoSQL", 88],
    ["Shell / Linux", 90],
    ["Microservices", 85]
  ],

  oracle: {
    company: "Oracle",
    role: "Software Engineer",
    period: "Feb 2026 / Present",
    color: "#c74634",
    gradient: "linear-gradient(135deg,#c74634,#ff6b4a,#c74634)",
    tagline: "Where I innovate.",
    desc: "Driving greenfield POCs for global banking products. Building secure GenAI, computer vision, and agentic AI systems in air-gapped enterprise environments.",
    points: [
      "Driving multiple greenfield POCs for global banking, building production-aligned GenAI and computer vision systems within fully air-gapped environments.",
      "Designing GenAI-driven event monitoring dashboards with LLM workflows for contextual alert analysis and intelligent summarization.",
      "Developing CNN-based models and OCR pipelines achieving 95%+ classification accuracy in enterprise banking.",
      "Establishing secure model packaging with version-controlled artifacts and reproducible build processes.",
      "Contributing to an internal Agentic AI framework with modular agents for workflow automation."
    ]
  },

  accenture: {
    company: "Accenture",
    role: "Associate Software Engineer",
    period: "Feb 2024 / Feb 2026",
    color: "#a100ff",
    gradient: "linear-gradient(135deg,#a100ff,#c850ff,#a100ff)",
    tagline: "Where I built.",
    desc: "ERP platforms, Gen AI apps, and cloud infrastructure serving thousands. Every deploy mattered.",
    points: [
      "Developed scalable ERP modules using Python, JavaScript, and AWS RDS, supporting 2,500+ users, maintaining over 99.5% uptime.",
      "Engineered secure internal GenAI knowledge retrieval system integrating LLM APIs for context-aware code generation.",
      "Migrated legacy on-prem databases to AWS (RDS, DynamoDB) using SQS, Lambda, Glue ETL with zero-downtime.",
      "Automated CI/CD pipelines with GitHub, CodePipeline, Terraform, CloudFormation, and Kubernetes.",
      "Awarded ACE Award for resolving high-impact production issues."
    ]
  },

  // -------------------------------------------------------
  //  PASSIONS  -  Edit or add items here for Life of GMG
  // -------------------------------------------------------
  passions: [
    { emoji: "", title: "Bike Rides & Road Trips", desc: "Mountain passes to coastal roads. Therapy, freedom, and adventure.", tags: ["All-India Tour", "Solo Rides"], color: "#ff6b35" },
    { emoji: "", title: "Photography", desc: "Landscapes, street scenes, and the quiet beauty in everyday moments.", tags: ["Landscapes", "Street", "Travel"], color: "#0071e3" },
    { emoji: "", title: "Travel & Exploration", desc: "New places, new cultures, new perspectives.", tags: ["India Explorer", "Adventure"], color: "#30d158" }
  ],

  // -------------------------------------------------------
  //  BLOGS  -  Add new posts here for My Thoughts page
  //  Just add a new object to this array:
  //  { tag: "Category", title: "Title", excerpt: "Short desc.", color: "#hex" }
  // -------------------------------------------------------
  blogs: [
    { tag: "Tech & Life", title: "What DevOps Taught Me About Life", excerpt: "Iteration, resilience, and continuous improvement are life skills.", color: "#0071e3" },
    { tag: "Society & Political Rant ", title: "On Being Open-Minded in a Closed World", excerpt: "Why questioning norms is not rebellion. It is responsibility.", color: "#5856d6" },
    { tag: "Travel", title: "My Life on Two Wheels", excerpt: "Breakdowns, sunsets, and everything in between.", color: "#30d158" }
  ]
};

// -------------------------------------------------------
//  SKILL CATEGORIES  -  For the sticky scroll skills section
// -------------------------------------------------------
export const CATS = [
  { name: "Core Languages & Databases", pct: 80, color: "#0071e3", techs: ["Python (OOP, scripting)", "SQL, NoSQL", "Shell scripting"] },
  { name: "Backend & Architecture", pct: 80, color: "#5856d6", techs: ["Django", "FastAPI", "REST APIs", "WebSockets", "Microservices"] },
  { name: "Generative AI & ML", pct: 85, color: "#30d158", techs: ["LangChain", "LangGraph", "RAG-based LLM apps", "Model fine-tuning", "Prompt engineering"] },
  { name: "Cloud & Infrastructure", pct: 95, color: "#ff9500", techs: ["AWS (EC2, EKS, Lambda, S3, RDS)", "Azure", "Terraform", "Ansible"] },
  { name: "Containerization & DevOps", pct: 90, color: "#ff453a", techs: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD pipelines", "SonarQube"] },
  { name: "Systems & Observability", pct: 85, color: "#5ac8fa", techs: ["Nginx", "Redis", "Linux", "Prometheus", "Grafana", "Splunk"] }
];
