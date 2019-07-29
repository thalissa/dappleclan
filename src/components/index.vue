<template lang="pug">
  .content
    .chat
      h2 DappleClan Discord
      h5
        a(href="https://discord.gg/BA9j5Sa") (Click here to join!)
      iframe(src="https://discordapp.com/widget?id=592529315199975434&theme=dark" width="300" height="350" allowtransparency="true" frameborder="0")

    .memories
      h2 DappleClan Leaders
      .leaders
        .leader
          .img
            img(src="../assets/img/spiritstar-song.png")
          .name Spiritstar (-song)
          .timeline 07/24/2009 to 09/06/2009
        .leader
          .img
            img(src="../assets/img/spottedstar-storm.png")
          .name Spottedstar (-storm)
          .timeline 09/06/2009 to 09/26/2009
        .leader
          .img
            img(src="../assets/img/bramblestar-song.png")
          .name Bramblestar (-song)
          .timeline 09/26/2009 to ??/??/2009
        .leader
          .img
            img(src="../assets/img/duskstar-wish.png")
          .name Duskstar (-wish)
          .timeline ??/??/2009 to 03/23/2010
        .leader
          .img
            img(src="../assets/img/sweetstar-song.png")
          .name Sweetstar (-song)
          .timeline 03/23/2010 to 05/30/2010
        .leader
          .img
            img(src="../assets/img/twisterstar-heart.png")
          .name Twisterstar (-heart)
          .timeline 06/06/2010 to 07/??/2010
        .leader
          .img
            img(src="../assets/img/heatherstar-stem.png")
          .name Heatherstar (-storm)
          .timeline 07/??/2010 to 09/??/2010
        .leader
          .img
            img(src="../assets/img/spiralingstar-song.png")
          .name Spiralingstar (-song)
          .timeline 09/??/2010 to 01/15/2011
        .leader
          .img
            img(src="../assets/img/hazelstar-gem.png")
          .name Hazelstar (-gem)
          .timeline 01/15/2011 to 08/??/2011
      
      h2 DappleClan Medicine Cats
      .medicineCats
        .medicineCat
          .img
            img(src="../assets/img/icedew.png")
          .name Icedew
          .timeline 07/24/2009 to 09/26/2009
        .medicineCat
          .img
            img(src="../assets/img/thundercloud.png")
          .name Thundercloud
          .timeline 09/26/2009 to ??/??/2009
        .medicineCat
          .img
            img(src="../assets/img/rainshimmer.png")
          .name Rainshimmer
          .timeline ??/??/2009 to ??/??/2010
        .medicineCat
          .img
            img(src="../assets/img/fatesong.png")
          .name Fatesong
          .timeline ??/??/2010 to ??/??/2011
        .medicineCat
          .img
            img(src="../assets/img/tigerflame.png")
          .name Tigerflame
          .timeline ??/??/2011 - 08/??/2011 
</template>

<style lang="stylus" scoped>
  h2
    margin 0px
    margin-top 20px
    margin-bottom 10px
  
  h5
    margin 0px
  
  .chat
    text-align center

  .memories
    display flex
    flex-direction column
    text-align center

  .leaders, .medicineCats
    display flex
    flex-direction row
    justify-content center
    margin 10px
    text-align center
    flex-wrap wrap
  
  .leader, .medicineCat
    flex-direction column
    justify-content center
    text-align center
    margin-left 15px
    margin-right 15px
    display flex
  
  .leader img, .medicineCat img
    text-align center
    max-width 100px
    border-radius 5px
   
  @media (max-width: 815px)
    .leader img, .medicineCat img
     max-width 50px

  .name
    font-size 13pt
  
  .timeline
    font-size 10pt
</style>

<script>
  export default {
      props: [ ]
  };
</script>
