<script>
import ItemList from './components/ItemList.vue'

export default {
  data() {
    return {
      items: Array.from(Array(15), (_, index) => ({
        name: `foo${index}`,
        value: `bar${index}`,
      })),
    }
  },

  methods: {
    changeItem({ name, value }) {
      console.log({ name, value })
      this.items = this.items.map((item) => {
        if (item.name === name) {
          console.log(value)
          item.value = value
        }
        return item
      })
      console.log(this.items)
    },
  },
  components: {
    ItemList,
  },
}
</script>

<template>
  <ItemList :items="items" @onitemschange="changeItem" />
</template>

<style scoped></style>
