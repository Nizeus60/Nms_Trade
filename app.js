// LANGUE
let currentLanguage = 'fr';
let savedSystems = JSON.parse(localStorage.getItem('nmsSavedSystems')) || [];

const translations = {
    fr: {
        title: "✦ COMMERCE GALACTIQUE ✦",
        placeholder: "Rechercher un produit...",
        searchBtn: "🔍 Chercher",
        navSearch: "Recherche",
        navSystems: "Systèmes",
        navComparator: "Comparer",
        navResources: "Ressources",
        systemsTitle: "📡 Mes Systèmes Sauvegardés",
        addSystemBtn: "➕ Ajouter un système",
        addSystemTitle: "➕ Nouveau Système",
        systemNameLabel: "Nom du système:",
        economyTypeLabel: "Type d'économie:",
        coordinatesLabel: "Coordonnées:",
        buyPercentLabel: "% Achat:",
        sellPercentLabel: "% Vente:",
        notesLabel: "Notes:",
        cancelBtn: "Annuler",
        saveSystemBtn: "💾 Sauvegarder",
        comparatorTitle: "📊 Comparateur de Systèmes",
        productSearchPlaceholder: "Chercher un produit...",
        searchProductBtn: "🔍 Chercher",
        resourcesTitle: "📚 Ressources",
        resourceSearchPlaceholder: "Rechercher une ressource...",
        searchResourceBtn: "🔍 Chercher",
        noResult: "Aucun résultat trouvé."
    },
    en: {
        title: "✦ GALACTIC TRADE ✦",
        placeholder: "Search product...",
        searchBtn: "🔍 Search",
        navSearch: "Search",
        navSystems: "Systems",
        navComparator: "Compare",
        navResources: "Resources",
        systemsTitle: "📡 My Saved Systems",
        addSystemBtn: "➕ Add System",
        addSystemTitle: "➕ New System",
        systemNameLabel: "System name:",
        economyTypeLabel: "Economy type:",
        coordinatesLabel: "Coordinates:",
        buyPercentLabel: "Buy %:",
        sellPercentLabel: "Sell %:",
        notesLabel: "Notes:",
        cancelBtn: "Cancel",
        saveSystemBtn: "💾 Save",
        comparatorTitle: "📊 Systems Comparator",
        productSearchPlaceholder: "Search product...",
        searchProductBtn: "🔍 Search",
        resourcesTitle: "📚 Resources",
        resourceSearchPlaceholder: "Search resource...",
        searchResourceBtn: "🔍 Search",
        noResult: "No results found."
    }
};

// PRODUITS
const products = {
    "Decrypted User Data|Données utilisateur décryptées": { economy: "trading", sellTo: ["Advanced Materials", "Scientific"] },
    "Star Silk|Soie stellaire": { economy: "trading", sellTo: ["Advanced Materials", "Scientific"] },
    "Comet Droplets|Gouttelettes de comète": { economy: "trading", sellTo: ["Advanced Materials", "Scientific"] },
    "Ion Sphere|Sphère ionique": { economy: "trading", sellTo: ["Advanced Materials", "Scientific"] },
    "Superconducting Fibre|Fibre supraconductrice": { economy: "trading", sellTo: ["Advanced Materials", "Scientific"] },
    "Neural Duct|Conduit neuronal": { economy: "materials", sellTo: ["Scientific"] },
    "Self-Repairing Heridium|Héridium autoréparant": { economy: "materials", sellTo: ["Scientific"] },
    "Optical Solvent|Solvant optique": { economy: "materials", sellTo: ["Scientific"] },
    "Five Dimensional Torus|Torus pentadimensionnel": { economy: "materials", sellTo: ["Scientific"] },
    "Superluminal Drive|Propulseur superluminal": { economy: "materials", sellTo: ["Scientific"] },
    "De-Scented Pheromone Bottle|Bouteille de phéromones désodorisée": { economy: "scientific", sellTo: ["Trading"] },
    "Neural Transmitter|Transmetteur neuronal": { economy: "scientific", sellTo: ["Trading"] },
    "Organic Piping|Tuyauterie organique": { economy: "scientific", sellTo: ["Trading"] },
    "Instability Injector|Injecteur d’instabilité": { economy: "scientific", sellTo: ["Trading"] },
    "Teleport Coordinators|Coordinateurs de téléportation": { economy: "scientific", sellTo: ["Trading"] },
    "Ion Battery|Batterie ionique": { economy: "mining", sellTo: ["Manufacturing"] },
    "Dirt|Terre": { economy: "mining", sellTo: ["Manufacturing"] },
    "Unrefined Pyrite Grease|Graisse de pyrite non raffinée": { economy: "mining", sellTo: ["Manufacturing"] },
    "Bromide Salt|Sel de bromure": { economy: "mining", sellTo: ["Manufacturing"] },
    "Polychromatic Zirconium|Zirconium polychromatique": { economy: "mining", sellTo: ["Manufacturing"] },
    "Nanotube Crate|Caisse de nanotubes": { economy: "manufacturing", sellTo: ["Technology"] },
    "Self-Repairing Component|Composant autoréparant": { economy: "manufacturing", sellTo: ["Technology"] },
    "Fusion Device|Dispositif de fusion": { economy: "manufacturing", sellTo: ["Technology"] },
    "Holographic Crankshaft|Vilebrequin holographique": { economy: "manufacturing", sellTo: ["Technology"] },
    "High-Pressure Gel|Gel haute pression": { economy: "manufacturing", sellTo: ["Technology"] },
    "Welding Soap|Savon de soudure": { economy: "technology", sellTo: ["Power Generation"] },
    "Enormous Metal Cog|Engrenage métallique énorme": { economy: "technology", sellTo: ["Power Generation"] },
    "Non-Stick Piston|Piston antiadhésif": { economy: "technology", sellTo: ["Power Generation"] },
    "Quantum Accelerator|Accélérateur quantique": { economy: "technology", sellTo: ["Power Generation"] },
    "Spark Canister|Bidon d’étincelles": { economy: "technology", sellTo: ["Power Generation"] },
    "Experimental Power Fluid|Fluide énergétique expérimental": { economy: "power", sellTo: ["Mining"] },
    "Industrial-Grade Battery|Batterie industrielle": { economy: "power", sellTo: ["Mining"] },
    "Ohmic Gel|Gel ohmique": { economy: "power", sellTo: ["Mining"] },
    "Experimental Force Shield|Bouclier de force expérimental": { economy: "power", sellTo: ["Mining"] },
    "Fusion Core|Cœur de fusion": { economy: "power", sellTo: ["Mining"] }
};

const economyColors = {
    "trading": "#00FF00",
    "materials": "#800080",
    "scientific": "#800080",
    "mining": "#FFA500",
    "manufacturing": "#0000FF",
    "technology": "#00FFFF",
    "power": "#FFFF00"
};

// Gérer les étoiles scintillantes
function generateStars() {
    const starsContainer = document.querySelector('.stars');
    const numStars = 100;
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        starsContainer.appendChild(star);
    }
}

// Changer de langue
function switchLanguage(lang, event) {
    currentLanguage = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    updateTranslations();
}

// Mettre à jour les traductions
function updateTranslations() {
    document.getElementById('appTitle').textContent = translations[currentLanguage].title;
    document.getElementById('productSearch').placeholder = translations[currentLanguage].placeholder;
    document.getElementById('searchProductBtn').textContent = translations[currentLanguage].searchBtn;
    document.getElementById('systemsTitle').textContent = translations[currentLanguage].systemsTitle;
    document.getElementById('addSystemBtn').textContent = translations[currentLanguage].addSystemBtn;
    document.getElementById('addSystemTitle').textContent = translations[currentLanguage].addSystemTitle;
    document.getElementById('systemName').previousElementSibling.textContent = translations[currentLanguage].systemNameLabel;
    document.getElementById('economyType').previousElementSibling.textContent = translations[currentLanguage].economyTypeLabel;
    document.getElementById('coordinates').previousElementSibling.textContent = translations[currentLanguage].coordinatesLabel;
    document.getElementById('buyPercent').previousElementSibling.textContent = translations[currentLanguage].buyPercentLabel;
    document.getElementById('sellPercent').previousElementSibling.textContent = translations[currentLanguage].sellPercentLabel;
    document.getElementById('notes').previousElementSibling.textContent = translations[currentLanguage].notesLabel;
    document.getElementById('cancelSystemBtn').textContent = translations[currentLanguage].cancelBtn;
    document.getElementById('saveSystemBtn').textContent = translations[currentLanguage].saveSystemBtn;
    document.getElementById('comparatorTitle').textContent = translations[currentLanguage].comparatorTitle;
    document.getElementById('comparatorSearch').placeholder = translations[currentLanguage].productSearchPlaceholder;
    document.getElementById('searchComparatorBtn').textContent = translations[currentLanguage].searchProductBtn;
    document.getElementById('resourcesTitle').textContent = translations[currentLanguage].resourcesTitle;
    document.getElementById('resourceSearch').placeholder = translations[currentLanguage].resourceSearchPlaceholder;
    document.getElementById('searchResourceBtn').textContent = translations[currentLanguage].searchResourceBtn;
    document.querySelectorAll('.nav-btn').forEach(btn => {
        const section = btn.dataset.section;
        btn.querySelector('.nav-label').textContent = translations[currentLanguage][`nav${section.charAt(0).toUpperCase() + section.slice(1).replace('Section', '')}`];
    });
    displaySystems();
    displayResources();
}

// Changer de section
function switchSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.nav-btn[data-section="${sectionId}"]`).classList.add('active');
}

// Afficher les systèmes sauvegardés
function displaySystems() {
    const systemsList = document.getElementById('systemsList');
    systemsList.innerHTML = '';
    if (savedSystems.length === 0) {
        systemsList.innerHTML = `<div class="no-result">${translations[currentLanguage].noResult}</div>`;
        return;
    }
    savedSystems.forEach(sys => {
        const card = document.createElement('div');
        card.className = 'system-card';
        card.innerHTML = `
            <div class="system-header">
                <div class="system-name">${sys.name}</div>
                <div class="system-coords">${sys.coordinates}</div>
            </div>
            <div>Économie: ${sys.economy}</div>
            <div>Achat: ${sys.buyPercent}% | Vente: ${sys.sellPercent}%</div>
            <div>Notes: ${sys.notes || '-'}</div>
        `;
        systemsList.appendChild(card);
    });
}

// Ajouter un système
document.getElementById('addSystemBtn').addEventListener('click', () => switchSection('addSystemSection'));
document.getElementById('saveSystemBtn').addEventListener('click', () => {
    const system = {
        name: document.getElementById('systemName').value,
        economy: document.getElementById('economyType').value,
        coordinates: document.getElementById('coordinates').value,
        buyPercent: parseFloat(document.getElementById('buyPercent').value) || 0,
        sellPercent: parseFloat(document.getElementById('sellPercent').value) || 0,
        notes: document.getElementById('notes').value
    };
    if (system.name && system.economy) {
        savedSystems.push(system);
        localStorage.setItem('nmsSavedSystems', JSON.stringify(savedSystems));
        switchSection('systemsSection');
        displaySystems();
        document.getElementById('systemName').value = '';
        document.getElementById('economyType').value = '';
        document.getElementById('coordinates').value = '';
        document.getElementById('buyPercent').value = '';
        document.getElementById('sellPercent').value = '';
        document.getElementById('notes').value = '';
    }
});
document.getElementById('cancelSystemBtn').addEventListener('click', () => switchSection('systemsSection'));

// Recherche de produit
function searchProduct(query) {
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';
    const filteredProducts = Object.keys(products).filter(key => key.toLowerCase().includes(query.toLowerCase()));
    if (filteredProducts.length === 0) {
        resultsList.innerHTML = `<div class="no-result">${translations[currentLanguage].noResult}</div>`;
        return;
    }
    displayResults(filteredProducts);
}

// Afficher les suggestions de produits
function displaySuggestions(query) {
    const suggestions = document.getElementById('productSuggestions');
    suggestions.innerHTML = '';
    if (query.length > 0) {
        const filteredProducts = Object.keys(products).filter(key => key.toLowerCase().includes(query.toLowerCase()));
        filteredProducts.forEach(key => {
            const product = products[key];
            const name = key.split('|')[currentLanguage === 'en' ? 0 : 1];
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.innerHTML = `
                <span class="economy-dot" style="background-color: ${economyColors[product.economy]}"></span>
                ${name}
            `;
            suggestionItem.addEventListener('click', () => {
                document.getElementById('productSearch').value = name;
                suggestions.innerHTML = '';
                searchProduct(name);
            });
            suggestions.appendChild(suggestionItem);
        });
    }
}

// Afficher les résultats
function displayResults(productKeys) {
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';
    if (productKeys.length === 0) {
        resultsList.innerHTML = `<div class="no-result">${translations[currentLanguage].noResult}</div>`;
        return;
    }
    productKeys.forEach(key => {
        const product = products[key];
        const name = key.split('|')[currentLanguage === 'en' ? 0 : 1];
        const card = document.createElement('div');
        card.className = 'system-card';
        card.innerHTML = `
            <div class="system-name">${name}</div>
            <div>
                <span class="economy-dot buy-economy" style="background-color: ${economyColors[product.economy]}"></span>
                Acheter dans: ${product.economy.charAt(0).toUpperCase() + product.economy.slice(1)}
            </div>
            <div>
                Vendre à: ${product.sellTo.map(e => `
                    <span class="economy-dot sell-economy" style="background-color: ${economyColors[e.toLowerCase()]}"></span>
                    ${e}
                `).join(', ')}
            </div>
        `;
        resultsList.appendChild(card);
    });
}

// Comparateur de systèmes
function compareSystems(productKey) {
    const comparatorResults = document.getElementById('comparatorResults');
    comparatorResults.innerHTML = '';
    if (!productKey || !products[productKey]) {
        comparatorResults.innerHTML = `<div class="no-result">${translations[currentLanguage].noResult}</div>`;
        return;
    }
    const product = products[productKey];
    const compatibleSystems = savedSystems.filter(sys => product.sellTo.includes(sys.economy.charAt(0).toUpperCase() + sys.economy.slice(1)));
    if (compatibleSystems.length === 0) {
        comparatorResults.innerHTML = `<div class="no-result">Aucun système compatible.</div>`;
        return;
    }
    compatibleSystems.sort((a, b) => (b.sellPercent - b.buyPercent) - (a.sellPercent - a.buyPercent));
    compatibleSystems.forEach(sys => {
        const card = document.createElement('div');
        card.className = 'system-card';
        card.innerHTML = `
            <div class="system-name">${sys.name}</div>
            <div>Profit potentiel: ${sys.sellPercent - sys.buyPercent}%</div>
            <div>Achat: ${sys.buyPercent}% | Vente: ${sys.sellPercent}%</div>
        `;
        comparatorResults.appendChild(card);
    });
}

// Afficher les ressources
function displayResources(query = '') {
    const resourcesList = document.getElementById('resourcesList');
    resourcesList.innerHTML = '';
    const filteredResources = resources.filter(res => res.name.toLowerCase().includes(query.toLowerCase()));
    if (filteredResources.length === 0) {
        resourcesList.innerHTML = `<div class="no-result">${translations[currentLanguage].noResult}</div>`;
        return;
    }
    const table = document.createElement('table');
    table.innerHTML = `<thead><tr><th>Nom</th><th>Type</th><th>Prix moyen</th><th>Vendre à</th></tr></thead><tbody></tbody>`;
    filteredResources.forEach(res => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${res.name}</td><td>${res.type}</td><td>${res.avgPrice}</td><td>${res.sell}</td>`;
        table.querySelector('tbody').appendChild(row);
    });
    resourcesList.appendChild(table);
}

// Recherche de ressource
function searchResource(query) {
    displayResources(query);
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    generateStars();
    updateTranslations();
    displaySystems();
    displayResources();
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => switchLanguage(btn.dataset.lang, e));
    });
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => switchSection(btn.dataset.section));
    });
    document.getElementById('searchProductBtn').addEventListener('click', () => {
        searchProduct(document.getElementById('productSearch').value);
    });
    document.getElementById('productSearch').addEventListener('input', () => {
        displaySuggestions(document.getElementById('productSearch').value);
    });
});