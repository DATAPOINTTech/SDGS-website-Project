import { SITE, PROJECTS, PILLARS } from '../data/content'

const projectLine = (p) => `${p.title}: ${p.summary} (${p.status}).`

export const KNOWLEDGE_BASE = {
  organization: `SDGS (Sustainable Developed Green Sindh) Welfare Organization is a grassroots social welfare NGO founded in ${SITE.founded}. Guided by the UN Sustainable Development Goals, it focuses on essential healthcare, quality education, rapid disaster relief, and AI-powered digital empowerment across Sindh, Pakistan.`,
  about: `Founded in the spirit of selfless service in ${SITE.founded}, SDGS Welfare Organization is a grassroots movement of professionals, volunteers, and humanitarians. From Moro to wider Sindh, we build resilience and opportunity through direct action.`,
  contact: `You can reach SDGS at ${SITE.phone}, ${SITE.cell}, or ${SITE.email}. Our office is located at: ${SITE.address}.`,
  address: `Our office is located at: ${SITE.address}.`,
  phone: `You can call us at ${SITE.phone} or ${SITE.cell}.`,
  email: `You can email us at ${SITE.email}.`,
  projects: `Here are our projects:\n- ${PROJECTS.map(projectLine).join('\n- ')}`,
  'ai-mazdoor': `AI-Mazdoor is SDGS's flagship AI-powered project. It connects informal workers with fair, decent work opportunities using intelligent skills matching, digital worker IDs, and transparent wage tracking. It advances SDG 1 (No Poverty), SDG 8 (Decent Work), and SDG 9 (Innovation).`,
  services: `Our pillars of action are:\n1. Emergency Medical Relief — free medical camps and mobile medical vans.\n2. Disaster Response & Social Welfare — rapid food rations, survival supplies, and heatwave camps.\n3. Education for the Future — makeshift schools, learning resources, and tree-planting campaigns.`,
  sdgs: `We are aligned with all 17 UN Sustainable Development Goals, with special focus on SDG 1 (No Poverty), SDG 3 (Good Health), SDG 4 (Quality Education), and SDG 8 (Decent Work).`,
  donate: `To donate or support SDGS, please contact us at ${SITE.phone} or ${SITE.email}.`,
  volunteer: `We always welcome volunteers! Please visit our Contact page or email ${SITE.email} to get involved.`,
}

const FALLBACK = `I can help you with our projects (including AI-Mazdoor), our pillars of action, SDG alignment, contact details, and how to volunteer or donate. Try asking "What is AI-Mazdoor?" or "Tell me about your projects."`

const KEYWORDS = [
  { keys: ['project', 'program', 'work'], answer: KNOWLEDGE_BASE.projects },
  { keys: ['mazdoor', 'ai-mazdoor', 'ai mazdoor', 'labor', 'labour', 'worker', 'job', 'livelihood'], answer: KNOWLEDGE_BASE['ai-mazdoor'] },
  { keys: ['service', 'pillar', 'what do you do', 'cause'], answer: KNOWLEDGE_BASE.services },
  { keys: ['sdg', 'goal', 'united nation'], answer: KNOWLEDGE_BASE.sdgs },
  { keys: ['medical', 'health', 'camp', 'doctor', 'medicine'], answer: PILLARS[0].detail },
  { keys: ['relief', 'disaster', 'flood', 'heat', 'emergency', 'ration'], answer: PILLARS[1].detail },
  { keys: ['education', 'school', 'student', 'learn', 'tree'], answer: PILLARS[2].detail },
  { keys: ['contact', 'phone', 'email', 'address', 'office', 'reach'], answer: KNOWLEDGE_BASE.contact },
  { keys: ['donate', 'donation', 'give', 'support', 'fund'], answer: KNOWLEDGE_BASE.donate },
  { keys: ['volunteer', 'join', 'help'], answer: KNOWLEDGE_BASE.volunteer },
  { keys: ['about', 'who', 'organization', 'ngo', 'history'], answer: KNOWLEDGE_BASE.about },
  { keys: ['hello', 'hi', 'hey', 'salam', 'assalam'], answer: `Hello! I'm the SDGS AI Assistant. Ask me about AI-Mazdoor, our projects, services, SDG goals, or how to donate and volunteer.` },
]

export function getAIAnswer(input) {
  const q = input.toLowerCase()
  for (const { keys, answer } of KEYWORDS) {
    if (keys.some((k) => q.includes(k))) return answer
  }
  return FALLBACK
}

export function getQuickReplies() {
  return ['What is AI-Mazdoor?', 'Tell me about your projects', 'What services do you offer?', 'How do I volunteer?']
}
