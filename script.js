(function() {
  const rows = 4;
  let out = '';
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
      out += '* ';
    }
    out += '<br>';
  }
  document.getElementById('pattern1').innerHTML = out;
})();

(function() {
  const baris = 4;
  let out = '';
  for (let i = 1; i <= baris; i++) {
    for (let j = 1; j <= baris - i; j++) {
      out += '  ';
    }
    for (let k = 1; k <= i; k++) {
      out += '* ';
    }
    out += '\n';
  }
  document.getElementById('pattern2').textContent = out;
})();

(function() {
  const baris = 4;
  let out = '';
  for (let i = baris; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      out += '* ';
    }
    out += '<br>';
  }
  document.getElementById('pattern3').innerHTML = out;
})();

(function() {
  const siswa = [
    { nama: "Adly", kelas: "X PPLG", nilai: 90 },
    { nama: "Sanaya", kelas: "X PPLG", nilai: 80 },
    { nama: "Ramadhan", kelas: "X PPLG", nilai: 70 },
    { nama: "Aldy", kelas: "X PPLG", nilai: 60 },
    { nama: "Jimny", kelas: "X PPLG", nilai: 50 },
    { nama: "Inaya", kelas: "X PPLG", nilai: 40 },
    { nama: "Oce", kelas: "X PPLG", nilai: 30 },
    { nama: "Al", kelas: "X PPLG", nilai: 20 },
    { nama: "Adlay", kelas: "X PPLG", nilai: 10 },
    { nama: "SANZ", kelas: "X PPLG", nilai: 0 }
  ];

  function getPredikat(nilai) {
    if (nilai >= 85) return 'A';
    else if (nilai >= 75) return 'B';
    else if (nilai >= 65) return 'C';
    else if (nilai >= 55) return 'D';
    else return 'E';
  }

  const container = document.getElementById('tableContainer');
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  ['Nama', 'Kelas', 'Nilai', 'Predikat'].forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  siswa.forEach(data => {
    const tr = document.createElement('tr');
    const predikat = getPredikat(data.nilai);

    const tdNama = document.createElement('td'); tdNama.textContent = data.nama; tr.appendChild(tdNama);
    const tdKelas = document.createElement('td'); tdKelas.textContent = data.kelas; tr.appendChild(tdKelas);
    const tdNilai = document.createElement('td'); tdNilai.textContent = data.nilai; tr.appendChild(tdNilai);
    const tdPred = document.createElement('td'); tdPred.textContent = predikat; tr.appendChild(tdPred);

    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  container.appendChild(table);
})();