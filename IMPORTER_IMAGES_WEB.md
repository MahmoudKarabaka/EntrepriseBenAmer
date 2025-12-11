# 🌐 Importer des Images depuis le Web

Guide pour télécharger des images depuis Internet et les intégrer à votre site web.

## 📋 Méthodes Disponibles

### Méthode 1 : Script Python (Recommandé)

#### Prérequis
- Python 3 installé sur votre ordinateur
- Module `requests` installé

#### Installation
```bash
pip install requests
```

#### Utilisation
1. Ouvrez un terminal dans le dossier du projet
2. Exécutez :
```bash
python download-images.py
```
3. Suivez les instructions à l'écran :
   - Choisissez une catégorie
   - Choisissez un fichier à remplacer
   - Entrez l'URL de l'image
4. L'image sera téléchargée automatiquement !

### Méthode 2 : Téléchargement Manuel

#### Étapes
1. Trouvez une image sur le web (voir sources recommandées ci-dessous)
2. Clic droit sur l'image → "Enregistrer l'image sous..."
3. Nommez-la correctement (ex: `tournage1.jpg`)
4. Placez-la dans le bon dossier :
   - `images/tournage/` pour les images de tournage
   - `images/fraisage/` pour les images de fraisage
   - etc.

## 🖼️ Sources d'Images Gratuites

### Sites Recommandés (Libres de droits)

1. **Pexels** : https://www.pexels.com
   - Recherchez : "machining", "lathe", "welding", "industrial"
   - Téléchargement gratuit, haute qualité

2. **Unsplash** : https://unsplash.com
   - Recherchez : "cnc machine", "metalworking", "factory"
   - Images professionnelles gratuites

3. **Pixabay** : https://pixabay.com
   - Recherchez : "tournage", "fraisage", "soudure"
   - Large collection d'images libres

4. **Freepik** : https://www.freepik.com
   - Recherchez : "industrial", "machinery", "workshop"
   - Certaines images nécessitent attribution

### Mots-clés de Recherche

Pour trouver des images pertinentes, utilisez ces mots-clés en anglais :
- **Tournage** : "cnc lathe", "turning machine", "metal lathe"
- **Fraisage** : "milling machine", "cnc milling", "machining"
- **Soudure** : "welding", "arc welding", "metal welding"
- **Grands engins** : "heavy machinery", "construction equipment", "industrial vehicle"

## 📝 Exemple d'URLs Directes

Pour utiliser le script Python, vous avez besoin d'URLs directes vers les images :

✅ **Bon format** :
```
https://images.pexels.com/photos/123456/pexels-photo-123456.jpeg
https://images.unsplash.com/photo-1234567890?w=1200
```

❌ **Mauvais format** (page web, pas l'image) :
```
https://www.pexels.com/photo/machining-123456/
https://unsplash.com/photos/abc123
```

### Comment obtenir une URL directe ?

1. **Sur Pexels/Unsplash** :
   - Cliquez sur l'image
   - Clic droit → "Copier l'adresse de l'image"
   - Ou utilisez le bouton de téléchargement

2. **Sur d'autres sites** :
   - Clic droit sur l'image
   - "Ouvrir l'image dans un nouvel onglet"
   - Copiez l'URL de la barre d'adresse

## ⚠️ Important : Droits d'Auteur

### Images Libres de Droits
- ✅ Pexels, Unsplash, Pixabay : Utilisation commerciale autorisée
- ✅ Vérifiez toujours la licence avant d'utiliser

### Images Protégées
- ❌ Ne téléchargez PAS d'images protégées par copyright
- ❌ Respectez les droits d'auteur
- ✅ Utilisez uniquement des images libres de droits

## 🛠️ Dépannage

### L'image ne se télécharge pas
- ✅ Vérifiez que l'URL est directe (se termine par .jpg, .png, etc.)
- ✅ Vérifiez votre connexion Internet
- ✅ Essayez une autre URL

### L'image est trop grande
- ✅ Utilisez TinyPNG pour compresser : https://tinypng.com
- ✅ Redimensionnez avec un éditeur d'images

### Erreur Python
- ✅ Installez requests : `pip install requests`
- ✅ Vérifiez que Python 3 est installé

## 💡 Astuce Pro

Pour télécharger plusieurs images rapidement :
1. Créez un fichier `urls.txt` avec une URL par ligne
2. Modifiez le script Python pour lire ce fichier
3. Téléchargez toutes les images en une fois

## 📁 Structure Finale

Après téléchargement, vos images devraient être organisées ainsi :

```
images/
├── tournage/
│   ├── tournage1.jpg ✅
│   ├── tournage2.jpg ✅
│   └── tournage3.jpg ✅
├── fraisage/
│   └── ...
└── ...
```

---

**Besoin d'aide ?** Consultez `AJOUTER_IMAGES_REELLES.md` pour plus d'informations.


