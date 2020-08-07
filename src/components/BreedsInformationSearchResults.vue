<template>
    <li class="breedsInformation__resultsList__item">{{ item.name }}</li>
</template>

<script>
export default {
  name: 'BreedsInformationSearchResult',
  props: {
    item: {
      typeof: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
      .breedsInformation__resultsList__item{
        color: #EAAADD;
        cursor: pointer;
        padding: .5em;
      }
      .breedsInformation__resultsList__item:nth-child(2n+0){
        color:  #480355;
      }

</style>
