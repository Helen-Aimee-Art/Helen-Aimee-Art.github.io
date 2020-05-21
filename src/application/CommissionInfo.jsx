import React from 'react'
import { CommissionCard } from '../components/CommissionCard'
import { Drawer } from '../components/Drawer'
import { createUseStyles, useTheme } from 'react-jss'

const images = [
    {
        url: '/helen-aimee-darkshift-web.jpg',
        type: 'halfbody'
    },
    {
        url: '/new-images-coming-soon.jpg',
        type: 'halfbody'
    },
    {
        url: '/new-images-coming-soon.jpg',
        type: 'halfbody'
    },
    {
        url: '/helen-aimee-serana.jpg',
        type: 'bust'
    },
    {
        url: '/helen-aimee-flameleaf.jpg',
        type: 'bust'
    },
    {
        url: '/helen-aimee-neefia.jpg',
        type: 'bust'
    },
    {
        url: '/helen-aimee-ribbon.jpg',
        type: 'bust'
    },
    {
        url: '/helen-aimee-blue-and-quincy-c.jpg',
        type: 'pet'
    },
    {
        url: '/helen-aimee-willow.jpg',
        type: 'pet'
    },
    {
        url: '/helen-aimee-buttons.jpg',
        type: 'pet'
    },
]

const useStyles = createUseStyles(theme => ({
    cardul: {
        fontSize: 18
    },
    templateul: {
        listStyle: ''
    },
    li: {
        marginBottom: 10
    }
}))

export const CommissionInfo = () => {
    const theme = useTheme()
    const classes = useStyles(theme)
    return (
        <>
            <Drawer title="Portrait / Bust" defaultOpen>
                <CommissionCard
                    details={
                        <ul className={classes.cardul}>
                            <li className={classes.li}>Details go here</li>
                            <li className={classes.li}>Some more details go here...</li>
                            <li className={classes.li}>Price: $75-$100*</li>
                        </ul>
                    }
                    images={images.filter(image => image.type === 'bust')}
                />
            </Drawer>
            <Drawer title="Half-body" defaultOpen>
                <CommissionCard
                    details={
                        <ul className={classes.cardul}>
                            <li className={classes.li}>Details go here</li>
                            <li className={classes.li}>Some more details go here...</li>
                            <li className={classes.li}>Price: $150*</li>
                        </ul>
                    }
                    images={images.filter(image => image.type === 'halfbody')}
                />
            </Drawer>
            <Drawer title="Pet" defaultOpen>
                <CommissionCard
                    details={
                        <ul className={classes.cardul}>
                            <li className={classes.li}>Details go here</li>
                            <li className={classes.li}>Some more details go here...</li>
                            <li className={classes.li}>Price: Depends on complexity</li>
                        </ul>
                    }
                    images={images.filter(image => image.type === 'pet')}
                />
            </Drawer>
            <div>
                <p style={{ textAlign: 'left', marginTop: 0 }}>
                    *Simple backgrounds are included in the price, at this time I am not offering more complicated backgrounds.<br />
                *Adding additional characters will increase the cost by 80%.<br />
                *Small pets can be included but will increase the price by 30%.
                </p>
                <h2>Process</h2>
                <p>
                    If you are interested in a commission, please email me with the below information (or submit this through the online form).
                    The number of projects I take on will vary, I will email you with confirmation if I am available to take on the project.
                </p>
                <ul className={classes.templateul}>
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
                <h2>Terms and conditions</h2>
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
                        Minor changes throughout the process are free
                    </li>
                    <li>Payment must be made through Paypal once I send you the invoices</li>
                    <li>I have the right to decline a commission request</li>
                    <li>If for any reason I cannot complete your project, you will receive a refund for the full cost through Paypal</li>
                </ul>
                <h3>Additional information</h3>
                <ul>
                    <li>I accept NSFW commissions - nudity and pinups only</li>
                </ul>
            </div>
        </>
    )
}
