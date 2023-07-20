const images = [...document.querySelectorAll('img')];
const loadImage = function(...imgs) {
  let imagesArr = [];
  let count = 0;
  for (let i = 0; i < imgs.length; i++) {
    const img = new Image();
    img.onload = function() {
      imgs[i].src = imagesArr[i];
      count++;
      if (count === imagesArr.length) {
        console.log('加载完成!')
      }
    }
  }
  return {
    setSrc: function (...args) {
      imgs.forEach(img => img.src = '///loding.png');
      imagesArr = args;
    }
  }
}
