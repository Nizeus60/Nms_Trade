console.log('resources.js loaded');
window.resources = {
    "Graviton Orb|Orbe de gravitino": { type: "Ressource rare", avgPrice: 12000, sellTo: ["Scientific"] },
    "Pure Ferrite|Ferrite pure": { type: "Minéral", avgPrice: 28, sellTo: ["Manufacturing"] },
    "Ammonia|Ammoniac": { type: "Minéral", avgPrice: 62, sellTo: ["Mining"] },
    "Dioxite|Dioxite": { type: "Minéral", avgPrice: 62, sellTo: ["Power Generation"] },
    "Sodium Nitrate|Nitrate de sodium": { type: "Minéral", avgPrice: 89, sellTo: ["Power Generation"] },
    "Ionised Cobalt|Cobalt ionisé": { type: "Minéral", avgPrice: 401, sellTo: ["Technology"] },
    "Activated Copper|Cuivre activé": { type: "Minéral", avgPrice: 245, sellTo: ["Manufacturing"] },
    "Phosphorus|Phosphore": { type: "Minéral", avgPrice: 33, sellTo: ["Manufacturing"] },
    "Paraffinium|Paraffinium": { type: "Minéral", avgPrice: 28, sellTo: ["Manufacturing"] },
    "Pyrite|Pyrite": { type: "Minéral", avgPrice: 62, sellTo: ["Manufacturing"] },
    "Uranium|Uranium": { type: "Minéral", avgPrice: 85, sellTo: ["Power Generation"] },
    "Emeril|Emeril": { type: "Minéral", avgPrice: 245, sellTo: ["Technology"] },
    "Gold|Or": { type: "Minéral", avgPrice: 288, sellTo: ["Technology"] },
    "Silver|Argent": { type: "Minéral", avgPrice: 115, sellTo: ["Manufacturing"] },
    "Copper|Cuivre": { type: "Minéral", avgPrice: 77, sellTo: ["Manufacturing"] },
    "Cadmium|Cadmium": { type: "Minéral", avgPrice: 943, sellTo: ["Technology"] },
    "Indium|Indium": { type: "Minéral", avgPrice: 1927, sellTo: ["Technology"] },
    "Oxygen|Oxygène": { type: "Gaz", avgPrice: 33, sellTo: ["Manufacturing"] },
    "Nitrogen|Azote": { type: "Gaz", avgPrice: 19, sellTo: ["Power Generation"] },
    "Sulphurine|Sulfurine": { type: "Gaz", avgPrice: 14, sellTo: ["Power Generation"] },
    "Radon|Radon": { type: "Gaz", avgPrice: 160, sellTo: ["Technology"] },
    "Liquid Explosive|Explosif liquide": { type: "Produit chimique", avgPrice: 678, sellTo: ["Mining"] },
    "Cryogenic Pump|Pompe cryogénique": { type: "Produit chimique", avgPrice: 389, sellTo: ["Power Generation"] }
};

// Afficher les ressources
function displayResources(query = '') {
    console.log('Displaying resources for query:', query);
    const resourcesList = document.getElementById('resourcesList');
    if (!resourcesList) {
        console.error('Resources list not found');
        return;
    }
    resourcesList.innerHTML = '';
    const filteredResources = Object.keys(window.resources).filter(key => {
        const names = key.split('|');
        const name = currentLanguage === 'en' ? names[0] : names[1];
        return name.toLowerCase().includes(query.toLowerCase());
    });
    console.log('Filtered resources:', filteredResources);
    if (filteredResources.length === 0) {
        resourcesList.innerHTML = `<div class="no-result">${translations[currentLanguage].noResult}</div>`;
        return;
    }
    const table = document.createElement('table');
    table.innerHTML = `<thead><tr><th>Nom</th><th>Type</th><th>Prix moyen</th><th>Vendre à</th></tr></thead><tbody></tbody>`;
    filteredResources.forEach(key => {
        const res = window.resources[key];
        const name = key.split('|')[currentLanguage === 'en' ? 0 : 1];
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${res.type}</td>
            <td>${res.avgPrice} unités</td>
            <td>${res.sellTo.map(e => `
                <span class="economy-dot sell-economy" style="background-color: ${economyColors[e.toLowerCase()]}"></span>
                ${e}
            `).join(', ')}</td>
        `;
        table.querySelector('tbody').appendChild(row);
    });
    resourcesList.appendChild(table);
    console.log('Resources table HTML:', resourcesList.innerHTML);
}

// Recherche de ressource
function searchResource(query) {
    console.log('Searching resource:', query);
    displayResources(query);
}

// Initialisation spécifique aux ressources
function initializeResources() {
    console.log('Initializing resources module...');
    const resourceSearch = document.getElementById('resourceSearch');
    const searchResourceBtn = document.getElementById('searchResourceBtn');
    
    if (resourceSearch) {
        console.log('Attaching input listener to resourceSearch');
        resourceSearch.addEventListener('input', () => {
            const query = resourceSearch.value;
            console.log('Resource input event triggered with query:', query);
            searchResource(query);
        });
    } else {
        console.error('resourceSearch input not found');
    }

    if (searchResourceBtn) {
        console.log('Attaching click listener to searchResourceBtn');
        searchResourceBtn.addEventListener('click', () => {
            const query = resourceSearch.value;
            console.log('Resource search button clicked with query:', query);
            searchResource(query);
        });
    } else {
        console.error('searchResourceBtn not found');
    }
}

// Appeler l'initialisation uniquement une fois
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeResources);
} else {
    initializeResources();
}