import Link from 'next/link';
import React from 'react';

const CtaSimulator = () => {
    return (
        <div style={{
            padding: '40px 0',
            textAlign: 'center'
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <Link 
                            href="/calcula-tu-ahorro"
                            className="btn-one"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '18px 40px',
                                fontSize: '18px',
                                fontWeight: '600',
                                textDecoration: 'none'
                            }}
                        >
                            <i className="fa-regular fa-calculator" style={{marginRight: '10px'}}></i>
                            Simulá tu ahorro
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CtaSimulator;
