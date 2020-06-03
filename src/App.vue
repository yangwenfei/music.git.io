<!--
 * @Author: your name
 * @Date: 2020-05-29 15:06:22
 * @LastEditTime: 2020-06-02 16:36:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack\src\App.vue
--> 
<template>
  <div id="app">
    <h1 class="hello">{{title}}</h1>
    <img :src="icon">
    <div class="box"></div>
  </div>  
</template>

<script>
import '@/asess/css/style'
import icon from './asess/images/company.png'
import print from "@/views/es6"
  export default {
    name:'App',
    data() {
      return {
        title: '',
        icon:icon
      }
    },
    mounted () {
      
      new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve('hello,world')
        reject('errorrmess')
        })
      }).then(res => {
        print()
        console.log(res)
        this.title=res
       
      }).catch(error=>{
        console.log(error)
      })
    }
  }
</script>

<style scoped>
  /* h1 {
    color: #ff5000;
  } */
</style>