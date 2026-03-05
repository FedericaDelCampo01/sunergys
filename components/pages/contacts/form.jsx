"use client";
import React, { useState } from 'react';

const FormArea = () => {
    const [fileName, setFileName] = useState('');
    const [file, setFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    // Handler para validar que solo se ingresen números y el signo +
    const handlePhoneInput = (e) => {
        const value = e.target.value;
        // Solo permitir números, espacios, guiones, paréntesis y el signo +
        const sanitized = value.replace(/[^0-9+\s\-()]/g, '');
        e.target.value = sanitized;
    };

    // Handler para validar formato de email
    const handleEmailBlur = (e) => {
        const email = e.target.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email && !emailPattern.test(email)) {
            e.target.setCustomValidity('Por favor ingresa un email válido');
            e.target.style.borderColor = 'rgba(255, 0, 0, 0.5)';
        } else {
            e.target.setCustomValidity('');
            e.target.style.borderColor = '';
        }
    };

    // Handler para el input de archivo
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFileName(selectedFile.name);
            setFile(selectedFile);
        } else {
            setFileName('');
            setFile(null);
        }
    };

    // Handler para el submit del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            message: formData.get('message') || '',
            fileName: fileName || '',
        };

        try {
            // Crear FormData para enviar también el archivo si existe
            const submitData = new FormData();
            submitData.append('name', data.name);
            submitData.append('email', data.email);
            submitData.append('phone', data.phone);
            submitData.append('address', data.address);
            submitData.append('message', data.message);
            if (file) {
                submitData.append('file', file);
            }

            const response = await fetch('/api/contact', {
                method: 'POST',
                body: submitData,
            });

            if (response.ok) {
                setSubmitStatus('success');
                e.target.reset();
                setFileName('');
                setFile(null);
                // Limpiar el estado después de 5 segundos
                setTimeout(() => {
                    setSubmitStatus(null);
                }, 5000);
            } else {
                throw new Error('Error al enviar el formulario');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-12 mb-20">
                        <div className="contact__form-area-item">
                            <input type="text" name="name" placeholder="Nombre y apellido" required="required" />
                        </div>
                    </div>
                    <div className="col-md-12 mb-20">
                        <div className="contact__form-area-item">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Mail" 
                                required="required"
                                pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                                onBlur={handleEmailBlur}
                                onChange={(e) => {
                                    e.target.setCustomValidity('');
                                    e.target.style.borderColor = '';
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-md-12 mb-20">
                        <div className="contact__form-area-item">
                            <input 
                                type="tel" 
                                name="phone" 
                                placeholder="Celular (ej: 099 123 456)" 
                                required="required"
                                pattern="[0-9+\s\-()]+"
                                onInput={handlePhoneInput}
                                onKeyPress={(e) => {
                                    // Solo permitir números, +, espacios, guiones y paréntesis
                                    const char = String.fromCharCode(e.which);
                                    if (!/[0-9+\s\-()]/.test(char)) {
                                        e.preventDefault();
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-md-12 mb-20">
                        <div className="contact__form-area-item">
                            <input type="text" name="address" placeholder="Dirección" required="required" />
                        </div>
                    </div>
                    <div className="col-md-12 mb-20">
                        <div className="contact__form-area-item">
                            <textarea 
                                name="message" 
                                placeholder="Mensaje (opcional)"
                                rows="4"
                            ></textarea>
                        </div>
                    </div>
                    <div className="col-md-12 mb-20">
                        <div className="contact__form-area-item">
                            <label style={{
                                display: 'block',
                                fontSize: '14px',
                                color: 'rgba(255, 255, 255, 0.8)',
                                marginBottom: '10px',
                                fontWeight: '500'
                            }}>
                                Cargar la última factura de UTE
                            </label>
                            <div style={{
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                <label style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '12px 20px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    borderRadius: '8px',
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                    fontWeight: '500',
                                    transition: 'all 0.3s ease',
                                    whiteSpace: 'nowrap'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                }}>
                                    Elegir archivo
                                    <input 
                                        type="file" 
                                        name="file" 
                                        accept=".pdf,image/*"
                                        onChange={handleFileChange}
                                        style={{
                                            position: 'absolute',
                                            width: '0',
                                            height: '0',
                                            opacity: 0,
                                            overflow: 'hidden',
                                            zIndex: -1
                                        }}
                                    />
                                </label>
                                {fileName && (
                                    <span style={{
                                        fontSize: '14px',
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        fontStyle: 'italic'
                                    }}>
                                        {fileName}
                                    </span>
                                )}
                                {!fileName && (
                                    <span style={{
                                        fontSize: '14px',
                                        color: 'rgba(255, 255, 255, 0.5)',
                                        fontStyle: 'italic'
                                    }}>
                                        Ningún archivo seleccionado
                                    </span>
                                )}
                            </div>
                            <p style={{
                                fontSize: '12px',
                                color: 'rgba(255, 255, 255, 0.6)',
                                marginTop: '8px',
                                marginBottom: 0
                            }}>
                                Aceptamos PDF, imagen o foto tomada en el momento
                            </p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="contact__two-right-form-item">
                            <button 
                                className="btn-one" 
                                type="submit"
                                disabled={isSubmitting}
                                style={{
                                    opacity: isSubmitting ? 0.7 : 1,
                                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                }}
                            >
                                {isSubmitting ? 'Enviando...' : 'Enviar'}
                            </button>
                        </div>
                        {submitStatus === 'success' && (
                            <div style={{
                                marginTop: '20px',
                                padding: '15px',
                                background: 'rgba(76, 175, 80, 0.1)',
                                border: '1px solid rgba(76, 175, 80, 0.3)',
                                borderRadius: '8px',
                                color: '#4CAF50',
                                fontSize: '14px',
                                textAlign: 'center'
                            }}>
                                ✓ Formulario enviado correctamente. Nos pondremos en contacto pronto.
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div style={{
                                marginTop: '20px',
                                padding: '15px',
                                background: 'rgba(244, 67, 54, 0.1)',
                                border: '1px solid rgba(244, 67, 54, 0.3)',
                                borderRadius: '8px',
                                color: '#f44336',
                                fontSize: '14px',
                                textAlign: 'center'
                            }}>
                                ✗ Error al enviar el formulario. Por favor intenta nuevamente.
                            </div>
                        )}
                    </div>
                </div>
            </form>            
        </>
    );
};

export default FormArea;