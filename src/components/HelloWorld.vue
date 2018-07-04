<template>
  <div class="wrapper">
    <div class="box1">{{msg}}</div>
    <div class="box2">{{msg}}</div>
    <div class="box3">{{msg}}</div>
    <div class="box4">{{msg}}</div>
    <div class="box5">{{msg}}</div>
    this is 欢迎页
    <mt-button type="primary" @click="goHome">去首页</mt-button>
    <mt-button type="primary" @click="lazyLoad">懒加载</mt-button>
    <router-link to="/home">Go to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Vue'
    }
  },
  methods: {
    goHome() {
      this.$router.push('home');
    },
    lazyLoad() {
      this.$router.push('lazyLoad');
    }
  }
}
</script>

<style scoped>
.wrapper div {
  height: 1rem;
}
.box1 {
  width: 20%;
  background-color: coral;
}
.box2 {
  width: 40%;
  background-color: skyblue;
}
.box3 {
  width: 60%;
  background-color: palegreen;
}
.box4 {
  width: 80%;
  background-color: wheat;
}
.box5 {
  background-color: darkred;
}
</style>
