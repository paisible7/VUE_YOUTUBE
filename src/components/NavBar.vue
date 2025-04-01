<template>
      <header class="m-8 mt-4 rounded-xl flex justify-center bg-white shadow-sm">
    <nav class="w-full mx-12 flex flex-row justify-center items-center">
        
      <Router-link to="/" class="w-10">
        <img src="/logo.svg" alt="logo">
      </Router-link>
    <form>
      <input 
      class="my-3 ml-8 py-3 bg-gray-100 text-sm px-4 rounded-xl " 
      type="text" 
      placeholder="Recherche...">
    </form>
    </nav>
  </header>
</template>

<script>
export default {
    name : "NavBar"
}
</script>