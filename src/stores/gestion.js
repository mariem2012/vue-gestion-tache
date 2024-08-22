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
        nom: "Projet A",
        date_debut: "2024-10-11",
        date_fin: "2024-10-22",
      },
      {
        nom: "Projet B",
        date_debut: "2024-10-11",
        date_fin: "2024-11-22"
      }
    ],
    nextId: 2
  }),

  actions: {
    addTache(tache) {
      tache.id = this.nextId++;
      this.taches.push(tache)
    },
    deleteTache(id) {
      this.taches.splice(id, 1);
    },
    updateTache(updatedTache) {
      const index = this.taches.findIndex(tache => tache.id === updatedTache.id);
      if (index !== -1) {
        this.taches[index] = updatedTache;
      }
    },
    addProjet(projet) {
      this.projets.push(projet);
    },
    deleteProjet(id) {
      this.projets.splice(id, 1);
    },
  },
})
