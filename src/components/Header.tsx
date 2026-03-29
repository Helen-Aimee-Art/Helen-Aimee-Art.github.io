import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { MobileNavLinks } from "./MobileNavLinks";
import { createUseStyles, useTheme } from "react-jss";
import { PageTitle, WithIsDesktop, CustomTheme, IsDesktopContext } from "../application/App";
import { useContext } from "react";

type RuleNames = "nav";

interface HeaderProps {
  currentPage: PageTitle;
}

const useStyles = createUseStyles<RuleNames, WithIsDesktop<HeaderProps>, CustomTheme>((theme) => ({
  nav: (props) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: props.isDesktop ? "space-around" : "space-between",
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
  const isDesktop = useContext(IsDesktopContext);

  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ ...props, isDesktop, theme });

  return (
    <nav className={classes.nav}>
      <Logo currentPage={props.currentPage} />
      {props.currentPage !== "links" ? (
        isDesktop ? (
          <NavLinks currentPage={props.currentPage} />
        ) : (
          <MobileNavLinks currentPage={props.currentPage} />
        )
      ) : undefined}
    </nav>
  );
};
