"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleLanguage}
      aria-label={
        language === "es" ? "Switch to English" : "Cambiar a español"
      }
    >
      <span className="text-xs font-semibold">
        {language.toUpperCase()}
      </span>
    </Button>
  );
}
