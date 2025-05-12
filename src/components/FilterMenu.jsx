import React from 'react'
import { FormControlLabel, Checkbox, Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import { useState } from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    container: {},
    details: {
        display: 'flex',
        flexDirection: 'column'
    }
}))

export const FilterMenu = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)
    const [selected, setSelected] = useState({ tags: [], imageSizes: [], finishes: [] })

    const handleChange = (checked, type, value) => {
        if (checked) {
            setSelected({ ...selected, [type]: [...selected[type], value] })
        } else {
            setSelected({ ...selected, [type]: selected[type].filter(val => val !== value) })
        }
    }

    return (
        <div className={classes.container}>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>Tags</AccordionSummary>
                <AccordionDetails className={classes.details}>
                    {props.tags.map((tag, index) => {
                        return <FormControlLabel key={index} control={<Checkbox checked={selected.tags.includes(tag)} onChange={(_, checked) => handleChange(checked, 'tags', tag)} />} label={tag.charAt(0).toUpperCase() + tag.slice(1)} />
                    })}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>Image Types</AccordionSummary>
                <AccordionDetails className={classes.details}>
                    {props.imageSizes.map((imageSize, index) => {
                        return <FormControlLabel key={index} control={<Checkbox checked={selected.imageSizes.includes(imageSize)} onChange={(_, checked) => handleChange(checked, 'imageSizes', imageSize)} />} label={imageSize.charAt(0).toUpperCase() + imageSize.slice(1)} />
                    })}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>Finishes</AccordionSummary>
                <AccordionDetails className={classes.details}>
                    {props.finishes.map((finish, index) => {
                        return <FormControlLabel key={index} control={<Checkbox checked={selected.finishes.includes(finish)} onChange={(_, checked) => handleChange(checked, 'finishes', finish)} />} label={finish.charAt(0).toUpperCase() + finish.slice(1)} />
                    })}
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
