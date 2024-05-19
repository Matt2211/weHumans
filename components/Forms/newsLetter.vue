<template>
  <div class="flex flex-col gap-y-2">
    <p v-if="emailSuccess === null" class="text-we-blue-800 font-semibold">
      Stay updated on the latest features and digital legacy insights.
    </p>

    <form
      v-if="emailSuccess === null"
      ref="form"
      class="flex flex-col gap-2 md:flex-row"
      @submit.prevent="sendEmail"
    >
      <InputsFormInput
        id="user_email"
        type="email"
        name="user_email"
        placeholder="Email address"
        :autocomplete="autocomplete"
        :pattern="pattern"
        :maxlength="maxlength"
        class="w-full md:w-8/12"
        required
      />
      <ActionsBtnButton
        btnText="Subscribe"
        actionType="Submit"
        class="bg-we-teal-700 hover:bg-we-teal-800 h-10 w-full rounded-lg font-bold uppercase text-white transition-all duration-500 md:w-4/12"
      />
    </form>
    <div v-if="emailSuccess === true">
      <p class="text-we-teal-900 font-bold">
        Thank you for subscribing and joining us on this journey to shape your
        digital legacy. Together, we're redefining how we're remembered and
        ensuring that every story matters. Welcome to the weHumans community!
      </p>
    </div>
    <div v-if="emailSuccess === false" class="flex flex-col gap-y-2">
      <h2 class="text-2xl">Oops! Something went wrong...</h2>
      <p>
        We're sorry, it seems there was an issue with your submission. Please
        try again later or reach out to our
        <a
          href="mailto:help@wehumans.me"
          class="text-we-teal-800 hover:text-we-teal-900"
          >support team</a
        >
        for assistance. We appreciate your interest in joining the WeHumans
        community.
      </p>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  data() {
    return {
      emailSuccess: null,
    }
  },

  props: {
    autocomplete: {
      type: String,
      required: false,
      default: 'off',
    },
    maxlength: {
      type: Number,
      required: false,
      default: 256,
    },
    pattern: {
      type: String,
      required: false,
      // need to double escape the backslash!
      default: '^.+@.+\\.\\w+$',
    },
  },

  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          'service_jvlsz6j',
          'template_icis71f',
          this.$refs.form,
          'JiTadAO43XjwGFQOa',
        )
        .then(
          (result) => {
            this.emailSuccess = true
            console.log('SUCCESS!', result.text)
          },
          (error) => {
            this.emailSuccess = false
            console.log('FAILED...', error.text)
          },
        )
    },
  },
}
</script>
