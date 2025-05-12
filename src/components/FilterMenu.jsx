import React from 'react'
import { FormControlLabel, Checkbox, Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import { useState, useEffect } from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { Button } from './Button'

const useStyles = createUseStyles(theme => ({
    container: margin => ({ height: 0, margin: margin || 0 }),
    details: {
        display: 'flex',
        flexDirection: 'column'
    }
}))

export const FilterMenu = (props) => {
    const { setFilters, margin } = props

    const theme = useTheme()
    const classes = useStyles(margin, { theme })
    const [selected, setSelected] = useState({ universes: [], imageSizes: [], finishes: [], isCommission: false })

    const handleChange = (checked, type, value) => {
        if (checked) {
            setSelected({ ...selected, [type]: [...selected[type], value] })
        } else {
            setSelected({ ...selected, [type]: selected[type].filter(val => val !== value) })
        }
    }

    const handleChangeCommission = (checked) => {
        setSelected({ ...selected, isCommission: checked })
    }

    const handleResetFilters = () => {
        setSelected({ universes: [], imageSizes: [], finishes: [], isCommission: false })
    }

    useEffect(() => {
        setFilters(selected)
    }, [selected, setFilters])

    return (
        <div className={classes.container}>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>Universe{selected.universes.length > 0 ? <span>&nbsp;({selected.universes.length} selected)</span> : ''}</AccordionSummary>
                <AccordionDetails className={classes.details}>
                    {props.universes.map((universe, index) => {
                        return <FormControlLabel key={index} control={<Checkbox checked={selected.universes.includes(universe)} onChange={(_, checked) => handleChange(checked, 'universes', universe)} />} label={universe.charAt(0).toUpperCase() + universe.slice(1)} />
                    })}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>Image Size{selected.imageSizes.length > 0 ? <span>&nbsp;({selected.imageSizes.length} selected)</span> : ''}</AccordionSummary>
                <AccordionDetails className={classes.details}>
                    {props.imageSizes.map((imageSize, index) => {
                        return <FormControlLabel key={index} control={<Checkbox checked={selected.imageSizes.includes(imageSize)} onChange={(_, checked) => handleChange(checked, 'imageSizes', imageSize)} />} label={imageSize.charAt(0).toUpperCase() + imageSize.slice(1)} />
                    })}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>Finish{selected.finishes.length > 0 ? <span>&nbsp;({selected.finishes.length} selected)</span> : ''}</AccordionSummary>
                <AccordionDetails className={classes.details}>
                    {props.finishes.map((finish, index) => {
                        return <FormControlLabel key={index} control={<Checkbox checked={selected.finishes.includes(finish)} onChange={(_, checked) => handleChange(checked, 'finishes', finish)} />} label={finish.charAt(0).toUpperCase() + finish.slice(1)} />
                    })}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>Commission{selected.isCommission ? <span>&nbsp;(1 selected)</span> : ''}</AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <FormControlLabel control={<Checkbox checked={selected.isCommission} onChange={(_, checked) => handleChangeCommission(checked)} />} label="Commission" />
                </AccordionDetails>
            </Accordion>
            <Button margin="12px 0" label="Reset filters" click={handleResetFilters} />
        </div>
    )
}
