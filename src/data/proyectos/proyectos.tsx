export const proyectos: IProyectos[] = [
  {
    titulo: "Modulo Inventario",
    descripcion: (
      <>
        Módulo de Gestión de Productos. Parte de la plataforma integral desarrollada para Efagram S.A.S. Administra el inventario de EPP y dotaciones, controlando tallas, stock, valor total y alertas de disponibilidad.
        Se complementa con una aplicación móvil para la realización de pedidos{" "}desarrollada por
        <a
          href="https://www.linkedin.com/in/alvarolpz-dev/"
          className="text-blue-400 underline ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          @AlvaroDev
        </a>.
        El flujo de pedidos es seguido desde la solicitud hasta la entrega, generando una factura digital como evidencia final. La evidencia (que incluye foto, firma, fecha y ubicación) es visualizable en la aplicación web. Implementado con React, TypeScript, Tailwind CSS y Hero UI, priorizando accesibilidad, usabilidad y escalabilidad.
      </>
    ),
    icon: "https://res.cloudinary.com/ds4spw3p8/image/upload/v1753733878/logo_efagram-06_ssmov5.png",
    tecnologias: "React TS, NodeJS, Express, MongoDB, Hero UI",
    funciones: [
      "Control de tallas y stock",
      "Alertas de disponibilidad",
      "App móvil para pedidos",
      "Factura digital automática",
    ],
  },
  {
    titulo: "Modulo Personal",
    descripcion: `Gestión de Empleados y Contratación - Efagram S.A.S. Solución robusta para el ciclo de vida del empleado: incluye gestión de incapacidades y un flujo completo de contratación con emisión automática de órdenes y contratos. Construido bajo estándares de reutilización con Tailwind CSS y TypeScript, garantizando una experiencia de usuario ágil, limpia y 100% responsiva.`,
    icon: "https://res.cloudinary.com/ds4spw3p8/image/upload/v1753733878/logo_efagram-06_ssmov5.png",
    tecnologias: "React TS, Express, MongoDB",
    funciones: [
      "Gestión de empleados",
      "Registro de incapacidades",
      "Emisión de órdenes y contratos",
      "Flujos de consulta rápidos",
    ],
  },
  {
    titulo: "Aplicacion CTL",
    descripcion:
      "Aplicación de Gestión de Maquinaria, Operadores y Formularios. Esta plataforma integral está diseñada para optimizar y centralizar el seguimiento de las operaciones. Permite la gestión completa de la flota de maquinaria (incluyendo máquinas CTL) y la administración detallada de los operadores. La aplicación genera reportes mensuales automatizados sobre la producción y el rendimiento de las máquinas CTL, facilitando el análisis de datos para la toma de decisiones.",
    icon: "https://res.cloudinary.com/ds4spw3p8/image/upload/v1753733878/logo_efagram-06_ssmov5.png",
    tecnologias: "React TS, Express, MongoDB",
    funciones: [
      "Gestión de maquinaria CTL",
      "Control de operadores",
      "Formularios operativos",
      "Reportes mensuales automatizados",
    ],
  },
];
