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
        noResult: "Aucun résultat trouvé.",
        deleteBtn: "Supprimer",
        economyOptions: {
            "": "Sélectionner...",
            "Trading": "Marchande/Trading",
            "Manufacturing": "Fabrication/Manufacturing",
            "Technology": "High-tech/Technology",
            "Power Generation": "Génération d'énergie/Power",
            "Mining": "Minière/Mining",
            "Scientific": "Scientifique/Scientific",
            "Advanced Materials": "Alliages avancés/Materials"
        }
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
        noResult: "No results found.",
        deleteBtn: "Delete",
        economyOptions: {
            "": "Select...",
            "Trading": "Trading",
            "Manufacturing": "Manufacturing",
            "Technology": "High-tech",
            "Power Generation": "Power",
            "Mining": "Mining",
            "Scientific": "Scientific",
            "Advanced Materials": "Advanced Materials"
        }
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

    // Traduire les options du sélecteur d'économie
    const economySelect = document.getElementById('economyType');
    if (economySelect) {
        const options = economySelect.options;
        for (let i = 0; i < options.length; i++) {
            options[i].text = translations[currentLanguage].economyOptions[options[i].value] || options[i].value;
        }
    }

    // Mettre à jour les cartes des systèmes
    const systemCards = document.querySelectorAll('.system-card .delete-btn');
    systemCards.forEach(btn => {
        btn.textContent = translations[currentLanguage].deleteBtn;
    });

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
    savedSystems.forEach((sys, index) => {
        const card = document.createElement('div');
        card.className = 'system-card';
        card.innerHTML = `
            <div class="system-header">
                <div class="system-name">${sys.name}</div>
                <div class="system-coords">${sys.coordinates}</div>
            </div>
            <div>
                <span class="economy-dot" style="background-color: ${economyColors[sys.economy.toLowerCase()]}"></span>
                Économie: ${sys.economy}
            </div>
            <div>Achat: ${sys.buyPercent}% | Vente: ${sys.sellPercent}%</div>
            <div>Notes: ${sys.notes || '-'}</div>
            <button class="delete-btn" data-index="${index}">${translations[currentLanguage].deleteBtn}</button>
        `;
        systemsList.appendChild(card);
    });
    // Ajouter les écouteurs pour les boutons de suppression
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            savedSystems.splice(index, 1);
            localStorage.setItem('nmsSavedSystems', JSON.stringify(savedSystems));
            displaySystems();
        });
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

// Recherche dans le comparateur
function searchComparator(query) {
    console.log('Searching in comparator:', query);
    const comparatorResults = document.getElementById('comparatorResults');
    if (!comparatorResults) {
        console.error('Comparator results not found');
        return;
    }
    comparatorResults.innerHTML = '';
    if (!query || typeof window.products === 'undefined') {
        comparatorResults.innerHTML = `<div class="no-result">${translations[currentLanguage].noResult}</div>`;
        return;
    }
    const product = Object.keys(window.products).find(key => {
        const names = key.split('|');
        const name = currentLanguage === 'en' ? names[0] : names[1];
        return name.toLowerCase() === query.toLowerCase();
    });
    if (!product) {
        comparatorResults.innerHTML = `<div class="no-result">${translations[currentLanguage].noResult}</div>`;
        return;
    }
    displayComparatorResults(product);
}

// Afficher les suggestions pour le comparateur
function displayComparatorSuggestions(query) {
    console.log('Displaying comparator suggestions for query:', query);
    const suggestions = document.getElementById('comparatorSuggestions');
    if (!suggestions) {
        console.error('Comparator suggestions container not found');
        return;
    }
    suggestions.innerHTML = '';
    if (query.length > 0 && typeof window.products !== 'undefined') {
        const filteredProducts = Object.keys(window.products).filter(key => {
            const names = key.split('|');
            const name = currentLanguage === 'en' ? names[0] : names[1];
            return name.toLowerCase().includes(query.toLowerCase());
        });
        console.log('Comparator suggestions filtered products:', filteredProducts);
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
                console.log('Comparator suggestion clicked:', name);
                document.getElementById('comparatorSearch').value = name;
                suggestions.innerHTML = '';
                searchComparator(name);
            });
            suggestions.appendChild(suggestionItem);
        });
        console.log('Comparator suggestions HTML:', suggestions.innerHTML);
    } else {
        console.warn('No products available for comparator suggestions');
    }
}

// Afficher les résultats du comparateur
function displayComparatorResults(productKey) {
    console.log('Displaying comparator results for product:', productKey);
    const comparatorResults = document.getElementById('comparatorResults');
    if (!comparatorResults) {
        console.error('Comparator results not found');
        return;
    }
    comparatorResults.innerHTML = '';
    const product = window.products[productKey];
    if (!product) {
        comparatorResults.innerHTML = `<div class="no-result">${translations[currentLanguage].noResult}</div>`;
        return;
    }
    const compatibleSystems = savedSystems.filter(sys => {
        const buyEconomyMatch = sys.economy.toLowerCase() === product.economy.toLowerCase();
        const sellEconomyMatch = product.sellTo.some(e => e.toLowerCase() === sys.economy.toLowerCase());
        return buyEconomyMatch || sellEconomyMatch;
    });
    if (compatibleSystems.length === 0) {
        comparatorResults.innerHTML = `<div class="no-result">Aucun système compatible.</div>`;
        return;
    }
    compatibleSystems.forEach(sys => {
        const profitPotential = sys.sellPercent - sys.buyPercent;
        const card = document.createElement('div');
        card.className = 'system-card';
        card.innerHTML = `
            <div class="system-name">${sys.name}</div>
            <div>Économie: ${sys.economy}</div>
            <div>Achat: ${sys.buyPercent}% | Vente: ${sys.sellPercent}%</div>
            <div>Profit potentiel: ${profitPotential > 0 ? `+${profitPotential}` : profitPotential}%</div>
            <div>Coordonnées: ${sys.coordinates || '-'}</div>
        `;
        comparatorResults.appendChild(card);
    });
    console.log('Comparator results HTML:', comparatorResults.innerHTML);
}

// Recherche de ressource
function searchResource(query) {
    console.log('Searching resource:', query);
    const resourcesList = document.getElementById('resourcesList');
    if (!resourcesList) {
        console.error('Resources list not found');
        return;
    }
    resourcesList.innerHTML = '';
    const filteredResources = typeof window.resources !== 'undefined' ? Object.keys(window.resources).filter(key => {
        const names = key.split('|');
        const name = currentLanguage === 'en' ? names[0] : names[1];
        return name.toLowerCase().includes(query.toLowerCase());
    }) : [];
    console.log('Filtered resources:', filteredResources);
    if (filteredResources.length === 0) {
        console.log('No resources found for query:', query);
        resourcesList.innerHTML = `<div class="no-result">${translations[currentLanguage].noResult}</div>`;
        return;
    }
    displayResourceResults(filteredResources);
}

// Afficher les suggestions de ressources
function displayResourceSuggestions(query) {
    console.log('Displaying resource suggestions for query:', query);
    const suggestions = document.getElementById('resourceSuggestions');
    if (!suggestions) {
        console.error('Resource suggestions container not found');
        return;
    }
    suggestions.innerHTML = '';
    if (query.length > 0 && typeof window.resources !== 'undefined') {
        const filteredResources = Object.keys(window.resources).filter(key => {
            const names = key.split('|');
            const name = currentLanguage === 'en' ? names[0] : names[1];
            return name.toLowerCase().includes(query.toLowerCase());
        });
        console.log('Resource suggestions filtered:', filteredResources);
        filteredResources.forEach(key => {
            const resource = window.resources[key];
            const name = key.split('|')[currentLanguage === 'en' ? 0 : 1];
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.innerHTML = `
                <span class="economy-dot" style="background-color: ${economyColors[resource.sellTo[0].toLowerCase()]}"></span>
                ${name}
            `;
            suggestionItem.addEventListener('click', () => {
                console.log('Resource suggestion clicked:', name);
                document.getElementById('resourceSearch').value = name;
                suggestions.innerHTML = '';
                searchResource(name);
            });
            suggestions.appendChild(suggestionItem);
        });
        console.log('Resource suggestions HTML:', suggestions.innerHTML);
    } else {
        console.warn('No resources available for suggestions');
    }
}

// Afficher les résultats des ressources
function displayResourceResults(resourceKeys) {
    console.log('Displaying resource results for:', resourceKeys);
    const resourcesList = document.getElementById('resourcesList');
    if (!resourcesList) {
        console.error('Resources list not found');
        return;
    }
    resourcesList.innerHTML = '';
    if (resourceKeys.length === 0) {
        resourcesList.innerHTML = `<div class="no-result">${translations[currentLanguage].noResult}</div>`;
        return;
    }
    resourceKeys.forEach(key => {
        const resource = window.resources[key];
        const name = key.split('|')[currentLanguage === 'en' ? 0 : 1];
        const card = document.createElement('div');
        card.className = 'resource-card';
        card.innerHTML = `
            <div class="system-name">${name}</div>
            <div>Type: ${resource.type}</div>
            <div>Prix moyen: ${resource.avgPrice} unités</div>
            <div>
                Vendre à: ${resource.sellTo.map(e => `
                    <span class="economy-dot sell-economy" style="background-color: ${economyColors[e.toLowerCase()]}"></span>
                    ${e}
                `).join(', ')}
            </div>
        `;
        resourcesList.appendChild(card);
    });
    console.log('Resources HTML:', resourcesList.innerHTML);
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

    // Attacher les écouteurs pour la recherche dans le comparateur
    const comparatorSearch = document.getElementById('comparatorSearch');
    const searchComparatorBtn = document.getElementById('searchComparatorBtn');
    
    if (comparatorSearch) {
        console.log('Attaching input listener to comparatorSearch');
        comparatorSearch.addEventListener('input', () => {
            const query = comparatorSearch.value;
            console.log('Comparator input event triggered with query:', query);
            displayComparatorSuggestions(query);
        });
    } else {
        console.error('comparatorSearch input not found');
    }

    if (searchComparatorBtn) {
        console.log('Attaching click listener to searchComparatorBtn');
        searchComparatorBtn.addEventListener('click', () => {
            const query = comparatorSearch.value;
            console.log('Comparator search button clicked with query:', query);
            searchComparator(query);
        });
    } else {
        console.error('searchComparatorBtn not found');
    }

    // Initialiser les ressources
    if (typeof window.initializeResources === 'function') {
        console.log('Initializing resources module...');
        window.initializeResources();
    } else {
        console.error('initializeResources function not found');
    }

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