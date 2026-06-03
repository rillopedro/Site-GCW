
const form = document.getElementById('form');
if (form) {
  form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Sessão agendada!');
  });
}

const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(src, alt) {
  if (!lightboxOverlay || !lightboxImage) return;
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightboxOverlay.classList.add('active');
}

function closeLightbox() {
  if (!lightboxOverlay || !lightboxImage) return;
  lightboxOverlay.classList.remove('active');
  lightboxImage.src = '';
}

const galleryImages = document.querySelectorAll('.item img');
galleryImages.forEach((img) => {
  if (!lightboxOverlay || !lightboxImage) return;
  img.style.cursor = 'pointer';
  img.addEventListener('click', function() {
    openLightbox(this.src, this.alt);
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxOverlay) {
  lightboxOverlay.addEventListener('click', function(e) {
    if (e.target === lightboxOverlay) {
      closeLightbox();
    }
  });
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && lightboxOverlay && lightboxOverlay.classList.contains('active')) {
    closeLightbox();
  }
});

const senha_galeria = '123456';
function acessarGaleria() {
  const senhaInput = document.getElementById('senha');
  const galeria = document.getElementById('galeria');
  const loginBox = senhaInput ? senhaInput.closest('.login-box') : null;
  if (!senhaInput || !galeria) return;

  const senha = senhaInput.value.trim();
  if (senha === senha_galeria) {
    galeria.classList.remove('hidden');
    if (loginBox) {
      loginBox.style.display = 'none';
    }
  } else {
    alert('Senha incorreta. Tente novamente.');
    senhaInput.focus();
  }
}


