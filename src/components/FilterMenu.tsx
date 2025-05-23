import React, { Dispatch, SetStateAction } from "react";
import {
  FormControlLabel,
  Checkbox,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { Button } from "./Button";
import { CustomTheme } from "../application/App";

type RuleNames = "container" | "details";

interface FilterMenuProps {
  margin?: string;
  setFilters: Dispatch<SetStateAction<Filters>>;
  universes: string[];
  imageSizes: string[];
  finishes: string[];
}

export interface Filters {
  universes: string[];
  imageSizes: string[];
  finishes: string[];
  isCommission: boolean;
}

export const DEFAULT_FILTERS: Filters = {
  universes: [],
  imageSizes: [],
  finishes: [],
  isCommission: false,
};

const useStyles = createUseStyles<RuleNames, FilterMenuProps, CustomTheme>((theme) => ({
  container: (props) => ({ height: 0, margin: props.margin || 0 }),
  details: {
    display: "flex",
    flexDirection: "column",
  },
}));

export const FilterMenu = (props: FilterMenuProps) => {
  const { setFilters } = props;

  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ ...props, theme });
  const [selected, setSelected] = useState<Filters>(DEFAULT_FILTERS);

  const handleChange = (
    checked: boolean,
    type: keyof Omit<Filters, "isCommission">,
    value: string
  ) => {
    if (checked) {
      setSelected({ ...selected, [type]: [...selected[type], value] });
    } else {
      setSelected({ ...selected, [type]: selected[type].filter((val) => val !== value) });
    }
  };

  const handleChangeCommission = (checked: boolean) => {
    setSelected({ ...selected, isCommission: checked });
  };

  const handleResetFilters = () => {
    setSelected(DEFAULT_FILTERS);
  };

  useEffect(() => {
    setFilters(selected);
  }, [selected, setFilters]);

  return (
    <div className={classes.container}>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          Universe
          {selected.universes.length > 0 ? (
            <span>&nbsp;({selected.universes.length} selected)</span>
          ) : (
            ""
          )}
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          {props.universes.map((universe, index) => {
            return (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={selected.universes.includes(universe)}
                    onChange={(_, checked) => handleChange(checked, "universes", universe)}
                  />
                }
                label={universe.charAt(0).toUpperCase() + universe.slice(1)}
              />
            );
          })}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          Image Size
          {selected.imageSizes.length > 0 ? (
            <span>&nbsp;({selected.imageSizes.length} selected)</span>
          ) : (
            ""
          )}
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          {props.imageSizes.map((imageSize, index) => {
            return (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={selected.imageSizes.includes(imageSize)}
                    onChange={(_, checked) => handleChange(checked, "imageSizes", imageSize)}
                  />
                }
                label={imageSize.charAt(0).toUpperCase() + imageSize.slice(1)}
              />
            );
          })}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          Finish
          {selected.finishes.length > 0 ? (
            <span>&nbsp;({selected.finishes.length} selected)</span>
          ) : (
            ""
          )}
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          {props.finishes.map((finish, index) => {
            return (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={selected.finishes.includes(finish)}
                    onChange={(_, checked) => handleChange(checked, "finishes", finish)}
                  />
                }
                label={finish.charAt(0).toUpperCase() + finish.slice(1)}
              />
            );
          })}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          Commission{selected.isCommission ? <span>&nbsp;(1 selected)</span> : ""}
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <FormControlLabel
            control={
              <Checkbox
                checked={selected.isCommission}
                onChange={(_, checked) => handleChangeCommission(checked)}
              />
            }
            label="Commission"
          />
        </AccordionDetails>
      </Accordion>
      <Button margin="12px 0" label="Reset filters" click={handleResetFilters} />
    </div>
  );
};
