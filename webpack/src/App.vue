<!--
 * @Author: your name
 * @Date: 2020-05-29 15:06:22
 * @LastEditTime: 2020-05-29 15:45:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack\src\App.vue
--> 
<template>
  <div id="app">
    <h1>{{title}}</h1>
  </div>  
</template>

<script>
  export default {
    name:'App',
    data() {
      return {
        title: ''
      }
    },
    mounted () {
      new Promise(resolve => {
      setTimeout(() => {
        resolve('hello')
        })
      }).then(res => {
        console.log(res)
        this.title=res
      })
    }
  }
</script>

<style scoped>
  h1 {
    color: #ff5000;
  }
</style>