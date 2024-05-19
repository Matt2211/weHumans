<template>
  <button class="btn" :type="actionType">
    {{ btnText }}
  </button>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      required: true,
    },
    actionType: {
      type: String,
      required: false,
      default: undefined,
    },
  },
}
</script>
