import { ReactNode } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { CustomTheme } from "../application/App";

type RuleNames = "card";

interface CardProps {
  children: ReactNode;
}

const useStyles = createUseStyles<RuleNames, CardProps, CustomTheme>((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.colorPrimary,
    color: theme.colorSecondary,
    borderRadius: 5,
    padding: 20,
    width: "100%",
  },
}));

export const Card = (props: CardProps) => {
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ ...props, theme });
  const { children } = props;

  return <div className={classes.card}>{children}</div>;
};
