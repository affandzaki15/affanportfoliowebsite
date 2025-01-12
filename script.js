const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');
const logo = document.querySelector('logo');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


document.addEventListener("DOMContentLoaded", function () {
    const typingText = "Affan Dzaki Abrar"; // Teks yang akan dianimasikan
    const typingElement = document.getElementById("typing-effect");
    const homeButton = document.getElementById("home-button");
    const homeSection = document.getElementById("index");

    let index = 0; // Indeks untuk mengetik teks
    let typingInterval; // Interval untuk mengetik

    // Fungsi animasi mengetik
    function type() {
        typingElement.textContent = ""; // Hapus teks sebelumnya
        index = 0; // Reset indeks
        clearInterval(typingInterval); // Pastikan interval sebelumnya dihentikan
        typingInterval = setInterval(() => {
            if (index < typingText.length) {
                typingElement.textContent += typingText.charAt(index);
                index++;
            } else {
                clearInterval(typingInterval); // Hentikan setelah selesai mengetik
            }
        }, 150); // Kecepatan mengetik (150ms)
    }

    // Intersection Observer untuk memantau elemen #home
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Jika elemen terlihat di layar, mulai animasi mengetik
                type();
            }
        });
    });

    // Awasi elemen #home
    observer.observe(homeSection);

    // Event klik tombol Home
    homeButton.addEventListener("click", (event) => {
        event.preventDefault(); // Mencegah scroll default
        homeSection.scrollIntoView({ behavior: "smooth" }); // Scroll ke bagian home
        type(); // Mulai animasi mengetik
    });
});


const showMoreBtn = document.getElementById("show-more-btn");
const moreProjects = document.getElementById("more-projects");

showMoreBtn.addEventListener("click", () => {
  if (moreProjects.classList.contains("hidden")) {
    moreProjects.classList.remove("hidden");
    showMoreBtn.textContent = "Show Less Projects";
  } else {
    moreProjects.classList.add("hidden");
    showMoreBtn.textContent = "Show More Projects";
  }
});

