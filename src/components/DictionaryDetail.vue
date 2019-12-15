<template>
<div >
    <pre>
    <span  v-html="content">{{this.content}}</span>
    </pre>
</div>
    
</template>

<script>
import dictionaryApi from "@/api/dictionary";
export default {
    name: 'DictionaryDetail',
    data(){
        return{
            id:1,
            content:'sad'
        }
    },
    created(){
        this.id = this.$route.params.id
        this.getDictionary()
    },
    methods:{
        getDictionary(){
            dictionaryApi.getDictionary(this.id).then(res => {
                console.log(res.data)
                this.content=res.data.data.content
            });
        }
    }
}
</script>

<style scoped>

</style>