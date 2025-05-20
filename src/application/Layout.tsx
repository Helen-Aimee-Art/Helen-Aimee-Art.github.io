import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import { createUseStyles, useTheme } from "react-jss";
import { CustomTheme, Page, pages } from "./App";

type RuleNames = "app" | "main";

interface LayoutProps {
  currentPage: string;
  isDesktop: boolean;
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
}

const useStyles = createUseStyles<RuleNames, LayoutProps, CustomTheme>(
  (theme) => ({
    app: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      margin: 0,
      padding: 0,
      position: "relative",
      backgroundColor: theme.colorSecondary,
      boxSizing: "border-box",
    },
    main: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: (props) =>
        props.isDesktop
          ? props.currentPage === "commissionqueue"
            ? "100%"
            : props.currentPage === "gallery"
            ? "calc(100% - 50px)"
            : "65%"
          : "90%",
      flex: 1,
      margin: (props) =>
        props.currentPage === "commissionqueue"
          ? "0"
          : props.currentPage === "gallery"
          ? "25px"
          : "25px 0",
    },
  })
);

export const Layout = (props: LayoutProps) => {
  const { currentPage, isDesktop, setCurrentPage } = props;
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ ...props, theme });

  return (
    <Router>
      <div className={classes.app}>
        <Header currentPage={currentPage} isDesktop={isDesktop} />
        <div className={classes.main}>
          <Switch>
            {pages.map((page) => (
              <Route
                key={page.title}
                path={page.path}
                render={() => page.render(isDesktop, setCurrentPage)}
              />
            ))}
          </Switch>
        </div>
        <Footer isDesktop={isDesktop} currentPage={currentPage} />
      </div>
    </Router>
  );
};
