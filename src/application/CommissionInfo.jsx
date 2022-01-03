import React from 'react'
import { useEffect } from 'react'
import { CommissionCard } from '../components/CommissionCard'
import { Drawer } from '../components/Drawer'
import { createUseStyles, useTheme } from 'react-jss'
import { commissionStatus, commissionText, monthlyTheme } from '../configuration/commissionContent'
import { commissionImages } from '../configuration/commissionImages'

const useStyles = createUseStyles(theme => ({
    cardul: {
        fontSize: 18,
        listStyleType: 'none'
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
            <h2 className={classes.commissionStatus}>Monthly theme: <span>{monthlyTheme}</span></h2>
            <Drawer title="Portrait" defaultOpen={isDesktop}>
                <CommissionCard
                    details={
                        <>
                            <p className={classes.cardul}>£75*</p>
                            <p className={classes.cardul}>Details:</p>
                            <ul className={classes.cardul}>
                                <li className={classes.li}>Head to bust</li>
                                <li className={classes.li}>2250px x 3300px</li>
                                <li className={classes.li}>300dpi resolution</li>
                            </ul>
                        </>
                    }
                    images={commissionImages.filter(image => image.type === 'bust')}
                    isDesktop={isDesktop}
                />
            </Drawer>
            <Drawer title="Head to waist" defaultOpen={isDesktop}>
                <CommissionCard
                    details={
                        <>
                            <p className={classes.cardul}>£100*</p>
                            <p className={classes.cardul}>Details:</p>
                            <ul className={classes.cardul}>
                                <li className={classes.li}>Head to waist</li>
                                <li className={classes.li}>2250px x 3300px</li>
                                <li className={classes.li}>300dpi resolution</li>
                            </ul>
                        </>
                    }
                    images={commissionImages.filter(image => image.type === 'waist')}
                    isDesktop={isDesktop}
                />
            </Drawer>
            <Drawer title="Half-body" defaultOpen={isDesktop}>
                <CommissionCard
                    details={
                        <>
                            <p className={classes.cardul}>£140*</p>
                            <p className={classes.cardul}>Details:</p>
                            <ul className={classes.cardul}>
                                <li className={classes.li}>Head to thigh (just above the knee)</li>
                                <li className={classes.li}>3400px x 4900px</li>
                                <li className={classes.li}>300dpi resolution</li>
                            </ul>
                        </>
                    }
                    images={commissionImages.filter(image => image.type === 'halfbody')}
                    isDesktop={isDesktop}
                />
            </Drawer>
            <Drawer title="Sketch" defaultOpen={isDesktop}>
                <CommissionCard
                    details={
                        <>
                            <p className={classes.cardul}>£30*</p>
                            <p className={classes.cardul}>Details:</p>
                            <ul className={classes.cardul}>
                                <li className={classes.li}>Head to bust</li>
                                <li className={classes.li}>3300px x 2250px</li>
                                <li className={classes.li}>300dpi resolution</li>
                            </ul>
                        </>
                    }
                    images={commissionImages.filter(image => image.type === 'sketch')}
                    isDesktop={isDesktop}
                />
            </Drawer>
            <div>
                {commissionText}
            </div>
        </>
    )
}
