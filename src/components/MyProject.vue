<template>
  <div>
    <div>我的项目</div>
    <span>

    </span>
    <div style="width: 70%;margin-left: 15%">
      <el-button type="text" size="small" style="margin-left: 100px" @click="isLibCreateShow = true"><i class="el-icon-upload el-icon--right"></i>新建文本库</el-button>
      <!--create new textLib-->
      <el-dialog title="新建文本库" :visible.sync="isLibCreateShow"  style="width: 60%;margin-left: 20%">
        <el-form :model="newLibInfor">
          <el-form-item label="文本库名称" style="width: 80%;margin-left: 10%">
            <el-input v-model="newLibInfor.name"
                      placeholder="请输入文本库的标题"
                      autocomplete="off">
            </el-input>
          </el-form-item>
          <el-form-item label="文本库描述" style="width: 80%;margin:10% auto">
            <el-input v-model="newLibInfor.desc"
                      type="textarea"
                      placeholder="请输入文本库的描述"
                      autocomplete="off"
                      :autosize="{ minRows: 3, maxRows: 5}">
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="isLibCreateShow = false">取 消</el-button>
          <el-button type="primary" @click="createTextLib">新 建</el-button>
        </div>
      </el-dialog>

      <!--edit textLib-->
      <el-dialog title="修改文本库" :visible.sync="isLibEditShow" style="width: 60%;margin-left: 20%">
        <el-form :model="editLibInfor">
          <el-form-item label="文本库名称" style="width: 80%;margin-left: 10%">
            <el-input v-model="editLibInfor.name"
                      placeholder="请输入新的文本库的标题"
                      autocomplete="off">
            </el-input>
          </el-form-item>
          <el-form-item label="文本库描述" style="width: 80%;margin:10% auto">
            <el-input v-model="editLibInfor.desc"
                      type="textarea"
                      placeholder="请输入新的文本库的描述"
                      autocomplete="off"
                      :autosize="{ minRows: 3, maxRows: 5}">
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="isLibEditShow = false">取 消</el-button>
          <el-button type="primary" @click="isLibEditShow = false">修改</el-button>
        </div>
      </el-dialog>





      <el-table
        :data="tableData"
        tooltip-effect="dark"
        @current-change="handleCurrentChange"
      >

        <el-table-column prop="id" label="序号" style="width: 5%" align="center"></el-table-column>
        <el-table-column prop="textlibrary_name" label="文本库标题" style="width: 20%" align="center"></el-table-column>
        <el-table-column prop="description" label="描述"  style="color: dimgray;width: 30%" align="center"></el-table-column>
        <el-table-column prop="line_no" label="数量" style="width: 10%" align="center"></el-table-column>
        <el-table-column prop="create_time" label="创建时间" style="width: 15%" align="center"></el-table-column>
        <el-table-column label="操作" style="width: 10%" align="center">
          <el-button-group>
            <el-button type="primary" icon="el-icon-edit" @click="libEdit"></el-button>

            <el-button type="primary" icon="el-icon-delete" @click="libDelete"></el-button>
          </el-button-group>
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
  name: "MyProject",
  data() {
    return {
      curPage:1,
      total:0,
      clickRow:0,
      tableData: [],
      isLibCreateShow:false,
      newLibInfor:{
        name:'',
        desc:''
      },
      isLibEditShow:false,
      isLibDeleteShow:false,
      editLibInfor:{
        name:'',
        desc:''
      }
    };
  },
  created(){
    this.getAllTextLibData()
  },
    methods:{
    libEdit(){
      this.isLibEditShow=true
    }
    ,
      createTextLib(){
        this.isLibCreateShow = false
        console.log(this.newLibInfor)
        textLibApi.createTextLib(this.newLibInfor).then(res=>{
          console.log(res.data)
          this.$message(res.data.message)
          this.$router.go(0)
        })
      }
      ,
      libDelete() {

        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(res => {
          textLibApi.deleteTextLib()

          this.$message({
            type: 'success',
            message: res.date.message
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
  ,
      handleCurrentChange(val) {
        this.curPage = val;
        this.getTextLibData();
      },
      getAllTextLibData(){
        textLibApi.getAllTextLibData(this.curPage).then(res=>{
          this.total = res.data.data.total
          this.tableData = res.data.data.rows
          console.log(res.data.data)
        })
      }
    }
};
</script>

<style scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #fc6c6c;
  }
</style>
