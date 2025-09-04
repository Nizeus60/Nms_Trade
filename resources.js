// Ressources (basées sur No Man's Sky)
const resources = {
    "Graviton Orb|Orbe de gravitino": { type: "Ressource rare", avgPrice: 12000, sellTo: ["Scientific"] },
    "Pure Ferrite|Ferrite pure": { type: "Minéral", avgPrice: 28, sellTo: ["Manufacturing"] },
    "Ammonia|Ammoniac": { type: "Minéral", avgPrice: 62, sellTo: ["Mining"] },
    "Dioxite|Dioxite": { type: "Minéral", avgPrice: 62, sellTo: ["Power Generation"] },
    "Sodium Nitrate|Nitrate de sodium": { type: "Minéral", avgPrice: 89, sellTo: ["Power Generation"] },
    "Ionised Cobalt|Cobalt ionisé": { type: "Minéral", avgPrice: 401, sellTo: ["Technology"] },
    "Activated Copper|Cuivre activé": { type: "Minéral", avgPrice: 245, sellTo: ["Manufacturing"] }
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
    const filteredResources = Object.keys(resources).filter(key => {
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
        const res = resources[key];
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