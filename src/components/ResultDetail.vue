<template>
  <el-main>
    <div align="center">
      <el-row>
        <div class="head">
          <span class="title">改革开放与21世纪世界社会主义”国际研讨会在中国社会科学院召开</span>
        </div>
      </el-row>
      <div class="description">
        <span class="description">时间</span>
        <span class="description">来源</span>
        <span class="description">作者</span>
      </div>
      <el-row>
        <div class="description">
          <span class="keyword">关键词：</span>
          <span class="description">中国社会科学院;越南社会科学翰林院;中国改革开放;世界社会主义;改革开放;老挝革新</span>
          <el-button size="mini" round="true">分享</el-button>
        </div>
      </el-row>

      <el-row class="content">
        <span
          class="content_text"
        >中国社会科学网讯（记者王禧玉）2018年是中国改革开放40周年和越南、老挝社会主义革新32周年。为深入总结改革开放的历史进程和实践经验，进一步深化社会主义国家改革开放和世界社会主义运动的认识，2018年11月1日，在北京举行了主题为“改革开放与21世纪世界社会主义”国际研讨会，会议由中国社会科学院、越南社会科学翰林院主办，中国社会科学院马克思主义研究院承办。以下全省略</span>
      </el-row>
    </div>
    <div>

      <el-row class="content">

      <el-button type="text" @click="toEventResult">
        <!---->
        <!---->
        <span>
          <i data-v-e4a61f98 class="fa fa-table fa-lg"></i> &nbsp;事件提取结果
        </span>
      </el-button>
        <el-table
          :data="tableData"
          border="true"
          stripe
          header-cell-style=" background-color: rgb(245, 247, 249); text-align: center"
          style="width: 100%;"
        >
          <el-table-column prop="date" label="实施者"></el-table-column>
          <el-table-column prop="name" label="受施者"></el-table-column>
          <el-table-column prop="address" label="触发词"></el-table-column>
          <el-table-column prop="address" label="时间"></el-table-column>
          <el-table-column prop="address" label="地点"></el-table-column>
          <el-table-column prop="address" label="事件提取"></el-table-column>
        </el-table>
      </el-row>
    </div>
  </el-main>
</template>

<script>
export default {
  name: "ResultDeetail",
  data() {
    return {};
  },
  methods:{
      toEventResult(){
          this.$router.push('/eventResult')
      }
  }
};
</script>

<style scoped>
.head {
  margin-top: 20px;
}
.description {
  margin-top: 10px;
  color: rgba(16, 16, 16, 0.61);
  font-size: 14px;
  text-align: center;
  font-family: SourceHanSansSC-regular;
}
.description .el-button {
  margin-left: 20px;
  padding: 5px 15px;
  color: rgb(88, 158, 248);
  background-color: rgb(238, 245, 254);
  border-color: rgb(186, 215, 251);
  text-align: center;
}
.title {
  color: rgba(16, 16, 16, 1);
  font-size: 20px;
  text-align: center;
  font-family: SourceHanSansSC-regular;
}
.keyword {
  color: rgba(185, 185, 185, 1);
  font-size: 14px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
.content {
  margin-top: 10px;
  padding: 0 50px;
  text-align: left;
}
.content_text {
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
</style>