import React from 'react'
import { FormControl, InputLabel, MenuItem, Select, Checkbox, ListItemText } from '@mui/material'
import { useState } from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 8
    },
    select: {
        '&:before': {
            borderColor: theme.colorSecondary,
        },
        '&:after': {
            borderColor: theme.colorSecondary,
        }
    }
}))

export const FilterDropdown = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)
    const [selected, setSelected] = useState([])

    const handleChange = e => {
        setSelected(e.target.value)
        props.setFilter(e.target.value)
    }

    return (
        <div className={classes.container}>
            <FormControl>
                <InputLabel id="select-label">Filter Gallery</InputLabel>
                <Select
                    labelId="select-label"
                    value={selected}
                    onChange={handleChange}
                    className={classes.select}
                    MenuProps={{
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left"
                        },
                        transformOrigin: {
                            vertical: "top",
                            horizontal: "left"
                        },
                        getContentAnchorEl: null
                    }}
                    multiple
                    renderValue={(selected) => selected.map(kw => kw.charAt(0).toUpperCase() + kw.slice(1)).join(', ')}
                >
                    {props.keywords.map((keyword, index) => (
                        <MenuItem key={index} value={keyword}>
                            <Checkbox checked={selected.includes(keyword)}></Checkbox>
                            <ListItemText>{keyword.charAt(0).toUpperCase() + keyword.slice(1)}</ListItemText>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}
