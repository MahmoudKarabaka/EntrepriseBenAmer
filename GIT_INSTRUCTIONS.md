# 📤 Instructions pour Push sur GitHub

Git n'est pas installé sur votre système. Voici comment procéder :

## Option 1 : Installer Git (Recommandé)

1. **Téléchargez Git** : https://git-scm.com/download/win
2. **Installez Git** avec les options par défaut
3. **Redémarrez** votre terminal/IDE

Ensuite, exécutez ces commandes dans le terminal :

```bash
# Initialiser le repository
git init

# Ajouter le remote
git remote add origin https://github.com/MahmoudKarabaka/EntrepriseBenAmer.git

# Ajouter tous les fichiers
git add .

# Configurer votre identité (remplacez par vos vraies infos)
git config user.name "MahmoudKarabaka"
git config user.email "votre-email@example.com"

# Faire le commit
git commit -m "Initial commit: Site Next.js Ben Ameur Tournage"

# Créer la branche main
git branch -M main

# Push vers GitHub
git push -u origin main
```

## Option 2 : Utiliser GitHub Desktop

1. **Téléchargez GitHub Desktop** : https://desktop.github.com/
2. **Installez** et connectez-vous avec votre compte GitHub
3. **Ajoutez le repository** :
   - File > Add Local Repository
   - Sélectionnez le dossier du projet
4. **Publiez** le repository sur GitHub

## Option 3 : Upload Direct sur GitHub

1. Allez sur https://github.com/MahmoudKarabaka/EntrepriseBenAmer
2. Cliquez sur "Upload files"
3. Glissez-déposez tous les fichiers du projet
4. Cliquez sur "Commit changes"

## 📋 Fichiers à inclure

Assurez-vous d'inclure :
- ✅ Tous les fichiers dans `app/`
- ✅ Tous les fichiers dans `components/`
- ✅ Tous les fichiers dans `public/`
- ✅ `package.json`
- ✅ `next.config.js`
- ✅ `tsconfig.json`
- ✅ `tailwind.config.ts`
- ✅ `postcss.config.js`
- ✅ `.gitignore`
- ✅ `README.md`

## ⚠️ Ne PAS inclure

- ❌ `node_modules/` (déjà dans .gitignore)
- ❌ `.next/` (déjà dans .gitignore)
- ❌ Fichiers de configuration locaux

---

**Une fois le push effectué, vous pourrez déployer sur Vercel en connectant votre repository GitHub !**

