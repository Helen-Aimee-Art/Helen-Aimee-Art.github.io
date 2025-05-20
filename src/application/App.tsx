import React from "react";
import { Layout } from "./Layout";
import { ThemeProvider } from "react-jss";
import { useEffect, useState } from "react";
import { Links } from "./Links";
import { Gallery } from "./Gallery";
import { About } from "./About";
import { Adoptables } from "./Adoptables";
import { CommissionInfo } from "./CommissionInfo";
import { CommissionForm } from "./CommissionForm";
import { CommissionQueue } from "./CommissionQueue";

const customTheme: Jss.Theme = {
  colorPrimary: "#2D3032",
  colorSecondary: "#F6F6F6",
  colorTertiary: "#CCC0EF",
  colorQuaternary: "#33A1A3",
};

export interface CustomTheme {
  colorPrimary: string;
  colorSecondary: string;
  colorTertiary: string;
  colorQuaternary: string;
}

export const pages = [
  {
    title: "links",
    path: "/links",
    component: <Links />,
  },
  {
    title: "commissioninfo",
    path: "/commissioninfo",
    component: <CommissionInfo />,
  },
  {
    title: "commissionform",
    path: "/commissionform",
    component: <CommissionForm />,
  },
  {
    title: "commissionqueue",
    path: "/commissionqueue",
    component: <CommissionQueue />,
  },
  {
    title: "about",
    path: "/about",
    component: <About />,
  },
  {
    title: "adoptables",
    path: "/adoptables",
    component: <Adoptables />,
  },
  {
    title: "gallery",
    path: "/",
    component: <Gallery />,
  },
] as const;

export type Page = (typeof pages)[number]["title"];

export const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>("gallery");
  const [isDesktop, setIsDesktop] = useState(true);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    updateMedia();

    return () => window.removeEventListener("resize", updateMedia);
  });

  useEffect(() => {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.innerHTML = `
            kofiWidgetOverlay.draw(
                'helenaimeeart',
                {
                'type': 'floating-chat',
                'floating-chat.donateButton.text': 'Support me',
                'floating-chat.donateButton.background-color': '#CCC0EF',
                'floating-chat.donateButton.text-color': '#000'
                }
            );
        `;
    document.body.appendChild(s);
  });

  return (
    <ThemeProvider theme={customTheme}>
      <Layout
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isDesktop={isDesktop}
      />
    </ThemeProvider>
  );
};
