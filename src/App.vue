<script setup lang="ts">
</script>

<template>
    <nav>
      <router-link to="/settings">Настройки</router-link>
      <router-link to="/incidents">Инциденты</router-link>
    </nav>
    <div class="router-container">
      <RouterView/>
    </div>
</template>

<style scoped>

nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;
  height: 50px;
}

nav a {
  margin: 0 10px;
}

.router-container {
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  top: 0;
  left: 100px;
  right: 100px;
  bottom: 0;

}
</style>
