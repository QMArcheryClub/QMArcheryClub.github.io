// 1) Replace with your actual published-CSV URL:
const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/1LvD_5QjcHqzROhzVDpua3y43-yei33pAFDuhzgtyR0w/pub?output=csv';

/**
 * Fetch, parse, sort by score descending,
 * then render with computed rank & clickable link.
 */
fetch(CSV_URL)
  .then(res => res.text())
  .then(text => {
    // split lines & drop any empty
    const lines = text.trim().split('\n').filter(Boolean);

    // assume first line is header: Competitor,Bracket,Link,Score
    const data = lines.slice(1).map(line => {
      // simple split because your fields won't contain commas
      const [competitor, bracket, link, scoreStr] = line.split(',');
      return {
        competitor,
        bracket,
        link,
        score: Number(scoreStr)
      };
    });

    // sort highest score first
    data.sort((a, b) => b.score - a.score);

    const tbody = document.getElementById('leaderboard-body');
    data.forEach((row, i) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${i + 1}</td>
        <td>${row.competitor}</td>
        <td>${row.bracket}</td>
        <td><a href="${row.link}" target="_blank">${row.score}</a></td>
      `;
      tbody.appendChild(tr);
    });
  })
  .catch(err => {
    console.error('Failed to load leaderboard:', err);
    document.getElementById('leaderboard-body')
      .innerHTML = '<tr><td colspan="4">Error loading data.</td></tr>';
  });
