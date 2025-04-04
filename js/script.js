// =======================
// HAMBURGER MENU SECTION
// =======================

// Toggle class 'active' pada hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

// Ketika hamburger diklik
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    searchForm.classList.remove('active');    // Tutup search form jika terbuka
    cart.classList.remove('active'); // Tutup shopping cart jika terbuka  
    e.preventDefault();        
};

// Klik di luar sidebar untuk menutup sidebar
document.addEventListener('click', function(e) {
    if (
        !hamburger.contains(e.target) &&
        !navbarNav.contains(e.target)
    ) {
        navbarNav.classList.remove('active');
    }
});


// =======================
// SEARCH FORM SECTION
// =======================

// Toggle class 'active' pada search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('.search-box');

// Ketika tombol search diklik
document.querySelector('#search-btn').onclick = (e) => {
    e.preventDefault();
    searchForm.classList.toggle('active');
    navbarNav.classList.remove('active');     // Tutup hamburger menu jika terbuka
    cart.classList.remove('active');          // Tutup shopping cart jika terbuka
    searchBox.focus();
    
};

// Klik di luar search form untuk menutup search form
document.addEventListener('click', function(e) {
    if (
        !searchBox.contains(e.target) &&
        !searchForm.contains(e.target)
    ) {
        searchForm.classList.remove('active');
    }
});


// =======================
// SHOPPING CART SECTION
// =======================

// Klik shopping cart untuk menampilkan cart
const cart = document.querySelector('.keranjang');

document.querySelector('#cart-btn').onclick = (e) => {
    cart.classList.toggle('active');
    navbarNav.classList.remove('active');     // Tutup hamburger menu jika terbuka
    searchForm.classList.remove('active');    // Tutup search form jika terbuka
    e.preventDefault();
};

// Klik di luar shopping cart untuk menutup shopping cart
document.addEventListener('click', function(e) {
    if (
        !cart.contains(e.target) &&
        !document.querySelector('#cart-btn').contains(e.target)
    ) {
        cart.classList.remove('active');
    }
});

// =======================
// MODAL BOX
// =======================
const modal = document.querySelector('#modal-box');
const modalDetail = document.querySelectorAll('.eye');
const closeModal = document.querySelector('.close-modal');


// Ketika ikon "eye" diklik, tampilkan modal
modalDetail.forEach((btn) => {
    btn.onclick = () => {
        modal.style.display = 'flex';
    };
});


// Ketika tombol "X" diklik, sembunyikan modal dengan animasi
closeModal.onclick = () => {
    modal.classList.add('hide'); // Tambahkan class animasi keluar
    setTimeout(() => {
        modal.style.display = 'none'; // Sembunyikan modal setelah animasi selesai
        modal.classList.remove('hide'); // Reset class agar bisa dipakai lagi
    }, 300); // Sesuai dengan durasi animasi (0.5s = 500ms)
};

// Klik di luar modal box untuk menutup modal
window.onclick = (e) => {
    if (e.target === modal) {
        modal.classList.add('hide');
        setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('hide');
        }, 500);
    }
    e.preventDefault();
};