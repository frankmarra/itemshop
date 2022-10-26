---
layout: ../../layouts/BlogLayout.astro
title: "Astro, from a beginner's point of view"
---



## It starts...

I didn't start learning software development until this past January.  Four lifetimes ago, I was a computer science major, and I had helped make my high school band's website.  That was it.  That was all the programming experience I had.  Over the past ten months though, I have learned what I think is a pretty good foundation for software development.  I have completed the General Assembly Software Engineering Immersive course, built a few personal projects (like this portfolio!), and have even launched a site I built as a freelance gig.

I feel like the best way to learn is to build, so each project I like to try and use one new tech that I don't know, or have only used briefly.  For this portfolio site, I went with Astro.

## What is Astro?

[Astro.build](https://docs.astro.build) defines it as an all-in-one web framework for building fast, content-focused websites.  I define it as a front-end milkshake, and who doesn't love a milkshake?  I say this because its a blend of a bunch of things, like being able to use JSX expressions and scoped CSS, as well as the freedom to use any front-end framework of your choice.  You can even use all of the front-end frameworks, if you want.  Astro all sends no javascrip to the browser, so it's perfect for portfolio and blog sites, like this one.  There is so much more to it, and I'm sure I've only started to scratch the surface of Astro's features.  You can check out the Astro docs at [Astro.build](https://docs.astro.build) for an in depth look at what Astro is and what it is capable of.  

## Beginning

I love video games.  Always have, always will.  

After speaking with a friend about a mutually loved series, I decided to play them again.  While doing this, I noticed that the menus had a really cool layout.  I then decided that it would be really cool to try and remake my portfolio in this style.

The series is Phantasy Star, and old Sega sci-fi space opera rpg.  I could write a whole separate article on each of the four games, but for now we are just going to be focusing on the last one and it's shop screen.

 

![Image of the item shop from phantasy star four with lines breaking down the layout into sections](https://res.cloudinary.com/silverbeard/image/upload/v1664338494/blogs/1%20-%20Astro/PSIV_Item_shop_layout_wqu2pq.png)

Separating the sections of the UI made it apparent that CSS grid would be the best way to start laying this out.  The page would be two columns and four rows, and would consist of a date, profile picture, navigation, description of the page, and the page content.

