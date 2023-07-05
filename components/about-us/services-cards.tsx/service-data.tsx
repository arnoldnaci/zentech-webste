export type ServiceType = {
  id: number;
  iconUrl: string;
  title: string;
  description: string;
};

export const serviceCardList: ServiceType[] = [
  {
    id: 1,
    iconUrl: "/icons/quality.svg",
    title: "Best quality",
    description:
      "At our agency, we are committed to delivering the highest quality digital products to our clients. We understand that in today's rapidly evolving digital landscape, having a standout online presence is essential for businesses to succeed.",
  },
  {
    id: 2,
    iconUrl: "/icons/infrastructure.svg",
    title: "Top tier infraestructure",
    description:
      "We understand that a robust and scalable infrastructure is critical for the success of any software project.To ensure we deliver the best infrastructure solutions, we leverage our expertise in the latest technologies, frameworks, and architectural patterns.",
  },
  {
    id: 3,
    iconUrl: "/icons/technology.svg",
    title: "Innovation & Technology",
    description:
      "Innovation and technology are at the core of our agency's DNA. We believe that staying ahead of the curve and embracing emerging technologies are key drivers of success in today's rapidly evolving digital landscape.",
  },
  {
    id: 4,
    iconUrl: "/icons/iterate.svg",
    title: "Always iterate",
    description:
      "We understand that software development is an iterative process that requires regular feedback, testing, and refinement.We follow agile development methodologies, such as Scrum or Kanban, which enable us to break down complex projects into smaller, manageable tasks.",
  },
  {
    id: 5,
    iconUrl: "/icons/user.svg",
    title: "User centered",
    description:
      "To ensure user satisfaction, we employ a human-centric approach throughout the development process. We begin by conducting thorough research to gain a deep understanding of the target audience and their requirements.",
  },
  {
    id: 6,
    iconUrl: "/icons/escalation.svg",
    title: "Escalation in mind",
    description:
      "From the initial stages of architecture and design, we prioritize scalability by implementing modular and flexible solutions. We anticipate future growth and potential increases in user base, data volume, and transactional load.",
  },
];
