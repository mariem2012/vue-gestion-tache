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
    ]
  }),

  actions: {
    addTache(tache) {
      this.taches.push(tache)
    },
    deleteTache(id) {
      this.taches.splice(id, 1);
    },
    addProjet(projet) {
      this.projets.push(projet);
    },
    deleteProjet(id) {
      this.projets.splice(id, 1);
    },
  },
})
