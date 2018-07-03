<template>
  <div class="wrapper">
    <div class="box1">{{msg}}</div>
    <div class="box2">{{msg}}</div>
    <div class="box3">{{msg}}</div>
    <div class="box4">{{msg}}</div>
    <div class="box5">{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
