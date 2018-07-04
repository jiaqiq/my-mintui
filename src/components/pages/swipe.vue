<template>
    <div id="swipe">
        <heading></heading>

        <mt-swipe :auto="3000">
            <mt-swipe-item class="swipeItem1">
                <img src="@/assets/imgs/1.jpg" alt="1">
            </mt-swipe-item>
            <mt-swipe-item class="swipeItem2">
                <img src="@/assets/imgs/2.jpg" alt="2">
            </mt-swipe-item>
            <mt-swipe-item class="swipeItem3">
                <img src="@/assets/imgs/3.jpg" alt="3">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
import head from '@/components/common/head'

export default {
    components: {
        heading: head
    }
}
</script>

<style lang="scss">
#swipe {
    height: 5rem;
    img {
        width: 100%;
        height: 100%;
    }
    .swipeItem1 {
       background: red;
    }
    .swipeItem2 {
       background: purple;
    }
    .swipeItem3 {
       background: green;
    }
}
</style>


