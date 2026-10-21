module.exports = {
  origin: 'https://imapsolutions.co.zm',
  email: 'info@imapsolutions.co.zm',
  phone: '+260955953528',
  address: 'Off Great North Road, Northside, Plot 153, 22 Miles, Chibombo, Zambia',
  social: {
    LinkedIn: 'https://www.linkedin.com/company/imap-digitalsolutions/',
    X: 'https://x.com/imapsolution',
    Facebook: 'https://web.facebook.com/profile.php?id=61595436215179'
  },
  media: {
    nyoni: '/assets/nyoniline-app.png',
    lumikiza: '/assets/lumikiza-concept.webp',
    field: '/assets/poultry-field.webp'
  },
  technologies: [
    { name:'JavaScript', category:'Software development', description:'Web applications, integrations and browser-based workflows.', url:'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name:'Next.js', category:'Software development', description:'Modern web applications with server-rendered and statically generated delivery.', url:'https://nextjs.org/' },
    { name:'React Native', category:'Software development', description:'Cross-platform mobile application development for field and operational workflows.', url:'https://reactnative.dev/' },
    { name:'Python', category:'AI, data & automation', description:'Automation, data pipelines, web backends and AI-enabled workflows.', url:'https://www.python.org/' },
    { name:'OpenAI', category:'AI, data & automation', description:'Selected AI model capabilities for assistants, document intelligence and decision support with human oversight.', url:'https://openai.com/' },
    { name:'TensorFlow', category:'AI, data & automation', description:'Machine-learning workflows where model development is appropriate to the use case.', url:'https://www.tensorflow.org/' },
    { name:'DHIS2', category:'Data, BI & MERL', description:'Health information management and reporting workflows, subject to client requirements and authorised access.', url:'https://dhis2.org/' },
    { name:'KoboToolbox', category:'Data, BI & MERL', description:'Digital field data collection and programme workflows for low-connectivity environments.', url:'https://www.kobotoolbox.org/' },
    { name:'REDCap', category:'Data, BI & MERL', description:'Structured research and data-capture workflows for appropriate institutional settings.', url:'https://projectredcap.org/' },
    { name:'GIS', category:'Data, BI & MERL', description:'Geographic analysis and sector intelligence tied to a defined question and evidence source.', url:'https://www.osgeo.org/' },
    { name:'Ansible', category:'IT & infrastructure', description:'Configuration and infrastructure automation for repeatable, documented environments.', url:'https://www.ansible.com/' },
    { name:'Linux & Windows', category:'IT & infrastructure', description:'Server, endpoint and business-IT environments selected around workload and support capacity.', url:'https://www.linux.org/' },
    { name:'Databases & APIs', category:'IT & infrastructure', description:'Operational data stores, integrations and controlled data mappings for connected systems.', url:'https://www.postgresql.org/' },
    { name:'Wireshark', category:'Cybersecurity & networks', description:'Authorised network troubleshooting and protocol analysis.', url:'https://www.wireshark.org/' },
    { name:'Kali Linux', category:'Cybersecurity & networks', description:'Authorised security assessment environment for controlled testing and hardening.', url:'https://www.kali.org/' },
    { name:'Metasploit', category:'Cybersecurity & networks', description:'Controlled vulnerability validation within an agreed, authorised security scope.', url:'https://www.metasploit.com/' },
    { name:'VPN, Wi-Fi & VoIP', category:'Telecoms & connectivity', description:'Connectivity patterns for offices, branches, field teams and secure remote access.', url:'https://www.wi-fi.org/' },
    { name:'Kafka', category:'Data & integrations', description:'Event-streaming patterns for high-volume or real-time integrations where justified.', url:'https://kafka.apache.org/' }
  ],
  capabilities: [
    { title:'Consultancy & advisory', icon:'compass', copy:'Senior thinking before the technology decision.', href:'/services/consultancy-advisory/' },
    { title:'AI & automation', icon:'spark', copy:'Useful automation with clear safeguards.', href:'/services/ai-automation/' },
    { title:'IT solutions', icon:'cloud', copy:'Reliable systems, support and infrastructure.', href:'/services/it-solutions/' },
    { title:'Cybersecurity', icon:'shield', copy:'Reduce risk across people, systems and data.', href:'/services/cybersecurity/' },
    { title:'Data, BI & MERL', icon:'data', copy:'Evidence and intelligence for better decisions.', href:'/services/data-bi-merl/' },
    { title:'Telecoms & connectivity', icon:'network', copy:'Networks that keep teams and services connected.', href:'/services/telecoms-connectivity/' },
    { title:'Software development', icon:'code', copy:'Digital products and workflows built around the work.', href:'/services/software-development/' }
  ],
  sectors: [
    { slug:'government-ngos-csos-parastatals', title:'Government, NGOs, civil society & parastatals', copy:'Advisory, systems, evidence and delivery support for institutions with public responsibilities.', services:['Consultancy & advisory','Data, BI & MERL','Cybersecurity'] },
    { slug:'health', title:'Health', copy:'Digital health, programme data, secure infrastructure and field-ready workflows.', services:['AI & automation','Data, BI & MERL','Software development'] },
    { slug:'agriculture', title:'Agriculture', copy:'Connected records, operational intelligence and tools that work closer to the field.', services:['AI & automation','Telecoms & connectivity','Software development'] },
    { slug:'education', title:'Education', copy:'Reliable infrastructure, digital systems and evidence for institutions and programmes.', services:['IT solutions','Cybersecurity','Data, BI & MERL'] },
    { slug:'green-blue-economy', title:'Green & blue economy', copy:'Technology and evidence for climate, environment, natural resources and sustainable enterprise.', services:['Consultancy & advisory','Data, BI & MERL','Telecoms & connectivity'] },
    { slug:'fintech-ecommerce', title:'FinTech & ecommerce', copy:'Secure platforms, automation, analytics and connectivity for digital commerce.', services:['Cybersecurity','AI & automation','Software development'] }
  ],
  services: [
    {
      slug:'consultancy-advisory', number:'01', name:'Consultancy & advisory', icon:'compass',
      summary:'Senior advice for complex technology, data and transformation decisions.',
      headline:'Make the right technology decision before you buy the tool.',
      intro:'We help leadership teams understand the problem, test the options and shape a practical path from strategy to delivery.',
      audience:'Government institutions, NGOs, civil-society organisations, parastatals and growth-focused businesses planning change.',
      outcomes:['A clear problem definition and decision brief','Current-state assessment and priority roadmap','Requirements, architecture or procurement specification','Implementation governance, risks and next-step recommendations'],
      items:[
        {title:'Digital and IT strategy',text:'Translate organisational priorities into a focused technology roadmap, operating model and sequence of investments.'},
        {title:'Technology and systems assessment',text:'Review existing applications, infrastructure, data flows, skills, risks and support arrangements before recommending change.'},
        {title:'AI readiness and governance',text:'Identify useful AI opportunities, assess data and workflow readiness, and define human review, privacy and accountability boundaries.'},
        {title:'Transformation and implementation advisory',text:'Support programme design, vendor decisions, delivery governance, change planning and handover so strategy becomes usable practice.'},
        {title:'Requirements and procurement support',text:'Turn business needs into clear specifications, evaluation criteria and implementation responsibilities without locking the organisation into a premature product choice.'}
      ],
      faq:[['Do you only advise, or can you deliver the work?','Both. We can provide an independent advisory engagement, lead a defined implementation, or stay involved from assessment through delivery and handover.'],['Can you work with our existing suppliers?','Yes. We can assess the current environment and work alongside internal teams or approved suppliers where responsibilities and access are clear.']]
    },
    {
      slug:'ai-automation', number:'02', name:'AI & automation', icon:'spark',
      summary:'Practical AI, workflow automation and document intelligence with human oversight.',
      headline:'Use AI where it improves the work—not where it creates new risk.',
      intro:'We identify repeatable work, connect the right data and design automation that people can understand, supervise and improve.',
      audience:'Organisations with manual reporting, document-heavy operations, fragmented knowledge or repetitive service workflows.',
      outcomes:['A prioritised automation and AI use-case map','Prototype or workflow design with measurable acceptance criteria','Data, access, review and escalation rules','Deployment notes, user guidance and responsible-use boundaries'],
      items:[
        {title:'Workflow automation',text:'Reduce repetitive handoffs across approvals, notifications, reporting and operational processes while keeping ownership visible.'},
        {title:'Internal assistants and knowledge search',text:'Create assistants grounded in approved policies, manuals and organisational knowledge, with permissions and source visibility.'},
        {title:'Document intelligence and OCR',text:'Extract structured fields from forms, receipts and scanned documents with confidence thresholds and a review queue.'},
        {title:'Reporting automation and Text-to-SQL',text:'Help authorised users explore approved data and generate recurring reports without hiding definitions, access rules or data-quality limits.'},
        {title:'AI governance and local feasibility',text:'Assess privacy, model risk, device capacity, offline options, human review and update responsibilities before committing to production use.'}
      ],
      faq:[['Will AI replace our staff?','Our focus is to remove avoidable repetition and support better decisions. Roles, approvals and human accountability remain explicit in the workflow design.'],['Can an AI solution work with our existing systems?','Often, subject to authorised access, documented formats, data quality and the operating constraints of the existing systems.']]
    },
    {
      slug:'it-solutions', number:'03', name:'IT solutions', icon:'cloud',
      summary:'Reliable infrastructure, business systems, support and documented operations.',
      headline:'Build the dependable technology layer your organisation relies on.',
      intro:'From servers and endpoints to databases and support, we connect practical IT decisions to the work your team needs to do every day.',
      audience:'Offices, schools, health sites, development programmes, engineering businesses and distributed teams.',
      outcomes:['Equipment, licensing and environment specification','Configured systems with documented access and ownership','Backup, maintenance and support responsibilities','Plain-language handover, inventory and operating records'],
      items:[
        {title:'Servers, storage and cloud environments',text:'Scope and deploy local or cloud environments around workload, resilience, power, backup, access and support needs.'},
        {title:'Endpoints and business IT',text:'Provision computers, laptops, printers and productivity environments with sensible standards, licences and user support.'},
        {title:'Databases and business systems',text:'Configure and support operational databases, internal workflows and business systems with clear roles and maintenance ownership.'},
        {title:'Managed support and maintenance',text:'Provide remote administration, patching, preventive checks, incident reporting and agreed response terms for supported assets.'},
        {title:'Backup, recovery and documentation',text:'Make backup scope, restore responsibilities, inventories, diagrams and administrator handover visible before a failure tests the system.'}
      ],
      faq:[['Can you support infrastructure we already own?','Yes, after an assessment of condition, licences, warranties, access and support boundaries.'],['Do you provide equipment?','We can specify and coordinate suitable equipment where it forms part of an agreed solution, rather than recommending hardware without understanding the workflow.']]
    },
    {
      slug:'cybersecurity', number:'04', name:'Cybersecurity', icon:'shield',
      summary:'Security advisory, hardening and resilience across people, systems and data.',
      headline:'Make security part of how the organisation operates.',
      intro:'We help teams understand exposure, reduce avoidable risk and establish practical controls without pretending that any single product removes every threat.',
      audience:'Public institutions, NGOs, businesses and programme teams handling sensitive systems, personal data or public trust.',
      outcomes:['A scoped security and privacy risk picture','Prioritised controls and remediation plan','Configured safeguards with ownership and documentation','Awareness, incident-readiness and review recommendations'],
      items:[
        {title:'Security assessment and risk planning',text:'Map systems, users, data, dependencies and likely failure modes to create a practical, prioritised security plan.'},
        {title:'Endpoint, email and network protection',text:'Harden devices, accounts, email and network boundaries with controls matched to the organisation’s capacity and operating model.'},
        {title:'Identity and access management',text:'Clarify roles, privileged access, authentication, joiner/mover/leaver processes and review responsibilities.'},
        {title:'Privacy and responsible technology',text:'Support data-handling reviews, retention decisions and AI governance with Zambia’s Data Protection Act and relevant frameworks in view.'},
        {title:'Incident readiness and awareness',text:'Prepare practical response responsibilities, reporting routes, recovery priorities and staff guidance before an incident occurs.'}
      ],
      faq:[['Do you provide certification?','We provide scoped advisory and implementation support. Certification, penetration testing or formal assurance requires the appropriate independent specialist and engagement scope.'],['Can you secure a small organisation?','Yes. We start with the real systems, risks and capacity rather than assuming an enterprise-sized security budget.']]
    },
    {
      slug:'data-bi-merl', number:'05', name:'Data, business intelligence & MERL', icon:'data',
      summary:'Data systems, analytics, BI dashboards and Monitoring, Evaluation, Research & Learning.',
      headline:'Turn programme and operational data into decisions people can defend.',
      intro:'We connect research methods, field operations, data quality and analysis so evidence becomes useful to leadership, programmes and communities.',
      audience:'Government programmes, NGOs, donors, research institutions, civil-society organisations and businesses managing performance data.',
      outcomes:['A question, indicator or decision framework','Documented collection, quality and governance approach','Analysis, dashboard or reporting output linked to the evidence','Refresh, access, interpretation and learning arrangements'],
      items:[
        {title:'MERL design and evaluations',text:'Support baseline, midline, endline, formative, process and impact work with methods, indicators, sampling and limitations made explicit.'},
        {title:'Data collection and quality systems',text:'Design digital forms, supervision, validation, consent and quality checks using tools such as DHIS2, KoboToolbox and REDCap where appropriate.'},
        {title:'Business intelligence and dashboards',text:'Build decision-oriented dashboards with clear definitions, permissions, refresh expectations and visible data-quality limitations.'},
        {title:'Data engineering and analysis',text:'Clean, map, transform and analyse operational or programme data so the output is reproducible and useful beyond a single report.'},
        {title:'GIS and sector intelligence',text:'Use geographic and sector views to answer a defined question, with aggregation and privacy controls appropriate to the evidence.'}
      ],
      faq:[['Do you only build dashboards?','No. A clear report, cleaned dataset, indicator framework or evaluation design may be the better outcome. We use dashboards when repeated decisions and updates justify them.'],['Can you work with donor reporting requirements?','Yes. We can map the required definitions, templates, evidence and reporting cycle before designing the collection or analysis workflow.']]
    },
    {
      slug:'telecoms-connectivity', number:'06', name:'Telecoms & connectivity', icon:'network',
      summary:'Networks, telecoms, branch connectivity and field communications that keep work moving.',
      headline:'Keep people, places and systems connected when the work cannot wait.',
      intro:'We design connectivity around geography, workload, resilience, power and support reality—not around a diagram that assumes perfect infrastructure.',
      audience:'Multi-site organisations, health and education networks, field programmes, businesses and institutions with connectivity constraints.',
      outcomes:['Connectivity and network assessment','Architecture, equipment and service specification','Configured, tested and documented network environment','Monitoring, failover, maintenance and support plan'],
      items:[
        {title:'Network architecture and upgrades',text:'Plan routing, switching, VLANs, Wi-Fi, branch links, bandwidth and network segmentation around the organisation’s actual traffic and users.'},
        {title:'Internet, WAN and VPN connectivity',text:'Design branch connectivity, VPN access, failover and remote support with clear service ownership and operating limits.'},
        {title:'Structured cabling and fibre',text:'Coordinate CAT6/CAT6A, fibre, racks, patch panels, labelling and documentation so faults are easier to diagnose.'},
        {title:'VoIP and communications workflows',text:'Scope voice and communications systems around users, locations, quality, permissions and continuity requirements.'},
        {title:'Field and low-connectivity environments',text:'Assess offline capture, backup power, local services and resilient sync patterns where connectivity is intermittent.'}
      ],
      faq:[['Can you work with our current ISP or telecoms provider?','Yes. We can assess the current service and define the technical, commercial and support changes needed, subject to provider access and responsibility.'],['Do you guarantee uptime?','No. Availability depends on power, providers, equipment, configuration and support coverage. We make the assumptions and responsibilities explicit.']]
    },
    {
      slug:'software-development', number:'07', name:'Software development', icon:'code',
      summary:'Custom web and mobile applications, integrations and digital products built around real workflows.',
      headline:'Develop software that fits the people, process and data around it.',
      intro:'We build and improve digital tools for field capture, internal operations, customer services and products—starting with the workflow rather than the framework.',
      audience:'Organisations replacing manual processes, connecting legacy systems or developing a focused digital product.',
      outcomes:['A bounded product or workflow definition','Prototype, application or integration with tested acceptance criteria','Deployment, access, data and support documentation','A realistic roadmap for future changes and ownership'],
      items:[
        {title:'Web and mobile applications',text:'Build applications for internal operations, service delivery, field capture and customer workflows with accessible, maintainable interfaces.'},
        {title:'Offline-first field tools',text:'Design local records, pending sync, retry and conflict-handling rules when the workflow cannot depend on continuous connectivity.'},
        {title:'APIs and interoperability',text:'Connect authorised systems through documented interfaces, controlled data mappings and clear ownership of failures and changes.'},
        {title:'Digital products and prototypes',text:'Turn a validated opportunity into a bounded prototype or product increment with explicit stage, users, assumptions and next decisions.'},
        {title:'Testing, deployment and support',text:'Make acceptance, release, access, backup, monitoring, documentation and handover part of the development scope.'}
      ],
      faq:[['Do you replace existing systems?','Only when the evidence supports it. We can connect, repair, configure or extend what already works before recommending replacement.'],['Can you build for government or development programmes?','Yes. We scope permissions, evidence, data protection, procurement context, field realities and handover requirements from the beginning.']]
    }
  ],
  projects:[
    {name:'Zambia Open Community School',type:'Server deployment · Network and IT support',copy:'Server deployment and ongoing network/IT support for the organisation.'},
    {name:'Aceh Executive Lodge',type:'CCTV installation · Maintenance',copy:'CCTV installation and maintenance for the lodge.'},
    {name:'Acacia Engineering Ltd',type:'Server deployment',copy:'Server deployment for the engineering business.'},
    {name:'Charles Drew University, Rise Up House',type:'Desktop support',copy:'Desktop support for the Rise Up House team.'},
    {name:'TMB Associates',type:'Equipment supply · Printer configuration',copy:'Supply and configuration of a network printer.'}
  ]
};
