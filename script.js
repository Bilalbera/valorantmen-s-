const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

const createBtn = document.getElementById("createBtn");
const modalBg = document.getElementById("modalBg");
const closeModal = document.getElementById("closeModal");

const uploadArea = document.getElementById("uploadArea");
const videoFile = document.getElementById("videoFile");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");


// MENÜ
menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("closed");
});


// OLUŞTUR
createBtn.addEventListener("click", () => {
  modalBg.classList.add("show");
});


// MODAL KAPAT
closeModal.addEventListener("click", () => {
  modalBg.classList.remove("show");
});


// MODAL DIŞINA TIKLAMA
modalBg.addEventListener("click", (event) => {
  if (event.target === modalBg) {
    modalBg.classList.remove("show");
  }
});


// DOSYA SEÇİLDİ
videoFile.addEventListener("change", () => {

  if (!videoFile.files.length) return;

  const file = videoFile.files[0];

  uploadArea.querySelector("h3").textContent = file.name;
  uploadArea.querySelector("p").textContent =
    `${(file.size / 1024 / 1024).toFixed(2)} MB`;

});


// DRAG & DROP
["dragenter", "dragover"].forEach(eventName => {

  uploadArea.addEventListener(eventName, (event) => {

    event.preventDefault();

    uploadArea.classList.add("dragging");

  });

});


["dragleave", "drop"].forEach(eventName => {

  uploadArea.addEventListener(eventName, (event) => {

    event.preventDefault();

    uploadArea.classList.remove("dragging");

  });

});


uploadArea.addEventListener("drop", (event) => {

  const files = event.dataTransfer.files;

  if (!files.length) return;

  videoFile.files = files;

  const file = files[0];

  uploadArea.querySelector("h3").textContent = file.name;

  uploadArea.querySelector("p").textContent =
    `${(file.size / 1024 / 1024).toFixed(2)} MB`;

});


// ARAMA
function searchVideos() {

  const query = searchInput.value.trim();

  if (!query) return;

  alert(`TürkTube'da aranıyor: ${query}`);

}

searchBtn.addEventListener("click", searchVideos);

searchInput.addEventListener("keydown", (event) => {

  if (event.key === "Enter") {
    searchVideos();
  }

});


// KATEGORİ BUTONLARI
document.querySelectorAll(".chip").forEach(chip => {

  chip.addEventListener("click", () => {

    document.querySelectorAll(".chip").forEach(item => {
      item.classList.remove("active");
    });

    chip.classList.add("active");

  });

});


// VİDEO KARTLARINA TIKLAMA
document.querySelectorAll(".video-card, .featured-card").forEach(card => {

  card.addEventListener("click", () => {

    console.log("Video açıldı");

  });

});
