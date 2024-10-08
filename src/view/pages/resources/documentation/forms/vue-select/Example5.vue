<script setup lang="ts">
import CodeHighlighter2 from '@/view/content/highlighters/CodeHighlighter2.vue'
import Multiselect from '@vueform/multiselect'
import { ref } from 'vue'

const example5 = ref({
  value: null,
  placeholder: 'Select your character',
  label: 'name',
  options: [
    {
      value: 'captainamerica',
      name: 'Captain America',
      icon:
        'https://cdn2.iconfinder.com/data/icons/avengers-filled/48/03_-_Captain_America_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png',
    },
    {
      value: 'spiderman',
      name: 'Spiderman',
      icon:
        'https://cdn2.iconfinder.com/data/icons/avengers-filled/48/12_-_Spiderman_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png',
    },
    {
      value: 'ironman',
      name: 'Iron Man',
      icon:
        'https://cdn2.iconfinder.com/data/icons/avengers-filled/48/02_-_IRONMAN_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png',
    },
  ],
})

const htmlCode = `<Multiselect
          v-model="example5.value"
          v-bind="example5"
      >
        <template v-slot:singlelabel="{ value }">
          <div class="multiselect-single-label">
            <img class="character-label-icon" :src="value.icon"> {{ value.name }}
          </div>
        </template>

        <template v-slot:option="{ option }">
          <img class="character-option-icon" :src="option.icon"> {{ option.name }}
        </template>
      </Multiselect>`

const jsCode = `const example5 = ref({
      value: null,
      placeholder: "Select your character",
      label: "name",
      options: [
        {
          value: "captainamerica",
          name: "Captain America",
          icon:
            "https://cdn2.iconfinder.com/data/icons/avengers-filled/48/03_-_Captain_America_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png"
        },
        {
          value: "spiderman",
          name: "Spiderman",
          icon:
            "https://cdn2.iconfinder.com/data/icons/avengers-filled/48/12_-_Spiderman_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png"
        },
        {
          value: "ironman",
          name: "Iron Man",
          icon:
            "https://cdn2.iconfinder.com/data/icons/avengers-filled/48/02_-_IRONMAN_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png"
        }
      ]
    });`
</script>

<template>
  <!-- begin::Section -->
  <div class="pb-10">
    <!-- begin::Heading -->
    <h1 id="overview" class="anchor fw-bolder mb-5">
      <a href="#example5" />
      Select with custom options slot
    </h1>
    <!-- end::Heading -->
    <!-- begin::Block -->
    <div class="py-5">
      <div class="bg-dark text-white rounded-1 mb-2 p-3">
        Data: {{ example5.value }}
      </div>
      <Multiselect v-model="example5.value" v-bind="example5">
        <template #singlelabel="{ value }">
          <div class="multiselect-single-label">
            <img class="character-label-icon" :src="value.icon">
            {{ value.name }}
          </div>
        </template>

        <template #option="{ option }">
          <img class="character-option-icon" :src="option.icon">
          {{ option.name }}
        </template>
      </Multiselect>
      <CodeHighlighter2>
        <template #html>
          {{ htmlCode }}
        </template>
        <template #js>
          {{ jsCode }}
        </template>
      </CodeHighlighter2>
    </div>
    <!-- end::Block -->
  </div>
  <!-- end::Card -->
</template>

<style scoped>
.character-option-icon {
  margin: 0 6px 0 0;
  height: 22px;
}

.character-label-icon {
  margin: 0 6px 0 0;
  height: 26px;
}
</style>
