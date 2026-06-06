export type Language = "es" | "en";

export type Translation = {
  nav: { projects: string; stack: string; contact: string };
  hero: {
    available: string;
    greeting: string;
    description: string;
    viewProjects: string;
    downloadCV: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
    items: {
      title: string;
      description: string;
      tags: string[];
      status: string;
    }[];
  };
  stack: { title: string; subtitle: string };
  contact: { title: string; description: string; email: string };
  footer: string;
};

export const translations: Record<Language, Translation> = {
  es: {
    nav: { projects: "Proyectos", stack: "Stack", contact: "Contacto" },
    hero: {
      available: "Disponible para proyectos",
      greeting: "Hola, soy Luis 👋",
      description:
        "Desarrollador web enfocado en crear interfaces rápidas, accesibles y bien diseñadas con React y Next.js.",
      viewProjects: "Ver proyectos",
      downloadCV: "Descargar CV",
    },
    projects: {
      title: "Proyectos",
      subtitle: "Algunos trabajos recientes en los que he estado.",
      viewProject: "Ver proyecto",
      items: [
        {
          title: "Dashboard de Analítica",
          description:
            "Panel en tiempo real con gráficas y métricas, construido con Next.js y Tailwind.",
          tags: ["Next.js", "TypeScript", "Charts"],
          status: "En producción",
        },
        {
          title: "Tienda E-commerce",
          description:
            "Catálogo, carrito y checkout con pasarela de pagos integrada.",
          tags: ["React", "Stripe", "Prisma"],
          status: "En desarrollo",
        },
        {
          title: "App de Tareas",
          description:
            "Gestor de tareas colaborativo con autenticación y sincronización.",
          tags: ["Next.js", "Auth", "PostgreSQL"],
          status: "Open source",
        },
      ],
    },
    stack: {
      title: "Stack",
      subtitle: "Tecnologías con las que trabajo a diario.",
    },
    contact: {
      title: "¿Trabajamos juntos?",
      description: "Estoy abierto a nuevas oportunidades y colaboraciones.",
      email: "Escríbeme",
    },
    footer: "© 2026 Luis Toro · Construido con Next.js y shadcn/ui",
  },
  en: {
    nav: { projects: "Projects", stack: "Stack", contact: "Contact" },
    hero: {
      available: "Available for projects",
      greeting: "Hi, I'm Luis 👋",
      description:
        "Web developer focused on building fast, accessible and well-designed interfaces with React and Next.js.",
      viewProjects: "View projects",
      downloadCV: "Download CV",
    },
    projects: {
      title: "Projects",
      subtitle: "Some recent work I've been involved in.",
      viewProject: "View project",
      items: [
        {
          title: "Analytics Dashboard",
          description:
            "Real-time panel with charts and metrics, built with Next.js and Tailwind.",
          tags: ["Next.js", "TypeScript", "Charts"],
          status: "In production",
        },
        {
          title: "E-commerce Store",
          description:
            "Catalog, cart and checkout with an integrated payment gateway.",
          tags: ["React", "Stripe", "Prisma"],
          status: "In development",
        },
        {
          title: "Task App",
          description:
            "Collaborative task manager with authentication and sync.",
          tags: ["Next.js", "Auth", "PostgreSQL"],
          status: "Open source",
        },
      ],
    },
    stack: {
      title: "Stack",
      subtitle: "Technologies I work with every day.",
    },
    contact: {
      title: "Let's work together?",
      description: "I'm open to new opportunities and collaborations.",
      email: "Email me",
    },
    footer: "© 2026 Luis Toro · Built with Next.js and shadcn/ui",
  },
};
