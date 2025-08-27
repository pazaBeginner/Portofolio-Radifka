// Hamburger
const toggleHamburger = document.getElementById('toggle-hamburger');
const navMenu = document.getElementById('nav-menu');

toggleHamburger.addEventListener('click', ()=> {
 toggleHamburger.classList.toggle('hamburger-active');
 navMenu.classList.toggle('hidden');
})

function handleScreenSize() {
    if (!toggleHamburger || !navMenu) {
      console.error("Element toggleHamburger atau navMenu tidak ditemukan!");
      return;
    }
  
    // Bersihkan event listener sebelumnya agar tidak duplikat
    document.removeEventListener('click', handleSmallScreenClick);
    // document.removeEventListener('click', handleLargeScreenClick);
  
    if (window.innerWidth < 1024) {
      // Tambahkan event listener untuk layar kecil
      document.addEventListener('click', handleSmallScreenClick);
    } 
  }
  
  // Fungsi untuk menangani layar kecil (< 768px)
  function handleSmallScreenClick(e) {
    if (!toggleHamburger.contains(e.target) && !navMenu.contains(e.target)) {
      toggleHamburger.classList.remove('hamburger-active');
      navMenu.classList.add('hidden');
    }
  }
  
  // Fungsi untuk menangani layar besar (>= 768px)
  // function handleLargeScreenClick(e) {
  //   alert('Layar Anda lebih dari 768px');
  // }
  
  // Jalankan fungsi saat halaman dimuat 
  handleScreenSize();
  
  // Pantau perubahan ukuran layar
  window.addEventListener('resize', handleScreenSize);

// Navbar fixed 
window.onscroll = () => {
    const header = document.querySelector('header');
    const up = document.querySelector('.up');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        up.classList.remove('hidden');
    } else {
        header.classList.remove('navbar-fixed');
        up.classList.add('hidden');
    }
}
