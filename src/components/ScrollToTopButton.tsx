import { useCallback, useEffect, useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { CustomTheme } from "../application/App";

type RuleNames = "scrollButton" | "arrow";

const useStyles = createUseStyles<RuleNames, { showButton: boolean }, CustomTheme>((theme) => ({
  scrollButton: (props) => ({
    display: props.showButton ? "block" : "none",
    position: "fixed",
    bottom: 20,
    right: 30,
    zIndex: 99,
    fontSize: 18,
    border: "none",
    outline: "none",
    backgroundColor: theme.colorPrimary,
    color: "white",
    cursor: "pointer",
    padding: 15,
    borderRadius: "50%",
    "&:hover": {
      color: theme.colorTertiary,
    },
  }),
  arrow: {
    width: 25,
    transform: "rotate(180deg)",
  },
}));

export const ScrollToTopButton = () => {
  const theme = useTheme<CustomTheme>();
  const [showButton, setShowButton] = useState(false);
  const classes = useStyles({ showButton, theme });

  const checkScroll = useCallback(() => {
    setShowButton(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20);
  }, [setShowButton]);

  const scrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    return () => window.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  return (
    <div className={classes.scrollButton} title="Scroll to top" onClick={scrollToTop}>
      <img className={classes.arrow} src="/down-arrow.png" alt="Scroll to top arrow" />
    </div>
  );
};
