import React from 'react'
import { useHistory } from 'react-router-dom'
import { createUseStyles, useTheme } from 'react-jss'
import { useState } from 'react'
import { Drawer, List, ListItemButton, ListItemText } from '@mui/material'
import { Menu } from '@mui/icons-material'
import { links } from './NavLinks'


const useStyles = createUseStyles(theme => ({
    burger: {
        marginRight: 10,
        cursor: 'pointer',
    }
}))

export const MobileNavLinks = (props) => {
    const theme = useTheme()
    const [active, setActive] = useState(false)
    const classes = useStyles(active, { theme })

    const history = useHistory()

    const onNavLink = (path) => e => {
        setActive(false)
        history.push(path)
    }

    return (
        <>
            <Menu fontSize='large' onClick={() => setActive(!active)} className={classes.burger} />
            <Drawer anchor='right' open={active} onClose={() => setActive(false)}>
                <List component="nav">
                    {links.map(link => (
                        <ListItemButton key={link.route} sx={{ "&.Mui-selected": { color: theme.colorTertiary } }} onClick={onNavLink(link.route)} selected={props.currentPage === link.page}>
                            <ListItemText primary={link.title} />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>

        </>
    )
}
