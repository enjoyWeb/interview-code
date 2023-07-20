const lazyLoad = function (imgs) {
  let count = 0;
  const deleteImgs = [];
  const handler = () => {
    imgs.forEach((img, index) => {
      const react = img.getBoundingClientRect();
      if (react.top < window.innerHeight) {
        img.src = img.dataset;
        count++;
        deleteImgs.push(index);
        if (count === imgs.length) document.removeEventListener('scroll', lazyLoad);
      }
    })
    imgs = imgs.filter((_, index) => !deleteImgs.includes(index));
  }
  return handler();
}
