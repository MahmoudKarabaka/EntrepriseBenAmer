#!/usr/bin/env python3
"""
Script pour télécharger des images depuis le web et les placer dans le site
Usage: python download-images.py
"""

import os
import requests
from urllib.parse import urlparse
import json

# Configuration des dossiers
FOLDERS = {
    'tournage': 'images/tournage',
    'fraisage': 'images/fraisage',
    'soudure': 'images/soudure',
    'confection-reparation': 'images/confection-reparation',
    'grands-engins': 'images/grands-engins'
}

# Noms des fichiers
FILE_NAMES = {
    'tournage': ['tournage1', 'tournage2', 'tournage3'],
    'fraisage': ['fraisage1', 'fraisage2', 'fraisage3'],
    'soudure': ['soudure1', 'soudure2', 'soudure3'],
    'confection-reparation': ['confection1', 'confection2', 'confection3'],
    'grands-engins': ['engin1', 'engin2', 'engin3']
}

def get_file_extension(url):
    """Détermine l'extension du fichier depuis l'URL"""
    parsed = urlparse(url)
    path = parsed.path
    ext = os.path.splitext(path)[1].lower()
    
    # Si pas d'extension, essayer de détecter depuis le Content-Type
    if not ext or ext not in ['.jpg', '.jpeg', '.png', '.webp', '.gif']:
        return '.jpg'  # Par défaut
    return ext

def download_image(url, save_path):
    """Télécharge une image depuis une URL"""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=30, stream=True)
        response.raise_for_status()
        
        # Vérifier que c'est bien une image
        content_type = response.headers.get('content-type', '')
        if 'image' not in content_type:
            print(f"⚠️  L'URL ne semble pas être une image: {content_type}")
            return False
        
        # Télécharger l'image
        with open(save_path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        
        file_size = os.path.getsize(save_path) / 1024  # KB
        print(f"✅ Téléchargé: {save_path} ({file_size:.1f} KB)")
        return True
        
    except requests.exceptions.RequestException as e:
        print(f"❌ Erreur lors du téléchargement: {e}")
        return False
    except Exception as e:
        print(f"❌ Erreur: {e}")
        return False

def main():
    print("=" * 60)
    print("📥 Téléchargement d'Images pour le Site Web")
    print("=" * 60)
    print()
    
    # Afficher les catégories disponibles
    print("Catégories disponibles:")
    for i, category in enumerate(FOLDERS.keys(), 1):
        print(f"  {i}. {category}")
    print()
    
    # Demander la catégorie
    while True:
        try:
            choice = input("Choisissez une catégorie (numéro): ").strip()
            category = list(FOLDERS.keys())[int(choice) - 1]
            break
        except (ValueError, IndexError):
            print("❌ Choix invalide. Réessayez.")
    
    print(f"\n📁 Catégorie sélectionnée: {category}")
    print(f"📂 Dossier: {FOLDERS[category]}")
    print()
    
    # Afficher les fichiers disponibles
    print("Fichiers disponibles dans cette catégorie:")
    for i, file_name in enumerate(FILE_NAMES[category], 1):
        print(f"  {i}. {file_name}")
    print()
    
    # Demander quel fichier remplacer
    while True:
        try:
            file_choice = input("Quel fichier voulez-vous remplacer? (numéro): ").strip()
            file_index = int(file_choice) - 1
            file_name = FILE_NAMES[category][file_index]
            break
        except (ValueError, IndexError):
            print("❌ Choix invalide. Réessayez.")
    
    # Demander l'URL
    print()
    url = input("Entrez l'URL de l'image à télécharger: ").strip()
    
    if not url.startswith(('http://', 'https://')):
        print("❌ URL invalide. Doit commencer par http:// ou https://")
        return
    
    # Créer le dossier s'il n'existe pas
    folder_path = FOLDERS[category]
    os.makedirs(folder_path, exist_ok=True)
    
    # Déterminer l'extension
    ext = get_file_extension(url)
    if ext not in ['.jpg', '.jpeg', '.png', '.webp']:
        ext = '.jpg'  # Par défaut
    
    # Chemin de sauvegarde
    save_path = os.path.join(folder_path, f"{file_name}{ext}")
    
    print()
    print(f"📥 Téléchargement en cours...")
    print(f"   URL: {url}")
    print(f"   Destination: {save_path}")
    print()
    
    # Télécharger
    if download_image(url, save_path):
        print()
        print("=" * 60)
        print("✅ Téléchargement réussi!")
        print(f"📁 Fichier sauvegardé: {save_path}")
        print("=" * 60)
        print()
        print("💡 L'image sera automatiquement affichée sur le site web!")
    else:
        print()
        print("❌ Échec du téléchargement")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n⚠️  Téléchargement annulé par l'utilisateur")
    except Exception as e:
        print(f"\n❌ Erreur: {e}")


