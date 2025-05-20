// 1) Replace with your actual published-CSV URL:
const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-xux3ZfTOFNCwqCXUMEVl9MD91C_gNXx3wNpybNlG0VIRiDVCb666M84zehBgwJDyv-6pVz5glDpf/pub?gid=145164873&single=true&output=csv';

fetch(CSV_URL)
  .then(r => r.text())
  .then(text => {
    const lines = text.trim().split('\n').filter(Boolean);
    // skip header row
    const rows  = lines.slice(1);

    const data = rows.map(line => {
      // split into columns
      const cols = line.split(',');
      // if there's an extra blank first col, drop it:
      if (cols[0] === '') cols.shift();

      // now cols = [Name, Discipline, Score]
      const [competitor, discipline, scoreStr] = cols;

      return {
        competitor: competitor.trim(),
        discipline: discipline.trim(),
        score:      Number(scoreStr.trim())
      };
    });

    // sort and render as before…
    data.sort((a,b) => b.score - a.score);
    const tbody = document.getElementById('leaderboard-body');
    tbody.innerHTML = '';
    data.forEach((row,i) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${i+1}</td>
        <td>${row.competitor}</td>
        <td>${row.discipline}</td>
        <td>${row.score}</td>
      `;
      tbody.appendChild(tr);
    });
  })
  .catch(err => {
    console.error(err);
    document.getElementById('leaderboard-body')
      .innerHTML = '<tr><td colspan="4">Error loading data</td></tr>';
  });
