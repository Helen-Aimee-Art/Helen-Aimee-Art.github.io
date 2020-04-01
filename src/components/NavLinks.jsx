import React from 'react'
import { FilterDropdown } from './FilterDropdown'

const ulStyles = {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 3,
    padding: 0
}

const liStyles = {
    fontSize: 20,
    marginRight: 30
}

const aStyles = {
    textDecoration: 'none',
    color: '#f2f2f2'
}

export const NavLinks = (props) => {
    return (
        <ul style={ulStyles}>
            <li style={liStyles}>
                <FilterDropdown keywords={props.keywords} setFilter={props.setFilter} />
            </li>
            <li style={liStyles}><a href='#' style={aStyles}>Gallery</a></li>
            <li style={liStyles}><a href='#' style={aStyles}>Comission Info</a></li>
        </ul>
    )
}
