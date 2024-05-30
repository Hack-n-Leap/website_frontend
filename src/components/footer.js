import React from 'react';
import Link from "next/link"

function Footer() {
    return (
        <footer>
            <div className='footerCategory'>
                <h3>Contribuer au projet</h3>
                <Link href="https://github.com/Hack-n-Leap/interpreter">Interpréteur</Link>
                <Link href="https://github.com/Hack-n-Leap/game">Jeux</Link>
                <Link href="https://github.com/Hack-n-Leap/website_frontend">Site WEB (frontend)</Link>
                <Link href="https://github.com/Hack-n-Leap/website_api">Site WEB (backend)</Link>
            </div>
            <div className='footerCategory'>
                <h3>Liens utiles</h3>
                <Link href="https://github.com/Hack-n-Leap/">Github</Link>
            </div>
        </footer>
    )
}

export default Footer;