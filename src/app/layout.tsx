"use client";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { IntlProvider } from "react-intl";
import { LocaleProvider, useLocale } from "./context/LocaleContext";

const quicksand = Quicksand({
  variable: "--font-quicksand-sans",
  subsets: ["latin"],
  display: "swap",
});

function IntlWrapper({ children }: { children: ReactNode }) {
  const { locale, messages } = useLocale();

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} antialiased`}>
        <LocaleProvider>
          <IntlWrapper>{children}</IntlWrapper>
        </LocaleProvider>
      </body>
    </html>
  );
}
