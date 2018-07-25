<template>
  <div id="footer-bar">
      <div class="main_div">
        <div style="margin-bottom: 30px">
          <Row>
            <Col span="6">
            <div class="box">
              <img src="~assets/img/footerBar/knight.svg" alt="" style="width: 100px;height: 100px">
            </div>
            </Col>
            <Col span="6">
            <div class="box">
              <img src="~assets/img/footerBar/knight_horseman.svg" alt="" style="width: 100px;height: 100px">
            </div>
            </Col>
            <Col span="6">
            <div class="box">
              <img src="~assets/img/footerBar/mark.svg" alt="" style="width: 100px;height: 100px">
            </div>
            </Col>
            <Col span="6">
            <div class="box">
              <img src="~assets/img/footerBar/travel.svg" alt="" style="width: 100px;height: 100px">
            </div>
            </Col>
          </Row>
        </div>



        <p class="my-dream">向崇尚自由的加勒比海盗致敬！</p>
        <p class="my-config">@config</p>
      </div>
  </div>
</template>
<script>
  export default {
    name:'footer-bar'
  }
</script>

<style lang="less">
    #footer-bar{
      clear: both;
      background-color: #3c3c3c;
      color: #c2c2c2;
      line-height: 22px;
      padding-top: 30px;
      padding-bottom: 20px;
      font-size: 12px;
      .box{
        margin: auto;
        border: 5px solid #f18d00;
        width: 120px;
        height: 120px;
        background: white;
      }
      .my-config,.my-dream{
        text-align: center;
        font-size: 16px;
      }
    }
</style>
