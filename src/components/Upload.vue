<template>
    <div>
      <el-container direction="vertical" style="margin-top: 100px;margin-left: 200px">
        <p style="font-weight: bold;margin-bottom: 50px">数据导入</p>
        <el-input style="width: 500px;"
          placeholder="文本库名称：阿三"
          v-model="textTitle"
          clearable>
        </el-input>

        <p style="margin-top: 50px">导入文件</p>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
          style="margin-top: 30px">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">注意只能上传Excel文件且不能大于10M，Excel文件第一行为标题且必须有值，否则该列数据无效！</div>
        </el-upload>

        <p style="margin-top: 50px">标题映射</p>
        <el-container style="margin-top: 30px">
          <el-input style="width: 500px;"
                    placeholder="Excel单元格标题"
                    v-model="textTitle"
                    clearable>
          </el-input>
          <el-input style="width: 500px;"
                    placeholder="目标字段"
                    v-model="textTitle"
                    clearable>
          </el-input>
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
            textTitle:''
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
