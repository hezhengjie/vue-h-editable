<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <span>输入</span><div class="h-content" v-editable="content"></div>
    </div>
    <div>
     <span>输出</span><div class="h-show-content">{{content}}</div>
     </div>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
  },
  data(){
    return {
      content:'请填些什么'
    }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.h-content,.h-show-content{
  display:inline-block;
  width: 300px;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  color: #000;
  border: 1px solid #f2f2f2;
  margin: 10px
}
</style>
