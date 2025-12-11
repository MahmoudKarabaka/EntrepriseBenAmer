# 📤 Comment Pousser le Projet sur GitHub

## ⚠️ Git n'est pas installé

Pour pousser votre projet sur GitHub, vous devez d'abord installer Git.

## 📥 Installation de Git

### Windows

1. **Téléchargez Git** : https://git-scm.com/download/win
2. **Installez** avec les options par défaut
3. **Redémarrez** votre terminal/IDE après l'installation

## 🚀 Commandes à Exécuter

Une fois Git installé, ouvrez un terminal dans le dossier du projet et exécutez :

```bash
# 1. Initialiser le repository Git
git init

# 2. Ajouter le remote GitHub
git remote add origin https://github.com/MahmoudKarabaka/EntrepriseBenAmer.git

# 3. Ajouter tous les fichiers
git add .

# 4. Configurer votre identité (remplacez par vos vraies informations)
git config user.name "MahmoudKarabaka"
git config user.email "votre-email@example.com"

# 5. Faire le premier commit
git commit -m "Initial commit: Site Next.js Ben Ameur Tournage - Landing page professionnelle"

# 6. Créer la branche main
git branch -M main

# 7. Pousser vers GitHub
git push -u origin main
```

## 🔐 Authentification GitHub

Si c'est la première fois que vous poussez :

1. GitHub vous demandera vos identifiants
2. Utilisez votre **nom d'utilisateur** et un **Personal Access Token** (pas votre mot de passe)
3. Pour créer un token : https://github.com/settings/tokens

## ✅ Vérification

Après le push, vérifiez sur :
https://github.com/MahmoudKarabaka/EntrepriseBenAmer

## 🎯 Prochaines Étapes

Une fois sur GitHub, vous pouvez :
- ✅ Déployer sur Vercel (recommandé pour Next.js)
- ✅ Collaborer avec d'autres développeurs
- ✅ Gérer les versions du projet

---

**Besoin d'aide ?** Consultez la documentation Git : https://git-scm.com/doc

