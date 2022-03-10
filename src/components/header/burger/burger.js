class Burger{
  constructor(el){
    this.el = el;
    this.overlay = el.parentNode.querySelector('.overlay');
    this.isAnimating = false;
    this.body = document.querySelector('body');
    this.overlay.classList.add('disabled');
    this.links = this.overlay.querySelector('.burger__links');
    this.isOpen = false;
    el.addEventListener('click', (e) => {
      this.onClick(e)
    })
  }
  onClick(e){
    if(!this.isOpen && (!this.isAnimating)) {
      this.overlay.classList.add('slideDown');
      this.isAnimating=true;
      this.overlay.addEventListener('animationend', () => {
        this.isAnimating=false;
        this.isOpen=true;
        this.overlay.classList.remove('disabled');
        this.overlay.classList.remove('slideDown');
        this.overlay.style.height=`${this.links.offsetHeight}px`;

      })
    } else if (!this.isAnimating) {
      this.overlay.classList.add('slideUp');
      this.isAnimating = true;
      this.overlay.addEventListener('animationend', () => {
        this.isOpen=false;
        this.isAnimating=false;
        this.overlay.classList.add('disabled');
        this.overlay.classList.remove('slideUp');
        this.overlay.style.height=`0px`;
      })
    }
  }
}
document.querySelectorAll('.burger__container').forEach((el) => { //Инициализация всех дропдаунов
  new Burger(el);
});