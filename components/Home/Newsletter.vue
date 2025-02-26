<template>
  <div>
    <div class="mb-6 flex items-center gap-3">
      <div
        class="flex-none rounded-full p-1 text-primary-500 bg-primary-500/10"
      >
        <div class="h-1.5 w-1.5 rounded-full bg-current"></div>
      </div>
      <h2 class="uppercase text-xs font-semibold text-gray-400">
        STAY IN TOUCH
      </h2>
    </div>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
      Get notified when I publish something new, and unsubscribe at any time.
    </p>
    <form @submit.prevent="subscribeNewsletter" class="flex items-center gap-3 mt-6">
        <UInput
          type="email"
          v-model="email"
          placeholder="Email Address"
          icon="i-heroicons-envelope"
          class="flex-1"
          size="lg"
        />
        <UButton
          :disabled="loading"
          type="submit"
          :label="loading ? 'Joining...' : 'Join →'"
          size="lg"
          color="black"
        />
    </form>
  </div>
  <Toast ref="toastRef" />
</template>
<script setup>
import Toast from '../content/Toast.vue';

const email = ref("");
const loading = ref(false);
const toastRef = ref(null);
const subscribeNewsletter = async () => {
  if (!email.value) return;

  loading.value = true;
  const formData = { email: email.value };

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbxpCP9QgZkAhVeASqkAQQAvS-Fn1SrXEgHfmRRWWqXMdUAqBSryWSTDiyIlUSkznSo8wQ/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    toastRef.value.showToast("Subscription successful!", "success");
    email.value = "";
  } catch (error) {
    console.error("Error:", error);
    toastRef.value.showToast("Network error. Please try again.", "error");
  } finally {
    loading.value = false;
  }
};
</script>
