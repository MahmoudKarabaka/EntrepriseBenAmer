# Script PowerShell pour pousser le projet sur GitHub
# Exécutez ce script après avoir installé Git

Write-Host "🚀 Push vers GitHub - Ben Ameur Tournage" -ForegroundColor Cyan
Write-Host ""

# Vérifier si Git est installé
try {
    $gitVersion = git --version
    Write-Host "✅ Git détecté: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git n'est pas installé !" -ForegroundColor Red
    Write-Host "📥 Téléchargez Git depuis: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Après l'installation, redémarrez ce script." -ForegroundColor Yellow
    exit
}

Write-Host ""
Write-Host "📋 Étapes du push:" -ForegroundColor Cyan
Write-Host ""

# Initialiser Git si nécessaire
if (-not (Test-Path .git)) {
    Write-Host "1️⃣  Initialisation du repository Git..." -ForegroundColor Yellow
    git init
    Write-Host "✅ Repository initialisé" -ForegroundColor Green
} else {
    Write-Host "✅ Repository Git déjà initialisé" -ForegroundColor Green
}

# Ajouter le remote
Write-Host ""
Write-Host "2️⃣  Configuration du remote GitHub..." -ForegroundColor Yellow
$remoteExists = git remote get-url origin 2>$null
if ($LASTEXITCODE -ne 0) {
    git remote add origin https://github.com/MahmoudKarabaka/EntrepriseBenAmer.git
    Write-Host "✅ Remote ajouté" -ForegroundColor Green
} else {
    Write-Host "✅ Remote déjà configuré: $remoteExists" -ForegroundColor Green
}

# Ajouter les fichiers
Write-Host ""
Write-Host "3️⃣  Ajout des fichiers..." -ForegroundColor Yellow
git add .
Write-Host "✅ Fichiers ajoutés" -ForegroundColor Green

# Configurer l'utilisateur (si nécessaire)
Write-Host ""
Write-Host "4️⃣  Configuration Git (si nécessaire)..." -ForegroundColor Yellow
$userName = git config user.name
if (-not $userName) {
    git config user.name "MahmoudKarabaka"
    Write-Host "✅ Nom d'utilisateur configuré" -ForegroundColor Green
} else {
    Write-Host "✅ Utilisateur: $userName" -ForegroundColor Green
}

# Commit
Write-Host ""
Write-Host "5️⃣  Création du commit..." -ForegroundColor Yellow
$commitMessage = "Initial commit: Site Next.js Ben Ameur Tournage - Landing page professionnelle avec formulaire revendeur"
git commit -m $commitMessage
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Commit créé" -ForegroundColor Green
} else {
    Write-Host "⚠️  Aucun changement à commiter" -ForegroundColor Yellow
}

# Créer la branche main
Write-Host ""
Write-Host "6️⃣  Configuration de la branche main..." -ForegroundColor Yellow
git branch -M main
Write-Host "✅ Branche main configurée" -ForegroundColor Green

# Push
Write-Host ""
Write-Host "7️⃣  Push vers GitHub..." -ForegroundColor Yellow
Write-Host "⚠️  Vous devrez peut-être entrer vos identifiants GitHub" -ForegroundColor Yellow
Write-Host ""
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅✅✅ Push réussi !" -ForegroundColor Green
    Write-Host "🌐 Votre site est maintenant sur GitHub:" -ForegroundColor Cyan
    Write-Host "   https://github.com/MahmoudKarabaka/EntrepriseBenAmer" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "📦 Prochaine étape: Déployez sur Vercel !" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "❌ Erreur lors du push" -ForegroundColor Red
    Write-Host "💡 Vérifiez vos identifiants GitHub" -ForegroundColor Yellow
}

