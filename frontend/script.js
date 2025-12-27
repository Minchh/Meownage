const DSL_BASE = 'http://localhost:5000';
const API_BASE = 'http://localhost:3000';

let cats = [];
let adopters = [];

const runBtn = document.getElementById('run-button');
const logsOutput = document.getElementById('logs-output');
const availableGrid = document.getElementById('available-grid');
const adoptedGrid = document.getElementById('adopted-grid');

function parseParams(str) {
    const params = {};
    const pairs = str.split(',').map(p => p.trim());
    pairs.forEach(p => {
        const [key, value] = p.split(':').map(s => s.trim());
        params[key] = value;
    });
    return params;
}

async function processLine(line) {
    if (line.startsWith('ADD CAT')) {
        const match = line.match(/ADD CAT "([^"]+)" \(([^)]+)\)/);
        if (!match) throw new Error('Invalid ADD CAT syntax');
        const name = match[1];
        const params = parseParams(match[2]);
        const dto = {
            name,
            year: parseInt(params.year),
            gender: params.gender.replace(/"/g, ''),
            breed: params.breed.replace(/"/g, ''),
            vaccinated: params.vaccinated === 'true',
            adopted: false,
            image_url: `/image/${name}.png`
        };
        const res = await fetch(`${API_BASE}/cats`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dto)
        });
        if (!res.ok) throw new Error(`Failed to add cat: ${res.statusText}`);
        const cat = await res.json();
        cats.push(cat);
        logsOutput.innerHTML += `<div class="log-entry log-success">🌸 Added "${name}" to shelter.</div>`;
    
    } else if (line.startsWith('ADD ADOPTER')) {
        const match = line.match(/ADD ADOPTER "([^"]+)" \(([^)]+)\)/);
        if (!match) throw new Error('Invalid ADD ADOPTER syntax');
        const name = match[1];
        const params = parseParams(match[2]);
        const dto = {
            name,
            year: parseInt(params.year),
            phone: params.phone.replace(/"/g, ''),
            address: params.address.replace(/"/g, '')
        };
        const res = await fetch(`${API_BASE}/adopters`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dto)
        });
        if (!res.ok) throw new Error(`Failed to add adopter: ${res.statusText}`);
        const adopter = await res.json();
        adopters.push(adopter);
        logsOutput.innerHTML += `<div class="log-entry log-success">🌸 Added adopter "${name}".</div>`;
    
    } else if (line.startsWith('VACCINATE')) {
        const match = line.match(/VACCINATE "([^"]+)"/);
        if (!match) throw new Error('Invalid VACCINATE syntax');
        const name = match[1];
        const cat = cats.find(c => c.name === name);
        if (!cat) throw new Error(`Cat "${name}" not found`);
        const res = await fetch(`${API_BASE}/cats/${name}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ vaccinated: true })
        });
        if (!res.ok) throw new Error(`Failed to vaccinate cat: ${res.statusText}`);
        cat.vaccinated = true;
        logsOutput.innerHTML += `<div class="log-entry log-success">💉 Vaccinated "${name}".</div>`;
    
    } else if (line.startsWith('ADOPT')) {
        const match = line.match(/ADOPT "([^"]+)" BY "([^"]+)"/);
        if (!match) throw new Error('Invalid ADOPT syntax');
        const catName = match[1];
        const adopterName = match[2];
        const cat = cats.find(c => c.name === catName);
        const adopter = adopters.find(a => a.name === adopterName);
        if (!cat) throw new Error(`Cat "${catName}" not found`);
        if (!adopter) throw new Error(`Adopter "${adopterName}" not found`);
        if (cat.adopted) throw new Error(`Cat "${catName}" already adopted`);
        const dto = {
            cat_id: cat._id,
            adopter_id: adopter._id,
            adopted_at: new Date().toISOString()
        };
        const res = await fetch(`${API_BASE}/adoptions`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dto)
        });
        if (!res.ok) throw new Error(`Failed to adopt: ${res.statusText}`);
        cat.adopted = true;
        cat.adopter_id = adopter._id;
        logsOutput.innerHTML += `<div class="log-entry log-success">🏡 "${catName}" adopted by ${adopterName}! Yay!</div>`;
    
    } else if (line.startsWith('UPDATE CAT')) {
        const match = line.match(/UPDATE CAT "([^"]+)" \(([^)]+)\)/);
        if (!match) throw new Error('Invalid UPDATE CAT syntax');
        const name = match[1];
        const params = parseParams(match[2]);
        const update = {};
        if (params.year) update.year = parseInt(params.year);
        const res = await fetch(`${API_BASE}/cats/${name}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(update)
        });
        if (!res.ok) throw new Error(`Failed to update cat: ${res.statusText}`);
        const cat = cats.find(c => c.name === name);
        if (cat) Object.assign(cat, update);
        logsOutput.innerHTML += `<div class="log-entry log-success">✏️ Updated cat "${name}".</div>`;
    
    } else if (line.startsWith('UPDATE ADOPTER')) {
        const match = line.match(/UPDATE ADOPTER "([^"]+)" \(([^)]+)\)/);
        if (!match) throw new Error('Invalid UPDATE ADOPTER syntax');
        const name = match[1];
        const params = parseParams(match[2]);
        const update = {};
        if (params.phone) update.phone = params.phone.replace(/"/g, '');
        const res = await fetch(`${API_BASE}/adopters/${name}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(update)
        });
        if (!res.ok) throw new Error(`Failed to update adopter: ${res.statusText}`);
        const adopter = adopters.find(a => a.name === name);
        if (adopter) Object.assign(adopter, update);
        logsOutput.innerHTML += `<div class="log-entry log-success">✏️ Updated adopter "${name}".</div>`;
    
    } else {
        throw new Error('Unknown command');
    }
}

async function runScript() {
    const script = document.getElementById('shelter-code').value;
    const lines = script.split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('//'));
    logsOutput.innerHTML += '<div class="log-entry" style="font-weight:bold; margin-top:10px;">--- Executing Script ---</div>';
    for (const line of lines) {
        await processLine(line);
    }
    renderDashboard();
    logsOutput.innerHTML += '<div class="log-entry">✨ Dashboard updated.</div>';
    logsOutput.scrollTop = logsOutput.scrollHeight;
}

function renderDashboard() {
    const total = cats.length;
    const available = cats.filter(c => !c.adopted).length;
    const adopted = total - available;
    const statCounts = document.querySelectorAll('.stat-tag .count');
    statCounts[0].textContent = total;
    statCounts[1].textContent = available;
    statCounts[2].textContent = adopted;

    availableGrid.innerHTML = '';
    cats.filter(c => !c.adopted).forEach(cat => {
        const card = document.createElement('div');
        card.className = 'cat-polaroid';
        card.innerHTML = `
            <div class="cat-img-placeholder"><img src="${cat.image_url}"></div>
            <div class="cat-name">${cat.name}</div>
            <div class="cat-details">Age ${new Date().getFullYear() - cat.year}, ${cat.gender}, ${cat.breed}</div>
            ${cat.vaccinated ? '<div class="sticker-badge">💉 Vax</div>' : ''}
        `;
        availableGrid.appendChild(card);
    });

    adoptedGrid.innerHTML = '';
    cats.filter(c => c.adopted).forEach(cat => {
        const adopter = adopters.find(a => a._id === cat.adopter_id);
        const card = document.createElement('div');
        card.className = 'cat-polaroid';
        card.style.backgroundColor = '#F1F8E9';
        card.innerHTML = `
            ${cat.vaccinated ? '<div class="sticker-badge">💉 Vax</div>' : ''}
            <div class="cat-img-placeholder"><img src="${cat.image_url}"></div>
            <div class="cat-name">${cat.name}</div>
            <div class="cat-details">Age ${new Date().getFullYear() - cat.year}, ${cat.gender}, ${cat.breed}</div>
            <div class="cat-details" style="color: var(--pastel-pink-dark); font-weight:bold; margin-top:5px;">Adopter: ${adopter ? adopter.name : 'Unknown'}</div>
        `;
        adoptedGrid.appendChild(card);
    });
}

runBtn.addEventListener('click', async () => {
    const script = document.getElementById('shelter-code').value;
    console.log('Running script:\n', script);
    runBtn.innerHTML = '<span>🍥</span> Running...';
    runBtn.style.transform = 'scale(0.95)';
    try {
        const checkRes = await fetch(`${DSL_BASE}/check`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ script })
        });
        if (!checkRes.ok) throw new Error('Failed to check script (is DSL server running?)');
        const checkResult = await checkRes.json();
        if (!checkResult.accepted) {
            alert(`Script rejected:\n${checkResult.errors.join('\n')}\nPlease correct and try again.`);
            runBtn.innerHTML = '<span>🐾</span> Run Script';
            runBtn.style.transform = 'scale(1)';
            return;
        }
        await runScript();
    } catch (e) {
        logsOutput.innerHTML += `<div class="log-entry log-error">${e.message}</div>`;
    }
    runBtn.innerHTML = '<span>🐾</span> Run My Script!';
    runBtn.style.transform = 'scale(1)';
    document.querySelector('.right-panel').style.transform = "scale(1.01)";
    setTimeout(() => {
        document.querySelector('.right-panel').style.transform = "scale(1)";
    }, 200);
});