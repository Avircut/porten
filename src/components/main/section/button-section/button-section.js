import dude from '../../../../assets/images/banner-2.jpg';

class BtnSection{
  constructor(title,buttonText, image) {
    this.title = title;
    this.buttonText=buttonText;
    this.image = image
  }
}
export const newCollection = new BtnSection('Новая коллекция','Каталог',dude);