import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVercel,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiRender,
  SiHuggingface,
  SiPytorch,
  SiFlask,
  SiFastapi,
  SiGatsby,
  SiGraphql,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  render: {
    title: "Render",
    bg: "black",
    fg: "white",
    icon: <SiRender />,
  },
  vercel: {
    title: "Vercel",
    bg: "black",
    fg: "white",
    icon: <SiVercel />,
  },
  hf: {
    title: "Hugging Face",
    bg: "black",
    fg: "white",
    icon: <SiHuggingface />,
  },
  pt: {
    title: "Pytorch",
    bg: "black",
    fg: "white",
    icon: <SiPytorch />,
  },
  gatsby: {
    title: "Gatsby",
    bg: "black",
    fg: "white",
    icon: <SiGatsby />,
  },
  graphql: {
    title: "GraphQL",
    bg: "black",
    fg: "white",
    icon: <SiGraphql />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
 gradio: {
    title: "Gradio",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/gradio.svg" alt="Gradio"/>,
  },
   mcp: {
    title: "MCP",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/modelcontextprotocol.svg" alt="MCP"/>,
  },
  flask: {
    title: "Flask",
    bg: "black",
    fg: "white",
    icon: <SiFlask/>,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  { 
    id: "DeepfakeDetector",
    category: "Deep Learning, EfficientNetV2 and MTCNN",
    title: "Deepfake Detector",
    src: "/assets/projects-screenshots/aigen/aifake.jpg",
    screenshots: ["aifake.jpg"],
    live: "https://deepfakevideodetector.vercel.app/",
    github:"https://github.com/Pranesh-2005/AI-Generated-Video-Detector",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js, PROJECT_SKILLS.vercel],
      backend: [PROJECT_SKILLS.python,PROJECT_SKILLS.pt,PROJECT_SKILLS.flask,PROJECT_SKILLS.gradio,PROJECT_SKILLS.hf,PROJECT_SKILLS.render],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
          This is a powerful open-source tool designed to detect fake images, videos, and audios. 
          Utilizing state-of-the-art deep learning techniques like EfficientNetV2 and MTCNN, 
          It offers frame-by-frame video analysis, enabling high-accuracy deepfake detection. 
          It's developed with a focus on ease of use, making it accessible for researchers, developers, and security analysts.
          Frontend is Deployed on Vercel and Backend on HuggingFace and Render.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/aigen/aifake.jpg`,
              `${BASE_PATH}/aigen/2.jpg`,
              `${BASE_PATH}/aigen/3.jpg`,
            ]}
          />
        </div>
      );
    },
  },
  { 
    id: "v0clone",
    category: "Generative AI and LLM's",
    title: "V0dev Clone",
    src: "/assets/projects-screenshots/v0/1.jpg",
    screenshots: ["/assets/projects-screenshots/v0/1.jpg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.gradio
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.openai,
        PROJECT_SKILLS.hf,
      ],
    },
    live: "https://praneshjs-free-static-website-generator.hf.space/",
    github: "https://github.com/Pranesh-2005/V0-like-website",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            V0.dev Clone
          </TypographyP>
          <TypographyP className="font-mono ">
          V0-like-website is a lightweight web application inspired by v0.dev, designed to demonstrate AI-driven website components using DeepSeek. 
          The project utilizes Gradio for fast prototyping and ModelScope Studio's rich UI components, making it easy to expand and customize. 
          Ideal for developers and enthusiasts interested in modern AI-powered web experiences.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/v0/1.jpg`,
              `${BASE_PATH}/v0/2.jpg`,
              `${BASE_PATH}/v0/3.jpg`,
            ]}
          />
        </div>
      );
    },
  },
  { 
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/myportfolio/1.jpg",
    screenshots: ["assets/projects-screenshots/myportfolio/1.jpg"],
    live: "https://praneshjs.vercel.app/",
    github:"https://github.com/Pranesh-2005/Pranesh-2005.github.io",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.gatsby,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.graphql,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to My Portfolio
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2">
            My Portfolio is a beautiful developer portfolio template built with GatsbyJS and React. 
            Designed for developers who want to showcase their skills, projects, and achievements in a modern, professional, and customizable portfolio website.
            Whether you're a software engineer, designer, or a tech enthusiast, this template provides a solid foundation for building a personal website that stands out in today's digital world.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/1.jpg`,
              `${BASE_PATH}/myportfolio/skills.jpg`,
            ]}
          />
        </div>
      );
    },
  },
  { 
    id: "nl2sql2nl",
    category: "NLP, MCP and LLM's",
    title: "Natural Language to SQL to Natural Language",
    src: "/assets/projects-screenshots/nl2sql2nl/1.jpg",
    screenshots: ["01.jpeg", "03.png"],
    live: "https://nl2sql2nl.vercel.app/",
    github:"https://github.com/Pranesh-2005/S7-Mini-Project",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.ts, PROJECT_SKILLS.vercel],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.mcp, PROJECT_SKILLS.fastapi, PROJECT_SKILLS.openai, PROJECT_SKILLS.hf, PROJECT_SKILLS.render, PROJECT_SKILLS.supabase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
              Nl2SQL2NL brings together the best of modern web technologies:
              Next.js for the frontend, offering a scalable and easy-to-use framework.
              FastMCP and Starlette for the backend, enabling efficient server-side communications.
              CopilotKit integration for seamless interaction with AI-powered tools.
              This project is an ideal starting point for developers interested in full-stack development and building applications that leverage AI capabilities.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/nl2sql2nl/1.jpg`,
              `${BASE_PATH}/nl2sql2nl/2.jpg`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
