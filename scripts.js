// 1) Replace with your actual published-CSV URL:
const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-xux3ZfTOFNCwqCXUMEVl9MD91C_gNXx3wNpybNlG0VIRiDVCb666M84zehBgwJDyv-6pVz5glDpf/pub?gid=145164873&single=true&output=csv';

fetch(CSV_URL)
  .then(res => res.text())
  .then(text => {
    // 2) Split into lines and drop any empty
    const lines = text.trim().split('\n').filter(Boolean);
    // 3) Skip the header row
    const rows  = lines.slice(1);
    
    // 4) Parse each row into an object
    const data = rows.map(line => {
      // Each line now: "Name,Discipline,Score"
      const [competitor, discipline, scoreStr] = line.split(',');
      return {
        competitor: competitor.trim(),
        discipline: discipline.trim(),
        score: Number(scoreStr)
      };
    });

    // 5) Sort by numeric score descending
    data.sort((a, b) => b.score - a.score);

    // 6) Render into your table
    const tbody = document.getElementById('leaderboard-body');
    tbody.innerHTML = '';  // clear any old rows
    data.forEach((row, i) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${i + 1}</td>
        <td>${row.competitor}</td>
        <td>${row.discipline}</td>
        <td>${row.score}</td>
      `;
      tbody.appendChild(tr);
    });
  })
  .catch(err => {
    console.error('Leaderboard load error:', err);
    document.getElementById('leaderboard-body').innerHTML =
      '<tr><td colspan="4">Error loading data</td></tr>';
  });
