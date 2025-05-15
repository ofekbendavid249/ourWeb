// Init AOS
AOS.init({ duration: 800 });

// Countdown Timer (offer ends in 3 days)
const endDate = new Date(); endDate.setDate(endDate.getDate() + 3);
const countdownEl = document.getElementById('countdown');
function updateCountdown() {
    const now = new Date();
    let diff = endDate - now;
    if (diff < 0) diff = 0;
    const days = Math.floor(diff / (1000*60*60*24));
    const hrs  = Math.floor((diff / (1000*60*60)) % 24);
    const mins = Math.floor((diff / (1000*60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);
    countdownEl.innerHTML = `<div>${days} ימים</div><div>${hrs} שעות</div><div>${mins} דקות</div><div>${secs} שניות</div>`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Testimonials Slider
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let index = 0;
document.getElementById('next').onclick = () => { index = (index+1)%slideCount; updateSlider(); };
document.getElementById('prev').onclick = () => { index = (index-1+slideCount)%slideCount; updateSlider(); };
function updateSlider() { slides.style.transform = `translateX(-${index*100}%)`; }

// Scroll to Top Button
const scrollBtn = document.getElementById('scrollTop');
window.onscroll = () => {
    scrollBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
};
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Live Chat Feature: Tawk.to Integration
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
})();

// Newsletter Subscription Popup
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('newsletter-modal');
    const closeBtn = modal.querySelector('.close-btn');
    // Show modal after 5 seconds
    setTimeout(() => modal.classList.add('show'), 5000);
    // Close on close button
    closeBtn.addEventListener('click', () => modal.classList.remove('show'));
    // Close on outside click
    window.addEventListener('click', e => {
        if (e.target === modal) modal.classList.remove('show');
    });
    // Handle form submit
    document.getElementById('newsletter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('תודה שהרשמת!');
        modal.classList.remove('show');
    });
});

// FAQ Accordion Section
document.querySelectorAll('.accordion-title').forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        content.classList.toggle('show');
    });
});
