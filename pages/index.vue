<template>
  <main class="min-h-screen">
    <div class="space-y-24">
      <HomeIntro />
      <HomeSocialLinks />
      <HomeFeaturedProjects />
      <HomeFeaturedArticles />
      <HomeNewsletter />
    </div>
  </main>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Cavin Macwan",
        "url": "https://cavinmacwan.com",
        "image": "https://www.cavinmacwan.com/avatar.jpeg",
        "sameAs": [
          "https://twitter.com/cavin_1910",
          "https://www.linkedin.com/in/cavin-macwan",
          "https://github.com/cavin-macwan"
        ],
        "jobTitle": "Co-Founder",
        "worksFor": {
          "@type": "Organization",
          "name": "Meticha"
        },
        "description": "Cavin Macwan is a mobile app developer specializing in Jetpack Compose, Flutter, and Kotlin. He is the Co-Founder of Meticha and shares insights for indie devs.",
        "knowsAbout": ["Jetpack Compose", "Flutter", "Kotlin", "Android Development"]
      })
    }
  ]
})
</script>
