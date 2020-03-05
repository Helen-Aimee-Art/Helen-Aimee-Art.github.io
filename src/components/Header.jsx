import React from 'react'
import {FilterDropdown} from './FilterDropdown'
import { Logo } from './Logo'
import { NavLinks } from './NavLinks'

export const Header = () => {
    return (
        <nav>
            <Logo />
            <FilterDropdown />
            <NavLinks />
        </nav>
    )
}
