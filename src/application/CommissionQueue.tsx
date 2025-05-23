import { Dispatch, SetStateAction, useEffect } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { CustomTheme, Page } from "./App";

interface CommissionQueueProps {
  setCurrentPage: Dispatch<SetStateAction<Page>>;
}

const useStyles = createUseStyles((theme) => ({
  container: {
    width: "100%",
  },
  frame: {
    width: "100%",
    height: "calc(100vh - 235px)",
    border: "none",
  },
}));

export const CommissionQueue = (props: CommissionQueueProps) => {
  const { setCurrentPage } = props;
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ theme });

  useEffect(() => {
    setCurrentPage("commissionqueue");
  }, [setCurrentPage]);

  return (
    <>
      <div className={classes.container}>
        <iframe className={classes.frame} title="Queue" src="https://trello.com/b/dsJu8SNh.html">
          Loading…
        </iframe>
      </div>
    </>
  );
};
