<template>
    <div class="breedsInformation">
        <div class="breedsInformation__search">
            <label for="breedOfCats"></label>
            <input list="breedOfCats" id="breedOfCats" name="breedOfCats"/>
            <datalist id="breedOfCats">

            </datalist>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BreedsInformation'
}
</script>

<style lang="scss" scoped>
    .breesdInformation{
        width: 100%;
        padding: 1em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #DDEAFB;

    &__search{
        color: chartreuse;
    }
}
</style>
