---
layout:   post
title:    "Where UX meets performance on Medium"
date:     2014-01-04 12:00:00
image:    medium-small.jpg
height:   300
category: ux
tags:     medium performance ux preload
---

One of my new favourite places on the web in 2013 was the beautiful new publishing platform created by the guys who made Twitter: [Medium.com](http://medium.com/). Aside from being beautifully designed to focus on the writing that people are publishing there, it contains an excellent example of what can happen when you combine a great user experience with website performance.

Medium's articles are assembled into Collections, and one of the ways that the site allows you to navigate is by moving through the articles within a single Collection. When you reach the end of one article, the splash image and headline of the next article are presented at the bottom of the page. This is great UX --- you have finished reading one thing, so rather than leaving the user to hit the Back button and search for something else to read, they present a compelling invitation to click through to the next, and probably related, piece.

![Screenshot of Medium.com](/i/medium.jpg)

Where it becomes super-smart is in the pre-loading of that next article. Behind the scenes, the article has been loaded; and then instead of simply loading a new page, the user is presented with a smooth animated transition into the next item, with the header image moving from the bottom of the page to the top, almost as if you have flipped the page in a magazine. It's all handled via JavaScript and JSON requests, with HTML5's history API handling the URL updates. It's very clever, seamless to use, and makes for an effortlessly smooth reading experience.