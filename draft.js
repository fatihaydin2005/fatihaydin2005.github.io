// ENGELSİZ FIFAINDEX VERİTABANI
const database = {
    "Manager": [
        { name: "Guardiola", ovr: 92, nat: "es", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Pep_Guardiola.jpg/320px-Pep_Guardiola.jpg" },
        { name: "Ancelotti", ovr: 91, nat: "it", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Carlo_Ancelotti_2016.jpg/320px-Carlo_Ancelotti_2016.jpg" },
        { name: "Klopp", ovr: 90, nat: "de", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/J%C3%BCrgen_Klopp%2C_Liverpool_vs._Chelsea%2C_UEFA_Super_Cup_2019-08-14_04.jpg/320px-J%C3%BCrgen_Klopp%2C_Liverpool_vs._Chelsea%2C_UEFA_Super_Cup_2019-08-14_04.jpg" }
    ],
    "ST": [ // Forvetler
        { name: "Haaland", ovr: 91, nat: "no", img: "https://fifastatic.fifaindex.com/FIFA24/players/239085.png" },
        { name: "Mbappé", ovr: 91, nat: "fr", img: "https://fifastatic.fifaindex.com/FIFA24/players/231747.png" },
        { name: "Kane", ovr: 90, nat: "gb-eng", img: "https://fifastatic.fifaindex.com/FIFA24/players/202126.png" },
        { name: "Osimhen", ovr: 88, nat: "ng", img: "https://fifastatic.fifaindex.com/FIFA24/players/232293.png" },
        { name: "Lewandowski", ovr: 89, nat: "pl", img: "https://fifastatic.fifaindex.com/FIFA24/players/188545.png" }
    ],
    "W": [ // Kanatlar 
        { name: "Vini Jr", ovr: 89, nat: "br", img: "https://fifastatic.fifaindex.com/FIFA24/players/238794.png" },
        { name: "Salah", ovr: 89, nat: "eg", img: "https://fifastatic.fifaindex.com/FIFA24/players/209331.png" },
        { name: "Saka", ovr: 87, nat: "gb-eng", img: "https://fifastatic.fifaindex.com/FIFA24/players/246669.png" },
        { name: "Leão", ovr: 86, nat: "pt", img: "https://fifastatic.fifaindex.com/FIFA24/players/241721.png" },
        { name: "Son", ovr: 87, nat: "kr", img: "https://fifastatic.fifaindex.com/FIFA24/players/200104.png" }
    ],
    "CM": [ // Orta Sahalar
        { name: "De Bruyne", ovr: 91, nat: "be", img: "https://fifastatic.fifaindex.com/FIFA24/players/192985.png" },
        { name: "Bellingham", ovr: 88, nat: "gb-eng", img: "https://fifastatic.fifaindex.com/FIFA24/players/252371.png" },
        { name: "Rodri", ovr: 90, nat: "es", img: "https://fifastatic.fifaindex.com/FIFA24/players/231866.png" },
        { name: "Odegaard", ovr: 87, nat: "no", img: "https://fifastatic.fifaindex.com/FIFA24/players/222665.png" },
        { name: "Valverde", ovr: 88, nat: "uy", img: "https://fifastatic.fifaindex.com/FIFA24/players/239053.png" }
    ],
    "CB": [ // Stoperler
        { name: "Dias", ovr: 89, nat: "pt", img: "https://fifastatic.fifaindex.com/FIFA24/players/239818.png" },
        { name: "Van Dijk", ovr: 89, nat: "nl", img: "https://fifastatic.fifaindex.com/FIFA24/players/203376.png" },
        { name: "Saliba", ovr: 84, nat: "fr", img: "https://fifastatic.fifaindex.com/FIFA24/players/243715.png" },
        { name: "Rudiger", ovr: 86, nat: "de", img: "https://fifastatic.fifaindex.com/FIFA24/players/205452.png" },
        { name: "Marquinhos", ovr: 87, nat: "br", img: "https://fifastatic.fifaindex.com/FIFA24/players/214100.png" }
    ],
    "FB": [ // Bekler
        { name: "Hakimi", ovr: 84, nat: "ma", img: "https://fifastatic.fifaindex.com/FIFA24/players/235212.png" },
        { name: "Davies", ovr: 84, nat: "ca", img: "https://fifastatic.fifaindex.com/FIFA24/players/234396.png" },
        { name: "Theo", ovr: 85, nat: "fr", img: "https://fifastatic.fifaindex.com/FIFA24/players/232656.png" },
        { name: "Walker", ovr: 84, nat: "gb-eng", img: "https://fifastatic.fifaindex.com/FIFA24/players/188377.png" },
        { name: "Frimpong", ovr: 85, nat: "nl", img: "https://fifastatic.fifaindex.com/FIFA24/players/253164.png" }
    ],
    "GK": [ // Kaleciler
        { name: "Courtois", ovr: 90, nat: "be", img: "https://fifastatic.fifaindex.com/FIFA24/players/192119.png" },
        { name: "Alisson", ovr: 89, nat: "br", img: "https://fifastatic.fifaindex.com/FIFA24/players/212831.png" },
        { name: "Ederson", ovr: 88, nat: "br", img: "https://fifastatic.fifaindex.com/FIFA24/players/210257.png" },
        { name: "Ter Stegen", ovr: 89, nat: "de", img: "https://fifastatic.fifaindex.com/FIFA24/players/192448.png" },
        { name: "Livakovic", ovr: 83, nat: "hr", img: "https://fifastatic.fifaindex.com/FIFA24/players/233866.png" }
    ]
};

// Diziliş Şemaları
const formations = {
    "4-3-3": [
        { type: "W", label: "LW" }, { type: "ST", label: "ST" }, { type: "W", label: "RW" }, 
        { type: "CM", label: "CM" }, { type: "CM", label: "CDM" }, { type: "CM", label: "CM" }, 
        { type: "FB", label: "LB" }, { type: "CB", label: "CB" }, { type: "CB", label: "CB" }, { type: "FB", label: "RB" }, 
        { type: "GK", label: "GK" } 
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

// startDraft fonksiyonunun başına "async" ekledik çünkü yapay zekayı bekleyecek
async function startDraft() {
    const teamName = document.getElementById("team-name").value || "Adsız FC";
    const formationKey = document.getElementById("formation").value;
    
    // 1. Ekranı hemen oyuna geçir ve "Yükleniyor" animasyonu ver
    document.getElementById("setup-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
    document.getElementById("display-team-name").innerText = teamName + " (Yapay Zeka Logo Çiziyor... 🎨)";
    document.getElementById("team-logo").src = "https://i.gifer.com/ZKZg.gif"; // Geçici yükleniyor ikonu
    
    buildPitch(formationKey); // Sahayı arkada kurmaya başla
    
    // 2. API ANAHTARIN (Riski kabul ettin, buraya yapıştırıyorsun!)
    // HuggingFace.co adresinden ücretsiz üye olup alacağın anahtarı buraya yaz:
    const API_KEY = "BURAYA_API_ANAHTARINI_YAZ"; 
    
    // 3. Yapay Zekaya Verdiğimiz Çizim Komutu (Prompt)
    // Sitenin temasına uyması için koyu arka planlı ve neon yeşil detaylı çizmesini istiyoruz.
    const promptText = `A professional esports football team logo for a team named ${teamName}, vector, minimalist, dark background, neon green and black colors, highly detailed, no text`;

    try {
        // Yapay zeka sunucusuna istek (fetch) atıyoruz
        const response = await fetch(
            "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1",
            {
                headers: { Authorization: `Bearer ${API_KEY}` },
                method: "POST",
                body: JSON.stringify({ inputs: promptText }),
            }
        );

        if (!response.ok) throw new Error("Yapay zeka yanıt vermedi.");

        // Gelen görseli blob (dosya) formatında alıp sitemizde gösteriyoruz
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        
        document.getElementById("team-logo").src = imageUrl;
        document.getElementById("display-team-name").innerText = teamName;
        
    } catch (error) {
        console.error("AI Logo Hatası:", error);
        // Eğer kotan biterse veya API çökerse sistem patlamasın diye yedek baş harf logosu:
        document.getElementById("team-logo").src = `https://ui-avatars.com/api/?name=${teamName}&background=1e1e1e&color=64ffda&size=128`;
        document.getElementById("display-team-name").innerText = teamName;
        alert("Yapay zeka şu an meşgul, geçici yedek logo atandı!");
    }
}

function buildPitch(formationKey) {
    const pitch = document.getElementById("pitch");
    pitch.innerHTML = ""; 
    
    const layout = formations[formationKey];
    
    const rowCounts = formationKey.split("-").map(Number);
    rowCounts.reverse().push(1); 
    
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

function getRandomPlayers(array, num) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function openModal(positionType, spotElement) {
    currentSpot = spotElement;
    document.getElementById("modal-position").innerText = positionType === "Manager" ? "Teknik Direktör" : positionType;
    
    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = "";
    
    const availablePlayers = database[positionType];
    const choices = getRandomPlayers(availablePlayers, 5);
    
    choices.forEach(player => {
        const flagUrl = `https://flagcdn.com/24x18/${player.nat}.png`;
        // onerror etiketi tamamen silindi, direkt fifaindex'ten çekecek
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
            <img src="${player.img}" style="width:100%; height:60%; object-fit:contain; margin-top:5px; border-radius:50%;">
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
