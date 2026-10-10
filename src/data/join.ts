// Content of the /join/ page. Everything here is a first draft — TODO: review every item.

export const JOIN = {
  // Set `open: true` on a position below to show it; while none are open, the page shows `noPositions` instead.
  intro:
    'We are recruiting PhD students, postdocs, visiting researchers, and interns. We work on relational learning, reasoning, generative AI, AI for mathematics, and AI for science, with a particular focus on applications in the life sciences.',
  introClosed:
    'We work on relational learning, reasoning, generative AI, AI for mathematics, and AI for science, with a particular focus on applications in the life sciences.',
  noPositions:
    'There are currently no open positions in the group. New positions will be announced here and in our news.',

  positions: [
    {
      title: 'PhD Student',
      open: false,
      lead: 'Join the group as a PhD student working on relational learning, reasoning, generative AI, AI for mathematics, or AI for science.',
      lookingFor: [
        'Strong background in machine learning, mathematics, theoretical computer science, or a related field',
        'Interest in learning from relational and structured data',
        'Alignment with one or more of our research areas',
      ],
      offer: [
        'Fully funded position for the duration of the PhD [TODO: confirm]',
        'Competitive salary and benefits [TODO: programme / funding source]',
        'Access to GPU compute and a collaborative research environment',
        'Collaborations with international partners [TODO: name them]',
      ],
      body: 'PhD students in the group lead projects end-to-end, from problem formulation and method development to publication, while collaborating closely with labmates and external partners. [TODO: which doctoral programme(s) to apply through, and the next deadline.]',
    },
    {
      title: 'Postdoctoral Researcher',
      open: false,
      lead: 'Join the group as a postdoc and lead independent research projects within the group’s themes.',
      lookingFor: [
        'PhD (completed or near completion) in machine learning, computer science, mathematics, or a related field',
        'A strong publication record in graph learning, relational learning, reasoning, or adjacent areas',
        'Ability to mentor junior students and contribute to collaborative projects',
      ],
      offer: [
        'Competitive postdoctoral salary with benefits [TODO: confirm]',
        'Flexible research direction within the group’s themes',
        'Access to GPU compute and cross-disciplinary collaborators',
        'Support for developing an independent research profile',
      ],
      body: 'Postdocs drive their own research agenda in collaboration with the PI, co-mentor students, and build toward their next independent position. [TODO: specific topics you are particularly interested in.]',
    },
    {
      title: 'Visiting Researcher',
      open: false,
      lead: 'Spend time in the group as a visiting researcher to collaborate on shared interests.',
      lookingFor: [
        'Current affiliation at another research institution, university, or industry lab',
        'Research interests that overlap with the group’s themes',
        'A proposed collaboration that benefits from an in-person visit',
      ],
      offer: [
        'Desk space and access to research infrastructure',
        'Collaboration with group members',
        'Inclusion in reading groups and seminars',
        'Help with visa invitation letters [TODO: confirm]',
      ],
      body: 'Visits are most productive when there is a clear, shared research question. Please reach out with a short description of the planned work and preferred dates.',
    },
    {
      title: 'Research Intern',
      open: false,
      lead: 'Join the group for a short research internship, typically 3–6 months, on a defined project.',
      lookingFor: [
        'Current undergraduate, master’s, or early PhD student',
        'Strong programming skills (Python; PyTorch or JAX)',
        'Coursework or project experience in machine learning',
        'A specific interest aligned with the group’s research',
      ],
      offer: [
        'Mentorship from a group member on a well-defined project',
        'Hands-on experience with current research in graph machine learning',
        'Access to compute and the group’s research environment',
        'Opportunity to contribute to publications where appropriate',
      ],
      body: 'Internships are project-based and typically in person. When reaching out, please include your CV, a brief statement of what you would like to work on, and relevant code or projects.',
    },
  ],

  steps: [
    {
      title: 'Explore our research',
      text: 'Read the Research and Publications pages to find an area you would be excited to work on. A specific overlap makes a much stronger application than a generic interest in ML.',
    },
    {
      title: 'Prepare your materials',
      text: 'A short research statement (why this group, what you would work on), your CV, and the names of one or two references.',
    },
    {
      title: 'Get in touch',
      text: 'Send a concise, specific email to the address below. Tell us in your own words what you want to work on and why; generic or mass-mailed applications are easy to spot.',
    },
    {
      title: 'We’ll follow up',
      text: 'If there is a fit, we will set up a conversation and discuss the relevant programmes and deadlines.',
    },
  ],

  emailSubject: '[Saka Research] Application: <position>',
  emailBody: `Dear İsmail,

My name is <your name> and I am currently <current position> at <institution>.

I am interested in the <position> position. I would like to work on <topic>, because <reason>. In particular, your paper <paper> relates to my work on <your work>.

I have attached my CV and a short research statement.

Best regards,
<your name>`,
};
