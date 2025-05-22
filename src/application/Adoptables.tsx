import { Dispatch, SetStateAction, useEffect } from "react";
import { CommissionCard } from "../components/CommissionCard";
import { Drawer } from "../components/Drawer";
import { createUseStyles, useTheme } from "react-jss";
import { adoptableImages } from "../configuration/adoptableImages";
import { adoptableText } from "../configuration/adoptableContent";
import { CustomTheme, Page } from "./App";

type RuleNames = "cardul" | "li" | "link";

interface AdoptablesProps {
  isDesktop: boolean;
  setCurrentPage: Dispatch<SetStateAction<Page>>;
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
}));

export const Adoptables = (props: AdoptablesProps) => {
  const { isDesktop, setCurrentPage } = props;
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ ...props, theme });

  useEffect(() => {
    setCurrentPage("adoptables");
  }, [setCurrentPage]);

  const forSaleImages = adoptableImages.filter((image) => image.type === "forsale");
  const adoptedImages = adoptableImages.filter((image) => image.type === "adopted");

  return (
    <>
      <Drawer title="Adoptables for sale" defaultOpen={forSaleImages.length > 0}>
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
          isDesktop={isDesktop}
        />
      </Drawer>
      <Drawer title="Sold adoptables" defaultOpen={false}>
        <CommissionCard
          details={
            <ul className={classes.cardul}>
              <li className={classes.li}>Previously sold designs</li>
            </ul>
          }
          images={adoptedImages}
          isDesktop={isDesktop}
        />
      </Drawer>
      <div>{adoptableText}</div>
    </>
  );
};
