# 🚀 Guide de Déploiement

## Déploiement sur Vercel (Recommandé)

1. **Connectez votre compte GitHub** sur [Vercel](https://vercel.com)
2. **Importez le repository** `MahmoudKarabaka/EntrepriseBenAmer`
3. **Vercel détectera automatiquement** Next.js
4. **Cliquez sur Deploy**
5. Votre site sera en ligne en quelques minutes !

## Installation Locale

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build

# Lancer en production
npm start
```

## Variables d'Environnement (si nécessaire)

Créez un fichier `.env.local` pour les variables d'environnement :

```env
NEXT_PUBLIC_SITE_URL=https://votre-site.com
```

## 📝 Notes

- Le site utilise Next.js 14 avec App Router
- Tailwind CSS pour les styles
- TypeScript pour le typage
- Images optimisées automatiquement par Next.js

---

**Le site est prêt à être déployé !** 🎉

