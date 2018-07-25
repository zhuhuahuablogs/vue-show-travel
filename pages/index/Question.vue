<template>
  <div id="Question">
    <div class="main_div" style="padding-top: 50px">
      <ul class="clearfix question-box">
          <li class="">
              <div>
                <div class="header clearfix">
                    <span class="fl">名字</span>
                    <img src="~assets/img/footerBar/knight.svg" alt="" class="fl" style="width: 20px;height: 20px">
                </div>
                <div class="body">
                    <h3 >这是一条标题</h3>
                    <p class="contain">
                      小何，我曾经的助理，同我形影不离5个月，最后决定离职。 别误会，我没怎样他，我是纯爷们，而小何孔武有力，纠缠起来我占不到便宜。 我们是友好...
                    </p>
                </div>
                <div class="footer">
                  <Icon type="eye" style="margin-right: 5px"></Icon><span style="color: #f18d00">1人浏览过</span>
                  <Icon type="chatbox-working"  style="margin-left: 15px;margin-right: 5px"></Icon><span style="color: #3fad7e">1人回答</span>
                </div>
              </div>
          </li>
      </ul>
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
    }

  }
</script>
<style lang="less">
  #Question{
    height: 100%;
    /*padding-top: 100px;*/
    .question-box{
      padding: 0;
      margin: 0;
      li{
        height: 170px;
        border-bottom: 1px solid #eee;
        padding-bottom: 10px;
        .header{
          margin-bottom: 10px;
          span{
            font-size: 18px;
            font-weight: bold;
            margin-right: 20px;
          }
          img{
            margin-top: 3px;
          }
        }
        .body{
          margin-bottom: 15px;
          h3{
            width: 300px;
            color: #333333;
            font: bold 18px/18px 'Adobe 宋体 Std L';
            margin-bottom: 10px;
          }
          .contain{
            font-size: 16px;
            color: #999;
          }
        }
      }
    }
  }
</style>
