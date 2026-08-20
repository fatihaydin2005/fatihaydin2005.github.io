// SAHTE FC26 & TRANSFERMARKT VERİTABANI
const database = {
    "Manager": [
        { name: "Guardiola", ovr: 92, nat: "es", img: "https://cdn.sofifa.net/players/243/708/23_120.png" },
        { name: "Ancelotti", ovr: 91, nat: "it", img: "https://cdn.sofifa.net/players/243/715/23_120.png" },
        { name: "Klopp", ovr: 90, nat: "de", img: "https://cdn.sofifa.net/players/243/709/23_120.png" },
        { name: "Mourinho", ovr: 88, nat: "pt", img: "https://cdn.sofifa.net/players/243/710/23_120.png" },
        { name: "Arteta", ovr: 87, nat: "es", img: "https://cdn.sofifa.net/players/243/711/23_120.png" },
        { name: "Xabi Alonso", ovr: 89, nat: "es", img: "https://cdn.sofifa.net/players/243/712/23_120.png" }
    ],
    "ST": [ // Forvetler
        { name: "Haaland", ovr: 91, nat: "no", img: "https://cdn.sofifa.net/players/239/085/24_120.png" },
        { name: "Mbappé", ovr: 91, nat: "fr", img: "https://cdn.sofifa.net/players/231/747/24_120.png" },
        { name: "Kane", ovr: 90, nat: "gb-eng", img: "https://cdn.sofifa.net/players/202/126/24_120.png" },
        { name: "Osimhen", ovr: 88, nat: "ng", img: "https://cdn.sofifa.net/players/232/293/24_120.png" },
        { name: "Lewandowski", ovr: 89, nat: "pl", img: "https://cdn.sofifa.net/players/188/545/24_120.png" },
        { name: "Icardi", ovr: 86, nat: "ar", img: "https://cdn.sofifa.net/players/201/399/24_120.png" }
    ],
    "W": [ // Kanatlar (Sağ/Sol)
        { name: "Vini Jr", ovr: 89, nat: "br", img: "https://cdn.sofifa.net/players/238/794/24_120.png" },
        { name: "Salah", ovr: 89, nat: "eg", img: "https://cdn.sofifa.net/players/209/331/24_120.png" },
        { name: "Saka", ovr: 87, nat: "gb-eng", img: "https://cdn.sofifa.net/players/246/669/24_120.png" },
        { name: "Leão", ovr: 86, nat: "pt", img: "https://cdn.sofifa.net/players/241/721/24_120.png" },
        { name: "Son", ovr: 87, nat: "kr", img: "https://cdn.sofifa.net/players/200/104/24_120.png" },
        { name: "Rodrygo", ovr: 86, nat: "br", img: "https://cdn.sofifa.net/players/243/812/24_120.png" }
    ],
    "CM": [ // Orta Sahalar
        { name: "De Bruyne", ovr: 91, nat: "be", img: "https://cdn.sofifa.net/players/192/985/24_120.png" },
        { name: "Bellingham", ovr: 88, nat: "gb-eng", img: "https://cdn.sofifa.net/players/252/371/24_120.png" },
        { name: "Rodri", ovr: 90, nat: "es", img: "https://cdn.sofifa.net/players/231/866/24_120.png" },
        { name: "Odegaard", ovr: 87, nat: "no", img: "https://cdn.sofifa.net/players/222/665/24_120.png" },
        { name: "Valverde", ovr: 88, nat: "uy", img: "https://cdn.sofifa.net/players/239/053/24_120.png" },
        { name: "Pedri", ovr: 86, nat: "es", img: "https://cdn.sofifa.net/players/251/854/24_120.png" },
        { name: "Fred", ovr: 82, nat: "br", img: "https://cdn.sofifa.net/players/209/297/24_120.png" }
    ],
    "CB": [ // Stoperler
        { name: "Dias", ovr: 89, nat: "pt", img: "https://cdn.sofifa.net/players/239/818/24_120.png" },
        { name: "Van Dijk", ovr: 89, nat: "nl", img: "https://cdn.sofifa.net/players/203/376/24_120.png" },
        { name: "Saliba", ovr: 84, nat: "fr", img: "https://cdn.sofifa.net/players/243/715/24_120.png" },
        { name: "Rudiger", ovr: 86, nat: "de", img: "https://cdn.sofifa.net/players/205/452/24_120.png" },
        { name: "Marquinhos", ovr: 87, nat: "br", img: "https://cdn.sofifa.net/players/214/100/24_120.png" },
        { name: "Djiku", ovr: 80, nat: "gh", img: "https://cdn.sofifa.net/players/225/100/24_120.png" }
    ],
    "FB": [ // Bekler (Sağ/Sol)
        { name: "Hakimi", ovr: 84, nat: "ma", img: "https://cdn.sofifa.net/players/235/212/24_120.png" },
        { name: "Davies", ovr: 84, nat: "ca", img: "https://cdn.sofifa.net/players/234/396/24_120.png" },
        { name: "Theo", ovr: 85, nat: "fr", img: "https://cdn.sofifa.net/players/232/656/24_120.png" },
        { name: "Walker", ovr: 84, nat: "gb-eng", img: "https://cdn.sofifa.net/players/188/377/24_120.png" },
        { name: "Frimpong", ovr: 85, nat: "nl", img: "https://cdn.sofifa.net/players/253/164/24_120.png" },
        { name: "Grimaldo", ovr: 86, nat: "es", img: "https://cdn.sofifa.net/players/211/147/24_120.png" }
    ],
    "GK": [ // Kaleciler
        { name: "Courtois", ovr: 90, nat: "be", img: "https://cdn.sofifa.net/players/192/119/24_120.png" },
        { name: "Alisson", ovr: 89, nat: "br", img: "https://cdn.sofifa.net/players/212/831/24_120.png" },
        { name: "Ederson", ovr: 88, nat: "br", img: "https://cdn.sofifa.net/players/210/257/24_120.png" },
        { name: "Ter Stegen", ovr: 89, nat: "de", img: "https://cdn.sofifa.net/players/192/448/24_120.png" },
        { name: "Livakovic", ovr: 83, nat: "hr", img: "https://cdn.sofifa.net/players/233/866/24_120.png" },
        { name: "Muslera", ovr: 81, nat: "uy", img: "https://cdn.sofifa.net/players/180/731/24_120.png" }
    ]
};

// Diziliş Şemaları
const formations = {
    "4-3-3": [
        { type: "W", label: "LW" }, { type: "ST", label: "ST" }, { type: "W", label: "RW" }, // Forvet
        { type: "CM", label: "CM" }, { type: "CM", label: "CDM" }, { type: "CM", label: "CM" }, // Orta Saha
        { type: "FB", label: "LB" }, { type: "CB", label: "CB" }, { type: "CB", label: "CB" }, { type: "FB", label: "RB" }, // Defans
        { type: "GK", label: "GK" } // Kaleci
    ],
    "4-4-2": [
        { type: "ST", label: "ST" }, { type: "ST", label: "ST" },
        { type: "W", label: "LM" }, { type: "CM", label: "CM" }, { type: "CM", label: "CM" }, { type: "W", label: "RM" },
        { type: "FB", label: "LB" }, { type: "CB", label: "CB" }, { type: "CB", label: "CB" }, { type: "FB", label: "RB" },
        { type: "GK", label: "GK" }
    ],
    "3-5-2": [
        { type: "ST", label: "ST" }, { type: "ST", label: "ST" },
        { type: "W", label: "LM" }, { type: "CM", label: "CM" }, { type: "CM", label: "CAM" }, { type: "CM", label: "CM" }, { type: "W", label: "RM" },
        { type: "CB", label: "CB" }, { type: "CB", label: "CB" }, { type: "CB", label: "CB" },
        { type: "GK", label: "GK" }
    ]
};

let currentSpot = null;

function startDraft() {
    const teamName = document.getElementById("team-name").value || "Adsız FC";
    const formationKey = document.getElementById("formation").value;
    
    // AI Logo Üretimi (Girilen isme göre eşsiz bir logo veren DiceBear API)
    const logoUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(teamName)}&backgroundColor=1e1e1e&textColor=64ffda`;
    
    document.getElementById("display-team-name").innerText = teamName;
    document.getElementById("team-logo").src = logoUrl;
    
    document.getElementById("setup-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
    
    buildPitch(formationKey);
}

function buildPitch(formationKey) {
    const pitch = document.getElementById("pitch");
    pitch.innerHTML = ""; // Temizle
    
    const layout = formations[formationKey];
    
    // Satır satır oyuncuları oluştur (Hücumdan defansa)
    const rowCounts = formationKey.split("-").map(Number); // Örn: [4,3,3]
    rowCounts.reverse().push(1); // Kaleciyi ekle: [3,3,4,1] veya [2,4,4,1]
    
    let playerIndex = 0;
    
    rowCounts.forEach(count => {
        const rowDiv = document.createElement("div");
        rowDiv.className = "row";
        
        for(let i=0; i<count; i++) {
            const playerConfig = layout[playerIndex];
            rowDiv.innerHTML += `
                <div class="card-spot" onclick="openModal('${playerConfig.type}', this)">
                    <div class="plus">+</div>
                    <div class="pos-label">${playerConfig.label}</div>
                </div>
            `;
            playerIndex++;
        }
        pitch.appendChild(rowDiv);
    });
}

// Rastgele 5 oyuncu çekme fonksiyonu
function getRandomPlayers(array, num) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function openModal(positionType, spotElement) {
    currentSpot = spotElement;
    document.getElementById("modal-position").innerText = positionType === "Manager" ? "Teknik Direktör" : positionType;
    
    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = "";
    
    // Eğer o pozisyon için veritabanında yeterli oyuncu yoksa olanı getir, varsa 5 tane rastgele seç
    const availablePlayers = database[positionType];
    const choices = getRandomPlayers(availablePlayers, 5);
    
    choices.forEach(player => {
        const flagUrl = `https://flagcdn.com/24x18/${player.nat}.png`;
        const cardHtml = `
            <div class="choice-card" onclick='selectPlayer(${JSON.stringify(player)}, "${positionType}")'>
                <span class="ovr">${player.ovr}</span>
                <img class="flag" src="${flagUrl}" alt="flag">
                <img src="${player.img}" alt="${player.name}">
                <div class="name">${player.name}</div>
            </div>
        `;
        choicesContainer.innerHTML += cardHtml;
    });
    
    document.getElementById("playerModal").style.display = "block";
}

function closeModal() {
    document.getElementById("playerModal").style.display = "none";
}

function selectPlayer(player, positionType) {
    const flagUrl = `https://flagcdn.com/24x18/${player.nat}.png`;
    
    if(positionType === "Manager") {
        currentSpot.innerHTML = `
            <img src="${player.img}" style="width:100%; height:60%; object-fit:contain; margin-top:5px;">
            <div style="font-size:0.8rem; margin-top:5px; text-align:center;">${player.name}</div>
        `;
        currentSpot.style.border = "2px solid #64ffda";
    } else {
        currentSpot.classList.add("filled");
        currentSpot.innerHTML = `
            <span class="card-ovr">${player.ovr}</span>
            <img class="card-flag" src="${flagUrl}">
            <img class="card-img" src="${player.img}">
            <div class="card-name">${player.name}</div>
        `;
    }
    
    closeModal();
}
