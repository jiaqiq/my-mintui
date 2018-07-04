<template>
    <div>
        <mt-header fixed :title="heading.title">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right" @click="more"></mt-button>
        </mt-header>

        <mt-popup
            v-model="popupVisible"
            popup-transition="popup-fade">
            更多美好的事情即将发生！
        </mt-popup>
    </div>
</template>

<script>
export default {
    props: {
        title1: String
    },
    watch: {
        tilte1: function(val) {
            this.heading.title = val;
        }
    },
    data() {
        return {
            heading: {
                title: '首页'
            },
            popupVisible: false
        }
    },
    methods: {
        more() {
            this.popupVisible = true;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


