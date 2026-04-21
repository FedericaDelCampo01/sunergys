import Link from 'next/link';
import React from 'react';

const Social = () => {
    return (
        <>
            <ul>
                <li><Link href="https://www.instagram.com/sunergys.uy?igsh=cHYxemh2Nm5sNzg1&utm_source=qr" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                <li><Link href="https://www.linkedin.com/company/sunergys/" target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
            </ul>            
        </>
    );
};

export default Social;