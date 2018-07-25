<template xmlns:v-quill="http://www.w3.org/1999/xhtml">
  <div id="notes">
    <div class="notes-upload-box">
        <div class="notes-upload-bigimg">

        </div>
        <div class="notes-upload-edited">
          <div class="demo-upload-list" v-for="item in uploadList">
            <template v-if="item.status === 'finished'">
              <img :src="item.url">
              <div class="demo-upload-list-cover">
                <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
              </div>
            </template>
            <template v-else>
              <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
            </template>
          </div>
          <div class="clearfix">
            <div class="fl">
              <Upload
                ref="upload"
                :show-upload-list="false"
                :default-file-list="defaultList"
                :on-success="handleSuccess"
                :format="['jpg','jpeg','png']"
                :max-size="2048"
                :on-format-error="handleFormatError"
                :on-exceeded-size="handleMaxSize"
                :before-upload="handleBeforeUpload"
                multiple
                type="drag"
                action="//jsonplaceholder.typicode.com/posts/"
                style="display: inline-block;width:58px;">
                <div style="width: 58px;height:58px;line-height: 58px;">
                  <Icon type="camera" size="20"></Icon>
                </div>
              </Upload>
              <Modal title="View Image" v-model="visible">
                <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
              </Modal>
            </div>
            <div class="fl" style="margin-left: 30px">
              <h3  style="font-size: 24px;color: #333; font-weight: normal;margin-bottom: 8px">设置游记头图</h3>
              <p style="font-size: 16px;color: #666">图片建议选择尺寸大于1680px的高清大图，如相机原图</p>
            </div>
          </div>
        </div>
        <input class="youji-title" type="text" placeholder="填写游记标题..." >
    </div>

    <h2 class="youji-contain-index">
      请填写游记内容
    </h2>

    <div class="notes-body main_div">
      <div class="quill-editor"
           :content="content"
           @change="onEditorChange($event)"
           @blur="onEditorBlur($event)"
           @focus="onEditorFocus($event)"
           @ready="onEditorReady($event)"
           v-quill:myQuillEditor="editorOption">
      </div>

      <!-- Or manually control the data synchronization（手动控制数据流）  -->
      <div class="quill-editor"
           :content="content"
           @change="onEditorChange($event)"
           v-quill:myQuillEditor="editorOption">
      </div>
    </div>

    <div class="btn-box">
      <a class="youji-submit">
        保存
      </a>
      <a class="youji-cancel">
        取消
      </a>
    </div>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        defaultList: [],
        imgName: '',
        visible: false,
        uploadList: [],
        content: '<p>I am Example</p>',
        editorOption: {
          // some quill options
        }
      }
    },
    mounted() {
      console.log('this is current quill instance object', this.myQuillEditor)
    },
    methods: {
      onEditorBlur(editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      },
      onEditorChange({ editor, html, text }) {
        console.log('editor change!', editor, html, text)
        this.content = html
      },
      onEditorChange(event) {
        console.log('这个？？onEditorChange')
      },
      handleView (name) {
        this.imgName = name;
        this.visible = true;
      },
      handleRemove (file) {
        const fileList = this.$refs.upload.fileList;
        this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
      },
      handleSuccess (res, file) {
        file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
        file.name = '7eb99afb9d5f317c912f08b5212fd69a';
      },
      handleFormatError (file) {
        this.$Notice.warning({
          title: 'The file format is incorrect',
          desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
        });
      },
      handleMaxSize (file) {
        this.$Notice.warning({
          title: 'Exceeding file size limit',
          desc: 'File  ' + file.name + ' is too large, no more than 2M.'
        });
      },
      handleBeforeUpload () {
        const check = this.uploadList.length < 5;
        if (!check) {
          this.$Notice.warning({
            title: 'Up to five pictures can be uploaded.'
          });
        }
        return check;
      }
    },
    mounted () {
      this.uploadList = this.$refs.upload.fileList;
    }

  }
</script>
<style lang="less">
  #notes{
    margin-top: -5px;
    .notes-upload-box{
      background-image: url("../../assets/img/page_bg.jpg");
      background-size: cover;
      height: 400px;
      position: relative;
      .notes-upload-edited{
        position: absolute;
        top: 30%;
        left: 0;
        right: 0;
        margin: auto;
        width: 705px;
        height: 67px;
      }
      .youji-title{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 25px;
        border: 1px solid #fff;
        line-height: 20px;
        box-shadow: 0 2px 2px rgba(110,98,85,.5);
        transition: .2s linear 0s;
        margin: auto;
        display: block;
        width: 938px;
        font-size: 18px;
        padding: 30px 20px;
        height: 40px;
        &:focus{
          border-color: #ffc65a;
          box-shadow: 0 0 3px rgba(255,192,90,1) !important;
        }
      }
    }
    .notes-body{
      margin-top: 20px;
      margin-bottom: 30px;
    }
    .youji-contain-index{
      margin-top: 30px;
      font-size: 28px;
      text-align: center;
      color: #333333;
      font-weight: bold;
    }
    .btn-box{
      margin-bottom: 100px;
      text-align: center;
      .youji-submit{
        display: inline-block;
        margin-top: 15px;
        width: 240px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 20px;
        color: #fff;
        border-radius: 30px;
        background: linear-gradient(-30deg right,transparent 0,rgba(173,217,101,.3) 40%,rgba(173,217,101,1) 90%);
        background: -webkit-linear-gradient(-30deg,transparent 0,rgba(173,217,101,.3) 40%,rgba(173,217,101,1) 90%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000',endColorstr='#FFADD965',GradientType=0);
        background-color: #47afbd;
        margin-right: 30px;

      }
      .youji-cancel{
        display: inline-block;
        margin-top: 15px;
        width: 240px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 20px;
        color: #fff;
        border-radius: 30px;
        background: linear-gradient(-30deg right,transparent 0,rgba(173,217,101,.3) 40%,rgba(173,217,101,1) 90%);
        background: -webkit-linear-gradient(-30deg,transparent 0,rgba(173,217,101,.3) 40%,rgba(173,217,101,1) 90%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000',endColorstr='#FFADD965',GradientType=0);
        background-color: #f18d00;
      }
    }
    .demo-upload-list{
      display: inline-block;
      width: 60px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      border: 1px solid transparent;
      border-radius: 4px;
      overflow: hidden;
      background: #fff;
      position: relative;
      box-shadow: 0 1px 1px rgba(0,0,0,.2);
      margin-right: 4px;
    }
    .demo-upload-list img{
      width: 100%;
      height: 100%;
    }
    .demo-upload-list-cover{
      display: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
      display: block;
    }
    .demo-upload-list-cover i{
      color: #fff;
      font-size: 20px;
      cursor: pointer;
      margin: 0 2px;
    }
    .ivu-upload-drag{
      width: 70px !important;
      height: 70px !important;
      border: 1px dashed #f18d00;
    }
    .ivu-upload-drag>div{
      width: 70px !important;
      height: 70px !important;
      line-height: 90px !important;
    }
    .ivu-upload{
      width: 70px !important;
    }
    .ivu-icon{
      color: #f18d00;
      font-size: 40px !important;
    }

    .ql-toolbar.ql-snow + .ql-container.ql-snow{
      min-height: 500px;
    }
  }
</style>
