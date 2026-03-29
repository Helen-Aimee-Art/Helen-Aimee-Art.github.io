import { Link } from "react-router-dom";
import { createUseStyles, useTheme } from "react-jss";
import { PageTitle, CustomTheme } from "../application/App";

interface NavLink {
  route: string;
  page: string;
  title: string;
}

export const links: NavLink[] = [
  { route: "/", page: "gallery", title: "Gallery" },
  { route: "/commissioninfo", page: "commissioninfo", title: "Commission Info" },
  { route: "/commissionform", page: "commissionform", title: "Commission Form" },
  { route: "/commissionqueue", page: "commissionqueue", title: "Queue" },
  { route: "/about", page: "about", title: "About" },
];

type RuleNames = "ul" | "li" | "link" | "activeLink";

interface NavLinksProps {
  currentPage: PageTitle;
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
      {links.map((link) => (
        <Link
          key={link.route}
          to={link.route}
          className={props.currentPage === link.page ? classes.activeLink : classes.link}
        >
          <li className={classes.li}>{link.title}</li>
        </Link>
      ))}
    </ul>
  );
};
