import React from 'react'
import { FormControlLabel, Checkbox, Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import { useState, useEffect } from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { Button } from './Button'

const useStyles = createUseStyles(theme => ({
    container: { height: 0 },
    details: {
        display: 'flex',
        flexDirection: 'column'
    }
}))

export const FilterMenu = (props) => {
    const { setFilters } = props

    const theme = useTheme()
    const classes = useStyles(theme)
    const [selected, setSelected] = useState({ settings: [], imageSizes: [], finishes: [], isCommission: null })
    const [commissionSelected, setCommissionSelected] = useState(false)
    const [notCommissionSelected, setNotCommissionSelected] = useState(false)

    const handleChange = (checked, type, value) => {
        if (checked) {
            setSelected({ ...selected, [type]: [...selected[type], value] })
        } else {
            setSelected({ ...selected, [type]: selected[type].filter(val => val !== value) })
        }
    }

    const handleChangeCommission = (checked) => {
        setCommissionSelected(checked)
    }

    const handleChangeNotCommission = (checked) => {
        setNotCommissionSelected(checked)
    }

    const handleResetFilters = () => {
        setCommissionSelected(false)
        setNotCommissionSelected(false)
        setSelected({ settings: [], imageSizes: [], finishes: [], isCommission: null })
    }

    useEffect(() => {
        setSelected(s => ({ ...s, isCommission: commissionSelected && !notCommissionSelected ? true : !commissionSelected && notCommissionSelected ? false : null }))
    }, [commissionSelected, notCommissionSelected])

    useEffect(() => {
        setFilters(selected)
    }, [selected, setFilters])

    return (
        <div className={classes.container}>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>Settings{selected.settings.length > 0 ? <span>&nbsp;({selected.settings.length} selected)</span> : ''}</AccordionSummary>
                <AccordionDetails className={classes.details}>
                    {props.settings.map((setting, index) => {
                        return <FormControlLabel key={index} control={<Checkbox checked={selected.settings.includes(setting)} onChange={(_, checked) => handleChange(checked, 'settings', setting)} />} label={setting.charAt(0).toUpperCase() + setting.slice(1)} />
                    })}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>Image Sizes{selected.imageSizes.length > 0 ? <span>&nbsp;({selected.imageSizes.length} selected)</span> : ''}</AccordionSummary>
                <AccordionDetails className={classes.details}>
                    {props.imageSizes.map((imageSize, index) => {
                        return <FormControlLabel key={index} control={<Checkbox checked={selected.imageSizes.includes(imageSize)} onChange={(_, checked) => handleChange(checked, 'imageSizes', imageSize)} />} label={imageSize.charAt(0).toUpperCase() + imageSize.slice(1)} />
                    })}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>Finishes{selected.finishes.length > 0 ? <span>&nbsp;({selected.finishes.length} selected)</span> : ''}</AccordionSummary>
                <AccordionDetails className={classes.details}>
                    {props.finishes.map((finish, index) => {
                        return <FormControlLabel key={index} control={<Checkbox checked={selected.finishes.includes(finish)} onChange={(_, checked) => handleChange(checked, 'finishes', finish)} />} label={finish.charAt(0).toUpperCase() + finish.slice(1)} />
                    })}
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>Commission{selected.isCommission !== null ? <span>&nbsp;(1 selected)</span> : commissionSelected ? <span>&nbsp;(2 selected)</span> : ''}</AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <FormControlLabel control={<Checkbox checked={commissionSelected} onChange={(_, checked) => handleChangeCommission(checked)} />} label="Commission" />
                    <FormControlLabel control={<Checkbox checked={notCommissionSelected} onChange={(_, checked) => handleChangeNotCommission(checked)} />} label="Not Commission" />
                </AccordionDetails>
            </Accordion>
            <Button margin="12px 0" label="Reset filters" click={handleResetFilters} />
        </div>
    )
}
