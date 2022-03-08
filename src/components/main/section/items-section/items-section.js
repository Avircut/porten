import watch from '../../../../assets/images/watch.png';
import brand from '../../../../assets/images/brand.png';

class ItemsSection {
  constructor(title, items) {
    this.title = title;
    this.items = items;
  }
}
export const featured = new ItemsSection('Сезон 2020/21',[
  {name:'Louis XVI ATHOS', price:'165 000 руб.', image:watch},
  {name:'Louis XVI ATHOS', price:'165 000 руб.', image:watch},
  {name:'Louis XVI ATHOS', price:'165 000 руб.', image:watch}
])
export const newCollection = new ItemsSection('Новые поступления',[
  {name:'Louis XVI ATHOS', price:'165 000 руб.', image:watch},
  {name:'Louis XVI ATHOS', price:'165 000 руб.', image:watch},
  {name:'Louis XVI ATHOS', price:'165 000 руб.', image:watch},
  {name:'Louis XVI ATHOS', price:'165 000 руб.', image:watch},
  {name:'Louis XVI ATHOS', price:'165 000 руб.', image:watch},
  {name:'Louis XVI ATHOS', price:'165 000 руб.', image:watch},
  {name:'Louis XVI ATHOS', price:'165 000 руб.', image:watch},
  {name:'Louis XVI ATHOS', price:'165 000 руб.', image:watch}
])
export const brands = new ItemsSection('Наши бренды',[
  {image:brand},
  {image:brand},
  {image:brand},
  {image:brand}
])
