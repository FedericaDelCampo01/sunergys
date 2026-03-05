import React, { useEffect, useRef } from 'react';

const CircleBar = ({progressBar}) => {
    const circleRef = useRef(null);
    const animationFrameIdRef = useRef(null);
    const isAnimatingRef = useRef(false);

    useEffect(() => {
        const element = circleRef.current;
        if (!element) return;

        const percent = parseInt(progressBar, 10);
        const progressElement = element.querySelector('.circle__progress-item-bar');
        const percentElement = element.querySelector('.circle__progress-item-number');
        
        if (!progressElement || !percentElement) return;

        // Obtener los colores de las variables CSS
        const computedStyle = getComputedStyle(progressElement);
        const progressColor = computedStyle.getPropertyValue('--progressColor').trim() || '#F95E19';
        const barColor = computedStyle.getPropertyValue('--barColor').trim() || '#E5E5E5';

        function startAnimation() {
            // Si ya está animando, cancelar la animación anterior
            if (animationFrameIdRef.current) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }

            // Resetear el estado
            isAnimatingRef.current = true;
            progressElement.style.background = barColor;
            percentElement.textContent = '0%';

            let currentPercent = 0;
            let startTime = null;
            const duration = 2000; // 2 segundos de animación

            function animate(timestamp) {
                if (!startTime) startTime = timestamp;
                const elapsed = timestamp - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Función de easing para animación suave
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                currentPercent = Math.floor(easeOutQuart * percent);

                if (currentPercent < percent) {
                    const degrees = currentPercent * 3.6;
                    // Conic gradient: color de progreso desde 0 hasta X grados, luego color de fondo
                    progressElement.style.background = `conic-gradient(${progressColor} 0deg ${degrees}deg, ${barColor} ${degrees}deg)`;
                    percentElement.textContent = `${currentPercent}%`;
                    animationFrameIdRef.current = requestAnimationFrame(animate);
                } else {
                    // Asegurar que llegue al valor final
                    const finalDegrees = percent * 3.6;
                    progressElement.style.background = `conic-gradient(${progressColor} 0deg ${finalDegrees}deg, ${barColor} ${finalDegrees}deg)`;
                    percentElement.textContent = `${percent}%`;
                    isAnimatingRef.current = false;
                    animationFrameIdRef.current = null;
                }
            }

            animationFrameIdRef.current = requestAnimationFrame(animate);
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Reiniciar animación cada vez que entra en el viewport
                    startAnimation();
                }
            });
        }, { threshold: 0.1 });

        observer.observe(element);

        return () => {
            observer.disconnect();
            if (animationFrameIdRef.current) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }
        };
    }, [progressBar]);

    return (
        <div className="circle__progress" ref={circleRef}>
            <div className="circle__progress-item" data-percent={progressBar}>
                <div className="circle__progress-item-bar">
                    <span className="circle__progress-item-number">0%</span>
                </div>
            </div>
        </div>
    );
};

export default CircleBar;
