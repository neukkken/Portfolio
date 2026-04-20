import DefaultLayout from "@/layouts/default";
import { Check, ChevronLeft, ChevronRight, DollarSign, LucideLinkedin, Mail, TerminalIcon } from "lucide-react";
import { Button, Card, CardBody, CardHeader, Divider, Image, Spinner, Progress, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Chip } from "@heroui/react";
import { GithubIcon } from "@/components/icons";
import { links } from "@/config/links";
import { appVersion, actualState } from '../../global/global.ts'
import React from "react";
import { exp } from '../data/experiencia/exp.ts'
import { proyectos } from '../data/proyectos/proyectos.tsx'
import SkillsCard from "@/components/skills.tsx";
import { motion } from "framer-motion";

export default function IndexPage() {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLoading, setIsLoading] = React.useState(true);
  const [imagesLoaded, setImagesLoaded] = React.useState(0);
  const [wordIndex, setWordIndex] = React.useState(0);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const galleryImages = [
    "/img/login_efastack_screenshot.png",
    "/img/personal_efastack_screenshot.png",
    "/img/detalle_empleado_efastack_screenshot.png",
    "/img/ordenes_c_efastack_screenshot.png",
    "/img/orden_ejemplo_efastack_screenshot.png",
    "/img/contrato_empleado_efastack_screenshot.png",
  ];

  const loadingWords = [
    { text: 'portafolio', color: 'text-indigo-500' },
    { text: 'experiencia', color: 'text-purple-500' },
    { text: 'proyectos', color: 'text-blue-500' },
    { text: 'habilidades', color: 'text-cyan-500' },
    { text: 'código', color: 'text-green-500' }
  ];

  const revealUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 }
  };

  const revealSoft = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1 }
  };

  const projectAccents = [
    {
      cardBorder: "border-cyan-800/50 hover:border-cyan-500/80",
      iconWrap: "bg-cyan-950/30 border-cyan-700/60",
      subtitle: "text-cyan-300/85",
      checkWrap: "bg-cyan-950/45 border-cyan-700/70 text-cyan-300",
      chip: "border-cyan-800/60 bg-cyan-950/20 hover:border-cyan-500/80 hover:text-cyan-200",
      cta: "text-cyan-400 hover:text-cyan-300"
    },
    {
      cardBorder: "border-emerald-800/50 hover:border-emerald-500/80",
      iconWrap: "bg-emerald-950/30 border-emerald-700/60",
      subtitle: "text-emerald-300/85",
      checkWrap: "bg-emerald-950/45 border-emerald-700/70 text-emerald-300",
      chip: "border-emerald-800/60 bg-emerald-950/20 hover:border-emerald-500/80 hover:text-emerald-200",
      cta: "text-emerald-400 hover:text-emerald-300"
    },
    {
      cardBorder: "border-indigo-800/50 hover:border-indigo-500/80",
      iconWrap: "bg-indigo-950/30 border-indigo-700/60",
      subtitle: "text-indigo-300/85",
      checkWrap: "bg-indigo-950/45 border-indigo-700/70 text-indigo-300",
      chip: "border-indigo-800/60 bg-indigo-950/20 hover:border-indigo-500/80 hover:text-indigo-200",
      cta: "text-indigo-400 hover:text-indigo-300"
    }
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

  React.useEffect(() => {
    if (!isOpen) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isOpen, galleryImages.length]);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

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
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="col-span-1 md:col-span-3 bg-[#0000009a] text-white flex p-4 rounded-xl gap-2 flex-col items-start justify-center"
        >
          <div className="flex gap-2 items-center text-indigo-500">
            <TerminalIcon size={13} /> <p className="text-[12px]">Foresync &copy; {new Date().getFullYear()}</p>
          </div>
          <div className="flex gap-2 items-center text-green-600">
            <DollarSign size={13} /> <p className="text-[12px]">santyagonarvaezns@gmail.com</p>
          </div>
        </motion.div>

        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="col-span-1 md:col-span-2 bg-[#000000c0] text-white flex p-4 rounded-xl gap-4 md:gap-5 flex-col sm:flex-row items-center justify-center"
        >
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
                HeroUI.</p>
            </div>
            
            <div className="gap-2 flex flex-wrap justify-center sm:justify-start">
              <a href={links.github} target="_blank">
                <Button className="flex items-center justify-center font-bold" size="sm" variant="ghost" color="secondary"><GithubIcon size={16} /> Github</Button>
              </a>
              <a href={links.linkedin} target="_blank">
                <Button className="flex items-center justify-center font-bold" size="sm" variant="ghost" color="primary"><LucideLinkedin size={16} /> LinkedIn</Button>
              </a>
              {/* <a href={`mailto:${links.email}`} target="_blank">
                <Button className="flex items-center justify-center font-bold" size="sm" variant="ghost" color="success"><Mail size={16} /> Contactarme</Button>
              </a> */}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={revealSoft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <SkillsCard />
        </motion.div>

        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="col-span-1 md:col-span-3 bg-[#0000009a] text-white flex p-4 rounded-xl gap-2 flex-col items-center justify-center"
        >
          <p className="font-bold text-xl md:text-2xl">Experencia Profesional</p>
          {
            exp.map((exp, index) => (
              <motion.div
                key={index}
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                className="w-full"
              >
                <Card className="w-full bg-[#1f1f24] text-white">
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
              </motion.div>
            ))
          }
        </motion.div>

        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="col-span-1 md:col-span-3 bg-[#0000009a] text-white flex p-4 rounded-xl gap-2 flex-col items-center justify-center"
        >
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
                  <motion.div
                    key={index}
                    variants={revealSoft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.06 }}
                    className="w-full group"
                  >
                    <Card className={`w-full h-full bg-[#05070c58] text-white border rounded-2xl shadow-none p-2 sm:p-3 transform-gpu transition-all duration-500 ease-out hover:-translate-y-[2px] hover:shadow-[0_10px_28px_rgba(16,24,40,0.28)] ${projectAccents[index % projectAccents.length].cardBorder}`}>
                      <CardHeader className="flex items-start gap-3 pb-2">
                        <div className={`h-12 w-12 rounded-xl border flex items-center justify-center overflow-hidden transition-transform duration-500 ease-out group-hover:scale-105 ${projectAccents[index % projectAccents.length].iconWrap}`}>
                          <Image
                            alt={proyecto.titulo}
                            src={proyecto.icon}
                            width={26}
                            height={26}
                            radius="none"
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-base sm:text-lg font-semibold break-words leading-tight">{proyecto.titulo}</p>
                          <p className={`text-xs sm:text-sm transition-colors duration-500 ease-out ${projectAccents[index % projectAccents.length].subtitle}`}>Gestión de Productos</p>
                        </div>
                      </CardHeader>
                      <CardBody className="pt-2 gap-4">
                        <div className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                          {proyecto.descripcion}
                        </div>
                        {proyecto.funciones && proyecto.funciones.length > 0 && (
                          <div className="flex flex-col gap-2">
                            {proyecto.funciones.map((funcion, functionIndex) => (
                              <div key={`${proyecto.titulo}-funcion-${functionIndex}`} className="flex items-center gap-2">
                                <span className={`h-5 w-5 min-w-5 rounded-full border flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-105 ${projectAccents[index % projectAccents.length].checkWrap}`}>
                                  <Check size={12} strokeWidth={3} />
                                </span>
                                <p className="text-gray-300 text-xs sm:text-sm">{funcion}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </CardBody>
                    </Card>
                  </motion.div>
                ))
              }
            </div>
            <div className="w-full flex justify-center mt-2">
              <Button
                onPress={onOpen}
                color="success"
                variant="ghost"
                className="font-semibold px-8"
              >
                Ver Galería
              </Button>
            </div>

            <Modal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              size="4xl"
              scrollBehavior="outside"
              backdrop="blur"
              classNames={{
                base: "bg-[#0d0d14] border border-white/10 text-white",
                header: "border-b border-white/10",
                footer: "border-t border-white/10",
              }}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      <p className="text-xl font-bold">Galeria EfaStack</p>
                      <p className="text-sm text-default-400 font-normal">Capturas generales con algunos datos censurados. Esta galería muestra solo la parte de gestion de empleados y contratacion.</p>
                      <p className="text-xs text-default-500 font-normal">{currentSlide + 1} / {galleryImages.length}</p>
                    </ModalHeader>
                    <ModalBody className="py-4">
                      <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                        <Image
                          alt={`captura-${currentSlide + 1}`}
                          src={galleryImages[currentSlide]}
                          className="w-full h-[220px] sm:h-[340px] md:h-[460px] object-contain"
                        />

                        <Button
                          isIconOnly
                          variant="flat"
                          color="default"
                          onPress={goToPrevSlide}
                          className="absolute top-1/2 -translate-y-1/2 left-3 bg-black/50 text-white"
                          aria-label="Imagen anterior"
                        >
                          <ChevronLeft size={18} />
                        </Button>

                        <Button
                          isIconOnly
                          variant="flat"
                          color="default"
                          onPress={goToNextSlide}
                          className="absolute top-1/2 -translate-y-1/2 right-3 bg-black/50 text-white"
                          aria-label="Imagen siguiente"
                        >
                          <ChevronRight size={18} />
                        </Button>
                      </div>

                      <div className="flex justify-center gap-2 mt-4">
                        {galleryImages.map((_, index) => (
                          <button
                            key={`dot-${index}`}
                            type="button"
                            aria-label={`Ir a imagen ${index + 1}`}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? "w-7 bg-emerald-400" : "w-2.5 bg-white/40 hover:bg-white/70"}`}
                          />
                        ))}
                      </div>

                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-3">
                        {galleryImages.map((image, index) => (
                          <button
                            key={`thumb-${index}`}
                            type="button"
                            onClick={() => setCurrentSlide(index)}
                            className={`rounded-xl overflow-hidden border transition-all duration-300 ${currentSlide === index ? "border-emerald-400 ring-1 ring-emerald-500/60" : "border-white/15 hover:border-white/40"}`}
                            aria-label={`Seleccionar miniatura ${index + 1}`}
                          >
                            <Image
                              alt={`miniatura-${index + 1}`}
                              src={image}
                              className="w-full h-14 object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Cerrar
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </Card>
        </motion.div>
      </motion.div>
    </DefaultLayout>
  );
}