// ===== DATA =====
const reviews = [
    { name:"BrunoLdA", initials:"BL", color:"#2563eb", stars:5, date:"il y a 3 semaines", visit:"Février 2026", text:"J'ai bien apprécié l'accueil téléphonique et sur place. M. Rachid a été sérieux et a respecté les engagements (prestations, prix, créneau). Le changement de l'embrayage a très bien été exécuté. Le prix est honnête et un peu plus bas que dans la concurrence." },
    { name:"Malik Barbier", initials:"MB", color:"#7c3aed", stars:5, date:"il y a 1 mois", visit:"Janvier 2026", text:"Je suis arrivé sans rendez-vous avec un problème urgent : une hernie sur mon flexible de frein avant. L'équipe a pris en charge le tout et a changé le flexible en seulement 15 minutes. Vraiment efficace et rapide !", badge:"Local Guide" },
    { name:"Cerette LUMERTINE", initials:"CL", color:"#059669", stars:5, date:"il y a 1 mois", visit:"Janvier 2026", text:"Un grand merci à Rachid et son équipe pour l'accueil irréprochable et le professionnalisme. J'ai vraiment apprécié qu'il me montre une vidéo des réparations effectuées sur ma voiture. Je recommande vivement !" },
    { name:"Adou ELYAKOUTI", initials:"AE", color:"#d97706", stars:5, date:"il y a 2 mois", visit:"Décembre 2025", text:"Service irréprochable. Accueil chaleureux, explications claires et réparation effectuée avec soin. Le rapport qualité-prix est excellent et les délais ont été respectés. Un garage de confiance que je recommande fortement." },
    { name:"Jean-Thomas", initials:"JT", color:"#dc2626", stars:5, date:"il y a 5 mois", visit:"Septembre 2025", text:"Un sens du service que l'on trouve de plus en plus rarement. Accueil chaleureux, respect du devis présenté, pas de surprise. Réactivité et prestation réalisée rapidement même avec commande de pièce." },
    { name:"MrPropre 95", initials:"MP", color:"#0891b2", stars:5, date:"il y a 7 mois", visit:"Juillet 2025", text:"Un grand merci à Rachid et son équipe pour leur professionnalisme. Ils ont même pensé à nettoyer les taches sur la voiture et même sous le capot. Encore merci, je viendrais faire mes plaquettes bientôt. À recommander !" },
    { name:"Samia B", initials:"SB", color:"#be185d", stars:5, date:"il y a 3 mois", visit:"Novembre 2025", text:"J'ai contacté le garage avant de m'y rendre. Le retour a été très clair et la personne au téléphone, agréable et professionnelle. Je suis passée dans la demi-heure et mon véhicule a été pris en charge immédiatement." },
    { name:"Yassine Benazzouz", initials:"YB", color:"#16a34a", stars:5, date:"il y a 7 mois", visit:"Juillet 2025", text:"Accueil très chaleureux. Prestation réalisée sur mon Opel Astra ce matin. La qualité de la vidange se manifeste immédiatement dans la fluidité du moteur. Respect du prix annoncé, aucune surprise. Merci !", badge:"Local Guide" },
    { name:"Lyse VOUMBO-YALO", initials:"LV", color:"#7c3aed", stars:5, date:"il y a 5 mois", visit:"Août 2025", text:"Très bon garage, surtout honnête. Un autre garagiste voulait me facturer un FAP à 800€. Ici ils ont d'abord vérifié et en fait il n'y avait pas besoin de le changer. Honnêteté et sérieux au rendez-vous !" },
    { name:"Hicham Bazout", initials:"HB", color:"#2563eb", stars:5, date:"il y a 10 mois", visit:"Avril 2025", text:"J'ai effectué l'entretien de ma Mercedes A250 (2024) dans ce garage et suis extrêmement satisfait. L'équipe est professionnelle, accueillante et à l'écoute. Le travail a été fait rapidement et avec soin." },
    { name:"Fluffy N'pact", initials:"FN", color:"#0369a1", stars:5, date:"il y a 3 mois", visit:"Septembre 2025", text:"J'ai amené mon Golf 4 pour un embrayage. Les mécaniciens ont déniché un problème supplémentaire et m'en ont informé pour ne pas retourner un véhicule à problème sur la route. Garage très honnête." },
    { name:"fari ben", initials:"FB", color:"#b45309", stars:5, date:"il y a 6 mois", visit:"Août 2025", text:"Après avoir été chez plusieurs garagistes, c'est le seul qui a pu diagnostiquer précisément ma panne sur ma Mégane 3 : capteur de pression d'huile défectueux. Très professionnel, Rachid explique clairement." },
    { name:"Said Uzdenov", initials:"SU", color:"#0891b2", stars:5, date:"il y a 3 mois", visit:"Novembre 2025", text:"Très bon accueil ! L'équipe est professionnelle et chaleureuse. La prise en charge de ma voiture a été très rapide et efficace. Je recommande vivement ce garage !" },
    { name:"johnson delia", initials:"JD", color:"#059669", stars:5, date:"il y a 4 mois", visit:"Octobre 2025", text:"Je suis satisfaite de ce garage. Ils ont pu résoudre un problème que les autres n'ont pas pu faire sur ma Opel Corsa. De plus l'accueil est convivial et chaleureux. Un grand merci à Rachid pour son professionnalisme." },
    { name:"Izaoura Cbr", initials:"IC", color:"#be185d", stars:5, date:"il y a un an", visit:"Janvier 2025", text:"Le patron est vraiment très professionnel et est très à l'écoute des besoins de ses clients. Je suis venue pour une réparation de mon embrayage sur ma 207. Réglé en moins de 24h, je vous le recommande vraiment !", badge:"Local Guide" },
    { name:"Valentina Soares", initials:"VS", color:"#d97706", stars:5, date:"il y a 6 mois", visit:"Août 2025", text:"Révision, distribution, pneu, triangles. Tout a été traité dans un délai rapide et ils ont été très arrangeants sur le tarif. Clairement, ce sont des gens qui écoutent, expliquent et cherchent des solutions." },
    { name:"Nawfal Hamdi", initials:"NH", color:"#16a34a", stars:5, date:"il y a 1 mois", visit:"Janvier 2026", text:"Très bon garage, j'ai effectué une vidange. Une deuxième fois, réparation de papillon, tout est nickel. Personnel accueillant et pro." },
    { name:"Agathe J.", initials:"AJ", color:"#7c3aed", stars:5, date:"il y a 7 mois", visit:"Juillet 2025", text:"Je suis allée pour ma Peugeot 206 qui surchauffait depuis 1 an — un autre garage avait échoué à le résoudre. Ici, le problème a été identifié et réglé. Service exceptionnel, je recommande chaudement !", badge:"Local Guide" }
];

function makeCard(r) {
    return `<div class="review-card">
        <div class="review-header">
            <div class="avatar" style="background:${r.color}">${r.initials}</div>
            <div>
                <div class="reviewer-name">${r.name}${r.badge ? ` <span style="font-size:0.62rem;background:#e8f0fe;color:#1a56db;padding:2px 6px;border-radius:4px;">${r.badge}</span>` : ''}</div>
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

// Split reviews into 2 groups, then duplicate for seamless loop
const half = Math.ceil(reviews.length / 2);
const row1 = reviews.slice(0, half);
const row2 = reviews.slice(half);

function buildTrack(el, data) {
    // Duplicate 3× to ensure seamless infinite scroll
    const html = [...data, ...data, ...data].map(makeCard).join('');
    el.innerHTML = html;
}

buildTrack(document.getElementById('track1'), row1);
buildTrack(document.getElementById('track2'), row2);

// ===== HEADER HIDE ON SCROLL =====
const header = document.getElementById('mainHeader');
let lastY = 0;
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            const y = window.scrollY;
            if (y > lastY && y > 100) {
                header.classList.add('hide');
            } else {
                header.classList.remove('hide');
            }
            lastY = y;
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

// ===== BACK TO TOP =====
const backBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backBtn.classList.add('visible');
    } else {
        backBtn.classList.remove('visible');
    }
}, { passive: true });

backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== MOBILE MENU =====
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuBtn.textContent = navLinks.classList.contains('open') ? '✖' : '☰';
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuBtn.textContent = '☰';
    });
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
