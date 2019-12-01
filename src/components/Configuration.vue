<template>
  <div>
    <div>分析配置</div>
    <div>
      <LineForProject
        v-bind:number="1" title="标题11111111111111111" date="今天" source="人民日报" author="爸爸" >
      </LineForProject>
      <LineForProject
        v-bind:number="2" title="标题22222222222222222" date="今天" source="人民日报" author="爸爸" >
      </LineForProject>
      <LineForProject
        v-bind:number="3" title="标题33333" date="今天" source="人民日报" author="爸爸" >
      </LineForProject>
      <LineForProject
        v-bind:number="4" title="标题444444444" date="今天" source="人民日报" author="爸爸" >
      </LineForProject>
    </div>
  </div>
</template>

<script>
  import LineForProject from "./sub/LineForProject";

  export default {
    name: "Configuration",
    components: {LineForProject}
  }
</script>

<style scoped>

</style>
