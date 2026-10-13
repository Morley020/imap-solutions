module.exports = {
  origin: 'https://imap-solutions.vercel.app',
  email: 'info@imapsolutions.co.zm',
  phone: '+260955953528',
  address: 'Off Great North Road, Northside, Plot 153, 22 Miles, Chibombo, Zambia',
  media: {
    nyoni: '/assets/nyoniline-app.png',
    lumikiza: '/assets/lumikiza-concept.webp',
    field: '/assets/poultry-field.webp'
  },
  capabilities: [
    { title:'Digital systems', icon:'code', copy:'Software that fits the work.', href:'/services/digital-systems/' },
    { title:'Data & analytics', icon:'data', copy:'Records that answer useful questions.', href:'/services/research-data/' },
    { title:'Telecommunications', icon:'network', copy:'Networks that are easier to support.', href:'/services/infrastructure/' },
    { title:'Cloud & infrastructure', icon:'cloud', copy:'The equipment behind your operations.', href:'/services/infrastructure/#servers' },
    { title:'AI enablement', icon:'spark', copy:'Practical use cases, clear safeguards.', href:'/services/digital-systems/#ai' },
    { title:'Digital transformation', icon:'chart', copy:'Better processes, not more complexity.', href:'/services/digital-systems/#business-systems' }
  ],
  services: [
    {
      slug:'digital-systems', number:'01', name:'Software, digital health & AI', icon:'code',
      summary:'Build the application, connect the data and support the people who use it.',
      headline:'Digital systems that fit the way your team works.',
      intro:'A health programme, field team and growing business rarely need the same software. We start with the workflow, then build or configure the tools around it.',
      audience:'Health programmes, NGOs, public institutions and businesses with disconnected records or manual processes.',
      outcomes:['An agreed workflow and requirements document','Configured or custom software with tested access controls','Data mappings, deployment notes and user training','A clear plan for support, hosting and future changes'],
      items:[
        {title:'Digital health platforms',text:'Implementation and configuration of DHIS2 Aggregate and Tracker, REDCap and KoboToolbox. We work on forms, indicators, access, reporting and the data pipelines that connect collection to analysis.'},
        {title:'Custom web and mobile applications',text:'Applications for field capture, internal operations and customer services. Where offline use matters, we design the local record, sync status and conflict-handling rules rather than treating connectivity as guaranteed.'},
        {id:'ai',title:'AI enablement and ChatOps',text:'Assistants grounded in approved organisational guidelines, Ministry of Health manuals or custom SOPs, with permission boundaries and human review. Offline-capable models and natural-language database querying (Text-to-SQL) are scoped against your devices, data and operating risks.'},
        {title:'Document intelligence and OCR',text:'Extract structured fields from forms, receipts and scanned documents. Handwriting and clinical records require quality checks and a review queue; an uncertain extraction should not silently become a trusted record.'},
        {title:'Geospatial and GIS tools',text:'Catchment mapping, spatial analysis and interactive coverage views using tools such as QGIS and Folium. We agree the geographic source, resolution and intended decision before building the map.'},
        {id:'business-systems',title:'ERP and business workflows',text:'Configure and extend business systems for operations, logistics and reporting. Existing processes, user roles and handover documentation guide the implementation.'},
        {title:'APIs and interoperability',text:'Data adapters and controlled interfaces for legacy systems, EHR workflows and databases, including SmartCare and SmartCare Pro. Integration depends on authorised access, documented formats and the relevant system owner’s approval.'}
      ],
      faq:[['Do we need to replace our existing software?','Not necessarily. We map what already works, then decide what to connect, repair, configure or build.'],['Can AI work without an internet connection?','Some use cases can use local models. Device capacity, model quality, update processes and safeguards need to be tested for your particular workflow.']]
    },
    {
      slug:'infrastructure',number:'02',name:'IT infrastructure, networks & support',icon:'network',
      summary:'Servers, workstations and properly documented networks, with a support plan.',
      headline:'The hardware and network your operations depend on.',
      intro:'A useful application still needs working computers, reliable connectivity and a plan for outages. We supply, install, maintain and document that foundation.',
      audience:'Offices, schools, health sites, engineering businesses and remote teams that need practical IT delivery.',
      outcomes:['An equipment and licensing specification','Installed, configured and labelled infrastructure','Network diagrams, inventories and administrator handover','Preventive maintenance and response terms agreed in writing'],
      items:[
        {id:'servers',title:'Servers and storage',text:'Dell and HP server supply, deployment and administration. We scope storage, racks, local domain services and SAN requirements against workload, power and support needs.'},
        {title:'Computers, laptops and printers',text:'Workstation provisioning, network printer configuration and accessories. Hardware is selected around the actual tasks, budget, licensing and warranty arrangements.'},
        {title:'Operating systems and databases',text:'Installation, licensing coordination, patching and hardening for operating systems and database environments, including PostgreSQL and MySQL. Backup and restore responsibilities are part of the scope.'},
        {title:'Field power and data kits',text:'Low-power micro-servers, offline collectors and backup-power options for remote sites. Solar, lithium storage and installation requirements need site assessment, appropriately qualified installation and clear maintenance ownership.'},
        {title:'Structured cabling and rack dressing',text:'CAT6/CAT6A and fibre installations, patch-panel termination, labelling and cable management. We document the layout so a future fault does not become a guessing exercise.'},
        {title:'Network configuration and connectivity',text:'Routing, switching, VLANs, bandwidth planning, Wi-Fi tuning, VoIP, ISP failover and branch VPNs. Changes include a test plan and a record of the final configuration.'},
        {title:'Network upgrades and upkeep',text:'Performance checks, bottleneck identification, equipment upgrades and routine cable-plant maintenance. We keep a record of the change and its effect on the network.'},
        {id:'support',title:'Technical support and maintenance',text:'Helpdesk, remote administration, monitoring, software patching and preventive checks for computers, servers, networking devices, databases and accessories. Monitored assets, coverage and exclusions are written into the support agreement.'},
        {title:'Service levels and local response',text:'Discuss priority on-site support in Lusaka, including an under-one-hour response target where the service area, severity, staffed hours and capacity have been expressly agreed. Response time is not a guarantee of immediate resolution or zero downtime.'},
        {title:'Scheduled care and documentation',text:'Quarterly preventive visits can be included in a maintenance plan. Each project includes agreed network maps, equipment/configuration records, incident reporting and plain-language handover notes.'}
      ],
      faq:[['Can you support equipment we already own?','Yes, subject to an initial assessment of condition, licences, warranties and support access. The agreement makes supported equipment and exclusions clear.'],['Is an under-one-hour visit guaranteed everywhere?','No. Any priority response target applies only to the location, severity and service window written into the signed support agreement.']]
    },
    {
      slug:'security-communications',number:'03',name:'Security, access & communications',icon:'shield',
      summary:'Protect a site, control access and reach the right people with purposeful messages.',
      headline:'Protect your premises. Keep communication useful.',
      intro:'Security starts with the way a place is used. Communication starts with the reason a message is being sent. We design both around the people and procedures involved.',
      audience:'Businesses, homes, campuses and organisations managing premises, access or customer communications.',
      outcomes:['A site or communication-workflow assessment','An installation/integration plan with clear responsibilities','Tested access, retention and notification settings','User training, documentation and maintenance terms'],
      items:[
        {title:'CCTV installation and maintenance',text:'Camera placement, IP configuration and recording-system setup based on a site survey. We help reduce avoidable coverage gaps and support authorised footage review after an incident, subject to recording availability and retention.'},
        {title:'Access control systems',text:'Door controllers, RFID cards and biometric options selected against user numbers, procedures and security needs. Access and attendance records require appropriate privacy, permission and retention controls.'},
        {title:'Cybersecurity and threat management',text:'Endpoint protection, network firewalls, email safeguards, hardening and staff awareness. Security testing and incident responsibilities are agreed as part of the engagement.'},
        {title:'AI governance and privacy advisory',text:'Review use cases, policies, data handling and technical safeguards with Zambia’s Data Protection Act No. 3 of 2021 and AI-management frameworks such as ISO/IEC 42001 in view. Advisory or framework alignment is not a certification or a blanket compliance guarantee.'},
        {title:'Bulk SMS and messaging gateways',text:'Promotional messages, operational notifications and OTP workflows with controlled APIs. We scope recipient permissions, opt-outs, delivery reporting, segmentation, supplier pricing and message limits.'},
        {title:'Targeted campaigns and outreach',text:'Audience-specific customer updates, health alerts and transactional notifications. Automations have review points and suppression rules so a useful workflow does not become unwanted broadcasting.'}
      ],
      faq:[['Can CCTV eliminate every blind spot?','A site survey helps identify coverage needs and limitations. The final camera plan, lighting and retention settings are agreed with you; no installation makes every incident observable.'],['Can bulk SMS connect to our existing system?','Where your system and provider support an authorised integration, yes. We first confirm the API, message purpose, contact permissions and cost controls.']]
    },
    {
      slug:'research-data',number:'04',name:'Research, evaluation & analytics',icon:'data',
      summary:'Field evidence, programme evaluation and reporting that helps a team decide.',
      headline:'Ask a useful question. Build evidence you can use.',
      intro:'We connect research methods, field operations and analysis so the final output can inform a decision, not just occupy a folder.',
      audience:'NGOs, donors, government programmes, research institutions, CBOs and FBOs.',
      outcomes:['An agreed question, methodology and indicator framework','Quality-controlled collection and documented data handling','Analysis and reporting linked to the evidence','Optional dashboards with documented refresh and access rules'],
      items:[
        {title:'Programme evaluations',text:'Baseline, midline, endline, formative, summative, process and impact evaluations. Method selection, sampling and limits are agreed before fieldwork, with a report that distinguishes evidence from inference.'},
        {title:'Field data collection',text:'Local quantitative and qualitative collection teams using digital tools. Training, supervision, consent and quality checks are included in the field plan.'},
        {title:'Data cleaning and analysis',text:'Documented validation, indicator calculation and interpretation. We make missing data and quality limitations visible instead of hiding them behind a dashboard.'},
        {title:'Embedded dashboards and iMap Analytics',text:'Translate evaluation and operational reporting into interactive views where appropriate. Indicator definitions, access permissions and refresh frequency are explicit; live data is not promised unless a working source supports it.'},
        {title:'Geographic and sector reporting',text:'Spatial and programme views for health, education, agriculture, climate and development. The map supports the question, with appropriate aggregation and privacy controls.'}
      ],
      faq:[['Can reports match a donor’s format?','We can scope the indicator definitions, templates and reporting requirements with you before building the output.'],['Do all evaluations need a dashboard?','No. A clear report may be the right output. We add a dashboard when repeated decisions, updates and users justify it.']]
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
