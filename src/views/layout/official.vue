<template lang="html">
  <div id="academy">
    <div>
        <imgShowcase></imgShowcase>
        <HeaderComponent></HeaderComponent>
        <scrollHeader></scrollHeader>
        <section id="wrapper-content">
          <router-view></router-view>
        </section>
        <FooterComponent></FooterComponent>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/header.vue'
import FooterComponent from '@/components/footer.vue'
import scrollHeader from '@/components/scrollHeader.vue'
import imgShowcase from '@/components/showImg.vue'
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    scrollHeader,
    imgShowcase
  }
}

/*

var wrapperHeader = new Vue({
  el: '#wrapper-header',
  data () {
    return {
      a: 1,
      errands: [
        { title: 'First Panel', introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione' },
        { title: 'Second Panel', introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione' },
        { title: 'Third Panel', introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione' },
        { title: 'Fourth Panel', introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione' },
        { title: 'Fifth Panel', introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aspernatur id, fuga quaerat laboriosam architecto maxime autem pariatur. Recusandae dolores iusto tempora cum libero, fugit inventore reiciendis laborum quo et officia quis voluptatibus non enim, exercitatione' }
      ]
    }
  }
})
*/
</script>

<style>
/*global*/
#wrapper-content {
  height: auto;
  min-height: 1200px;
  width: 100%;
  background: #ededed;
}
/*button-animate*/
</style>
