// ===== DATA AVIS =====
const reviews = [
    { name:"BrunoLdA", initials:"BL", color:"#2563eb", stars:5, date:"il y a 3 semaines", visit:"Février 2026", text:"J'ai bien apprécié l'accueil téléphonique et sur place. M. Rachid a été sérieux et a respecté les engagements (prestations, prix, créneau). Le changement de l'embrayage a très bien été exécuté. Le prix est honnête et un peu plus bas que dans la concurrence." },
    { name:"Malik Barbier", initials:"MB", color:"#7c3aed", stars:5, date:"il y a 1 mois", visit:"Janvier 2026", text:"Je suis arrivé sans rendez-vous avec un problème urgent : une hernie sur mon flexible de frein avant. L'équipe a pris en charge le tout et a changé le flexible en seulement 15 minutes. Vraiment efficace et rapide !", badge:"Local Guide" },
    { name:"Cerette LUMERTINE", initials:"CL", color:"#059669", stars:5, date:"il y a 1 mois", visit:"Janvier 2026", text:"Un grand merci à Rachid et son équipe pour l'accueil irréprochable et le professionnalisme. J'ai vraiment apprécié qu'il me montre une vidéo des réparations effectuées sur ma voiture. Je recommande vivement !" },
    { name:"Adou ELYAKOUTI", initials:"AE", color:"#d97706", stars:5, date:"il y a 2 mois", visit:"Décembre 2025", text:"Service irréprochable. Accueil chaleureux, explications claires et réparation effectuée avec soin. Le rapport qualité-prix est excellent et les délais ont été respectés. Un garage de confiance que je recommande fortement." },
    { name:"Jean-Thomas", initials:"JT", color:"#dc2626", stars:5, date:"il y a 5 mois", visit:"Septembre 2025", text:"Un sens du service que l'on trouve de plus en plus rarement. Accueil chaleureux, respect du devis présenté, pas de surprise. Réactivité et prestation réalisée rapidement même avec commande de pièce." },
    { name:"MrPropre 95", initials:"MP", color:"#0891b2", stars:5, date:"il y a 7 mois", visit:"Juillet 2025", text:"Un grand merci à Rachid et son équipe pour leur professionnalisme. Ils ont même pensé à nettoyer les taches sur la voiture et même sous le capot. Encore merci, je viendrais faire mes plaquettes bientôt. À recommander !" },
    { name:"Samia B", initials:"SB", color:"#be185d", stars:5, date:"il y a 3 mois", visit:"Novembre 2025", text:"J'ai contacté le garage avant de m'y rendre. Le retour a été très clair et la personne au téléphone, agréable et professionnelle. Je suis passée dans la demi-heure et mon véhicule a été pris en charge immédiatement." },
    { name:"Yassine Benazzouz", initials:"YB", color:"#16a34a", stars:5, date:"il y a 7 mois", visit:"Juillet 2025", text:"Accueil très chaleureux. Prestation réalisée sur mon Opel Astra ce matin. La qualité de la vidange se manifeste immédiatement dans la fluidité du moteur. Respect du prix annoncé, aucune surprise. Merci !", badge:"Local Guide" }
];

function makeCard(r) {
    return `<div class="review-card">
        <div class="review-header">
            <div class="avatar" style="background:${r.color}">${r.initials}</div>
            <div>
                <div class="reviewer-name">${r.name}${r.badge ? ` <span class="google-badge" style="margin-left:6px;">${r.badge}</span>` : ''}</div>
                <div class="reviewer-meta">${r.date}</div>
                <div class="review-stars">${'⭐'.repeat(r.stars)}</div>
            </div>
        </div>
        <p class="review-text">"${r.text}"</p>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:auto;">
            <span class="review-date">Visité en ${r.visit}</span>
            <span class="google-badge">🔍 Google</span>
        </div>
    </div>`;
}

const half = Math.ceil(reviews.length / 2);
const row1 = reviews.slice(0, half);
const row2 = reviews.slice(half);

function buildTrack(el, data) {
    const html = [...data, ...data, ...data].map(makeCard).join('');
    el.innerHTML = html;
}

buildTrack(document.getElementById('track1'), row1);
buildTrack(document.getElementById('track2'), row2);

// ===== NAVBAR RETRACTABLE =====
const header = document.getElementById('mainHeader');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    // Empêche les bugs liés au scroll élastique sur mobile (valeurs négatives)
    if (currentScroll <= 0) {
        header.classList.remove('hide');
        lastScroll = currentScroll;
        return;
    }
    
    // Si on descend et qu'on a dépassé 100px, on cache
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add('hide');
    } 
    // Si on remonte, on affiche
    else if (currentScroll < lastScroll) {
        header.classList.remove('hide');
    }
    
    lastScroll = currentScroll;
}, { passive: true });

// ===== BACK TO TOP =====
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) backBtn.classList.add('visible');
    else backBtn.classList.remove('visible');
}, { passive: true });
backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===== MOBILE MENU =====
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== HIGHLIGHT TODAY =====
const todayNum = new Date().getDay();
document.querySelectorAll('[data-day]').forEach(row => {
    if (parseInt(row.dataset.day) === todayNum) {
        row.classList.add('today');
        const daySpan = row.querySelector('.hours-day');
        if (daySpan) daySpan.innerHTML += '<span class="today-badge">Aujourd\'hui</span>';
    }
});

// ===== FORM =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    this.style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
    setTimeout(() => {
        this.reset();
        this.style.display = 'block';
        document.getElementById('formSuccess').style.display = 'none';
    }, 5000);
});

// ===== ANIMATIONS AU SCROLL (INTERSECTION OBSERVER) =====
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const revealOptions = {
    threshold: 0.15, // Se déclenche quand 15% de l'élément est visible
    rootMargin: "0px 0px -50px 0px" 
};
const revealObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Ne s'anime qu'une seule fois
    });
}, revealOptions);

revealElements.forEach(el => revealObserver.observe(el));   