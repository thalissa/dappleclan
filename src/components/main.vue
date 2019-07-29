<template lang="pug">
  body
    .header
      .logoContainer
        img.logo(src="../assets/img/logo.jpg")
    
      .headerText
        a
          h2
            router-link(to="/") DappleClan
        h4 07/24/2009 - 08/2011
        h5 Where love leads you home . . .
    .navbar
      a.nav
        router-link(to="/") Home
      a.nav
        router-link(to="/hollow") DappleClan Hollow
      a.nav
        router-link(to="/territory") DappleClan Territory
      a.nav DappleClan Information
        .subnav
          a.nav
            router-link(to="/rulesandterms") Rules & Terms
          a.nav
            router-link(to="/characteraging") Character Aging
          a.nav
            router-link(to="/nameguide") Name Guide
      a.nav(href="https://spottedstorm4.webs.com/apps/forums/") Forums / Discussions
      a.nav(href="https://discord.gg/BA9j5Sa") Discord Server

    .view
      router-view
</template>

<style lang="stylus">
  html
    background #000 url(../assets/img/bluebg.png) repeat
    color #333
    margin-left 100px
    margin-right 100px
    font-size 11pt
  
  body
    margin 0px
    margin-bottom 5px
    background-color #FFF
    border-radius 15px
  
  h1
    font-size 25pt
  
  h2
    font-size 20pt
  
  h3
    font-size 16pt
  
  h4
    font-size 13pt
  
  h5
    font-size 10pt
  
  .content
    padding 10px
  
  .navbar
    display flex
    flex-direction row
    flex-grow 1
    justify-content center
    flex-wrap wrap
    margin-bottom 20px
  
  .nav
    flex-grow 0
    align-self right
    background-color #999
    margin 5px
    border 1px #333 solid
    border-radius 10px
    padding 5px
    color #CCC
    font-size 15pt
  
  .subnav
    display none
    position relative
  
  .nav:hover>.subnav
    display flex
    flex-direction column
    position absolute
    margin-top 5px
  
  .subnav>.nav
    margin 2px

  a, a:visited, a:hover, .nav
    color #28485a
  
  .nav:hover, .nav:hover>a
    color #FFF
    background #28485a

  .header
    width 100%
    display flex
    flex-grow 1
    flex-shrink 1
    flex-direction row
    background #000 url(../assets/img/bluebg.png) repeat
  
  .logoContainer
    flex-grow 0
  
  .logo
    width 100%
    height auto
    min-width 368px
  
  .headerText
    flex-grow 1
    display block
    min-width 250px
    flex-direction column
    text-align center
    color #FFF
  
  .headerText h2, .headerText h4
    margin-inline-start 0px
    margin-inline-end 0px
    margin 0px
  
  .headerText h5
    font-style italic
  
  .headerText a, .headerText a:visited, .headerText a:hover
    color #FFF
    text-decoration none
  
  @media (max-width: 870px)
    html
      margin-left 10px
      margin-right 10px
  
    body
      min-width 375px
    
    .header
      flex-direction column
  
  h1, h2, h3, h4, h5
    font-weight normal
</style>

<script>
  export default {
      props: [ ]
  };
</script>
