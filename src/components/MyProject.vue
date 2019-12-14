<template>
  <div>
    <div>我的项目</div>
    <span>
      
    </span>
    <div>
      <el-table
        ref="mutipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 1600px;margin-left: 100px"
        @selection-change="handleSelectionChange"
      >
        <el-table-column prop="libId"  label="序号" width="55" align="center"></el-table-column>
        <el-table-column prop="libTitle" label="文本库标题" width="700" align="center"></el-table-column>
        <el-table-column prop="libDesc" label="描述" width="100" style="color: dimgray" align="center"></el-table-column>
        <el-table-column prop="libNum" label="数量" width="300" align="center"></el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="200" align="center"></el-table-column>
        <el-table-column  width="200" align="center">
          <el-dropdown  type="primary">
            <span class="el-dropdown-link">
              操作
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="data">数据</el-dropdown-item>
              <el-dropdown-item command="delete">删除</el-dropdown-item>
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
      ]
    };
  }
};
</script>

<style scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #fc6c6c;
  }
</style>
