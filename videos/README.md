# 📹 Vidéo d'Arrière-Plan

## Instructions

Placez votre vidéo d'arrière-plan dans ce dossier avec le nom : `background-video.mp4`

### Formats supportés :
- **MP4** (recommandé) : `background-video.mp4`
- **WebM** (optionnel) : `background-video.webm`

### Caractéristiques recommandées :
- **Résolution** : 1920x1080 (Full HD) ou supérieure
- **Durée** : 10-30 secondes (sera en boucle)
- **Format** : MP4 (H.264)
- **Taille** : Optimisée pour le web (< 5MB recommandé)
- **Contenu** : Vidéo de machines industrielles, usinage, tournage, etc.

### Outils pour optimiser votre vidéo :
- [HandBrake](https://handbrake.fr/) - Compression vidéo
- [FFmpeg](https://ffmpeg.org/) - Conversion et optimisation
- [CloudConvert](https://cloudconvert.com/) - Conversion en ligne

### Exemple de commande FFmpeg pour optimiser :
```bash
ffmpeg -i votre-video.mp4 -vcodec h264 -acodec mp2 -crf 28 -preset slow background-video.mp4
```

### Note :
Si aucune vidéo n'est fournie, le site utilisera le fond dégradé par défaut.

---

**La vidéo sera automatiquement :**
- ✅ En lecture automatique
- ✅ En boucle infinie
- ✅ Sans son (muette)
- ✅ Avec overlay sombre pour la lisibilité
- ✅ Responsive sur tous les écrans


