<template>
  <input
    :type="type"
    class="h-10 rounded-lg border-2 border-we-blue-200 px-2 placeholder-we-teal-600 outline-none transition-all duration-500 focus:border-we-teal-800"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    placeholder: {
      type: String,
      required: false,
    },
  },
}
</script>
