import { Dispatch, SetStateAction, useEffect } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { CustomTheme, PageTitle } from "./App";

type RuleNames = "container" | "form";

interface CommissionFormProps {
  setCurrentPage: Dispatch<SetStateAction<PageTitle>>;
}

const useStyles = createUseStyles<RuleNames, CommissionFormProps, CustomTheme>((theme) => ({
  container: {
    width: "100%",
  },
  form: {
    width: "100%",
    height: "1300px",
  },
}));

export const CommissionForm = (props: CommissionFormProps) => {
  const { setCurrentPage } = props;
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ ...props, theme });

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
