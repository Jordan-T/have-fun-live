<script setup lang="ts">
import "../assets/scss/layout.scss";
</script>

<template>
  <div class="layout-wrapper layout-news-active">
    <div class="layout-topbar">
      <a class="menu-button"><i class="pi pi-bars"></i></a
      ><a href="#/" class="logo"
        ><img alt="logo" src="http://placehold.it/150x30"
      /></a>
      <ul class="topbar-menu">
        <li><a href="#/setup" class="">Get Started</a></li>
      </ul>
    </div>
    <div class="layout-sidebar">
      <a href="#/" class="logo"
        ><img alt="logo" src="http://placehold.it/150x30"
      /></a>
      <div class="layout-menu">
        <div class="menu-category">
          LOREM
          <!---->
        </div>
        <div class="menu-items">
          <RouterLink to="/">Accueil</RouterLink>
          <RouterLink to="/about">A propos</RouterLink>
          <RouterLink to="/offers">Offres</RouterLink>
        </div>
      </div>
    </div>
    <div class="layout-content">
      <div>
        <div class="content-section documentation">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.layout-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout-content {
  flex-grow: 1;
  background-color: var(--surface-b);
  color: var(--text-color);
}
</style>
