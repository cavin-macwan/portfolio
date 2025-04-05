---
title: "Master Permission Handling in Jetpack Compose"
description: "Simplify Android runtime permission management in Jetpack Compose with our custom library. Learn to reduce boilerplate and effortlessly handle dialogs and lifecycle events"
published: 2025/03/05
slug: "master-permission-handling-in-jetpack-compose"
---

Hey everyone,  
Thank you for stopping by my blog. Welcome to my very first post! Today, we're diving into the world of permission handling in Jetpack Compose.

![Jetpack Compose Permission Banner](https://cavinmacwan.com/articles/master-permission-handling-in-jetpack-compose.png)

If you've ever managed permissions in Compose, you know the struggle: endless boilerplate just to request a single permission. And then there's the challenge of handling rationale—especially in location-based apps, where required permissions add even more complexity. It's not just about writing logic in your `ViewModel`; you also have to keep the `UI` in sync. Before you know it, your code spirals out of control ☠️.

I felt this pain firsthand. That’s why I built my own library—to slice through the boilerplate and let developers focus on building great app logic.

Managing runtime permissions in Android can be a real headache. From checking manifest entries to displaying permission dialogs and handling lifecycle events, it’s easy to drown in repetitive code. In this tutorial, I’ll show you how to simplify this process using Jetpack Compose and a custom library designed to make permission management effortless.

## What Does This Library Handle?

I built this library from the ground up to cover nearly every aspect of permission handling in Jetpack Compose. Here’s what it brings to the table:

- **Composable Permission State**: Easily manage permissions with a stateful, composable API.
- **Manifest Check**: Automatically verifies that all required permissions are declared in your app’s manifest.
- **Customizable UI**: Configure custom rationale and settings dialogs to match your app’s style.
- **Lifecycle Aware**: Automatically handles permission requests on lifecycle changes (e.g., when resuming from app settings).
- **Flexible Permission Flow**: Seamlessly handles both required and optional permissions.

## Setting Up Your Project

First, add the dependency for the library to your project's `libs.versions.toml`:

```
[versions]
permissionsCompose = "0.0.1+4"

[libraries]
permissions-compose = { group = "com.meticha", name = "permissions_compose", version.ref = "permissionsCompose" }
```

Then, sync your project and add the dependency for the library to your module-level `build.gradle` file:

```gradle
dependencies {
    implementation(libs.permissions.compose)
}
```

## How to implement permisions

## 1. Add the permissions in the `AndroidManifest.xml`

First, you've to add the permissions that you want to ask the user at `AndroidManifest.xml` file. Let's say you want to ask for the permission of recording the audio. Then it might something look like this:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <uses-permission android:name="android.permission.RECORD_AUDIO" />

    <application
    ...
```

## 2. Creating a Permission State

After adding the necessary permissions to your `AndroidManifest.xml`, it's time to integrate the `rememberAppPermissionState` composable into the screen where you'll request them. Simply pass in a list of the permissions your app requires, and the library handles the rest. Here's how you do it:

```kotlin
@Composable
fun PermissionScreen() {
    val permissions = rememberAppPermissionState(
        permissions = listOf(
            AppPermission(
                permission = Manifest.permission.RECORD_AUDIO,
                description = "Microphone access is needed for voice recording. Please grant this permission.",
                isRequired = false
            )
        )
    )

    Column(
        modifier = Modifier.fillMaxSize().padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text("Audio Permission: ${if (permissions.isGranted(Manifest.permission.RECORD_AUDIO)) "Granted" else "Not Granted"}")

        Button(
            onClick = { permissions.requestPermission() },
            modifier = Modifier.padding(top = 16.dp)
        ) {
            Text("Request Permissions")
        }

        if (permissions.allRequiredGranted()) {
            Text("All required permissions granted! You can now use the app.")
        }
    }
}
```

Since this composable accepts a list, you can provide as many permissions as you want. In this list, there're 3 parameters:

- `permission`: What kind of permission you want to ask to the user
- `description`: Why do you want the permission
- `isRequire`: Is this is true, then the user won't be able to do anything until they accept the permission.

Now when the user clicks on the `Request Permissions` button, we're calling `permissions.requestPermission()` method, which internally takes care of asking permissions, showing rationale when `isRequired` is set to true and checking the permission in the Manifest file.

## Customizing the User Experience

One of the best parts of this library is the ability to set up custom dialogs for permission rationale and settings. If you’re tired of the default Android dialogs, you can implement your own UI:

```kotlin
PermissionManagerConfig.setCustomRationaleUI { permission, onDismiss, onConfirm ->
    CustomRationaleDialog(
        description = permission.description,
        onDismiss = onDismiss,
        onConfirm = onConfirm
    )
}
```

Here's the implementation of `CustomRationaleDialog`:

```kotlin
@Composable
fun CustomRationaleDialog(
    description: String,
    onDismiss: () -> Unit,
    onConfirm: () -> Unit
) {
    Dialog(onDismissRequest = onDismiss) {
        Card(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            shape = RoundedCornerShape(16.dp),
            colors = CardDefaults.cardColors(
                containerColor = MaterialTheme.colorScheme.surface
            )
        ) {
            Column(
                modifier = Modifier
                    .padding(16.dp),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.spacedBy(16.dp)
            ) {
                Text(
                    text = "We Need Your Permission",
                    style = MaterialTheme.typography.titleMedium,
                    color = MaterialTheme.colorScheme.primary
                )

                Text(
                    text = description,
                    style = MaterialTheme.typography.bodyMedium
                )

                Button(
                    onClick = onConfirm,
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Text("Allow")
                }

            }
        }
    }
}
```

This kind flexibility allows you to tailor the permission experience to match your app’s style, making it more intuitive for your users.

## Conclusion

Managing runtime permissions in Android doesn’t have to be a painful, repetitive task. By leveraging Jetpack Compose and our custom permission management library, you can streamline the process, reduce boilerplate, and focus on building great features.

Ready to simplify your permission management and reclaim your development time? Check out the [GitHub repository](https://github.com/meticha/permissions-compose) for the demo and full source code.

Contributions and feedback are always welcome! If you have any suggestions or questions, feel free to message me on [LinkedIn](https://www.linkedin.com/in/cavin-macwan/)
