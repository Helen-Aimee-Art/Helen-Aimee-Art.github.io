import React from 'react'
import { useState } from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 8
    },
    select: {
        backgroundColor: theme.colorPrimary,
        color: theme.colorSecondary,
        border: '1px solid #f2f2f2',
        borderRadius: 5,
        padding: 5,
        fontSize: 'inherit'
    }
}))

export const FilterDropdown = (props) => {
    const align = props.align
    const theme = useTheme()
    const classes = useStyles({ align, theme })
    const [selected, setSelected] = useState('')

    const handleChange = e => {
        setSelected(e.target.value)

        props.setFilter(e.target.value)
    }

    return (
        <div className={classes.container}>
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
