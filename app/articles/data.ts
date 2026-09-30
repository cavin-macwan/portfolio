export const articles = [
  {
    slug: "why-kotlin-uses-coroutines",
    title: "Why Kotlin uses Coroutines",
    description:
      "Discover why Kotlin introduced coroutines over threads, callbacks, and Rx, and how structured concurrency makes asynchronous code easier to manage.",
    date: "APRIL 06, 2025",
    published: "2025-04-06",
    image: "/articles/why-kotlin-uses-coroutines.svg",
    socialImage: "/articles/why-kotlin-uses-coroutines-code.png",
    shortDate: "APR 06, 2025",
    homeDescription:
      "A look at the ideas that made asynchronous code feel simple again.",
    listingDescription:
      "Why did Kotlin choose coroutines over threads, callbacks, and promises? A closer look at the tradeoffs behind the design.",
  },
  {
    slug: "master-permission-handling-in-jetpack-compose",
    title: "Master Permission Handling in Jetpack Compose",
    description:
      "Learn how to simplify Android runtime permissions in Jetpack Compose, reduce boilerplate, and handle dialogs and lifecycle events.",
    date: "MARCH 05, 2025",
    published: "2025-03-05",
    image: "/articles/master-permission-handling-in-jetpack-compose.svg",
    socialImage:
      "/articles/master-permission-handling-in-jetpack-compose-code.png",
    shortDate: "MAR 05, 2025",
    homeDescription: "Making Android permissions a little less painful.",
    listingDescription:
      "An approachable way to simplify Android runtime permissions, dialogs, and lifecycle events.",
  },
] as const;

export type Article = (typeof articles)[number];
