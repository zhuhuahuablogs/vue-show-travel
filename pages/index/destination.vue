<template>
  <div id="destination">
    <div class="bg_img">
      <a href="">
        <img src="../../assets/img/bg_img.jpeg" alt="" class="main_img">
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    name:'destination',
    data(){
      return{
        message:''
      }
    },
    mounted(){
      let $headerNav = $('#headerNav')
      $headerNav.find('a,h1').css({
        color:'#fff'
      })
  /*    $headerNav.find('.headerNav-box').hover(function () {
        console.log("??")
          $(this).css({
            background:'#fff'
          });
          $headerNav.find('a').css({
            color:'#333333'
          });
          $headerNav.find('h1').css({
            color:'darkslategrey'
          })
      },function () {
        $(this).css({
          background:'initial'
        })
        $headerNav.find('a,h1').css({
          color:'#fff'
        })
      })*/
    },
    destroyed(){
      let $headerNav = $('#headerNav')
      $headerNav.find('a').css({
        color:'#333333'
      });
      $headerNav.find('h1').css({
        color:'darkslategrey'
      });

      $headerNav.find('.headerNav-box').unbind('mouseenter').unbind('mouseleave');
    }

  }
</script>
<style lang="less">
  #destination{
    margin-top: -73px;
    .bg_img{
      width: 100%;
      height: 800px;
      a{
        display: block;
        height: 840px;
        width: 100%;
        overflow: hidden;
        .main_img{
          width: 100%;
          height: auto;
        }
      }
    }

  }

</style>
