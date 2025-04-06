---
title: "Why Kotlin uses Coroutines"
description: "Discover why Kotlin introduced Coroutines over traditional threads, callbacks, and Rx.
This article breaks down the design decisions, pitfalls of older approaches, and the power of structured concurrency."
published: 2025/04/06
slug: "why-kotlin-uses-coroutines"
---

![Why Kotlin Uses Coroutines Banner](https://cavinmacwan.com/articles/why-kotlin-uses-coroutines.png)

You might have been using **Coroutines** for asynchronous programming in Kotlin for a long time, but have you ever wondered why JetBrains decided to introduce Coroutines instead of relying on plain `async/await` like other languages? Or why they chose Coroutines when `RxJava` and `Threads` were already available? 🤔

In this article, we'll dive into the design decisions behind Kotlin Coroutines, explore the alternatives (Threads, Callbacks, Futures/Promises), and see how Coroutines give us the best of both worlds. So without wasting anymore time, let's get started! 😎

<img src="https://media.giphy.com/media/ZC3ro4RBCJmhGERE8T/giphy.gif?cid=790b7611nzqdr9mh5erwwushbib4sjsbxaaxt1bi9hddfvuq&ep=v1_gifs_search&rid=giphy.gif&ct=g" width="1000"  />

Let's look at this scenario, you're an Android Developer and you want to make some API calls. Sounds easy, right? Let's look at the pseudo code that we describes the things that we want to have

```kotlin
fun getNewsList(): List<News> {
    val news = getNewsFromApi()
    val sortedNews = news.sortedByDescending { it.publishedAt }
    return sortedNews
}
```

The above code looks simple, but sadly, this will not work because if you run this code in the main thread, then it will crash because each Application has only one thread that can modify the View. So if this function can't be implemented in this way, then we've to go towards thread switching.

So after we implement the thread switching, our code will something look like this:

```kotlin
fun getNewsList(onResult: (List<News>) -> Unit) {
    thread {
        val newsList = getNewsFromApi()
        val sortedNews = news.sortedByDescending { it.publishedAt }
        onResult(sortedNews)
    }
}
```

Then, you can use the function like this:

```kotlin
getNewsList { list ->
    // use the list here
}
```

Now, you might be wondering that everything is working fine and we don't have any issues with the code, but there are some things that are wrong with threads:

- They're not cheap (i.e. it takes around 1–2 MB of memory per thread)
- Callback hell
- Thread cancellation

We've been using threads for a very long time to achieve this kind of stuff. But in order to explain this point, let's see how many threads we can have in our app.

Let's say we create 100 threads. Will it crash? No, it won't. Even a simple phone can handle 100 threads these days.

Now let's say we create 1,000 threads. Well, it's a bit complicated, but it will still work.

10,000 threads? Now that's a challenge, because if one thread takes 2 MB of memory then 10,000 threads can take up to 20 GB of memory 🤯. I mean, it's still possible if you have that much high-end system. But what if we create 100,000 threads? Well, unless you're Bill Gates or Jeff Bezos, good luck with that.

You might be wondering why I would ever create 100,000 threads? Let's say you're creating a backend app in Java and you have one method called `postStory` that creates a thread to do some work, and you have 100,000 concurrent users using your app. Makes sense now, doesn't it?

<img src="https://media.giphy.com/media/9VuH9fauXXxxtmqVER/giphy.gif?cid=790b7611es7xcvzj6wsml7s57ut7c3wphqwr2ggfwrc9box3&ep=v1_gifs_search&rid=giphy.gif&ct=g" width="1000"  />

The solution to this problem that many devs are still using is **Callbacks**. Let's take an example:

```kotlin
fun requestTokenAsync(callback: (Token) -> Unit){
// makes request for a token, invokes callback when done
// returns immediately
}
```

```kotlin
fun createPostAsync(token: Token, item: Item, callback: (Post) -> Unit){
// sends item to server, invokes callback when done
// returns immediately
}
```

```kotlin
fun postItem(item: Item){
    requestTokenAsync { token ->
        createPostAsync(token, item) { post ->
            processPost(post)
        }
    }
}
```

The first roadblock is that this implementation doesn't support cancellation. We might make cancelable callback functions, but it's not easy. Not only does each callback function need to be specially implemented for cancellation, but to cancel them we need to collect all the objects separately.

The second issue is that this creates callback hell. In this example, it doesn't look like much. But if you implement error handling and cancellation in this code, it will soon become a nightmare to handle. Also, if you want to call certain APIs in parallel, then good luck with that 😉

So what's the solution to this then?

<img src="https://media.giphy.com/media/3og0ICZh82LEsNjHoc/giphy.gif?cid=ecf05e47699j5qqm64wxp7r0eruhetks6ffpi5wek0zstzjg&ep=v1_gifs_search&rid=giphy.gif&ct=g" width="1000"  />

The next solution that saves us from this callback hell is **Futures/Promises/Rx**. Although the names are different, the concept is the same in each. Now, instead of taking a result parameter, we wrap our result in some kind of promise/future object. Let's refactor our function to use futures instead of callbacks:

```kotlin
fun requestTokenAsync(): Promise<Token> {
    // makes request for a token
    // returns promise for a future result immediately
}
```

If we refactor every function like this, then we can write our `postItem` function like this:

```kotlin
fun postItem(item: Item) {
    requestTokenAsync ()
        .thenCompose { token -> createPostAsync(token, item) }
        .thenAccept { post -> processPost (post) }
}
```

This code is much nicer because of its composability and it propagates errors and exceptions as it should. But the only major drawback of this approach is the combinators like `.thenCompose` and `.thenAccept`. So even in this simple API call there are two combinators—imagine the scenario when you're writing a fully-fledged app. You'll have to learn so many functions and combinators just to use the library.

In the end, it's a good solution, but it's not the ideal solution we want. So what's the ideal solution? You guessed it right, it's none other than **Coroutines** 🎉

<img src="https://media.giphy.com/media/j0vs5H7Kcz3Pm9LRDa/giphy.gif?cid=790b7611t6xgf0wg9c1n4ykzehqwteryp2ngwh80s41tkye8&ep=v1_gifs_search&rid=giphy.gif&ct=g" width="1000"  />

Now, instead of writing the code and returning a `Future/Promise` object, we'll only mark the function with the `suspend` modifier like this:

```kotlin
suspend fun requestTokenAsync(): Token {
    // makes request for a token and suspends
    return token // returns the token when received
}
```

Now what is suspend modifier? It indicates that the operations happening inside it are asynchronous. Now let's see the code if we write it using Coroutines:

```kotlin
suspend fun postItem(item: Item) {
    val token = requestToken ()
    val post = createPost(token, item)
    processPost (post)
}
```

Did you notice anything? The code we wanted to write in the beginning is the same code after we wrote it using Coroutines! The only difference is the `suspend` modifier. Now our code works asynchronously, but we're writing as if it's synchronous code.

The benefit of this is you can pretty much treat everything like synchronous code without any issues. Like running a for loop on an asynchronous function like this:

```kotlin
for ((token, item) in list) {
    createPost (token, item)
}
```

You can also use most of the higher-order functions provided by Kotlin like `let`, `apply`, `repeat`, `filter`, `map`, `use` with these suspend functions. Pretty darn cool, isn't it?

But there's one more benefit of using Coroutines. Did you remember when we were not able to use 100,000 threads? Well, let's compare threads with Coroutines now:

```kotlin
fun main() {
    repeat(100_000) {
        thread {
            Thread.sleep(1000L)
            print(".")
        }
    }
}
```

```kotlin
fun main() = runBlocking {
    repeat(100_000) {
        launch {
            delay(1000L)
            print(".")
        }
    }
}
```

If you run the code above, you'll see the first function will throw `OutOfMemoryError`, while the second one will run completely fine. The reason behind this is the cost of starting all these coroutines is so cheap that it is barely noticeable.

But how this `suspend` works and how can we make concurrent API calls? 🤔 Well for that, you'll need to stay tuned for the next article 😉

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGQwdWpwOHNvdTdsZTgyMGFndTZpdzYzeTdwZ3h2a3Vya3c2aGNpcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/12noFudALzfIynHuUp/giphy.gif" width="1000"  />

I hope you've learned something new today. If you didn't understand any of this part or have any doubts, then you can ask me on my [LinkedIn](https://www.linkedin.com/in/cavin-macwan/) or on my [Twitter](https://www.twitter.com/cavin_1910/).
