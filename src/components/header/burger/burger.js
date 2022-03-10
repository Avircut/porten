class Burger{
  constructor(el){
    this.el = el;
    this.overlay = el.parentNode.querySelector('.overlay')
    this.animation = null;
    this.body = document.querySelector('body');
    this.isOpen = false;
    el.addEventListener('click', (e) => {
      this.onClick(e)
    })
  }
  onClick(e){
    if(!this.isOpen) {
      this.overlay.classList.add('slideDown');
      setTimeout(() => {
        this.isOpen=true;
        this.body.style.overflow='hidden';
        this.overlay.classList.remove('slideDown');
        this.overlay.style.height=`${window.innerHeight}px`;
      },300) 
    } else {
      this.overlay.classList.add('slideUp');
      setTimeout(() => {
        this.isOpen=false;
        this.body.style.overflow='scroll';
        this.overlay.classList.remove('slideUp');
        this.overlay.style.height=`0px`;
      },300) 
    }
  }
}
document.querySelectorAll('.burger__container').forEach((el) => { //Инициализация всех дропдаунов
  new Burger(el);
});