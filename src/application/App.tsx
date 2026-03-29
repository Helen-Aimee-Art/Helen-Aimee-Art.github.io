import { Layout } from "./Layout";
import { ThemeProvider } from "react-jss";
import { createContext, Dispatch, JSX, SetStateAction, useEffect, useState } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import { Gallery } from "./Gallery";
import { About } from "./About";
import { CommissionInfo } from "./CommissionInfo";
import { CommissionForm } from "./CommissionForm";
import { CommissionQueue } from "./CommissionQueue";
import { Adoptables } from "./Adoptables";
import { Links } from "./Links";

export type WithIsDesktop<T> = T & { isDesktop: boolean };

export interface CustomTheme {
  colorPrimary: string;
  colorSecondary: string;
  colorTertiary: string;
  colorQuaternary: string;
}

export type PageTitle =
  | "gallery"
  | "about"
  | "commissionqueue"
  | "commissionform"
  | "commissioninfo"
  | "adoptables"
  | "links";

interface Page {
  title: PageTitle;
  path: string;
  render: (setCurrentPage: Dispatch<SetStateAction<PageTitle>>) => JSX.Element;
  hidden?: boolean;
}

const theme: CustomTheme = {
  colorPrimary: "#2D3032",
  colorSecondary: "#F6F6F6",
  colorTertiary: "#CCC0EF",
  colorQuaternary: "#33A1A3",
};

const muiTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#2D3032" },
    secondary: { main: "#CCC0EF" },
    background: { default: "#2D3032", paper: "#2D3032" },
  },
});

export const pages: Page[] = [
  {
    title: "links",
    path: "/links",
    render: (setCurrentPage: Dispatch<SetStateAction<PageTitle>>) => (
      <Links setCurrentPage={setCurrentPage} />
    ),
    hidden: true,
  },
  {
    title: "adoptables",
    path: "/adoptables",
    render: (setCurrentPage: Dispatch<SetStateAction<PageTitle>>) => (
      <Adoptables setCurrentPage={setCurrentPage} />
    ),
    hidden: true,
  },
  {
    title: "commissioninfo",
    path: "/commissioninfo",
    render: (setCurrentPage: Dispatch<SetStateAction<PageTitle>>) => (
      <CommissionInfo setCurrentPage={setCurrentPage} />
    ),
  },
  {
    title: "commissionform",
    path: "/commissionform",
    render: (setCurrentPage: Dispatch<SetStateAction<PageTitle>>) => (
      <CommissionForm setCurrentPage={setCurrentPage} />
    ),
  },
  {
    title: "commissionqueue",
    path: "/commissionqueue",
    render: (setCurrentPage: Dispatch<SetStateAction<PageTitle>>) => (
      <CommissionQueue setCurrentPage={setCurrentPage} />
    ),
  },
  {
    title: "about",
    path: "/about",
    render: (setCurrentPage: Dispatch<SetStateAction<PageTitle>>) => (
      <About setCurrentPage={setCurrentPage} />
    ),
  },
  {
    title: "gallery",
    path: "/",
    render: (setCurrentPage: Dispatch<SetStateAction<PageTitle>>) => (
      <Gallery setCurrentPage={setCurrentPage} />
    ),
  },
];

export const IsDesktopContext = createContext(false);

export const App = () => {
  const [currentPage, setCurrentPage] = useState<PageTitle>("gallery");
  const [isDesktop, setIsDesktop] = useState(true);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    updateMedia();

    return () => window.removeEventListener("resize", updateMedia);
  }, []);

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
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>
        <IsDesktopContext.Provider value={isDesktop}>
          <Layout currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </IsDesktopContext.Provider>
      </MuiThemeProvider>
    </ThemeProvider>
  );
};
