import { createUseStyles, useTheme } from "react-jss";
import { CustomTheme } from "../application/App";

type RuleNames = "overlay" | "overlayContent";

interface OverlayProps {
  title: string;
  open: boolean;
}

const useStyles = createUseStyles<RuleNames, OverlayProps & { opacity: number }, CustomTheme>(
  (theme) => ({
    overlay: (props) => ({
      width: "100%",
      height: "100%",
      backgroundImage: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0) 55%, #282c34)",
      position: "absolute",
      top: 0,
      left: 0,
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-end",
      transition: "opacity 0.25s",
      opacity: props.opacity,
      borderRadius: "12px",
    }),
    overlayContent: {
      color: "#f2f2f2",
      marginLeft: 10,
      marginBottom: 10,
    },
  }),
);

export const Overlay = (props: OverlayProps) => {
  const theme = useTheme<CustomTheme>();
  const opacity = props.open ? 1 : 0;
  const classes = useStyles({ ...props, opacity, theme });

  return (
    <div className={classes.overlay}>
      <div className={classes.overlayContent}>{props.title}</div>
    </div>
  );
};
