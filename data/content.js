export const SITE = {
  name: 'SDGS Welfare Organization',
  fullName: 'Sustainable Developed Green Sindh (SDGS) Welfare Organization',
  tagline: 'Empowering Communities, Transforming Lives in Sindh',
  description:
    'A grassroots social welfare NGO guided by the Sustainable Development Goals (SDGs), dedicated to essential healthcare, quality education, rapid relief, and AI-powered digital empowerment across Sindh, Pakistan.',
  address: 'Suit-30, 3rd Floor, Snow White Complex, Shahrah e Faisal, Karachi, Sindh, Pakistan',
  phone: '021-31386683',
  cell: '0314-2220220',
  email: 'info@sdgs.com',
  founded: 'Moro, Sindh',
}

export const STATS = [
  { value: 5000, suffix: '+', label: 'Patients Treated' },
  { value: 17, suffix: '', label: 'SDG Goals Aligned' },
  { value: 1200, suffix: '+', label: 'Families Supported' },
  { value: 30, suffix: '+', label: 'Volunteers & Experts' },
]

export const PILLARS = [
  {
    icon: '🏥',
    title: 'Emergency Medical Relief',
    short:
      'Free medical camps and mobile medical vans bring essential healthcare, diagnostics, and medicines directly to vulnerable communities.',
    detail:
      'In many remote and disaster-affected areas of Sindh, basic medical care is out of reach. We organize heavily equipped, free medical camps and deploy our red mobile medical vans with volunteer doctors and nurses. We provide comprehensive health check-ups, diagnostics, and free medicine distribution, ensuring maternal and pediatric health stays a priority no matter the location.',
  },
  {
    icon: '🛟',
    title: 'Disaster Response & Social Welfare',
    short:
      'Rapid response teams deliver food rations, survival supplies, and heat wave relief camps to families facing climate adversity.',
    detail:
      'Sindh is increasingly vulnerable to extreme weather and climate adversity. When disaster strikes, we are immediately on the ground. We distribute emergency food rations and survival supplies, and during life-threatening summer temperatures we proactively set up heat wave relief camps providing hydration, shade, and medical support to prevent heatstroke and save lives.',
  },
  {
    icon: '🎓',
    title: 'Education for the Future',
    short:
      'We fund makeshift schools, provide learning resources, and run youth tree-planting campaigns to nurture the next generation.',
    detail:
      'Education is the foundation of any sustainable community. We fund and support local learning centers, providing vital resources, books, and safe outdoor school settings for children lacking formal infrastructure. Beyond the classroom, we foster environmental responsibility through interactive tree-planting campaigns and climate awareness drives.',
  },
]

export const PROJECTS = [
  {
    slug: 'ai-mazdoor',
    title: 'AI-Mazdoor — AI-Powered Livelihood Platform',
    tagline: 'Connecting workers with decent work through AI',
    category: 'AI & Digital Empowerment',
    status: 'Latest',
    image: '/images/relief.jpeg',
    sdgs: [1, 8, 9],
    summary:
      'Our flagship digital project, AI-Mazdoor (مزدور, "worker"), is an AI-powered platform that connects informal workers with fair, decent work opportunities across Sindh. Using intelligent skills matching, digital ID verification, and transparent wage tracking, it empowers mazdoors to earn with dignity.',
    description: `AI-Mazdoor is our latest project and a cornerstone of our digital transformation vision. The platform uses an intelligent AI agent to match workers — from daily-wage laborers and domestic workers to artisans and drivers — with verified employers and fair wage opportunities.

Key features include:
• AI skills matching that pairs workers with suitable work based on their experience.
• Digital worker IDs that build a portable, verifiable employment history.
• Transparent wage tracking and fair-payment guarantees.
• Financial literacy and upskilling guidance delivered through the AI agent.
• Partnerships with local employers to open doors for thousands of informal workers.

By combining artificial intelligence with grassroots reach, AI-Mazdoor directly advances SDG 1 (No Poverty), SDG 8 (Decent Work & Economic Growth), and SDG 9 (Industry, Innovation & Infrastructure).`,
    impact: 'Targeting thousands of informal workers connected to decent, AI-matched work opportunities with fair wages.',
  },
  {
    slug: 'medical-camps',
    title: 'Medical Camp for Flood Affected areas of Sindh 2022',
    tagline: 'Emergency care in District Naushero Feroze',
    category: 'Healthcare',
    status: 'Completed',
    image: '/images/med-camp.jpeg',
    sdgs: [3],
    summary:
      'Emergency medical camps in District Naushero Feroze treated hundreds of patients suffering from waterborne diseases, skin infections, and malnutrition after the 2022 floods.',
    description: `In response to the 2022 floods, we set up emergency medical camps in District Naushero Feroze. Our teams treated hundreds of patients suffering from waterborne diseases, skin infections, and malnutrition, providing free medicine and critical care.`,
    impact: 'Hundreds of flood-affected patients treated with free medicine and critical care.',
  },
  {
    slug: 'emergency-relief',
    title: 'Disaster Response & Social Welfare',
    tagline: 'A vital lifeline during climate adversity',
    category: 'Relief',
    status: 'Ongoing',
    image: '/images/relief.jpeg',
    sdgs: [1, 2, 13],
    summary:
      'Rapid response teams distribute emergency food rations, survival supplies, and set up heatwave relief camps to provide critical hydration and shade for vulnerable families.',
    description: `Our rapid response teams distribute emergency food rations, survival supplies, and set up heatwave relief camps to provide critical hydration and shade for vulnerable families.`,
    impact: 'Continuous rapid-response relief across Sindh during extreme weather events.',
  },
  {
    slug: 'education-initiatives',
    title: 'Students Supported in Local Education Initiatives',
    tagline: 'Keeping children learning through crisis',
    category: 'Education',
    status: 'Ongoing',
    image: '/images/edu.jpeg',
    sdgs: [4],
    summary:
      'This project funds makeshift schools, provides vital resources, and sets up safe outdoor learning environments to keep children learning even where formal infrastructure is missing.',
    description: `This project funds makeshift schools, provides vital resources, and sets up safe outdoor learning environments to keep children learning even in areas lacking formal infrastructure.`,
    impact: 'Scores of children supported through makeshift schools and learning resources.',
  },
  {
    slug: 'poverty-elevation',
    title: 'Poverty Elevation — Community Livelihoods',
    tagline: 'Sustainable income pathways out of poverty',
    category: 'Livelihoods',
    status: 'Ongoing',
    image: '/images/flood-camp.jpeg',
    sdgs: [1, 5, 8],
    summary:
      'Lifting vulnerable families out of extreme poverty through cash-for-work, livelihood training, small enterprise grants, and agricultural support — prioritizing women-headed households.',
    description: `Our Poverty Elevation program focuses on lifting the most vulnerable families out of extreme poverty through cash-for-work, livelihood training, small enterprise grants, and agricultural support. We prioritize women-headed households and those displaced by climate shocks, combining short-term relief with sustainable income pathways.`,
    impact: 'Vulnerable families moved onto sustainable income pathways with an emphasis on women-headed households.',
  },
  {
    slug: 'ramzan-rashan',
    title: 'Ramzan Ration Distribution',
    tagline: 'Food security during the holy month',
    category: 'Food Security',
    status: 'Seasonal',
    image: '/images/ramzan.jpeg',
    sdgs: [1, 2],
    summary:
      'Seasonal distribution of essential food rations to struggling families during the holy month of Ramzan.',
    description: `During Ramzan, we distribute essential food rations to struggling families, ensuring no household goes without a meal during the holy month.`,
    impact: 'Hundreds of families supported with essential food rations every Ramzan.',
  },
  {
    slug: 'flood-medical-mission',
    title: 'Flood Medical Mission',
    tagline: 'Mobile medical vans on the front line',
    category: 'Healthcare',
    status: 'Completed',
    image: '/images/flood-med.jpeg',
    sdgs: [3, 6],
    summary:
      'Mobile medical vans delivered urgent healthcare and clean-water guidance to displaced families in flood-affected districts.',
    description: `Our mobile medical vans delivered urgent healthcare, diagnostics, and clean-water guidance to displaced families in flood-affected districts across Sindh.`,
    impact: 'Mobile healthcare brought directly to displaced families.',
  },
  {
    slug: 'tree-plantation',
    title: 'Youth Tree-Plantation Campaign',
    tagline: 'Green Sindh — climate action through green youth',
    category: 'Environment',
    status: 'Ongoing',
    image: '/images/environment/1.jpeg',
    sdgs: [13, 15],
    summary:
      'A youth-driven tree-planting and climate awareness campaign nurturing environmental stewardship across Sindh.',
    description: `We organize interactive tree-planting campaigns and climate awareness drives to nurture a spirit of environmental responsibility in our youth — cultivating citizens who will lead Sindh into a sustainable future.`,
    impact: 'Growing green cover and climate awareness through youth action.',
  },
]

export const SDG_NAMES = [
  'No Poverty',
  'Zero Hunger',
  'Good Health & Well-Being',
  'Quality Education',
  'Gender Equality',
  'Clean Water & Sanitation',
  'Affordable & Clean Energy',
  'Decent Work & Economic Growth',
  'Industry, Innovation & Infrastructure',
  'Reduced Inequalities',
  'Sustainable Cities & Communities',
  'Responsible Consumption & Production',
  'Climate Action',
  'Life Below Water',
  'Life on Land',
  'Peace, Justice & Strong Institutions',
  'Partnerships for the Goals',
]

export const TESTIMONIALS = [
  {
    name: 'Ayesha Bano',
    role: 'Community Volunteer, Moro',
    quote:
      'The medical camps reached places no one else would go. When the floods came, SDGS was already there with medicine and hope.',
  },
  {
    name: 'Rashid Ahmed',
    role: 'Registered Worker, AI-Mazdoor',
    quote:
      'AI-Mazdoor helped me find daily work and the app made sure I got paid what I was promised. It changed how I look for work.',
  },
  {
    name: 'Sana Memon',
    role: 'Teacher, Supported School',
    quote:
      'They gave us books, chairs, and a roof. Our children finally have a safe place to learn.',
  },
]
