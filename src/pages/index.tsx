import DefaultLayout from "@/layouts/default";
import { DollarSign, LucideLinkedin, Mail, TerminalIcon } from "lucide-react";
import { Button, Card, CardBody, CardHeader, Divider, Image, Tab, Tabs } from "@heroui/react";
import { CssIcon, ExpressJsIcon, GithubIcon, LinuxIcon, HTMLIcon, InsomniaIcon, JavaScriptIcon, JwtIcon, MongoAtlasIcon, NodeJsIcon, ReactIcon, TailwindIcon, TypeScriptIcon, VsCodeIcon } from "@/components/icons";
import { links } from "@/config/links";
import { appVersion, actualState } from '../../global/global.ts'

// ooriginalk bg sidebnar bg-[#000000a8]

{/* <div className="w-32 mb-4">
            <Image 
              isBlurred
              alt="profilePicture"
              src='https://app.requestly.io/delay/1/https://i.pinimg.com/736x/7c/7d/2d/7c7d2df20b63040f1e7f626b8c503d8c.jpg'
              width={128}
              className="rounded-full"
            />
          </div>
          <p className="font-bold text-2xl">Santiago Narvaez</p>
          <p className="flex gap-1">Desarrollador <p className="italic underline">Front-end</p></p>
          <nav className="w-full mt-5 text-center space-y-4">
            
          </nav> */}

export default function IndexPage() {

  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 w-[90%] md:w-[70%] mx-auto p-10 gap-4">
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
            className="rounded-full"
          />
          <div className="w-[80%] h-full flex flex-col items-start justify-evenly">
            <div>
              <p className="font-bold text-2xl">Santiago Narvaez Lasso</p>
              <p className="flex text-indigo-500 text-sm mb-2">DESARROLLADOR_FRONT-END.tsx</p>
              <p>Desarrollador Frontend, con experiencia en React, TypeScript, JavaScript (ES6+), HTML5, CSS3, TailwindCSS y
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

        <div className="col-span-1 bg-[#0000009a] text-white flex p-4 rounded-xl gap-2 flex-col items-center justify-center">
          <p className="font-bold text-2xl">Tecnologias</p>
          <>
            <Tabs fullWidth aria-label="Tecnologias" className="w-full h-full" variant="underlined" color="success">
              <Tab key="frontend" title="Frontend">
                <div className="w-full h-full grid grid-cols-3 gap-4">
                  <div>
                    <HTMLIcon className="w-full h-12 hover:scale-105 transition-transform duration-200 cursor-pointer" />
                    <p className="text-center text-sm">HTML</p>
                  </div>
                  <div>
                    <CssIcon className="w-full h-12 hover:scale-105 transition-transform duration-200 cursor-pointer" />
                    <p className="text-center text-sm">CSS</p>
                  </div>
                  <div>
                    <JavaScriptIcon className="w-full h-12 hover:scale-105 transition-transform duration-200 cursor-pointer" />
                    <p className="text-center text-sm">JavaScript</p>
                  </div>
                  <div>
                    <ReactIcon className="w-full h-12 hover:scale-105 transition-transform duration-200 cursor-pointer" />
                    <p className="text-center text-sm">React</p>
                  </div>
                  <div>
                    <TypeScriptIcon className="w-full h-12 hover:scale-105 transition-transform duration-200 cursor-pointer" />
                    <p className="text-center text-sm">TypeScript</p>
                  </div>
                  <div>
                    <TailwindIcon className="w-full h-12 hover:scale-105 transition-transform duration-200 cursor-pointer" />
                    <p className="text-center text-sm">TailwindCSS</p>
                  </div>
                </div>
              </Tab>
              <Tab key="backend" title="Backend">
                <div className="w-full h-full grid grid-cols-3 gap-4">
                  <div>
                    <NodeJsIcon className="w-full h-12 hover:scale-105 transition-transform duration-200 cursor-pointer" />
                    <p className="text-center text-sm">Node.js</p>
                  </div>
                  <div>
                    <JwtIcon className="w-full h-12 hover:scale-105 transition-transform duration-200 cursor-pointer" />
                    <p className="text-center text-sm">JWT</p>
                  </div>
                  <div>
                    <ExpressJsIcon className="w-full h-12 hover:scale-105 transition-transform duration-200 cursor-pointer" />
                    <p className="text-center text-sm">Express</p>
                  </div>
                  <div>
                    <MongoAtlasIcon className="w-full h-12 hover:scale-105 transition-transform duration-200 cursor-pointer" />
                    <p className="text-center text-sm">MongoDB</p>
                  </div>
                </div>
              </Tab>
              <Tab key="otras" title="Otras">
                <div className="w-full h-full grid grid-cols-3 gap-4">
                  <div>
                    <InsomniaIcon className="w-full h-12 hover:scale-105 transition-transform duration-200 cursor-pointer" />
                    <p className="text-center text-sm">Insomnia</p>
                  </div>
                  <div>
                    <GithubIcon className="w-full h-12 hover:scale-105 transition-transform duration-200 cursor-pointer" />
                    <p className="text-center text-sm">Github + Git</p>
                  </div>
                  <div>
                    <VsCodeIcon className="w-full h-12 hover:scale-105 transition-transform duration-200 cursor-pointer" />
                    <p className="text-center text-sm">VS Code</p>
                  </div>
                  <div>
                    <LinuxIcon className="w-full h-12 hover:scale-105 transition-transform duration-200 cursor-pointer" />
                    <p className="text-center text-sm">Linux</p>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </>
        </div>

        <div className="col-span-3 bg-[#0000009a] text-white flex p-4 rounded-xl gap-2 flex-col items-center justify-center">
          <p className="font-bold text-2xl">Experencia Profesional</p>
          <Card className="max-w-[100%] bg-[#1f1f24] text-white">
            <CardHeader className="flex gap-3">
              <Image
                alt="heroui logo"
                height={40}
                radius="sm"
                src="https://res.cloudinary.com/ds4spw3p8/image/upload/v1753733878/logo_efagram-06_ssmov5.png"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">Empresa forestal y agroambiental EFAGRAM S.A.S.</p>
                <p className="text-small text-default-500">Octubre 2024 - Actualidad</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>Desarrollador Full Stack con experiencia en React, Node.js, Express y MongoDB. Me gusta crear interfaces limpias y funcionales, construir APIs y trabajar con bases de datos. Durante mi tiempo en Efagram S.A.S. (2024–2025), ayudé a desarrollar apps web que mejoraron procesos internos. Siempre estoy aprendiendo y buscando formas de escribir mejor código.</p>
            </CardBody>
            <Divider />
          </Card>
        </div>

        <div className="col-span-3 bg-[#0000009a] text-white flex p-4 rounded-xl gap-2 flex-col items-center justify-center">
          <p className="font-bold text-2xl">Proyectos</p>
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="max-w-[400px] bg-[#1f1f24] text-white">
              <CardHeader className="flex gap-3">
                <Image
                  alt="heroui logo"
                  height={40}
                  radius="sm"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">Modulo Inventario</p>
                  <p className="text-small text-default-500">---</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>Módulo de Gestión de Productos, parte de la plataforma integral desarrollada para Efagram S.A.S. Permite administrar el inventario de EPP y dotaciones, con detalle por tallas, control de stock, valor total y alertas de disponibilidad. Implementado con React, TypeScript, TailwindCSS y HeroUI, priorizando accesibilidad, usabilidad y escalabilidad en la gestión de insumos.</p>
              </CardBody>
              <Divider />
            </Card>
            <Card className="max-w-[400px] bg-[#1f1f24] text-white">
              <CardHeader className="flex gap-3">
                <Image
                  alt="heroui logo"
                  height={40}
                  radius="sm"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">Modulo Personal</p>
                  <p className="text-small text-default-500">---</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>Módulo de Gestión de Usuarios, dentro de la plataforma integral desarrollada para Efagram S.A.S. Destaca la implementación de un componente responsivo que se adapta a distintos tamaños de pantalla, facilitando la gestión de información en web y dispositivos móviles. Desarrollado con React, TypeScript, TailwindCSS y HeroUI, aplicando principios de accesibilidad, reutilización de componentes y diseño centrado en el usuario.</p>
              </CardBody>
              <Divider />
            </Card>
            <Card className="max-w-[400px] bg-[#1f1f24] text-white">
              <CardHeader className="flex gap-3">
                <Image
                  alt="heroui logo"
                  height={40}
                  radius="sm"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">Aplicacion CTL</p>
                  <p className="text-small text-default-500">---</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>Módulo de Gestión de Productos, parte de la plataforma integral desarrollada para Efagram S.A.S. Permite administrar el inventario de EPP y dotaciones, con detalle por tallas, control de stock, valor total y alertas de disponibilidad. Implementado con React, TypeScript, TailwindCSS y HeroUI, priorizando accesibilidad, usabilidad y escalabilidad en la gestión de insumos.</p>
              </CardBody>
              <Divider />
            </Card>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}