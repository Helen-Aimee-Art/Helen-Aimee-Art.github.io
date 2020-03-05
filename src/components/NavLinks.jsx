import React from 'react'
import { FilterDropdown } from './FilterDropdown'

const ulStyles = {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 3
}

const liStyles = {
    margin: '0 25px'
}

const aStyles = {
    textDecoration: 'none',
    color: '#f2f2f2',
    fontSize: 20,
    margin: '0 25px'
}

export const NavLinks = () => {
    return (
        <ul style={ulStyles}>
            <li>
                <FilterDropdown />
            </li>
            <a href="" style={aStyles}>
                <li style={liStyles}>Gallery</li>
            </a>
            <a href="" style={aStyles}>
                <li style={liStyles}>ComissionInfo</li>
            </a>
        </ul>
    )
}
