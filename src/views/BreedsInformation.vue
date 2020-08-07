<template>
    <div class="breedsInformation">
      <BreedsInformationSearchInput v-model="value" @input="handleInput"/>
      <ul class="breedsInformation__resultsList">
         <BreedsInformationSearchResults v-for="item in results" :item = "item" :key="item.id" />
    </ul>
    </div>
</template>

<script>
import axios from 'axios'
import { debounce } from 'vue-debounce'
import BreedsInformationSearchInput from '@/components/BreedsInformationSearchInput.vue'
import BreedsInformationSearchResults from '@/components/BreedsInformationSearchResults.vue'

const API = 'https://api.thecatapi.com/v1/'

export default {
  name: 'BreedsInformation',
  components: {
    BreedsInformationSearchInput,
    BreedsInformationSearchResults
  },
  data () {
    return {
      value: '',
      results: [] // array of obcjects and their properties (cats)
    }
  },

  methods: {
    handleInput: debounce(function () {
      axios.get(`${API}breeds/search?q=${this.value}`)
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

        &__resultsList{
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
      }
</style>
