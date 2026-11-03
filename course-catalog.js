const COURSE_CATALOG = {
  'computer-fundamentals': {
    title: 'Computer Fundamentals', department: 'IT', level: 'Beginner', image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=1200&q=85',
    description: 'Understand computers, hardware, software, memory, storage, files, and everyday digital workflows.',
    lessons: ['What a computer is','Hardware and software','Central processing unit','Input devices','Output devices','Memory and RAM','Storage devices','Motherboards and ports','Operating systems','Files and folders','Computer start-up sequence','Buying and maintaining a computer','Cloud storage basics','Accessibility features','Practical computer setup lab','Computer fundamentals final project'],
    focus: 'Beginner computer literacy'
  },
  'operating-systems': {
    title: 'Operating Systems', department: 'IT', level: 'Beginner to Intermediate', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
    description: 'Build confidence with Windows, Linux, processes, permissions, settings, shortcuts, and troubleshooting.',
    lessons: ['What an operating system does','Windows desktop and Start menu','Windows settings and accounts','File Explorer and paths','Windows shortcuts','Windows troubleshooting','Linux desktop and terminal','Linux files and commands','Users and permissions','Processes and services','Updates and backups','Installing applications safely','Virtual machines and labs','Recovering from system errors','Cross-platform final lab'],
    focus: 'Windows and Linux essentials'
  },
  'networking-basics': {
    title: 'Networking Basics', department: 'IT', level: 'Beginner to Intermediate', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',
    description: 'Learn IP addressing, cables, routers, switches, Wi-Fi, LAN/WAN, DNS, and practical network labs.',
    lessons: ['How networks communicate','Network types: LAN, WAN and PAN','Network topologies','Network interface cards','Routers and switches','Ethernet cables and ports','IP addresses and subnet basics','DHCP and private networks','DNS and the internet','Wi-Fi standards and security','Connecting a simple lab network','Testing with ping and tracert','Troubleshooting common network faults','Network monitoring basics','Routing lab project','Network final project'],
    focus: 'Networking foundations'
  },
  'cybersecurity-basics': {
    title: 'Cybersecurity Basics', department: 'IT', level: 'Intermediate', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85',
    description: 'Protect accounts, devices, and data using passwords, MFA, phishing awareness, backups, and safe browsing.',
    lessons: ['Security threats and risk','Password design and managers','Multi-factor authentication','Phishing and social engineering','Malware and ransomware','Safe downloads and software updates','Browser security settings','Firewalls and antivirus','Network security basics','Privacy and permissions','Data backup strategies','Incident response basics','Safe remote work','Cybersecurity career roadmap','Personal security audit','Security final challenge'],
    focus: 'Defensive security'
  },
  'microsoft-office': {
    title: 'Microsoft Office Complete', department: 'IT', level: 'Beginner to Intermediate', image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1200&q=85',
    description: 'Master Word, Excel, and PowerPoint through practical documents, data analysis, and presentations.',
    lessons: ['Office interface and account setup','Word document structure','Word styles and headings','Word tables, images and citations','Excel workbook basics','Excel formatting and validation','Excel formulas and functions','Excel sorting and filtering','Excel charts and dashboards','Excel pivot table basics','PowerPoint slide planning','PowerPoint themes and masters','Accessible presentation design','Charts, images and animation','Printing and exporting','Integrated Office portfolio project'],
    focus: 'Office productivity'
  },
  'html-course': {
    title: 'HTML Complete Course', department: 'Web Designing', level: 'Beginner', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=85',
    description: 'Build semantic, accessible, well-structured web pages with every core HTML feature.',
    lessons: ['The web and HTML','First HTML document','Headings and paragraphs','Text formatting and links','Images and paths','Lists and tables','Semantic landmarks','Forms and labels','Input types','Validation attributes','Audio and video','Embedded content','Metadata and document structure','Accessibility essentials','Forms project','HTML portfolio page'],
    focus: 'HTML foundations'
  },
  'css-course': {
    title: 'CSS Complete Course', department: 'Web Designing', level: 'Beginner to Advanced', image: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?auto=format&fit=crop&w=1200&q=85',
    description: 'Style responsive interfaces using selectors, the cascade, flexbox, Grid, motion, and modern CSS.',
    lessons: ['CSS and the cascade','Selectors and specificity','Units, colors and variables','Typography','Box model','Display and positioning','Flexbox fundamentals','Flexbox projects','CSS Grid fundamentals','Grid areas and responsive tracks','Backgrounds and borders','Pseudo-classes and pseudo-elements','Transitions','Keyframe animations','Responsive media queries','Container queries','Forms styling','Dark themes','CSS architecture','Performance and reduced motion','CSS component project','Final responsive website'],
    focus: 'Modern CSS'
  },
  'javascript-beginners': {
    title: 'JavaScript for Beginners', department: 'Web Designing', level: 'Beginner', image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=1200&q=85',
    description: 'Learn JavaScript syntax, functions, arrays, objects, events, DOM updates, APIs, and mini projects.',
    lessons: ['Adding JavaScript to a page','Variables and constants','Data types','Operators and comparisons','Strings and numbers','Conditions','Loops','Functions','Arrays','Objects','Scope and callbacks','DOM selection','Changing content and styles','Browser events','Forms and validation','Browser storage','Fetch and APIs','Debugging','Timer and animation project','Final JavaScript application'],
    focus: 'JavaScript fundamentals'
  },
  'responsive-web': {
    title: 'Responsive Web Design', department: 'Web Designing', level: 'Intermediate', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85',
    description: 'Create layouts that remain clear and usable across phones, tablets, laptops, and large displays.',
    lessons: ['Responsive design principles','Viewports and breakpoints','Mobile-first workflow','Fluid sizing and max widths','Responsive images','Responsive navigation','Responsive typography','Media queries','Container queries','Touch and keyboard testing','Framework comparison','Bootstrap layout basics','Tailwind layout basics','Responsive QA','Multi-device portfolio project'],
    focus: 'Multi-device layout'
  },
  'uiux-fundamentals': {
    title: 'UI/UX Fundamentals', department: 'Web Designing', level: 'Beginner to Intermediate', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=85',
    description: 'Learn user-centered design, typography, color, layout, accessibility, wireframes, and Figma.',
    lessons: ['UI, UX and user needs','Design research basics','Personas and journeys','Information architecture','Wireframing','Low-fi to high-fi design','Typography systems','Color theory and contrast','Layout and visual hierarchy','Components and states','Accessibility in design','Figma interface basics','Figma components and prototypes','Usability testing','Portfolio case study'],
    focus: 'Interface design'
  },
  'wordpress-course': {
    title: 'WordPress Website Builder', department: 'Web Designing', level: 'Beginner to Intermediate', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
    description: 'Install WordPress, configure themes and plugins, publish content, and build a complete website.',
    lessons: ['WordPress concepts and hosting','Local or managed installation','Dashboard overview','Pages and posts','Block editor basics','Navigation menus','Media library','Themes and site identity','Plugins and updates','Forms and contact pages','SEO basics','Security and backups','User roles and permissions','WooCommerce overview','Performance and accessibility','Full website launch project'],
    focus: 'WordPress publishing'
  },
  'introduction-ai': {
    title: 'Introduction to AI', department: 'AI', level: 'Beginner', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85',
    description: 'Discover AI history, types, daily applications, capabilities, limits, and modern systems.',
    lessons: ['What is artificial intelligence?','History of AI milestones','AI, ML and deep learning','Rule-based systems','Predictive AI','Generative AI','Computer vision','Natural language processing','AI in daily life','AI career paths','Recognizing AI limits','Safe introduction project'],
    focus: 'AI literacy'
  },
  'chatgpt-ai-tools': {
    title: 'ChatGPT and AI Tools for Students', department: 'AI', level: 'Beginner', image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=1200&q=85',
    description: 'Use prompts, evaluation, summaries, study plans, coding assistants, and student AI tools responsibly.',
    lessons: ['How chat AI responds','Prompt purpose and audience','Prompt context and constraints','Role and format prompts','Examples and few-shot prompts','Summarizing study material','Generating explanations and quizzes','AI study schedules','Coding assistant workflows','Research and source checking','Multimodal AI tools','Academic integrity','AI tool comparison','Privacy and accounts','Prompt engineering project','AI student toolkit final project'],
    focus: 'Applied AI prompting'
  },
  'machine-learning': {
    title: 'Machine Learning Basics', department: 'AI', level: 'Beginner to Intermediate', image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=85',
    description: 'Understand training data, learning types, evaluation, predictions, and real examples without heavy math.',
    lessons: ['What machine learning learns','Data, features and labels','Training and inference','Supervised learning','Classification examples','Regression examples','Unsupervised learning','Clustering examples','Train, validation and test sets','Overfitting and underfitting','Accuracy and confusion matrices','Bias in datasets','Responsible evaluation','Simple no-code ML project','ML roadmap project'],
    focus: 'Conceptual machine learning'
  },
  'ai-image-content': {
    title: 'AI Image and Content Tools', department: 'AI', level: 'Intermediate', image: 'https://images.unsplash.com/photo-1686191128892-3b37add4c9a7?auto=format&fit=crop&w=1200&q=85',
    description: 'Create and evaluate images, audio, video, documents, and study content with approved AI tools.',
    lessons: ['How visual generation works','Prompt anatomy for images','Composition and lighting prompts','Negative prompts and iteration','Image rights and consent','AI video tools','AI voice and audio','Text-to-presentations','AI for study notes','Brand consistency','Detecting synthetic media','Copyright and disclosure','Content planning workflow','Responsible content project'],
    focus: 'Generative content'
  },
  'ai-ethics-safety': {
    title: 'AI Ethics and Safety', department: 'AI', level: 'Beginner to Intermediate', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=85',
    description: 'Recognize misinformation, deepfakes, bias, privacy risks, and build responsible AI habits.',
    lessons: ['Responsible AI principles','Bias and fairness','Privacy and personal data','Misinformation and hallucinations','Deepfake recognition','Human oversight','Accessibility and inclusion','Safety in high-impact decisions','Copyright and academic integrity','Reporting harmful AI behavior','AI risk checklist','Responsible AI review project'],
    focus: 'AI governance'
  }
};
