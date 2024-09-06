var posts=["2024/09/04/hello-world/","2024/09/04/我的第一篇博客-Hexo-Hello/","2024/09/05/hexo-分享/","2024/09/06/第二篇博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };