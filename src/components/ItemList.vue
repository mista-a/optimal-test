<script>
export default {
  props: ['items'],
  name: 'ItemList',
  data() {
    return {
      choosedItem: this.items[0],
      editItemValue: this.items[0].value,
    }
  },

  methods: {
    editItem(item) {
      this.editItemValue = item.value
      this.choosedItem = item
    },
    emitItemsChange(item) {
      this.$emit('onitemschange', item)
    },
  },
}
</script>

<template>
  <div class="item-list">
    <form class="edit-form">
      <label class="edit-item">
        <span> {{ choosedItem.name }} </span>
        <input
          class="data-input"
          type="text"
          :name="choosedItem.name"
          v-model="editItemValue"
        />
      </label>
      <button
        type="button"
        @click="
          emitItemsChange({ name: choosedItem.name, value: editItemValue })
        "
      >
        Accept
      </button>
    </form>
    <div class="items">
      <button
        v-for="{ name, value } in items"
        type="button"
        @click="editItem({ name, value })"
      >
        {{ name }} : {{ value }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.item-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}
.edit-form {
  display: flex;
  gap: 10px;
}
.edit-item {
  display: flex;
  flex-direction: column;
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
</style>
