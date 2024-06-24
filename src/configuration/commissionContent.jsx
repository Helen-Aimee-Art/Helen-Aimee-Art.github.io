import React from 'react'

export const commissionStatus = 'Open'

export const drawerConfigs = [
    {
        title: 'Sketch',
        price: '25',
        imageType: 'sketch',
        bullets: ['Head to bust', '2250px x 3300px', '300dpi resolution', 'Coloured Eyes Option', 'Full Flat Colour £2 extra']
    },
    {
        title: 'Half-body Sketch',
        price: '55',
        imageType: 'hbsketch',
        bullets: ['Head to thigh (just above the knee)', '2250px x 3300px', '300dpi resolution']
    },
    {
        title: 'Portrait',
        price: '90*',
        imageType: 'bust',
        bullets: ['Head to bust', '3400px x 4900px', '300dpi resolution']
    },
    {
        title: 'Head to waist',
        price: '120*',
        imageType: 'waist',
        bullets: ['Head to waist', '3400px x 4900px', '300dpi resolution']
    },
    {
        title: 'Half-body',
        price: '160*',
        imageType: 'halfbody',
        bullets: ['Head to thigh (just above the knee)', '3400px x 4900px', '300dpi resolution']
    }
]

export const commissionText = (
    <>
        <p style={{ textAlign: 'left', marginTop: 0 }}>
            *Simple backgrounds are included in the price, at this time I am not offering more complicated backgrounds.<br />
            *Adding additional characters will increase the cost by 80%.<br />
            *Small pets can be included but will increase the price by 30%.<br />
            *Complicated weapons or armour will increase the price. The exact amount will vary depending on the addition.
        </p>
        <h2>Process</h2>
        <p>
            If you are interested in a commission, please fill out the form on my Commission Form page. This will ensure that I receive all the relevant information and means I will be able to get back to you quickly.
            When sending reference images please only send images in JPEG or PNG formats and not in ZIP files. RefSheet and Imgur links are also accepted.
            The number of projects I take on will vary, I will email you with confirmation if I am available to take on the project.
            My commission queue can be viewed on my queue page.
        </p>
        <p>
            Once we have agreed the outline, I will send you the PayPal invoice. This invoice can be paid 100% upfront or 50% upfront and 50% after your approval of the sketch.
            Once the invoice has been paid I will start work on your sketch; I will send updates throughout the process where you can ask for minor changes.
            Once completed, I will send a low resolution, watermarked JPEG of the final piece and then, if you are happy, I will send the high resolution JPEG through to your email.
        </p>
        <h2>Terms and conditions</h2>
        <p>I have the right to decline any commission request.</p>
        <p>I will draw:</p>
        <ul>
            <li>Personal, original characters</li>
            <li>Original characters based in games such as World of Warcraft, FFXIV, ESO, etc.</li>
            <li>Existing lore characters</li>
            <li>Pinup</li>
        </ul>
        <p>I will not draw:</p>
        <ul>
            <li>Real people</li>
            <li>Explicit content</li>
            <li>Anything that portrays illegal activity</li>
            <li>Characters under the age of 18 or childlike characters</li>
            <li>Furries</li>
            <li>Excessive violence or gore</li>
            <li>Fetishes</li>
            <li>Extreme body proportions</li>
            <li>Standalone environments</li>
        </ul>
        <h3>Copyright & Ownership</h3>
        <ul>
            <li>I will retain copyright to the artwork. You are not permitted to change or resell the artwork.</li>
            <li>I have the right to use the artwork in my portfolio, social media and to sell prints.</li>
            <li>You have the right to use the artwork for personal use only. (Eg. prints for your wall, profile pictures and displaying online with credit)</li>
            <li>I have the right to make a process video and publish it on my Youtube channel.</li>
            <li>You retain ownership of your original character(s) if depicted in the artwork.</li>
            <li>My work cannot be used for NFTs or any crypto art, commissioned or otherwise.</li>
            <li>My work cannot be used to train AI learning, commissioned or otherwise.</li>
        </ul>
        <h3>Revisions & Payment</h3>
        <ul>
            <li>
                Any major revisions must be agreed before the sketch is approved, after this stage any major adjustments will be charged.
                You may request up to three minor changes throughout the process, after this any minor changes may be charged.
            </li>
            <li>Payment must be made through Paypal once I send you the invoice.</li>
            <li>If you cancel your commission at the sketch stage I will refund 50% of the total commission cost (not applicable for sketch commissions), if you cancel after the colouring has started I will not provide any refunds.</li>
            <li>If for any reason I cannot complete your project, you will receive a refund for the full cost through Paypal.</li>
        </ul>
    </>
)