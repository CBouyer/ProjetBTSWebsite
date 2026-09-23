# ⚡ Site web – Projet de fin d'année BTS

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)

Application web permettant de visualiser sur une carte les capteurs de consommation électrique d'un ou plusieurs domiciles, avec des données réelles remontées via **The Things Network**.

> ⚠️ Ce site fonctionne de pair avec le **serveur d'application** du projet : [lien vers le dépôt du serveur]([https://github.com/CBouyer/NOM_DU_DEPOT_SERVEUR](https://github.com/CBouyer/projetBTS_serveurApplication))

---

## 📋 Présentation

Les données proviennent de capteurs physiques qui envoient leurs mesures sur le cloud The Things Network (TTN). Le site récupère ces valeurs, qui sont donc réelles et évoluent dans le temps.

L'interface est volontairement simple : l'objectif du projet est la partie fonctionnelle plutôt que l'esthétique.

## ✨ Fonctionnalités

- **Authentification obligatoire** : une page de connexion protège l'accès à toutes les pages grâce au système de routage.
- **Deux profils** : l'affichage diffère selon que l'on est connecté en tant qu'utilisateur ou administrateur.
- **Carte interactive** : visualisation de tous les capteurs de l'utilisateur, avec leur localisation et leur consommation.
- **Page de détail par capteur** : graphique retraçant l'historique de la consommation électrique (d'une maison, par exemple).

## 🛠️ Technologies

| Outil | Rôle |
|-------|------|
| React | Interface utilisateur |
| TypeScript | Typage du code |
| Vite | Serveur de développement et build |
| The Things Network | Source des données des capteurs |

## 🚀 Installation

Prérequis : [Node.js](https://nodejs.org/) installé, et le serveur d'application lancé.

```bash
git clone https://github.com/CBouyer/ProjetBTSWebsite.git
cd ProjetBTSWebsite
npm install
npm run dev
```

Le site est ensuite accessible à l'adresse indiquée dans le terminal (par défaut `http://localhost:5173`).

## 📸 Aperçu

<!-- Ajoute tes captures d'écran ici, par exemple : -->
<!-- ![Page de connexion](docs/connexion.png) -->
<!-- ![Carte des capteurs](docs/carte.png) -->

## 💬 À propos

C'était mon premier projet avec React et TypeScript : le code comporte sûrement des axes d'amélioration. Si vous souhaitez en discuter, n'hésitez pas à me contacter par mail : **corentinbouyer456@gmail.com**

Ce site n'a pas vocation à remplacer des solutions professionnelles existantes : c'est avant tout un outil d'entraînement et d'apprentissage d'une nouvelle technologie.
