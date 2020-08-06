<template>
    <div class="breedsInformation__search">
            <label for="breedOfCats" class="breedsInformation__search__label">Search by breed:</label>
            <input id="breedOfCats"
            name="breedOfCats"
            class="breedsInformation__search__input"
            :value="breedValue"
            @input="handleInput"
            />
        </div>
</template>

<script>
export default {
  name: 'BreedsInformationSearchInput',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    handleChange (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>

.breedsInformation__search{
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

</style>
