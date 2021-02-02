import React from 'react'
import { useEffect } from 'react'
import { CommissionCard } from '../components/CommissionCard'
import { Drawer } from '../components/Drawer'
import { createUseStyles, useTheme } from 'react-jss'
import { adoptableImages } from '../configuration/adoptableImages'

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
    }
}))

export const Adoptables = (props) => {
    const { isDesktop, setCurrentPage } = props
    const theme = useTheme()
    const classes = useStyles(isDesktop, { theme })

    useEffect(() => {
        setCurrentPage('adoptables')
    }, [setCurrentPage])

    return (
        <>
            <Drawer title="Adoptables for sale" defaultOpen={isDesktop}>
                <CommissionCard
                    details={
                        <>
                            <ul className={classes.cardul}>
                                <li className={classes.li}>Prices vary per design</li>
                                <li className={classes.li}>Please email me to enquire about purchase</li>
                            </ul>
                        </>
                    }
                    images={adoptableImages.filter(image => image.type === 'forsale')}
                    isDesktop={isDesktop}
                />
            </Drawer>
            <Drawer title="Sold adoptables" defaultOpen={false}>
                <CommissionCard
                    images={adoptableImages.filter(image => image.type === 'adopted')}
                    isDesktop={isDesktop}
                />
            </Drawer>
            <div>
                <h2>Adoptable Terms and Conditions</h2>
                <ul>
                    <li>I will retain copyright to the artwork and may use it for my portfolio or promotional purposes</li>
                    <li>Adoptable purchases are to be paid in full up front, I will send an invoice through PayPal</li>
                    <li>You may not resell the design, but you can gift it. If you do gift the design, please advise me of the new owner so I can note who is allowed to use the design</li>
                    <li>Once paid I will email you a full resolution signed and non-signed version of the design</li>
                    <li>Adoptables cannot be refunded</li>
                </ul>
                <h2>Usage</h2>
                <ul>
                    <li>Once the adoptable has been purchased the character belongs to you, you can make any changes to the design but please do not alter the original file</li>
                    <li>Adoptables may not be used for any hateful, racist, homophobic, transphobic or any illegal or offensive material</li>
                    <li>Please continue to credit me for the design/original art when used. Please credit to my Twitter @HelenAimee1 or through to my website</li>
                </ul>
            </div>
        </>
    )
}
