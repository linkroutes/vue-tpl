<template>
  <div class="home">
    <HelloWorld msg="这是一个简单的vue全家桶项目模板"/>
    <br>
    <router-link to="page2">
      go page2
    </router-link>
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
