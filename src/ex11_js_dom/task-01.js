const sliderPhoto = { /* eslint-disable */
  slides: ['asset/01.jpg', 'asset/02.jpg', 'asset/03.jpg'],
  frame: 0,
  set: function (image) { 
    document.getElementById('slider').style.backgroundImage = 'url(' + image + ')';
  },
  init: function () { 
    this.set(this.slides[this.frame]);
  },
  previous: function () {
    this.frame--;
    if (this.frame < 0) {
      this.frame = this.slides.length - 1;
    }
    this.set(this.slides[this.frame]);
  },
  next: function () {
    this.frame++;
    if (this.frame == this.slides.length) {
      this.frame = 0;
    }
    this.set(this.slides[this.frame]);
  },
};
window.onload = function () {
  sliderPhoto.init();
};
