export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'bullets'; items: string[] }

export interface CaseStudySection {
  heading: string
  blocks: ContentBlock[]
}

export interface CaseStudyData {
  context: CaseStudySection
  role: CaseStudySection
  approach: CaseStudySection
  build?: CaseStudySection
  results: CaseStudySection
}

export const caseStudies: Record<string, CaseStudyData> = {

  /* ── HEALTHCARE BUYER INTELLIGENCE ── */
  'healthcare-buyer-intelligence': {
    context: {
      heading: 'The situation',
      blocks: [
        { type: 'paragraph', text: 'A Fortune 10 healthcare technology organization was preparing for a major product launch targeting large health systems and integrated delivery networks. The commercial team understood the product well, but they lacked a shared framework for understanding the organizations they were selling into. Different sales reps approached the same accounts with completely different narratives, and the company had no unified language for describing the enterprise buying committee.' },
        { type: 'paragraph', text: 'In practice, this meant deals were progressing inconsistently. One rep might pitch primarily to IT leadership, another to revenue cycle leaders, and another to clinical stakeholders. Even when conversations went well, proposals often stalled because the broader buying committee had never been mapped out. A CIO might support the solution while a CFO questioned the ROI, or operations leaders might resist implementation because the operational implications had never been addressed.' },
        { type: 'paragraph', text: 'The challenge wasn\'t a lack of data. The organization had access to industry research, analyst reports, and internal sales feedback. The real problem was synthesis. None of that information had been translated into a practical framework that a sales rep could use before a call or while navigating a complex enterprise deal.' },
      ],
    },
    role: {
      heading: 'What I owned',
      blocks: [
        { type: 'paragraph', text: 'I came in as a GTM consultant with a clear mandate: build the buyer intelligence infrastructure from the ground up and turn it into something the commercial team could actually use.' },
        { type: 'paragraph', text: 'That meant designing the research methodology, defining the enterprise segmentation model, building the persona framework, and translating everything into practical sales enablement materials. I owned the entire process end-to-end — from the initial research plan through the final training materials used by the sales organization.' },
        { type: 'paragraph', text: 'In addition to producing the analysis itself, I built the internal training that introduced the framework to the sales team and explained how to apply it in real deals. The goal wasn\'t simply to produce a research document. The goal was to give the organization a shared operating model for understanding how healthcare enterprise purchasing decisions actually work.' },
      ],
    },
    approach: {
      heading: 'How I built it',
      blocks: [
        { type: 'paragraph', text: 'I began by constructing a segmentation model for the four major enterprise healthcare customer types the company targeted: Academic Health Systems, Integrated Delivery Networks (IDNs), Management Services Organizations (MSOs), and Community Hospital Groups.' },
        { type: 'paragraph', text: 'For each segment, I mapped the full context in which buying decisions occur — including firmographics, operating structure, technographics, psychographics, and IT governance. The research drew from more than 150 sources including Gartner, KLAS, HIMSS reports, health system financial disclosures, vendor case studies, and real job postings describing operational responsibilities inside these organizations.' },
        { type: 'paragraph', text: 'This research formed the foundation for what became the Four Engines Framework, a model that explains how major enterprise purchasing decisions actually get approved inside health systems. The framework identifies four decision engines that must align before a deal can close:' },
        { type: 'bullets', items: [
          'Digital & Strategic Engine — CIO, CTO, CISO leadership responsible for technology infrastructure and risk.',
          'Value & Viability Engine — CFO and revenue cycle leadership responsible for financial performance.',
          'Operations & Access Engine — COO and patient access teams responsible for throughput and operational efficiency.',
          'Care & Quality Engine — clinical leadership such as CMOs and CNIOs responsible for patient outcomes and clinical workflow.',
        ]},
        { type: 'paragraph', text: 'In most enterprise deals, proposals stall because they satisfy one engine while creating concern in another. A system that improves clinical workflows may create financial uncertainty. A tool that improves revenue cycle efficiency may introduce operational friction. The Four Engines Framework gave the sales team a way to diagnose these tensions and plan conversations accordingly.' },
        { type: 'paragraph', text: 'Building on that model, I developed a detailed persona library covering each buyer type across the enterprise healthcare ecosystem. The library was structured specifically for sales usability — concise, high-signal summaries that could be reviewed quickly before a call rather than long analyst-style reports.' },
        { type: 'paragraph', text: 'The final deliverable was a 40-slide company-wide sales training that introduced the segmentation model, the Four Engines Framework, and the persona library as an integrated sales enablement system.' },
      ],
    },
    results: {
      heading: 'What it delivered',
      blocks: [
        { type: 'paragraph', text: 'The buyer intelligence framework became the foundation for the company\'s enterprise go-to-market strategy. The persona library and Four Engines Framework were incorporated directly into sales training used across the organization.' },
        { type: 'paragraph', text: 'Instead of approaching enterprise healthcare deals with inconsistent messaging, the sales team gained a shared framework for identifying the real decision makers, anticipating objections, and structuring conversations to address each stakeholder\'s priorities.' },
        { type: 'paragraph', text: 'The research infrastructure also became the foundation for a second project: CRAM, an AI-powered tool I built to transform buyer intelligence into structured content recommendations for marketing and sales teams.' },
        { type: 'paragraph', text: 'Rather than leaving the research buried in slide decks, CRAM operationalizes it — turning enterprise buyer insight into practical guidance that can be used in campaign planning and deal preparation.' },
      ],
    },
  },

  /* ── GAMIFICATION REDESIGN ── */
  'gamification-redesign': {
    context: {
      heading: 'The situation',
      blocks: [
        { type: 'paragraph', text: 'Experts Exchange had a long-running reputation as a community where technical experts could help each other solve complex problems. But the engagement system that rewarded those contributions had not meaningfully evolved in years.' },
        { type: 'paragraph', text: 'The platform used a points-based system to recognize expertise, but the mechanics behind it were opaque and difficult for users to understand. Contributors could accumulate points, but there was no clear sense of progress, status, or long-term recognition for their efforts.' },
        { type: 'paragraph', text: 'Over time, this created a subtle but important problem. Users who were willing to contribute had little feedback on whether their contributions mattered, and newer users struggled to understand how to participate meaningfully in the community.' },
        { type: 'paragraph', text: 'Engagement metrics had begun to plateau, and it was clear the product needed a stronger reason for users to return and contribute regularly.' },
      ],
    },
    role: {
      heading: 'What I owned',
      blocks: [
        { type: 'paragraph', text: 'This project wasn\'t assigned to me. I identified the opportunity, made the case internally, and then led the entire initiative from concept through launch.' },
        { type: 'paragraph', text: 'Because the team was lean, my responsibilities covered the full lifecycle of the project. I built the business case for the new system, conducted the research that informed its design, wrote the product requirements documents, and served as the lead UX/UI designer.' },
        { type: 'paragraph', text: 'I also coordinated closely with engineering throughout development and ultimately owned the go-to-market rollout once the new system was ready.' },
      ],
    },
    approach: {
      heading: 'How I built it',
      blocks: [
        { type: 'paragraph', text: 'Before designing anything, I spent several weeks studying how gamification systems work across different categories of products.' },
        { type: 'paragraph', text: 'I analyzed examples from gaming platforms, SaaS communities, developer ecosystems, and online learning environments. The goal was to understand what drives sustained participation rather than novelty features that users interact with once and then ignore.' },
        { type: 'paragraph', text: 'The system I ultimately designed included several components that worked together to reinforce participation:' },
        { type: 'bullets', items: [
          'Level progression to provide visible milestones for users\' contributions.',
          'Certifications and achievements that rewarded meaningful expertise.',
          'Challenges and activity triggers designed to encourage repeat participation.',
          'Swag rewards and recognition that gave users something tangible to work toward.',
          'A profile "trophy room" that showcased accomplishments publicly within the community.',
        ]},
        { type: 'paragraph', text: 'Each element served a specific psychological function. Leveling provided forward momentum, certifications signaled credibility, and visible achievements created social proof within the community.' },
        { type: 'paragraph', text: 'The rollout strategy was just as important as the design itself. Instead of launching the entire system at once, I structured the implementation in phases. Each phase introduced new functionality while preserving the stability of the existing product experience.' },
        { type: 'paragraph', text: 'This phased rollout minimized development risk and allowed the product to evolve gradually without disrupting the core workflows users relied on.' },
      ],
    },
    results: {
      heading: 'What it delivered',
      blocks: [
        { type: 'paragraph', text: 'Following the launch of the gamification system, overall user activity increased by 25%, and account reactivations — users returning after periods of inactivity — increased by 20%.' },
        { type: 'paragraph', text: 'More importantly, the system created a clearer path for community participation. Users could see where they stood, what they had achieved, and what they could work toward next.' },
        { type: 'paragraph', text: 'The redesign turned the engagement system from a passive scorekeeping mechanism into a visible progression system that reinforced expertise and participation.' },
        { type: 'paragraph', text: 'The system remains active on the platform today.' },
      ],
    },
  },

  /* ── BYTESIZE NEWSLETTER ── */
  'bytesize-newsletter': {
    context: {
      heading: 'The situation',
      blocks: [
        { type: 'paragraph', text: 'Experts Exchange had an email list with a roughly 10% open rate. On paper, it looked like a reasonable asset — tens of thousands of contacts accumulated over years of campaigns and product activity.' },
        { type: 'paragraph', text: 'In reality, it was underperforming in every way that mattered.' },
        { type: 'paragraph', text: 'Most of the sends were transactional or promotional, and there was no consistent editorial identity that gave people a reason to open the emails each week. The list existed, but it wasn\'t truly engaged.' },
        { type: 'paragraph', text: 'I saw a different opportunity.' },
        { type: 'paragraph', text: 'The audience consisted largely of IT professionals and developers — people who follow industry news closely and care deeply about technical developments. If the content actually respected their time and intelligence, I believed the email channel could become far more valuable.' },
      ],
    },
    role: {
      heading: 'What I owned',
      blocks: [
        { type: 'paragraph', text: 'I created ByteSize from scratch.' },
        { type: 'paragraph', text: 'I developed the concept, built the brand identity, designed the editorial voice, and built the operational system required to publish it every week.' },
        { type: 'paragraph', text: 'Initially, I served as the primary writer. As the newsletter grew, I transitioned into the executive editor role — overseeing story selection, approving content, producing the visual assets, and managing the technical production of each send.' },
        { type: 'paragraph', text: 'What began as an experiment quickly became one of the company\'s most important revenue channels.' },
      ],
    },
    approach: {
      heading: 'How I built it',
      blocks: [
        { type: 'paragraph', text: 'The strategy behind ByteSize was based on a simple observation: a highly engaged niche audience is far more valuable than a large but disengaged one.' },
        { type: 'paragraph', text: 'Instead of sending generic promotional emails, the newsletter needed to become something readers actually looked forward to.' },
        { type: 'paragraph', text: 'I built the ByteSize brand from the ground up — name, visual identity, mascot, and editorial tone. The content format emphasized concise, high-signal updates on relevant technical developments, written with a voice that acknowledged the intelligence and skepticism of the audience.' },
        { type: 'paragraph', text: 'Developers and IT professionals have a strong instinct for marketing fluff. The editorial tone leaned into humor, strong opinions, and practical relevance rather than corporate messaging.' },
        { type: 'paragraph', text: 'On the operational side, I built a production workflow that allowed the entire system to run efficiently. I handled story curation, editing, production in the ESP, formatting QA, and performance tracking each week.' },
        { type: 'paragraph', text: 'On the revenue side, I developed the advertising model. I created sponsorship packages, set pricing, and built the sales materials the commercial team used to sell placements to advertisers targeting technical audiences.' },
      ],
    },
    results: {
      heading: 'What it delivered',
      blocks: [
        { type: 'paragraph', text: 'ByteSize grew from essentially zero engaged readers to 200,000 subscribers in under eight months.' },
        { type: 'paragraph', text: 'Open rates increased from below 10% to roughly 60%, and that level of engagement remained stable over time.' },
        { type: 'paragraph', text: 'The newsletter quickly became the company\'s top revenue channel. At a cadence of one send per week, the inventory supported roughly $800K in annual revenue at the rates advertisers were already paying. Based on audience growth and inventory pricing, the projected ARR potential reached $1.65M.' },
        { type: 'paragraph', text: 'Early sponsorship deals exceeding $10K per placement confirmed that advertisers were willing to pay a premium to reach a highly engaged technical audience.' },
      ],
    },
  },

  /* ── COMPANY REBRAND ── */
  'company-rebrand': {
    context: {
      heading: 'The situation',
      blocks: [
        { type: 'paragraph', text: 'Experts Exchange had a brand that had drifted over time. The product interface, marketing site, email programs, and acquisition channels all looked and sounded like they belonged to different companies. There was no clear visual or verbal system connecting the experience, which created friction at exactly the wrong moments: first impressions, conversion points, and early product trust-building.' },
        { type: 'paragraph', text: 'The problem wasn\'t just cosmetic. Underneath the inconsistent visuals was a broader positioning issue. The platform had evolved, but the messaging had not evolved with it. Acquisition copy, landing pages, and product language no longer reflected the clearest version of what the company offered or why users should care.' },
        { type: 'paragraph', text: 'That disconnect showed up in performance. The brand was creating confusion instead of clarity, and the inconsistency across surfaces was weakening trust before users even had a chance to experience the value of the product itself.' },
        { type: 'paragraph', text: 'The company needed more than a logo refresh. It needed a full rebrand anchored in stronger positioning, clearer messaging, and a design system that could scale across both marketing and product.' },
      ],
    },
    role: {
      heading: 'What I owned',
      blocks: [
        { type: 'paragraph', text: 'I led the rebrand end to end.' },
        { type: 'paragraph', text: 'That included positioning strategy, messaging architecture, visual identity, and execution across the company\'s major user-facing surfaces. Because I was also serving as the primary UX/UI design lead for the product during that period, the work extended well beyond marketing collateral. I was able to connect brand strategy directly to the product experience, which meant the rebrand didn\'t stop at the homepage or campaign layer.' },
        { type: 'paragraph', text: 'I owned the strategic foundation, the messaging system, the visual direction, and the rollout across channels. I also led the effort to unify the product UI itself, which had accumulated years of inconsistency and visual debt.' },
      ],
    },
    approach: {
      heading: 'How I built it',
      blocks: [
        { type: 'paragraph', text: 'I started with positioning before touching anything visual.' },
        { type: 'paragraph', text: 'Using April Dunford\'s methodology as a guide, I worked through the competitive landscape, the audience the platform served best, and the value proposition the company could credibly own. The goal was to stop describing the business in vague or inherited language and instead build a sharper articulation of who it was for, what problem it solved, and why it mattered.' },
        { type: 'paragraph', text: 'From that work, I built a messaging hierarchy that could scale across the organization: a one-liner, elevator pitch, 100-word version, 500-word version, and supporting language for sales and acquisition materials. This created consistency across campaigns, product surfaces, and internal communication. It also made it easier for the team to stop improvising and start speaking from the same strategic foundation.' },
        { type: 'paragraph', text: 'The visual system came next. I developed a refreshed identity that included an updated logo, a more cohesive color system, stronger typography choices, and a more unified design language that could work across both the product and the marketing site.' },
        { type: 'paragraph', text: 'The hardest part of the project was not the external brand work — it was bringing that system into the product itself. Over time, the UI had become fragmented. Different screens used different colors, fonts, spacing rules, and component behaviors. Some modules felt modern, others looked years out of date, and the overall experience lacked coherence. I led an initiative to audit those inconsistencies and replace them with a more unified system. That meant updating modules that displayed poorly, improving readability, refining spacing and hierarchy, and creating a more accessible visual structure across core user flows.' },
        { type: 'paragraph', text: 'This work also had a practical operational benefit: it reduced future visual debt by giving the product team a clearer design language to build against.' },
      ],
    },
    results: {
      heading: 'What it delivered',
      blocks: [
        { type: 'paragraph', text: 'The rebrand produced measurable growth across both marketing and product metrics.' },
        { type: 'paragraph', text: 'First-time signups increased 50% following the rebrand. Daily traffic increased 35%, and question posting — the core user action that drove engagement and content creation on the platform — increased 351%.' },
        { type: 'paragraph', text: 'Just as importantly, the UI unification work eliminated a long-running source of user frustration. Before the redesign, the company regularly received complaints about the product interface feeling inconsistent or outdated. After the updated system shipped, those complaints dropped to near-zero.' },
        { type: 'paragraph', text: 'The project didn\'t just improve how the company looked. It improved how the company communicated, how the product felt to use, and how confidently the team could build on top of it moving forward.' },
      ],
    },
  },

  /* ── CRAM ── */
  'cram': {
    context: {
      heading: 'The situation',
      blocks: [
        { type: 'paragraph', text: 'I had just finished building a deep buyer intelligence system for a Fortune 10 healthcare client: 150+ research sources, a segmentation model across core enterprise buyer types, a Four Engines decision framework, and a 76-slide persona library designed for sales enablement.' },
        { type: 'paragraph', text: 'The research was strong. The problem was usability.' },
        { type: 'paragraph', text: 'Once that level of work gets packaged into slides, it often stops being operational. People know it exists, but they don\'t use it consistently in the flow of daily work. A demand gen lead planning a campaign may start from scratch instead of mining existing buyer insight. A salesperson preparing for a meeting may rely on instinct instead of using the research infrastructure already available to them.' },
        { type: 'paragraph', text: 'In other words, the organization had high-value intelligence, but no lightweight system for activating it repeatedly. I built CRAM to solve that problem.' },
      ],
    },
    role: {
      heading: 'What I owned',
      blocks: [
        { type: 'paragraph', text: 'I designed the product, wrote the prompt architecture, and built the application myself.' },
        { type: 'paragraph', text: 'This included defining the input model, structuring the outputs, building the UI, and integrating the AI layer through the OpenAI API. I also made the deployment decisions to ensure the tool fit within the client\'s technical environment, including deployment on Azure Static Apps to align with the Microsoft ecosystem the client already operated in.' },
        { type: 'paragraph', text: 'This was not a throwaway prototype. It was designed as an internal production application capable of supporting real content planning and sales preparation workflows.' },
      ],
    },
    approach: {
      heading: 'How I built it',
      blocks: [
        { type: 'paragraph', text: 'The core idea behind CRAM was simple: instead of forcing users to dig through research decks, the product should translate buyer intelligence into actionable recommendations based on a few structured inputs.' },
        { type: 'paragraph', text: 'I designed CRAM as a buyer-journey content recommender. The input layer captures the variables that shape what kind of content a team should create or use: the initiative being supported, the job the content needs to accomplish, the relevant buying engines involved, strategic priority, audience type, and trigger context.' },
        { type: 'paragraph', text: 'From there, the system generates a ranked set of content recommendations rather than a generic brainstorm. Each recommendation is tied back to the underlying buyer logic, which keeps the outputs grounded in the strategic framework rather than making them feel like disconnected AI suggestions.' },
        { type: 'paragraph', text: 'The outputs include ranked asset recommendations, confidence scoring, channel and format alignment, reasoning mapped to buying-engine priorities, and a structured outline for the top recommended piece of content. I also built in proof requirements and objection-handling logic so the tool could help teams think beyond just "what should we make?" and move into "what must this asset prove to move a buyer forward?"' },
        { type: 'paragraph', text: 'A major part of the value came from the prompt architecture. I structured the system so outputs were specific enough to be useful, consistent enough to trust, and fast enough to support scenario planning. That matters in a workflow context. A strategist should be able to test several angles in minutes, not spend half a day trying to assemble one brief.' },
        { type: 'paragraph', text: 'I also designed the product with future expansion in mind. CRAM Sales, which is currently in development, uses the same underlying logic to generate tailored presentation decks for specific buyers and deal stages.' },
      ],
    },
    build: {
      heading: 'Under the hood',
      blocks: [
        { type: 'paragraph', text: 'CRAM was built with plain HTML, CSS, and JavaScript, then deployed on Azure Static Apps.' },
        { type: 'paragraph', text: 'That choice was deliberate. The client operates in a Microsoft-centered environment, so the deployment needed to fit the ecosystem cleanly without introducing unnecessary infrastructure or operational friction.' },
        { type: 'paragraph', text: 'The AI layer runs through the OpenAI API. I structured the prompts to return predictable, JSON-shaped outputs that the interface could render reliably. That decision mattered because the tool needed to feel like a usable product, not a chat experiment. Consistency in structure made it possible to present the results in a clear, repeatable way.' },
        { type: 'paragraph', text: 'The interface uses a split-panel layout so users can keep inputs visible while reviewing outputs. That sounds simple, but it matters when people are iterating on scenarios. Change a variable, regenerate the recommendations, compare the difference, and keep moving without losing context. The UI was designed to support that workflow directly.' },
        { type: 'paragraph', text: 'At a product level, the build reflects a principle I care about a lot: AI tools are only useful when the surrounding structure is strong. Good prompts help, but good product design is what makes them repeatable.' },
      ],
    },
    results: {
      heading: 'What it delivered',
      blocks: [
        { type: 'paragraph', text: 'CRAM moved beyond the proof-of-concept stage into active internal workflow consideration at the client.' },
        { type: 'paragraph', text: 'The demand generation and sales enablement teams began evaluating how to integrate it more formally into campaign planning and sales preparation processes, using it as a bridge between static buyer research and day-to-day execution.' },
        { type: 'paragraph', text: 'Just as importantly, CRAM validated the value of the underlying research system. The buyer intelligence infrastructure behind it — the Four Engines Framework, segment analysis, and persona library — was already being used in company-wide sales training. CRAM extended that value by making the same intelligence easier to activate in real work.' },
        { type: 'paragraph', text: 'The product remains internal and is not publicly accessible, but it demonstrates a capability I care deeply about: taking dense strategic research and turning it into a system people can actually use.' },
      ],
    },
  },

}
