<template>
  <main>
    <section id="box1" class="flex min-h-screen flex-col align-middle">
      <div class="w-12/12 container m-auto px-8 md:w-8/12 lg:w-5/12">
        <div class="flex flex-col gap-y-8">
          <div class="flex gap-x-2 align-middle">
            <img
              src="images/logo/weHumans-teal-light.svg"
              width="200"
              height="50"
              alt="weHumans logo"
              class="gsap-logo"
            />
          </div>

          <h1 class="text-3xl text-we-blue-600 md:text-4xl lg:text-5xl">
            We are like clouds, similar among us, but no one is identical to
            another.
          </h1>

          <h2 class="text-[16px] text-we-blue-800 md:text-[18px]">
            At weHumans, we are working to go beyond the ordinary. With our
            innovative platform, you can create your immortal digital self,
            ensuring your legacy lives on. Our AI technology learns about you,
            shaping a personalized experience. Get your digital tombstone and
            create your digital will. Decide what will happen with your social
            media contents, and leave messages for the future, ensuring your
            voice endures beyond your time.
          </h2>
          <FormsNewsLetter />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { gsap } from 'gsap'
export default {
  head: {
    title: 'Crafting Digital Immortality: Preserve, Embrace, Shape Legacy',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Preserve your past, embrace your present, shape your future: Crafting your digital immortality with us.',
      },
    ],
  },

  mounted() {
    //let loopTl = gsap.timeline({ repeat: -1, yoyo: true })

    // loopTl.to =
    //   ('#box2', { y: 200, duration: 1, scale: 4, ease: 'power1.inOut' })

    let loadTl = gsap.timeline()
    loadTl.from('#box1', { opacity: 0, duration: 2 })
    //loadTl.from('#box2', { y: 0, opacity: 0, scale: 0.8, duration: 1 })
  },
}
</script>
