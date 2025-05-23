import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles, useTheme } from "react-jss";
import { CustomTheme, Page } from "../application/App";

type RuleNames = "ul" | "li" | "link" | "activeLink";

interface NavLinksProps {
  currentPage: Page;
}

const useStyles = createUseStyles<RuleNames, NavLinksProps, CustomTheme>((theme) => ({
  ul: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
  },
  li: {
    fontSize: 20,
    padding: 3,
  },
  link: {
    textDecoration: "none",
    color: theme.colorSecondary,
    backgroundColor: theme.colorPrimary,
    borderBottom: "2px solid rgba(0,0,0,0)",
    marginRight: 20,
    "&:hover": {
      color: theme.colorTertiary,
    },
  },
  activeLink: {
    textDecoration: "none",
    color: theme.colorSecondary,
    backgroundColor: theme.colorPrimary,
    borderBottom: "2px solid",
    borderBottomColor: theme.colorTertiary,
    marginRight: 20,
    "&:hover": {
      color: theme.colorTertiary,
    },
  },
}));

export const NavLinks = (props: NavLinksProps) => {
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ ...props, theme });

  return (
    <ul className={classes.ul}>
      <Link to="/" className={props.currentPage === "gallery" ? classes.activeLink : classes.link}>
        <li className={classes.li}>Gallery</li>
      </Link>
      <Link
        to="/commissioninfo"
        className={props.currentPage === "commissioninfo" ? classes.activeLink : classes.link}
      >
        <li className={classes.li}>Commission Info</li>
      </Link>
      <Link
        to="/commissionform"
        className={props.currentPage === "commissionform" ? classes.activeLink : classes.link}
      >
        <li className={classes.li}>Commission Form</li>
      </Link>
      <Link
        to="/commissionqueue"
        className={props.currentPage === "commissionqueue" ? classes.activeLink : classes.link}
      >
        <li className={classes.li}>Queue</li>
      </Link>
      <Link
        to="/about"
        className={props.currentPage === "about" ? classes.activeLink : classes.link}
      >
        <li className={classes.li}>About</li>
      </Link>
    </ul>
  );
};
