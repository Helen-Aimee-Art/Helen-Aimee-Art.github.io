import { Dispatch, SetStateAction, useEffect } from "react";
import { CommissionCard } from "../components/CommissionCard";
import { createUseStyles, useTheme } from "react-jss";
import { adoptableImages } from "../configuration/adoptableImages";
import { adoptableText } from "../configuration/adoptableContent";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { CustomTheme, PageTitle } from "./App";

type RuleNames = "cardul" | "li" | "link" | "text" | "accordion";

interface AdoptablesProps {
  setCurrentPage: Dispatch<SetStateAction<PageTitle>>;
}

const useStyles = createUseStyles<RuleNames, AdoptablesProps, CustomTheme>((theme) => ({
  cardul: {
    fontSize: 18,
    listStyleType: "none",
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
  link: {
    color: "inherit",
    "&:hover": {
      color: theme.colorTertiary,
    },
  },
  text: {
    marginTop: "12px",
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
}));

export const Adoptables = (props: AdoptablesProps) => {
  const { setCurrentPage } = props;
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ ...props, theme });

  useEffect(() => {
    setCurrentPage("adoptables");
  }, [setCurrentPage]);

  const forSaleImages = adoptableImages.filter((image) => image.type === "forsale");
  const adoptedImages = adoptableImages.filter((image) => image.type === "adopted");

  return (
    <>
      <Accordion className={classes.accordion} defaultExpanded={forSaleImages.length > 0}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Adoptables for sale</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CommissionCard
            details={
              forSaleImages.length > 0 ? (
                <>
                  <ul className={classes.cardul}>
                    <li className={classes.li}>Prices vary per design</li>
                    <li className={classes.li}>
                      Please purchase through{" "}
                      <a
                        href="https://ko-fi.com/helenaimeeart"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.link}
                      >
                        Ko-fi
                      </a>
                    </li>
                  </ul>
                </>
              ) : (
                <p className={classes.li}>More adoptables coming soon!</p>
              )
            }
            images={forSaleImages}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Sold adoptables</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CommissionCard
            details={
              <ul className={classes.cardul}>
                <li className={classes.li}>Previously sold designs</li>
              </ul>
            }
            images={adoptedImages}
          />
        </AccordionDetails>
      </Accordion>
      <div className={classes.text}>{adoptableText}</div>
    </>
  );
};
