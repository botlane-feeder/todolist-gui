# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),  
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.0] - 2024-01-15

**Création de l'application et de ses trois composants.**

### ADD

- `OneTask.svelte` :
  - affiche une tâche, avec titre, description, date et done
  - permet de modifier le titre, la description ou l'attribut done d'une tâche
  - permet de supprimer une tâche
- `Switch.svelte` : affiche un switch dont le done est $bindable()
- `TaskList.svelte` :
  - récupère la liste de tâche, instancie un à un les `OneTask`
  - permet de créer une tâche
- `apiRequest.ts` : contient les requêtes fecth pour dialoguer avec le serveur
- `+page.ts` : récupère la liste de tâches en pre-chargement
- `types.ts` : définit les types spécifiques du projet