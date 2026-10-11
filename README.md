<div align="center">

# 🎬 CinéMatch AI

**Découvrez le film qui correspond à vos goûts.**

Application web de découverte de films : recherche instantanée, filtres par genre, fiches détaillées et favoris.

[![Démo en ligne](https://img.shields.io/badge/D%C3%A9mo-en%20ligne-black?style=for-the-badge&logo=vercel)]([https://VOTRE-URL.vercel.app](https://cinematch-ai-delta-five.vercel.app/))
[![CI](https://github.com/asmaguenaien/cinematch-ai/actions/workflows/ci.yml/badge.svg)](https://github.com/asmaguenaien/cinematch-ai/actions/workflows/ci.yml)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

</div>

<!-- Ajoutez ici une capture d'écran de la démo :
![Aperçu](./docs/screenshot.png) -->

## ✨ Fonctionnalités

- 🔎 **Recherche instantanée** par titre, réalisateur ou genre
- 🏷️ **Filtres par genre** (Action, Drame, Science-Fiction, Thriller, Comédie…)
- 🎞️ **Carrousels thématiques** : Tendances, Nouveautés, Action, Drame, Comédie, Science-Fiction
- ⭐ **Film à la une** et fiches détaillées (synopsis, note, réalisateur)
- ❤️ **Favoris** sauvegardés dans le navigateur (`localStorage`)
- 📱 **Interface responsive**, thème sombre

## 🛠️ Stack technique

| Domaine | Outils |
| --- | --- |
| Framework | React 18 + TypeScript |
| Build | Vite |
| UI | Tailwind CSS, shadcn/ui (Radix UI), Lucide |
| Routing / données | React Router, TanStack Query |
| Qualité | ESLint, Vitest, GitHub Actions |
| Déploiement | Vercel |

## 🚀 Lancer le projet en local

```bash
git clone https://github.com/asmaguenaien/cinematch-ai.git
cd cinematch-ai
npm install
npm run dev
```

L'application est disponible sur http://localhost:8080.

### Scripts

| Commande | Description |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run preview` | Prévisualiser le build |
| `npm run lint` | Analyse ESLint |
| `npm test` | Tests unitaires (Vitest) |

## 📁 Structure

```
src/
├── components/   # Composants UI (MovieCard, MovieModal, carrousels…)
├── data/         # Catalogue de films (movies.ts)
├── hooks/        # Hooks personnalisés
├── pages/        # Pages (Index, NotFound)
└── lib/          # Utilitaires
```

## 🗺️ Feuille de route

- [ ] Brancher l'API TMDB pour un catalogue complet et à jour
- [ ] Recommandations personnalisées par IA à partir des favoris
- [ ] Comptes utilisateurs et synchronisation des favoris
- [ ] Bandes-annonces et plateformes de streaming

## 📄 Licence

Distribué sous licence MIT. Voir [LICENSE](./LICENSE).

## 👤 Auteure

**Asma Guenaien** — [GitHub](https://github.com/asmaguenaien)

*Les affiches et métadonnées de films proviennent de [TMDB](https://www.themoviedb.org/). Ce produit utilise l'API TMDB mais n'est ni approuvé ni certifié par TMDB.*
