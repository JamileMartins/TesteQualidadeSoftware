document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slideCounter = document.getElementById('slide-counter');
    
    if (!slides.length || !prevBtn || !nextBtn || !slideCounter) {
        console.warn("Componentes da apresentação não encontrados. A navegação não funcionará.");
        return;
    }

    let currentSlide = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        slideCounter.textContent = `Slide ${index + 1} de ${totalSlides}`;
        
        prevBtn.disabled = index === 0;
        prevBtn.classList.toggle('opacity-50', index === 0);
        prevBtn.classList.toggle('cursor-not-allowed', index === 0);
        
        nextBtn.disabled = index === totalSlides - 1;
        nextBtn.classList.toggle('opacity-50', index === totalSlides - 1);
        nextBtn.classList.toggle('cursor-not-allowed', index === totalSlides - 1);
        
        // Rola para o topo em dispositivos móveis quando mudar de slide
        if (window.innerWidth < 768) {
            window.scrollTo(0, 0);
        }
    }

    function changeSlide(direction) {
        const newIndex = currentSlide + direction;
        if (newIndex >= 0 && newIndex < totalSlides) {
            currentSlide = newIndex;
            showSlide(currentSlide);
        }
    }

    prevBtn.addEventListener('click', () => changeSlide(-1));
    nextBtn.addEventListener('click', () => changeSlide(1));
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && !nextBtn.disabled) nextBtn.click();
        if (e.key === 'ArrowLeft' && !prevBtn.disabled) prevBtn.click();
    });

    showSlide(currentSlide);
});
