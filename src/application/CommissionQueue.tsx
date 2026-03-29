import { Dispatch, SetStateAction, useEffect } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { CustomTheme, PageTitle } from "./App";

type RuleNames = "container" | "frame";

interface CommissionQueueProps {
  setCurrentPage: Dispatch<SetStateAction<PageTitle>>;
}

const useStyles = createUseStyles<RuleNames, CommissionQueueProps, CustomTheme>((theme) => ({
  container: {
    width: "100%",
  },
  frame: {
    width: "100%",
    height: "710px",
  },
}));

export const CommissionQueue = (props: CommissionQueueProps) => {
  const { setCurrentPage } = props;
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ ...props, theme });

  useEffect(() => {
    setCurrentPage("commissionqueue");
  }, [setCurrentPage]);

  return (
    <>
      <div className={classes.container}>
        <iframe
          className={classes.frame}
          title="Queue"
          src="https://trello.com/b/dsJu8SNh.html"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
      </div>
    </>
  );
};
