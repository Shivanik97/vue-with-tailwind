<template>
  <ul class="text-right p-4 pr-4 font-semibold bg-gray-200">
    <li class="inline mx-2 text-pink-600 hover:text-pink-400 cursor-pointer"><router-link to="/">Home</router-link></li>
    <li class="inline mx-2 text-pink-600 hover:text-pink-400 cursor-pointer"><router-link to="/login">Log in</router-link></li>
    <li class="inline mx-2 text-pink-600 hover:text-pink-400 cursor-pointer"><router-link to="/article">About</router-link></li>
    <li class="inline mx-2 text-pink-600 hover:text-pink-400 cursor-pointer"><router-link to="/contact">Contact us</router-link></li>
  </ul>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    links: [String]
  },
}
</script>
