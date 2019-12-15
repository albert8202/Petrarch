<template>
  <div>
    <div>分析配置</div>
    <div>
      <el-button type="text" icon="el-icon-download" @click="importClick">导入</el-button>
      <el-button type="text" icon="el-icon-close">删除</el-button>
      <el-table
      ref="mutipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 1600px;margin-left: 100px"
      @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="40px"
          align="center">
        </el-table-column>
        <el-table-column
          prop="id"
          label="序号"
          width="50px"
          align="center">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="700"
          align="center">
        </el-table-column>
        <el-table-column
          prop="author"
          label="作者"
          width="100"
          style="color: dimgray"
          align="center">
        </el-table-column>
        <el-table-column
          prop="source"
          label="来源"
          width="300"
          align="center">
        </el-table-column>
        <el-table-column
          prop="date"
          label="时间"
          width="200"
          align="center">
        </el-table-column>
        <el-table-column
          label="操作"
          width="200"
          align="center">
          <router-link to="ArticleDetail">详情</router-link>
        </el-table-column>
      </el-table>
      <div class="block"  style="margin:100px">
      <el-pagination
        small
        layout="prev, pager, next"
        :total="total"
        :current-page="curPage"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>

    </div>
  </div>
</template>

<script>
  import textLibApi from "@/api/textLib";
  export default {
    name: "Configuration",
    data(){
      return{
          id:"",
          total:10,
          tableData:[],
          curPage:1,
      }
    },
    created(){
          this.id = this.$route.params.id;
          this.getTextLibData();
    },
    methods:{
        handleCurrentChange(val) {
            this.curPage = val;
            this.getTextLibData();
        },
        getTextLibData(){
            textLibApi.getTextLibData(this.id,this.curPage).then(res=>{
                console.log(res)
            })
        },
      importClick(){
        this.$router.push('/upload')
      }

    }
  }
</script>

<style scoped>

</style>
