// Data siswa dengan password
const siswaData = [
  {
    nis: '001',
    password: 'siswa1pass',
    nisn: '1234567890',
    nama: 'Siswa 1',
    tempatLahir: 'Jakarta',
    tanggalLahir: '01-01-2000',
    ortuWali: 'Orang Tua 1',
  },
  {
    nis: '002',
    password: 'siswa2pass',
    nisn: '0987654321',
    nama: 'Siswa 2',
    tempatLahir: 'Surabaya',
    tanggalLahir: '02-02-2001',
    ortuWali: 'Orang Tua 2',
  },
  {
    nis: '003',
    password: 'siswa3pass',
    nisn: '1357924680',
    nama: 'Siswa 3',
    tempatLahir: 'Bandung',
    tanggalLahir: '03-03-2002',
    ortuWali: 'Orang Tua 3',
  },
];

document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const welcomeMessage = document.getElementById('welcomeMessage');
  const cekSekarangButton = document.getElementById('cekSekarang');
  const dataSiswa = document.getElementById('dataSiswa');
  const namaSiswa = document.getElementById('namaSiswa');
  const nisSiswa = document.getElementById('nisSiswa');
  const nisnSiswa = document.getElementById('nisnSiswa');
  const namaSiswaDetail = document.getElementById('namaSiswaDetail');
  const tempatlahirSiswa = document.getElementById('tempatlahirSiswa');
  const tgllahirSiswa = document.getElementById('tgllahirSiswa');
  const ortuwaliSiswa = document.getElementById('ortuwaliSiswa');
  const passwordInput = document.getElementById('password');

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const nisInput = document.getElementById('nis').value;
    const passwordInputValue = passwordInput.value;

    const siswa = siswaData.find((data) => data.nis === nisInput);

    if (siswa && siswa.password === passwordInputValue) {
      namaSiswa.textContent = siswa.nama;
      welcomeMessage.classList.remove('d-none');
      loginForm.classList.add('d-none'); // Menghilangkan formulir login
    } else {
      alert('Login gagal. NIS atau password salah.');
    }
  });

  cekSekarangButton.addEventListener('click', function () {
    const nisInput = document.getElementById('nis').value;
    const siswa = siswaData.find((data) => data.nis === nisInput);

    if (siswa) {
      nisSiswa.textContent = siswa.nis;
      nisnSiswa.textContent = siswa.nisn;
      namaSiswaDetail.textContent = siswa.nama;
      tempatlahirSiswa.textContent = siswa.tempatLahir;
      tgllahirSiswa.textContent = siswa.tanggalLahir;
      ortuwaliSiswa.textContent = siswa.ortuWali;

      dataSiswa.classList.remove('d-none');
    }
  });
});
