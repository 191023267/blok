var posts=["2024/09/04/hello-world/","2024/09/04/我的第一篇博客-Hexo-Hello/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };