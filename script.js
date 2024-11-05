// Carousel Functionality
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000);

// Budget Calculation
document.getElementById('budget-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const guests = parseInt(document.getElementById('guests').value);
    const eventType = document.getElementById('event-type').value;
    let costPerGuest;

    switch(eventType) {
        case 'birthday':
            costPerGuest = 20; // Example cost
            break;
        case 'wedding':
            costPerGuest = 100; // Example cost
            break;
        case 'corporate':
            costPerGuest = 50; // Example cost
            break;
        case 'private':
            costPerGuest = 30; // Example cost
            break;
        default:
            costPerGuest = 0;
    }

    const totalBudget = guests * costPerGuest;
    document.getElementById('budget-amount').innerText = `$${totalBudget}`;
    document.getElementById('result').classList.remove('hidden');
});
