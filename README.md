# vue-gestion-tache

## Description

Développer une application web de gestion des tâches et des projets en utilisant Vue.js 3 et la
Composition API. La gestion des états doit être réalisée avec Pinia, et la navigation entre les
différentes sections (Tâches, Projets) est géré avec Vue Router. L'interface utilisateur
est stylé avec Bootstrap.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- VueJS `npm create vite@latest`
- vue-router `npm install vue-router@next`
- vue-pinia `npm install pinia`
- Bootstrap `npm install bootstrap`
- PopperJS `npm install @poperjs/core`


## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. **Clonez le repository :**

    ```bash
    git clone https://github.com/mariem2012/vue-gestion-tache.git
    ```

2. **Accédez au dossier du projet :**

    ```bash
    cd vue-gestion-tache
    ```

3. **Installez les dépendances :**

    ```bash
    npm install
    ```

## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```bash
npm run dev
```
## Les fonctionalités

1. **Taches :** 

 - Fonction : addTache({nom(string),description(string), date_debut(date), date_fin(date), projet(string)})
 cette fonction permet d'ajouter une tache.
    
 - Fonction : deleteTache(id)
 cette fonction permet d'effacer une tache à partir de son id.
 
 - Fonction : updateTache ({nom(string), description(string), date_debut(date), date_fin(date), projet(string)})
 cette fonction permet de modifier une tache.

2. **Projets :**

 - Fonction : addProjet({nom(string), date_debut(date), date_fin(date), })
 cette fonction permet d'ajouter un projet.
    
 - Fonction : deleteProjet(id)
 cette fonction permet d'effacer un projet à partir de son id.

- Fonction : updateProjet ({nom(string), date_debut(date), date_fin(date)})
 cette fonction permet de modifier un projet.

## Authors
 - [Ousmane Ibrahima Ly](https://github.com/Ousmanly)
 - [Mariem Boudallaye Dianifaba](https://github.com/mariem2012)

