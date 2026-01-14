// Additional interactive animations
document.addEventListener('DOMContentLoaded', function() {
    // Add parallax effect on mouse move
    const container = document.querySelector('.container');
    const appCard = document.querySelector('.app-card');
    
    if (container && appCard) {
        document.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            
            const xPercent = (clientX / innerWidth - 0.5) * 2;
            const yPercent = (clientY / innerHeight - 0.5) * 2;
            
            // Subtle parallax effect on the app card
            appCard.style.transform = `translateY(${yPercent * 5}px) rotateX(${yPercent * 2}deg) rotateY(${xPercent * 2}deg)`;
        });
    }

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

