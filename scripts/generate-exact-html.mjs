import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = join(process.cwd(), "src", "exact-html");

const routes = {
  platform: "/",
  edge: "/edge/",
  deploy: "/deploy/",
  mind: "/mind/",
  axis: "/axis/",
  useCases: "/use-cases/",
};

const navItems = [
  ["platform", "Platform", routes.platform],
  ["useCases", "Use Cases", routes.useCases],
  ["axis", "Axis", routes.axis],
  ["mind", "Mind", routes.mind],
  ["edge", "Edge", routes.edge],
  ["deploy", "Deploy", routes.deploy],
];

function themeToggle() {
  return `<button class="h-10 w-10 rounded-full border border-outline-variant/20 bg-surface-container-low hover:bg-surface-container-high transition-all flex items-center justify-center text-on-surface-variant" id="theme-toggle" type="button" title="Theme: System" aria-label="Theme: System" data-theme-mode="system">
<span class="material-symbols-outlined text-[20px]" id="theme-toggle-icon">desktop_windows</span>
</button>`;
}

const pillarCards = [
  {
    key: "mind",
    title: "Nash Mind",
    label: "Memory",
    href: routes.mind,
    image: "/nash/icons/nash-mind-dark.png",
    copy: "Structured organisational knowledge, evidence, relationships, policy context and decision history for governed AI.",
  },
  {
    key: "axis",
    title: "Nash Axis",
    label: "Orchestration",
    href: routes.axis,
    image: "/nash/icons/nash-axis-dark.png",
    copy: "The control plane for agents, approvals, workflow routing, human checkpoints and auditable action chains.",
  },
  {
    key: "edge",
    title: "Nash Edge",
    label: "Private Compute",
    href: routes.edge,
    image: "/nash/icons/nash-edge-dark.png",
    copy: "Private AI deployment close to your data, infrastructure, users and operational boundaries.",
  },
  {
    key: "agent",
    title: "Nash Agent",
    label: "Execution",
    href: routes.platform,
    image: "/nash/icons/nash-agent-dark.png",
    copy: "Governed specialist agents for repeatable business work across operations, proposals, support and analysis.",
  },
  {
    key: "os",
    title: "Nash OS",
    label: "Control",
    href: routes.platform,
    image: "/nash/icons/nash-os-dark.png",
    copy: "The operating surface for policy, permissions, visibility, system status and enterprise AI governance.",
  },
];

const pages = [
  {
    key: "platform",
    file: "site-nash-platfrom.html",
    title: "Nash Intelligence | Governed AI Infrastructure",
    description: "Nash Intelligence combines organisational memory, governed agents, workflow control and private deployment into one controlled AI infrastructure layer.",
    eyebrowIcon: "hub",
    eyebrow: "Platform",
    h1: 'Governed AI infrastructure <br><span class="text-primary">for controlled work.</span>',
    intro: "Nash Intelligence helps businesses deploy AI agents, organisational memory and workflow automation inside a controlled environment, with governance, auditability and data protection built in.",
    heroImage: "/nash/images/img-nash-platfrom.png",
    heroAlt: "Nash Intelligence platform hardware and infrastructure",
    problemIcon: "shield_with_heart",
    problemTitle: "The Governance Gap",
    problem: "AI adoption is moving faster than control. Nash Intelligence gives teams a single architecture for memory, agents, workflows, private deployment and auditability.",
    capabilityTitle: "What The Platform Provides",
    capabilities: [
      ["memory", "Context layer", "Unify documents, data, decisions and operational context so AI can reason with evidence instead of fragments.", "Grounded intelligence"],
      ["policy", "Governed action", "Apply policies, permissions, approvals and human review before agents act on sensitive work.", "Control by default"],
      ["dns", "Private deployment", "Run intelligence where your data lives, from private cloud to local edge hardware.", "Sovereign options"],
    ],
    patternsTitle: "The Nash Stack",
    patternsIntro: "A connected set of pillars for enterprise AI that needs context, control and private execution.",
    patterns: [
      ["01 Memory", "Nash Mind", "A structured organisational context layer that keeps entities, relationships, evidence, policies and decisions usable by AI.", "/nash/images/img-nash-mind.png"],
      ["02 Orchestration", "Nash Axis", "Agent routing, approvals, responsibilities and audit trails for complex multi-agent work.", "/nash/icons/nash-axis-dark.png"],
      ["03 Private Compute", "Nash Edge", "Private deployment through cloud enclaves, on-premise clusters or edge appliances.", "/nash/images/nash-edge-halfrack.png"],
    ],
    ctaTitle: "Need AI that stays inside your boundaries?",
    ctaCopy: "Consult with our team to design a governed intelligence layer around your data, systems and workflows.",
  },
  {
    key: "edge",
    file: "site-nash-edge.html",
    title: "Nash Edge | Private AI Deployment",
    description: "Nash Edge provides private AI deployment for organisations that need intelligence close to their data, systems and operational boundaries.",
    eyebrowIcon: "dns",
    eyebrow: "Product: Edge",
    h1: 'Private AI deployment <br><span class="text-primary">under your control.</span>',
    intro: "Private deployment for organisations needing AI close to their data, systems and operational boundaries.",
    heroImage: "/nash/images/nash-edge-rack.png",
    heroAlt: "Private local AI infrastructure server rack",
    problemIcon: "cloud_off",
    problemTitle: "Public AI Cannot Host Every Workload",
    problem: "When data integrity, latency and physical location are non-negotiable, public cloud intelligence becomes a liability.",
    capabilityTitle: "What Nash Edge Provides",
    capabilities: [
      ["security", "Private boundary", "Compute sits within your existing VPC, local network or physical firewall with no external inference calls.", "Active governance"],
      ["settings_input_component", "Customer-controlled", "Manage models, data, versioning and update windows inside your own operational controls.", "Full sovereignty"],
      ["speed", "Local access", "Reduce hops and latency for systems that need intelligence near users, assets and workflows.", "Low latency"],
    ],
    patternsTitle: "Deployment Patterns",
    patternsIntro: "Three deployment patterns for controlled, private intelligence.",
    patterns: [
      ["01 Cloud Instance", "Private Cloud", "Deploy in AWS Nitro Enclaves, Azure Confidential Computing or your own isolated cloud boundary.", "/nash/images/nash-edge-desktop.png"],
      ["02 Physical Rack", "On-premise", "Install into your own GPU clusters or secured local infrastructure for direct operational control.", "/nash/images/nash-edge-rack.png"],
      ["03 Turnkey Solution", "Edge Appliance", "Use a pre-configured hardware unit shipped to your environment for plug-and-play private AI.", "/nash/images/nash-edge-halfrack.png"],
    ],
    ctaTitle: "Need AI inside your own infrastructure?",
    ctaCopy: "Design private inference, governed memory and agent workflows around your security model.",
  },
  {
    key: "deploy",
    file: "site-nash-deploy.html",
    title: "Deployment Options | Nash Intelligence",
    description: "Explore Nash Intelligence deployment options, from secure managed cloud and BYO cloud to private desktop, team rack and enterprise rack infrastructure.",
    eyebrowIcon: "deployed_code",
    eyebrow: "Deployment options",
    h1: 'Private AI deployment, <br><span class="text-primary">sized to your organisation.</span>',
    intro: "From secure managed cloud for rapid prototyping to full-scale sovereign infrastructure racks. Nash Intelligence scales with your data requirements.",
    heroImage: "/nash/images/nash-edge-rack.png",
    heroAlt: "Nash Edge private deployment rack infrastructure",
    problemIcon: "settings_suggest",
    problemTitle: "Find The Deployment Model That Matches Your Stage",
    problem: "Every Nash Intelligence deployment maintains governance, auditability and data sovereignty, whether you start in managed cloud or run dedicated private infrastructure.",
    capabilityTitle: "What Stays Consistent",
    capabilities: [
      ["memory", "Organisational memory", "Persistent cross-project knowledge retrieval with evidence, lineage and controlled context.", "Shared context"],
      ["smart_toy", "Agent orchestration", "Coordinate multiple AI agents, workflow steps and human approvals across complex tasks.", "Governed work"],
      ["shield_with_house", "Data boundary control", "Keep sensitive data inside the cloud, office or rack boundary defined for your organisation.", "Sovereign control"],
    ],
    patternsTitle: "Deployment Progression",
    patternsIntro: "Adopt more capability over time as your security, capacity and reach requirements grow.",
    patterns: [
      ["01 Cloud", "Nash Cloud And BYO Cloud", "Start quickly in a managed environment, then move into your own AWS, Azure or GCP boundary when cloud controls matter.", "/nash/icons/nash-cloud-dark.png"],
      ["02 Desktop Edge", "Private Pilot", "Run a compact local edge server for high-security teams that need local, fast or air-gapped compute.", "/nash/images/nash-edge-desktop.png"],
      ["03 Rack Scale", "Team And Enterprise Racks", "Scale from departmental rack infrastructure to data-centre-ready sovereign AI for organisation-wide workloads.", "/nash/images/nash-edge-rack.png"],
    ],
    deployStages: [
      ["Stage 1: Fast start", "Nash Cloud", "A fully managed cloud environment designed for rapid internal testing and capability pilots.", ["Fastest path", "Pilots/Discovery"], ""],
      ["Stage 2: Controlled cloud", "BYO Cloud", "Deploy Nash Intelligence inside your own AWS, Azure, or GCP environment to respect existing data boundaries.", ["Cloud-first", "Data Boundary"], ""],
      ["Stage 3: Private pilot", "Nash Edge Desktop", "Compact local edge server for small internal teams who require high-speed, air-gapped compute.", ["128GB RAM", "2TB Storage"], "/nash/images/nash-edge-desktop.png"],
      ["Stage 4: Team scale", "Nash Edge Team Rack", "Dedicated rack infrastructure for departmental business units with heavy daily AI workloads.", ["512GB RAM", "24TB Storage"], "/nash/images/nash-edge-halfrack.png"],
      ["Stage 5: Enterprise scale", "Nash Edge Enterprise Rack", "Data-centre-ready sovereign AI infrastructure designed for massive workloads and organisational-wide memory.", ["1TB+ RAM", "100TB+ Storage"], "/nash/images/nash-edge-rack.png"],
    ],
    fitCards: [
      ["0-10 Employees", "Nash Cloud", "I need to prove value quickly without managing infrastructure."],
      ["Enterprise Division", "BYO Cloud", "I have strict cloud compliance rules but need to move fast."],
      ["High-Sec Team", "Edge Desktop", "Our data cannot leave our physical office walls."],
      ["Global Org", "Enterprise Rack", "We are building a central AI core for 1,000+ users."],
    ],
    sharedCapabilities: [
      ["memory", "Organisational memory", "Persistent cross-project knowledge retrieval."],
      ["smart_toy", "Agent orchestration", "Coordinate multiple AI agents for complex tasks."],
      ["account_tree", "Workflow automation", "Visual logic builder for repeatable AI processes."],
      ["how_to_reg", "Human approvals", "Mandatory checkpoints for critical decisions."],
      ["lock_person", "Role-based access", "Granular permissions for data and models."],
      ["history_edu", "Audit trails", "Immutable logs of every interaction and prompt."],
      ["fact_check", "Knowledge provenance", "Trace every AI output back to its source document."],
      ["shield_with_house", "Data boundary control", "Ensure sensitive data never leaves its defined area."],
      ["terminal", "Governed execution", "Secure code execution in sandboxed environments."],
    ],
    infrastructureRows: [
      ["Compute", "8-Core GPU Node", "24-Core Cluster", "Multi-Node NVIDIA"],
      ["Storage", "NVMe Flash", "ZFS Hot-Swap", "High-Density SAN"],
      ["Backup", "Local Mirror", "Encrypted Offsite", "Tape/Air-Gapped"],
      ["Power", "Standard AC", "Dual UPS", "Redundant PDU"],
    ],
    ctaTitle: "Find the deployment option that fits your organisation.",
    ctaCopy: "Start in managed cloud, bring your own cloud boundary or move into private edge infrastructure without changing the governance model.",
  },
  {
    key: "mind",
    file: "site-nash-mind.html",
    title: "Nash Mind | Organisational Memory For Governed AI",
    description: "Nash Mind structures organisational knowledge so governed AI can work with context, evidence, relationships, history and approved decisions.",
    eyebrowIcon: "memory",
    eyebrow: "Product: Mind",
    h1: 'Organisational memory <br><span class="text-primary">for governed AI.</span>',
    intro: "Nash Mind structures organisational knowledge so AI systems can work with context, evidence, relationships, history and approved decisions.",
    heroImage: "/nash/images/img-nash-mind.png",
    heroAlt: "Nash Mind organisational memory appliance",
    problemIcon: "database_off",
    problemTitle: "AI Needs More Than Retrieval",
    problem: "Enterprise knowledge is scattered across documents, chats, systems and informal decisions. Nash Mind turns that context into governed intelligence.",
    capabilityTitle: "What Nash Mind Structures",
    capabilities: [
      ["dataset", "Entities", "Create shared definitions of people, assets, customers, products and operational objects.", "Shared meaning"],
      ["account_tree", "Relationships", "Map how work, dependencies, policies, decisions and teams influence each other.", "Context graph"],
      ["verified", "Evidence", "Attach citations, source material and decision lineage to AI outputs.", "Traceable truth"],
    ],
    patternsTitle: "Memory Patterns",
    patternsIntro: "From source material to verified organisational context.",
    patterns: [
      ["01 Source Ingestion", "Connect Knowledge", "Bring structured and unstructured sources into a governed memory foundation.", "/nash/images/img-nash-mind.png"],
      ["02 Context Graph", "Model Relationships", "Link decisions, policies, entities and evidence so AI can reason with lineage.", "/nash/icons/nash-mind-dark.png"],
      ["03 Governed Use", "Serve Context", "Provide agents with approved context and auditable citations for high-stakes work.", "/nash/icons/nash-os-dark.png"],
    ],
    ctaTitle: "Give AI access to governed context.",
    ctaCopy: "Turn organisational memory into a structured foundation for agents, workflows and decisions.",
  },
  {
    key: "axis",
    file: "site-nash-axis.html",
    title: "Nash Axis | Agent Orchestration",
    description: "Nash Axis coordinates agents, workflows, approvals, tasks and system actions through a governed orchestration layer.",
    eyebrowIcon: "account_tree",
    eyebrow: "Product: Axis",
    h1: 'Agent orchestration <br><span class="text-primary">with control built in.</span>',
    intro: "Nash Axis coordinates agents, workflows, approvals, tasks and system actions through a governed orchestration layer.",
    heroImage: "/nash/images/img-nash-axis.png",
    heroAlt: "Nash Axis orchestration pillar",
    problemIcon: "rule",
    problemTitle: "Autonomous Agents Need Boundaries",
    problem: "Agents can overlap, bypass responsibility and lose accountability without a clear routing, approval and audit layer.",
    capabilityTitle: "What Nash Axis Coordinates",
    capabilities: [
      ["route", "Route tasks", "Dispatch work to the right agent, human or workflow based on capability, policy and context.", "Directed work"],
      ["approval_delegation", "Manage approvals", "Pause sensitive actions for human review and record approval paths.", "Human control"],
      ["history_edu", "Audit actions", "Capture who did what, which systems were touched and why each decision moved forward.", "Full lineage"],
    ],
    patternsTitle: "Orchestration Patterns",
    patternsIntro: "Coordinate human and agent work before it becomes operational noise.",
    patterns: [
      ["01 Request", "Interpret Work", "Understand the incoming request, required context and sensitivity of the action.", "/nash/icons/nash-agent-dark.png"],
      ["02 Assign", "Coordinate Agents", "Route subtasks across agents and humans with role boundaries and permission checks.", "/nash/icons/nash-axis-dark.png"],
      ["03 Record", "Approve And Audit", "Capture approvals, outputs and final state in a durable audit trail.", "/nash/icons/nash-os-dark.png"],
    ],
    ctaTitle: "Coordinate AI work before it becomes chaos.",
    ctaCopy: "Combine agent speed with human-governed controls, approvals and traceable execution.",
  },
  {
    key: "useCases",
    file: "site-nash-usecases.html",
    title: "Nash Intelligence | Use Cases",
    description: "Explore how Nash Intelligence supports governed proposals, operational workflows, support, compliance and private AI deployment.",
    eyebrowIcon: "workspaces",
    eyebrow: "Use Cases",
    h1: 'How Nash Intelligence <br><span class="text-primary">works in practice.</span>',
    intro: "Use Nash Intelligence to support high-context business work where AI needs memory, control, workflow orchestration and private deployment.",
    heroImage: "/nash/images/nash-edge-desktop.png",
    heroAlt: "Nash Intelligence desktop edge appliance",
    problemIcon: "assignment_late",
    problemTitle: "High-Context Work Is Hard To Automate",
    problem: "Important workflows depend on history, policy, judgement and approvals. Nash turns those moving parts into governed AI work.",
    capabilityTitle: "Example Use Cases",
    capabilities: [
      ["description", "Proposal support", "Draft and review proposals using prior win themes, product facts, approvals and compliance rules.", "Sales enablement"],
      ["support_agent", "Service operations", "Route customer issues through context, policy, escalation paths and auditable actions.", "Faster resolution"],
      ["gavel", "Compliance workflows", "Apply policies and approval chains to regulated decisions before agents act.", "Reduced risk"],
    ],
    patternsTitle: "Workflow Examples",
    patternsIntro: "Repeatable patterns where governed AI can safely assist.",
    patterns: [
      ["01 Proposal Draft", "Proposal Support", "Retrieve historical context, generate drafts, check compliance and pause for review.", "/nash/icons/nash-mind-dark.png"],
      ["02 Operations", "Workflow Automation", "Coordinate requests across agents, systems and human approvals.", "/nash/icons/nash-axis-dark.png"],
      ["03 Private Workloads", "Secure AI Deployment", "Run sensitive AI work close to the data and systems it depends on.", "/nash/images/nash-edge-halfrack.png"],
    ],
    ctaTitle: "Ready to see it in action?",
    ctaCopy: "Map your first governed AI workflow across memory, agents, approvals and private deployment.",
  },
];

function nav(activeKey) {
  return navItems
    .map(([key, label, href]) => {
      const active = key === activeKey;
      const className = active
        ? "text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md"
        : "text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 font-body-md text-body-md";
      return `<a class="${className}" href="${href}">${label}</a>`;
    })
    .join("\n");
}

function mobileNav(activeKey) {
  return navItems
    .map(([key, label, href]) => {
      const active = key === activeKey;
      const className = active
        ? "bg-primary-container text-on-surface border border-outline-variant/20"
        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high border border-transparent";
      return `<a class="${className} rounded px-4 py-3 font-body-md text-body-md transition-colors" href="${href}">${label}</a>`;
    })
    .join("\n");
}

function pillarGrid(activeKey) {
  return pillarCards
    .map((pillar) => {
      const active = pillar.key === activeKey;
      const activeClasses = active ? " border-secondary/30 bg-primary-container" : " hover:bg-surface-container";
      return `<a class="glass-panel p-8 rounded-xl group transition-all${activeClasses}" href="${pillar.href}">
<div class="flex justify-between items-start mb-8">
<img alt="${pillar.title} icon" class="h-14 w-14 object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="${pillar.image}">
<span class="font-label-mono text-label-mono bg-secondary/10 text-secondary px-3 py-1 rounded uppercase">${pillar.label}</span>
</div>
<h3 class="font-display-lg text-2xl font-bold mb-3 text-on-surface">${pillar.title}</h3>
<p class="text-on-surface-variant font-body-md text-body-md">${pillar.copy}</p>
</a>`;
    })
    .join("\n");
}

function capabilityCards(items) {
  return items
    .map(
      ([icon, title, copy, label], index) => `<div class="glass-panel p-8 rounded-lg border-t-2 ${index === 0 ? "border-t-secondary/30" : index === 1 ? "border-t-primary/30" : "border-t-tertiary/30"}">
<div class="h-12 w-12 rounded bg-secondary-container/10 flex items-center justify-center mb-6">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">${icon}</span>
</div>
<h3 class="font-headline-lg-mobile text-on-surface mb-4">${title}</h3>
<p class="font-body-md text-body-md text-on-surface-variant">${copy}</p>
<div class="mt-8 pt-6 border-t border-outline-variant/10 flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span class="font-label-mono text-[10px] text-secondary uppercase">${label}</span>
</div>
</div>`,
    )
    .join("\n");
}

function patternCards(patterns) {
  return patterns
    .map(
      ([label, title, copy, image], index) => `<div class="${index === 2 ? "md:col-span-12 bg-primary-container" : index === 0 ? "md:col-span-8 bg-surface" : "md:col-span-4 bg-surface"} p-10 rounded-xl border border-outline-variant/20 flex flex-col ${index === 2 ? "md:flex-row justify-between" : ""} gap-8">
<div class="z-10 ${index === 2 ? "max-w-xl" : ""}">
<span class="font-label-mono text-label-mono text-secondary mb-4 block">${label}</span>
<h3 class="font-headline-lg text-on-surface mb-4">${title}</h3>
<p class="font-body-md text-body-md text-on-surface-variant">${copy}</p>
</div>
<div class="z-10 ${index === 1 ? "mt-auto" : ""} flex justify-center items-center">
<img alt="${title}" class="${index === 0 ? "h-48 md:h-56" : "h-44"} max-w-full object-contain drop-shadow-[0_0_30px_rgba(189,198,224,0.2)]" src="${image}">
</div>
</div>`,
    )
    .join("\n");
}

function deployExtraSections(page) {
  if (page.key !== "deploy") {
    return "";
  }

  const maturityItems = ["Cloud", "BYO Cloud", "Desktop Edge", "Team Rack", "Enterprise Rack"]
    .map(
      (label, index) => `<div class="flex flex-col items-center gap-4 bg-background px-4">
<div class="w-4 h-4 rounded-full ${index < 2 ? "bg-primary ring-primary/10" : index < 4 ? "bg-secondary ring-secondary/10" : "bg-on-surface ring-on-surface/10"} ring-8"></div>
<span class="font-label-mono text-label-mono text-on-tertiary-container uppercase">${label}</span>
</div>`,
    )
    .join("\n");

  const stageCards = page.deployStages
    .map(
      ([label, title, copy, tags, image], index) => `<div class="relative flex flex-col md:flex-row items-center gap-12 group">
<div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full ${index < 2 ? "bg-primary" : index < 4 ? "bg-secondary" : "bg-on-surface"} border-4 border-surface shadow-sm z-10 group-hover:scale-125 transition-transform"></div>
${index % 2 === 1 ? '<div class="w-full md:w-1/2 hidden md:block"></div>' : ""}
<div class="w-full md:w-1/2 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}">
<span class="font-label-mono text-label-mono ${index < 2 ? "text-primary bg-primary/10" : index < 4 ? "text-secondary bg-secondary/10" : "text-on-primary bg-on-surface"} uppercase font-bold px-2 py-1 rounded mb-2 inline-block">${label}</span>
<h3 class="font-headline-lg text-headline-lg text-on-surface mb-2">${title}</h3>
<p class="font-body-md text-on-tertiary-container mb-4">${copy}</p>
<div class="flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""} ${image ? "mb-4" : ""}">
${tags.map((tag) => `<span class="bg-surface-container-high px-3 py-1 rounded text-label-mono text-on-surface-variant border border-outline-variant/10">${tag}</span>`).join("\n")}
</div>
${image ? `<img alt="${title}" class="w-full h-48 object-contain rounded-xl border border-outline-variant/20 glow-blue bg-surface-container-low p-4" src="${image}">` : ""}
</div>
${index % 2 === 0 ? '<div class="w-full md:w-1/2 hidden md:block"></div>' : ""}
</div>`,
    )
    .join("\n<div class=\"circuit-line\"></div>\n");

  const fitCards = page.fitCards
    .map(
      ([label, title, copy], index) => `<div class="glass-panel p-6 rounded-xl transition-all ${index === 0 ? "" : index === 1 ? "border-l-4 border-l-primary" : index === 2 ? "border-l-4 border-l-secondary" : "border-l-4 border-l-tertiary"}">
<h4 class="font-label-mono text-label-mono text-primary mb-4 uppercase">${label}</h4>
<p class="font-headline-lg-mobile text-on-surface mb-4">${title}</p>
<p class="font-body-md text-body-md text-on-surface-variant">${copy}</p>
</div>`,
    )
    .join("\n");

  const sharedCards = page.sharedCapabilities
    .map(
      ([icon, title, copy]) => `<div class="p-6 bg-surface rounded-xl border border-outline-variant/20">
<span class="material-symbols-outlined text-secondary mb-4">${icon}</span>
<h4 class="font-headline-lg-mobile text-on-surface mb-2">${title}</h4>
<p class="font-body-md text-sm text-on-surface-variant">${copy}</p>
</div>`,
    )
    .join("\n");

  const infraRows = page.infrastructureRows
    .map(
      ([module, desktop, teamRack, enterprise]) => `<div class="grid grid-cols-4 p-4 border-b border-outline-variant/10 items-center">
<div class="font-bold text-on-surface pl-4">${module}</div>
<div class="text-on-surface-variant text-sm">${desktop}</div>
<div class="text-on-surface-variant text-sm">${teamRack}</div>
<div class="text-on-surface-variant text-sm">${enterprise}</div>
</div>`,
    )
    .join("\n");

  return `<section class="mb-24 text-center">
<span class="font-label-mono text-label-mono uppercase tracking-[0.2em] text-secondary bg-secondary/10 px-3 py-1 rounded mb-6 inline-block">${page.eyebrow}</span>
<h1 class="font-display-lg text-display-lg md:text-6xl text-on-surface mb-6 max-w-4xl mx-auto leading-tight">Private AI deployment, sized to your organisation.</h1>
<p class="font-body-md text-body-md text-on-tertiary-container max-w-2xl mx-auto mb-10">From secure managed cloud for rapid prototyping to full-scale sovereign infrastructure racks. Nash Intelligence scales with your data requirements.</p>
<div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
<a class="bg-primary text-on-primary px-8 py-4 rounded font-label-mono text-label-mono font-bold uppercase tracking-widest glow-blue hover:brightness-110 transition-all flex items-center justify-center gap-2" href="mailto:hello@nashintelligence.ai">Book a conversation <span class="material-symbols-outlined text-[18px]">arrow_forward</span></a>
<a class="border border-outline-variant text-on-surface px-8 py-4 rounded font-label-mono text-label-mono font-bold uppercase tracking-widest hover:bg-surface-variant transition-all" href="/edge/">Explore Nash Edge</a>
</div>
<div class="relative py-12 hidden md:block">
<div class="absolute top-1/2 left-0 w-full h-px bg-outline-variant/20 -z-10"></div>
<div class="flex justify-between max-w-5xl mx-auto">
${maturityItems}
</div>
</div>
</section>
<section class="mb-32 grid md:grid-cols-2 gap-gutter items-center">
<h2 class="font-headline-lg text-headline-lg text-on-surface">Find the deployment model that matches your stage.</h2>
<p class="font-body-md text-body-md text-on-tertiary-container">We support your progression from initial AI discovery to dedicated private infrastructure. Every Nash Intelligence deployment maintains full governance, auditability, and data sovereignty, regardless of where the compute lives.</p>
</section>
<section class="relative mb-32 max-w-4xl mx-auto">
<div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-secondary -translate-x-1/2 opacity-20"></div>
<div class="space-y-24">
${stageCards}
</div>
</section>
<section class="mb-32">
<div class="bg-surface-container border border-outline-variant/10 rounded-2xl p-10 md:p-16 relative overflow-hidden">
<div class="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
<svg class="w-full h-full text-primary" fill="none" viewBox="0 0 200 200">
<path d="M0 200 L100 0 L200 200 Z" fill="currentColor"></path>
</svg>
</div>
<h2 class="font-headline-lg text-headline-lg mb-12 text-center text-on-surface">Adopt more capability over time</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
<div class="text-center">
<span class="material-symbols-outlined text-secondary text-4xl mb-4">verified_user</span>
<h4 class="font-headline-lg text-[20px] mb-2 text-on-surface">Control</h4>
<p class="font-body-md text-on-tertiary-container">From shared cloud governance to total hardware sovereignty.</p>
</div>
<div class="text-center">
<span class="material-symbols-outlined text-secondary text-4xl mb-4">database</span>
<h4 class="font-headline-lg text-[20px] mb-2 text-on-surface">Capacity</h4>
<p class="font-body-md text-on-tertiary-container">Linear scaling of organisational memory and agent compute.</p>
</div>
<div class="text-center">
<span class="material-symbols-outlined text-secondary text-4xl mb-4">hub</span>
<h4 class="font-headline-lg text-[20px] mb-2 text-on-surface">Reach</h4>
<p class="font-body-md text-on-tertiary-container">Expand from individual pilots to global enterprise deployment.</p>
</div>
</div>
</div>
</section>
<section class="mb-32">
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<h2 class="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-surface text-center mb-12">Where do you fit?</h2>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
${fitCards}
</div>
</div>
</section>
<section class="mb-32">
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div class="text-center mb-16">
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-4">The platform stays consistent across every deployment.</h2>
<p class="font-body-md text-on-tertiary-container">The Nash Intelligence OS provides identical capabilities whether running on cloud or rack.</p>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
${sharedCards}
</div>
</div>
</section>
<section class="mb-32">
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<h2 class="font-headline-lg text-headline-lg text-on-surface text-center mb-12">Infrastructure progression</h2>
<div class="overflow-x-auto">
<div class="min-w-[600px] space-y-4">
<div class="grid grid-cols-4 bg-surface-container-high text-on-surface p-4 rounded-t-xl font-label-mono text-label-mono uppercase tracking-widest border-b border-outline-variant/20">
<div class="pl-4">Module</div>
<div>Desktop</div>
<div>Team Rack</div>
<div>Enterprise</div>
</div>
${infraRows}
</div>
</div>
</div>
</section>
<section class="text-center py-20 bg-surface-container-high rounded-3xl relative overflow-hidden border border-outline-variant/10">
<div class="relative z-10 px-6">
<h2 class="font-display-lg text-headline-lg md:text-display-lg text-on-surface mb-6">Find the deployment option that fits your organisation.</h2>
<div class="flex flex-col sm:flex-row gap-4 justify-center">
<a class="bg-primary text-on-primary px-8 py-4 rounded font-label-mono text-label-mono font-bold uppercase tracking-widest hover:opacity-90 transition-all" href="mailto:hello@nashintelligence.ai">Book a conversation</a>
<a class="border border-outline-variant text-on-surface px-8 py-4 rounded font-label-mono text-label-mono font-bold uppercase tracking-widest hover:bg-surface-variant transition-all" href="mailto:hello@nashintelligence.ai">Explore governance</a>
</div>
</div>
<div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
<img alt="" class="w-full h-full object-cover mix-blend-overlay" src="/nash/images/img-nash-platfrom.png">
</div>
</section>`;
}

function pageHtml(page) {
  let html = `<!DOCTYPE html><html lang="en"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>${page.title}</title>
<meta name="description" content="${page.description}">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/favicon-light.png" type="image/png" sizes="32x32" media="(prefers-color-scheme: light)">
<link rel="icon" href="/favicon-dark.png" type="image/png" sizes="32x32" media="(prefers-color-scheme: dark)">
<link rel="apple-touch-icon" href="/apple-icon-light.png" sizes="180x180" media="(prefers-color-scheme: light)">
<link rel="apple-touch-icon" href="/apple-icon-dark.png" sizes="180x180" media="(prefers-color-scheme: dark)">
<script>
(function() {
  const stored = localStorage.getItem("nash-theme") || "system";
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const mode = stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
  document.documentElement.classList.toggle("dark", mode === "dark" || (mode === "system" && systemDark));
  document.documentElement.dataset.theme = mode;
})();
</script>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link rel="preload" href="/fonts/inter-400.ttf" as="font" type="font/ttf" crossorigin>
<link rel="preload" href="/fonts/hanken-700.ttf" as="font" type="font/ttf" crossorigin>
<link rel="preload" href="/fonts/geist-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/material-symbols-outlined-400.ttf" as="font" type="font/ttf" crossorigin>
<script id="tailwind-config">
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-primary": "rgb(var(--on-primary) / <alpha-value>)",
        "on-primary-fixed": "rgb(var(--on-primary-fixed) / <alpha-value>)",
        "background": "rgb(var(--background) / <alpha-value>)",
        "surface-container-low": "rgb(var(--surface-container-low) / <alpha-value>)",
        "tertiary": "rgb(var(--tertiary) / <alpha-value>)",
        "primary": "rgb(var(--primary) / <alpha-value>)",
        "on-secondary": "rgb(var(--on-secondary) / <alpha-value>)",
        "secondary-container": "rgb(var(--secondary-container) / <alpha-value>)",
        "surface-container-high": "rgb(var(--surface-container-high) / <alpha-value>)",
        "surface": "rgb(var(--surface) / <alpha-value>)",
        "on-background": "rgb(var(--on-background) / <alpha-value>)",
        "surface-variant": "rgb(var(--surface-variant) / <alpha-value>)",
        "outline": "rgb(var(--outline) / <alpha-value>)",
        "on-surface": "rgb(var(--on-surface) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--on-surface-variant) / <alpha-value>)",
        "surface-container": "rgb(var(--surface-container) / <alpha-value>)",
        "primary-container": "rgb(var(--primary-container) / <alpha-value>)",
        "surface-container-lowest": "rgb(var(--surface-container-lowest) / <alpha-value>)",
        "secondary": "rgb(var(--secondary) / <alpha-value>)",
        "error": "rgb(var(--error) / <alpha-value>)",
        "inverse-primary": "rgb(var(--inverse-primary) / <alpha-value>)",
        "on-tertiary-container": "rgb(var(--on-tertiary-container) / <alpha-value>)",
        "surface-container-highest": "rgb(var(--surface-container-highest) / <alpha-value>)",
        "outline-variant": "rgb(var(--outline-variant) / <alpha-value>)",
        "tertiary-container": "rgb(var(--tertiary-container) / <alpha-value>)"
      },
      borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" },
      spacing: { "margin-mobile": "16px", "container-max": "1440px", "margin-desktop": "64px", gutter: "24px", base: "8px" },
      fontFamily: { "label-mono": ["Geist"], "body-md": ["Inter"], "display-lg": ["Hanken Grotesk"], "headline-lg-mobile": ["Hanken Grotesk"], "headline-lg": ["Hanken Grotesk"] },
      fontSize: {
        "label-mono": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "display-lg": ["48px", { lineHeight: "56px", fontWeight: "700" }],
        "headline-lg-mobile": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "600" }]
      }
    }
  }
}
</script>
<style>
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url("/fonts/inter-400.ttf") format("truetype");
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-display: block;
  src: url("/fonts/inter-500.ttf") format("truetype");
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-display: block;
  src: url("/fonts/inter-600.ttf") format("truetype");
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-display: block;
  src: url("/fonts/inter-700.ttf") format("truetype");
}
@font-face {
  font-family: "Hanken Grotesk";
  font-style: normal;
  font-weight: 600;
  font-display: block;
  src: url("/fonts/hanken-600.ttf") format("truetype");
}
@font-face {
  font-family: "Hanken Grotesk";
  font-style: normal;
  font-weight: 700;
  font-display: block;
  src: url("/fonts/hanken-700.ttf") format("truetype");
}
@font-face {
  font-family: "Hanken Grotesk";
  font-style: normal;
  font-weight: 800;
  font-display: block;
  src: url("/fonts/hanken-800.ttf") format("truetype");
}
@font-face {
  font-family: "Geist";
  font-style: normal;
  font-weight: 400 500;
  font-display: block;
  src: url("/fonts/geist-latin.woff2") format("woff2");
}
@font-face {
  font-family: "Material Symbols Outlined";
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url("/fonts/material-symbols-outlined-400.ttf") format("truetype");
}
:root {
  color-scheme: light;
  --on-primary: 255 255 255;
  --on-primary-fixed: 255 255 255;
  --background: 248 250 252;
  --surface-container-low: 241 245 249;
  --tertiary: 79 83 85;
  --primary: 11 16 32;
  --on-secondary: 0 52 74;
  --secondary-container: 196 231 255;
  --surface-container-high: 226 232 240;
  --surface: 255 255 255;
  --on-background: 11 16 32;
  --surface-variant: 241 245 249;
  --outline: 101 116 139;
  --on-surface: 11 16 32;
  --on-surface-variant: 79 83 85;
  --surface-container: 255 255 255;
  --primary-container: 218 226 253;
  --surface-container-lowest: 248 250 252;
  --secondary: 0 120 162;
  --error: 186 26 26;
  --inverse-primary: 190 198 224;
  --on-tertiary-container: 79 83 85;
  --surface-container-highest: 203 213 225;
  --outline-variant: 203 213 225;
  --tertiary-container: 224 227 229;
  --glass-bg: rgba(255, 255, 255, 0.72);
  --glass-border: rgba(11, 16, 32, 0.08);
  --circuit-dot: rgba(11, 16, 32, 0.035);
  --glow-blue: rgba(0, 120, 162, 0.16);
}
.dark {
  color-scheme: dark;
  --on-primary: 40 48 68;
  --on-primary-fixed: 19 27 46;
  --background: 19 19 21;
  --surface-container-low: 27 27 29;
  --tertiary: 196 199 201;
  --primary: 190 198 224;
  --on-secondary: 0 53 74;
  --secondary-container: 0 166 224;
  --surface-container-high: 42 42 43;
  --surface: 19 19 21;
  --on-background: 228 226 228;
  --surface-variant: 53 52 54;
  --outline: 144 144 151;
  --on-surface: 228 226 228;
  --on-surface-variant: 198 198 205;
  --surface-container: 31 31 33;
  --primary-container: 15 23 42;
  --surface-container-lowest: 14 14 16;
  --secondary: 123 208 255;
  --error: 255 180 171;
  --inverse-primary: 86 94 116;
  --on-tertiary-container: 126 129 131;
  --surface-container-highest: 53 52 54;
  --outline-variant: 69 70 77;
  --tertiary-container: 21 24 26;
  --glass-bg: rgba(31, 31, 33, 0.72);
  --glass-border: rgba(144, 144, 151, 0.12);
  --circuit-dot: rgba(255, 255, 255, 0.035);
  --glow-blue: rgba(123, 208, 255, 0.15);
}
.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
.glow-blue { box-shadow: 0 0 15px var(--glow-blue); }
.glass-panel { background: var(--glass-bg); backdrop-filter: blur(20px); border: 1px solid var(--glass-border); }
.circuit-line { height: 1px; background: linear-gradient(90deg, transparent, rgb(var(--outline-variant) / 0.45), transparent); }
.circuit-bg { background-image: radial-gradient(circle at 2px 2px, var(--circuit-dot) 1px, transparent 0); background-size: 24px 24px; }
.mobile-menu-open #mobile-menu { display: block; }
.mobile-menu-open #mobile-menu-icon { display: none; }
.mobile-menu-open #mobile-menu-close { display: inline-block; }
</style>
</head>
<body class="circuit-bg bg-background text-on-background font-body-md selection:bg-secondary/30 selection:text-secondary overflow-x-hidden transition-colors duration-300">
<header class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10 shadow-sm">
<nav class="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 max-w-container-max mx-auto">
<a class="flex items-center gap-3" href="/">
<img alt="Nash Intelligence" class="h-10 w-10" src="/nash/icons/nash-intelligence-light.png">
<span class="font-display-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface tracking-tight">Nash Intelligence</span>
</a>
<div class="hidden md:flex items-center gap-8">
${nav(page.key)}
</div>
<div class="flex items-center gap-3">
${themeToggle()}
<a class="hidden sm:inline-flex bg-primary text-on-primary px-6 py-2.5 rounded hover:opacity-90 active:scale-95 transition-all font-label-mono text-label-mono uppercase tracking-widest" href="mailto:hello@nashintelligence.ai">Book a conversation</a>
<button class="md:hidden h-10 w-10 rounded border border-outline-variant/20 bg-surface-container-low hover:bg-surface-container-high transition-all flex items-center justify-center text-on-surface" id="mobile-menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
<span class="material-symbols-outlined text-[22px]" id="mobile-menu-icon">menu</span>
<span class="material-symbols-outlined text-[22px] hidden" id="mobile-menu-close">close</span>
</button>
</div>
</nav>
<div class="hidden md:hidden border-t border-outline-variant/10 bg-surface/95 backdrop-blur-md" id="mobile-menu">
<div class="px-margin-mobile py-4 flex flex-col gap-2">
${mobileNav(page.key)}
<a class="mt-2 bg-primary text-on-primary px-4 py-3 rounded text-center font-label-mono text-label-mono uppercase tracking-widest" href="mailto:hello@nashintelligence.ai">Book a conversation</a>
</div>
</div>
</header>
<main class="pt-20">
<section class="relative overflow-hidden py-24 md:py-32">
<div class="absolute inset-0 opacity-10">
<div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
<div class="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary to-transparent"></div>
</div>
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-16 items-center">
<div class="z-10">
<div class="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high border border-outline-variant rounded mb-6">
<span class="material-symbols-outlined text-secondary text-sm">${page.eyebrowIcon}</span>
<span class="font-label-mono text-label-mono text-secondary uppercase">${page.eyebrow}</span>
</div>
<h1 class="font-display-lg text-display-lg md:text-6xl text-on-surface mb-6 leading-tight">${page.h1}</h1>
<p class="font-body-md text-body-md text-on-surface-variant mb-10 max-w-xl">${page.intro}</p>
<div class="flex flex-wrap gap-4">
<a class="bg-secondary text-on-secondary px-8 py-4 rounded font-label-mono text-label-mono font-bold uppercase tracking-widest glow-blue hover:brightness-110 transition-all" href="mailto:hello@nashintelligence.ai">Book a conversation</a>
<a class="border border-outline-variant text-on-surface px-8 py-4 rounded font-label-mono text-label-mono font-bold uppercase tracking-widest hover:bg-surface-variant transition-all" href="#pillars">View pillars</a>
</div>
</div>
<div class="relative flex justify-center items-center min-h-[320px]">
<div class="absolute w-[120%] h-[120%] bg-secondary/5 blur-[120px] rounded-full"></div>
<img alt="${page.heroAlt}" class="relative z-10 w-full max-w-lg rounded-2xl shadow-2xl object-contain max-h-[420px]" src="${page.heroImage}">
</div>
</div>
</section>
<section class="py-20 bg-surface-container-lowest relative">
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
<div class="max-w-3xl mx-auto border-x border-outline-variant/10 px-8">
<span class="material-symbols-outlined text-error mb-4 text-3xl">${page.problemIcon}</span>
<h2 class="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">${page.problemTitle}</h2>
<p class="font-body-md text-body-md text-on-surface-variant text-xl italic leading-relaxed">"${page.problem}"</p>
</div>
</div>
</section>
<section class="py-24 relative overflow-hidden">
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div class="mb-16 flex items-end justify-between border-b border-outline-variant/20 pb-8">
<div>
<span class="font-label-mono text-label-mono text-primary uppercase block mb-2">Capabilities</span>
<h2 class="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">${page.capabilityTitle}</h2>
</div>
<div class="hidden md:block h-px w-1/3 bg-outline-variant/20 mb-4"></div>
</div>
<div class="grid md:grid-cols-3 gap-gutter">
${capabilityCards(page.capabilities)}
</div>
</div>
</section>
<section class="py-24 bg-surface-container-low" id="pillars">
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div class="mb-16">
<span class="font-label-mono text-label-mono text-secondary uppercase block mb-4">Pillars</span>
<h2 class="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">Nash Intelligence Pillars</h2>
<p class="font-body-md text-body-md text-on-surface-variant max-w-2xl">Each page uses the same design system and the local Nash images for hero and pillar visuals.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter">
${pillarGrid(page.key)}
</div>
</div>
</section>
<section class="py-24 bg-surface-container-lowest">
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div class="text-center mb-16">
<h2 class="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">${page.patternsTitle}</h2>
<p class="font-body-md text-body-md text-on-surface-variant">${page.patternsIntro}</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
${patternCards(page.patterns)}
</div>
</div>
</section>
${deployExtraSections(page)}
<section class="py-24 relative">
<div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div class="bg-surface border border-outline-variant/30 rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">
<div class="absolute inset-0 opacity-5 pointer-events-none">
<div class="grid grid-cols-12 h-full w-full">
<div class="border-r border-outline h-full"></div><div class="border-r border-outline h-full"></div><div class="border-r border-outline h-full"></div><div class="border-r border-outline h-full"></div><div class="border-r border-outline h-full"></div><div class="border-r border-outline h-full"></div><div class="border-r border-outline h-full"></div><div class="border-r border-outline h-full"></div><div class="border-r border-outline h-full"></div><div class="border-r border-outline h-full"></div><div class="border-r border-outline h-full"></div>
</div>
</div>
<div class="relative z-10 max-w-2xl mx-auto">
<h2 class="font-display-lg text-display-lg text-on-surface mb-8">${page.ctaTitle}</h2>
<p class="font-body-md text-body-md text-on-surface-variant mb-12 text-lg">${page.ctaCopy}</p>
<div class="flex flex-col md:flex-row gap-6 justify-center">
<a class="bg-primary text-on-primary-fixed px-10 py-5 rounded font-label-mono text-label-mono font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform" href="mailto:hello@nashintelligence.ai">Request a demo</a>
<a class="border border-outline text-on-surface px-10 py-5 rounded font-label-mono text-label-mono font-bold uppercase tracking-widest hover:bg-surface-variant transition-all" href="mailto:hello@nashintelligence.ai">Speak to an engineer</a>
</div>
</div>
</div>
</div>
</section>
</main>
<footer class="bg-surface-container-lowest border-t border-outline-variant/20 relative">
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter px-margin-mobile md:px-margin-desktop py-16 max-w-container-max mx-auto">
<div class="col-span-2">
<div class="flex items-center gap-3 mb-6">
<img alt="Nash" class="h-8 w-8" src="/nash/icons/nash-intelligence-light.png">
<span class="font-display-lg text-headline-lg text-on-surface">Nash</span>
</div>
<p class="font-body-md text-body-md text-on-tertiary-container max-w-xs mb-8">Secure, governed AI infrastructure for the modern enterprise.</p>
</div>
<div class="flex flex-col gap-4">
<h4 class="font-label-mono text-label-mono text-primary uppercase">Core</h4>
${navItems.map(([key, label, href]) => `<a class="font-label-mono text-label-mono ${key === page.key ? "text-primary" : "text-on-tertiary-container hover:text-secondary"} transition-colors" href="${href}">${label}</a>`).join("\n")}
</div>
<div class="flex flex-col gap-4">
<h4 class="font-label-mono text-label-mono text-primary uppercase">Trust</h4>
<a class="font-label-mono text-label-mono text-on-tertiary-container hover:text-secondary transition-colors" href="mailto:hello@nashintelligence.ai">Governance</a>
<a class="font-label-mono text-label-mono text-on-tertiary-container hover:text-secondary transition-colors" href="mailto:hello@nashintelligence.ai">Safety</a>
<a class="font-label-mono text-label-mono text-on-tertiary-container hover:text-secondary transition-colors" href="mailto:hello@nashintelligence.ai">Security</a>
</div>
<div class="flex flex-col gap-4">
<h4 class="font-label-mono text-label-mono text-primary uppercase">Company</h4>
<a class="font-label-mono text-label-mono text-on-tertiary-container hover:text-secondary transition-colors" href="mailto:hello@nashintelligence.ai">About</a>
<a class="font-label-mono text-label-mono text-on-tertiary-container hover:text-secondary transition-colors" href="mailto:hello@nashintelligence.ai">Contact</a>
</div>
<div class="col-span-full mt-12 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p class="font-label-mono text-label-mono text-on-tertiary-container">© 2024 Nash Intelligence. All rights reserved. Secure, governed AI infrastructure.</p>
<div class="flex gap-6">
<span class="font-label-mono text-[10px] text-tertiary/40">SYSTEM STATUS: OPERATIONAL</span>
<span class="font-label-mono text-[10px] text-tertiary/40">ENCRYPTION: AES-256-GCM</span>
</div>
</div>
</div>
</footer>
<script>
(function() {
  const modes = ["light", "dark", "system"];
  const labels = { light: "Theme: Light", dark: "Theme: Dark", system: "Theme: System" };
  const icons = { light: "light_mode", dark: "dark_mode", system: "desktop_windows" };
  const button = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-toggle-icon");
  const mobileButton = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  function currentMode() {
    const stored = localStorage.getItem("nash-theme") || "system";
    return modes.includes(stored) ? stored : "system";
  }

  function applyTheme(mode) {
    const useDark = mode === "dark" || (mode === "system" && media.matches);
    document.documentElement.classList.toggle("dark", useDark);
    document.documentElement.dataset.theme = mode;
    localStorage.setItem("nash-theme", mode);
    if (button && icon) {
      button.dataset.themeMode = mode;
      button.title = labels[mode];
      button.setAttribute("aria-label", labels[mode]);
      icon.textContent = icons[mode];
    }
  }

  applyTheme(currentMode());

  if (button) {
    button.addEventListener("click", function() {
      const mode = currentMode();
      applyTheme(modes[(modes.indexOf(mode) + 1) % modes.length]);
    });
  }

  media.addEventListener("change", function() {
    if (currentMode() === "system") {
      applyTheme("system");
    }
  });

  if (mobileButton && mobileMenu) {
    mobileButton.addEventListener("click", function() {
      const isOpen = document.documentElement.classList.toggle("mobile-menu-open");
      mobileButton.setAttribute("aria-expanded", String(isOpen));
      mobileButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });
  }
})();
</script>
</body></html>
`;

  if (page.key === "deploy") {
    html = html.replace(
      /<main class="pt-20">[\s\S]*?<\/main>/,
      `<main class="pt-32 pb-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">\n${deployExtraSections(page)}\n</main>`,
    );
  }

  return html;
}

mkdirSync(outputDir, { recursive: true });

for (const page of pages) {
  writeFileSync(join(outputDir, page.file), pageHtml(page));
}

console.log(`Generated ${pages.length} exact HTML pages from the shared platform design base.`);
