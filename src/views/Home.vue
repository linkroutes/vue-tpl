<template>
  <div class="page-home">
    <HelloWorld msg="这是一个简单的vue全家桶项目模板"/>
    <br/>
    <br/>
    <router-link to="page2">
      go page2
    </router-link>

    <br/>
    <br/>
    <img src="" class="avatar">
  </div>
</template>

<script>

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
.page-home{
  .avatar{
    width: 2rem;
    height: 2rem;
    @include gPlaceholder();
    margin: 0 auto;
  }
}
</style>
