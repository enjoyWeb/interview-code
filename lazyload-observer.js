const lazyLoad = function (imgs) {
  const observer = new IntersectionObserver((entries) => {
    return entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.src = entry.target.dataset;
        observer.unobserve(entry.target);
        imgs.forEach(img => observer.observe(img));
      }
    });
  })
}
