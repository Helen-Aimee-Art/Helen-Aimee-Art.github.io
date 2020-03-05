import React from 'react'

const selectStyles = {
    backgroundColor: '#282c34',
    color: '#f2f2f2',
    border: '1px solid #f2f2f2',
    borderRadius: 5,
    padding: 5,
    fontSize: 'inherit'
}

export const FilterDropdown = () => {
    return (
        <>
            <label htmlFor="keywords">Filter Gallery </label>
            <select id="keywords" placeholder="Search Gallery" style={selectStyles}>

            </select>
        </>
    )
}
