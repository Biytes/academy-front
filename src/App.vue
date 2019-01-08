<template lang="html">
  <router-view v-if="headerMenuItem"></router-view>
</template>

<script>
import '@css/custom/itemFigure.css'
import { mapState, mapMutations } from 'vuex'
import { getAcademyData } from '@api/index'
export default {
  data () {
    return {
    }
  },
  computed: mapState([
    'headerMenuItem',
    'headerMenuItemOrder'
  ]),
  mounted () {
    getAcademyData('category')
      .then(res => this.createMenu(res.data))
      .catch(error => console.log(error.response))
  },
  methods: {
    createMenu (allCategory) {
      let headerMenuItemOrder = this.headerMenuItemOrder
      let filteredMenu = allCategory.filter(item => headerMenuItemOrder.indexOf(item.id) >= 0)
      let orderedMenu = []
      for (let i of headerMenuItemOrder) {
        let index = filteredMenu.findIndex(item => item.id === i)
        orderedMenu.push(filteredMenu[index])
      }
      let complishedMenu = orderedMenu.map(item => {
        let section = item.name
        let subMenuItem = allCategory.filter(category => category.section === section)
        if (subMenuItem.length) {
          subMenuItem = subMenuItem.map(menuItem => {
            return {
              id: menuItem.id,
              title: menuItem.title,
              name: menuItem.name,
              path: `/${section}/${menuItem.name}`
            }
          })
        }
        return {
          id: item.id,
          title: item.title,
          name: item.name,
          path: subMenuItem.length ? `${subMenuItem[0].path}` : `/${item.name}`,
          subMenuItem: subMenuItem.length ? subMenuItem : null
        }
      })
      this.saveMenu(complishedMenu)
      console.log(complishedMenu)
    },
    ...mapMutations([
      'saveMenu'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>
