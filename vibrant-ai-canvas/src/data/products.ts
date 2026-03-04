import { Hotel, FolderKanban, UtensilsCrossed, Building2, Mic, Landmark, ShieldCheck, TrendingUp, Users, AudioWaveform } from "lucide-react";

export interface Product {
  id: string;
  title: string;
  shortDesc: string;
  icon: any;
  color: "blue" | "magenta" | "green";
  content: string;
}

export const products: Product[] = [
  {
    id: "ai-hotel-manager",
    title: "AI Hotel Manager",
    shortDesc: "End-to-end intelligent hotel operations powered by deep learning and real-time analytics.",
    icon: Hotel,
    color: "blue",
    content: `## AI Hotel Manager: Redefining Hospitality Operations

Sri Sri Tech's AI Hotel Manager is a comprehensive, enterprise-grade platform designed to revolutionize how hotels operate—from the front desk to housekeeping, from revenue management to guest satisfaction analytics. Built on cutting-edge deep learning architectures and trained on millions of hospitality data points, this solution transforms every touchpoint of the guest journey into an intelligent, automated, and deeply personalized experience.

### Intelligent Front Desk Automation

The AI Hotel Manager replaces traditional PMS (Property Management Systems) with a neural-network-driven command center. Check-ins become frictionless through facial recognition and NFC-enabled key cards. The system predicts guest preferences based on historical data, loyalty program tiers, and real-time sentiment analysis from pre-arrival communications. Room assignments are optimized using constraint-satisfaction algorithms that balance guest preferences, housekeeping schedules, and revenue targets simultaneously.

### Dynamic Revenue & Yield Management

Our proprietary pricing engine analyzes competitor rates, local events, weather patterns, flight data, and historical booking curves to generate optimal room rates in real-time. Unlike rule-based systems, our AI continuously learns from booking outcomes, cancellation patterns, and market shifts. Hotels using our platform have reported 18-35% revenue increases within the first quarter of deployment.

### Housekeeping Intelligence

IoT-connected room sensors feed data into our housekeeping optimization engine. The system predicts room readiness, assigns cleaning staff based on proximity and workload, and automatically adjusts cleaning protocols based on guest checkout patterns. Predictive maintenance alerts flag potential equipment failures before they impact guest experience.

### Guest Experience Personalization

From pre-arrival emails to in-room ambient settings, every interaction is tailored. The AI analyzes dining preferences, spa booking patterns, activity interests, and even social media sentiment to curate hyper-personalized recommendations. Voice-activated room controls powered by our VoiceXperience engine allow guests to adjust lighting, temperature, entertainment, and request services in natural language.

### Analytics & Reporting Dashboard

Real-time dashboards provide GMs and revenue managers with actionable insights. Predictive occupancy models, guest satisfaction trends, staff performance metrics, and competitive benchmarking are all available through an intuitive, mobile-responsive interface. Custom report generation uses natural language queries—simply ask "Show me RevPAR trends for Q3 compared to last year" and get instant visualizations.

### Integration & Deployment

The AI Hotel Manager integrates seamlessly with existing PMS, CRS, and channel manager systems through RESTful APIs and webhook architectures. Deployment options include cloud-native SaaS, hybrid, and on-premise configurations to meet varying compliance and data sovereignty requirements. Our Mumbai-based implementation team ensures zero-downtime migrations with comprehensive staff training programs.

### Security & Compliance

All guest data is encrypted at rest and in transit using AES-256 and TLS 1.3. The platform is PCI-DSS compliant for payment processing and adheres to GDPR, CCPA, and India's DPDP Act requirements. Role-based access control ensures that sensitive data is only accessible to authorized personnel.`
  },
  {
    id: "ai-project-management",
    title: "AI Project Management",
    shortDesc: "Autonomous project orchestration with predictive timelines and intelligent resource allocation.",
    icon: FolderKanban,
    color: "magenta",
    content: `## AI-Powered Project Management

Sri Sri Tech's AI Project Management platform reimagines how teams plan, execute, and deliver projects. By combining large language models with operations research algorithms, we've created a system that doesn't just track tasks—it actively manages, predicts, and optimizes every aspect of project delivery.

### Predictive Timeline Intelligence

Our AI analyzes historical project data, team velocity patterns, and task dependencies to generate highly accurate timeline predictions. Unlike traditional Gantt charts that require manual updates, our system continuously recalculates delivery dates based on real-time progress, automatically identifying bottlenecks before they cascade into delays. The prediction engine achieves 94% accuracy on delivery date forecasting within the first two sprints of adoption.

### Intelligent Resource Allocation

The platform's resource allocation engine uses multi-objective optimization to balance team workload, skill matching, availability constraints, and project priorities. When conflicts arise, the AI suggests resolution strategies ranked by impact on timeline, cost, and team satisfaction. Managers can simulate different allocation scenarios through an interactive "what-if" dashboard.

### Autonomous Risk Management

Risk identification is automated through pattern recognition across communication channels, code repositories, and project metrics. The system flags potential risks with confidence scores and recommended mitigation strategies. Escalation workflows ensure that critical risks reach the right stakeholders at the right time, with contextual briefings generated automatically.

### Natural Language Project Updates

Team members can update task status, log blockers, and request resources using natural language—through Slack, Teams, or the platform's own chat interface. The AI interprets these updates, maps them to the project plan, and triggers appropriate workflows. "I'm stuck on the API integration because the vendor docs are outdated" automatically creates a blocker, notifies the relevant stakeholder, and adjusts dependent task timelines.

### Smart Sprint Planning

Sprint planning sessions are supercharged with AI-generated recommendations. The system suggests optimal sprint backlogs based on team capacity, story point estimation models, and strategic priority alignment. Retrospective analysis identifies recurring inefficiencies and generates actionable improvement suggestions with measurable impact projections.

### Cross-Project Portfolio Intelligence

For organizations managing multiple concurrent projects, our portfolio dashboard provides enterprise-wide visibility. Resource contention across projects is highlighted proactively, and the AI suggests rebalancing strategies that maximize overall organizational throughput. Strategic alignment scoring ensures that project investments map to business objectives.

### Integration Ecosystem

Native integrations with Jira, Azure DevOps, GitHub, GitLab, Confluence, Slack, and Microsoft Teams ensure that the platform fits into existing workflows. Bidirectional sync keeps all systems current, and custom webhook configurations support specialized toolchain requirements.`
  },
  {
    id: "ai-restaurant",
    title: "AI Restaurant",
    shortDesc: "Smart dining ecosystem from menu optimization to kitchen orchestration and customer insights.",
    icon: UtensilsCrossed,
    color: "green",
    content: `## AI Restaurant: The Future of Dining

Sri Sri Tech's AI Restaurant platform transforms every aspect of food service operations—from menu engineering and kitchen management to customer engagement and supply chain optimization. Our solution serves everything from fine dining establishments to quick-service chains, delivering measurable improvements in efficiency, profitability, and guest satisfaction.

### Intelligent Menu Engineering

Our AI analyzes sales data, ingredient costs, preparation times, customer preferences, and seasonal trends to recommend optimal menu configurations. Each dish is scored on a profitability-popularity matrix, with AI-generated suggestions for pricing adjustments, portion modifications, and strategic placement. Restaurants using our menu optimization have reported 22% increases in average check size and 15% improvements in food cost ratios.

### Kitchen Display & Orchestration System

The AI-powered kitchen display system goes beyond simple order queuing. It optimizes preparation sequences based on ticket complexity, station workload, table timing requirements, and real-time ingredient availability. Multi-course meals are automatically coordinated so that each course arrives at the optimal moment. The system learns from each service period, continuously improving its orchestration algorithms.

### Predictive Demand Forecasting

By analyzing reservation data, historical traffic patterns, local events, weather forecasts, and social media buzz, our demand forecasting engine predicts covers with remarkable accuracy. This drives intelligent prep lists, staff scheduling, and ingredient ordering—reducing food waste by up to 40% and labor costs by 15-20%.

### Customer Intelligence Platform

Every guest interaction builds a richer profile. The AI tracks dining preferences, allergy information, celebration dates, spending patterns, and feedback sentiment. This intelligence powers personalized marketing campaigns, targeted promotions, and surprise-and-delight moments that build lasting loyalty. Integration with major reservation platforms ensures a unified guest view.

### Supply Chain & Vendor Management

Automated purchase order generation based on demand forecasts, par levels, and vendor lead times ensures optimal inventory without overstocking. The system continuously evaluates vendor performance on quality, pricing, reliability, and sustainability metrics, recommending optimal sourcing strategies.

### Compliance & Food Safety

Digital HACCP logs, automated temperature monitoring, and expiration tracking ensure regulatory compliance with minimal manual overhead. The system generates audit-ready reports and proactively alerts management to potential compliance issues before they become violations.

### Multi-Location Management

For restaurant groups, our platform provides centralized menu management, standardized recipes with location-specific adaptations, consolidated procurement, and comparative performance analytics across all locations. Successful innovations at one location can be rapidly tested and deployed across the network.`
  },
  {
    id: "flexible-workspace",
    title: "Flexible Workspace",
    shortDesc: "AI-driven workspace management for co-working spaces, hybrid offices, and smart buildings.",
    icon: Building2,
    color: "blue",
    content: `## Flexible Workspace: Intelligent Space Management

Sri Sri Tech's Flexible Workspace platform is the definitive solution for modern workspace management. Whether you operate co-working spaces, manage corporate hybrid offices, or run smart buildings, our AI-powered platform optimizes every square foot while maximizing occupant satisfaction and operational efficiency.

### Dynamic Space Allocation

Our AI continuously analyzes occupancy patterns, booking data, team collaboration requirements, and individual work preferences to optimize space utilization. Hot-desking assignments consider proximity preferences, noise sensitivity, equipment needs, and team clustering requirements. Meeting rooms are allocated based on actual usage patterns, with the system proactively suggesting right-sizing opportunities.

### Smart Building Integration

IoT sensors throughout the workspace feed real-time data on occupancy, air quality, temperature, lighting levels, and noise. The AI adjusts HVAC, lighting, and acoustic systems automatically to maintain optimal working conditions while minimizing energy consumption. Predictive maintenance algorithms flag equipment issues before they impact occupant comfort.

### Occupancy Analytics & Planning

Detailed analytics reveal actual space utilization patterns, enabling data-driven decisions about portfolio sizing, lease negotiations, and build-out investments. Scenario modeling tools help facilities teams evaluate the impact of policy changes—like shifting from 3-day to 4-day in-office requirements—on space needs and costs.

### Tenant & Member Experience

A mobile-first platform enables workspace users to book desks and rooms, control ambient settings, order food, request maintenance, and connect with colleagues. Community features foster collaboration through skill-matching, event recommendations, and shared interest groups. The AI learns individual preferences to provide increasingly personalized workspace experiences.

### Revenue Optimization

For co-working operators, the platform provides dynamic pricing capabilities that adjust rates based on demand, seasonality, and competitive positioning. Automated billing, contract management, and occupancy-based resource allocation ensure maximum revenue per square foot.

### Sustainability Dashboard

Comprehensive energy monitoring, carbon tracking, and sustainability reporting help organizations meet ESG commitments. The AI identifies optimization opportunities—from HVAC scheduling adjustments to lighting automation—that reduce environmental impact while lowering operating costs.`
  },
  {
    id: "voice-xperience",
    title: "Voice Xperience",
    shortDesc: "Next-generation conversational AI with multi-language support and emotional intelligence.",
    icon: Mic,
    color: "magenta",
    content: `## Voice Xperience: Conversational AI Redefined

Sri Sri Tech's Voice Xperience platform represents the pinnacle of conversational AI technology. Built on proprietary large language models fine-tuned for enterprise applications, our platform delivers human-like voice interactions that understand context, emotion, and intent with unprecedented accuracy.

### Multi-Language Conversational Engine

Our voice engine supports 40+ languages with native-level fluency, including 12 Indian languages with regional dialect awareness. Unlike generic speech-to-text systems, our models are trained on diverse acoustic environments—from noisy call centers to quiet office settings—ensuring reliable recognition across real-world conditions. Code-switching between languages (common in Indian business contexts) is handled seamlessly.

### Emotional Intelligence Layer

Our proprietary emotion detection system analyzes vocal tone, speech patterns, word choice, and conversational flow to gauge caller sentiment in real-time. This emotional intelligence drives dynamic response strategies—a frustrated caller receives empathetic acknowledgment and expedited resolution, while an enthusiastic prospect receives enhanced engagement. Sentiment trends are tracked and reported for quality assurance and training purposes.

### Enterprise Voice Automation

Deploy intelligent voice agents for customer service, appointment scheduling, order management, and information queries. Our agents handle complex multi-turn conversations, maintain context across interruptions, and seamlessly escalate to human agents when necessary—with full context transfer. Average handle times decrease by 40-60% while customer satisfaction scores improve by 25-35%.

### Voice Biometrics & Security

Voiceprint authentication provides secure, frictionless identity verification. Our system can authenticate callers within seconds of natural conversation, eliminating the need for knowledge-based security questions. Anti-spoofing technology detects synthetic voice attacks, ensuring robust security even against AI-generated voice clones.

### Custom Voice Design

Create branded voice personas that embody your organization's identity. Our voice design studio allows fine-tuning of speaking style, pace, intonation, and personality traits. Multiple personas can be deployed across different use cases—a warm, conversational tone for customer service and a precise, authoritative tone for financial services.

### Analytics & Optimization

Comprehensive conversation analytics reveal caller intent patterns, resolution rates, escalation triggers, and satisfaction drivers. A/B testing capabilities allow rapid experimentation with different conversation flows, prompts, and persona configurations. The platform continuously learns from successful interactions, improving performance over time.`
  },
  {
    id: "ai-loan-manager",
    title: "AI Loan Manager",
    shortDesc: "Automated credit decisioning, risk assessment, and loan lifecycle management.",
    icon: Landmark,
    color: "green",
    content: `## AI Loan Manager: Intelligent Lending Platform

Sri Sri Tech's AI Loan Manager transforms the lending lifecycle from application to collection. Our platform combines advanced machine learning models with regulatory compliance frameworks to deliver faster, fairer, and more profitable lending decisions.

### Intelligent Credit Decisioning

Our credit assessment engine analyzes 500+ data points beyond traditional bureau scores—including transaction patterns, social signals, business performance indicators, and alternative data sources. Machine learning models trained on millions of loan outcomes provide nuanced risk scoring that identifies creditworthy borrowers traditional models might miss, while maintaining portfolio quality standards.

### Automated Underwriting

Document processing uses OCR and NLP to extract, validate, and cross-reference information from bank statements, tax returns, financial statements, and identity documents. The system flags inconsistencies and fraud indicators automatically, reducing manual review time by 80% while improving detection accuracy. Straight-through processing rates of 60-75% are typical for consumer lending portfolios.

### Dynamic Pricing & Product Matching

Risk-based pricing algorithms determine optimal interest rates, fees, and terms for each applicant. The system recommends the best-fit product from the lender's portfolio, considering the borrower's needs, risk profile, and lifetime value potential. Cross-sell and upsell opportunities are identified and routed to relationship managers with contextual briefings.

### Portfolio Monitoring & Early Warning

Continuous monitoring of borrower behavior, market conditions, and macro-economic indicators powers our early warning system. The AI identifies accounts showing signs of potential stress weeks before traditional triggers, enabling proactive engagement strategies that reduce default rates by 20-30%.

### Collections Intelligence

When accounts become delinquent, the AI optimizes collection strategies based on borrower profiles, communication preferences, and recovery probability models. Contact timing, channel selection, and messaging are all personalized to maximize recovery while maintaining customer relationships. Digital self-service options enable borrowers to restructure or settle conveniently.

### Regulatory Compliance

Built-in compliance checks ensure adherence to RBI guidelines, fair lending practices, and data protection regulations. Model governance frameworks provide explainability for all credit decisions, supporting audit requirements and regulatory examinations. Automated regulatory reporting reduces compliance overhead significantly.`
  },
  {
    id: "ai-compliance",
    title: "AI Compliance",
    shortDesc: "Automated regulatory monitoring, risk assessment, and compliance workflow management.",
    icon: ShieldCheck,
    color: "blue",
    content: `## AI Compliance: Regulatory Intelligence Platform

Sri Sri Tech's AI Compliance platform automates the complex, ever-changing landscape of regulatory compliance. From monitoring regulatory updates to assessing organizational impact and managing remediation workflows, our platform ensures that compliance teams are always ahead of regulatory requirements.

### Regulatory Change Intelligence

Our AI continuously monitors regulatory bodies, government gazettes, industry publications, and legal databases across jurisdictions. New regulations, amendments, and guidance documents are automatically analyzed for relevance to your organization's operations, products, and geographies. Impact assessments are generated within hours of regulatory publication, compared to the weeks or months typical of manual processes.

### Automated Control Testing

The platform maps regulatory requirements to organizational controls and automates testing procedures. Integration with enterprise systems allows continuous control monitoring rather than point-in-time assessments. When control gaps are detected, the system generates remediation recommendations and tracks implementation through to completion.

### Risk Assessment Engine

Our risk assessment engine evaluates compliance risk across multiple dimensions—regulatory, operational, reputational, and financial. Heat maps and trend analyses provide board-level visibility into the organization's risk posture. Scenario modeling capabilities allow compliance teams to assess the impact of regulatory changes, business initiatives, or market shifts on the organization's risk profile.

### Policy Management

Intelligent policy management tools streamline the creation, review, approval, and distribution of compliance policies. The AI identifies conflicts between policies, flags gaps in coverage, and suggests updates based on regulatory changes. Version control and attestation tracking ensure that all stakeholders have acknowledged current policies.

### Training & Awareness

AI-generated training content keeps employees current on compliance requirements relevant to their roles. Micro-learning modules are personalized based on role, department, and assessment results. Completion tracking and competency assessments provide evidence of compliance training for regulatory examinations.

### Reporting & Analytics

Comprehensive dashboards provide real-time visibility into compliance status, open issues, remediation progress, and key risk indicators. Automated regulatory reporting capabilities reduce the manual effort associated with periodic filings. Custom report generation supports internal audit, board reporting, and regulatory examination requirements.`
  },
  {
    id: "ai-stocks-agent",
    title: "AI Stocks Agent",
    shortDesc: "Real-time market analysis, algorithmic trading signals, and portfolio intelligence.",
    icon: TrendingUp,
    color: "magenta",
    content: `## AI Stocks Agent: Market Intelligence Platform

Sri Sri Tech's AI Stocks Agent provides sophisticated market analysis, trading signal generation, and portfolio management capabilities powered by state-of-the-art machine learning models. Designed for both institutional investors and sophisticated retail traders, our platform processes vast amounts of market data to identify opportunities and manage risk.

### Real-Time Market Analysis

Our AI processes tick-level market data, order book dynamics, options flow, and dark pool activity to provide a comprehensive real-time market picture. Pattern recognition algorithms identify chart formations, momentum shifts, and anomalous trading activity across thousands of securities simultaneously. Natural language market commentary is generated continuously, explaining significant moves and their likely drivers.

### Signal Generation Engine

Multi-model ensemble approaches combine technical analysis, fundamental valuation, sentiment analysis, and alternative data signals to generate high-conviction trading ideas. Each signal includes a confidence score, expected holding period, risk/reward assessment, and position sizing recommendation. Backtesting results and live performance tracking provide transparency into signal quality.

### Sentiment & News Analytics

Our NLP pipeline processes financial news, social media, analyst reports, regulatory filings, and earnings transcripts in real-time. Sentiment scores are generated at the entity, sector, and market levels. The system identifies narrative shifts and emerging themes before they're reflected in price action, providing an informational edge.

### Portfolio Analytics & Risk Management

Comprehensive portfolio analytics include factor exposure analysis, correlation monitoring, drawdown analysis, and stress testing. The AI identifies concentration risks, style drifts, and tail risk exposures, recommending hedge strategies when appropriate. Value-at-Risk calculations use Monte Carlo simulation with regime-switching models for more realistic risk estimation.

### Alternative Data Integration

Our platform integrates satellite imagery, web traffic data, credit card transaction trends, job posting analytics, and supply chain data to provide unique insights into company and sector performance. The AI identifies statistically significant relationships between alternative data signals and subsequent financial performance.

### Algorithmic Execution

For institutional clients, our execution algorithms minimize market impact and transaction costs. VWAP, TWAP, and adaptive strategies adjust to real-time market conditions. Transaction cost analysis provides post-trade transparency and continuous algorithm optimization.`
  },
  {
    id: "ai-hr",
    title: "HR Intelligence",
    shortDesc: "AI-powered talent acquisition, employee engagement, and workforce planning.",
    icon: Users,
    color: "green",
    content: `## HR Intelligence: Transforming People Operations

Sri Sri Tech's HR Intelligence platform brings artificial intelligence to every aspect of human resources—from talent acquisition and onboarding to performance management, engagement, and workforce planning. Our platform helps organizations build, develop, and retain high-performing teams in an increasingly competitive talent landscape.

### Intelligent Talent Acquisition

Our AI-powered recruitment engine transforms hiring from a reactive process to a strategic capability. Job descriptions are optimized for inclusivity and search visibility using NLP analysis. Candidate sourcing algorithms scan multiple channels to build diverse talent pipelines. Resume screening uses contextual understanding rather than keyword matching, evaluating candidates holistically against role requirements and organizational culture fit.

### Predictive Workforce Planning

Machine learning models analyze business growth projections, attrition patterns, skill evolution trends, and labor market dynamics to forecast workforce requirements. The system identifies critical skill gaps emerging 12-18 months ahead, enabling proactive development and recruitment strategies. Scenario planning tools help HR leaders evaluate the workforce implications of strategic decisions.

### Employee Engagement Intelligence

Continuous pulse surveys, communication pattern analysis, and behavioral signals feed our engagement prediction engine. The AI identifies teams and individuals at risk of disengagement or attrition before traditional indicators appear. Personalized intervention recommendations help managers address engagement drivers specific to their teams.

### Performance & Development

AI-assisted goal setting ensures alignment between individual objectives and organizational strategy. Continuous feedback tools make performance conversations natural and frequent. Skill assessment and development recommendations are personalized based on career aspirations, role requirements, and learning style preferences. Internal mobility matching identifies growth opportunities that benefit both employees and the organization.

### Compensation Intelligence

Market-calibrated compensation recommendations ensure competitive and equitable pay practices. The AI analyzes internal equity, external competitiveness, performance correlations, and retention risk to suggest optimal compensation decisions. Pay equity analytics identify and flag potential disparities before they become systemic issues.

### People Analytics

Executive dashboards provide strategic workforce insights—diversity metrics, talent pipeline health, organizational network analysis, and culture indicators. Predictive models help leaders understand the likely impact of policy changes, organizational restructures, and market shifts on their workforce.`
  },
  {
    id: "voice-clone",
    title: "VoiceClone",
    shortDesc: "Enterprise voice synthesis with custom voice creation and multi-language deployment.",
    icon: AudioWaveform,
    color: "blue",
    content: `## VoiceClone: Enterprise Voice Synthesis

Sri Sri Tech's VoiceClone platform enables organizations to create, manage, and deploy custom synthetic voices at scale. Whether for customer service automation, content creation, accessibility, or brand voice standardization, our platform delivers natural, expressive speech synthesis that is virtually indistinguishable from human speech.

### Custom Voice Creation

Create unique voice identities from as little as 30 minutes of high-quality reference audio. Our voice cloning pipeline captures not just the acoustic characteristics of a speaker, but their speaking style, emotional range, and natural cadences. Fine-tuning controls allow adjustment of pace, pitch, warmth, and expressiveness to create the perfect voice for each use case.

### Multi-Language Voice Deployment

A single voice model can speak fluently in 30+ languages while maintaining the same vocal identity. This is revolutionary for global brands that want consistent voice experiences across markets. Our cross-lingual synthesis technology preserves the speaker's unique characteristics even in languages they've never spoken, enabling truly global voice deployment.

### Emotional Expression Engine

Unlike flat, robotic text-to-speech, our synthesis engine produces speech with natural emotional variation. The system can convey empathy, enthusiasm, urgency, calm reassurance, and other emotional states based on context and explicit direction. SSML-compatible markup provides fine-grained control over pronunciation, emphasis, and pacing.

### Real-Time Synthesis

Our optimized inference pipeline delivers real-time voice synthesis with latency under 200ms—enabling live conversational applications. Streaming synthesis begins generating audio from the first token, ensuring responsive interactions. Edge deployment options bring synthesis even closer to the user for latency-critical applications.

### Voice Security & Ethics

Comprehensive consent management ensures that voice cloning is only performed with proper authorization. Watermarking technology embeds imperceptible markers in synthesized audio for traceability. Anti-fraud features detect attempts to use cloned voices for impersonation or social engineering. Our ethical AI framework ensures responsible deployment across all use cases.

### Content Production Pipeline

For media, entertainment, and e-learning applications, our content production pipeline enables rapid generation of narrated content. Script editors with pronunciation guides, batch processing capabilities, and quality assurance workflows streamline production at scale. A/B testing tools help optimize voice characteristics for audience engagement.`
  }
];
