
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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


const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

  
    if (!name || !email) {
        e.preventDefault();
        alert('Please fill in all required fields.');
    } else {
        alert(`Message sent!\nName: ${name}\nEmail: ${email}`);
    }
});


const navLinks = document.querySelectorAll('#navList a');
const navMenu = document.querySelector('.navContainer');

navMenu.addEventListener('click', function() {
    navLinks.forEach(link => {
        link.classList.remove('active'); 
    });
    
    if (event.target.tagName === 'A') {
        event.target.classList.add('active');
    }
});