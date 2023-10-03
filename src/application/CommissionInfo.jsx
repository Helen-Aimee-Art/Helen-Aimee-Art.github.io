import React from 'react'
import { useEffect } from 'react'
import { CommissionCard } from '../components/CommissionCard'
import { Drawer } from '../components/Drawer'
import { createUseStyles, useTheme } from 'react-jss'
import { commissionStatus, commissionText, drawerConfigs } from '../configuration/commissionContent'
import { commissionImages } from '../configuration/commissionImages'

const useStyles = createUseStyles(theme => ({
    cardul: {
        fontSize: 18,
        listStyleType: 'none'
    },
    cardulprice: {
        fontSize: 18,
        listStyleType: 'none',
        color: theme.colorQuaternary
    },
    li: {
        marginBottom: 10,
        '&:before': {
            content: "'♡'",
            color: theme.colorTertiary,
            fontWeight: 'bold',
            display: 'inline-block',
            width: '1em',
            marginLeft: '-1em',
        }
    },
    commissionStatus: {
        textAlign: 'left',
        width: '100%'
    },
    monthlyTheme: {
        marginTop: 0,
        textAlign: 'left',
        width: '100%'
    }
}))

export const CommissionInfo = (props) => {
    const { isDesktop, setCurrentPage } = props
    const theme = useTheme()
    const classes = useStyles(isDesktop, { theme })

    useEffect(() => {
        setCurrentPage('commissioninfo')
    }, [setCurrentPage])

    return (
        <>
            <h2 className={classes.commissionStatus}>Commissions status: <span>{commissionStatus}</span></h2>
            {drawerConfigs.map(drawerConfig => (
                <Drawer title={drawerConfig.title} defaultOpen={isDesktop}>
                    <CommissionCard
                        details={
                            <>
                                <p className={classes.cardulprice}>{`£${drawerConfig.price}`}</p>
                                <p className={classes.cardul}>Details:</p>
                                <ul className={classes.cardul}>
                                    {drawerConfig.bullets.map(bullet => <li className={classes.li}>{bullet}</li>)}
                                </ul>
                            </>
                        }
                        images={commissionImages.filter(image => image.type === drawerConfig.imageType)}
                        isDesktop={isDesktop}
                    />
                </Drawer>
            ))}
            <div>
                {commissionText}
            </div>
        </>
    )
}
