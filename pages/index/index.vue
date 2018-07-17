<template>
  <div id="home">
    <slider></slider>
    <div class="B main_div">
      <Row>
        <Col span="6">
        <div class="leader-chunk">
          <h2 class="H2">旅游攻略推荐</h2>
          <Carousel autoplay v-model="index">
            <CarouselItem>
              <div class="leader-chunk-body">
                <a >
                  <img src="~assets/img/remen1.jpeg" alt="">
                </a>
                 <h3 class="H3">
                   俄罗斯除了熊和伏特加，还有摩托球
                 </h3>
                <p>摩托球到底有什么魅力，让这些俄罗斯年轻人宁愿冒着这么大的风险，也要继续玩下去。</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="leader-chunk-body">
                <a >
                  <img src="~assets/img/remen2.jpeg" alt="">
                </a>
                <h3 class="H3">
                  伊斯坦布尔的动物们
                </h3>
                <p>摩托球到底有什么魅力，让这些俄罗斯年轻人宁愿冒着这么大的风险，也要继续玩下去。</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="leader-chunk-body">
                <a >
                  <img src="~assets/img/remen4.jpeg" alt="">
                </a>
                <h3 class="H3">
                  标题
                </h3>
                <p>摩托球到底有什么魅力，让这些俄罗斯年轻人宁愿冒着这么大的风险，也要继续玩下去。</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="leader-chunk-body">
                <a >
                  <img src="~assets/img/two.jpeg" alt="">
                </a>
                <h3 class="H3">
                  标题
                </h3>
                <p>摩托球到底有什么魅力，让这些俄罗斯年轻人宁愿冒着这么大的风险，也要继续玩下去。</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="leader-chunk-body ">
                <a >
                  <img src="~assets/img/remen2.jpeg" alt="">
                </a>
                <h3 class="H3">
                  标题
                </h3>
                <p>摩托球到底有什么魅力，让这些俄罗斯年轻人宁愿冒着这么大的风险，也要继续玩下去。</p>
              </div>
            </CarouselItem>
          </Carousel>
        </div>
        </Col>
        <Col span="18">
          <div class="leader-chunk" style="padding-left: 20px">
              <h2 class="H2 pdL10">热门景点</h2>
              <Row>
                <Col span="8">
                <div class="leader-chunk-body leader-chunk-body-remen pd10">
                  <a >
                    <img src="~assets/img/remen2.jpeg" alt="">
                  </a>
                  <div class="Bp">
                    <p class="cutp">摩托球到底有什么魅力，让这些俄罗斯年轻人宁愿冒着这么大的风险，也要继续玩下去。</p>
                    <div style="margin-top: 15px;">
                      <Icon type="eye" style="margin-right: 5px"></Icon><span style="color: #f18d00">1人浏览过</span>
                    </div>
                  </div>
                </div>
                </Col>
                <Col span="8">
                <div class="leader-chunk-body leader-chunk-body-remen pd10">
                  <a >
                    <img src="~assets/img/remen2.jpeg" alt="">
                  </a>
                  <div class="Bp">
                    <p class="cutp">摩托球到底有什么魅力，让这些俄罗斯年轻人宁愿冒着这么大的风险，也要继续玩下去。</p>
                    <div style="margin-top: 15px;">
                      <Icon type="eye" style="margin-right: 5px"></Icon><span style="color: #f18d00">1人浏览过</span>
                    </div>
                  </div>
                </div>
                </Col>
                <Col span="8">
                <div class="leader-chunk-body leader-chunk-body-remen pd10">
                  <a >
                    <img src="~assets/img/remen2.jpeg" alt="">
                  </a>
                  <div class="Bp">
                    <p class="cutp">摩托球到底有什么魅力，让这些俄罗斯年轻人宁愿冒着这么大的风险，也要继续玩下去。</p>
                    <div style="margin-top: 15px;">
                      <Icon type="eye" style="margin-right: 5px"></Icon><span style="color: #f18d00">1人浏览过</span>
                    </div>
                  </div>
                </div>
                </Col>
              </Row>
          </div>
        </Col>
      </Row>
      <div style="margin-top: 30px;border-top: 1px dashed #bbb;padding-top: 30px">
        <div class="clearfix mbB20">
            <div class="fl" style="border-bottom: 2px solid #f18d00">
              <h2 class="H2 warning">热门游记</h2>
            </div>
            <div class="fr">
              <Button type="warning"  icon="edit" style="width: 200px">写游记</Button>
            </div>
        </div>
        <Row>
          <Col span="18">
          <div class="youji-box leader-chunk-body-remen clearfix">
            <img class="youji-img" src="~assets/img/remen1.jpeg" alt="">
            <div class="youji-box-dody">
              <dl>
                <dt><a class="youji-title">当迪士尼遇上法式风情</a></dt>
                <dd>
                  <a class="youji-contain">
                    写在最前面 如果说提起去 美国 那差不多要追溯到2014年吧 也许只是因为 美国 的音乐和电影
                    美国 成为一个陌生但向往的地方 从大学期间就萌生的旅行念头 使得我说走就走的拿起那年夏天才办的
                    写在最前面 如果说提起去 美国 那差不多要追溯到2014年吧 也许只是因为 美国 的音乐和电影
                    美国 成为一个陌生但向往的地方 从大学期间就萌生的旅行念头 使得我说走就走的拿起那年夏天才办的
                    写在最前面 如果说提起去 美国 那差不多要追溯到2014年吧 也许只是因为 美国 的音乐和电影
                    美国 成为一个陌生但向往的地方 从大学期间就萌生的旅行念头 使得我说走就走的拿起那年夏天才办的...
                  </a>
                </dd>
                <dd class="youji-bar">
                  <Icon type="eye" style="margin-right: 5px"></Icon><span style="color: #f18d00">1人浏览过</span>
                  <Icon type="ios-location"  style="margin-left: 15px;margin-right: 5px"></Icon><span style="color: #3fad7e">大理</span>
                  <Icon type="ios-body-outline" style="margin-left: 20px;margin-right: 5px"></Icon><span style="color: brown">阿浩</span>
                </dd>
              </dl>
            </div>
          </div>
          <div class="youji-box leader-chunk-body-remen clearfix">
            <img class="youji-img" src="~assets/img/remen1.jpeg" alt="">
            <div class="youji-box-dody">
              <dl>
                <dt><a class="youji-title">当迪士尼遇上法式风情</a></dt>
                <dd>
                  <a class="youji-contain">
                    写在最前面 如果说提起去 美国 那差不多要追溯到2014年吧 也许只是因为 美国 的音乐和电影
                    美国 成为一个陌生但向往的地方 从大学期间就萌生的旅行念头 使得我说走就走的拿起那年夏天才办的...
                  </a>
                </dd>
                  <dd class="youji-bar">
                    <Icon type="eye" style="margin-right: 5px"></Icon><span style="color: #f18d00">1人浏览过</span>
                    <Icon type="ios-location"  style="margin-left: 15px;margin-right: 5px"></Icon><span style="color: #3fad7e">大理</span>
                    <Icon type="ios-body-outline" style="margin-left: 20px;margin-right: 5px"></Icon><span style="color: brown">阿浩</span>
                  </dd>
              </dl>
            </div>
          </div>
          </Col>
          <Col span="6">
          </Col>
        </Row>
        <div class="youji-page">
          <Page :total="40" size="small" show-elevator show-sizer></Page>
        </div>
      </div>
    </div>


  </div>
</template>
<script>

  import slider from '../../components/slider.vue'
  export default {
    name:'home',
    data(){
      return{
        message:'',
        index:0
      }
    },
    mounted(){

    },
    methods:{

    },
    components:{
      slider
    }

  }
</script>
<style lang="less">
  #home{
    padding-bottom: 100px;
    .B{
      margin-top: 30px;
      .leader-chunk{
        padding-right: 20px;
        .leader-chunk-body{
          position: relative;
          width: 100%;
          a{
            display: block;
            img{
              height: 135px;
              width: 100%;
            }
          }
          p{
            display: block;
            padding: 4px 0;
            cursor: pointer;
            height: 60px;
            line-height: 20px;
            font-size: 14px;
            overflow: hidden;
          }
        }
      }
      .leader-chunk-body-remen{
        img{
          &:hover{
            opacity: 0.7;
          }
        }

      }
      .Bp{
        position: relative;
      }
      .cutp{
        height: 40px !important;
        overflow: hidden;
        width: 216.66px !important;
        padding-right: 20px !important;
        /*position: absolute;*/
        /*bottom: -35px;*/
        &:hover{
          margin-top: -40px;
          z-index: 10;
          height: 80px !important;
          color: #f18d00;
          background: #fff !important;
        }
      }

      .youji-box{
        margin-bottom: 30px;
        padding: 20px;
        padding-left: 0;
        &:hover{
          background: #f8f8f8;
        }
        img{
          cursor: pointer;
          display: block;
          float: left;
          width: 220px;
          height: 135px;
        }
        .youji-box-dody{
          width: 60%;
          float: left;
          padding-left: 20px;
          a{
            text-decoration: none;
            color: #333333;
          }
          .youji-title{
            line-height: 1 !important;
            height: 31px !important;
            display: block;font-size: 22px;
            width:200px;
            white-space:nowrap;
            text-overflow:ellipsis;
            overflow:hidden;
            &:hover{
              color: #f18d00;
            }
          }
          .youji-contain{
            display: block;
            overflow: hidden;
            height: 82px;
            font: 14px/20px 'Adobe 黑体 Std R';
            color: #666;
          }
          .youji-bar{
            margin-top: 5px;
          }
        }
      }
    }

    .youji-page{
      margin-top: 50px;
      text-align: center;
    }

    .H2{
      color: #333;
      font:  22px/22px 'Adobe 黑体 Std R';
      margin-bottom: 15px;
    }
    .H3{
      margin-top: 8px;
      color: #333;
      font:  18px/28px 'Adobe 黑体 Std R';
      margin-bottom: 8px;
    }
    .ivu-carousel-dots li button{
      background:#fff ;
    }
    .ivu-carousel-dots li.ivu-carousel-active>button{
      background-color:#f18d00 ;
    }
    .ivu-carousel-dots-inside{
      top: 110px;
    }
    .ivu-carousel-arrow{
      /*top:35%;*/
      top: 70px;
    }
  }

</style>
