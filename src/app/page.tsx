"use client";

import {
  ArrowRight,
  Briefcase,
  Code,
  Download,
  ExternalLink,
  Mail,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Git",
  "Figma",
];

// Imágenes de cada proyecto (mismo orden que los items de las traducciones).
// Reemplaza por capturas reales en /public, p. ej. "/proyecto-1.png".
const projectImages = [
  "https://picsum.photos/seed/analytics/600/400",
  "https://picsum.photos/seed/ecommerce/600/400",
  "https://picsum.photos/seed/tasks/600/400",
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-1 flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
          <span className="font-semibold tracking-tight">Luis Toro</span>
          <nav className="flex items-center gap-1">
            <Button variant="ghost" size="sm" asChild>
              <a href="#proyectos">{t.nav.projects}</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#stack">{t.nav.stack}</a>
            </Button>
            <Button size="sm" asChild>
              <a href="#contacto">{t.nav.contact}</a>
            </Button>
            <div className="ml-1 flex items-center gap-1">
              <LanguageToggle />
              <ModeToggle />
            </div>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6">
        {/* Hero */}
        <section className="flex flex-col items-center gap-6 py-20 text-center">
          <Avatar className="size-24">
            <AvatarImage src="/PP_1.png" alt="Luis Toro" />
            <AvatarFallback>LT</AvatarFallback>
          </Avatar>
          <Badge variant="secondary">{t.hero.available}</Badge>
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {t.hero.greeting}
            </h1>
            <p className="mx-auto max-w-xl text-lg text-muted-foreground">
              {t.hero.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild>
              <a href="#proyectos">
                {t.hero.viewProjects}
                <ArrowRight />
              </a>
            </Button>
            <Button variant="outline">
              <Download />
              {t.hero.downloadCV}
            </Button>
          </div>
        </section>

        <Separator />

        {/* Proyectos */}
        <section id="proyectos" className="py-16">
          <div className="mb-8 space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              {t.projects.title}
            </h2>
            <p className="text-muted-foreground">{t.projects.subtitle}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.projects.items.map((project, index) => (
              <Card
                key={project.title}
                className="flex flex-col transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-foreground/5 hover:ring-foreground/20"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={projectImages[index]}
                  alt={project.title}
                  className="aspect-video w-full object-cover transition-transform duration-300 ease-out group-hover/card:scale-105"
                />
                <CardHeader>
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle>{project.title}</CardTitle>
                    <Badge variant="outline">{project.status}</Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-wrap content-start gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    {t.projects.viewProject}
                    <ExternalLink />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Stack */}
        <section id="stack" className="py-16">
          <div className="mb-8 space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              {t.stack.title}
            </h2>
            <p className="text-muted-foreground">{t.stack.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} className="px-3 py-1 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <Separator />

        {/* Contacto */}
        <section id="contacto" className="py-16">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{t.contact.title}</CardTitle>
              <CardDescription>{t.contact.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-wrap justify-center gap-3">
              <Button asChild>
                <a href="mailto:ltoro@getontop.com">
                  <Mail />
                  {t.contact.email}
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <Code />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <Briefcase />
                  LinkedIn
                </a>
              </Button>
            </CardFooter>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-center px-6 text-sm text-muted-foreground">
          {t.footer}
        </div>
      </footer>
    </div>
  );
}
