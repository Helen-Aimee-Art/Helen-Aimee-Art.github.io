import { Dispatch, SetStateAction, useEffect } from "react";
import { CommissionCard } from "../components/CommissionCard";
import { createUseStyles, useTheme } from "react-jss";
import {
  commissionStatus,
  commissionText,
  drawerConfigs,
} from "../configuration/commissionContent";
import { commissionImages } from "../configuration/commissionImages";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { CustomTheme, PageTitle } from "./App";

type RuleNames = "cardul" | "cardulprice" | "li" | "commissionStatus" | "accordion" | "text";

interface CommissionInfoProps {
  setCurrentPage: Dispatch<SetStateAction<PageTitle>>;
}

const useStyles = createUseStyles<RuleNames, CommissionInfoProps, CustomTheme>((theme) => ({
  cardul: {
    fontSize: 18,
    listStyleType: "none",
  },
  cardulprice: {
    fontSize: 18,
    listStyleType: "none",
    color: theme.colorQuaternary,
  },
  li: {
    marginBottom: 10,
    "&:before": {
      content: "'♡'",
      color: theme.colorTertiary,
      fontWeight: "bold",
      display: "inline-block",
      width: "1em",
      marginLeft: "-1em",
    },
  },
  commissionStatus: {
    textAlign: "left",
    width: "100%",
  },
  accordion: {
    width: "100%",
    border: `1px solid ${theme.colorSecondary}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&::before": {
      display: "none",
    },
  },
  text: {
    marginTop: "12px",
  },
}));

export const CommissionInfo = (props: CommissionInfoProps) => {
  const { setCurrentPage } = props;
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ ...props, theme });

  useEffect(() => {
    setCurrentPage("commissioninfo");
  }, [setCurrentPage]);

  return (
    <>
      <h2 className={classes.commissionStatus}>
        Commissions status: <span>{commissionStatus}</span>
      </h2>
      {drawerConfigs.map((drawerConfig) => (
        <Accordion
          key={drawerConfig.title}
          className={classes.accordion}
          defaultExpanded={drawerConfig.defaultOpen}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>{drawerConfig.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CommissionCard
              details={
                <>
                  <p className={classes.cardulprice}>{`£${drawerConfig.price}`}</p>
                  <p className={classes.cardul}>Details:</p>
                  <ul className={classes.cardul}>
                    {drawerConfig.bullets.map((bullet, index) => (
                      <li className={classes.li} key={index}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </>
              }
              images={commissionImages.filter((image) => image.type === drawerConfig.imageType)}
            />
          </AccordionDetails>
        </Accordion>
      ))}
      <div className={classes.text}>{commissionText}</div>
    </>
  );
};
