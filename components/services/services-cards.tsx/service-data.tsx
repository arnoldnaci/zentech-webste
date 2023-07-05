export type ServiceType = {
    id: number;
    iconUrl: string;
    title: string;
    description: string;
  };
  
  export const serviceCardList: ServiceType[] = [
    {
      id: 1,
      iconUrl: "/icons/1.svg",
      title: "Custom Software",
      description:
        "This service involves building software applications tailored to the specific needs and requirements of a client.We will work closely with you to understand your business goals and design, develop, and deploy software solutions.",
    },
    {
      id: 2,
      iconUrl: "/icons/2.svg",
      title: "Mobile App Development",
      description:
        "We handle the entire app development lifecycle, including design, development, testing, and deployment.",
    },
    {
      id: 3,
      iconUrl: "/icons/3.svg",
      title: "Web Development",
      description:
        "Web development services encompass the creation and maintenance of websites, web applications, and web services.",
    },
    {
      id: 4,
      iconUrl: "/icons/4.svg",
      title: "Software Testing",
      description:
        "This service focuses on ensuring the reliability, performance, and quality of software applications.",
    },
    {
      id: 5,
      iconUrl: "/icons/5.svg",
      title: "Software Maintenance",
      description:
        "After the initial development and deployment, software applications require ongoing maintenance and support.We can provide maintenance services to ensure the software remains up-to-date, secure, and compatible.",
    },
    {
      id: 6,
      iconUrl: "/icons/6.svg",
      title: "Consulting and IT Strategy",
      description:
        "This involves providing guidance on technology selection, system architecture, scalability, security, and digital transformation initiatives.",
    },
  ];
  