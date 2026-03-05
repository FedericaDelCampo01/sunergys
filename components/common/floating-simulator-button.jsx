"use client";
import Link from 'next/link';
import React from 'react';

const FloatingSimulatorButton = () => {
    return (
        <Link 
            href="/calcula-tu-ahorro"
            className="floating-simulator-btn"
            style={{
                position: 'fixed',
                bottom: '100px',
                right: '20px',
                width: '60px',
                height: '60px',
                background: 'var(--primary-color-2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(249, 94, 25, 0.4)',
                zIndex: 9998,
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                color: 'var(--text-white)',
                fontSize: '24px'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 6px 25px rgba(249, 94, 25, 0.6)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(249, 94, 25, 0.4)';
            }}
            title="Simulá tu ahorro"
        >
            <i className="fa-regular fa-calculator"></i>
        </Link>
    );
};

export default FloatingSimulatorButton;
