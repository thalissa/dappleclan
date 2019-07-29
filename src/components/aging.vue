<template lang="pug">
  .content
    .agingTable
      table
        tr
          td Real Time
          td RP Time
        tr
          td One Moon (Month)
          td One Season (Year)
        tr
          td One week
          td One month

      table
        tr
          td Kit
          td 1 to 6 Moons
        tr
          td Apprentice
          td 6 Moons to 1 Season
        tr
          td Warrior
          td 1 Season to 3 Seasons
        tr
          td Senior Warrior
          td 3 Seasons to 5 Seasons
        tr
          td Elder
          td 6 Seasons+
</template>

<style lang="stylus" scoped>
  .agingTable
    display flex
    justify-content center
  
  h2
    margin 0px
    margin-bottom 5px
    margin-top 15px
  
  table
    margin 15px
  
  td
    border 1px #333 solid
    padding 5px
</style>

<script>
  export default {
      props: [ ]
  };
</script>
