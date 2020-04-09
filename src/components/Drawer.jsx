import React, { useState } from 'react'

const styles = (props, open) => {
    return {
        root: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            userSelect: 'none',
            margin: '10px 0'
        },
        bar: {
            width: '100%',
            height: 50,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#1F2833',
            color: '#F2F2F2',
            padding: '0px 25px',
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            borderBottomLeftRadius: open ? 0 : 5,
            borderBottomRightRadius: open ? 0 : 5,
            cursor: 'pointer',
            boxSizing: 'border-box',
            transition: 'border-radius 0s',
            transitionDelay: open ? '0s' : '0.15s'
        },
        content: {
            width: '100%',
            padding: `${open ? 25 : 0}px 25px`,
            backgroundColor: '#1F2833',
            color: '#F2F2F2',
            maxHeight: open ? 350 : 0,
            transition: 'max-height 0.15s, padding 0.15s',
            overflow: 'hidden',
            boxSizing: 'border-box',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
        },
        arrow: {
            width: 25,
            transform: `rotate(${open ? 180 : 0}deg)`,
            transition: 'transform 0.1s'
        }
    }
}

export const Drawer = (props) => {
    const { title, children, defaultOpen } = props
    const [open, setOpen] = useState(defaultOpen || false)
    const style = styles(props, open)

    return (
        <div style={style.root}>
            <div style={style.bar} onClick={() => setOpen(!open)}>
                <h3>{title}</h3>
                <img style={style.arrow} src="/down-arrow.png" alt="down arrow" />
            </div>
            <div style={style.content}>
                {children}
            </div>
        </div>
    )
}