import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useGestionStore = defineStore("gestion", {
  state: () => ({
    taches: [
      {
        id : 1,
        nom: "README",
        description: "redaction du fichier",
        date_debut: "2024-10-22",
        date_fin: "2024-10-22",
        projet: "Projet A",
      },
    ],
    
    projets: [
      {
        id:1,
        nom: "Projet A",
        date_debut: "2024-10-11",
        date_fin: "2024-10-22",
      },
      {
        id:2,
        nom: "Projet B",
        date_debut: "2024-10-11",
        date_fin: "2024-11-22"
      }
    ],
    nextId: 2,
    nextIdP :3
  }),

  actions: {
    addTache(tache) {
      tache.id = this.nextId++;
      this.taches.push(tache)
    },
      deleteTache(id) {
        const index = this.taches.findIndex(tache => tache.id === id);
        if (index !== -1) {
          this.taches.splice(index, 1);
        }
      },
    updateTache(updatedTache) {
      const index = this.taches.findIndex(tache => tache.id === updatedTache.id);
      if (index !== -1) {
        this.taches[index] = updatedTache;
      }
    },

    
    addProjet(projet) {
      projet.id = this.nextIdP++;
      this.projets.push(projet);
    },
    deleteProjet(id) {
      const index = this.projets.findIndex(projet => projet.id === id);
      if (index !== -1) {
        this.projets.splice(index, 1);
      }
    },
    updateProjet(updatedProjet) {
      const index = this.projets.findIndex(p => p.id === updatedProjet.id);
      if (index !== -1) {
        this.projets[index] = updatedProjet;
      }
    },
  }
})
