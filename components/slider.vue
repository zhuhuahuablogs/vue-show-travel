<template>
  <!--@mouseenter="clearTime('enter')" @mouseleave="again"-->
  <div id="slider">
    <div class="slider-box">
      <div class="clearfix bigImg slider-active"  v-for="(v,i) in banners"
           :key="i"
           :style="{opacity:(i+1)==n?'1':'0',zIndex:(i+1)==n?'20':'10'}" >
          <img class="one" :src='v' alt="one">
      </div>

      <div class="search-container" id="_j_index_search">
        <div class="search-body clearfix">
          <div class="radio-body">
            <RadioGroup v-model="city">
              <Radio label="全部"></Radio>
              <Radio label="酒店"></Radio>
              <Radio label="目的地"></Radio>
            </RadioGroup>
          </div>
          <input type="text" placeholder="" class="search-input">
           <button class="search-btn">
              <Icon type="ios-search-strong"></Icon>
           </button>
        </div>

      </div>

      <ul class="small-img">
        <li  v-for="(v,i) in banners"  :class="n==i+1?'span-active':''" @click='change(i+1)'>
          <img :src="v" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

  export default {
    name:'slider',
    data(){
      return{
        message:'',
        n:1,
        sliderBoxHeight:'',
        imgActive:'0',
        imgIndex:0,
        timer:null,
        banners:[require('../assets/img/one.jpeg'),require('../assets/img/two.jpeg'),
          require('../assets/img/three.jpeg'),require('../assets/img/four.jpeg'),require('../assets/img/fire.jpeg')],
        bFlag:true,      // 锁定
        timer1:'',　　　　// 这是bFlag定时器的数据
        timer2:'',　　　　// 这是自动播放（next（））定时器的数据
        timer3:'',　　　　// 这是打开浏览器时，初始运动定时器的数据,
        city:'全部'
      }
    },
    mounted(){
      this.setAutoHeight();
      this.autoSlider()
    },
    methods:{
      autoSlider(){
        this.timer3=setTimeout(this.next,6000);
      },
      //设置高度自适应
      setAutoHeight(){
        this.sliderBoxHeight = document.getElementsByClassName('one')[0].clientHeight + 'px';
        document.getElementsByClassName('slider-box')[0].style.height = this.sliderBoxHeight;
        let _this = this
        window.onresize = function() {
          _this.sliderBoxHeight = document.getElementsByClassName('one')[_this.imgIndex].clientHeight + 'px';
          let bodyWidth = document.body.clientWidth;
          if(bodyWidth > 1000){
            document.getElementsByClassName('slider-box')[0].style.height = _this.sliderBoxHeight;
            document.getElementsByClassName('slider-box')[0].style.width = 100 + '%'
          }else{
            document.getElementsByClassName('slider-box')[0].style.height = _this.sliderBoxHeight;
            document.getElementsByClassName('slider-box')[0].style.width = 1000 + 'px'
          }
        };
      },
      //  启动定时器
      again(){
        this.bFlag=true
        this.timer1=setTimeout(()=>{
          this.next()
        },6000);
      },
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
      //  清除定时器
      clearT(str){
        // 清除所有定时器　并且设置bFlag为false
        //判断是否是
        clearTimeout(this.timer1);
        clearTimeout(this.timer2);
        clearTimeout(this.timer3);
      },
      clearTime(){
        this.bFlag=true;
        clearTimeout(this.timer1);
        clearTimeout(this.timer2);
        clearTimeout(this.timer3);
      },
      // 设置延迟定时器
      timeout(){
        // 运动结束后设置bFlag为true，并且3秒后调用next，进行下一次运动。
        // 运动时间是1s。
        this.timer2=setTimeout(()=>{
          this.bFlag=true
        },1000);
        this.timer1=setTimeout(()=>{
          this.next()
        },6000);
      },
      // 点击分页显示
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
    // 销毁window.onresize
    destroyed(){
      window.onresize = null;
    }

  }
</script>
<style lang="less">
  #slider{
    padding: 0;
    margin: 0;
    vertical-align: top;

    /*轮播的样式*/
    .slider-box{
      width: 100%;
      position: relative;
      overflow: hidden;
      top: -5px;
      vertical-align: top;
      word-wrap: break-word;
      .bigImg{
        display: block;
        padding: 0;
        margin: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;
        text-align: center;
        img{
          width: 100%;
          height: auto;
          margin: auto;
        }
      };
      /*搜索框的样式*/
      .search-container{
        width: 538px;
        position: absolute;
        bottom: 45px;
        left: 50%;
        margin-left: -269px;
        z-index: 100;
        background-color: rgba(0,0,0,.6);
        border-radius: 4px;
        padding-top: 45px;
        padding-bottom: 20px;
        .search-body{
          position: relative;
          .search-input{
            display: block;
            margin: auto;
            margin-left: 20px;
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
            right: 15px;
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
          .radio-body{
            left: 20px;
            top: -30px;
            color: white;
            .ivu-radio-wrapper{
              font-size: 14px;
            }
            .ivu-radio-checked .ivu-radio-inner{
              border-color:#ff9d00;
            }
            .ivu-radio-inner:after{
              background-color: #ff9d00;
            }
          }
        }
      }

    }
    /*透明度改变的过度*/
    .slider-active{
      display: block !important;
      transition:all 1s !important;
    }
/*    @keyframes slise {
      from{
        opacity: 0.5;
      }
      to{
        opacity: 1;
      }
    }*/
    /*小图片的样式*/
    .small-img{
      position: absolute;
      z-index: 20;
      right: 40px;
      top: 50%;
      margin-top: -166px;
      width: 110px;
      li{
        cursor: pointer;
        position: relative;
        height: 62px;
        width: 110px;
        border: 2px solid #eee;
        margin-bottom: 6px;
        list-style: none;
        transition: all 3s;
        img{
          height: 58px;
          width: 106px;
        }
      }
    }
    /*选中小图片的样式*/
    .span-active{
      border: 2px solid #ff9d00 !important;
    }
  }


</style>
