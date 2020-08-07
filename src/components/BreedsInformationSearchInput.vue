<template>
      <div class="breedsInformation__search">
            <label for="breedOfCats" class="breedsInformation__search__label">Search by breed:</label>
            <input id="breedOfCats"
            name="breedOfCats"
            class="breedsInformation__search__input"
            :value="value"
            @input="handleChange"
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
        align-items: center;
        text-align: left;

        &__label{
            text-align: center;
        }
        &__input{
            height: 2em;
            width: 80%;
            border-radius: 3em 3em;
            border-color: #7699D4;
            outline: none;
            padding: .25em;
            margin: .5em 0;
            font-size: 1em;
            color: #2c3e50;
            font-family: 'Noto Sans JP', sans-serif;
        }
    }
</style>
