<template>
  <main>
    <section
      id="box1"
      class="bg-404 flex min-h-screen flex-col bg-cover align-middle"
    >
      <div class="w-12/12 container m-auto px-8 md:w-8/12 lg:w-5/12">
        <div class="flex flex-col gap-y-8">
          <h1 class="text-we-blue-600 text-3xl md:text-4xl lg:text-5xl">
            404 - Oops! Page Not Found
          </h1>
          <h2 class="text-we-blue-800 text-[18px]">
            It seems you've stumbled upon a missing piece of our digital legacy.
            While this page may be lost, your story doesn't have to be.
          </h2>
          <p class="text-we-blue-800">
            Return to our homepage to continue exploring our features that help
            ensure your legacy endures. If you need assistance, our support team
            is here to help.
          </p>
          <p class="text-we-blue-800 font-semibold">
            Thank you for being part of WeHumans. Your legacy matters.
          </p>
          <NuxtLink to="/">
            <ActionsBtnButton
              btnText="Homepage"
              class="bg-we-teal-700 hover:bg-we-teal-800 h-10 w-full rounded-lg font-bold uppercase text-white transition-all duration-500 md:w-4/12"
            />
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  props: ['error'],
  layout: '404',
}
</script>
