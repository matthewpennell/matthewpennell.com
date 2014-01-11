---
layout:   post
title:    "Playing chase the Back button in Safari on iOS"
date:     2014-01-01 12:00:00
image:    safari.jpg
height:   300
category: ixd
tags:     safari iphone ixd
---

With the expanded screen real estate on the iPhone 5, Apple decided that their apps needed to make the most of all that extra room. Apps like their web browser, Safari, began to hide any unnecessary chrome as soon as you begin to interact with the page.

This is all well and good, until you actually want to use the Back button (or the Bookmarks or Share options, but I'd imagine going back a page is a *much* more common action). It turns out that the interaction designers at Apple have made some interesting choices about when to hide and show the controls bar (and the address bar at the top of the screen). 

The controls bar disappears as soon as you start to scroll down the page, and usually doesn't reappear unless you scroll back up to the top again --- but there are a couple of other events that trigger the bar. The first time you reach the bottom of the page it won't show up, but if you try to scroll *down from the very end* of the page they make the sensible decision that you might want some further options and pop up the bar.

It will also appear if you tap somewhere near the bottom of the screen ... *even if you tapped on a link*! This is a bolder decision, in my opinion, since tapping a link is quite a clear declaration of intent. You have to wonder whether user data has influenced that decision.

<iframe class="vine-embed" src="https://vine.co/v/h30QhODIiba/embed/simple?audio=1" width="600" height="600" frameborder="0"></iframe>

This kind of trade-off between completely clear navigation and usable screen real estate is a difficult one for any mobile developer. You need to be completely confident that, once discovered, your users will remember how to find important functionality again in the future.