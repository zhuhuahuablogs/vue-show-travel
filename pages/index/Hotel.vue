<template>
  <div id="Hotel">
    <div class="main_div Hotel-box" >
      <h1 class="Hotel-title">酒店</h1>

      <div class="select-hotel">
        <Row>
          <Col span="9">
          <div class="area-box" @click.stop="showAreaList()">
            <Input v-model="hotelarea" placeholder="出行目的地...  "  style="margin-right: 20px" ></Input>
            <div class="area-box-selectbox" v-show="showareaList">
              <ul class="area-box-ul clearfix">
                <li class="clearfix">
                  <h2 class="fl">中国</h2>
                  <p class="fl" style="width: 90%">
                    <a @click="setareaValue('台北')">台北</a>
                    <a @click="setareaValue('台北')">台北</a>
                    <a @click="setareaValue('台北')">台北</a>
                  </p>
                </li>
                <li class="clearfix">
                  <h2 class="fl">中国</h2>
                  <p class="fl" style="width: 90%">
                    <a @click="setareaValue('台北')">台北</a>
                    <a @click="setareaValue('台北')">台北</a>
                    <a @click="setareaValue('台北')">台北</a>
                  </p>
                </li>
                <li class="clearfix">
                  <h2 class="fl">中国</h2>
                  <p class="fl" style="width: 90%">
                    <a @click="setareaValue('台北')">台北</a>
                    <a @click="setareaValue('台北')">台北</a>
                    <a @click="setareaValue('台北')">台北</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          </Col>
          <Col span="9">
            <DatePicker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="出行时间..." style="width: 300px;margin-right: 65px;"></DatePicker>
          </Col>
          <Col span="6">
          <div style="position: relative">
            <Input v-model="hotelnum" placeholder="出行人数...  "  style="width: 200px"></Input>
            <button class="search-btn">
              <Icon type="ios-search-strong"></Icon>
            </button>
          </div>
          </Col>
        </Row>
      </div>

      <div class="gonglue-box" style="margin-top: 50px">
        <Row>
          <Col span="8">
          <div class="clearfix">
            <div class="fl iconfont" style="margin-right: 15px  ">
              <Icon type="clipboard" style="font-size: 55px;color:#999"></Icon>
            </div>
            <div class="fl gonglue">
              <h2 class="gonglue-title">住宿攻略</h2>
              <p class="gonglue-leader">区域攻略到特色主题，应有尽有</p>
            </div>
          </div>
          </Col>
          <Col span="8">
          <div class="clearfix">
            <div class="fl iconfont" style="margin-right: 15px  ">
              <Icon type="social-yen"  style="font-size: 55px;color:#999"></Icon>
            </div>
            <div class="fl gonglue">
              <h2 class="gonglue-title">专享价格</h2>
              <p class="gonglue-leader">多平台价格对比，天天专享特惠</p>
            </div>
          </div>
          </Col>
          <Col span="8">
          <div class="clearfix">
            <div class="fl iconfont" style="margin-right: 15px  ">
              <Icon type="ribbon-a"  style="font-size: 55px;color:#999"></Icon>
            </div>
            <div class="fl gonglue">
              <h2 class="gonglue-title">真实点评</h2>
              <p class="gonglue-leader">超过100万真实用户点评和游记</p>
            </div>
          </div>
          </Col>
        </Row>
      </div>

      <div class="theme-hotel">
        <h2 class="h-title">主题酒店</h2>
        <div class="themeList clearfix">
          <a :class="themeActive=='浪漫花海'?'theme-index on':'theme-index ' " @click="setthemeActive('浪漫花海')">浪漫花海</a>
          <a :class="themeActive=='朝拜历史'?'theme-index on':'theme-index ' " @click="setthemeActive('朝拜历史')">朝拜历史</a>
          <a :class="themeActive=='潜水胜地'?'theme-index on':'theme-index ' " @click="setthemeActive('潜水胜地')">潜水胜地</a>
          <a :class="themeActive=='爱彼迎冬日推荐'?'theme-index on':'theme-index ' " @click="setthemeActive('爱彼迎冬日推荐')">爱彼迎冬日推荐</a>
          <a :class="themeActive=='目的地特色'?'theme-index on':'theme-index ' " @click="setthemeActive('目的地特色')">目的地特色</a>
          <a :class="themeActive=='私人海滩'?'theme-index on':'theme-index ' " @click="setthemeActive('私人海滩')">私人海滩</a>
        </div>
        <div style="margin-top: 30px">
          <Row :gutter="16">
            <Col span="8">
            <div class="area-img">
              <img src="~assets/img/seasion_population/bujidao.png" alt="">
              <div class="area-img-info">
                <p class="area-specific-name">罗滕堡</p>
                <p class="area-city-name">德国</p>
              </div>
            </div>
            </Col>
            <Col span="8">
            <div class="area-img">
              <img src="~assets/img/seasion_population/bujidao.png" alt="">
              <div class="area-img-info">
                <p class="area-specific-name">罗滕堡</p>
                <p class="area-city-name">德国</p>
              </div>
            </div>
            </Col>
            <Col span="8">
            <div class="area-img">
              <img src="~assets/img/seasion_population/bujidao.png" alt="">
              <div class="area-img-info">
                <p class="area-specific-name">罗滕堡</p>
                <p class="area-city-name">德国</p>
              </div>
            </div>
            </Col>
            <Col span="8">
            <div class="area-img">
              <img src="~assets/img/seasion_population/bujidao.png" alt="">
              <div class="area-img-info">
                <p class="area-specific-name">罗滕堡</p>
                <p class="area-city-name">德国</p>
              </div>
            </div>
            </Col>
            <Col span="8">
            <div class="area-img">
              <img src="~assets/img/seasion_population/bujidao.png" alt="">
              <div class="area-img-info">
                <p class="area-specific-name">罗滕堡</p>
                <p class="area-city-name">德国</p>
              </div>
            </div>
            </Col>
            <Col span="8">
            <div class="area-img">
              <img src="~assets/img/seasion_population/bujidao.png" alt="">
              <div class="area-img-info">
                <p class="area-specific-name">罗滕堡</p>
                <p class="area-city-name">德国</p>
              </div>
            </div>
            </Col>
          </Row>
        </div>
      </div>

      <div class="theme-hotel">
        <h2 class="h-title">特价酒店</h2>
        <div class="themeList clearfix">
          <a :class="SpecialpriceActive=='曼谷'?'theme-index on':'theme-index ' " @click="setSpecialpriceActive('曼谷')">曼谷</a>
          <a :class="SpecialpriceActive=='台北'?'theme-index on':'theme-index ' " @click="setSpecialpriceActive('台北')">台北</a>
          <a :class="SpecialpriceActive=='东京'?'theme-index on':'theme-index ' " @click="setSpecialpriceActive('东京')">东京</a>
          <a :class="SpecialpriceActive=='香港'?'theme-index on':'theme-index ' " @click="setSpecialpriceActive('香港')">香港</a>
          <a :class="SpecialpriceActive=='首尔'?'theme-index on':'theme-index ' " @click="setSpecialpriceActive('首尔')">首尔</a>
          <a :class="SpecialpriceActive=='新加坡'?'theme-index on':'theme-index ' " @click="setSpecialpriceActive('新加坡')">新加坡</a>
        </div>
        <div style="margin-top: 30px;margin-bottom: 100px">
          <Row :gutter="16">
            <Col span="8">
            <div class="area-img">
              <img src="~assets/img/seasion_population/bujidao.png" alt="">
              <span class="scope">8.4分</span>
              <div class="area-special-info">
                <p class="area-special-info-title">曼谷威客3号酒店（原曼谷胜利纪念碑全季酒店）</p>
              </div>
            </div>
            </Col>
            <Col span="8">
            <div class="area-img">
              <img src="~assets/img/seasion_population/bujidao.png" alt="">
              <span class="scope">8.4分</span>
              <div class="area-special-info">
                <p class="area-special-info-title">曼谷威客3号酒店（原曼谷胜利纪念碑全季酒店）</p>
              </div>
            </div>
            </Col>
            <Col span="8">
            <div class="area-img">
              <img src="~assets/img/seasion_population/bujidao.png" alt="">
              <span class="scope">8.4分</span>
              <div class="area-special-info">
                <p class="area-special-info-title">曼谷威客3号酒店（原曼谷胜利纪念碑全季酒店）</p>
              </div>
            </div>
            </Col>
            <Col span="8">
            <div class="area-img">
              <img src="~assets/img/seasion_population/bujidao.png" alt="">
              <span class="scope">8.4分</span>
              <div class="area-special-info">
                <p class="area-special-info-title">曼谷威客3号酒店（原曼谷胜利纪念碑全季酒店）</p>
              </div>
            </div>
            </Col>
            <Col span="8">
            <div class="area-img">
              <img src="~assets/img/seasion_population/bujidao.png" alt="">
              <span class="scope">8.4分</span>
              <div class="area-special-info">
                <p class="area-special-info-title">曼谷威客3号酒店（原曼谷胜利纪念碑全季酒店）</p>
              </div>
            </div>
            </Col>
            <Col span="8">
            <div class="area-img">
              <img src="~assets/img/seasion_population/bujidao.png" alt="">
              <span class="scope">8.4分</span>
              <div class="area-special-info">
                <p class="area-special-info-title">曼谷威客3号酒店（原曼谷胜利纪念碑全季酒店）</p>
              </div>
            </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'two',
    data(){
      return{
        hotelarea:'',
        hotelnum:'',
        showareaList:0,
        themeActive:'浪漫花海',
        SpecialpriceActive:'曼谷'
      }
    },
    mounted(){
      this.closeareaList()
    },
    methods:{
      //聚焦事件
      showAreaList(){
        this.showareaList = 1;
      },
      closeareaList(){
        let _that = this;
        document.body.addEventListener('click',_that.removeFn,false); //点击body时候因此地址选择器
      },
      removeFn(){
        this.showareaList = 0;
      },
      setareaValue(val){
        this.hotelarea = val;
      },
      setthemeActive(val){
        this.themeActive = val
      },
      setSpecialpriceActive(val){
        this.SpecialpriceActive = val
      }
    },
    destroyed(){
      let _that = this;
      document.body.removeEventListener('click',_that.removeFn());
    }

  }
</script>
<style lang="less">
  #Hotel{
    .Hotel-box{
      padding-top: 60px;
      .Hotel-title{
        font-size: 24px;
      }
      .select-hotel{
        margin-top: 30px;
        .ivu-input-wrapper{
          width: 340px;
          height: 45px;
          input{
            height: 45px;
            font-size: 16px;
            border: 1px solid #999;
          }
          .ivu-input:focus{
            color: #f18d00;
            border: 1px solid #f18d00;
            .ivu-input-wrapper{
              border: 1px solid #f18d00;
            }
          }
        }
        .ivu-input-icon{
          font-size: 28px;
          line-height: 42px;
        }
        .area-box{
          position: relative;
          .area-box-selectbox{
            padding: 25px 10px 0 10px;
            position: absolute;
            background: #fff;
            border: 1px solid #999;
            box-shadow: 0 0 2px #eee;
            left: 0;
            top: 45px;
            z-index: 1;
            width: 725px;
            .area-box-ul{
              padding: 0;
              margin: 0;
              li{
                margin-bottom: 10px;
                h2{
                  font-size: 14px;
                  color: #666;
                  font-weight: bold;
                  width: 70px;
                  padding-left: 10px;
                  float: left;
                }
                p{
                  a{
                    display: inline-block;
                    margin-bottom: 15px;
                    font-size: 14px;
                    width: 100px;
                    color: #666;
                    &:hover{
                      color: #f18d00;
                    }
                  ;
                  }
                }
              }
            }
          }
        }
        .search-btn{
          position: absolute;
          top: 0;
          cursor: pointer;
          right: 0;
          display: inline-block;
          outline: none;
          border: none;
          background: #ff9d00;
          width: 44px;
          height: 44px;
          font-size: 32px;
          line-height: 32px;
          color: white;
          border-radius: 3px;
        }
      }

      .gonglue-box{
        .gonglue{
          .gonglue-title{
            font-size: 18px;
            color: #666;
            line-height: 18px;
            font-weight: normal;
            margin-top: 8px;
          }
          .gonglue-leader{
            font-size: 14px;
            color: #666;
            margin-top: 5px;

          }
        }
      }

      .theme-hotel{
        .themeList{
          border-bottom: 1px solid #e4e4e4;
          .theme-index{
            display: block;
            text-decoration: none;
            float: left;
            width: 166px;
            width: 16.66%;
            color: #666;
            text-align: center;
            height: 50px;
            line-height: 50px;
            font-size: 18px;
          }
          .theme-index.on{
            color: #ff8a00;
            border-bottom: 3px solid #ff8a00;
            margin-bottom: -2px;
          }
        }
        .area-img{
          position: relative;
          width: 318px;
          cursor: pointer;
          height: 240px;
          margin-bottom: 20px;
          img{
            width: 100%;
            height: 100%;
          }
          .area-img-info{
            position: absolute;
            top:0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            height: 50px;
            p{
              margin-bottom: 10px;
              text-shadow: 2px 2px 2px rgba(0,0,0,0.8);
              text-align: center;
              color: white;
              font: 24px/24px "Adobe 宋体 Std L";
            }
            .area-city-name{
              font-size: 18px;
            }
          }
          &:hover{
            opacity: 0.9;
          }
          .scope{
            position: absolute;
            left: 15px;
            top: 15px;
            display: block;
            padding: 0px 4px;
            background: rgba(0,0,0,0.5);
            color: white;
            border-radius: 4px;
            font-size: 18px;
          }
          .area-special-info{
            position: absolute;
            left: 15px;
            width: 80%;
            bottom: 15px;
            p{
              text-shadow: 2px 2px 2px rgba(0,0,0,0.8);
              color: white;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
</style>
