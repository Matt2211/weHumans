<template>
  <div class="container m-auto flex h-14 items-center justify-between">
    <Nuxt-link to="/">
      <div class=" flex align-middle gap-x-2">
        <img src="/images/logo/weHumans.png" width="50" alt="Sypnos logo" />
        <h2 class=" font-extralight">wehumans</h2>
      </div>
    </Nuxt-link>

    <nav>
      <ul class="flex list-none gap-x-5 align-middle text-gray-600">
        <li>About</li>
        <li>How it works</li>
        <li>Contacts</li>
      </ul>
    </nav>

    <nav>
      <ul
        class="flex list-none gap-x-5 align-middle font-semibold text-gray-800"
      >
        <Nuxt-link to="/login">
          <li>Log in</li>
        </Nuxt-link>
        <Nuxt-link to="/register">
          <li>Create account</li>
        </Nuxt-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {}
</script>
