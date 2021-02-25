import React from 'react'
import { useEffect } from 'react'
import { CommissionCard } from '../components/CommissionCard'
import { Drawer } from '../components/Drawer'
import { createUseStyles, useTheme } from 'react-jss'
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
            <h2 className={classes.commissionStatus}>Commissions status: <span>CLOSED</span></h2>
            <Drawer title="Portrait / Bust" defaultOpen={isDesktop}>
                <CommissionCard
                    details={
                        <>
                            <p className={classes.cardul}>£94*</p>
                            <p className={classes.cardul}>Options:</p>
                            <ul className={classes.cardul}>
                                <li className={classes.li}>Head to waist</li>
                            </ul>
                            <p className={classes.cardul}>Details:</p>
                            <ul className={classes.cardul}>
                                <li className={classes.li}>2250px x 3300px</li>
                                <li className={classes.li}>300dpi resolution</li>
                            </ul>
                        </>
                    }
                    images={commissionImages.filter(image => image.type === 'bust')}
                    isDesktop={isDesktop}
                />
            </Drawer>
            <Drawer title="Half-body" defaultOpen={isDesktop}>
                <CommissionCard
                    details={
                        <>
                            <p className={classes.cardul}>£140*</p>
                            <p className={classes.cardul}>Options:</p>
                            <ul className={classes.cardul}>
                                <li className={classes.li}>Head to thigh (just above the knee)</li>
                            </ul>
                            <p className={classes.cardul}>Details:</p>
                            <ul className={classes.cardul}>
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
                            <p className={classes.cardul}>Options:</p>
                            <ul className={classes.cardul}>
                                <li className={classes.li}>Head to bust</li>
                            </ul>
                            <p className={classes.cardul}>Details:</p>
                            <ul className={classes.cardul}>
                                <li className={classes.li}>3300px x 2550px</li>
                                <li className={classes.li}>300dpi resolution</li>
                            </ul>
                        </>
                    }
                    images={commissionImages.filter(image => image.type === 'sketch')}
                    isDesktop={isDesktop}
                />
            </Drawer>
            <Drawer
                title="Pinup / NSFW"
                defaultOpen={false}
                locked={true}
                lockedTitle="NSFW content"
                lockedMessage="By clicking OK you are confirming that you are 18 years or older."
            >
                <CommissionCard
                    details={
                        <>
                            <p className={classes.cardul}>£94 - £140*</p>
                            <p className={classes.cardul}>Options:</p>
                            <ul className={classes.cardul}>
                                <li className={classes.li}>Head to waist</li>
                                <li className={classes.li}>Head to thigh</li>
                            </ul>
                            <p className={classes.cardul}>Details:</p>
                            <ul className={classes.cardul}>
                                <li className={classes.li}>2250px x 3300px (Head to waist)</li>
                                <li className={classes.li}>3400px x 4900px (Head to thigh)</li>
                                <li className={classes.li}>300dpi resolution</li>
                            </ul>
                        </>
                    }
                    images={commissionImages.filter(image => image.type === 'nsfw')}
                    isDesktop={isDesktop}
                />
            </Drawer>
            <div>
                <p style={{ textAlign: 'left', marginTop: 0 }}>
                    *Simple backgrounds are included in the price, at this time I am not offering more complicated backgrounds.<br />
                    *Adding additional characters will increase the cost by 80%.<br />
                    *Small pets can be included but will increase the price by 30%.<br />
                    *Complicated weapons or armour will increase the price. The exact amount will vary depending on the addition.
                </p>
                <h2>Process</h2>
                <p>
                    If you are interested in a commission, please email me with the information below.
                    The number of projects I take on will vary, I will email you with confirmation if I am available to take on the project.
                </p>
                <ul>
                    <li>Contact email address for updates and for the invoices</li>
                    <li>Your name and the name of your character(s)</li>
                    <li>Commission type</li>
                    <li>Physical description of your character(s), including race, age etc. (any reference pictures are appreciated)</li>
                    <li>Character(s) personality</li>
                </ul>
                <p>
                    Once we have agreed the outline, I will send you a rough sketch for approval. If you are happy with the sketch I will send a Paypal invoice for 50% of the total fee to your email.
                    Once the invoice has been paid I will continue working on your project; I will send updates throughout the process where you can ask for minor changes.
                    Once completed, I will send a low resolution JPEG of the final piece and if you are happy I will send the final invoice for the remaining amount.
                    When the payment has been recieved I will send the high resolution JPEG.
                </p>
                <h2>Pinup / NSFW varients</h2>
                <ul>
                    <li>Pinup / NSFW varients are available for the portrait and half body commission options</li>
                    <li>These can either be nude or underwear/lingerie. However if you choose the nude version I will also include a lingerie version (this will be included within the price at no extra cost)</li>
                    <li>All pinup / NSFW characters must be at least 18 years old</li>
                    <li>Please be aware that this is a pinup option, so it will not be explicit NSFW</li>
                    <li>I will not be accepting explicit NSFW commissions</li>
                </ul>
                <h2>Terms and conditions</h2>
                <p>I have the right to decline a commission request.</p>
                <p>I will draw:</p>
                <ul>
                    <li>Personal, original characters</li>
                    <li>Original characters based in games such as World of Warcraft, ESO, etc.</li>
                    <li>Existing lore characters</li>
                    <li>Nudity and sexual themes</li>
                </ul>
                <p>I will not draw:</p>
                <ul>
                    <li>Real people</li>
                    <li>Explicit content</li>
                    <li>Anything that portrays illegal activity</li>
                    <li>Characters under the age of 18</li>
                    <li>Furries</li>
                    <li>Excessive violence or gore</li>
                    <li>Fetishes</li>
                    <li>Extreme body proportions</li>
                    <li>Standalone evironments</li>
                </ul>
                <h3>Copyright & Ownership</h3>
                <ul>
                    <li>I will retain copyright to the artwork. You are not permitted to change or resell the artwork</li>
                    <li>I have the right to use the artwork in my portfolio, social media and to sell prints</li>
                    <li>You have the right to use the artwork for personal use only. (Eg. prints for your wall, profile pictures and displaying online with credit)</li>
                    <li>I have the right to make a process video and publish it on my Youtube channel</li>
                    <li>You retain ownership of your original character(s) if depicted in the artwork</li>
                </ul>
                <h3>Revisions & Payment</h3>
                <ul>
                    <li>
                        Any major revisions must be agreed before the sketch is approved, after this stage any major adjustments will be charged.
                        You may request up to three minor changes throughout the process, after this any minor changes may be charged
                    </li>
                    <li>Payment must be made through Paypal once I send you the invoices</li>
                    <li>If for any reason I cannot complete your project, you will receive a refund for the full cost through Paypal</li>
                </ul>
            </div>
        </>
    )
}
