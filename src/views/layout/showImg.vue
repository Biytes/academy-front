<template lang="html">
  <div class="img-page" v-show="imagePage.isShow">
    <img :src="imagePage.currentImg" alt="">
    <div class="block" @click="hideImagePage"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState([
      'imagePage'
    ])
  },
  methods: {
    ...mapMutations([
      'hideImagePage'
    ])
  }
}
</script>

<style lang="css">
.img-page{
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(28, 27, 27, 0.77);
  z-index: 10
}
.img-page img{
  right: 520px;
  width:450px;
  margin: 0 auto;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.img-page .block{
  z-index: -1;
  position: fixed;
  width: 100%;
  height: 100%;
}
</style>
