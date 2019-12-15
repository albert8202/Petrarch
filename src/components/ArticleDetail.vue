<template>
  <div>
    <h1 style="color: black;text-align: center">{{this.article.title}}</h1>
    <el-container>
    <el-header style="color: grey; width:80%;margin-left: 10%;margin-top:10px"><h5 style="text-align: center">
      {{this.article.publish_time}}</h5>
      <h5 style="text-align: center">{{this.article.url}}</h5>
      <h5 style="text-align: center">{{this.article.author}}</h5>
    </el-header>
    <el-main>
      <p style="width: 60%;margin-left: 20%; margin-top:5%;text-align: center">{{this.article.content}}</p>


    </el-main>
    </el-container>

    <el-header
      style="width: 1600px;height: 25px;margin-left: 100px;margin-top: 100px;border-bottom:1px  solid dimgray;font-weight: bold">
      词云图
    </el-header>
    <el-container style="margin-left: 800px">这里有词云图，你看的到吗</el-container>
  </div>
</template>

<script>
  import textLibApi from "@/api/textLib";

  export default {
    name: "ArticleDetail",
    data() {
      return {
        article: {},
        words_cloud: {},
        lib_id: 0,
        article_id: 0
      }
    },
    created() {
      this.article_id = this.$route.params.id
      this.lib_id = this.$route.params.lib
      this.getSingleArticle()
    },
    methods: {
      getSingleArticle() {
        textLibApi.getSingleArticle(this.lib_id, this.article_id).then(res => {
          this.article = res.data.data.data
          this.words_cloud = res.data.data.cloud
        })
      }
    }
  }
</script>

<style scoped>

</style>
