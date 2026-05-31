const translations = {
  es: {
    nav_home:"Inicio",nav_search:"Buscar",nav_categories:"Categorías",nav_plans:"Planes",nav_contact:"Contacto",
    tagline:"Plataforma de patrocinio privada",
    hero_title:"Conectamos patrocinadores con proyectos que inspiran.",
    hero_subtitle:"Toro Sponsor ayuda a empresas, artistas, deportistas, radios, influencers y proyectos a encontrarse, conversar y crecer juntos.",
    btn_sponsor:"Soy patrocinador",btn_project:"Busco patrocinio",
    categories_title:"Categorías principales",
    cat_music:"Música y cantantes",cat_art:"Artistas y cultura",cat_sports:"Jugadores y deportes",cat_media:"Radio y medios",
    cat_influencers:"Influencers y creadores",cat_events:"Eventos",cat_tech:"Tecnología",cat_social:"ONG y proyectos sociales",
    search_title:"Busca patrocinadores o proyectos",search_text:"Filtra por país, ciudad, categoría, tipo de usuario y nivel de prioridad.",
    placeholder_keyword:"Buscar por palabra clave",placeholder_city:"Ciudad o país",select_category:"Categoría",btn_search:"Buscar",
    plans_title:"Planes simples",free_plan:"Plan Gratis",priority_plan:"Plan Prioridad",month:"/mes",
    free_1:"Crear perfil",free_2:"Aparecer en búsquedas",free_3:"Mensajería privada",free_4:"Almacenamiento limitado",
    premium_1:"Aparecer primero en la lista",premium_2:"Más notificaciones",premium_3:"Insignia Prioridad",premium_4:"Más espacio para archivos",
    register_title:"Crea tu perfil",name:"Nombre o empresa",email:"Correo electrónico",phone:"Teléfono",location:"Ciudad / País",
    account_type:"Tipo de cuenta",sponsor:"Patrocinador",seeker:"Busco patrocinio",bio:"Biografía corta",create_profile:"Crear perfil gratis",
    footer:"Conexiones privadas, seguras y profesionales."
  },
  en: {
    nav_home:"Home",nav_search:"Search",nav_categories:"Categories",nav_plans:"Plans",nav_contact:"Contact",
    tagline:"Private sponsorship platform",
    hero_title:"We connect sponsors with projects that inspire.",
    hero_subtitle:"Toro Sponsor helps companies, artists, athletes, radio stations, influencers and projects meet, communicate and grow together.",
    btn_sponsor:"I am a sponsor",btn_project:"I need sponsorship",
    categories_title:"Main categories",
    cat_music:"Music and singers",cat_art:"Artists and culture",cat_sports:"Players and sports",cat_media:"Radio and media",
    cat_influencers:"Influencers and creators",cat_events:"Events",cat_tech:"Technology",cat_social:"NGOs and social projects",
    search_title:"Search sponsors or projects",search_text:"Filter by country, city, category, user type and priority level.",
    placeholder_keyword:"Search by keyword",placeholder_city:"City or country",select_category:"Category",btn_search:"Search",
    plans_title:"Simple plans",free_plan:"Free Plan",priority_plan:"Priority Plan",month:"/month",
    free_1:"Create profile",free_2:"Appear in searches",free_3:"Private messaging",free_4:"Limited storage",
    premium_1:"Appear first in the list",premium_2:"More notifications",premium_3:"Priority badge",premium_4:"More file storage",
    register_title:"Create your profile",name:"Name or company",email:"Email address",phone:"Phone",location:"City / Country",
    account_type:"Account type",sponsor:"Sponsor",seeker:"Looking for sponsorship",bio:"Short bio",create_profile:"Create free profile",
    footer:"Private, secure and professional connections."
  },
  de: {
    nav_home:"Start",nav_search:"Suchen",nav_categories:"Kategorien",nav_plans:"Pläne",nav_contact:"Kontakt",
    tagline:"Private Sponsoring-Plattform",
    hero_title:"Wir verbinden Sponsoren mit inspirierenden Projekten.",
    hero_subtitle:"Toro Sponsor hilft Unternehmen, Künstlern, Sportlern, Radiosendern, Influencern und Projekten, sich zu finden, zu kommunizieren und gemeinsam zu wachsen.",
    btn_sponsor:"Ich bin Sponsor",btn_project:"Ich suche Sponsoring",
    categories_title:"Hauptkategorien",
    cat_music:"Musik und Sänger",cat_art:"Künstler und Kultur",cat_sports:"Spieler und Sport",cat_media:"Radio und Medien",
    cat_influencers:"Influencer und Creator",cat_events:"Events",cat_tech:"Technologie",cat_social:"NGOs und soziale Projekte",
    search_title:"Sponsoren oder Projekte suchen",search_text:"Filtere nach Land, Stadt, Kategorie, Benutzertyp und Prioritätsstufe.",
    placeholder_keyword:"Nach Stichwort suchen",placeholder_city:"Stadt oder Land",select_category:"Kategorie",btn_search:"Suchen",
    plans_title:"Einfache Pläne",free_plan:"Kostenloser Plan",priority_plan:"Prioritätsplan",month:"/Monat",
    free_1:"Profil erstellen",free_2:"In Suchen erscheinen",free_3:"Private Nachrichten",free_4:"Begrenzter Speicher",
    premium_1:"Ganz oben in der Liste erscheinen",premium_2:"Mehr Benachrichtigungen",premium_3:"Prioritäts-Abzeichen",premium_4:"Mehr Speicherplatz",
    register_title:"Erstelle dein Profil",name:"Name oder Firma",email:"E-Mail-Adresse",phone:"Telefon",location:"Stadt / Land",
    account_type:"Kontotyp",sponsor:"Sponsor",seeker:"Suche Sponsoring",bio:"Kurze Biografie",create_profile:"Kostenloses Profil erstellen",
    footer:"Private, sichere und professionelle Verbindungen."
  }
};

const languageSelect = document.getElementById("languageSelect");

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });
  localStorage.setItem("language", lang);
}

languageSelect.addEventListener("change", e => setLanguage(e.target.value));
const saved = localStorage.getItem("language") || "es";
languageSelect.value = saved;
setLanguage(saved);
