const COURSE_CONTENT = {
  'ai-courses': {
    title: 'AI for Everyday Learning',
    storageKey: 'ai',
    chapters: [
      {
        id: 'ai-1', title: 'Chapter 1 · What AI is', summary: 'Separate artificial intelligence, machine learning, and everyday automation.',
        lesson: 'Artificial intelligence is a broad name for computer systems that perform tasks people associate with perception, language, prediction, or decision support. Machine learning is one approach: a system learns patterns from examples rather than following only hand-written rules. A calculator is useful automation, but it does not learn from the examples you enter.',
        activity: 'List one task where a computer follows fixed rules and one where a model finds patterns in examples.',
        question: 'Which statement best describes machine learning?', options: ['A computer learns patterns from examples', 'A computer only stores photos', 'A person writes every possible answer into a list', 'A screen displays information'], answer: 0,
        explanation: 'Machine-learning systems use examples to fit patterns that help them make predictions or generate outputs.'
      },
      {
        id: 'ai-2', title: 'Chapter 2 · How AI tools respond', summary: 'Understand training examples, prompts, outputs, and uncertainty.',
        lesson: 'A text-generation tool receives your prompt and uses patterns learned during training to produce a likely continuation. It does not automatically know whether every sentence is true, current, or suitable for your situation. Clear context can improve relevance, while important claims still need checking.',
        activity: 'Ask the same question with and without context. Compare which response is easier to use and what still needs verification.',
        question: 'Why should you verify an AI-generated answer?', options: ['It can produce plausible but incorrect information', 'It always refuses to answer', 'It can only use numbers', 'It remembers every source perfectly'], answer: 0,
        explanation: 'Fluent writing is not proof of accuracy; verify claims against reliable sources.'
      },
      {
        id: 'ai-3', title: 'Chapter 3 · AI as a study partner', summary: 'Use hints, examples, and active recall without outsourcing the learning.',
        lesson: 'Use AI to explain a difficult idea at a simpler level, generate a fresh example, or quiz you one question at a time. Try answering before you ask for the solution. Then compare your reasoning and correct your notes. This keeps the learner, not the tool, doing the thinking.',
        activity: 'Request three practice questions on a topic, answer them from memory, then ask for feedback with explanations.',
        question: 'Which workflow best supports learning?', options: ['Ask for the final answer and submit it unchanged', 'Attempt a question, request a hint, then check your reasoning', 'Avoid reviewing mistakes', 'Copy a long response without reading it'], answer: 1,
        explanation: 'Retrieval practice and feedback help you remember and understand the material.'
      },
      {
        id: 'ai-4', title: 'Chapter 4 · Write a useful prompt', summary: 'Give a task, context, constraints, and a clear output format.',
        lesson: 'A useful prompt states what you need, who it is for, what background matters, and how the response should be organized. For example: “Explain CSS Grid to a beginner who knows basic HTML. Use one small code example, define each property, and finish with two practice questions.” You can improve the result by reviewing and refining it.',
        activity: 'Rewrite “teach me AI” as a prompt with an audience, topic, constraints, and output format.',
        question: 'Which detail makes a prompt more actionable?', options: ['A clear audience and requested format', 'More unrelated topics', 'A request to be vague', 'Removing all context'], answer: 0,
        explanation: 'Audience and format guide the response toward a useful level and structure.'
      },
      {
        id: 'ai-5', title: 'Chapter 5 · Research and fact-checking', summary: 'Treat AI as a starting point and confirm evidence independently.',
        lesson: 'AI can help you brainstorm search terms, outline a topic, or summarize material you provide. For factual research, open the cited source yourself, check the author and date, and compare important claims across trustworthy references. Never treat a citation as real until you can find it.',
        activity: 'Take one factual claim from an AI answer and verify it using two reliable sources.',
        question: 'What should you do with a citation supplied by an AI tool?', options: ['Open it and confirm the source supports the claim', 'Assume it is correct because it looks formal', 'Use it without checking the date', 'Replace it with a made-up title'], answer: 0,
        explanation: 'Check that the source exists, is relevant, and actually supports the statement.'
      },
      {
        id: 'ai-6', title: 'Chapter 6 · Plan and revise', summary: 'Turn a broad goal into manageable sessions and review checkpoints.',
        lesson: 'A study plan works best when it reflects your deadline, available time, priorities, and rest. Ask for a draft schedule, then adjust it to your real calendar. Include short retrieval sessions and a checkpoint where you decide what still needs attention.',
        activity: 'Create a three-day revision plan with one topic, one active-recall task, and one break each day.',
        question: 'What makes an AI-generated study timetable useful?', options: ['You check it against your real time and revise it', 'You follow it even when impossible', 'It contains no review', 'It replaces your course goals'], answer: 0,
        explanation: 'A plan is a draft; personalize it around real constraints and learning goals.'
      },
      {
        id: 'ai-7', title: 'Chapter 7 · Creative tools and projects', summary: 'Use AI to explore ideas while keeping your choices and authorship clear.',
        lesson: 'AI can help you list project directions, test alternative headlines, or create a first outline. Select and adapt ideas using your own goals and judgment. Follow the tool’s rules and your school’s policy, and be transparent when AI assistance must be disclosed.',
        activity: 'Generate three project ideas, choose one, and write two reasons based on your own interests.',
        question: 'Who is responsible for selecting and checking the final project?', options: ['The student', 'The prompt alone', 'A random output', 'The browser'], answer: 0,
        explanation: 'The learner remains responsible for choices, accuracy, originality, and policy compliance.'
      },
      {
        id: 'ai-8', title: 'Chapter 8 · Privacy, fairness, and final review', summary: 'Protect personal information and examine output for bias or harm.',
        lesson: 'Do not paste passwords, private records, or another person’s sensitive information into a tool unless you have clear authorization and an approved system. AI outputs may reflect gaps or bias in their data. Review who could be affected, remove sensitive details, and ask a teacher when the stakes are high.',
        activity: 'Review a sample AI answer: identify one claim to verify, one privacy concern, and one possible bias.',
        question: 'Which is a safer way to ask for help with a private document?', options: ['Remove names and identifying details before using an approved tool', 'Paste the full document and password', 'Share another person’s private information', 'Publish the document first'], answer: 0,
        explanation: 'Minimize personal data and use only tools approved for the information involved.'
      }
    ]
  },
  'web-design': {
    title: 'Web Design and Front-End Development',
    storageKey: 'web',
    chapters: [
      {
        id: 'web-1', title: 'Chapter 1 · How the web page fits together', summary: 'Learn the roles of HTML, CSS, JavaScript, and the browser.',
        lesson: 'HTML gives content structure and meaning. CSS controls presentation and layout. JavaScript adds behavior such as menus and validation. The browser reads these files and turns them into a page people can use. Keeping these responsibilities clear makes projects easier to change.',
        activity: 'Label one feature on a page as structure, style, or behavior, and explain why.',
        question: 'Which technology primarily describes the structure and meaning of page content?', options: ['HTML', 'CSS', 'JavaScript', 'JPEG'], answer: 0,
        explanation: 'HTML provides the document structure and semantic elements.'
      },
      {
        id: 'web-2', title: 'Chapter 2 · Semantic HTML', summary: 'Build a readable document using headings and meaningful landmarks.',
        lesson: 'A page should have a clear heading hierarchy and landmarks such as header, nav, main, and footer where appropriate. Use a button for an action and a link for navigation. Semantic markup helps assistive technology and makes the code easier for people to understand.',
        activity: 'Sketch a page outline with one main heading, two section headings, a navigation area, and a main region.',
        question: 'Which element is best for the primary unique content of a page?', options: ['<main>', '<marquee>', '<font>', '<blink>'], answer: 0,
        explanation: '<main> identifies the central content of the page.'
      },
      {
        id: 'web-3', title: 'Chapter 3 · Text, links, and images', summary: 'Write useful link labels and accessible image descriptions.',
        lesson: 'Use headings and paragraphs to organize reading. Link text should describe its destination instead of saying only “click here.” Provide meaningful alt text for informative images, and use empty alt text for purely decorative images so screen readers can skip them.',
        activity: 'Improve one vague link label and write alt text for an image that communicates course information.',
        question: 'What should alt text do for an informative image?', options: ['Describe the information the image conveys', 'Repeat the image filename', 'Always begin with “image of”', 'Contain the entire page text'], answer: 0,
        explanation: 'Alt text communicates the image’s relevant information to people who cannot see it.'
      },
      {
        id: 'web-4', title: 'Chapter 4 · CSS selectors and the box model', summary: 'Style elements and reason about content, padding, borders, and margins.',
        lesson: 'CSS rules pair a selector with declarations. Classes are reusable hooks for styling. Every element has content, padding, border, and margin. Setting box-sizing to border-box makes an element’s declared width include its padding and border, which simplifies layout calculations.',
        activity: 'Create a reusable card class with a background, internal padding, and a visible border.',
        question: 'Which box-model layer creates space inside an element’s border?', options: ['Padding', 'Margin', 'Outline', 'Line-height'], answer: 0,
        explanation: 'Padding is the space between the content and the border.'
      },
      {
        id: 'web-5', title: 'Chapter 5 · Flexbox and Grid', summary: 'Choose a layout system that matches the shape of the problem.',
        lesson: 'Flexbox is useful for arranging items along one main axis, such as a toolbar or a row of controls. Grid is useful for two-dimensional arrangements such as page regions or card collections. Both support gaps and responsive sizing; choose based on the layout, not habit.',
        activity: 'Build a two-column course overview with Grid, then use Flexbox to align its action buttons.',
        question: 'Which layout tool is designed for rows and columns together?', options: ['CSS Grid', 'The alt attribute', 'localStorage', 'A heading element'], answer: 0,
        explanation: 'CSS Grid is a two-dimensional layout system for rows and columns.'
      },
      {
        id: 'web-6', title: 'Chapter 6 · Responsive design', summary: 'Adapt content to narrow screens and test real viewport sizes.',
        lesson: 'Start with a layout that works on a small screen, then add breakpoints when the content needs more room. Use flexible widths, readable line lengths, and images that scale within their containers. Test with keyboard and touch, not only a desktop mouse.',
        activity: 'Resize a card layout to phone width and remove any horizontal scrolling or clipped text.',
        question: 'What is a sound mobile-first practice?', options: ['Start with a usable narrow layout and enhance it for wider screens', 'Design only for the largest monitor', 'Disable zoom', 'Use fixed widths for every element'], answer: 0,
        explanation: 'Mobile-first begins with constrained screens and progressively adds room where useful.'
      },
      {
        id: 'web-7', title: 'Chapter 7 · JavaScript interaction', summary: 'Respond to events and validate input without surprising the learner.',
        lesson: 'JavaScript can listen for events such as clicks, form submissions, and input changes. Keep the interface state clear: explain validation errors near the field and preserve entered information when possible. For important actions, give visible feedback that confirms what happened.',
        activity: 'Add a button that changes a status message and a form check that explains a missing field.',
        question: 'Which event is commonly used to handle a submitted form?', options: ['submit', 'paint', 'resize-image', 'hover-only'], answer: 0,
        explanation: 'The submit event lets a script validate and respond to a form submission.'
      },
      {
        id: 'web-8', title: 'Chapter 8 · Accessibility and publishing', summary: 'Check keyboard access, contrast, content, and the finished project.',
        lesson: 'A finished page should work with a keyboard, have visible focus, use understandable labels, and maintain readable contrast. Check links and images, test at several screen sizes, and ask another person to try the workflow. Publish only after reviewing the content and privacy implications.',
        activity: 'Use only the keyboard to reach every control on your project and note any missing focus state.',
        question: 'What should you verify before calling a page ready?', options: ['Keyboard access, readable contrast, links, and mobile layout', 'Only the background color', 'That every control is an image', 'That headings are omitted'], answer: 0,
        explanation: 'A final review should cover accessibility, behavior, content, and multiple screen sizes.'
      }
    ]
  }
};

COURSE_CONTENT['it-courses'] = { title: 'IT Fundamentals and Digital Skills', storageKey: 'it', chapters: [] };

const extraCourseChapters = {
  'ai-courses': [
    ['ai-9','Chapter 9 · Data and AI quality','How datasets influence model behavior.','A model learns patterns from the examples used for training. Missing, biased, duplicated, or poorly labeled data can produce misleading outputs. Start with the data question: is the source relevant, representative, recent, and permitted?','Compare two datasets for relevance, coverage, and labeling errors.','Which problem can reduce AI quality?','Biased or incomplete training data','A clear user interface','Fast internet','A labeled backup','Biased or incomplete data can reproduce gaps and distort results.'],
    ['ai-10','Chapter 10 · Machine learning types','Separate supervised, unsupervised, and reinforcement learning.','Supervised learning uses known answers to learn mappings; unsupervised learning finds structure without labels; reinforcement learning improves actions through rewards. Choose an approach from the problem and available data, not from the tool name.','Label three examples as classification, clustering, or reward-based learning.','Which approach uses examples with known answers?','Supervised learning','Unsupervised learning','Random generation','Cloud storage','Supervised learning trains with known target answers.'],
    ['ai-11','Chapter 11 · Evaluating models','Use accuracy, precision, recall, and appropriate baselines.','A model score only matters in context. Accuracy alone may hide poor minority-class detection. Precision asks how many positive predictions were right; recall asks how many real positives were found. Test with unseen data and compare against a simple baseline.','Choose precision or recall for a medical screening model and explain why.','Why use a test set separate from training data?','To measure performance on unseen examples','To make training faster','To hide mistakes','To create more prompts','Unseen data estimates how the model may perform on new cases.'],
    ['ai-12','Chapter 12 · Generative AI fundamentals','Understand tokens, context, and probabilistic output.','Generative systems predict likely sequences based on patterns and context. They can create text, images, audio, code, or video, but their outputs are probabilistic. Context length limits the amount of information visible at once.','Ask for the same writing task in two different formats and compare the constraints.','Why can a generative AI answer differ each time?','Output is selected probabilistically','The computer changes the facts intentionally','The browser stores a secret answer','The model has searched one answer','Generation commonly uses probability rather than a fixed single answer.'],
    ['ai-13','Chapter 13 · Image and multimodal AI','Describe text, image, audio, and combined inputs responsibly.','Multimodal systems accept or produce several kinds of information. Effective image prompts describe subject, setting, composition, lighting, and style; image tools must not be used to create misleading impersonations or non-consensual private images.','Write an image prompt with subject, setting, action, lighting, and format.','What belongs in a clear image prompt?','Subject, setting, and composition','Only the word “image”','Someone’s private details','A random password','Useful image prompts define visual elements and constraints.'],
    ['ai-14','Chapter 14 · AI coding assistants','Use generated code with review, testing, and security awareness.','Coding assistants can explain a function, draft a first version, and locate likely fixes. Generated code still needs local testing, dependency review, and attention to secrets, licensing, and browser or server security. Never trust output solely because it runs once.','Use a small generated function, write two tests, and review every dependency.','Why test AI-generated code?','Generated code can contain mistakes or security flaws','Generated code never needs review','Testing reduces the code to comments','JavaScript runs all code safely','Testing and review remain necessary.'],
    ['ai-15','Chapter 15 · Human oversight and safety','Identify high-impact decisions and escalation points.','AI should support, not automatically control, decisions affecting health, safety, finance, hiring, housing, or education. Keep a human able to explain, override, and challenge the system. Record limitations and escalation paths.','Identify when a loan or hiring decision must receive human review.','What is required for a high-impact AI decision?','Meaningful human oversight','Hidden decision-making','No appeal process','Automatic approval','People affected by high-impact decisions need oversight and a route to challenge outcomes.'],
    ['ai-16','Chapter 16 · Prompt patterns','Use role, constraints, examples, checks, and iterative refinement.','A strong prompt may include role, audience, task, sources, output format, and completion criteria. Few-shot prompts show examples. Ask the model to identify missing information before guessing, and verify the result.','Convert a vague science request into a prompt with constraints and verification criteria.','Which prompt pattern helps the model follow an output style?','Provide an example','Remove every instruction','Avoid the audience','Do not state the task','Examples provide a concrete pattern for format or reasoning.'],
    ['ai-17','Chapter 17 · AI product design','Design useful workflows around failure, feedback, and trust.','Good AI products identify a real problem, define expected quality, handle uncertain output, collect feedback, and make limitations visible. Add escape paths instead of forcing users to accept a result.','Sketch an AI homework helper with source checks and a “I do not know” state.','What improves trust in an AI product?','Clear limits, feedback, and verification paths','More confident-sounding text','Hiding uncertainty','Removing explanations','Transparency and useful failure states support trust.'],
    ['ai-18','Chapter 18 · Automation with AI','Use AI inside bounded workflows with checks and permissions.','Automation can route content, summarize approved material, or draft notifications. Set permissions, logs, rate limits, validation, and human approval before actions affect real systems or people.','Design a safe email-draft workflow that requires approval before sending.','Which control should an AI automation include before sending messages?','Human approval and validation','Automatic publication without checks','Shared passwords','Unlimited retries','External actions need boundaries and authorization.'],
    ['ai-19','Chapter 19 · AI project workflow','Plan a complete, measurable, responsible project.','A useful AI project starts with a problem, baseline, dataset, evaluation plan, privacy limits, and stakeholder needs. Build a small version, measure it with representative cases, document failures, and decide whether deployment is safe.','Write a four-line project brief for a classroom vocabulary assistant.','What should come before building the model?','A problem and evaluation plan','A polished presentation','A deployment password','A random dataset','Define the problem and success measures first.'],
    ['ai-20','Chapter 20 · AI career roadmap','Plan skills, projects, and responsible career paths.','Career paths include AI literacy, data analysis, prompt and product work, applied machine learning, model engineering, safety, and AI operations. Build transferable skills in mathematics, programming, data, communication, ethics, and project delivery.','Create a 12-week learning plan with one portfolio project.','Which combination supports an AI career most broadly?','Programming, data, communication, and responsible practice','Only memorized model names','Only decorative prompts','No project experience','Strong technical and communication foundations support applied AI work.']
  ],
  'web-design': [
    ['web-9','Chapter 9 · HTML forms and validation','Create accessible fields and meaningful labels.','Use label elements connected by for and id, use appropriate input types, group related controls, and provide helpful instructions. HTML validation supports required, pattern, min, max, and related constraints, but JavaScript and server code should validate data too.','Build a registration form with name, email, password, and age.','Which control improves a form’s accessibility?','A label associated with an input','A placeholder without a label','Only color for errors','A button without text','Programmatic labels help assistive technology identify controls.'],
    ['web-10','Chapter 10 · HTML tables and multimedia','Present structured data and media with context.','Use tables for relational data, not page layout. Add a caption, headers, and scope where useful. Video and audio need controls and fallbacks; captions and transcripts make content accessible.','Create a weekly schedule table with header cells.','What should a data table contain for accessibility?','Headers and meaningful structure','Merged cells everywhere','Only colored rows','An image instead of text','Headers connect values to their row and column context.'],
    ['web-11','Chapter 11 · CSS units and colors','Choose scalable units and accessible color combinations.','Pixels can be useful for boundaries, but rem supports user font settings and percentage or viewport units support flexible sizing. Check contrast between text and background. Do not communicate status only by color.','Restyle a card using rem and clamp instead of fixed text pixels.','Which unit commonly respects a user’s root font setting?','rem','px only','cm','vh for text','rem scales from the root font size.'],
    ['web-12','Chapter 12 · Cascade, specificity, and inheritance','Predict which CSS rule wins.','Cascade order, specificity, source order, and inheritance determine computed styles. Inspect declarations in browser DevTools when debugging. Prefer clear class selectors over repeated !important declarations.','Explain why one competing color rule wins using specificity.','Which selector usually has stronger specificity than a class?','An id selector','A universal selector','An element selector with no class','A comment','Specificity compares selector types, with ids generally stronger than classes.'],
    ['web-13','Chapter 13 · CSS transitions and motion','Use purposeful, accessible motion.','Transitions make state changes understandable, while keyframe animations can introduce sequential motion. Prefer transform and opacity for performant effects. Respect prefers-reduced-motion and avoid content that flashes rapidly.','Add a hover transition and reduced-motion alternative.','Why respect prefers-reduced-motion?','Some users experience discomfort with animation','It increases file size','It hides all images','It removes CSS variables','Reduced-motion preferences improve comfort and accessibility.'],
    ['web-14','Chapter 14 · Modern CSS layout','Use Grid areas, flexible tracks, container queries, and overflow.','Grid areas name regions clearly; minmax and auto-fit respond to available width. Container queries can style components based on their own container. Place overflow controls where scrolling remains understandable.','Create a responsive page with header, content, and sidebar areas.','Which CSS layout handles two-dimensional placement?','CSS Grid','<audio>','localStorage','alt text','Grid manages rows and columns together.'],
    ['web-15','Chapter 15 · JavaScript variables and types','Use let, const, functions, arrays, and objects.','JavaScript values include strings, numbers, booleans, arrays, objects, null, and undefined. Use const unless reassignment is needed, then let. Functions package behavior. Arrays store ordered lists, while objects store named properties.','Create a student object with name, progress, and completed lessons.','When should const be used?','When the binding will not be reassigned','For every HTML element','Only when the value is a number','Never in JavaScript','const prevents reassignment of the binding.'],
    ['web-16','Chapter 16 · Conditions and loops','Control flow with comparisons and iteration.','Conditional statements choose one path; loops repeat work for arrays or counts. Keep loop boundaries clear and avoid infinite loops. Compare strings and numbers deliberately, and avoid relying on accidental type conversion.','Write a loop that displays only course scores of 70 or more.','Which statement repeats a block while a condition is true?','while','const','<main>','alt','while repeats until its condition is no longer true.'],
    ['web-17','Chapter 17 · Functions and scope','Create reusable functions with parameters and return values.','Functions separate behavior and reduce repeated code. Parameters receive inputs, while return sends a result back. Block and function scope control where identifiers are visible. Arrow functions offer concise syntax but require different treatment of this in some contexts.','Write a function that converts a quiz score to a percentage.','What does return send back?','A function result to its caller','A style declaration','The next HTML tag','A browser cookie','return exits the function and supplies a value.'],
    ['web-18','Chapter 18 · DOM selection and updates','Find and safely update page elements.','The Document Object Model represents HTML as nodes. querySelector uses CSS selectors; textContent changes text safely, while innerHTML requires care with untrusted content. Observe whether the element exists before using it.','Create a status element, select it, and update its text.','Which property changes text safely for a DOM element?','textContent','innerHTML for user text','document.cookie','location.reload','textContent avoids parsing inserted strings as HTML.'],
    ['web-19','Chapter 19 · Browser events and forms','Respond to actions without full page reloads.','Use addEventListener for supported events, preventDefault only when handling a form, and validate data near the control. Preserve or explain user input during errors and use focus where appropriate.','Add submit handling to a contact form and show a success message.','What should preventDefault normally do for a handled submit event?','Stop the browser from sending the form normally','Clear all page styles','Reload the operating system','Disable JavaScript','preventDefault stops the browser’s default submission while custom code handles it.'],
    ['web-20','Chapter 20 · Fetch and APIs','Request data and handle loading, errors, and cancellation.','fetch returns a Promise. Check response.ok, parse the expected format, display loading feedback, and catch network failures. Never expose API secrets in client code; send sensitive operations through a server endpoint.','Create loading, success, and error states for a course search.','What does response.ok indicate?','The HTTP response returned successfully','That JSON parsing always succeeded','That no user input exists','That JavaScript is disabled','response.ok reflects successful HTTP status, usually 200–299.'],
    ['web-21','Chapter 21 · Browser storage and state','Persist user choices without treating storage as a secure database.','localStorage stores strings keyed to the current origin and remains after closing the browser. Serialize structured data with JSON and validate stored values. Never store passwords or secrets in browser storage.','Save theme preference and restore it on page reload.','Which data should never be placed in localStorage?','Passwords or private authentication secrets','Theme preference','Page language','A non-sensitive completed-list ID','Browser storage is not a secure place for credentials or secrets.'],
    ['web-22','Chapter 22 · Web accessibility engineering','Test keyboard, screen reader, focus, contrast, and motion.','Accessible controls need names, roles, visible focus, adequate contrast, logical tab order, useful error messages, and appropriate landmarks. Test with keyboard and assistive technology workflows rather than relying on appearance alone.','Use the keyboard to complete one form and fix any inaccessible step.','What makes an icon-only button understandable?','An accessible name with aria-label or text alternative','Only a tooltip that is not available by keyboard','A large border','A random title attribute','An accessible name gives assistive technology and focus users context.'],
    ['web-23','Chapter 23 · Performance and testing','Measure loading, interaction, layout, and browser compatibility.','Optimize image size, loading behavior, script placement, repeated work, and layout shifts. Test realistic devices and slow connections, inspect console errors, and use automated plus manual workflows.','Test a page, record the largest layout shift, and optimize one image.','What should performance testing include?','Realistic devices and network conditions','Only a high-performance desktop','Only source code length','A screenshot with no interaction','Real conditions reveal loading and interaction problems.'],
    ['web-24','Chapter 24 · Final portfolio roadmap','Plan, build, test, document, and publish a complete front-end project.','A strong portfolio project states a real user need, includes responsive views, meaningful interactions, accessibility, error and empty states, source control, and README instructions. Build a small scope well rather than many unfinished features.','Publish a portfolio project with a case study and source link.','Which item belongs in a portfolio case study?','Problem, process, decisions, and measurable result','Only the final screenshots','A list of every error','Private login credentials','A case study explains the problem, process, and outcome.']
  ],
  'it-courses': [
    ['it-1','Chapter 1 · Digital foundations','Understand hardware, software, data, and operating systems.','A computer combines physical components with instructions. Hardware performs operations and storage; software gives instructions; an operating system coordinates resources and applications. Data can be files, folders, settings, or information from applications.','Identify CPU, RAM, storage, and operating system roles in your own computer.','Which component provides short-term working memory?','RAM','The monitor','The printer','The power cable','RAM is temporary working memory used while programs run.'],
    ['it-2','Chapter 2 · File and folder management','Organize, rename, copy, move, archive, and back up files.','Use predictable folders and filenames, understand drives and paths, and keep a backup separate from the original. Move changes location; copy preserves the source. Avoid deleting unknown system folders.','Create a project folder with consistent file and version names.','What is a safe first step before moving important files?','Create a backup copy','Delete the originals','Rename every system folder','Disable the display','A backup protects the data during reorganizing.'],
    ['it-3','Chapter 3 · Operating systems','Compare Windows, macOS, Linux, settings, users, and updates.','Operating systems manage applications, files, devices, security, accounts, and memory. Settings and permissions control who can change the system. Updates fix defects and security issues, so users should install supported updates deliberately.','Compare a personal account with an administrator account.','Which account action should normally be limited?','Installing system-wide software and changing security settings','Opening a personal document','Creating a study folder','Changing wallpaper','Administrative actions should be limited to trusted, authorized users.'],
    ['it-4','Chapter 4 · Hardware troubleshooting','Diagnose display, power, storage, memory, and peripheral issues.','Use a repeatable process: identify symptoms, establish a recent change, inspect cables and indicators, isolate one variable, test, and document. Replaceable hardware must be handled safely with power disconnected when appropriate.','Write a troubleshooting log for a monitor that shows no image.','What is the first safe troubleshooting principle?','Isolate symptoms and possible causes','Replace every part immediately','Ignore physical connections','Reinstall the operating system without evidence','A measured process helps find the actual cause.'],
    ['it-5','Chapter 5 · Internet and networking','Understand IP addresses, Wi-Fi, routers, DNS, and cables.','A network route moves packets between devices and networks. Routers forward traffic, Wi-Fi connects devices wirelessly, and DNS translates names into addresses. Use ping and routing tools to isolate local, gateway, DNS, and remote failures.','Trace whether a website failure is local, router, DNS, or internet related.','What does DNS translate?','A domain name into a network address','A keyboard into a printer','A password into an image','A monitor into storage','DNS resolves names to addresses used by network services.'],
    ['it-6','Chapter 6 · Cybersecurity fundamentals','Recognize phishing, malware, password risk, and social engineering.','Security combines awareness, software updates, strong unique passwords, multi-factor authentication, least privilege, backups, and verified downloads. Phishing uses urgency, identity, links, or attachments to influence people.','Inspect a suspicious login email without opening its link.','Which sign may indicate phishing?','Unexpected urgency and a mismatched destination link','A known school announcement','A local study schedule','A calendar reminder from a known contact','Urgency and mismatched links often signal deception.'],
    ['it-7','Chapter 7 · Productivity with Office tools','Create documents, spreadsheets, and presentations with professional structure.','Word processors support style and layout, spreadsheets organize calculations and charts, and presentation tools communicate ideas clearly. Use descriptive headings, tables, formulas, citations, templates, and accessible slide text.','Create a spreadsheet that calculates a weekly study total.','Why use a spreadsheet formula instead of manual totals?','The result updates when source values change','To hide all values','To replace headings','To disable charts','Formulas recalculate consistently from source data.'],
    ['it-8','Chapter 8 · Cloud and collaboration','Share files securely, manage versions, and recover work.','Cloud services provide synchronized storage, collaboration, sharing controls, and recovery features. Use approved accounts, least access, version history, and links that expire. Confirm ownership before sharing student or client data.','Create a shared project folder with editor and viewer roles.','Which access principle should be followed for file sharing?','Give only the permissions each collaborator needs','Give editor access to everyone','Share the account password','Make all files public permanently','Least privilege limits accidental or unauthorized changes.'],
    ['it-9','Chapter 9 · IT support workflow','Receive, classify, investigate, resolve, and document tickets.','Good support records the issue, affected user, impact, reproduction steps, environment, actions, and resolution. Triage urgent outages carefully and avoid changing unrelated settings. Escalate when evidence or authorization is insufficient.','Write a support ticket for a laptop that cannot connect to Wi-Fi.','What belongs in a support ticket?','Symptoms, environment, impact, actions, and result','Only a complaint sentence','Unverified guesses','Other users’ passwords','Clear evidence supports efficient resolution.'],
    ['it-10','Chapter 10 · Backup and recovery','Design 3-2-1 backups, retention, restoration tests, and recovery priorities.','Backups protect against deletion, corruption, ransomware, theft, and hardware failure. Keep multiple copies on separate media or locations and test restoration. Recovery objectives define acceptable loss and downtime.','Plan a backup for a school project using separate copies and a test restore.','Why test a backup?','A backup is not useful unless it can be restored','To make all files public','To replace antivirus software','To increase network speed','Successful restoration proves recoverability.'],
    ['it-11','Chapter 11 · Linux and automation basics','Navigate the shell, permissions, processes, packages, and simple scripts.','Linux uses text commands and a hierarchical filesystem. Permissions define read, write, and execute rights. Processes show running work; shell scripts automate repeatable tasks. Never run elevated commands without understanding them.','List files, find a process, and create a harmless shell script.','Which Linux command commonly lists directory contents?','ls','paint','insert','browse','ls lists entries in the current or named directory.'],
    ['it-12','Chapter 12 · IT career roadmap','Plan help desk, systems, networking, cloud, security, and automation paths.','An IT career roadmap begins with fundamentals, support workflows, operating systems, networking, and security. Use small labs and documented projects to demonstrate skills. Choose a specialization after gaining broad practice.','Create a three-month plan for help desk certification and practice.','What should an IT learning roadmap prioritize first?','Broad digital, operating system, networking, and support fundamentals','Advanced exploitation tools','Only memorizing product names','Skipping practice labs','Foundations enable later specialization.']
  ]
};

for (const [courseKey, additions] of Object.entries(extraCourseChapters)) {
  const target = COURSE_CONTENT[courseKey];
  const makeChapter = ([id, title, summary, lesson, activity, question, correct, wrong1, wrong2, wrong3, explanation]) => ({ id, title, summary, lesson, activity, question, options: [correct, wrong1, wrong2, wrong3], answer: 0, explanation });
  if (target) target.chapters.push(...additions.map(makeChapter));
}

const courseId = document.body.dataset.course;
const course = COURSE_CONTENT[courseId];
const escapeLessonOption = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const progressStorageKey = 'ly_course_progress';
const activityStorageKey = 'ly_course_activity';
let selectedChapter = 0;

function readStoredObject(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || '{}');
    return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
  } catch { return {}; }
}

function readStoredArray(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(value) ? value : [];
  } catch { return []; }
}

function updateCourseProgress() {
  const progress = readStoredObject(progressStorageKey);
  const completed = course.chapters.filter((chapter) => progress[course.storageKey]?.[chapter.id]?.completed).length;
  const percent = Math.round(completed / course.chapters.length * 100);
  document.getElementById('courseProgressText').textContent = `${completed} of ${course.chapters.length} chapters complete · ${percent}%`;
  document.getElementById('courseProgressBar').style.width = `${percent}%`;
  document.querySelectorAll('[data-chapter-button]').forEach((button) => {
    const chapter = course.chapters[Number(button.dataset.chapterButton)];
    const done = Boolean(progress[course.storageKey]?.[chapter.id]?.completed);
    button.classList.toggle('is-complete', done);
    const status = button.querySelector('.chapter-status');
    if (status) status.textContent = done ? 'Complete' : 'Study';
  });
}

function renderChapter(index) {
  selectedChapter = index;
  const chapter = course.chapters[index];
  const progress = readStoredObject(progressStorageKey);
  const prior = progress[course.storageKey]?.[chapter.id];
  document.querySelectorAll('[data-chapter-button]').forEach((button) => button.classList.toggle('is-active', Number(button.dataset.chapterButton) === index));
  document.getElementById('chapterStage').innerHTML = `
    <div class="chapter-stage-head"><span class="chapter-number">${String(index + 1).padStart(2, '0')}</span><div><p class="eyebrow">${course.title}</p><h2>${chapter.title}</h2><p class="subtle">${chapter.summary}</p></div></div>
    <div class="lesson-copy"><h3>Learn</h3><p>${chapter.lesson}</p></div>
    <aside class="lesson-activity"><strong>Try it</strong><p>${chapter.activity}</p></aside>
    <section class="lesson-check" aria-labelledby="lessonQuestion"><div class="lesson-check-head"><span>Quick check</span><span class="subtle">Pass with 1 correct answer</span></div>
      <h3 id="lessonQuestion">${chapter.question}</h3>
      <div class="question-options">${chapter.options.map((option, optionIndex) => `<label><input type="radio" name="lessonAnswer" value="${optionIndex}"><span>${escapeLessonOption(option)}</span></label>`).join('')}</div>
      <p class="lesson-feedback" id="lessonFeedback" aria-live="polite">${prior?.completed ? 'Chapter complete. You can retake this check any time.' : ''}</p>
      <button class="primary-btn" type="button" id="checkLesson">Check answer</button>
    </section>`;
  document.getElementById('checkLesson').addEventListener('click', () => checkChapter(chapter));
  updateCourseProgress();
}

function checkChapter(chapter) {
  const choice = document.querySelector('input[name="lessonAnswer"]:checked');
  const feedback = document.getElementById('lessonFeedback');
  if (!choice) {
    feedback.textContent = 'Choose an answer before checking.';
    feedback.className = 'lesson-feedback is-warning';
    return;
  }
  const passed = Number(choice.value) === chapter.answer;
  const progress = readStoredObject(progressStorageKey);
  progress[course.storageKey] ??= {};
  const old = progress[course.storageKey][chapter.id] || { attempts: 0, completed: false, best: 0 };
  old.attempts += 1;
  old.best = Math.max(old.best, passed ? 100 : 0);
  old.completed = old.completed || passed;
  old.lastAttempt = new Date().toISOString();
  progress[course.storageKey][chapter.id] = old;
  localStorage.setItem(progressStorageKey, JSON.stringify(progress));
  const activity = readStoredArray(activityStorageKey);
  activity.push({ course: course.title, courseId: course.storageKey, chapter: chapter.title, chapterId: chapter.id, passed, score: passed ? 100 : 0, at: old.lastAttempt });
  localStorage.setItem(activityStorageKey, JSON.stringify(activity.slice(-100)));
  feedback.textContent = passed ? `Correct. ${chapter.explanation}` : `Not yet. ${chapter.explanation} Review the lesson and try again.`;
  feedback.className = `lesson-feedback ${passed ? 'is-correct' : 'is-warning'}`;
  updateCourseProgress();
}

if (course) {
  document.title = `${course.title} | Li Yi Hang Learning`;
  document.getElementById('courseHeading').textContent = course.title;
  document.getElementById('chapterList').innerHTML = course.chapters.map((chapter, index) => `
    <button class="chapter-button" type="button" data-chapter-button="${index}"><span class="chapter-index">${String(index + 1).padStart(2, '0')}</span><span class="chapter-button-copy"><strong>${chapter.title.replace(/^Chapter \d+ · /, '')}</strong><small>${chapter.summary}</small></span><span class="chapter-status">Study</span></button>`).join('');
  document.getElementById('chapterList').addEventListener('click', (event) => {
    const button = event.target.closest('[data-chapter-button]');
    if (button) renderChapter(Number(button.dataset.chapterButton));
  });
  renderChapter(0);
}
