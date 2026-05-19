import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = join(process.cwd(), "src", "exact-html");

const routes = {
  platform: "/",
  edge: "/edge/",
  mind: "/mind/",
  axis: "/axis/",
  useCases: "/use-cases/",
};

const navItems = [
  ["platform", "Platform", routes.platform],
  ["edge", "Edge", routes.edge],
  ["mind", "Mind", routes.mind],
  ["axis", "Axis", routes.axis],
  ["useCases", "Use Cases", routes.useCases],
];

const pillarCards = [
  {
    key: "mind",
    title: "Nash Mind",
    label: "Memory",
    href: routes.mind,
    image: "/nash/icons/nash-mind.png",
    copy: "Structured organisational knowledge, evidence, relationships, policy context and decision history for governed AI.",
  },
  {
    key: "axis",
    title: "Nash Axis",
    label: "Orchestration",
    href: routes.axis,
    image: "/nash/icons/nash-axis.png",
    copy: "The control plane for agents, approvals, workflow routing, human checkpoints and auditable action chains.",
  },
  {
    key: "edge",
    title: "Nash Edge",
    label: "Private Compute",
    href: routes.edge,
    image: "/nash/icons/nash-edge.png",
    copy: "Private AI deployment close to your data, infrastructure, users and operational boundaries.",
  },
  {
    key: "agent",
    title: "Nash Agent",
    label: "Execution",
    href: routes.platform,
    image: "/nash/icons/nash-agent.png",
    copy: "Governed specialist agents for repeatable business work across operations, proposals, support and analysis.",
  },
  {
    key: "os",
    title: "Nash OS",
    label: "Control",
    href: routes.platform,
    image: "/nash/icons/nash-os.png",
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
      ["03 Governed Use", "Serve Context", "Provide agents with approved context and auditable citations for high-stakes work.", "/nash/icons/nash-os.png"],
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
    heroImage: "/nash/icons/nash-axis-dark.png",
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
      ["01 Request", "Interpret Work", "Understand the incoming request, required context and sensitivity of the action.", "/nash/icons/nash-agent.png"],
      ["02 Assign", "Coordinate Agents", "Route subtasks across agents and humans with role boundaries and permission checks.", "/nash/icons/nash-axis.png"],
      ["03 Record", "Approve And Audit", "Capture approvals, outputs and final state in a durable audit trail.", "/nash/icons/nash-os.png"],
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
      ["01 Proposal Draft", "Proposal Support", "Retrieve historical context, generate drafts, check compliance and pause for review.", "/nash/icons/nash-mind.png"],
      ["02 Operations", "Workflow Automation", "Coordinate requests across agents, systems and human approvals.", "/nash/icons/nash-axis.png"],
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

function pageHtml(page) {
  return `<!DOCTYPE html><html class="dark" lang="en"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>${page.title}</title>
<meta name="description" content="${page.description}">
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Hanken+Grotesk:wght@600;700;800&amp;family=Geist:wght@400;500&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script id="tailwind-config">
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-primary": "#283044", "on-primary-fixed": "#131b2e", "background": "#131315", "surface-container-low": "#1b1b1d",
        "tertiary": "#c4c7c9", "primary": "#bec6e0", "on-secondary": "#00354a", "secondary-container": "#00a6e0",
        "surface-container-high": "#2a2a2b", "surface": "#131315", "on-background": "#e4e2e4", "surface-variant": "#353436",
        "outline": "#909097", "on-surface": "#e4e2e4", "on-surface-variant": "#c6c6cd", "surface-container": "#1f1f21",
        "primary-container": "#0f172a", "surface-container-lowest": "#0e0e10", "secondary": "#7bd0ff",
        "error": "#ffb4ab", "inverse-primary": "#565e74", "on-tertiary-container": "#7e8183", "surface-container-highest": "#353436",
        "outline-variant": "#45464d", "tertiary-container": "#15181a"
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
.material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
.glow-blue { box-shadow: 0 0 15px rgba(123, 208, 255, 0.15); }
.glass-panel { background: rgba(31, 31, 33, 0.7); backdrop-filter: blur(20px); border: 1px solid rgba(144, 144, 151, 0.1); }
.circuit-line { height: 1px; background: linear-gradient(90deg, transparent, rgba(144, 144, 151, 0.2), transparent); }
</style>
</head>
<body class="bg-background text-on-background font-body-md selection:bg-secondary/30 selection:text-secondary overflow-x-hidden">
<header class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10 shadow-sm">
<nav class="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 max-w-container-max mx-auto">
<a class="flex items-center gap-3" href="/">
<img alt="Nash Intelligence" class="h-10 w-10" src="/nash/icons/nash-intelligence-dark.png">
<span class="font-display-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface tracking-tight">Nash Intelligence</span>
</a>
<div class="hidden md:flex items-center gap-8">
${nav(page.key)}
</div>
<a class="hidden sm:inline-flex bg-primary text-on-primary px-6 py-2.5 rounded hover:opacity-90 active:scale-95 transition-all font-label-mono text-label-mono uppercase tracking-widest" href="mailto:hello@nashintelligence.ai">Book a conversation</a>
</nav>
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
<img alt="Nash" class="h-8 w-8" src="/nash/icons/nash-intelligence-dark.png">
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
</body></html>
`;
}

mkdirSync(outputDir, { recursive: true });

for (const page of pages) {
  writeFileSync(join(outputDir, page.file), pageHtml(page));
}

console.log(`Generated ${pages.length} exact HTML pages from the shared platform design base.`);
