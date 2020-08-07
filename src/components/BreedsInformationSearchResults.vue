<template>
    <ul class="breedsInformation__resultsList">
        <li class="breedsInformation__resultsList__item">
            <p> {{ item.name }} </p>
        </li>
    </ul>
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
.breedsInformation__resultsList{
      list-style-type: none;
      padding: 0;
      margin: 0;
      &__item{
        color: #EAAADD;
        cursor: pointer;
      }
      &__item:nth-child(2n+0){
        color:  #480355;
      }
    }
</style>
