<template>
  <Transition name="toast">
    <div v-if="show" class="toast" :class="type">
      {{ message }}
    </div>
  </Transition>
</template>

<script setup>
import { ref } from "vue";

const show = ref(false);
const message = ref("");
const type = ref("success");

const showToast = (msg, toastType = "success") => {
  message.value = msg;
  type.value = toastType;
  show.value = true;

  setTimeout(() => {
    show.value = false;
  }, 3000);
};

defineExpose({ showToast });
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  opacity: 0.95;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

/* Custom Colors */
.success {
  background: linear-gradient(45deg, #8b4fff, #9d61ff);
}

.error {
  background: linear-gradient(45deg, #ff3589, #8b4fff);
}

/* Slide-in and fade-out animation */
.toast-enter-active,
.toast-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.toast-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.toast-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
