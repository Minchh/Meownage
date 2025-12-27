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
        if (!match) throw new Error('Invalid ADD CAT');
        const name = match[1];
        // Check if cat exists
        const checkRes = await fetch(`${API_BASE}/cats/by-name?name=${encodeURIComponent(name)}`);
        if (checkRes.ok) {
            try {
                const existing = await checkRes.json();
                if (existing) {
                    console.log(`Cat "${name}" already exists, skipping.`);
                    return; // Skip adding
                }
            } catch (e) {
                console.error('Failed to parse check response:', e);
            }
        }
        const params = parseParams(match[2]);
        const dto = {
            name,
            year: +params.year,
            gender: params.gender.replace(/"/g, ''),
            breed: params.breed.replace(/"/g, ''),
            vaccinated: params.vaccinated === 'true',
            adopted: false,
            image_url: `/image/${name}.png`
        };
        const res = await fetch(`${API_BASE}/cats`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(dto) });
        if (!res.ok) throw new Error('Add cat failed');
        try {
            const cat = await res.json();
            cats.push(cat);
        } catch (e) {
            console.error('Failed to parse add cat response:', e);
        }
    } else if (line.startsWith('ADD ADOPTER')) {
        const match = line.match(/ADD ADOPTER "([^"]+)" \(([^)]+)\)/);
        if (!match) throw new Error('Invalid ADD ADOPTER');
        const name = match[1];
        const checkRes = await fetch(`${API_BASE}/adopters/by-name?name=${encodeURIComponent(name)}`);
        if (checkRes.ok) {
            try {
                const existing = await checkRes.json();
                if (existing) {
                    console.log(`Adopter "${name}" already exists, skipping.`);
                    return; // Skip adding
                }
            } catch (e) {
                console.error('Failed to parse check response:', e);
                // Assume not exists, proceed
            }
        }
        const params = parseParams(match[2]);
        const dto = { name, year: +params.year, phone: params.phone.replace(/"/g, ''), address: params.address.replace(/"/g, '') };
        const res = await fetch(`${API_BASE}/adopters`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(dto) });
        if (!res.ok) throw new Error('Add adopter failed');
        try {
            const adopter = await res.json();
            adopters.push(adopter);
        } catch (e) {
            console.error('Failed to parse add adopter response:', e);
            // Assume success
        }
    } else if (line.startsWith('VACCINATE')) {
        const name = line.match(/VACCINATE "([^"]+)"/)[1];
        const cat = cats.find(c => c.name === name);
        if (!cat) throw new Error('Cat not found');
        const res = await fetch(`${API_BASE}/cats/${name}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ vaccinated: true }) });
        if (!res.ok) throw new Error('Vaccinate failed');
        cat.vaccinated = true;
    } else if (line.startsWith('ADOPT')) {
        const match = line.match(/ADOPT "([^"]+)" BY "([^"]+)"/);
        const catName = match[1], adopterName = match[2];
        const cat = cats.find(c => c.name === catName);
        const adopter = adopters.find(a => a.name === adopterName);
        if (!cat || !adopter || cat.adopted) throw new Error('Adopt failed');
        const dto = { cat_id: cat._id, adopter_id: adopter._id, adopted_at: new Date().toISOString() };
        const res = await fetch(`${API_BASE}/adoptions`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(dto) });
        if (!res.ok) throw new Error('Adopt failed');
        cat.adopted = true;
        cat.adopter_id = adopter._id;
    } else if (line.startsWith('UPDATE CAT')) {
        const match = line.match(/UPDATE CAT "([^"]+)" \(([^)]+)\)/);
        const name = match[1];
        const params = parseParams(match[2]);
        const update = params.year ? { year: +params.year } : {};
        const res = await fetch(`${API_BASE}/cats/${name}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(update) });
        if (!res.ok) throw new Error('Update cat failed');
        const cat = cats.find(c => c.name === name);
        if (cat) Object.assign(cat, update);
    } else if (line.startsWith('UPDATE ADOPTER')) {
        const match = line.match(/UPDATE ADOPTER "([^"]+)" \(([^)]+)\)/);
        const name = match[1];
        const params = parseParams(match[2]);
        const update = params.phone ? { phone: params.phone.replace(/"/g, '') } : {};
        const res = await fetch(`${API_BASE}/adopters/${name}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(update) });
        if (!res.ok) throw new Error('Update adopter failed');
        const adopter = adopters.find(a => a.name === name);
        if (adopter) Object.assign(adopter, update);
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
const knownCatNames = ['Luna', 'Tina'];
const knownAdopterNames = ['Minch']; 

async function loadExistingData() {
    for (const name of knownCatNames) {
        const res = await fetch(`${API_BASE}/cats/by-name?name=${encodeURIComponent(name)}`);
        if (res.ok) {
            try {
                const cat = await res.json();
                if (cat && !cats.find(c => c.name === name)) cats.push(cat);
            } catch (e) {
                console.error('Failed to parse cat:', e);
            }
        }
    }
    for (const name of knownAdopterNames) {
        const res = await fetch(`${API_BASE}/adopters/by-name?name=${encodeURIComponent(name)}`);
        if (res.ok) {
            try {
                const adopter = await res.json();
                if (adopter && !adopters.find(a => a.name === name)) adopters.push(adopter);
            } catch (e) {
                console.error('Failed to parse adopter:', e);
            }
        }
    }
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
        const catGender = cat.gender == "male" ? "Male" : "Female";
        card.innerHTML = `
            <div class="cat-img-placeholder"><img src="${cat.image_url}"></div>
            <div class="cat-name">${cat.name}</div>
            <div class="cat-details">Age ${new Date().getFullYear() - cat.year}, ${catGender}, ${cat.breed}</div>
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
        const catGender = cat.gender == "male" ? "Male" : "Female";
        card.innerHTML = `
            ${cat.vaccinated ? '<div class="sticker-badge">💉 Vax</div>' : ''}
            <div class="cat-img-placeholder"><img src="${cat.image_url}"></div>
            <div class="cat-name">${cat.name}</div>
            <div class="cat-details">Age ${new Date().getFullYear() - cat.year}, ${catGender}, ${cat.breed}</div>
            <div class="cat-details" style="color: var(--pastel-pink-dark); font-weight:bold; margin-top:5px;">Adopter: ${adopter ? adopter.name : 'Unknown'}</div>
        `;
        adoptedGrid.appendChild(card);
    });
}

runBtn.addEventListener('click', async () => {
    const script = document.getElementById('shelter-code').value;
    runBtn.innerHTML = '<span>🍥</span> Running...';
    runBtn.style.transform = 'scale(0.95)';
    try {
        const checkRes = await fetch(`${DSL_BASE}/check`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ script }) });
        if (!checkRes.ok) throw new Error('Check failed');
        try {
            const { accepted, errors } = await checkRes.json();
            if (!accepted) {
                // Replace alert with logs
                logsOutput.innerHTML += '<div class="log-entry" style="font-weight:bold; margin-top:10px;">--- Script Rejected ---</div>';
                errors.forEach(err => {
                    logsOutput.innerHTML += `<div class="log-entry log-error">${err}</div>`;
                });
                logsOutput.scrollTop = logsOutput.scrollHeight;
                runBtn.innerHTML = '<span>🐾</span> Run My Script!';
                runBtn.style.transform = 'scale(1)';
                return;
            }
        } catch (e) {
            console.error('Failed to parse check response:', e);
            throw new Error('Check response invalid');
        }
        await runScript(script);
    } catch (e) {
        logsOutput.innerHTML += `<div class="log-entry log-error">${e.message}</div>`;
        logsOutput.scrollTop = logsOutput.scrollHeight;
    }
    runBtn.innerHTML = '<span>🐾</span> Run My Script!';
    runBtn.style.transform = 'scale(1)';
    document.querySelector('.right-panel').style.transform = "scale(1.01)";
    setTimeout(() => document.querySelector('.right-panel').style.transform = "scale(1)", 200);
});

(async () => {
    await loadExistingData();
    renderDashboard();
})();