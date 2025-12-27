const runBtn = document.getElementById('run-button');
const logsOutput = document.getElementById('logs-output');
const availableGrid = document.getElementById('available-grid');
const adoptedGrid = document.getElementById('adopted-grid');

runBtn.addEventListener('click', () => {
    runBtn.innerHTML = '<span>🍥</span> Running...';
    runBtn.style.transform = 'scale(0.95)';

    setTimeout(() => {
        logsOutput.innerHTML += `
            <div class="log-entry" style="font-weight:bold; margin-top:10px;">--- Executing Script ---</div>
            <div class="log-entry log-success">🌸 Added "Mochi" to shelter.</div>
            <div class="log-entry log-success">🌸 Added "Pudding" to shelter.</div>
            <div class="log-entry log-success">💉 Vaccinated "Mochi".</div>
            <div class="log-entry log-success">🏡 "Pudding" adopted by Bạn Nhi! Yay!</div>
            <div class="log-entry">✨ Dashboard updated.</div>
        `;
        logsOutput.scrollTop = logsOutput.scrollHeight;

        const mochiCard = availableGrid.querySelector('.cat-polaroid');
        if (!mochiCard.querySelector('.sticker-badge')) {
             mochiCard.innerHTML += '<div class="sticker-badge">💉 Vax</div>';
        }

        document.querySelector('.right-panel').style.transform = "scale(1.01)";
        setTimeout(() => {
             document.querySelector('.right-panel').style.transform = "scale(1)";
        }, 200);

        runBtn.innerHTML = '<span>🐾</span> Run My Script!';
        runBtn.style.transform = 'scale(1)';

        alert("Demo: Lệnh đã chạy! Hãy chú ý thẻ 'Mochi' đã xuất hiện thêm sticker tiêm phòng (💉 Vax) một cách mượt mà.");

    }, 800);
});