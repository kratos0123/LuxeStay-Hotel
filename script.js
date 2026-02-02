document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Booking Bar Logic ---
    const searchBtn = document.querySelector('.btn-modern');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const checkIn = document.querySelector('input[type="date"]:nth-of-type(1)').value;
            const checkOut = document.querySelector('input[type="date"]:nth-of-type(2)').value;
            const guests = document.querySelector('.modern-select').value;

            if (!checkIn || !checkOut) {
                alert("Please select your stay dates.");
                return;
            }

            // Simple feedback for the user
            searchBtn.innerText = "Searching...";
            setTimeout(() => {
                alert(`Searching for rooms from ${checkIn} to ${checkOut} for ${guests}.`);
                searchBtn.innerText = "Search";
            }, 1000);
        });
    }

    // --- 2. Contact Form Handling ---
    const contactForm = document.querySelector('.contact-form-modern');
    if (contactForm) {
        const submitBtn = contactForm.querySelector('.btn-submit');
        
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Basic animation feedback
            submitBtn.innerHTML = "Sending...";
            
            // Simulate an API call
            setTimeout(() => {
                submitBtn.innerHTML = "Message Sent!";
                submitBtn.style.background = "#d4af37";
                submitBtn.style.color = "black";
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    location.reload(); 
                }, 3000);
            }, 1500);
        });
    }

    // --- 3. Hover Parallax Effect for Glass Panels ---
    // This adds a subtle "glow" follow effect to your luxury cards
    const cards = document.querySelectorAll('.glass-panel');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // --- 4. Smooth Navigation ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
