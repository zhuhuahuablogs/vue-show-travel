<template>
  <div id="small-slider">
    <div class="small-slider-box">
      <ul class="small-slider-box-body clearfix" :style="{width: smallsliderWidth}">
        <li :style="{width: imgWidth}">
          <a>
            <img src="~assets/img/remen4.jpeg" alt="">
          </a>
        </li>
        <li :style="{width: imgWidth}">
          <a>
            <img src="~assets/img/remen1.jpeg" alt="">
          </a>
        </li>
        <li :style="{width: imgWidth}">
          <a>
            <img src="~assets/img/remen2.jpeg" alt="">
          </a>
        </li>
        <li :style="{width: imgWidth}">
          <a>
            <img src="~assets/img/two.jpeg" alt="">
          </a>
        </li>
        <li :style="{width: imgWidth}">
          <a>
            <img src="~assets/img/remen4.jpeg" alt="">
          </a>
        </li>
        <li :style="{width: imgWidth}">
          <a>
            <img src="~assets/img/remen1.jpeg" alt="">
          </a>
        </li>
      </ul>
      <ul class="small-slider-box-body-point clearfix">
        <li class="active">
          <span></span>
        </li>
        <li> <span></span></li>
        <li> <span></span></li>
        <li> <span></span></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name:'small-slider',
    data(){
      return{
        message:'',
        smallsliderWidth:'600%',
        imgWidth:'',
        timer:null,
      }
    },
    mounted(){
      // 获取展示盒的宽度
      this.imgWidth = document.getElementsByClassName('small-slider-box')[0].clientWidth + 'px';
      this.getPox()
    },
    methods:{
      getPox(){
        let $b = document.getElementsByClassName('small-slider-box-body')[0], // 获取dom元素
          smL =$b.offsetLeft, // 当前的位置
          $smallBoxWidth = document.getElementsByClassName('small-slider-box')[0].clientWidth,
          count = 5; //计数
        let _that = this;
        $b.style.left = -(parseInt($smallBoxWidth) * 5) + 'px';
        this.timer = setInterval(function () {
          scolleLeft($b,$smallBoxWidth)
        },3000);
        function scolleLeft(ele, width) {
          if (count <=1) {
            count = 5;
            $b.style.left = -(parseInt($smallBoxWidth) * 5) + 'px';
          }
          count--;
          let xTarget = -count * parseInt(width)
          animation(ele, xTarget, 20);
        }
        function  animation(ele,xTarget,time){
          let xPos = ele.offsetLeft,speed = 25;
          if(Math.abs(xTarget - xPos) < 25){
            xPos = xTarget;
            ele.style.left = xPos + 'px';
            return false;
          }
          xPos = xPos > xTarget ? xPos - speed : xPos + speed; //轮播方向向左或者向右时的处理
          if(ele.movement){ //保证每次只有一个定时器运行
            clearTimeout(ele.movement);
          }
          ele.style.left = xPos + 'px';
          ele.movement = setTimeout(function () { //采用递归执行animate函数直到满足程序终止条件Math.abs(Xtarget - xPos)<=speed递归才停止。
            animation(ele, xTarget, time);
          },time);
        }
      },
    }
  }
</script>
<style lang="less">
  #small-slider{
    .small-slider-box{
      height: 150px;
      width: 300px;
      overflow: hidden;
      position:relative ;
      .small-slider-box-body{
        zoom: 1;
        padding: 0;
        margin: 0;
        position: absolute;
        top: 0;
        left: 0;
        height: 150px;
        li{
          float: left;
          height: 100%;
          list-style: none;
          a{
            display: block;
            width: 100%;
            height: 100%;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
        &:after{
          content: '.';
          display: block;
          visibility: hidden;
          height: 0;
          clear: both;
        }
      }
      .small-slider-box-body-point{
        position: absolute;
        z-index: 10;
        right: 20px;
        bottom: 30px;
        li{
          float: left;

            display: block;
            width: 15px;
            height: 8px;
            border-radius: 4px;
            margin-left: 3px;
            cursor: pointer;
            overflow: hidden;
            background: #fff;
        }
        li.active{
          background: #ff9d00 !important;
        }
      }
    }
  }

</style>
