import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles, useTheme } from "react-jss";
import { useState } from "react";
import { CustomTheme, Page } from "../application/App";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

type RuleNames = "li" | "activeLi" | "burger";

interface MobileNavLinksProps {
  currentPage: Page;
}

const LINKS = [
  { name: "Gallery", page: "gallery", link: "/" },
  { name: "Commission Info", page: "commissioninfo", link: "/commissioninfo" },
  { name: "Commission Form", page: "commissionform", link: "/commissionform" },
  { name: "Commission Queue", page: "commissionqueue", link: "/commissionqueue" },
  { name: "About", page: "about", link: "/about" },
] as const;

const useStyles = createUseStyles<
  RuleNames,
  MobileNavLinksProps & { active: boolean },
  CustomTheme
>((theme) => ({
  li: {
    padding: "15px 10px",
    width: 220,
    color: theme.colorSecondary,
    overflow: "hidden",
    transition: "0.2s ease",
    borderLeft: "5px solid rgba(0, 0, 0, 0)",
  },
  activeLi: {
    padding: "15px 10px",
    width: 220,
    color: theme.colorSecondary,
    overflow: "hidden",
    transition: "0.2s ease",
    borderLeft: "5px solid",
    borderLeftColor: theme.colorTertiary,
  },
  burger: {
    marginRight: 10,
    cursor: "pointer",
    "&:hover": {
      color: theme.colorTertiary,
    },
  },
}));

export const MobileNavLinks = (props: MobileNavLinksProps) => {
  const theme = useTheme<CustomTheme>();
  const [active, setActive] = useState(false);
  const classes = useStyles({ ...props, active, theme });

  const toggleDrawer = (newOpen: boolean) => () => {
    setActive(newOpen);
  };

  return (
    <>
      <MenuIcon className={classes.burger} fontSize="large" onClick={toggleDrawer(true)} />
      <Drawer
        open={active}
        anchor="right"
        onClose={toggleDrawer(false)}
        slotProps={{ paper: { style: { backgroundColor: theme.colorPrimary } } }}
        variant="temporary"
      >
        <nav>
          <List>
            {LINKS.map((link) => (
              <ListItem
                className={props.currentPage === link.page ? classes.activeLi : classes.li}
                component={Link}
                to={link.link}
                key={link.page}
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary={link.name} slotProps={{ primary: { variant: "h6" } }} />
              </ListItem>
            ))}
          </List>
        </nav>
      </Drawer>
    </>
  );
};
