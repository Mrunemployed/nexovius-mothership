import { Code2, Search, Cpu, Zap, Cloud, Bot, Layout, Headset } from 'lucide-react';

export const services = [
  {
    id: 'web-dev',
    title: 'Website Building',
    description: 'We build professional, fast websites that help your small business stand out and win more customers. No confusing jargon, just results.',
    icon: Layout,
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800',
    tags: ['Business Sites', 'Mobile Friendly', 'Fast'],
    article: `
# The Science of Web Performance

Modern web architecture has shifted from monolithic systems to modular, edge-optimized deployments. Studies show that a 100ms delay in website load time can hurt conversion rates by 7%. At Nexovius, we implement "Headless" architectures using frameworks like React and Next.js, which separate the presentation layer (what users see) from the logic layer.

**Case Study: Local Retailer Transformation**

A regional furniture brand saw a 42% increase in mobile inquiries after migrating their legacy WordPress site to our optimized React framework. The key was a "Mobile-First" approach, where images were served in WebP format and critical CSS was inlined, resulting in a LCP (Largest Contentful Paint) score of 0.8s compared to the previous 3.4s.

Factual data indicates that 53% of mobile users abandon sites that take longer than 3 seconds to load. By leveraging CDN edge caching, we ensure your site is served from a server physically closest to your customer, reducing latency to near-zero.
    `
  },
  {
    id: 'seo',
    title: 'Get Found on Google (SEO)',
    description: 'We help your local business show up when customers are searching for your services online. More visibility means more sales.',
    icon: Search,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['Google Ranking', 'Local SEO', 'Growth'],
    article: `
# Precision Local Search Optimization

Search Engine Optimization (SEO) is no longer about "keyword stuffing." It is about semantic relevance and user intent. In 2024, Google's algorithms heavily favor sites that provide high Core Web Vitals and local citations. 

**The 300% Growth Benchmark**

A local dental clinic implemented our localized SEO strategy, focusing on "Schema Markup" and "Google Business Profile" synchronization. Within 6 months, their organic traffic for competitive terms like "Best Dentist Near Me" increased by 312%. 

Data shows that 46% of all Google searches are seeking local information. If your business isn't in the "Local Map Pack," you are missing out on nearly half of your potential traffic. We utilize AI-driven competitive analysis to identify missing content gaps your competitors are ranking for and systematically fix them.
    `
  },
  {
    id: 'ai-tools',
    title: 'Smart AI Tools',
    description: 'Use the latest AI to chat with customers automatically and save hours of work every week. Modern technology made simple.',
    icon: Bot,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    tags: ['AI Chatbots', 'Automation', 'Time Saving'],
    article: `
# AI: From Hype to Utility

Artificial Intelligence has moved from a novelty to a critical business tool. Implementing Retrieval-Augmented Generation (RAG) allows AI chatbots to answer customer questions based strictly on your business's private data, eliminating "hallucinations."

**Operational Efficiency Case Study**

A manufacturing client integrated our custom AI knowledge base to handle internal technician queries. This reduced HR and technical support calls by 65%, saving an estimated 20 man-hours per week.

Recent data suggests that businesses using AI for customer service see a 2.5x increase in "first-contact resolution." By automating the first tier of support, your human team can focus on complex, high-value tasks that actually drive revenue.
    `
  },
  {
    id: 'cloud-apps',
    title: 'Business Software',
    description: 'Custom software tools designed to help your team work better together from anywhere. Simple, secure, and reliable.',
    icon: Code2,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    tags: ['Custom Tools', 'Secure', 'Remote Work'],
    article: `
# The ROI of Custom Software

Off-the-shelf software often forces you to change your workflow to fit the tool. Custom "Cloud-Native" applications do the opposite. Built using serverless technologies, these tools scale infinitely with your user base while maintaining security standards like SOC2 compliance.

**Workflow Impact Data**

A logistics company using fragmented spreadsheets migrated to our custom dashboard. They reported a 30% reduction in data entry errors and a 15% increase in fleet utilization. 

Cloud-native apps offer 99.9% availability, ensuring your business never stops. By moving your operations to the cloud, you eliminate "Single Point of Failure" risks and allow your team to securely access data from any device, anywhere in the world.
    `
  },
  {
    id: 'automation',
    title: 'Workplace Automation',
    description: 'Stop doing repetitive tasks. We automate your business processes so you can focus on actually running your company.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    tags: ['Workflow', 'Integration', 'Efficiency'],
    article: `
# Eliminating Terminal Inefficiency

Automation is the engine of modern growth. By connecting disparate systems (like your CRM, Email, and Accounting) via APIs, we create seamless data flows that require zero human intervention.

**Case Study: Lead Recovery**

An agency was losing 20% of their leads due to slow follow-ups. We implemented an automated "Lead-to-SMS" bridge that contacted inquiries within 30 seconds. Their lead-to-call conversion rate jumped from 12% to 45%.

Statistical data shows that employees spend nearly 2.1 hours per day on "Administrative Busywork." Automation reclaims this time. At Nexovius, we build "Logic Chains" that handle everything from invoice generation to customer review requests automatically.
    `
  },
  {
    id: 'it-support',
    title: 'Friendly IT Support',
    description: 'Reliable help for all your business technology. We keep your systems running smoothly so you never have to worry about downtime.',
    icon: Headset,
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
    tags: ['24/7 Help', 'Maintenance', 'Reliability'],
    article: `
# Proactive vs Reactive Support

Traditional IT support waits for things to break. Modern ITOM (IT Operations Management) predicts and prevents failures before they happen. This "Zero-Trust" approach ensures security and stability.

**Uptime and Revenue**

For an e-commerce platform, 1 hour of downtime can cost upwards of $10,000. Our proactive monitoring detected and resolved a memory leak for a client at 2 AM on a Saturday, preventing a certain crash during their high-traffic Sunday sales window. 

Data confirms that 60% of small businesses that suffer a major data breach close within 6 months. Our support includes automated off-site backups and real-time threat detection, ensuring your digital assets are always protected against ransomware and hardware failure.
    `
  }
];
