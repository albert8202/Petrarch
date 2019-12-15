<template>
  <div>
    <div>我的项目</div>
    <span>

    </span>
    <div style="width: 70%;margin-left: 15%">
      <el-button type="text" size="small" style="margin-left: 100px" @click="isLibCreateShow = true"><i class="el-icon-upload el-icon--right"></i>新建文本库</el-button>
      <!--create new textLib-->
      <el-dialog title="新建文本库" :visible.sync="isLibCreateShow" style="width: 60%;margin-left: 20%">
        <el-form :model="form">
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
          <el-button type="primary" @click="isLibCreateShow = false">新 建</el-button>
        </div>
      </el-dialog>

      <el-table
        ref="mutipleTable"
        :data="tableData"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange"
      >

        <el-table-column prop="libId"  label="序号" style="width: 5%" align="center"></el-table-column>
        <el-table-column prop="libTitle" label="文本库标题" style="width: 20%" align="center"></el-table-column>
        <el-table-column prop="libDesc" label="描述"  style="color: dimgray;width: 30%" align="center"></el-table-column>
        <el-table-column prop="libNum" label="数量" style="width: 10%" align="center"></el-table-column>
        <el-table-column prop="createTime" label="创建时间" style="width: 15%" align="center"></el-table-column>
        <el-dropdown>
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">黄金糕</el-dropdown-item>
              <el-dropdown-item command="b">狮子头</el-dropdown-item>
              <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
              <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">

      <el-pagination
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyProject",
  data() {
    return {
      tableData: [
        {
          libId:1,
          libTitle: "这是文本库的标题",
          libDesc: "文本库描述",
          libNum: "233",
          createTime: "2018-04-21"
        },
        {
          libId:1,
          libTitle: "这是文本库的标题",
          libDesc: "文本库描述",
          libNum: "233",
          createTime: "2018-04-21"
        },
        {
          libId:1,
          libTitle: "这是文本库的标题",
          libDesc: "文本库描述",
          libNum: "233",
          createTime: "2018-04-21"
        },
        {
          libId:1,
          libTitle: "这是文本库的标题",
          libDesc: "文本库描述",
          libNum: "233",
          createTime: "2018-04-21"
        },
        {
          libId:1,
          libTitle: "这是文本库的标题",
          libDesc: "文本库描述",
          libNum: "233",
          createTime: "2018-04-21"
        },
        {
          libId:1,
          libTitle: "这是文本库的标题",
          libDesc: "文本库描述",
          libNum: "233",
          createTime: "2018-04-21"
        },
        {
          libId:1,
          libTitle: "这是文本库的标题",
          libDesc: "文本库描述",
          libNum: "233",
          createTime: "2018-04-21"
        },
        {
         libId:1,
          libTitle: "这是文本库的标题",
          libDesc: "文本库描述",
          libNum: "233",
          createTime: "2018-04-21"
        },
        {
          libId:1,
          libTitle: "这是文本库的标题",
          libDesc: "文本库描述",
          libNum: "233",
          createTime: "2018-04-21"
        },
        {
          libId:1,
          libTitle: "这是文本库的标题",
          libDesc: "文本库描述",
          libNum: "233",
          createTime: "2018-04-21"
        },
        {
          libId:1,
          libTitle: "这是文本库的标题",
          libDesc: "文本库描述",
          libNum: "233",
          createTime: "2018-04-21"
        },
        {
          libId:1,
          libTitle: "这是文本库的标题",
          libDesc: "文本库描述",
          libNum: "233",
          createTime: "2018-04-21"
        }
      ],
      isLibCreateShow:false,
      newLibInfor:{
        name:'',
        desc:''
      }
    };
  },
    methods:{

    }
};
</script>

<style scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #fc6c6c;
  }
</style>
