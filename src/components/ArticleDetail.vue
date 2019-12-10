<template>
  <div>
    <h1 style="color: black;text-align: center">{{title}}</h1>
    <el-container direction="horizontal" style="color: grey;margin-left: 800px;margin-top:10px ">
      <h5 style="text-align: center">{{date}}</h5>
      <h5 style="text-align: center">{{source}}</h5>
    </el-container>
    <p style="margin-left: 100px;margin-top: 100px">{{content}}</p>
    <el-header style="width: 1600px;height: 25px;margin-left: 100px;margin-top: 100px;border-bottom:1px  solid dimgray;font-weight: bold">
      词云图
    </el-header>
    <el-container style="margin-left: 800px">这里有词云图，你看的到吗</el-container>
  </div>
</template>

<script>
  export default {
    name: "ArticleDetail",
    data(){
      return{
        title:'改革开放与21世纪世界社会主义国际研讨会在中国社会科学院召开',
        date:'2018年11月01日 18：22',
        source:'中国社会科学院网',
        author:'王曦玉',
        content:'此处略去一万字数。。。'
      }
    }
  }
</script>

<style scoped>

</style>
