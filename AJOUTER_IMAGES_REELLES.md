# 📸 Guide pour Ajouter vos Images Réelles

Ce guide vous explique comment remplacer les images SVG par vos propres photos réelles.

## 📁 Structure des Dossiers

Vos images doivent être placées dans ces dossiers :

```
images/
├── tournage/
│   ├── tournage1.jpg (ou .png, .webp)
│   ├── tournage2.jpg
│   └── tournage3.jpg
├── fraisage/
│   ├── fraisage1.jpg
│   ├── fraisage2.jpg
│   └── fraisage3.jpg
├── soudure/
│   ├── soudure1.jpg
│   ├── soudure2.jpg
│   └── soudure3.jpg
├── confection-reparation/
│   ├── confection1.jpg
│   ├── confection2.jpg
│   └── confection3.jpg
└── grands-engins/
    ├── engin1.jpg
    ├── engin2.jpg
    └── engin3.jpg
```

## 🔄 Étapes pour Remplacer les Images

### Option 1 : Remplacement Automatique (Recommandé)

1. **Nommez vos images** exactement comme les fichiers SVG actuels :
   - `tournage1.jpg`, `tournage2.jpg`, `tournage3.jpg`
   - `fraisage1.jpg`, `fraisage2.jpg`, `fraisage3.jpg`
   - etc.

2. **Placez-les** dans les bons dossiers

3. **Le site les détectera automatiquement** - Les images JPG/PNG/WEBP ont la priorité sur les SVG

### Option 2 : Remplacement Manuel dans le Code

Si vous voulez utiliser des noms différents, modifiez `index.html` :

1. Ouvrez `index.html`
2. Cherchez les lignes avec `images/tournage/tournage1.svg`
3. Remplacez `.svg` par `.jpg` (ou votre format)
4. Répétez pour toutes les images

## 📐 Formats et Tailles Recommandés

### Formats acceptés :
- ✅ **JPG** (recommandé pour les photos)
- ✅ **PNG** (pour les images avec transparence)
- ✅ **WEBP** (format moderne, meilleure compression)

### Tailles optimales :
- **Largeur** : 1200px minimum
- **Hauteur** : 900px minimum
- **Ratio** : 4:3 ou 16:9
- **Poids** : < 500KB par image (optimisé)

## 🛠️ Outils pour Optimiser vos Images

### En ligne (gratuit) :
1. **TinyPNG** : https://tinypng.com
   - Compresse JPG et PNG
   - Réduit la taille sans perte visible

2. **Squoosh** : https://squoosh.app
   - Compression avancée
   - Conversion de format

3. **ImageOptim** : https://imageoptim.com (Mac)
   - Compression automatique

### Logiciels :
- **Photoshop** : Export pour le web
- **GIMP** : Gratuit, export optimisé
- **IrfanView** : Gratuit, redimensionnement rapide

## 📝 Exemple de Commandes pour Optimiser

### Avec FFmpeg (si vous avez des vidéos à convertir) :
```bash
ffmpeg -i votre-video.mp4 -vf "scale=1200:900" -q:v 2 image.jpg
```

### Avec ImageMagick (redimensionnement) :
```bash
magick convert image.jpg -resize 1200x900^ -gravity center -extent 1200x900 -quality 85 image-optimized.jpg
```

## ✅ Vérification

Après avoir ajouté vos images :

1. Ouvrez `index.html` dans votre navigateur
2. Allez dans la section "Galerie"
3. Vérifiez que vos images s'affichent
4. Testez les filtres par catégorie

## 🔍 Dépannage

### L'image ne s'affiche pas ?
- ✅ Vérifiez le nom du fichier (doit correspondre exactement)
- ✅ Vérifiez le chemin du dossier
- ✅ Vérifiez l'extension (.jpg, .png, .webp)
- ✅ Ouvrez la console du navigateur (F12) pour voir les erreurs

### L'image est trop lourde ?
- ✅ Utilisez TinyPNG pour compresser
- ✅ Réduisez la résolution si nécessaire
- ✅ Convertissez en WEBP pour une meilleure compression

### L'image est déformée ?
- ✅ Utilisez un ratio 4:3 ou 16:9
- ✅ Redimensionnez à 1200x900px exactement

## 💡 Astuce Pro

Pour ajouter plus d'images à une catégorie :

1. Ajoutez vos nouvelles images dans le dossier (ex: `tournage4.jpg`, `tournage5.jpg`)
2. Copiez une balise `<div class="gallery-item">` existante dans `index.html`
3. Modifiez le chemin de l'image
4. Le site les affichera automatiquement !

---

**Besoin d'aide ?** Consultez le fichier `README.md` principal pour plus d'informations.


