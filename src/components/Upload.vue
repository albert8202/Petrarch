<template>
    <div>
      <el-container direction="vertical" style="margin-top: 100px;margin-left: 200px">
        <p style="font-weight: bold;margin-bottom: 50px">数据导入</p>
        <div style="width: 500px; color: #8c939d">
          文本库名称： {{lib_name}}
        </div>

        <p style="margin-top: 50px">导入文件</p>
        <!--<el-upload-->
          <!--class="upload-demo"-->
          <!--action="https://jsonplaceholder.typicode.com/posts/"-->
          <!--:on-preview="handlePreview"-->
          <!--:on-remove="handleRemove"-->
          <!--:before-remove="beforeRemove"-->
          <!--multiple-->
          <!--:limit="3"-->
          <!--:on-exceed="handleExceed"-->
          <!--:file-list="fileList"-->
          <!--style="margin-top: 30px">-->
          <!--<el-button size="small" type="primary">点击上传</el-button>-->
          <!--<div slot="tip" class="el-upload__tip">注意只能上传Excel文件且不能大于10M，Excel文件第一行为标题且必须有值，否则该列数据无效！</div>-->
        <!--</el-upload>-->
        <el-upload style="display:inline-block" action="http://100.68.187.168:5000/dic" :auto-upload="false"
                   :limit="1" :on-change="uploadFile">
          <h4 style="color:rgb(216,83,75)">
            <i data-v-0f1723f0 class="el-icon-upload"></i> &nbsp;上传词典
          </h4>
        </el-upload>

        <p style="margin-top: 50px">标题映射</p>
        <el-container style="margin-top: 30px">
        </el-container>
        <el-button type="primary" style="margin-top: 30px">上传<i class="el-icon-upload el-icon--right"></i></el-button>
      </el-container>
      <el-footer style="color:  black;background-color:grey;margin-top:220px">
        <p style="margin-left: 650px">关于我们    服务协议   隐私政策</p>
        <p style="margin-left: 600px">Copyright 2018 上海萌泰数据科技有限公司</p>
      </el-footer>
    </div>
</template>

<script>
    export default {
        name: "Upload",
      data(){
          return{
            textTitle:'',
            uploadFile:null

        }
      },
      created(){
          this.lib_name = this.$route.query.name
      },
      methods:{
        uploadFile(file){
          console.log(file.raw)
          this.uploadFile=file.raw
        }
      }
    }
</script>

<style scoped>
  .el-button--primary {
    color: #FFF;
    background-color: #ef1f0fe8;
    border-color:#f56c6c;
    width: 80px;
    height: 35px;
  }

  .el-upload-list__item{
    width: 20%;
  }
</style>
