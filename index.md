---
title: Home 
---

{% for post in site.posts %}
  <article>
    <a class="permalink" href="/{{ post.date | date: "%Y-%m-%d" }}">#</a>
    <h2>{{ post.date | date: "%A, %-d %B %Y" }}</h2>
    {{ post.content }}
  </article>
{% endfor %}
