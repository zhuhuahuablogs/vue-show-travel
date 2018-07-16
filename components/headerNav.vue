<template>
  <div id="headerNav">
    <div class="headerNav-box">
       <nav id="nav" class="clearfix main_div">
         <div class="head-logo fl">
           <h1>旅游网</h1>
           <!--<img src="~assets/img/default.jpg" alt="logo"/>-->
         </div>
         <ul class="clearfix fl">
           <li style="list-style: none" :class="routerActive=='/'?'active':''" @click="gotoRoute('/')"><a href="javascript:void (0)">首页</a></li>
           <li style="list-style: none" :class="routerActive=='/destination'?'active':''" @click="gotoRoute('/destination')"><a href="javascript:void (0)">目的地</a></li>
           <li style="list-style: none" :class="routerActive=='/Raiders'?'active':''" @click="gotoRoute('/Raiders')"><a href="javascript:void (0)">旅游攻略</a></li>
           <li style="list-style: none" :class="routerActive=='/Hotel'?'active':''" @click="gotoRoute('/Hotel')"><a href="javascript:void (0)">酒店</a></li>
           <li style="list-style: none" :class="routerActive=='/Question'?'active':''" @click="gotoRoute('/Question')"><a href="javascript:void (0)">问答区</a></li>
           <li style="list-style: none" :class="routerActive=='/notes'?'active':''" @click="gotoRoute('/notes')"><a href="javascript:void (0)">写游记</a></li>
         </ul>
         <ul class="clearfix fr">
           <li style="list-style: none" :class="routerActive=='/login'?'active':''" @click="gotoRoute('/login')"><a href="javascript:void (0)">登陆</a></li>
           <li style="list-style: none" class="line"><a href="javascript:void (0)">|</a></li>
           <li style="list-style: none" :class="routerActive=='/regisetr'?'active':''" @click="gotoRoute('/regisetr')"><a href="javascript:void (0)">注册</a></li>
         </ul>
       </nav>
    </div>
    <div class="headerH"></div>
  </div>
</template>

<script>
  export default {
    name:'headerNav',
    data(){
      return{
        message:'',
        routerActive:'/'
      }
    },
    methods:{
      gotoRoute(path){
        this.routerActive = path;
        this.$router.push({path:path});
      }
    }
  }
</script>
<style lang="less">
  #headerNav{
    .headerH{
      height: 73px;
    }
    .headerNav-box{
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1000;
      #nav{
        box-sizing: border-box;
        height: 68px;
        .head-logo{
          position: relative;
          img{
            width: 68px;
            height: auto;
          }
          h1{
            line-height: 68px;
            color: darkslategrey;
          }
        }
        ul{
          padding: 0;
          margin: 0;
          margin-left: 15px;
          li{
            background: none;
            float: left;
            a{
              color: #333333 ;
              line-height: 68px;
              height: 68px;
              display: inline-block;
              cursor: pointer;
              vertical-align: top;
              text-decoration: none;
              padding: 0 18px;
              overflow: hidden;
              font-size: 18px;
              &:hover{
                color:#ff9d00 ;
                border-bottom: 3px solid #ff9d00;
              }
            }
          }
          .line{
            a{
              padding: 0 !important;

            }
          }
        }
      }
      .active{
        background-color: #ff9d00 !important;
        a{
          color: #fff !important;
          &:hover{
            color:#fff !important;
            border-bottom: 3px solid #ff9d00;
          }
        }
      }
    }
  }
</style>

