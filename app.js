const tradeItems = [
    { name: "Decrypted User Data", buyEconomy: "Scientific", sellEconomy: "Trading", tier: 5 },
    { name: "Star Silk", buyEconomy: "Scientific", sellEconomy: "Trading", tier: 4 },
    { name: "Comet Droplets", buyEconomy: "Scientific", sellEconomy: "Trading", tier: 3 },
    { name: "Ion Sphere", buyEconomy: "Scientific", sellEconomy: "Trading", tier: 2 },
    { name: "Superconducting Fibre", buyEconomy: "Scientific", sellEconomy: "Trading", tier: 1 },
    { name: "Neural Duct", buyEconomy: "Trading", sellEconomy: "Scientific", tier: 5 },
    { name: "Self-Repairing Heridium", buyEconomy: "Trading", sellEconomy: "Scientific", tier: 4 },
    { name: "Optical Solvent", buyEconomy: "Trading", sellEconomy: "Scientific", tier: 3 },
    { name: "Five Dimensional Torus", buyEconomy: "Trading", sellEconomy: "Scientific", tier: 2 },
    { name: "Superluminal Drive", buyEconomy: "Trading", sellEconomy: "Scientific", tier: 1 },
    { name: "De-Scented Pheromone Bottle", buyEconomy: "Advanced Materials", sellEconomy: "Trading", tier: 5 },
    { name: "Neural Transmitter", buyEconomy: "Advanced Materials", sellEconomy: "Trading", tier: 4 },
    { name: "Organic Piping", buyEconomy: "Advanced Materials", sellEconomy: "Trading", tier: 3 },
    { name: "Instability Injector", buyEconomy: "Advanced Materials", sellEconomy: "Trading", tier: 2 },
    { name: "Teleport Coordinators", buyEconomy: "Advanced Materials", sellEconomy: "Trading", tier: 1 },
    { name: "Ion Battery", buyEconomy: "Power Generation", sellEconomy: "Mining", tier: 5 },
    { name: "Dirt", buyEconomy: "Power Generation", sellEconomy: "Mining", tier: 4 },
    { name: "Unrefined Pyrite Grease", buyEconomy: "Power Generation", sellEconomy: "Mining", tier: 3 },
    { name: "Bromide Salt", buyEconomy: "Power Generation", sellEconomy: "Mining", tier: 2 },
    { name: "Polychromatic Zirconium", buyEconomy: "Power Generation", sellEconomy: "Mining", tier: 1 },
    { name: "Nanotube Crate", buyEconomy: "Mining", sellEconomy: "Technology", tier: 5 },
    { name: "Self-Repairing Component", buyEconomy: "Mining", sellEconomy: "Technology", tier: 4 },
    { name: "Fusion Device", buyEconomy: "Mining", sellEconomy: "Technology", tier: 3 },
    { name: "Holographic Crankshaft", buyEconomy: "Mining", sellEconomy: "Technology", tier: 2 },
    { name: "High-Pressure Gel", buyEconomy: "Mining", sellEconomy: "Technology", tier: 1 },
    { name: "Welding Soap", buyEconomy: "Manufacturing", sellEconomy: "Technology", tier: 5 },
    { name: "Enormous Metal Cog", buyEconomy: "Manufacturing", sellEconomy: "Technology", tier: 4 },
    { name: "Non-Stick Piston", buyEconomy: "Manufacturing", sellEconomy: "Technology", tier: 3 },
    { name: "Quantum Accelerator", buyEconomy: "Manufacturing", sellEconomy: "Technology", tier: 2 },
    { name: "Spark Canister", buyEconomy: "Manufacturing", sellEconomy: "Technology", tier: 1 },
    { name: "Experimental Power Fluid", buyEconomy: "Technology", sellEconomy: "Power Generation", tier: 5 },
    { name: "Industrial-Grade Battery", buyEconomy: "Technology", sellEconomy: "Power Generation", tier: 4 },
    { name: "Ohmic Gel", buyEconomy: "Technology", sellEconomy: "Power Generation", tier: 3 },
    { name: "Experimental Force Shield", buyEconomy: "Technology", sellEconomy: "Power Generation", tier: 2 },
    { name: "Fusion Core", buyEconomy: "Technology", sellEconomy: "Power Generation", tier: 1 }
];

const economyColors = {
    "Trading": "#00FF00",
    "Advanced Materials": "#FF0000",
    "Scientific": "#800080",
    "Mining": "#FFA500",
    "Manufacturing": "#0000FF",
    "Technology": "#00FFFF",
    "Power Generation": "#FFFF00"
};

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    const searchInput = document.getElementById('searchInput');
    const suggestions = document.getElementById('suggestions');
    const results = document.getElementById('results');

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        suggestions.innerHTML = '';
        results.innerHTML = '';

        if (query.length > 0) {
            const filteredItems = tradeItems.filter(item => item.name.toLowerCase().includes(query));
            filteredItems.forEach(item => {
                const suggestionItem = document.createElement('div');
                suggestionItem.className = 'suggestion-item';
                suggestionItem.textContent = item.name;
                suggestionItem.addEventListener('click', () => {
                    searchInput.value = item.name;
                    suggestions.innerHTML = '';
                    displayResults([item]);
                });
                suggestions.appendChild(suggestionItem);
            });

            if (filteredItems.length > 0) {
                displayResults(filteredItems);
            } else {
                results.innerHTML = '<p>No items found.</p>';
            }
        }
    });
}

function displayResults(items) {
    const results = document.getElementById('results');
    results.innerHTML = '';

    items.forEach(item => {
        const resultCard = document.createElement('div');
        resultCard.className = 'result-card';
        resultCard.innerHTML = `
            <h3>${item.name}</h3>
            <p><span class="economy buy-economy" style="background-color: ${economyColors[item.buyEconomy]}">${item.buyEconomy}</span> ➔ <span class="economy sell-economy" style="background-color: ${economyColors[item.sellEconomy]}">${item.sellEconomy}</span></p>
            <p>Tier: ${item.tier}</p>
        `;
        results.appendChild(resultCard);
    });
}