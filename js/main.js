const singers = [
    {
        "stageName": "Demi Lovato",
        "favoriteSong": "Fast",
        "genre": "Pop",
        "zodiacSign": "Leo"
    },
    {
        "stageName": "Bad Bunny",
        "favoriteSong": "Cafe con Ron",
        "genre": "Reggaeton",
        "zodiacSign": "Pisces"
    },
    {
        "stageName": "Amy Lee",
        "favoriteSong": "My Immortal",
        "genre": "Alternative",
        "zodiacSign": "Sagittarius"
    },
    {
        "stageName": "Hilary Duff",
        "favoriteSong": "Someone's Watching Over Me",
        "genre": "Pop",
        "zodiacSign": "Libra"
    },
]

const table = document.querySelector("#favoriteSingersTable");

singers.forEach(singer => {
    let tableRow = document.createElement("tr");
    
    tableRow.innerHTML = `
        <td>${singer.stageName}</td>
        <td>${singer.favoriteSong}</td>
        <td>${singer.genre}</td>
        <td>${singer.zodiacSign}</td>
    `;

    table.appendChild(tableRow);
});