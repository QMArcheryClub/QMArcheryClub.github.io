const CSV_URL_BASE = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-xux3ZfTOFNCwqCXUMEVl9MD91C_gNXx3wNpybNlG0VIRiDVCb666M84zehBgwJDyv-6pVz5glDpf/pub?gid=145164873&single=true&output=csv';

const CSV_URL = `${CSV_URL_BASE}&_=${Date.now()}`;
fetch(CSV_URL, { cache: 'no-store' })
  .then(/* … */)

fetch(CSV_URL)
  .then(r => r.text())
  .then(csv => {
    const lines = csv.trim().split(/\r?\n/).filter(Boolean);

    const dataLines = lines.slice(1);

    const data = dataLines.map(line => {
      const [competitor, discipline, scoreStr] = line.split(',');
      return {
        competitor: competitor.trim(),
        discipline: discipline.trim(),
        score:      Number(scoreStr.trim())
      };
    });

    data.sort((a, b) => b.score - a.score);

    const tbody = document.getElementById('leaderboard-body');
    tbody.innerHTML = data.map((row, i) =>
      `<tr>
         <td>${i + 1}</td>
         <td>${row.competitor}</td>
         <td>${row.discipline}</td>
         <td>${row.score}</td>
       </tr>`
    ).join('');
  })
  .catch(err => {
    console.error(err);
    document.getElementById('leaderboard-body').innerHTML =
      '<tr><td colspan="4">Error loading data</td></tr>';
  });

// Mobile Menu Toggle
 document.addEventListener('DOMContentLoaded', function () {
      const navbarToggle = document.getElementById('navbarToggle');
      const navbarLinks = document.getElementById('navbarLinks');

      if (navbarToggle && navbarLinks) {
          navbarToggle.addEventListener('click', function () {
              navbarLinks.classList.toggle('active');

              // Optional: Change hamburger to X icon
              navbarToggle.classList.toggle('active');
              // You would need to add CSS for .navbar-toggle.active span transformations for X icon
          });
      }
  });
const CSV_URL_BASE = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-xux3ZfTOFNCwqCXUMEVl9MD91C_gNXx3wNpybNlG0VIRiDVCb666M84zehBgwJDyv-6pVz5glDpf/pub?gid=145164873&single=true&output=csv';

const CSV_URL = `${CSV_URL_BASE}&_=${Date.now()}`;
fetch(CSV_URL, { cache: 'no-store' })
  .then(/* … */)

fetch(CSV_URL)
  .then(r => r.text())
  .then(csv => {
    const lines = csv.trim().split(/\r?\n/).filter(Boolean);

    const dataLines = lines.slice(1);

    const data = dataLines.map(line => {
      const [competitor, discipline, scoreStr] = line.split(',');
      return {
        competitor: competitor.trim(),
        discipline: discipline.trim(),
        score:      Number(scoreStr.trim())
      };
    });

    data.sort((a, b) => b.score - a.score);

    const tbody = document.getElementById('leaderboard-body');
    tbody.innerHTML = data.map((row, i) =>
      `<tr>
         <td>${i + 1}</td>
         <td>${row.competitor}</td>
         <td>${row.discipline}</td>
         <td>${row.score}</td>
       </tr>`
    ).join('');
  })
  .catch(err => {
    console.error(err);
    document.getElementById('leaderboard-body').innerHTML =
      '<tr><td colspan="4">Error loading data</td></tr>';
  });

// Mobile Menu Toggle
 document.addEventListener('DOMContentLoaded', function () {
      const navbarToggle = document.getElementById('navbarToggle');
      const navbarLinks = document.getElementById('navbarLinks');

      if (navbarToggle && navbarLinks) {
          navbarToggle.addEventListener('click', function () {
              navbarLinks.classList.toggle('active');

              // Optional: Change hamburger to X icon
              navbarToggle.classList.toggle('active');
              // You would need to add CSS for .navbar-toggle.active span transformations for X icon
          });
      }
  });
const CSV_URL_BASE = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-xux3ZfTOFNCwqCXUMEVl9MD91C_gNXx3wNpybNlG0VIRiDVCb666M84zehBgwJDyv-6pVz5glDpf/pub?gid=145164873&single=true&output=csv';

const CSV_URL = `${CSV_URL_BASE}&_=${Date.now()}`;
fetch(CSV_URL, { cache: 'no-store' })
  .then(/* … */)

fetch(CSV_URL)
  .then(r => r.text())
  .then(csv => {
    const lines = csv.trim().split(/\r?\n/).filter(Boolean);

    const dataLines = lines.slice(1);

    const data = dataLines.map(line => {
      const [competitor, discipline, scoreStr] = line.split(',');
      return {
        competitor: competitor.trim(),
        discipline: discipline.trim(),
        score:      Number(scoreStr.trim())
      };
    });

    data.sort((a, b) => b.score - a.score);

    const tbody = document.getElementById('leaderboard-body');
    tbody.innerHTML = data.map((row, i) =>
      `<tr>
         <td>${i + 1}</td>
         <td>${row.competitor}</td>
         <td>${row.discipline}</td>
         <td>${row.score}</td>
       </tr>`
    ).join('');
  })
  .catch(err => {
    console.error(err);
    document.getElementById('leaderboard-body').innerHTML =
      '<tr><td colspan="4">Error loading data</td></tr>';
  });

// Mobile Menu Toggle
 document.addEventListener('DOMContentLoaded', function () {
      const navbarToggle = document.getElementById('navbarToggle');
      const navbarLinks = document.getElementById('navbarLinks');

      if (navbarToggle && navbarLinks) {
          navbarToggle.addEventListener('click', function () {
              navbarLinks.classList.toggle('active');

              // Optional: Change hamburger to X icon
              navbarToggle.classList.toggle('active');
              // You would need to add CSS for .navbar-toggle.active span transformations for X icon
          });
      }
  });
const CSV_URL_BASE = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-xux3ZfTOFNCwqCXUMEVl9MD91C_gNXx3wNpybNlG0VIRiDVCb666M84zehBgwJDyv-6pVz5glDpf/pub?gid=145164873&single=true&output=csv';

const CSV_URL = `${CSV_URL_BASE}&_=${Date.now()}`;
fetch(CSV_URL, { cache: 'no-store' })
  .then(/* … */)

fetch(CSV_URL)
  .then(r => r.text())
  .then(csv => {
    const lines = csv.trim().split(/\r?\n/).filter(Boolean);

    const dataLines = lines.slice(1);

    const data = dataLines.map(line => {
      const [competitor, discipline, scoreStr] = line.split(',');
      return {
        competitor: competitor.trim(),
        discipline: discipline.trim(),
        score:      Number(scoreStr.trim())
      };
    });

    data.sort((a, b) => b.score - a.score);

    const tbody = document.getElementById('leaderboard-body');
    tbody.innerHTML = data.map((row, i) =>
      `<tr>
         <td>${i + 1}</td>
         <td>${row.competitor}</td>
         <td>${row.discipline}</td>
         <td>${row.score}</td>
       </tr>`
    ).join('');
  })
  .catch(err => {
    console.error(err);
    document.getElementById('leaderboard-body').innerHTML =
      '<tr><td colspan="4">Error loading data</td></tr>';
  });

// Mobile Menu Toggle
 document.addEventListener('DOMContentLoaded', function () {
      const navbarToggle = document.getElementById('navbarToggle');
      const navbarLinks = document.getElementById('navbarLinks');

      if (navbarToggle && navbarLinks) {
          navbarToggle.addEventListener('click', function () {
              navbarLinks.classList.toggle('active');

              // Optional: Change hamburger to X icon
              navbarToggle.classList.toggle('active');
              // You would need to add CSS for .navbar-toggle.active span transformations for X icon
          });
      }
  });
const CSV_URL_BASE = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-xux3ZfTOFNCwqCXUMEVl9MD91C_gNXx3wNpybNlG0VIRiDVCb666M84zehBgwJDyv-6pVz5glDpf/pub?gid=145164873&single=true&output=csv';

const CSV_URL = `${CSV_URL_BASE}&_=${Date.now()}`;
fetch(CSV_URL, { cache: 'no-store' })
  .then(/* … */)

fetch(CSV_URL)
  .then(r => r.text())
  .then(csv => {
    const lines = csv.trim().split(/\r?\n/).filter(Boolean);

    const dataLines = lines.slice(1);

    const data = dataLines.map(line => {
      const [competitor, discipline, scoreStr] = line.split(',');
      return {
        competitor: competitor.trim(),
        discipline: discipline.trim(),
        score:      Number(scoreStr.trim())
      };
    });

    data.sort((a, b) => b.score - a.score);

    const tbody = document.getElementById('leaderboard-body');
    tbody.innerHTML = data.map((row, i) =>
      `<tr>
         <td>${i + 1}</td>
         <td>${row.competitor}</td>
         <td>${row.discipline}</td>
         <td>${row.score}</td>
       </tr>`
    ).join('');
  })
  .catch(err => {
    console.error(err);
    document.getElementById('leaderboard-body').innerHTML =
      '<tr><td colspan="4">Error loading data</td></tr>';
  });

// Mobile Menu Toggle
 document.addEventListener('DOMContentLoaded', function () {
      const navbarToggle = document.getElementById('navbarToggle');
      const navbarLinks = document.getElementById('navbarLinks');

      if (navbarToggle && navbarLinks) {
          navbarToggle.addEventListener('click', function () {
              navbarLinks.classList.toggle('active');

              // Optional: Change hamburger to X icon
              navbarToggle.classList.toggle('active');
              // You would need to add CSS for .navbar-toggle.active span transformations for X icon
          });
      }
  });
const CSV_URL_BASE = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-xux3ZfTOFNCwqCXUMEVl9MD91C_gNXx3wNpybNlG0VIRiDVCb666M84zehBgwJDyv-6pVz5glDpf/pub?gid=145164873&single=true&output=csv';

const CSV_URL = `${CSV_URL_BASE}&_=${Date.now()}`;
fetch(CSV_URL, { cache: 'no-store' })
  .then(/* … */)

fetch(CSV_URL)
  .then(r => r.text())
  .then(csv => {
    const lines = csv.trim().split(/\r?\n/).filter(Boolean);

    const dataLines = lines.slice(1);

    const data = dataLines.map(line => {
      const [competitor, discipline, scoreStr] = line.split(',');
      return {
        competitor: competitor.trim(),
        discipline: discipline.trim(),
        score:      Number(scoreStr.trim())
      };
    });

    data.sort((a, b) => b.score - a.score);

    const tbody = document.getElementById('leaderboard-body');
    tbody.innerHTML = data.map((row, i) =>
      `<tr>
         <td>${i + 1}</td>
         <td>${row.competitor}</td>
         <td>${row.discipline}</td>
         <td>${row.score}</td>
       </tr>`
    ).join('');
  })
  .catch(err => {
    console.error(err);
    document.getElementById('leaderboard-body').innerHTML =
      '<tr><td colspan="4">Error loading data</td></tr>';
  });

// Mobile Menu Toggle
 document.addEventListener('DOMContentLoaded', function () {
      const navbarToggle = document.getElementById('navbarToggle');
      const navbarLinks = document.getElementById('navbarLinks');

      if (navbarToggle && navbarLinks) {
          navbarToggle.addEventListener('click', function () {
              navbarLinks.classList.toggle('active');

              // Optional: Change hamburger to X icon
              navbarToggle.classList.toggle('active');
              // You would need to add CSS for .navbar-toggle.active span transformations for X icon
          });
      }
  });
const CSV_URL_BASE = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-xux3ZfTOFNCwqCXUMEVl9MD91C_gNXx3wNpybNlG0VIRiDVCb666M84zehBgwJDyv-6pVz5glDpf/pub?gid=145164873&single=true&output=csv';

const CSV_URL = `${CSV_URL_BASE}&_=${Date.now()}`;
fetch(CSV_URL, { cache: 'no-store' })
  .then(/* … */)

fetch(CSV_URL)
  .then(r => r.text())
  .then(csv => {
    const lines = csv.trim().split(/\r?\n/).filter(Boolean);

    const dataLines = lines.slice(1);

    const data = dataLines.map(line => {
      const [competitor, discipline, scoreStr] = line.split(',');
      return {
        competitor: competitor.trim(),
        discipline: discipline.trim(),
        score:      Number(scoreStr.trim())
      };
    });

    data.sort((a, b) => b.score - a.score);

    const tbody = document.getElementById('leaderboard-body');
    tbody.innerHTML = data.map((row, i) =>
      `<tr>
         <td>${i + 1}</td>
         <td>${row.competitor}</td>
         <td>${row.discipline}</td>
         <td>${row.score}</td>
       </tr>`
    ).join('');
  })
  .catch(err => {
    console.error(err);
    document.getElementById('leaderboard-body').innerHTML =
      '<tr><td colspan="4">Error loading data</td></tr>';
  });

// Mobile Menu Toggle
 document.addEventListener('DOMContentLoaded', function () {
      const navbarToggle = document.getElementById('navbarToggle');
      const navbarLinks = document.getElementById('navbarLinks');

      if (navbarToggle && navbarLinks) {
          navbarToggle.addEventListener('click', function () {
              navbarLinks.classList.toggle('active');

              // Optional: Change hamburger to X icon
              navbarToggle.classList.toggle('active');
              // You would need to add CSS for .navbar-toggle.active span transformations for X icon
          });
      }
  });
const CSV_URL_BASE = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-xux3ZfTOFNCwqCXUMEVl9MD91C_gNXx3wNpybNlG0VIRiDVCb666M84zehBgwJDyv-6pVz5glDpf/pub?gid=145164873&single=true&output=csv';

const CSV_URL = `${CSV_URL_BASE}&_=${Date.now()}`;
fetch(CSV_URL, { cache: 'no-store' })
  .then(/* … */)

fetch(CSV_URL)
  .then(r => r.text())
  .then(csv => {
    const lines = csv.trim().split(/\r?\n/).filter(Boolean);

    const dataLines = lines.slice(1);

    const data = dataLines.map(line => {
      const [competitor, discipline, scoreStr] = line.split(',');
      return {
        competitor: competitor.trim(),
        discipline: discipline.trim(),
        score:      Number(scoreStr.trim())
      };
    });

    data.sort((a, b) => b.score - a.score);

    const tbody = document.getElementById('leaderboard-body');
    tbody.innerHTML = data.map((row, i) =>
      `<tr>
         <td>${i + 1}</td>
         <td>${row.competitor}</td>
         <td>${row.discipline}</td>
         <td>${row.score}</td>
       </tr>`
    ).join('');
  })
  .catch(err => {
    console.error(err);
    document.getElementById('leaderboard-body').innerHTML =
      '<tr><td colspan="4">Error loading data</td></tr>';
  });

// Mobile Menu Toggle
 document.addEventListener('DOMContentLoaded', function () {
      const navbarToggle = document.getElementById('navbarToggle');
      const navbarLinks = document.getElementById('navbarLinks');

      if (navbarToggle && navbarLinks) {
          navbarToggle.addEventListener('click', function () {
              navbarLinks.classList.toggle('active');

              // Optional: Change hamburger to X icon
              navbarToggle.classList.toggle('active');
              // You would need to add CSS for .navbar-toggle.active span transformations for X icon
          });
      }
  });
const CSV_URL_BASE = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-xux3ZfTOFNCwqCXUMEVl9MD91C_gNXx3wNpybNlG0VIRiDVCb666M84zehBgwJDyv-6pVz5glDpf/pub?gid=145164873&single=true&output=csv';

const CSV_URL = `${CSV_URL_BASE}&_=${Date.now()}`;
fetch(CSV_URL, { cache: 'no-store' })
  .then(/* … */)

fetch(CSV_URL)
  .then(r => r.text())
  .then(csv => {
    const lines = csv.trim().split(/\r?\n/).filter(Boolean);

    const dataLines = lines.slice(1);

    const data = dataLines.map(line => {
      const [competitor, discipline, scoreStr] = line.split(',');
      return {
        competitor: competitor.trim(),
        discipline: discipline.trim(),
        score:      Number(scoreStr.trim())
      };
    });

    data.sort((a, b) => b.score - a.score);

    const tbody = document.getElementById('leaderboard-body');
    tbody.innerHTML = data.map((row, i) =>
      `<tr>
         <td>${i + 1}</td>
         <td>${row.competitor}</td>
         <td>${row.discipline}</td>
         <td>${row.score}</td>
       </tr>`
    ).join('');
  })
  .catch(err => {
    console.error(err);
    document.getElementById('leaderboard-body').innerHTML =
      '<tr><td colspan="4">Error loading data</td></tr>';
  });

// Mobile Menu Toggle
 document.addEventListener('DOMContentLoaded', function () {
      const navbarToggle = document.getElementById('navbarToggle');
      const navbarLinks = document.getElementById('navbarLinks');

      if (navbarToggle && navbarLinks) {
          navbarToggle.addEventListener('click', function () {
              navbarLinks.classList.toggle('active');

              // Optional: Change hamburger to X icon
              navbarToggle.classList.toggle('active');
              // You would need to add CSS for .navbar-toggle.active span transformations for X icon
          });
      }
  });
const CSV_URL_BASE = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-xux3ZfTOFNCwqCXUMEVl9MD91C_gNXx3wNpybNlG0VIRiDVCb666M84zehBgwJDyv-6pVz5glDpf/pub?gid=145164873&single=true&output=csv';

const CSV_URL = `${CSV_URL_BASE}&_=${Date.now()}`;
fetch(CSV_URL, { cache: 'no-store' })
  .then(/* … */)

fetch(CSV_URL)
  .then(r => r.text())
  .then(csv => {
    const lines = csv.trim().split(/\r?\n/).filter(Boolean);

    const dataLines = lines.slice(1);

    const data = dataLines.map(line => {
      const [competitor, discipline, scoreStr] = line.split(',');
      return {
        competitor: competitor.trim(),
        discipline: discipline.trim(),
        score:      Number(scoreStr.trim())
      };
    });

    data.sort((a, b) => b.score - a.score);

    const tbody = document.getElementById('leaderboard-body');
    tbody.innerHTML = data.map((row, i) =>
      `<tr>
         <td>${i + 1}</td>
         <td>${row.competitor}</td>
         <td>${row.discipline}</td>
         <td>${row.score}</td>
       </tr>`
    ).join('');
  })
  .catch(err => {
    console.error(err);
    document.getElementById('leaderboard-body').innerHTML =
      '<tr><td colspan="4">Error loading data</td></tr>';
  });

// Mobile Menu Toggle
 document.addEventListener('DOMContentLoaded', function () {
      const navbarToggle = document.getElementById('navbarToggle');
      const navbarLinks = document.getElementById('navbarLinks');

      if (navbarToggle && navbarLinks) {
          navbarToggle.addEventListener('click', function () {
              navbarLinks.classList.toggle('active');

              // Optional: Change hamburger to X icon
              navbarToggle.classList.toggle('active');
              // You would need to add CSS for .navbar-toggle.active span transformations for X icon
          });
      }
  });
const CSV_URL_BASE = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-xux3ZfTOFNCwqCXUMEVl9MD91C_gNXx3wNpybNlG0VIRiDVCb666M84zehBgwJDyv-6pVz5glDpf/pub?gid=145164873&single=true&output=csv';

const CSV_URL = `${CSV_URL_BASE}&_=${Date.now()}`;
fetch(CSV_URL, { cache: 'no-store' })
  .then(/* … */)

fetch(CSV_URL)
  .then(r => r.text())
  .then(csv => {
    const lines = csv.trim().split(/\r?\n/).filter(Boolean);

    const dataLines = lines.slice(1);

    const data = dataLines.map(line => {
      const [competitor, discipline, scoreStr] = line.split(',');
      return {
        competitor: competitor.trim(),
        discipline: discipline.trim(),
        score:      Number(scoreStr.trim())
      };
    });

    data.sort((a, b) => b.score - a.score);

    const tbody = document.getElementById('leaderboard-body');
    tbody.innerHTML = data.map((row, i) =>
      `<tr>
         <td>${i + 1}</td>
         <td>${row.competitor}</td>
         <td>${row.discipline}</td>
         <td>${row.score}</td>
       </tr>`
    ).join('');
  })
  .catch(err => {
    console.error(err);
    document.getElementById('leaderboard-body').innerHTML =
      '<tr><td colspan="4">Error loading data</td></tr>';
  });

// Mobile Menu Toggle
 document.addEventListener('DOMContentLoaded', function () {
      const navbarToggle = document.getElementById('navbarToggle');
      const navbarLinks = document.getElementById('navbarLinks');

      if (navbarToggle && navbarLinks) {
          navbarToggle.addEventListener('click', function () {
              navbarLinks.classList.toggle('active');

              // Optional: Change hamburger to X icon
              navbarToggle.classList.toggle('active');
              // You would need to add CSS for .navbar-toggle.active span transformations for X icon
          });
      }
  });
