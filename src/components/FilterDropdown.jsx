import React from 'react'
import { useState } from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    select: {
        backgroundColor: '#282c34',
        color: theme.colorSecondary,
        border: '1px solid #f2f2f2',
        borderRadius: 5,
        padding: 5,
        fontSize: 'inherit'
    }
}))

export const FilterDropdown = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)
    const [selected, setSelected] = useState('')

    const handleChange = e => {
        setSelected(e.target.value)

        props.setFilter(e.target.value)
    }

    return (
        <div>
            <select
                id="keywords"
                className={classes.select}
                placeholder="Filter Gallery"
                value={selected}
                onChange={handleChange}
            >
                <option value='' disabled>Filter Gallery</option>
                {props.keywords.map((keyword, index) => (
                    <option key={index} value={keyword}>{keyword.charAt(0).toUpperCase() + keyword.slice(1)}</option>
                ))}
            </select>
        </div>
    )
}
