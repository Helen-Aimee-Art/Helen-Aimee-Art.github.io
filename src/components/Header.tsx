import React from "react";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { MobileNavLinks } from "./MobileNavLinks";
import { createUseStyles, useTheme } from "react-jss";
import { CustomTheme, Page } from "../application/App";

type RuleNames = "nav";

interface HeaderProps {
  currentPage: Page;
  isDesktop: boolean;
}

const useStyles = createUseStyles<RuleNames, HeaderProps, CustomTheme>((theme) => ({
  nav: (props) => ({
    display: "flex",
    // flexDirection: isDesktop ? 'row' : 'row-reverse',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colorPrimary,
    color: theme.colorSecondary,
    width: "100%",
    height: 125,
    borderBottom: "3px solid",
    borderBottomColor: theme.colorTertiary,
  }),
}));

export const Header = (props: HeaderProps) => {
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ ...props, theme });

  return (
    <nav className={classes.nav}>
      <Logo currentPage={props.currentPage} />
      {props.isDesktop ? (
        <NavLinks currentPage={props.currentPage} />
      ) : (
        <MobileNavLinks currentPage={props.currentPage} />
      )}
    </nav>
  );
};
