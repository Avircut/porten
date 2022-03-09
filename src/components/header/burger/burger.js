class Burger{
  constructor(el){
    this.el = el;
    this.overlay = el.querySelector('.overlay')
    this.animation = null;
    this.isOpen = false;
    el.addEventListener('click', (e) => {
      this.onClick(e)
    })
  }
  onClick(e){
    if(!this.isOpen){
      this.overlay.classList.add('slideDown');
      setTimeout(() => {
        this.isOpen=true;
        this.overlay.classList.remove('slideDown');
      },300) 
    } else{
      this.overlay.classList.add('slideUp');
      setTimeout(() => {
        this.isOpen=false;
        this.overlay.style.display='none';
        this.overlay.classList.remove('slideUp');
      },300) 
    }
  }
}
document.querySelectorAll('.burger__container').forEach((el) => { //Инициализация всех дропдаунов
  new Burger(el);
});