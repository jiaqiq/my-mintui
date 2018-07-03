<template>
    <div id="home">
        <heading></heading>

        <ul
            v-infinite-scroll="selectUser"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10">
            <li v-for="item in list" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
import head from '@/components/common/head'
import userApi from '@/api/home'

export default {
    components: {
        heading: head
    },
    mounted() {
        this.selectUser();
    },
   data() {
       return {
           list: []
       }
   },
   methods: {
        selectUser() {
            this.loading = true;
            let data = {};
            userApi.queryAll(data).then(res => {
                this.list = res.data.result;
                this.loading = false;
            })
            .catch(err => {
                console.log(err)
            })
        },
   }
}
</script>

<style lang="scss" scoped>

</style>


