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
        { type: 'paragraph', text: 'The problem was more than visual drift. Experts Exchange had been deliberately repositioned as a "community of tech professionals" by a previous initiative — a framing that was earnestly motivated but strategically wrong. The actual product was something far more specific: a premium Q&A platform where you could get niche, complex technical problems solved by verified experts. That\'s not a community. That\'s a knowledge marketplace.' },
        { type: 'paragraph', text: 'The result was a value proposition so diluted it could describe Slack, Reddit, LinkedIn, or any tech forum on the internet. When the messaging doesn\'t make a clear case for why someone should pay for this instead of using Google, Stack Overflow, or just asking an AI tool — which was entering the market during this exact period — there\'s no competitive foundation to build campaigns or acquisition strategies on.' },
        { type: 'paragraph', text: 'The inconsistent visuals were a symptom. The real problem was that nobody could articulate, in one sharp sentence, what Experts Exchange actually was and why it was worth paying for.' },
      ],
    },
    role: {
      heading: 'What I owned',
      blocks: [
        { type: 'paragraph', text: 'I led the full repositioning and rebrand effort end to end.' },
        { type: 'paragraph', text: 'That meant starting with the strategic foundation — defining what the company actually was, who it served best, and what competitive position it could credibly own — before touching anything visual. Because I was also the primary UX/UI design lead during this period, the work extended from the positioning layer all the way through to the product interface, connecting strategic decisions directly to user-facing surfaces.' },
        { type: 'paragraph', text: 'I owned positioning strategy, customer segmentation, persona development, messaging architecture, competitive messaging, visual identity, and the UI unification initiative.' },
      ],
    },
    approach: {
      heading: 'How I built it',
      blocks: [
        { type: 'paragraph', text: 'I applied the April Dunford positioning methodology to start fresh.' },
        { type: 'paragraph', text: 'That meant working through the competitive alternatives users actually chose — Stack Overflow, Google, AI tools, and vendor support contracts — and identifying the unique value EE could offer that none of those alternatives could. The answer was specific: access to verified experts who could solve niche, complex problems that generic tools couldn\'t reliably address. Not a community. An expert network.' },
        { type: 'paragraph', text: 'From that foundation, I built out the full strategic layer. I developed a customer segmentation model across five buyer segments by role and authority level — Individual Contributors, Team Leads, IT Managers, Directors, and C-Suite — each with distinct use patterns and problems they brought to the platform. That fed into a behavioral persona framework covering six member archetypes: the Asker, the Researcher, the Insurance User, the Contributor, the Creator, and the Curator.' },
        { type: 'paragraph', text: 'I built a messaging hierarchy designed to scale: a one-liner, elevator pitch, 100-word version, and 500-word version, all drawing from the same strategic foundation. This gave the team consistent language across campaigns, product copy, and sales materials — and eliminated the improvisation that had created inconsistency in the first place.' },
        { type: 'paragraph', text: 'I also mapped competitive messaging for the four alternatives the team would encounter in the field, giving the sales and marketing team a structured response for each scenario grounded in the positioning framework rather than just defensive talking points.' },
        { type: 'paragraph', text: 'With the strategic layer complete, I developed the visual system: updated logo, cohesive color palette, stronger typography, and a design language that could work across both product and marketing. The hardest part wasn\'t the external brand work — it was bringing the new system into the product UI, which had accumulated years of visual fragmentation. I led an audit and rebuild of those inconsistencies, creating a unified design language that gave the product team a clear foundation to build against.' },
      ],
    },
    results: {
      heading: 'What it delivered',
      blocks: [
        { type: 'paragraph', text: 'The repositioning produced measurable results across acquisition, engagement, and product.' },
        { type: 'paragraph', text: 'First-time signups increased 50%. Daily traffic increased 35%. Question posting — the core user action that drove content creation and platform value — increased 351%.' },
        { type: 'paragraph', text: 'The UI unification eliminated a long-running source of user frustration. Complaints about the product interface feeling inconsistent or outdated dropped to near-zero after the updated system shipped.' },
        { type: 'paragraph', text: 'More importantly, the company now had a strategic foundation it could build from. Everyone on the team — marketing, sales, product — was speaking from the same positioning framework. That kind of alignment is hard to measure directly, but it\'s what makes everything else work.' },
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
