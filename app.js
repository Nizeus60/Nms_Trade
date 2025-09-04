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
    "Ion Sphere|Sphère ionique": { economy: "trading", sellTo: ["Advanced Materials", "Scientific"] },
    "Non-Stick Piston|Piston antiadhésif": { economy: "manufacturing", sellTo: ["Technology", "Power Generation"] },
    "Enormous Metal Cog|Énorme rouage en métal": { economy: "manufacturing", sellTo: ["Technology", "Power Generation"] },
    "Dirt|Terre": { economy: "mining", sellTo: ["Manufacturing", "Technology"] },
    "Superconductor|Supraconducteur": { economy: "power", sellTo: ["Mining", "Manufacturing"] }
};

// RESSOURCES
const resources = [
    { name: "Or", type: "Metal", avgPrice: 1500, sell: "Marchand" },
    { name: "Argent", type: "Metal", avgPrice: 1000, sell: "Marchand" },
    { name: "Carbonne", type: "Metal", avgPrice: 300, sell: "Marchand" },
    { name: "Emeril", type: "Metal", avgPrice: 2500, sell: "Marchand" },
    { name: "Gravitino Ball", type: "Rare", avgPrice: 5000, sell: "Marchand" },
    { name: "Star Bulb", type: "Rare", avgPrice: 4500, sell: "Marchand" },
    { name: "Fungal Mold", type: "Product", avgPrice: 1200, sell: "Station Bio" }
];

// FONCTIONS
function generateStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

function switchLanguage(lang, event) {
    currentLanguage = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    updateTranslations();
    displaySystems(); // Mettre à jour l'affichage des systèmes
    displayResources(); // Mettre à jour les ressources si affichées
}

function updateTranslations() {
    const t = translations[currentLanguage];
    document.querySelector('h1').textContent = t.title;
    document.querySelector('#searchInput').placeholder = t.placeholder;
    document.querySelector('#searchBtn').textContent = t.searchBtn;
    document.querySelector('#systems h2').textContent = t.systemsTitle;
    document.querySelector('#addSystemBtn').textContent = t.addSystemBtn;
    document.querySelector('#add-system h2').textContent = t.addSystemTitle;
    document.querySelector('label[for="systemName"]').textContent = t.systemNameLabel;
    document.querySelector('label[for="economyType"]').textContent = t.economyTypeLabel;
    document.querySelector('label[for="coordinates"]').textContent = t.coordinatesLabel;
    document.querySelector('label[for="buyPercent"]').textContent = t.buyPercentLabel;
    document.querySelector('label[for="sellPercent"]').textContent = t.sellPercentLabel;
    document.querySelector('label[for="notes"]').textContent = t.notesLabel;
    document.querySelector('#add-system .secondary-btn').textContent = t.cancelBtn;
    document.querySelector('#saveSystemBtn').textContent = t.saveSystemBtn;
    document.querySelector('#comparator h2').textContent = t.comparatorTitle;
    document.querySelector('#productSearchInput').placeholder = t.productSearchPlaceholder;
    document.querySelector('#searchProductBtn').textContent = t.searchProductBtn;
    document.querySelector('#resources h2').textContent = t.resourcesTitle;
    document.querySelector('#resourceSearchInput').placeholder = t.resourceSearchPlaceholder;
    document.querySelector('#searchResourceBtn').textContent = t.searchResourceBtn;

    // Mise à jour des labels de navigation
    document.querySelector('[data-section="search"] .nav-label').textContent = t.navSearch;
    document.querySelector('[data-section="systems"] .nav-label').textContent = t.navSystems;
    document.querySelector('[data-section="comparator"] .nav-label').textContent = t.navComparator;
    document.querySelector('[data-section="resources"] .nav-label').textContent = t.navResources;
}

// Gestion de la navigation
function switchSection(sectionId) {
    document.querySelectorAll('.page-section').forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
    if (sectionId === 'resources') displayResources();
}

// Afficher le formulaire d'ajout
function showAddSystemForm(editSystem = null) {
    switchSection('add-system');
    if (editSystem) {
        document.getElementById('systemName').value = editSystem.name;
        document.getElementById('economyType').value = editSystem.economy;
        document.getElementById('coordinates').value = editSystem.coordinates;
        document.getElementById('buyPercent').value = editSystem.buyPercent;
        document.getElementById('sellPercent').value = editSystem.sellPercent;
        document.getElementById('notes').value = editSystem.notes;
        document.getElementById('systemForm').dataset.editName = editSystem.name; // Pour édition
    } else {
        document.getElementById('systemForm').reset();
        delete document.getElementById('systemForm').dataset.editName;
    }
}

// Cacher le formulaire d'ajout
function hideAddSystemForm() {
    switchSection('systems');
}

// Sauvegarder ou modifier un système
function saveSystem() {
    const form = document.getElementById('systemForm');
    const system = {
        name: document.getElementById('systemName').value.trim(),
        economy: document.getElementById('economyType').value,
        coordinates: document.getElementById('coordinates').value.trim().replace(/:/g, ''), // Sans ":"
        buyPercent: parseFloat(document.getElementById('buyPercent').value) || 0,
        sellPercent: parseFloat(document.getElementById('sellPercent').value) || 0,
        notes: document.getElementById('notes').value.trim()
    };

    if (!system.name || !system.economy || !system.coordinates) {
        alert(translations[currentLanguage].noResult); // Utilise la traduction pour "Aucun résultat"
        return;
    }

    if (form.dataset.editName) {
        // Édition
        const index = savedSystems.findIndex(s => s.name === form.dataset.editName);
        if (index !== -1) savedSystems[index] = system;
    } else {
        // Ajout
        savedSystems.push(system);
    }

    localStorage.setItem('nmsSavedSystems', JSON.stringify(savedSystems));
    displaySystems();
    hideAddSystemForm();
}

// Afficher les systèmes
function displaySystems() {
    const systemsList = document.getElementById('systemsList');
    systemsList.innerHTML = '';
    if (savedSystems.length === 0) {
        systemsList.innerHTML = `<div class="no-result">${translations[currentLanguage].noResult}</div>`;
        return;
    }
    savedSystems.forEach(system => {
        const card = document.createElement('div');
        card.className = 'system-card';
        card.innerHTML = `
            <div class="system-header">
                <span class="system-name">${system.name}</span>
                <span class="system-coords">${system.coordinates}</span>
            </div>
            <div>Économie: ${system.economy}</div>
            <div>Achat: ${system.buyPercent}% | Vente: ${system.sellPercent}%</div>
            <div>Notes: ${system.notes}</div>
            <button class="secondary-btn" onclick="editSystem('${system.name}')">Modifier</button>
            <button class="secondary-btn" onclick="deleteSystem('${system.name}')">Supprimer</button>
        `;
        systemsList.appendChild(card);
    });
}

// Modifier un système
function editSystem(name) {
    const system = savedSystems.find(s => s.name === name);
    if (system) showAddSystemForm(system);
}

// Supprimer un système
function deleteSystem(name) {
    savedSystems = savedSystems.filter(system => system.name !== name);
    localStorage.setItem('nmsSavedSystems', JSON.stringify(savedSystems));
    displaySystems();
}

// Recherche de produit
function searchProduct(query) {
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';
    const results = Object.entries(products).filter(([key]) => key.toLowerCase().includes(query.toLowerCase()));
    if (results.length === 0) {
        resultsList.innerHTML = `<div class="no-result">${translations[currentLanguage].noResult}</div>`;
        return;
    }
    results.forEach(([key, value]) => {
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        item.innerHTML = `<span>${key}</span><span>Économie: ${value.economy} | Vendre à: ${value.sellTo.join(', ')}</span>`;
        resultsList.appendChild(item);
    });
}

// Comparateur de systèmes pour un produit
function compareSystems(productQuery) {
    const comparatorResults = document.getElementById('comparatorResults');
    comparatorResults.innerHTML = '';
    const productKey = Object.keys(products).find(key => key.toLowerCase().includes(productQuery.toLowerCase()));
    if (!productKey) {
        comparatorResults.innerHTML = `<div class="no-result">${translations[currentLanguage].noResult}</div>`;
        return;
    }
    const product = products[productKey];
    const compatibleSystems = savedSystems.filter(sys => product.sellTo.includes(sys.economy.charAt(0).toUpperCase() + sys.economy.slice(1)));
    if (compatibleSystems.length === 0) {
        comparatorResults.innerHTML = `<div class="no-result">Aucun système compatible.</div>`;
        return;
    }
    // Tri par profit potentiel (ex: vente % - achat %)
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
    displayResources(); // Initial pour l'onglet ressources
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => switchLanguage(btn.dataset.lang, e));
    });
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => switchSection(btn.dataset.section));
    });
});