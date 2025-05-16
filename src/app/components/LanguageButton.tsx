"use client";

import { useLocale } from "../context/LocaleContext";
import LanguageIcon from '@mui/icons-material/Language';export default function LanguageButton() {
  const { locale, setLocale } = useLocale();

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "es" : "en");
  };
  return (
      <label className="cursor-pointer text-slate-200 hover:text-pink-400 flex items-center space-x-1" onClick={toggleLanguage}>
        <LanguageIcon sx={{ fontSize: 17 }} />
        <span>{locale === "en" ? "EN" : "ES"}</span>
      </label>
  );
}
