//词云组件.vue
<template>
  <div class="siderBar">
    <!-- 词云 -->
    <div ref='wordCloudBox'></div>
  </div>
</template>

<script>
    import myCloud from '@/assets/myCloud.js'

    export default {
        name: 'siderBar',
        data() {
            return {};
        },

        methods: {
            //生成词云
            getWordCloud(wordList) {
                let wordOption = {
                    wordList,
                    size: [257, 257],  // 盒子的宽高
                    svgElement: this.$refs.wordCloudBox  //使用ref选择节点
                };
                myCloud(wordOption)
            },

        },

        mounted() {
            let wordList = [
                {text: 'vue', size: 20},
                {text: 'html', size: 25},
                {text: 'js', size: 30},
            ];
            this.getWordCloud(wordList)
        },

    }


</script>
