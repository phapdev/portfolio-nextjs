import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "phapdev",
  initials: "phapdev",
  url: "https://dillion.io",
  location: "Ho Chi Minh City",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I'm a software engineer and a full-stack developer.And I'm a blockchain developer.",
  summary:
    "I am a blockchain developer, currently learning and developing [projects](#projects) and ideas in this field. With a passion for technology and creativity, I am always looking for innovative and effective solutions to apply blockchain in practice. I hope to have the opportunity to collaborate and exchange experiences with like-minded individuals! [Nice to meet you all!](#)",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "phapdev.contact@gmail.com",
    tel: "+84 397 254 268",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/phapdev",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/phapdev/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/phapdev",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://www.youtube.com/@phapdev",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:phapdev.contact@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "VBI",
      href: "https://vbiacademy.edu.vn/",
      badges: [],
      location: "Remote",
      title: "Blockchain Education Provider | Web3 Developer Community | Web3 Bootcamps & Hackathon Organizers",
      logoUrl: "/vbi_academy_logo.jpg",
      start: "June 2024",
      end: "Present",
      description:
        "VBI – The largest Blockchain and Web3 training academy in Vietnam operates with three divisions: VBI Forum, VBI Academy, and VBI Research.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  education: [
    {
      school: "Dong Nai Technology University",
      href: "https://dntu.edu.vn/",
      degree: "Bachelor's Degree of Information Technology",
      logoUrl: "/dntu.jpg",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Sui-Simulator",
      href: "https://github.com/Weminal-labs/sui-simulator-vscode",
      dates: "April 2024 - June 2024",
      active: true,
      description:
        "Sui-Simulator is a tool for developers to test and simulate Sui transactions and smart contracts.",
      technologies: [
        "React.js",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Weminal-labs/sui-simulator-vscode",
          icon: <Icons.github className="size-3" />,
        }, {
          type: "Extension",
          href: "https://marketplace.visualstudio.com/items?itemName=weminal-labs.sui-simulator-vscode",
          icon: <Icons.globe className="size-3" />,
        }, ,
      ],
      image: "/sui-simulator.png",
      video: "",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    }
  ],
  hackathons: [
    {
      title: "Web3 Hackfest Coding Challenge",
      dates: "September 2024",
      location: "Offline Ho Chi Minh City",
      win: "2nd Place BOS track",
      description:
        "Web3 Hackfest is designed for builders of all kinds where global Web3 builders reunite with a source of energy and creativity for all.",
      image:
        "https://web3-hackfest.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fa909e17962464185b4c03ef8f138d54c%2Fassets%2Fcover%2F231.png&w=1440&q=100",
      mlh: "",
      links: [],
    },
    {
      title: "Sui Overflow Hackathon",
      dates: "June 2024",
      location: "Online",
      description:
        "Sui Overflow Hackathon is a hackathon for developers to build on Sui Blockchain.",
      image:
        "https://th.bing.com/th/id/OIP.mJRW1KjGQ5QjulvcG-xpFwAAAA?rs=1&pid=ImgDetMain",
      mlh: "",
      win: "3rd Place Tooling Track",
      links: [
        {
          title: "Source",
          type: "Source",
          href: "https://github.com/Weminal-labs/sui-simulator-vscode",
          icon: <Icons.github className="size-3" />,
        },
        {
          title: "Extension",
          type: "Extension",
          href: "https://marketplace.visualstudio.com/items?itemName=weminal-labs.sui-simulator-vscode",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    }
  ],
} as const;
