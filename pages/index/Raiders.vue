<template>
  <div id="Raiders">
    <div class="main_div raiders-leader clearfix">
      <div id="travel-raiders" class="fl">
        <div class="bannerImg">
          <transition-group tag="div">
        <span v-for="(v,i) in banners" :key="i" :style="{opacity:(i+1)==n?'1':'0'}" class="active slider-box">
          <img :src='v' alt="">
        </span>
          </transition-group>
        </div>
        <ul class="bannerBtn clear-fix">
          <li v-for="num in 5">
            <a href="javascript:;" :style="{background:num==n?'#ff7800':''}" @click='change(num)' class='aBtn'></a>
          </li>
        </ul>
      </div>

      <div class="fl travel-tip">
        <h2>旅游攻略小Tips</h2>
        <p class="travel-tip-content">
          这是一条旅游攻略提示...
        </p>
      </div>

    </div>

    <div class="main_div">
      <div style="margin-top: 30px;border-top: 1px dashed #bbb;padding-top: 30px">
        <div class="clearfix mbB20">
          <div class="fl" style="border-bottom: 2px solid #f18d00">
            <h2 class="H2 warning">推荐攻略</h2>
          </div>
          <div class="fr">
            <Button type="warning"  icon="edit" style="width: 200px">写攻略</Button>
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
  export default {
    name: 'background',
    data () {
      return {
        banners:[require('../../assets/img/gongue/gonglue3.jpeg'),require('../../assets/img/gongue/gonglue4.jpeg'),
          require('../../assets/img/gongue/gonglue5.png'),require('../../assets/img/gongue/gonglue_slider1.png'),require('../../assets/img/gongue/gonglueslider2.jpeg')],
        n:1,　　　　　　　// 图片的index。
        bFlag:true,      // 锁定
        timer1:'',　　　　// 这是bFlag定时器的数据
        timer2:'',　　　　// 这是自动播放（next（））定时器的数据
        timer3:'',　　　　// 这是打开浏览器时，初始运动定时器的数据
      }
    },

    mounted(){
      this.timer3=setTimeout(this.next,3000);
    },
    methods:{
      next(){
        // 下一张　　　
        // 为了避免连续点击。让bFlag运动结束后再变为true。　　　　　　　　　　　　　　
        if(this.bFlag){
          this.bFlag=false;
          this.clearT();　　　　　　　　　   // 运动之前，清除所有定时器。
          this.n=this.n+1==6?1:this.n+1;　  // 下一张，如果是第4张，就返回第一张。
          // 调用timeout函数，延迟进入下一次轮播，以便可以点击切换。
          this.timeout();
        }
      },
      clearT(){
        // 清除所有定时器　　　　　　　　　　　　　　　
        clearTimeout(this.timer1);
        clearTimeout(this.timer2);
        clearTimeout(this.timer3);
      },
      timeout(){
        // 运动结束后设置bFlag为true，并且3秒后调用next，进行下一次运动。
        // 运动时间是1s。
        this.timer2=setTimeout(()=>{
          this.bFlag=true
        },1000);
        this.timer1=setTimeout(()=>{
          this.next()
        },3000);
      },
      change(num){
        // 点击按钮，切换到对应图片，需要获取index。
        if(this.bFlag){
          this.bFlag=false;
          this.clearT();
          this.n=num;　　　　　　　         // 将显示图片变为选中的那一张。　　　　
          this.timeout()
        }
      }
    },

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  #Raiders{
    padding-bottom: 100px;
    .raiders-leader{
      margin-top: 30px;
    }
    #travel-raiders{
      position: relative;
      width: 700px;
      .bannerImg{
        position: relative;
        height: 360px;
        overflow: hidden;
        span{
          position: absolute;
          top:0;
          height: 360px;
          left: 0;
        }
        span.active{
          transition:all 1s;
        }
      }
      .slider-box{
        width: 700px;
        height: 340px;
        overflow: hidden;
      }
      .bannerBtn{
        width: 237px;
        position: absolute;
        left: 39%;
        margin-left: -100px;
        bottom: 39px;
        text-align: center;
        li{
          margin: 0 13px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          float:left;
          background: rgba(255,255,255,.4);
          a{
            display: block;
            width: 14px;
            height: 14px;
            color: #fff;
            background: white;
            border-radius: 50%;
            margin: 3px;
          }
          a.aBtn{
            transition:all .6s ease;
          }
        }
      }
    }

    .travel-tip{
      height: 340px;
      width: 280px;
      margin-left: 15px;
      background: #dbe1ec;
      h2{
        padding-top: 20px;
        text-align: center;
        color: #333333;
        font:  24px/24px "Adobe 宋体 Std L";
      }
      .travel-tip-content{
        text-indent:30px;
        margin-top: 20px;
        font: 14px/28px "Adobe 宋体 Std L";
        color: #333333;
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
  }

</style>
