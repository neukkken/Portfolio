import { CssIcon, ExpressJsIcon, GithubIcon, HTMLIcon, InsomniaIcon, JavaScriptIcon, JwtIcon, LinuxIcon, MongoAtlasIcon, NodeJsIcon, ReactIcon, TailwindIcon, TypeScriptIcon, VsCodeIcon } from "@/components/icons";

const iconStyles = "w-full h-12 hover:scale-105 transition-transform duration-200";

export const FrontEndSkills: ISkills[] = [
    {
        icon: <HTMLIcon className={iconStyles}/>,
        name: "HTML"
    },
    {
        icon: <CssIcon className={iconStyles}/>,
        name: "CSS"
    },
    {
        icon: <JavaScriptIcon className={iconStyles}/>,
        name: "JavaScript"
    },
    {
        icon: <ReactIcon className={iconStyles}/>,
        name: "React"
    },
    {
        icon: <TypeScriptIcon className={iconStyles}/>,
        name: "TypeScript"
    },
    {
        icon: <TailwindIcon className={iconStyles}/>,
        name: "TailwindCSS"
    },
]

export const BackEndSkills: ISkills[] = [
    {
        icon: <NodeJsIcon className={iconStyles}/>,
        name: "Node.js"
    },
    {
        icon: <JwtIcon className={iconStyles}/>,
        name: "JWT"
    },
    {
        icon: <ExpressJsIcon className={iconStyles}/>,
        name: "Express"
    },
    {
        icon: <MongoAtlasIcon className={iconStyles}/>,
        name: "MongoDB"
    },
]

export const ExtraSKills: ISkills[] = [
    {
        icon: <InsomniaIcon className={iconStyles}/>,
        name: "Insomnia"
    },
    {
        icon: <GithubIcon className={iconStyles}/>,
        name: "Github + Git"
    },
    {
        icon: <VsCodeIcon className={iconStyles}/>,
        name: "VS Code"
    },
    {
        icon: <LinuxIcon className={iconStyles}/>,
        name: "Linux"
    },
]