const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    function showImage(index) {
      const offset = -index * 100;
      images.forEach(img => {
        img.style.transform = `translateX(${offset}%)`;
      });
    }

    document.getElementById('nextBtn').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });

    function scrollCarousel() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    setInterval(scrollCarousel, 3000);

    document.addEventListener('DOMContentLoaded', () => {
      const cards = document.querySelectorAll('.card');
    
      const observerOptions = {
        threshold: 0.1
      };
    
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
    
      cards.forEach(card => {
        observer.observe(card);
      });
    });
    