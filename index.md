---
title: Home
---

{% for post in site.posts %}
  <article>
    <h2>{{ post.date | date: "%A, %-d %B %Y" }} <a href="{{ post.url }}">#</a></h2>
    {{ post.content }}
  </article>
{% endfor %}
