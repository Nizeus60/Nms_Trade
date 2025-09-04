// Vérification et log de products chargé depuis products.js
console.log('Products loaded:', typeof window.products !== 'undefined' ? Object.keys(window.products).length : 0);

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
    console.log('Generating stars...');
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) {
        console.error('Stars container not found');
        return;
    }
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
    console.log('Switching language to:', lang);
    currentLanguage = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    updateTranslations();
}

// Mettre à jour les traductions
function updateTranslations() {
    console.log('Updating translations for language:', currentLanguage);
    const appTitle = document.getElementById('appTitle');
    const productSearch = document.getElementById('productSearch');
    const searchProductBtn = document.getElementById('searchProductBtn');
    const systemsTitle = document.getElementById('systemsTitle');
    const addSystemBtn = document.getElementById('addSystemBtn');
    const addSystemTitle = document.getElementById('addSystemTitle');
    const systemName = document.getElementById('systemName');
    const economyType = document.getElementById('economyType');
    const coordinates = document.getElementById('coordinates');
    const buyPercent = document.getElementById('buyPercent');
    const sellPercent = document.getElementById('sellPercent');
    const notes = document.getElementById('notes');
    const cancelSystemBtn = document.getElementById('cancelSystemBtn');
    const saveSystemBtn = document.getElementById('saveSystemBtn');
    const comparatorTitle = document.getElementById('comparatorTitle');
    const comparatorSearch = document.getElementById('comparatorSearch');
    const searchComparatorBtn = document.getElementById('searchComparatorBtn');
    const resourcesTitle = document.getElementById('resourcesTitle');
    const resourceSearch = document.getElementById('resourceSearch');
    const searchResourceBtn = document.getElementById('searchResourceBtn');

    if (appTitle) appTitle.textContent = translations[currentLanguage].title;
    if (productSearch) productSearch.placeholder = translations[currentLanguage].placeholder;
    if (searchProductBtn) searchProductBtn.textContent = translations[currentLanguage].searchBtn;
    if (systemsTitle) systemsTitle.textContent = translations[currentLanguage].systemsTitle;
    if (addSystemBtn) addSystemBtn.textContent = translations[currentLanguage].addSystemBtn;
    if (addSystemTitle) addSystemTitle.textContent = translations[currentLanguage].addSystemTitle;
    if (systemName) systemName.previousElementSibling.textContent = translations[currentLanguage].systemNameLabel;
    if (economyType) economyType.previousElementSibling.textContent = translations[currentLanguage].economyTypeLabel;
    if (coordinates) coordinates.previousElementSibling.textContent = translations[currentLanguage].coordinatesLabel;
    if (buyPercent) buyPercent.previousElementSibling.textContent = translations[currentLanguage].buyPercentLabel;
    if (sellPercent) sellPercent.previousElementSibling.textContent = translations[currentLanguage].sellPercentLabel;
    if (notes) notes.previousElementSibling.textContent = translations[currentLanguage].notesLabel;
    if (cancelSystemBtn) cancelSystemBtn.textContent = translations[currentLanguage].cancelBtn;
    if (saveSystemBtn) saveSystemBtn.textContent = translations[currentLanguage].saveSystemBtn;
    if (comparatorTitle) comparatorTitle.textContent = translations[currentLanguage].comparatorTitle;
    if (comparatorSearch) comparatorSearch.placeholder = translations[currentLanguage].productSearchPlaceholder;
    if (searchComparatorBtn) searchComparatorBtn.textContent = translations[currentLanguage].searchProductBtn;
    if (resourcesTitle) resourcesTitle.textContent = translations[currentLanguage].resourcesTitle;
    if (resourceSearch) resourceSearch.placeholder = translations[currentLanguage].resourceSearchPlaceholder;
    if (searchResourceBtn) searchResourceBtn.textContent = translations[currentLanguage].searchResourceBtn;

    document.querySelectorAll('.nav-btn').forEach(btn => {
        const section = btn.dataset.section;
        const navLabel = btn.querySelector('.nav-label');
        if (navLabel) {
            navLabel.textContent = translations[currentLanguage][`nav${section.charAt(0).toUpperCase() + section.slice(1).replace('Section', '')}`];
        }
    });
    displaySystems();
}

// Changer de section
function switchSection(sectionId) {
    console.log('Switching to section:', sectionId);
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    const section = document.getElementById(sectionId);
    if (section) section.classList.add('active');
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const navBtn = document.querySelector(`.nav-btn[data-section="${sectionId}"]`);
    if (navBtn) navBtn.classList.add('active');
}

// Afficher les systèmes sauvegardés
function displaySystems() {
    console.log('Displaying systems...');
    const systemsList = document.getElementById('systemsList');
    if (!systemsList) {
        console.error('Systems list not found');
        return;
    }
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
function addSystemListeners() {
    console.log('Adding system listeners...');
    const addSystemBtn = document.getElementById('addSystemBtn');
    const saveSystemBtn = document.getElementById('saveSystemBtn');
    const cancelSystemBtn = document.getElementById('cancelSystemBtn');

    if (addSystemBtn) {
        addSystemBtn.addEventListener('click', () => switchSection('addSystemSection'));
    }
    if (saveSystemBtn) {
        saveSystemBtn.addEventListener('click', () => {
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
    }
    if (cancelSystemBtn) {
        cancelSystemBtn.addEventListener('click', () => switchSection('systemsSection'));
    }
}

// Recherche de produit
function searchProduct(query) {
    console.log('Searching product:', query);
    const resultsList = document.getElementById('resultsList');
    if (!resultsList) {
        console.error('Results list not found');
        return;
    }
    resultsList.innerHTML = '';
    const filteredProducts = typeof window.products !== 'undefined' ? Object.keys(window.products).filter(key => {
        const names = key.split('|');
        const name = currentLanguage === 'en' ? names[0] : names[1];
        return name.toLowerCase().includes(query.toLowerCase());
    }) : [];
    console.log('Filtered products:', filteredProducts);
    if (filteredProducts.length === 0) {
        console.log('No products found for query:', query);
        resultsList.innerHTML = `<div class="no-result">${translations[currentLanguage].noResult}</div>`;
        return;
    }
    displayResults(filteredProducts);
}

// Afficher les suggestions de produits
function displaySuggestions(query) {
    console.log('Displaying suggestions for query:', query);
    const suggestions = document.getElementById('productSuggestions');
    if (!suggestions) {
        console.error('Suggestions container not found');
        return;
    }
    suggestions.innerHTML = '';
    if (query.length > 0 && typeof window.products !== 'undefined') {
        const filteredProducts = Object.keys(window.products).filter(key => {
            const names = key.split('|');
            const name = currentLanguage === 'en' ? names[0] : names[1];
            return name.toLowerCase().includes(query.toLowerCase());
        });
        console.log('Suggestions filtered products:', filteredProducts);
        filteredProducts.forEach(key => {
            const product = window.products[key];
            const name = key.split('|')[currentLanguage === 'en' ? 0 : 1];
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.innerHTML = `
                <span class="economy-dot" style="background-color: ${economyColors[product.economy]}"></span>
                ${name}
            `;
            suggestionItem.addEventListener('click', () => {
                console.log('Suggestion clicked:', name);
                document.getElementById('productSearch').value = name;
                suggestions.innerHTML = '';
                searchProduct(name);
            });
            suggestions.appendChild(suggestionItem);
        });
        console.log('Suggestions HTML:', suggestions.innerHTML);
    } else {
        console.warn('No products available for suggestions');
    }
}

// Afficher les résultats
function displayResults(productKeys) {
    console.log('Displaying results for products:', productKeys);
    const resultsList = document.getElementById('resultsList');
    if (!resultsList) {
        console.error('Results list not found');
        return;
    }
    resultsList.innerHTML = '';
    if (productKeys.length === 0) {
        resultsList.innerHTML = `<div class="no-result">${translations[currentLanguage].noResult}</div>`;
        return;
    }
    productKeys.forEach(key => {
        const product = window.products[key];
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
            <div>Prix moyen: ${product.avgPrice} unités</div>
        `;
        resultsList.appendChild(card);
    });
    console.log('Results HTML:', resultsList.innerHTML);
}

// Comparateur de systèmes
function compareSystems(productKey) {
    console.log('Comparing systems for product:', productKey);
    const comparatorResults = document.getElementById('comparatorResults');
    if (!comparatorResults) {
        console.error('Comparator results not found');
        return;
    }
    comparatorResults.innerHTML = '';
    if (!productKey || !window.products[productKey]) {
        comparatorResults.innerHTML = `<div class="no-result">${translations[currentLanguage].noResult}</div>`;
        return;
    }
    const product = window.products[productKey];
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

// Initialisation
function initializeApp() {
    console.log('Initializing app...');
    generateStars();
    updateTranslations();
    displaySystems();

    // Attacher les écouteurs pour la langue et la navigation
    const langButtons = document.querySelectorAll('.lang-btn');
    console.log('Found language buttons:', langButtons.length);
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => switchLanguage(btn.dataset.lang, e));
    });

    const navButtons = document.querySelectorAll('.nav-btn');
    console.log('Found nav buttons:', navButtons.length);
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => switchSection(btn.dataset.section));
    });

    // Attacher les écouteurs pour la recherche de produits
    const productSearch = document.getElementById('productSearch');
    const searchProductBtn = document.getElementById('searchProductBtn');
    
    if (productSearch) {
        console.log('Attaching input listener to productSearch');
        productSearch.addEventListener('input', () => {
            const query = productSearch.value;
            console.log('Input event triggered with query:', query);
            displaySuggestions(query);
        });
    } else {
        console.error('productSearch input not found');
    }

    if (searchProductBtn) {
        console.log('Attaching click listener to searchProductBtn');
        searchProductBtn.addEventListener('click', () => {
            const query = productSearch.value;
            console.log('Search button clicked with query:', query);
            searchProduct(query);
        });
    } else {
        console.error('searchProductBtn not found');
    }

    // Initialiser les ressources (délégué à resources.js)
    if (typeof initializeResources === 'function') {
        console.log('Initializing resources module...');
        initializeResources();
    } else {
        console.error('initializeResources function not found');
    }

    // Supprimer les écouteurs redondants ici, laissés à resources.js
    // Attacher les écouteurs pour l'ajout de systèmes
    addSystemListeners();
}

// Exécuter l'initialisation pour deviceready ou DOMContentLoaded
document.addEventListener('deviceready', () => {
    console.log('Cordova deviceready fired');
    initializeApp();
}, false);

// Fallback pour les tests hors Cordova
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded fired (fallback)');
    initializeApp();
}, false);