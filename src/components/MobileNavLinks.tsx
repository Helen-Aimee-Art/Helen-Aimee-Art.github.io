import { useHistory } from "react-router-dom";
import { createUseStyles, useTheme } from "react-jss";
import { useState, MouseEvent as ReactMouseEvent } from "react";
import { Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { links } from "./NavLinks";
import { PageTitle, CustomTheme } from "../application/App";

type RuleNames = "burger";

interface MobileNavLinksProps {
  currentPage: PageTitle;
}

const useStyles = createUseStyles<RuleNames, MobileNavLinksProps, CustomTheme>((theme) => ({
  burger: {
    marginRight: 10,
    cursor: "pointer",
  },
}));

export const MobileNavLinks = (props: MobileNavLinksProps) => {
  const theme = useTheme<CustomTheme>();
  const [active, setActive] = useState(false);
  const classes = useStyles({ ...props, theme });

  const history = useHistory();

  const onNavLink = (path: string) => (e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
    setActive(false);
    history.push(path);
  };

  return (
    <>
      <Menu fontSize="large" onClick={() => setActive(!active)} className={classes.burger} />
      <Drawer anchor="right" open={active} onClose={() => setActive(false)}>
        <List component="nav">
          {links.map((link) => (
            <ListItemButton
              key={link.route}
              sx={{ "&.Mui-selected": { color: theme.colorTertiary } }}
              onClick={onNavLink(link.route)}
              selected={props.currentPage === link.page}
            >
              <ListItemText primary={link.title} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
};
