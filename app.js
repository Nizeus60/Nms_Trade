// LANGUE
let currentLanguage='fr';
let savedSystems=JSON.parse(localStorage.getItem('nmsSavedSystems'))||[];

const translations={
    fr:{ title:"✦ COMMERCE GALACTIQUE ✦", placeholder:"Rechercher un produit...", searchBtn:"🔍 Chercher",
        navSearch:"Recherche", navSystems:"Systèmes", navComparator:"Comparer",
        systemsTitle:"📡 Mes Systèmes Sauvegardés", addSystemBtn:"➕ Ajouter un système",
        addSystemTitle:"➕ Nouveau Système", systemNameLabel:"Nom du système:", economyTypeLabel:"Type d'économie:",
        coordinatesLabel:"Coordonnées:", buyPercentLabel:"% Achat:", sellPercentLabel:"% Vente:", notesLabel:"Notes:",
        cancelBtn:"Annuler", saveSystemBtn:"💾 Sauvegarder", comparatorTitle:"📊 Comparateur de Systèmes",
        productSearchPlaceholder:"Chercher un produit...", searchProductBtn:"🔍 Chercher"
    },
    en:{ title:"✦ GALACTIC TRADE ✦", placeholder:"Search product...", searchBtn:"🔍 Search",
        navSearch:"Search", navSystems:"Systems", navComparator:"Compare",
        systemsTitle:"📡 My Saved Systems", addSystemBtn:"➕ Add System",
        addSystemTitle:"➕ New System", systemNameLabel:"System name:", economyTypeLabel:"Economy type:",
        coordinatesLabel:"Coordinates:", buyPercentLabel:"Buy %:", sellPercentLabel:"Sell %:", notesLabel:"Notes:",
        cancelBtn:"Cancel", saveSystemBtn:"💾 Save", comparatorTitle:"📊 Systems Comparator",
        productSearchPlaceholder:"Search product...", searchProductBtn:"🔍 Search"
    }
};

// PRODUITS
const products={
    "Decrypted User Data|Données utilisateur décryptées":{ economy:"trading", sellTo:["Advanced Materials","Scientific"] },
    "Star Silk|Soie stellaire":{ economy:"trading", sellTo:["Advanced Materials","Scientific"] },
    "Ion Sphere|Sphère ionique":{ economy:"trading", sellTo:["Advanced Materials","Scientific"] },
    "Non-Stick Piston|Piston antiadhésif":{ economy:"manufacturing", sellTo:["Technology","Power Generation"] },
    "Enormous Metal Cog|Énorme rouage en métal":{ economy:"manufacturing", sellTo:["Technology","Power Generation"] },
    "Dirt|Terre":{ economy:"mining", sellTo:["Manufacturing","Technology"] },
    "Superconductor|Supraconducteur":{ economy:"power", sellTo:["Mining","Manufacturing"] }
};

// RESSOURCES
const resources=[
    {name:"Or", type:"Metal", avgPrice:1500, sell:"Marchand"},
    {name:"Argent", type:"Metal", avgPrice:1000, sell:"Marchand"},
    {name:"Carbonne", type:"Metal", avgPrice:300, sell:"Marchand"},
    {name:"Emeril", type:"Metal", avgPrice:2500, sell:"Marchand"},
    {name:"Gravitino Ball", type:"Rare", avgPrice:5000, sell:"Marchand"},
    {name:"Star Bulb", type:"Rare", avgPrice:4500, sell:"Marchand"},
    {name:"Fungal Mold", type:"Product", avgPrice:1200, sell:"Station Bio"}
];

// FONCTIONS
function generateStars(){
    const starsContainer=document.getElementById('stars');
    for(let i=0;i<100;i++){
        const star=document.createElement('div');
        star.className='star';
        star.style.left=Math.random()*100+'%';
        star.style.top=Math.random()*100+'%';
        star.style.width=Math.random()*3+1+'px';
        star.style.height=star.style.width;
        star.style.animationDelay=Math.random()*3+'s';
        starsContainer.appendChild(star);
    }
}

function switchLanguage(lang,event){
    currentLanguage=lang;
    document.querySelectorAll('.lang-btn').forEach(btn=>btn.classList.remove
