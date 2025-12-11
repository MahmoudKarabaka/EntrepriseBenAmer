// Script pour mettre à jour automatiquement toutes les images
// Ce script cherche d'abord JPG, puis PNG, puis WEBP, puis SVG

const imageMap = {
    'tournage': ['tournage1', 'tournage2', 'tournage3'],
    'fraisage': ['fraisage1', 'fraisage2', 'fraisage3'],
    'soudure': ['soudure1', 'soudure2', 'soudure3'],
    'confection-reparation': ['confection1', 'confection2', 'confection3'],
    'grands-engins': ['engin1', 'engin2', 'engin3']
};

const extensions = ['jpg', 'jpeg', 'png', 'webp', 'svg'];

function updateImageSources() {
    Object.keys(imageMap).forEach(category => {
        imageMap[category].forEach((imageName, index) => {
            const itemIndex = Object.values(imageMap).flat().indexOf(imageName);
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            if (galleryItems[itemIndex]) {
                const img = galleryItems[itemIndex].querySelector('img');
                if (img) {
                    // Essayer chaque extension dans l'ordre de priorité
                    let imageLoaded = false;
                    
                    extensions.forEach((ext, extIndex) => {
                        if (!imageLoaded) {
                            const testSrc = `images/${category}/${imageName}.${ext}`;
                            const testImg = new Image();
                            
                            testImg.onload = function() {
                                if (!imageLoaded) {
                                    imageLoaded = true;
                                    img.src = testSrc;
                                    img.alt = `${category} - ${imageName}`;
                                }
                            };
                            
                            testImg.onerror = function() {
                                // Essayer l'extension suivante
                                if (extIndex === extensions.length - 1) {
                                    // Toutes les extensions ont échoué, afficher le placeholder
                                    img.style.display = 'none';
                                    const placeholder = galleryItems[itemIndex].querySelector('.gallery-placeholder');
                                    if (placeholder) {
                                        placeholder.style.display = 'flex';
                                    }
                                }
                            };
                            
                            testImg.src = testSrc;
                        }
                    });
                }
            }
        });
    });
}

// Exécuter au chargement de la page
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateImageSources);
} else {
    updateImageSources();
}


