<template>
    <div class="breedsInformation">
        <div class="breedsInformation__search">
            <label for="breedOfCats" class="breedsInformation__search__label">Search by breed:</label>
            <input id="breedOfCats"
            name="breedOfCats"
            class="breedsInformation__search__input"
            v-model="breedValue"
            @input="handleInput"
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { debounce } from 'lodash.debounce'

const API = ' https://api.thecatapi.com/v1/breeds/search?q='

export default {
  name: 'BreedsInformation',
  data () {
    return {
      breedValue: ''
    }
  },
  methods: {
    handleInput: debounce(function () {
      axios.get(`${API}${this.breedValue}`)
        .then((response) => {
          console.log(response)
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

    &__search{
        margin-top: 3em;
        display: flex;
        flex-direction: column;
        text-align: left;

        &__label{
            margin-bottom: .25em;
            text-align: center;
        }
        &__input{
            height: 2em;
            width: 80%;
            margin: 0 auto;
            border-radius: 3em 3em;
            border-color: #7699D4;
            outline: none;
            padding: .25em;
            font-size: 1em;
            color: #2c3e50;
            font-family: 'Noto Sans JP', sans-serif;
        }
    }
}
</style>
