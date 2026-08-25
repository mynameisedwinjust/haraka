import logiicLogo from "@/assets/logiic logo.png";
import pipedriveLogo from "@/assets/Pipedrive  Logo.jpg.jpeg";
import salesforceLogo from "@/assets/Salesforce.jpeg";

/**
 * Central content source for the HARAKA website.
 * All public copy lives here so pages stay structural and content stays editable.
 * Nothing in this file may contain invented clients, statistics or testimonials.
 */

export const company = {
  name: "HARAKA",
  shortName: "HARAKA",
  descriptor: "Business & Technology Transformation",
  tagline: "Transforming Business. Enabling Growth.",
  promise:
    "HARAKA helps organizations transform, operate better and grow through strategy, technology and innovation.",
  email: "info@haraka.rw",
  website: "www.haraka.rw",
  whatsapp: "250783405745",
  addressLines: ["KG 1507 St, Kigali, Rwanda"],
  region: "Rwanda",
  hours: [
    { day: "Monday – Friday", time: "08:00 – 18:00 CAT" },
    { day: "Saturday", time: "09:00 – 13:00 CAT" },
    { day: "Sunday & public holidays", time: "Closed" },
  ],
  mapQuery: "Kigali, Rwanda",
  socials: [{ label: "LinkedIn", href: "https://www.linkedin.com/" }],
} as const;

/**
 * Structural placeholders only. These must NOT be replaced with invented
 * numbers — they stay as placeholders until the figures are verified.
 */
export const stats = [
  { value: "3", label: "Core Service Areas", subLabel: "Strategy · Technology · Implementation" },
  { value: "7+", label: "Industries We Serve", subLabel: "Financial Services · Healthcare · Retail · Manufacturing · Hospitality · Education · Real Estate" },
  { value: "10+", label: "Technology & Solution Partners", subLabel: "CRM · ERP · Cloud · Business Solutions" },
  { value: "1", label: "Accountable Partner", subLabel: "From business need to implementation" },
];

export type PracticeArea = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  capabilities: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "strategy-consulting",
    number: "01",
    title: "Strategy & Consulting",
    summary:
      "Help organizations make better decisions, improve performance and build sustainable growth.",
    capabilities: [
      "Business Strategy",
      "Business Transformation",
      "Business Process Improvement",
      "Growth Strategy",
      "Organizational Development",
      "Project Advisory",
    ],
  },
  {
    slug: "technology",
    number: "02",
    title: "Technology",
    summary:
      "Help organizations use technology to solve business problems and improve operations.",
    capabilities: [
      "Enterprise Solutions",
      "CRM",
      "ERP",
      "Business Applications",
      "Systems Integration",
      "Data & Analytics",
      "AI Solutions",
    ],
  },
  {
    slug: "digital-transformation",
    number: "03",
    title: "Digital Transformation",
    summary: "Help organizations modernize how they operate.",
    capabilities: [
      "Digital Strategy",
      "Process Digitization",
      "Workflow Automation",
      "Technology Implementation",
      "Digital Platforms",
      "Change & Adoption",
    ],
  },
  {
    slug: "business-growth",
    number: "04",
    title: "Business Growth",
    summary:
      "Help organizations improve their commercial performance and identify new opportunities.",
    capabilities: [
      "Sales Transformation",
      "CRM & Sales Operations",
      "Market Expansion",
      "Customer Experience",
      "Revenue Growth",
      "Partnerships & Market Development",
    ],
  },
];

export type Industry = { slug: string; name: string; priority: boolean };

export const industries: Industry[] = [
  { slug: "healthcare", name: "Healthcare", priority: true },
  { slug: "financial-services", name: "Financial Services", priority: true },
  { slug: "retail-distribution", name: "Retail & Distribution", priority: true },
  { slug: "manufacturing", name: "Manufacturing", priority: true },
  { slug: "hospitality", name: "Hospitality", priority: true },
  { slug: "education", name: "Education", priority: true },
  { slug: "real-estate", name: "Real Estate", priority: true },
  { slug: "agriculture", name: "Agriculture", priority: true },
  { slug: "government", name: "Government", priority: false },
  { slug: "ngos", name: "NGOs & Development Organizations", priority: false },
  { slug: "construction", name: "Construction", priority: false },
  { slug: "logistics", name: "Logistics", priority: false },
  { slug: "telecom", name: "Telecommunications", priority: false },
  { slug: "energy", name: "Energy & Utilities", priority: false },
];

export const priorityIndustries = industries.filter((i) => i.priority);
export const additionalIndustries = industries.filter((i) => !i.priority);

export type SolutionGroup = {
  slug: string;
  navLabel: string;
  title: string;
  summary: string;
  items: { title: string; description: string }[];
};

export const solutionGroups: SolutionGroup[] = [
  {
    slug: "business-management",
    navLabel: "Business Solutions",
    title: "Business Management",
    summary: "Run finance, operations and the core of the business on one dependable foundation.",
    items: [
      { title: "ERP Solutions", description: "End-to-end enterprise resource planning solutions that unify finance, supply chain, and operations into a single source of truth." },
      { title: "Business Management Systems", description: "Integrated platforms designed to streamline day-to-day business processes, improve visibility, and scale with organizational growth." },
      { title: "Finance & Operations", description: "Financial management and operational optimization tools that provide real-time insights, automate workflows, and ensure compliance." },
      { title: "Customer Experience", description: "Solutions focused on tracking customer journeys, optimizing touchpoints, and ensuring seamless service delivery across all channels." }
    ],
  },
  {
    slug: "customer-and-sales",
    navLabel: "Customer & Sales",
    title: "Customer & Sales",
    summary: "Win, serve and retain customers with commercial processes that hold together.",
    items: [
      { title: "CRM", description: "Comprehensive customer relationship management systems that centralize customer data, track interactions, and drive personalized engagement." },
      { title: "Sales Management", description: "Tools to automate pipelines, forecast revenue accurately, and empower sales teams to close deals faster and more efficiently." },
      { title: "Customer Experience", description: "Omnichannel support and engagement platforms designed to build loyalty, resolve issues quickly, and enhance client satisfaction." },
      { title: "Procurement & Supply Chain", description: "End-to-end supply chain visibility and procurement automation to reduce costs, manage vendors, and ensure reliable delivery." }
    ],
  },
  {
    slug: "industry-solutions",
    navLabel: "Industry Solutions",
    title: "Industry Solutions",
    summary: "Solutions shaped around the operating reality of specific sectors.",
    items: [
      { title: "Healthcare Management", description: "Specialized clinical and administrative systems that improve patient care, streamline operations, and meet strict healthcare compliance standards." },
      { title: "Hospitality Management", description: "Property, booking, and guest experience solutions designed to elevate service quality and optimize revenue for hotels and resorts." },
      { title: "Retail & Distribution", description: "Point of sale, inventory management, and omnichannel retail systems that unify the in-store and online customer experience." },
      { title: "Manufacturing", description: "Production planning, quality control, and inventory tracking systems built for the complex demands of modern manufacturing environments." },
      { title: "Education", description: "Student information systems, learning management, and administrative tools tailored for schools, universities, and training institutions." },
      { title: "Property Management", description: "Lease administration, facility maintenance, and tenant portal solutions for residential, commercial, and mixed-use property portfolios." }
    ],
  },
  {
    slug: "data-and-intelligence",
    navLabel: "Data & Intelligence",
    title: "Data & Intelligence",
    summary: "Turn operational data into decisions, and repetitive work into automated work.",
    items: [
      { title: "Business Intelligence", description: "Advanced analytics and visualization platforms that turn raw organizational data into actionable, strategic business insights." },
      { title: "Data Analytics", description: "Deep-dive data processing and modeling services to uncover trends, predict outcomes, and optimize performance across departments." },
      { title: "AI Solutions", description: "Applied artificial intelligence for decision support, natural language processing, and advanced pattern recognition tailored to business needs." },
      { title: "Intelligent Automation", description: "Robotic process automation and workflow intelligence that eliminates repetitive tasks and dramatically increases operational efficiency." }
    ],
  },
];

export type Product = {
  slug: string;
  name: string;
  summary: string;
  tier: "flagship" | "core" | "emerging";
};

export const productsIntro = "Technology designed around real business needs.";

export const products: Product[] = [
  {
    slug: "haraka-erp",
    name: "HARAKA ERP",
    summary: "Finance, operations and business management in one integrated system.",
    tier: "flagship",
  },
  {
    slug: "haraka-crm",
    name: "HARAKA CRM",
    summary: "Customer, pipeline and sales management for commercial teams.",
    tier: "flagship",
  },
  {
    slug: "haraka-pos",
    name: "HARAKA POS",
    summary: "Point of sale for retail and distribution operations.",
    tier: "core",
  },
  {
    slug: "haraka-marketplace",
    name: "HARAKA Marketplace",
    summary: "A commerce platform connecting sellers, buyers and fulfilment.",
    tier: "core",
  },
  {
    slug: "healthcare-management-system",
    name: "Healthcare Management System",
    summary: "Clinical and administrative operations for healthcare providers.",
    tier: "core",
  },
  {
    slug: "property-management-system",
    name: "Property Management System",
    summary: "Lease, billing and facilities management for property portfolios.",
    tier: "emerging",
  },
  {
    slug: "ai-business-solutions",
    name: "AI Business Solutions",
    summary: "Applied AI for decision support, automation and business insight.",
    tier: "emerging",
  },
];

export const about = {
  paragraphs: [
    "HARAKA is a business and technology transformation firm helping organizations improve performance, modernize operations and achieve sustainable growth.",
    "We combine business expertise, technology and industry knowledge to design and implement practical solutions that create measurable value.",
    "HARAKA is building its capabilities across Rwanda and East Africa, working with clients and specialist partners to deliver solutions aligned with real business needs.",
  ],
};

export const approach = [
  { step: "01", title: "Discover", description: "Understand the business, challenges and objectives." },
  { step: "02", title: "Design", description: "Develop the right strategy and solution." },
  { step: "03", title: "Implement", description: "Put the solution into operation." },
  { step: "04", title: "Transform", description: "Support adoption and organizational change." },
  { step: "05", title: "Grow", description: "Measure results and identify opportunities for continuous improvement." },
];

import nzizaImage from "@/assets/nziza_kevin.jpg";
import rurangirwaImage from "@/assets/rurangirwa_freddy.png";
import abijuruImage from "@/assets/abijuru_ariane.jpg";
import gasaroImage from "@/assets/gasaro_joan.jpg";
import mupenziImage from "@/assets/MUPENZI.jpg.jpeg";
import bwimbaImage from "@/assets/bwimba_victor.jpg";
import mwizaImage from "@/assets/MWIZA .jpg.jpeg";

export const whyHaraka = [
  { title: "Business Understanding", description: "We start with the business problem, not the technology." },
  { title: "Practical Technology", description: "We select and implement technology based on real organizational needs." },
  { title: "Local Knowledge", description: "We understand the African business environment." },
  { title: "Execution", description: "We focus on turning strategy into measurable results." },
];

export const leadership = [
  { name: "NZIZA Kevin", role: "Founder & CEO", expertise: "Vision, strategy, sales, client relationships, fundraising", image: nzizaImage },
  { name: "RURANGIRWA Freddy", role: "Co-Founder & CTO", expertise: "Technical architecture, engineering, product development, tech partnerships", image: rurangirwaImage },
  { name: "ABIJURU Ariane", role: "Head of Client Solutions", expertise: "Business consulting and project delivery, single point of contact for clients", image: abijuruImage },
  { name: "GASARO Joan", role: "Head of Operations & Finance", expertise: "Day-to-day operations, budgeting, contracts, compliance", image: gasaroImage },
  { name: "MUPENZI Yves", role: "Head of Growth (Sales, Marketing & Partnerships)", expertise: "Client acquisition, brand, and partnerships", image: mupenziImage },
  { name: "BWIMBA Victor", role: "Head of Digital Products", expertise: "Owns HARAKA ERP, CRM, POS and Marketplace as products, separate from client delivery", image: bwimbaImage },
  { name: "MWIZA Rachel", role: "Head of People & Culture", expertise: "Hiring, onboarding, culture", image: mwizaImage },
];


export const ecosystem = {
  statement:
    "HARAKA works with technology providers, specialists and industry organizations to bring the right capabilities to each engagement.",
  categories: ["Technology", "Cloud", "AI & Data", "Industry Expertise", "Implementation", "Business Process"],
  /** Capability relationships — not clients, not endorsements. */
  relationshipGroups: [
    {
      title: "Technology Partners",
      items: ["Odoo", "Pipedrive", "Logiic"]
    },
    {
      title: "Business & Solution Partners",
      items: ["MobiCell"]
    }
  ],
};

export type EcosystemPartner = { name: string; logo: string };

/**
 * Ecosystem partner logos shown in the Our Ecosystem marquee.
 * These are technology providers, specialists and delivery relationships —
 * NOT clients and NOT endorsements.
 * To add a partner, append one entry here. Nothing else needs to change.
 */
export const ecosystemPartners: EcosystemPartner[] = [
  { name: "Logiic", logo: logiicLogo },
  { name: "Pipedrive", logo: pipedriveLogo },
  { name: "Salesforce", logo: salesforceLogo },
  { name: "Odoo", logo: "https://cdn.worldvectorlogo.com/logos/odoo.svg" },
];


export const insightsMeta = {
  title: "HARAKA INSIGHT",
  description: "Perspectives on Business & Technology in Rwanda & East Africa",
  categories: ["Business", "Technology", "Transformation", "Industries", "Africa", "Innovation", "Partnerships"],
};

export type Insight = { slug: string; title: string; category: string; excerpt: string; tags: string[] };

export const insights: Insight[] = [
  // ── BUSINESS (3) ───────────────────────────────────────────────────────────
  {
    slug: "how-rwandan-businesses-can-scale-beyond-the-local-market",
    title: "How Rwandan Businesses Can Scale Beyond the Local Market",
    category: "Business",
    excerpt:
      "Most businesses in Rwanda reach a point where the local market is no longer enough — not because the business is failing, but because it has outgrown its initial boundaries. Moving into Kenya, Tanzania, Uganda or beyond is not simply a question of ambition; it requires deliberate planning across commercial strategy, operations, compliance and technology. Businesses that succeed at regional expansion are those that invest early in scalable systems — CRM platforms that manage distributed sales teams, ERP software that consolidates financials across entities, and reporting tools that give leadership visibility across markets. Before crossing a border, the priority questions are: Is your brand proposition clear enough to compete outside your home market? Do your internal systems support multi-currency, multi-entity operations? Is your sales function structured to acquire and retain clients remotely? Companies that answer yes to all three are ready to grow. Those who cannot are better served by getting the foundation right first.",
    tags: ["Growth", "Market Expansion", "Strategy"],
  },
  {
    slug: "sales-is-not-just-a-department-its-a-system",
    title: "Sales Is Not Just a Department — It Is a System",
    category: "Business",
    excerpt:
      "The most common commercial failure we see in growing businesses is not a shortage of leads or product quality — it is an absence of sales infrastructure. A business can have excellent people and a strong offering and still lose deals consistently because there is no defined pipeline, no shared visibility, no structured follow-up, and no data informing where to focus. Building a commercial system means defining how leads are captured and qualified, how proposals are structured and tracked, how pipeline stages are managed, and how performance is measured and improved. CRM platforms like Pipedrive formalize this process, but the platform alone is not the solution. The discipline, process design, and management habits that sit around the tool are what drive results. Businesses that treat sales as a system — not a personality — grow more predictably and scale more reliably.",
    tags: ["Sales", "CRM", "Operations"],
  },
  {
    slug: "the-sme-growth-ceiling-why-internal-systems-hold-businesses-back",
    title: "The SME Growth Ceiling: Why Internal Systems Hold Businesses Back",
    category: "Business",
    excerpt:
      "Small and medium-sized businesses across East Africa routinely reach a growth ceiling that has nothing to do with market demand, product quality, or talent. The ceiling is internal — created by operational systems that cannot scale alongside the business. When invoicing is done manually, customer records are scattered across spreadsheets, stock is managed by instinct, and reporting requires days of manual consolidation, leadership cannot make fast, accurate decisions. Growth stalls not because the opportunity disappears but because the organization cannot handle its own complexity. The solution is not to hire more people to manage the chaos — it is to replace the chaos with systems. Integrated ERP and CRM platforms eliminate the operational drag that prevents sustainable growth, giving businesses the infrastructure they need to move from survival mode into genuine expansion.",
    tags: ["SME", "Operations", "Scaling"],
  },

  // ── TECHNOLOGY (2) ─────────────────────────────────────────────────────────
  {
    slug: "how-ai-is-changing-business-operations-in-africa",
    title: "How AI Is Changing Business Operations in Africa",
    category: "Technology",
    excerpt:
      "Artificial intelligence is no longer a concept confined to Silicon Valley laboratories or Fortune 500 research budgets. It is becoming a practical business tool accessible to mid-sized companies across Africa — and its impact on daily operations is already visible. Businesses are using AI to automate customer service through intelligent chatbots that handle routine enquiries around the clock. Sales teams are using AI-powered CRM features to score leads, forecast pipeline outcomes, and prioritize which accounts to focus on. Finance teams are using AI to flag anomalies in expense reports, automate invoice matching, and generate narrative summaries of financial performance. Across operations, AI is reducing the time cost of repetitive tasks — report compilation, data entry, scheduling, compliance checks — freeing people to focus on work that requires judgment. The businesses that begin integrating AI tools now, even in limited and specific ways, will build a capability advantage that grows compounding over time.",
    tags: ["AI", "Automation", "Analytics"],
  },
  {
    slug: "erp-and-crm-the-two-systems-every-growing-business-eventually-needs",
    title: "ERP and CRM: The Two Systems Every Growing Business Eventually Needs",
    category: "Technology",
    excerpt:
      "Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) are the two foundational technology platforms that separate businesses capable of scaling from those that plateau. ERP systems — such as Odoo — consolidate the operational core of a business: accounting, inventory, procurement, HR, and production. They replace disconnected spreadsheets and manual processes with a single source of operational truth, giving management accurate, real-time data to make faster and better decisions. CRM systems — such as Pipedrive — manage the revenue side: leads, pipeline, client relationships, proposals, and commercial performance. Together, these two systems create an infrastructure that allows a business to grow in revenue without growing proportionally in administrative burden. The question for most businesses is not whether they need these platforms — it is when to implement them. The answer is almost always: earlier than you think.",
    tags: ["ERP", "CRM", "Cloud"],
  },

  // ── TRANSFORMATION (2) ─────────────────────────────────────────────────────
  {
    slug: "digital-transformation-is-more-than-moving-from-paper-to-software",
    title: "Digital Transformation Is More Than Moving From Paper to Software",
    category: "Transformation",
    excerpt:
      "The most common misunderstanding about digital transformation is that it is primarily a technology purchase. A business buys a system, migrates its data, and declares itself transformed. In practice, this approach almost always fails — not because the technology is wrong, but because the surrounding work was never done. Real transformation requires redesigning the processes that the technology will support. It requires training people not just to use new software but to work differently. It requires integrating new systems with the operational reality of the business, not simply digitizing the old way of doing things. And it requires measuring results — tracking whether the change is delivering the efficiency, accuracy, and speed it was meant to achieve. Organizations that treat transformation as a technology project routinely underperform. Those that treat it as a business change programme — using technology as the enabling layer — achieve lasting, compounding improvements in how they operate.",
    tags: ["Transformation", "Change Management", "Systems Integration"],
  },
  {
    slug: "the-real-cost-of-staying-manual",
    title: "The Real Cost of Staying Manual",
    category: "Transformation",
    excerpt:
      "Manual processes carry a cost that rarely appears on any financial statement, but is felt across the business every single day. Every hour a finance team spends reconciling spreadsheets manually is an hour not spent on analysis. Every time a sales person updates a pipeline in a document rather than a system, management loses visibility into what is actually happening commercially. Every time a stock discrepancy is discovered at month end rather than in real time, the business is operating on inaccurate information. These are not minor inefficiencies — they are structural drags on speed, accuracy, and decision-making quality. The cost of staying manual compounds over time: mistakes accumulate, reporting delays grow, and the organization's ability to respond to change slows down. Automating and digitizing core workflows is not a luxury for businesses at a certain scale. It is a prerequisite for competing effectively in a faster-moving market.",
    tags: ["Automation", "Operations", "Modernization"],
  },

  // ── INDUSTRIES (2) ─────────────────────────────────────────────────────────
  {
    slug: "how-technology-is-transforming-manufacturing-in-africa",
    title: "How Technology Is Transforming Manufacturing in Africa",
    category: "Industries",
    excerpt:
      "Manufacturing in Africa is undergoing a structural shift driven by the adoption of digital tools that were, until recently, accessible only to large multinationals. Today, mid-sized manufacturers across East Africa are implementing ERP systems to manage production schedules, track raw material inventory in real time, automate procurement workflows, and generate accurate cost-of-production reports. The results are significant: reduced waste, faster production cycles, tighter supplier management, and financial visibility that allows businesses to price more accurately and tender more competitively. Beyond ERP, manufacturers are beginning to adopt IoT sensors for equipment monitoring, analytics platforms for yield optimization, and AI tools for demand forecasting. The businesses leading this transition are not the largest — they are the most strategically intentional. Investing in the right operational technology now is the difference between competing regionally and being left behind by those who did.",
    tags: ["Manufacturing", "ERP", "Analytics"],
  },
  {
    slug: "why-financial-services-firms-must-prioritize-digital-infrastructure",
    title: "Why Financial Services Firms Must Prioritize Digital Infrastructure",
    category: "Industries",
    excerpt:
      "Financial services businesses — whether microfinance institutions, insurance providers, SACCOs, or commercial lenders — are sitting on some of the most valuable and most underutilized data assets in the African economy. Customer transaction histories, repayment patterns, credit behaviors, and product usage data represent an extraordinary source of intelligence that most organizations are failing to exploit. The reason is not a lack of data — it is a lack of the digital infrastructure to capture, organize, and analyze it systematically. Businesses that invest in integrated financial management systems, customer data platforms, and reporting infrastructure gain a decisive advantage: the ability to understand their portfolio in real time, identify risk early, design better products, and serve clients more effectively. In a sector where trust and reliability are the primary competitive currency, operational excellence is not optional — it is the product.",
    tags: ["Financial Services", "Analytics", "Cloud"],
  },

  // ── AFRICA (2) ─────────────────────────────────────────────────────────────
  {
    slug: "why-east-africa-is-becoming-a-strategic-growth-market",
    title: "Why East Africa Is Becoming a Strategic Growth Market",
    category: "Africa",
    excerpt:
      "East Africa is not simply a developing market with growth potential — it is one of the most consequential commercial regions on the continent, and its trajectory over the next decade will reshape how global and regional businesses think about expansion. Rwanda, Kenya, Uganda and Tanzania together represent a combined market of over 200 million people, a rapidly expanding middle class, high mobile penetration, and governments actively investing in digital infrastructure and business enabling environments. Rwanda in particular has become a reference point for how to build a competitive, digitally-enabled economy: a sophisticated financial sector, a clear regulatory framework, world-class connectivity, and a business culture increasingly oriented toward scale and professionalism. For businesses already operating in the region, the opportunity is not just to serve existing demand but to position early in markets that are growing faster than the infrastructure that currently serves them.",
    tags: ["East Africa", "Rwanda", "Growth"],
  },
  {
    slug: "africas-advantage-building-without-legacy-baggage",
    title: "Africa's Advantage: Building Without Legacy Baggage",
    category: "Africa",
    excerpt:
      "One of the most underappreciated competitive advantages that African businesses hold over their counterparts in Europe and North America is the absence of legacy technology debt. Established businesses in mature markets are often trapped by systems implemented decades ago — aging infrastructure that is expensive to maintain, difficult to integrate with modern platforms, and impossible to replace without disrupting operations. African businesses have no such constraint. A retail chain in Kigali can implement a cloud-native ERP platform without migrating off a 20-year-old on-premise system. A financial services firm in Nairobi can deploy an AI-powered analytics platform without untangling years of incompatible data infrastructure. The ability to start with modern, scalable, cloud-first technology from the ground up is a structural advantage — and businesses that recognize it and move decisively will define the next generation of African market leaders.",
    tags: ["Cloud", "Modernization", "Africa"],
  },

  // ── INNOVATION (2) ─────────────────────────────────────────────────────────
  {
    slug: "turning-business-problems-into-scalable-digital-solutions",
    title: "Turning Business Problems Into Scalable Digital Solutions",
    category: "Innovation",
    excerpt:
      "The best digital products are not born from technology for its own sake — they are built by organizations that start with a clearly defined business problem and design backward to a solution. The process begins with diagnosis: understanding the specific friction, inefficiency, or unmet need that the product will address. It continues with design: mapping the user experience, the operational workflow, and the data architecture around the problem rather than around an assumed technology. From there, it moves into build: developing, testing, and refining with real users until the solution reliably solves the problem it was designed for. Finally, it reaches scale: the discipline of growing adoption, improving reliability, and expanding the product's value over time. Organizations that follow this sequence — problem first, technology second — build products that people actually use and that deliver genuine competitive advantage. Those that reverse it build expensive tools that solve problems nobody had.",
    tags: ["Innovation", "AI", "Automation"],
  },
  {
    slug: "the-next-wave-of-african-business-innovation",
    title: "The Next Wave of African Business Innovation Will Be Industry-Specific",
    category: "Innovation",
    excerpt:
      "The first wave of African technology innovation was largely horizontal — mobile money, ride-hailing, e-commerce platforms that worked across industries. The next wave is becoming increasingly vertical: industry-specific solutions designed for the operational realities of healthcare providers, agricultural supply chains, manufacturing floors, financial cooperatives, and logistics networks. These vertically-focused innovations are more difficult to build than general platforms — they require deep domain knowledge, patience with complex stakeholder environments, and a willingness to engage with the messiness of real operations. But they are also more defensible, more impactful, and more likely to create lasting commercial value. The businesses and builders that invest in understanding the specific, unglamorous problems of a particular industry — and design technology that solves them precisely — will define the next chapter of African business innovation.",
    tags: ["Innovation", "Fintech", "Digital Products"],
  },

  // ── PARTNERSHIPS (1) ───────────────────────────────────────────────────────
  {
    slug: "why-strategic-technology-partnerships-matter-for-business-growth",
    title: "Why Strategic Technology Partnerships Matter for Business Growth",
    category: "Partnerships",
    excerpt:
      "A business does not need to build every capability itself to be competitive — and in most cases, attempting to do so is a strategic mistake. The organizations that grow most efficiently are those that identify what they do exceptionally well, and access everything else through the right partnerships. In the technology context, this means working with implementation partners who bring expertise in specific platforms — ERP systems, CRM tools, cloud infrastructure, data analytics — rather than attempting to develop that expertise in-house from scratch. The value of a well-structured technology partnership extends beyond access to a platform. A partner with deep implementation experience brings proven methodologies, configuration knowledge, integration expertise, and post-go-live support that a business building these capabilities independently would take years to develop. The right technology partners do not just sell software — they transfer knowledge, reduce implementation risk, and accelerate the business outcomes that the technology was purchased to achieve.",
    tags: ["Partnerships", "Strategy", "Implementation"],
  },
];

export const insightTags = Array.from(new Set(insights.flatMap((post) => post.tags))).sort();


export const careers = {
  headline: "Build What's Next.",
  copy: "Join HARAKA and help organizations across Africa use technology, innovation and better ways of working to create lasting growth.",
  openings: [] as { title: string; type: string; location: string }[],
};

export const contact = {
  headline: "Let's Talk",
  copy: "Whether you are looking to transform your operations, implement technology, improve performance or explore a new opportunity, talk to HARAKA.",
  primaryCta: "Start a Conversation",
  secondaryCta: "Contact Us",
};

/**
 * DRAFT CONTENT — NOT FOR PUBLICATION.
 * No testimonial may be published without explicit written client permission.
 * `testimonialsPublished` must stay false until real, approved quotes exist.
 */
export const testimonialsPublished = false;

export const testimonials = [
  {
    quote: "[Add real client testimonial]",
    role: "[Role]",
    org: "[Client organization type, location]",
    draft: true,
  },
  {
    quote: "[Add real client testimonial]",
    role: "[Role]",
    org: "[Client organization type, location]",
    draft: true,
  },
];
