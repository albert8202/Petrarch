<template>
  <div>
    <h1 style="color: black;text-align: center">{{this.article.title}}</h1>
    <el-container>
    <el-header style="color: grey; width:80%;margin-left: 10%;margin-top:10px"><h5 style="text-align: center">
      {{this.article.publish_time}}</h5>
      <h5 style="text-align: center">{{this.article.author}}</h5>
    </el-header>
    <el-main>
      <p v-for="(item, index) in article.content" style="width: 60%;word-wrap:break-word;text-indent: 2em;margin-left: 20%">{{item}}</p>
      <!-- 词云 -->
      <div
        style="width: 1600px;height: 25px;margin-left: 100px;margin-top: 100px;border-bottom:1px  solid dimgray;font-weight: bold">
        词云图
      </div>
      <div ref='wordCloudBox'></div>
    </el-main>
      <el-footer style="margin-bottom: 40px">
        <div
          style="width: 1600px;height: 25px;margin-left: 100px;margin-top: 100px;border-bottom:1px  solid dimgray;font-weight: bold">
          相关新闻
        </div>
        <div>
          <div v-for="(item,index) in related" :key="index" style="margin-left: 150px;margin-top: 20px"> <a :href="item.url">{{item.title}}</a></div>
        </div>
      </el-footer>
    </el-container>



  </div>
</template>

<script>
  import textLibApi from "@/api/textLib";
  import myCloud from '@/assets/myCloud'

  export default {
    name: "ArticleDetail",
    data() {
      return {
        related:[],
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
      //生成词云
      getWordCloud(wordList) {
        let wordOption = {
          wordList,
          size: [800, 600],  // 盒子的宽高
          svgElement: this.$refs.wordCloudBox  //使用ref选择节点
        };
        myCloud(wordOption)
      },
      getSingleArticle() {
        textLibApi.getSingleArticle(this.lib_id, this.article_id).then(res => {
          this.article = res.data.data.data
          this.words_cloud = res.data.data.cloud
          this.getWordCloud(this.words_cloud)
          textLibApi.getRelatedArticle(this.lib_id, this.article_id).then(res2=>{
            this.related = res2.data.data
            console.log(this.related)
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>
