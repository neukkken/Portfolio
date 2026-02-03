import DefaultLayout from "@/layouts/default";
import { DollarSign, LucideLinkedin, Mail, TerminalIcon } from "lucide-react";
import { Button, Card, CardBody, CardHeader, Divider, Image, Spinner, Progress } from "@heroui/react";
import { GithubIcon } from "@/components/icons";
import { links } from "@/config/links";
import { appVersion, actualState } from '../../global/global.ts'
import React from "react";
import { exp } from '../data/experiencia/exp.ts'
import { proyectos } from '../data/proyectos/proyectos.tsx'
import SkillsCard from "@/components/skills.tsx";
import { motion } from "framer-motion";

export default function IndexPage() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [imagesLoaded, setImagesLoaded] = React.useState(0);
  const [wordIndex, setWordIndex] = React.useState(0);

  const loadingWords = [
    { text: 'portafolio', color: 'text-indigo-500' },
    { text: 'experiencia', color: 'text-purple-500' },
    { text: 'proyectos', color: 'text-blue-500' },
    { text: 'habilidades', color: 'text-cyan-500' },
    { text: 'código', color: 'text-green-500' }
  ];

  // Recolectar todas las URLs de imágenes
  const allImages = React.useMemo(() => {
    const images = [
      'https://app.requestly.io/delay/1/https://i.pinimg.com/736x/7c/7d/2d/7c7d2df20b63040f1e7f626b8c503d8c.jpg',
      proyectos[0].icon,
      ...exp.map(e => e.icon)
    ];
    return images;
  }, []);

  // Precargar imágenes
  React.useEffect(() => {
    let loadedCount = 0;
    
    allImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
        if (loadedCount === allImages.length) {
          setTimeout(() => setIsLoading(false), 1200);
        }
      };
      img.onerror = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
        if (loadedCount === allImages.length) {
          setTimeout(() => setIsLoading(false), 1200);
        }
      };
    });
  }, [allImages]);

  // Cambiar palabras durante la carga
  React.useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setWordIndex((prev) => (prev + 1) % loadingWords.length);
      }, 1200);
      return () => clearInterval(interval);
    }
  }, [isLoading, loadingWords.length]);

  if (isLoading) {
    const progress = (imagesLoaded / allImages.length) * 100;
    return (
      <DefaultLayout>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col items-center justify-center min-h-full gap-4 md:gap-6 bg-black w-full px-4"
        >
          <Spinner size="lg" color="secondary" />
          <h1 className="text-white text-xl md:text-2xl font-bold flex flex-wrap items-center justify-center gap-2 text-center">
            Cargando <motion.span
              key={wordIndex}
              initial={{ opacity: 0, y: 20, scale: 0.8, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, scale: 0.8, filter: "blur(4px)" }}
              transition={{ 
                duration: 0.5,
                ease: "easeInOut"
              }}
              className={`${loadingWords[wordIndex].color} font-extrabold`}
            >
              {loadingWords[wordIndex].text}
            </motion.span>...
          </h1>
          <div className="w-64 md:w-80">
            <Progress 
              size="sm"
              value={progress}
              color="secondary"
              className="max-w-md"
            />
          </div>
          <p className="text-gray-400 text-sm">{Math.round(progress)}%</p>
        </motion.div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-3 w-full sm:w-[95%] md:w-[90%] lg:w-[70%] mx-auto p-4 sm:p-6 md:p-10 gap-3 sm:gap-4"
      >
        <div className="col-span-1 md:col-span-3 bg-[#0000009a] text-white flex p-4 rounded-xl gap-2 flex-col items-start justify-center">
          <div className="flex gap-2 items-center text-indigo-500">
            <TerminalIcon size={13} /> <p className="text-[12px]">PORTFOLIO_TERMINAL {appVersion}</p>
          </div>
          <div className="flex gap-2 items-center text-green-600">
            <DollarSign size={13} /> <p className="text-[12px]">Actualmente {actualState}</p>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 bg-[#000000c0] text-white flex p-4 rounded-xl gap-4 md:gap-5 flex-col sm:flex-row items-center justify-center">
          <Image
            isBlurred
            alt="profilePicture"
            src='https://app.requestly.io/delay/1/https://i.pinimg.com/736x/7c/7d/2d/7c7d2df20b63040f1e7f626b8c503d8c.jpg'
            className="rounded-full animate-fade-in flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 object-cover"
          />
          <div className="w-full sm:w-[80%] h-full flex flex-col items-center sm:items-start justify-evenly gap-3">
            <div className="text-center sm:text-left w-full">
              <p className="font-bold text-xl sm:text-2xl md:text-3xl break-words">Santiago Narvaez Lasso</p>
              <p className="flex text-indigo-500 text-sm sm:text-base mb-2 justify-center sm:justify-start">DESARROLLADOR_FRONT-END.tsx</p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">Desarrollador Fullstack enfocado en Frontend, con experiencia en React, TypeScript, JavaScript (ES6+), ExpressJS, HTML5, CSS3, TailwindCSS y
                HeroUI. Desarrollo de interfaces responsivas y componentes reutilizables.</p>
            </div>
            <div className="gap-2 flex flex-wrap justify-center sm:justify-start">
              <a href={links.github} target="_blank">
                <Button className="flex items-center justify-center font-bold" size="sm" variant="ghost" color="secondary"><GithubIcon size={16} /> Github</Button>
              </a>
              <a href={links.linkedin} target="_blank">
                <Button className="flex items-center justify-center font-bold" size="sm" variant="ghost" color="primary"><LucideLinkedin size={16} /> LinkedIn</Button>
              </a>
              <a href={`mailto:${links.email}`} target="_blank">
                <Button className="flex items-center justify-center font-bold" size="sm" variant="ghost" color="success"><Mail size={16} /> Contactarme</Button>
              </a>
            </div>
          </div>
        </div>

        <SkillsCard />

        <div className="col-span-1 md:col-span-3 bg-[#0000009a] text-white flex p-4 rounded-xl gap-2 flex-col items-center justify-center">
          <p className="font-bold text-xl md:text-2xl">Experencia Profesional</p>
          {
            exp.map((exp, index) => (
              <Card key={index} className="w-full bg-[#1f1f24] text-white">
                <CardHeader className="flex gap-2 sm:gap-3 flex-col xs:flex-row">
                  <Image
                    alt="heroui logo"
                    height={40}
                    radius="sm"
                    src={exp.icon}
                    width={40}
                    className="flex-shrink-0"
                  />
                  <div className="flex flex-col text-center xs:text-left">
                    <p className="text-base sm:text-lg">{exp.empresa}</p>
                    <p className="text-sm sm:text-base text-default-500">{exp.tiempo.inicio} - {exp.tiempo.final}</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p className="text-sm sm:text-base md:text-lg">{exp.descripcion}</p>
                </CardBody>
                <Divider />
              </Card>
            ))
          }
        </div>

        <div className="col-span-1 md:col-span-3 bg-[#0000009a] text-white flex p-4 rounded-xl gap-2 flex-col items-center justify-center">
          <p className="font-bold text-xl md:text-2xl">Proyectos</p>
          <Card className="bg-[#1f1f2486] text-white p-2 w-full flex">
            <CardHeader className="flex gap-3">
              <Image
                alt="heroui logo"
                height={40}
                radius="sm"
                src={proyectos[0].icon}
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">EfaStack</p>
                <p className="text-small text-default-500">v2.0.2t</p>
                <p className="text-small text-default-500">{proyectos[0].tecnologias}</p>
              </div>

            </CardHeader>
            <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {
                proyectos.map((proyecto, index) => (
                  <Card key={index} className="w-full bg-[#1f1f249f] text-white">
                    <CardHeader className="flex gap-2">
                      <div className="flex flex-col border-b-1 w-full">
                        <p className="text-xl sm:text-2xl break-words">{proyecto.titulo}</p>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <p className="text-gray-300 text-sm sm:text-base md:text-lg">{proyecto.descripcion}</p>
                    </CardBody>
                  </Card>
                ))
              }
            </div>
          </Card>
        </div>
      </motion.div>
    </DefaultLayout>
  );
}