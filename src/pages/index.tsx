import DefaultLayout from "@/layouts/default";
import { DollarSign, LucideLinkedin, Mail, TerminalIcon } from "lucide-react";
import { Button, Card, CardBody, CardHeader, Divider, Image } from "@heroui/react";
import { GithubIcon } from "@/components/icons";
import { links } from "@/config/links";
import { appVersion, actualState } from '../../global/global.ts'
import React from "react";
import { exp } from '../data/experiencia/exp.ts'
import { proyectos } from '../data/proyectos/proyectos.ts'
import SkillsCard from "@/components/skills.tsx";

export default function IndexPage() {

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <DefaultLayout>
        <h1 className="animate-fade-in-up animate-pulse m-auto text-white">Cargando...</h1>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <div className="animate-fade-in-up grid grid-cols-1 md:grid-cols-3 w-[90%] md:w-[70%] mx-auto p-10 gap-4">
        <div className="col-span-3 bg-[#0000009a] text-white flex p-4 rounded-xl gap-2 flex-col items-start justify-center">
          <div className="flex gap-2 items-center text-indigo-500">
            <TerminalIcon size={13} /> <p className="text-[12px]">PORTFOLIO_TERMINAL {appVersion}</p>
          </div>
          <div className="flex gap-2 items-center text-green-600">
            <DollarSign size={13} /> <p className="text-[12px]">Actualmente {actualState}</p>
          </div>
        </div>

        <div className="col-span-2 bg-[#000000c0] text-white flex p-4 rounded-xl gap-5 flex-row items-center justify-center">
          <Image
            isBlurred
            alt="profilePicture"
            src='https://app.requestly.io/delay/1/https://i.pinimg.com/736x/7c/7d/2d/7c7d2df20b63040f1e7f626b8c503d8c.jpg'
            width={128}
            className="rounded-full animate-fade-in"
          />
          <div className="w-[80%] h-full flex flex-col items-start justify-evenly">
            <div>
              <p className="font-bold text-2xl">Santiago Narvaez Lasso</p>
              <p className="flex text-indigo-500 text-sm mb-2">DESARROLLADOR_FRONT-END.tsx</p>
              <p>Desarrollador Fullstack enfocado en Frontend, con experiencia en React, TypeScript, JavaScript (ES6+), HTML5, CSS3, TailwindCSS y
                HeroUI. Desarrollo de interfaces responsivas y componentes reutilizables.</p>
            </div>
            <div className="gap-2 flex mt-4">
              <a href={links.github} target="_blank">
                <Button className="flex items-center justify-center font-bold" size="sm" variant="ghost" color="secondary"><GithubIcon size={16} /> Github</Button>
              </a>
              <a href={links.linkedin} target="_blank">
                <Button className="flex items-center justify-center font-bold" size="sm" variant="ghost" color="primary"><LucideLinkedin size={16} /> LinkedIn</Button>
              </a>
              <a href={`mailto:${links.email}`} target="_blank">
                <Button className="flex items-center justify-center font-bold" size="sm" variant="ghost" color="success"><Mail size={16} /> Contactarme</Button>
              </a>
              {/* cambiar por una funcion que mande el correo directamente */}
            </div>
          </div>
        </div>

        <SkillsCard />

        <div className="col-span-3 bg-[#0000009a] text-white flex p-4 rounded-xl gap-2 flex-col items-center justify-center">
          <p className="font-bold text-2xl">Experencia Profesional</p>
          {
            exp.map((exp, index) => (
              <Card key={index} className="max-w-[100%] bg-[#1f1f24] text-white">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="heroui logo"
                    height={40}
                    radius="sm"
                    src={exp.icon}
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">{exp.empresa}</p>
                    <p className="text-small text-default-500">{exp.tiempo.inicio} - {exp.tiempo.final}</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>{exp.descripcion}</p>
                </CardBody>
                <Divider />
              </Card>
            ))
          }
        </div>

        <div className="col-span-3 bg-[#0000009a] text-white flex p-4 rounded-xl gap-2 flex-col items-center justify-center">
          <p className="font-bold text-2xl">Proyectos</p>
          <Card className=" bg-[#1f1f2486] text-white p-2">
            <CardHeader className="flex gap-3">
              <Image
                alt="heroui logo"
                height={40}
                radius="sm"
                src={proyectos[0].icon}
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">EfaApp</p>
                <p className="text-small text-default-500">v2.0.2t</p>
                <p className="text-small text-default-500">{proyectos[0].tecnologias}</p>
              </div>

            </CardHeader>
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-4">
              {
                proyectos.map((proyecto) => (
                  <Card className="max-w-[400px] bg-[#1f1f249f] text-white">
                    <CardHeader className="flex gap-3">
                      <div className="flex flex-col">
                        <p className="text-xl">{proyecto.titulo}</p>
                      </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                      <p className="text-gray-300 text-sm">{proyecto.descripcion}</p>
                    </CardBody>
                    <Divider />
                  </Card>
                ))
              }
            </div>
          </Card>
        </div>
      </div>
    </DefaultLayout>
  );
}