<template>
  <div>
    <h2>Détails du Projet</h2>
    <p><strong>Nom :</strong> {{ livreDetail.nom }}</p>
    <p><strong>Date debut :</strong> {{ livreDetail.auteur }}</p>
    <p><strong>Date fin :</strong> {{ livreDetail.auteur }}</p>
    <button class="btn btn-secondary" @click="$emit('fermer')">Fermer</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  projetDetail: Object
});

const emit = defineEmits(['fermer']);
</script>

<style scoped>
</style>
