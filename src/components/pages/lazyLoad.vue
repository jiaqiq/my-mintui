<template>
    <div id="lazyLoad">
        <heading :title1="title"></heading>

        <ul>
            <li v-for="item in list" :key="item">
                <img v-lazy.lazyLoad="item">
                <!-- 若列表不在 window 上滚动，则需要将被滚动元素的 id:lazyLoad属性以修饰符的形式传递给 v-lazy 指令 -->
            </li>
        </ul>
    </div>
</template>

<script>
import head from '@/components/common/head'
import userApi from '@/api/home'

export default {
    components: {
        heading: head,
    },
    mounted() {
    },
   data() {
       return {
           title: '懒加载',
           list: ['../../static/imgs/1.jpg', '../../static/imgs/2.jpg', '../../static/imgs/3.jpg', '../../static/imgs/4.jpg',
           '../../static/imgs/5.jpg', '../../static/imgs/6.jpg', '../../static/imgs/7.jpg', '../../static/imgs/8.jpg',
           '../../static/imgs/9.jpg', '../../static/imgs/10.jpg', '../../static/imgs/11.jpeg', '../../static/imgs/12.jpeg', 
           '../../static/imgs/13.jpeg', '../../static/imgs/14.jpeg', '../../static/imgs/15.jpeg', '../../static/imgs/16.jpeg']
       }
   },
   methods: {
      
   }
}
</script>

<style lang="scss" scoped>
#lazyLoad {
    image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
}

</style>


