import { Link } from "react-router-dom";
import { createUseStyles, useTheme } from "react-jss";
import { SocialList } from "./SocialList";
import { CustomTheme, PageTitle } from "../application/App";

type RuleNames = "container" | "mainLink" | "link" | "title" | "contact";

interface LogoProps {
  currentPage: PageTitle;
}

const useStyles = createUseStyles<RuleNames, LogoProps, CustomTheme>((theme) => ({
  container: (props) => ({
    textAlign: props.currentPage !== "links" ? "left" : "center",
    padding: "0 10px",
  }),
  mainLink: {
    textDecoration: "none",
    color: "inherit",
  },
  link: {
    color: theme.colorQuaternary,
  },
  title: {
    fontSize: 36,
  },
  contact: {
    fontSize: 16,
    marginLeft: 2,
  },
}));

export const Logo = (props: LogoProps) => {
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ ...props, theme });

  return (
    <div className={classes.container}>
      <Link to="/" className={classes.mainLink}>
        <div className={classes.title}>Helen Aimee Art</div>
      </Link>
      <div className={classes.contact}>
        <a href="mailto:helen.aimee.art@gmail.com" className={classes.link}>
          helen.aimee.art@gmail.com
        </a>
      </div>
      <SocialList mini />
    </div>
  );
};
