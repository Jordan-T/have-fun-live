<template>
  <div class="c-my-loader"></div>
</template>

<style lang="scss">
.c-my-loader {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;

  &::before {
    content: "";
    width: 1em;
    height: 1em;
    border: solid 0.15em transparent;
    border-bottom-color: var(--primary-color);
    border-radius: 999999px;
    animation: myLoader 1000ms cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
  }
}

@keyframes myLoader {
  to {
    transform: rotate(360deg);
  }
}
</style>
