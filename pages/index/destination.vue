<template>
  <div id="destination">
    <div class="bg_img">
      <a href="" class="big_img_box">
        <img src="../../assets/img/guilinMountain.jpeg" alt="" class="main_img">
      </a>
      <div class="area-search">
        <h2>Don't fear the unknown</h2>
        <div class="search-body clearfix">
          <input type="text" placeholder="" class="search-input">
          <button class="search-btn">
            <Icon type="ios-search-strong"></Icon>
          </button>
        </div>
        <div class="search-area-list">
          <a class="search-area-list-point">广州</a>
          <a class="search-area-list-point">深圳</a>
          <a>北京</a>
          <a>西安</a>
          <a>大理</a>
        </div>
      </div>

      <Icon type="chevron-down" class="point_bottom"></Icon>

      <div class="area-article-description">
          <h2>
            江南秘境|浙江“摄影之乡”丽水必去摄影点
          </h2>
        <p class="area-article-description-cut">
          瓯江帆影，渔舟唱晚，青山绿水，碧瓦白墙... ... 这是丽水留给人们的印象，而将丽水——这座江南小城秀丽山水、
          淳朴民风传播开来的正是摄影师的镜头，他们用影像将丽水推向来国际，而丽水也用独具的美景来回报每一位摄影人。
        </p>
        <span class="area-article-description-all">阅读全文</span>
      </div>
    </div>

    <div class="row-box main_div">
      <h2 class="row-title">热门目的地</h2>
      <div class="row-area-index">
        <a class="row-area-index-name">国内</a>
        <a class="row-area-index-name">港澳台</a>
        <a class="row-area-index-name">日本</a>
        <a class="row-area-index-name">东南亚</a>
        <a class="row-area-index-name">南亚 西亚</a>
        <a class="row-area-index-name">欧洲 美洲</a>
        <a class="row-area-index-name">澳洲 非洲</a>
      </div>
      <Row :gutter="16">
        <Col span="12">
        <div class="dd-area-box">
          <dl class="dd-area-index clearfix">
            <dt>直辖市</dt>
            <dd>北京</dd>
            <dd>上海</dd>
            <dd>重庆</dd>
            <dd>天津</dd>
          </dl>
        </div>

        <div class="dd-area-box">
          <dl class="dd-area-index clearfix">
            <dt>直辖市</dt>
            <dd>北京</dd>
            <dd>上海</dd>
            <dd>重庆</dd>
            <dd>天津</dd>
          </dl>
        </div>

        <div class="dd-area-box">
          <dl class="dd-area-index clearfix">
            <dt>直辖市</dt>
            <dd>北京</dd>
            <dd>上海</dd>
            <dd>重庆</dd>
            <dd>天津</dd>
          </dl>
        </div>
        <div class="dd-area-box">
          <dl class="dd-area-index clearfix">
            <dt>直辖市</dt>
            <dd>北京</dd>
            <dd>上海</dd>
            <dd>重庆</dd>
            <dd>天津</dd>
          </dl>
        </div>

        </Col>
        <Col span="12">
        <div class="dd-area-box">
          <dl class="dd-area-index clearfix">
            <dt>直辖市</dt>
            <dd>北京</dd>
            <dd>上海</dd>
            <dd>重庆</dd>
            <dd>天津</dd>
          </dl>
        </div>

        <div class="dd-area-box">
          <dl class="dd-area-index clearfix">
            <dt>直辖市</dt>
            <dd>北京</dd>
            <dd>上海</dd>
            <dd>重庆</dd>
            <dd>天津</dd>
          </dl>
        </div>

        <div class="dd-area-box">
          <dl class="dd-area-index clearfix">
            <dt>直辖市</dt>
            <dd>北京</dd>
            <dd>上海</dd>
            <dd>重庆</dd>
            <dd>天津</dd>
          </dl>
        </div>

        <div class="dd-area-box">
          <dl class="dd-area-index clearfix">
            <dt>直辖市</dt>
            <dd>北京</dd>
            <dd>上海</dd>
            <dd>重庆</dd>
            <dd>天津</dd>
          </dl>
        </div>
        </Col>
      </Row>
    </div>
    <div class="row-box main_div .row-bg">
      <h2 class="row-title">当季推荐</h2>
      <div class="row-area-index">
        <a class="row-area-index-season">1 月</a>
        <a class="row-area-index-season">2 月</a>
        <a class="row-area-index-season">3 月</a>
        <a class="row-area-index-season">4 月</a>
        <a class="row-area-index-season">5 月</a>
        <a class="row-area-index-season">6 月</a>
        <a class="row-area-index-season">7 月</a>
        <a class="row-area-index-season">8 月</a>
        <a class="row-area-index-season">9 月</a>
        <a class="row-area-index-season">10 月</a>
        <a class="row-area-index-season">11 月</a>
        <a class="row-area-index-season">12 月</a>
      </div>
      <Row :gutter="16">
        <Col span="6">
          <div class="area-img">
            <img src="~assets/img/seasion_population/bujidao.png" alt="">
            <div class="area-img-info">
                <p>黄山</p>
            </div>
          </div>
        </Col>
        <Col span="6">
        <div class="area-img">
          <img src="~assets/img/seasion_population/bujidao.png" alt="">
          <div class="area-img-info">
            <p>黄山</p>
          </div>
        </div>
        </Col>
        <Col span="6">
        <div class="area-img">
          <img src="~assets/img/seasion_population/bujidao.png" alt="">
          <div class="area-img-info">
            <p>黄山</p>
          </div>
        </div>
        </Col>
        <Col span="6">
        <div class="area-img">
          <img src="~assets/img/seasion_population/bujidao.png" alt="">
          <div class="area-img-info">
            <p>黄山</p>
          </div>
        </div>
        </Col>
        <Col span="6">
        <div class="area-img">
          <img src="~assets/img/seasion_population/bujidao.png" alt="">
          <div class="area-img-info">
            <p>黄山</p>
          </div>
        </div>
        </Col>
        <Col span="6">
        <div class="area-img">
          <img src="~assets/img/seasion_population/bujidao.png" alt="">
          <div class="area-img-info">
            <p>黄山</p>
          </div>
        </div>
        </Col>
        <Col span="6">
        <div class="area-img">
          <img src="~assets/img/seasion_population/bujidao.png" alt="">
          <div class="area-img-info">
            <p>黄山</p>
          </div>
        </div>
        </Col>
        <Col span="6">
        <div class="area-img area-more">
          <img src="~assets/img/seasion_population/bujidao.png" alt="">
          <div class="area-img-info">
            <p>更多 <Icon type="chevron-right"></Icon></p>
          </div>
        </div>
        </Col>
      </Row>
    </div>
    <div class="row-box main_div ">
      <h2 class="row-title">主题精选</h2>
      <div class="row-area-index">
        <a class="row-area-index-season">全年适宜</a>
        <a class="row-area-index-season">季节</a>
        <a class="row-area-index-season">出行方式</a>
        <a class="row-area-index-season">节假日</a>
      </div>
      <Row :gutter="16">
        <Col span="6">
        <div class="area-img">
          <img src="~assets/img/seasion_population/bujidao.png" alt="">
          <div class="area-img-info">
            <p>黄山</p>
          </div>
        </div>
        </Col>
        <Col span="6">
        <div class="area-img">
          <img src="~assets/img/seasion_population/bujidao.png" alt="">
          <div class="area-img-info">
            <p>黄山</p>
          </div>
        </div>
        </Col>
        <Col span="6">
        <div class="area-img">
          <img src="~assets/img/seasion_population/bujidao.png" alt="">
          <div class="area-img-info">
            <p>黄山</p>
          </div>
        </div>
        </Col>
        <Col span="6">
        <div class="area-img">
          <img src="~assets/img/seasion_population/bujidao.png" alt="">
          <div class="area-img-info">
            <p>黄山</p>
          </div>
        </div>
        </Col>
        <Col span="6">
        <div class="area-img">
          <img src="~assets/img/seasion_population/bujidao.png" alt="">
          <div class="area-img-info">
            <p>黄山</p>
          </div>
        </div>
        </Col>
        <Col span="6">
        <div class="area-img">
          <img src="~assets/img/seasion_population/bujidao.png" alt="">
          <div class="area-img-info">
            <p>黄山</p>
          </div>
        </div>
        </Col>
        <Col span="6">
        <div class="area-img">
          <img src="~assets/img/seasion_population/bujidao.png" alt="">
          <div class="area-img-info">
            <p>黄山</p>
          </div>
        </div>
        </Col>
        <Col span="6">
        <div class="area-img">
          <img src="~assets/img/seasion_population/bujidao.png" alt="">
          <div class="area-img-info">
            <p>黄山</p>
          </div>
        </div>
        </Col>
        <Col span="6">
        <div class="area-img">
          <img src="~assets/img/seasion_population/bujidao.png" alt="">
          <div class="area-img-info">
            <p>黄山</p>
          </div>
        </div>
        </Col>
        <Col span="6">
        <div class="area-img">
          <img src="~assets/img/seasion_population/bujidao.png" alt="">
          <div class="area-img-info">
            <p>黄山</p>
          </div>
        </div>
        </Col>
        <Col span="6">
        <div class="area-img">
          <img src="~assets/img/seasion_population/bujidao.png" alt="">
          <div class="area-img-info">
            <p>黄山</p>
          </div>
        </div>
        </Col>
        <Col span="6">
        <div class="area-img">
          <img src="~assets/img/seasion_population/bujidao.png" alt="">
          <div class="area-img-info">
            <p>黄山</p>
          </div>
        </div>
        </Col>
      </Row>
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
        this.initMainCss();

    },
    methods:{
      //  更改导航的 样式。
      initMainCss(){
        let $headerNav = $('#headerNav')
        $headerNav.find('a,h1').css({
          color:'#fff'
        })
        $headerNav.find('.headerNav-box').css({
          background:'#333'
        });
        $headerNav.find('.headerNav-box').hover(function () {
          $(this).css({
            background:'#333'
          });
          $headerNav.find('a').css({
            color:'#fff'
          });
          $headerNav.find('h1').css({
            color:'#fff' //darkslategrey
          })
        },function () {
          $(this).css({
            background:'initial'
          })
          $headerNav.find('a,h1').css({
            color:'#fff'
          })
        })
      },
      //  清除之前更改的导航的样式
      clearMainCss(){
        let $headerNav = $('#headerNav')
        $headerNav.find('a').css({
          color:'#333333'
        });
        $headerNav.find('h1').css({
          color:'darkslategrey'
        });
        $headerNav.find('.headerNav-box').css({
          background:'#fff'
        });
        $headerNav.find('.headerNav-box').unbind('mouseenter').unbind('mouseleave');
      }
    },
    destroyed(){
      this.clearMainCss()
    }

  }
</script>
<style lang="less">
  #destination{
    margin-top: -73px;
    padding-bottom: 100px;
    .bg_img{
      width: 100%;
      /*height: 800px;*/
      position: relative;
      .big_img_box{
        display: block;
        /*height: 800px;*/
        width: 100%;
        min-width: 1000px;
        overflow: hidden;
        .main_img{
          width: 100%;
          height: auto;
        }
      }
      .area-search{
        width: 360px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -165px;
        margin-left: -460px;
        z-index: 1;
        padding: 15px;
        background-color: rgba(0,0,0,.4);
        border-radius: 4px;
        h2{
          font-size: 20px;
          color: #fff;
          margin-bottom: 15px;
          font-weight: normal;
          line-height: 1;
          font-family: "Microsoft Yahei";
        }
        .search-body{
          position: relative;
          .search-input{
            display: block;
            margin: auto;
            /*margin-left: 20px;*/
            margin-left: 0;
            height: 36px;
            width: 85%;
            padding: 3px;
            padding-left: 20px;
            font-size: 16px;
            line-height: 16px;
            outline: none;
            border: none;
            border-radius: 4px;
            box-shadow: 0 0 1px #eee;
          }
          .search-btn,.radio-body{
            position: absolute;
          }
          .search-btn{
            right: 5px;
            cursor: pointer;
            display: block;
            outline: none;
            border: none;
            background: #ff9d00;
            width: 36px;
            height: 36px;
            font-size: 32px;
            line-height: 32px;
            top: 0;
            color: white;
            border-radius: 3px;
          }
        }
        .search-area-list{
          a{
            display: inline-block;font: 14px/14px 'Adobe 黑体 Std R';
            text-decoration: none;
            color: #fff;
            outline: none;
            margin-right: 15px;
            margin-top: 20px;
            &:hover{
              text-decoration:underline;
              color:#f18d00 ;
            }
          }
        }
      }

      .point_bottom{
        position: absolute;
        margin: auto;
        left: 50%;
        margin-left: -8px;
        color: white;
        font-size: 32px;
        bottom: 30px;
      }

      .area-article-description{
        width: 450px;
        position: absolute;
        right: 50%;
        top: 50%;
        margin-top: -220px;
        margin-right: -480px;
        z-index: 1;
        h2{
          padding:0 5px;
          border-left: 5px solid #fff;
          border-right: 5px solid #fff;
          cursor: pointer;
          font-size: 30px;
          color: white;
          font-weight: normal;
          line-height: inherit;
          &:hover{
            color: #f18d00;
          }
        }
        .area-article-description-cut{
          margin-top: 10px;
          font-size: 16px;
          line-height: 32px;
          color: #fff;
          height: 120px;
          overflow: hidden;
        }
        .area-article-description-all{
          display: block;
          margin-top: 20px;
          cursor: pointer;
          font-size: 22px;
          text-decoration: underline;
          color: #fff;
          &:hover{
            color: #f18d00;
          }
        }
      }
    }

    .row-box{
      padding: 40px 0;
      .row-title{
        text-align: center;
        font: 26px/26px 'Adobe 宋体 Std L';
        color: #333333;
        margin-bottom: 35px;
      }
      .row-area-index{
        text-align: center;
        font-size: 18px;
        height: 40px;
        line-height: 22px;
        margin-bottom: 20px;
        .row-area-index-season,.row-area-index-name{
          color: #333;
          margin: 0 25px;
          vertical-align: top;
          outline: none;
          text-decoration: none;
          display: inline-block;
          *display:inline-block;
          &:hover{
            color: #f18d00;
            border-bottom: 3px solid #f18d00;
          }
        }
        .row-area-index-season{
          margin: 0 20px;
        }
      }
      .area-img{
        position: relative;
        width: 238px;
        cursor: pointer;
        height: 220px;
        /*padding: 5px;*/
        margin-bottom: 20px;
        img{
          width: 100%;
          height: 100%;
        }
        .area-img-info{
          position: absolute;
          bottom: 20px;
          left: 20px;
          p{
            color: white;
            font: 24px/24px "Adobe 宋体 Std L";
          }
        }
        &:hover{
          opacity: 0.9;
        }
      }
      .area-more{
        .area-img-info{
          position: absolute;
          top: 0;
          left: 0px;
          text-align: center;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          z-index: 50;
          line-height: 220px;
          p{
            line-height: 220px;
          }
        }
      }
      .dd-area-box{
        padding: 0 15px;
        .dd-area-index{
          margin-bottom: 15px;
          border-bottom: 1px dashed #eee ;
          padding-bottom: 15px;
          dt{
            float: left;
            font-size: 16px;
            color: #333;
            margin-right: 15px;
            display: inline-block;
            width: 80px;
            text-decoration: underline;
          }
          dd{
            float: left;
            margin-right: 10px;
            color: #666;
            font-size: 14px;
            margin-top: 2px;
          }
        }

      }
    }
  }

</style>
