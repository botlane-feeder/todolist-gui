# TodoList-GUI

TodoList-GUI est un projet à but de formations, pour comprendre et appréhender le développement front par SvelteJS

SvelteJS est un framework JS, qui permet de gérer les vues d'une application web.
L'intérêt et l'avantage de Svelte, c'est qu'il est simple et ne fait que créer des fichiers JS et CSS optimisés à partir des fichiers et composants Svelte.

## Lancement du projet

*Vérifier que vous remplissez bien les prérequis technologiques*
Installer toutes les dépendances du projet :  
```bash
npm install
```

Lancer le serveur Vite pour accéder à la GUI
```bash
npm run dev
```

La documentation du projet se trouve [ici](docs/index.md)

## Prerequis

- NPM
- Docker

Installation de NPM :  
La procédure actuelle est d'installer NVM (node version manager), puis d'installer NodeJS (appelé Node), qui installera également NPM
Pour cela, le mieux est de passer par la documentation de NPM :
- [Documentation NPM](https://nodejs.org/en/download/package-manager)


Installation de Docker :  
Il faudra quoiqu'il arrive installer Docker. C'est un effort initial que de l'utiliser, mais cela permettra de gagner beaucoup de temps dans toutes les étapes de mise en production.
Pour cela, le mieux est de passer par le script de Docker que l'on retrouve dans sa propre documentation : 
- [Documentation Docker](https://docs.docker.com/engine/install/ubuntu/)


## Création d'un projet

Pour créer un projet SvelteJS installer `npx sv create ${appName}`

Lors de la création d'un projet Svelte, vous avez 3 possibilités :
- SvelteKit demo app : une application de démo
- Skeleton project : juste ce qu'il faut pour pouvoir monter un application web SvelteJS
- Library project : juste ce qu'il faut pour pouvoir créer un "module" Svelte ?

Activer le typescript pour faciliter le développement et la stabilité des composants

Ou bien en une seule ligne : `npx sv create --template demo --types ts --no-add-ons ${appName}`