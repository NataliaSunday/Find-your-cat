<template>
    <div class="breedsInformation">
      <BreedsInformationSearchInput v-model="breedValue" @input="handleInput"/>
       <BreedsInformationSearchItem v-for="item in results" :item="item" :key="item.id"/>
    </div>
</template>

<script>
import axios from 'axios'
import { debounce } from 'vue-debounce'
import BreedsInformationSearchInput from '@/components/BreedsInformationSearchInput.vue'
import BreedsInformationSearchItem from '@/components/BreedsInformationSearchItem.vue'

const API = 'https://api.thecatapi.com/v1/'

export default {
  name: 'BreedsInformation',
  components: {
    BreedsInformationSearchInput,
    BreedsInformationSearchItem
  },
  data () {
    return {
      breedValue: '',
      results: [] // array of obcjects and their properties (cats)
    }
  },

  methods: {
    handleInput: debounce(function () {
      axios.get(`${API}breeds/search?q=${this.breedValue}`)
        .then((response) => {
          console.log(response)
          this.results = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }, 500)
  }
}
</script>

<style lang="scss" scoped>
    .breedsInformation{
        width: 100%;
        display: flex;
        margin: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
}
</style>
