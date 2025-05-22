import { Dispatch, SetStateAction, useEffect } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { CustomTheme, Page } from "./App";

interface CommissionFormProps {
  isDesktop: boolean;
  setCurrentPage: Dispatch<SetStateAction<Page>>;
}

type RuleNames = "container" | "form";

const useStyles = createUseStyles<RuleNames, Partial<CommissionFormProps>, CustomTheme>(
  (theme) => ({
    container: {
      width: "100%",
    },
    form: {
      width: "100%",
      height: "1300px",
      border: "none",
    },
  })
);

export const CommissionForm = (props: CommissionFormProps) => {
  const { isDesktop, setCurrentPage } = props;
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ isDesktop, theme });

  useEffect(() => {
    setCurrentPage("commissionform");
  }, [setCurrentPage]);

  return (
    <>
      <div className={classes.container}>
        <iframe
          className={classes.form}
          title="Commission Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSeEC5AAjix4OOfgcXzL_zvijeN9YE1fFq58UaJrWlHYwQdxpA/viewform?embedded=true"
        >
          Loading…
        </iframe>
      </div>
    </>
  );
};
