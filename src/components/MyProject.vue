<template>
  <div>
    <div>我的项目</div>
    <div>
      <el-table
        ref="mutipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 1600px;margin-left: 100px"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column prop="title" label="标题" width="700" align="center"></el-table-column>
        <el-table-column prop="author" label="作者" width="100" style="color: dimgray" align="center"></el-table-column>
        <el-table-column prop="source" label="来源" width="300" align="center"></el-table-column>
        <el-table-column prop="date" label="时间" width="200" align="center"></el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <router-link to="ArticleDetail">详情</router-link>
        </el-table-column>
      </el-table>
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
          title: "[期刊论文]我国社会主要矛盾转化与新时代中国社会建设目标定位",
          author: "谁写的",
          source: "《大连理工大学学报（社会科学版）》",
          date: "2018年4期"
        },
        {
          title: "[期刊论文]我国社会主要矛盾转化与新时代中国社会建设目标定位",
          author: "谁写的",
          source: "《大连理工大学学报（社会科学版）》",
          date: "2018年4期"
        },
        {
          title: "[期刊论文]我国社会主要矛盾转化与新时代中国社会建设目标定位",
          author: "谁写的",
          source: "《大连理工大学学报（社会科学版）》",
          date: "2018年4期"
        },
        {
          title: "[期刊论文]我国社会主要矛盾转化与新时代中国社会建设目标定位",
          author: "谁写的",
          source: "《大连理工大学学报（社会科学版）》",
          date: "2018年4期"
        },
        {
          title: "[期刊论文]我国社会主要矛盾转化与新时代中国社会建设目标定位",
          author: "谁写的",
          source: "《大连理工大学学报（社会科学版）》",
          date: "2018年4期"
        },
        {
          title: "[期刊论文]我国社会主要矛盾转化与新时代中国社会建设目标定位",
          author: "谁写的",
          source: "《大连理工大学学报（社会科学版）》",
          date: "2018年4期"
        },
        {
          title: "[期刊论文]我国社会主要矛盾转化与新时代中国社会建设目标定位",
          author: "谁写的",
          source: "《大连理工大学学报（社会科学版）》",
          date: "2018年4期"
        },
        {
          title: "[期刊论文]我国社会主要矛盾转化与新时代中国社会建设目标定位",
          author: "谁写的",
          source: "《大连理工大学学报（社会科学版）》",
          date: "2018年4期"
        },
        {
          title: "[期刊论文]我国社会主要矛盾转化与新时代中国社会建设目标定位",
          author: "谁写的",
          source: "《大连理工大学学报（社会科学版）》",
          date: "2018年4期"
        },
        {
          title: "[期刊论文]我国社会主要矛盾转化与新时代中国社会建设目标定位",
          author: "谁写的",
          source: "《大连理工大学学报（社会科学版）》",
          date: "2018年4期"
        },
        {
          title: "[期刊论文]我国社会主要矛盾转化与新时代中国社会建设目标定位",
          author: "谁写的",
          source: "《大连理工大学学报（社会科学版）》",
          date: "2018年4期"
        },
        {
          title: "[期刊论文]我国社会主要矛盾转化与新时代中国社会建设目标定位",
          author: "谁写的",
          source: "《大连理工大学学报（社会科学版）》",
          date: "2018年4期"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
