---
layout: ../../layouts/PostLayout.astro
slug: dlcmv2
title: DLCM.app
hero: https://res.cloudinary.com/silverbeard/image/upload/v1696986139/Screen_Shot_2023-10-10_at_8.34.29_PM_iabc3q.png
heroAlt: Dlcm.app screenshot
siteLink: https://dlcm.app/mystery-circles
description: Download Code Manager is a subscription based service to help keep track of redemption codes.
---

Dlcm.app, or Download Code Manager, is the easiest way for artists and labels to store their bandcamp codes and distribute them to anybody, ensuring that each code received is tied to a release that can be redeemed.

This is the new and improved version of the app, which has been completely rebuilt from the ground up. This version introduces a subscription-based tier as well as a free tier.

## What even is a download code?

It’s a good question. Bandcamp is an audio distribution platform that has a massive user base of labels and artists. These labels and artists are able to create releases that they can then monetize. The release can be anything. A song, an EP, an LP, or even a sample pack. Upon creation of a release, the artist or label is given a number of free download codes. These codes can be given out to fans or press, who will then enter them on Bandcamp to redeem a free copy of the release. The DLCM app provides these artists and labels a place to store and distribute these codes in an organized and efficient way.

So now you know what a download code is, and what DLCM can do for artists and labels that have them. Now try to figure out why, until now, there was no simple way to distribute them. Well, that’s one I don’t fully understand myself and one of the main reasons that the DLCM app exists. Bandcamp has so many artists and labels, and each of them can have a multitude of codes to distribute, but does Bandcamp provide them with a way to easily distribute those codes?

Not really.

You can download a CSV file, and then take a screenshot of that CSV file, and then put that screenshot up on all your socials saying, “Have at it, kids”. This, though being the main distribution approach seen, is such an inefficient way to do it. There is no way of knowing what codes are still valid, and your fans will have to try each one individually until they find a code that still works.

You can also print them out on a sheet of paper, and then cut them out and distribute them with your physical releases, or maybe put them in fortune cookies? That's actually not a terrible idea.

## Enter the DLCM app

Our goal was to make a simple and efficient way for labels and artists to distribute all of their codes. The user can just copy and paste the codes from the Bandcamp supplied CSV into a text field on their user dashboard and click ok. Dlcm.app will do the rest. If you become a pro user, we have implemented being able to just upload the CSV, making uploading codes that much easier.

Now when your fans come to your profile they will see what albums you are sharing and if there are any codes left for that release. They can now know for certain that they are getting a release instead of hoping for the best and then trying code after code until they get one that works.

## That’s cool, but what else can it do?

I know. Distributing codes isn’t super innovative or exciting, but there are some other cool features aside from the main use case. First, you get your private dashboard where you can create releases and add codes. On the free tier, you are allowed two releases and can store an unlimited amount of codes. You also have a public-facing profile page where you can display your logo and write a brief blurb about who you are and why you are awesome, and each of your releases also gets its page as well.

On the subscription tier, you can have unlimited releases and codes, as well as the ability to password-protect your profile page and any of your release pages. You are also able to make releases active/inactive, meaning that they won’t show on your public profile and they can only be shared with their respective link. Throw in the ability to create custom URLs for both your profile and each release, the previously mentioned ability to upload codes via CSV in addition to copy and paste, and the ability to write copy about each release, and you have a pretty great service for artists and labels alike.

## What is it made out of?

NextJS was used for the front-end, while I decided to go with a Supabase backend, and then deployed the whole thing on Netlify. I love this stack. Supabase especially has been a joy to work with. Sure, I could have made my own Postgres database, but Supabase just gets you up and running faster, and their free tier is very generous. It felt very intuitive to implement their version of auth and row-level security, protecting our users' codes and information. Plus, it’s still just a Postgres database, so if I ever change my mind and decide to spin up my own backend (don’t worry Supabase, I won’t), the database doesn't need to be rebuilt.

Netlify has also been a blast. The original version of dlcm.app was launched via Cpanel, and that was frustrating and tedious. Netlify makes deploying a NextJS app a breeze. The deploy previews, which essentially act as staging sites, enabled me to test the app on a multitude of devices and screens and let others try it out to catch things I may have missed.

We also knew that we were going to have a subscription plan, so we decided to go with Stripe as our payment processor. I had never used Stripe before, I was pretty excited to learn how to integrate them into a site. I learned how to create customers, set up checkouts, and implement webhooks to update our database when a user signs up, becomes a pro member, or cancels their subscription. Learning how to use webhooks was a great and valuable exercise, as I believe this knowledge to be very useful, as it has many use cases aside from just Stripe integration.

Finally, design. While most of the credit must go to my very good friend and mentor, Ryan Mulligan, he did push me to use a UI library and we decided to go with Radix. At first, I had a bit of resistance to the idea, but after seeing how quickly and easily we were able to get the design up and running, I don’t think I will ever not use Radix or other UI libraries. I had previously used Material UI, and while that looks great, it makes the code so difficult to read. Radix keeps everything super simple and readable.

## Did You Run Into Any Problems?

Did I! Do I! This has been such an incredible learning experience, and it continues to be. I had never created a public app with Supabase before or ever even thought about setting up a subscription-based plan using Stripe.

I remember the first week we went live and we were seeing crazy numbers in our Supabase logs. Data that wasn’t needed was being called, making some of the profile pages massive in size. Because of this, some user's pages wouldn't load and give errors. We came close to running out of bandwidth. It was stressful. Thankfully, Supabase gives great feedback through their logs and usage panels, and I was quickly able to see what was happening and how to refine my database calls to make the app run so much more smoothly, while also decreasing page load times and database egress.

Trying to sync up with Supabase storage buckets so users could upload their artwork was another bit of a conundrum. I had never worked with buckets before, and it took a few minutes(read: days) to get up and running. Now that I think about it, maybe I should go back and see if I can optimize that a bit more. I digress, there are still things that I am working on to make DLCM better, and I look forward to thwarting every bug that dares show its face.

Did you know that most apps need a privacy policy and terms of service? Did you know that lawyers charge lots of money to write those things for you? Of course, you did. I didn’t. But did you know that there is a site called termly.com that makes it super simple to get those things at a very affordable price? Termly did not ask me to say those words, I’m just happy they exist. Problem solved.

## Launched, via trebuchet

Not really. More like via Netlify, which I talked about above. Since the app’s launch in July, we currently have about 70 active users, with a few of them being pro (paid) ones. Last I checked, we were managing over 1,300 releases and close to 100K codes. Our analytics show we are averaging about 1,000 unique visitors a week from dozens of countries. It’s pretty awesome. As a musician myself, it feels really good to be a part of something that so many other music creators are using and finding value in. I make and play music, and while I no longer work in Audio for a living, I still find it incredibly important to always try to help fellow musicians in any way possible. Most of the time it's buying a t-shirt or leaving their album on repeat overnight on a streaming service. I believe that dlcm.app free service gives tons of value to any artist, and I can’t wait to keep making it even better.

## Can’t Stop, Won’t Stop

The DLCM app isn’t finished. It’s only just beginning. There are so many other parts that we have planned. I’m currently working on implementing the ability for users to see statistics on their releases, and we are also planning a “featured” page where artists and labels can opt their releases in to be shown on a public-facing page for non-users to browse and find new, free, music to get enamored with. There is more than that, but we can’t talk about it just yet. Just know that this is only the start and it’s just going to get better from here.

I have spent a few months building and launching this with an amazing support team (The brothers Mulligan, as well as Franjean, Rool, and April) and I am so excited for where it will go next and for people like you to find new music to listen to. Never stop listening to and supporting the music makers.
