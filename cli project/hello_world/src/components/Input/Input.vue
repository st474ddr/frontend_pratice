<script>
    export default{
        name: 'Input',
        props: {
            text:{
                type: String,
                required: true
            }
        },
        computed:{
            inputText: {
                get(){
                    return this.text;
                },
                set(val){
                    // this.$emit('textChange', val); //需搭配觸發事件 較繁瑣
                    this.$emit('update:text', val);
                }
            }
        }
    }
</script>

<template src="./template.html">
    
</template>
<style src="./style.css" scoped></style>