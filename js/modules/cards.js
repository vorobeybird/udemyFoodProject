import {getResources} from '../modules/services/services';

function cards(){

    class MenuBox {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
          this.src = src;
          this.alt = alt;
          this.classes = classes; //Благодаря REST оператору мы можем передать сколько угодно классов
          this.title = title;
          this.descr = descr;
          this.price = price;
          this.parent = document.querySelector(parentSelector);
          this.course = 27;
          this.convertUAH();
        }
    
        convertUAH() {
          this.price = this.price * this.course;
        }
    
        render() {
          const element = document.createElement("div");
          if (this.classes.length === 0) {
            this.element = "menu__item";
            element.classList.add(this.element);
          }
          this.classes.forEach((className) => element.classList.add(className));
          element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
              </div>
              `;
    
          this.parent.append(element);
        }
      }
        
      //метод использующий шаблонизацию
      getResources("http://localhost:3000/menu").then((data) => {
        data.forEach(({ img, altimg, title, descr, price }) => {
          new MenuBox(
            img,
            altimg,
            title,
            descr,
            price,
            ".menu .container"
          ).render();
        });
      });
    
      // метод для разового использования
      // getResources("http://localhost:3000/menu")
    
      //   .then(data => createCard(data));
    
      //   function createCard(data){
      //     data.forEach(({img, altimg, title, descr, price}) => {
      //       const element = document.createElement('div');
      //       element.classList.add('menu__item');
      //       element.innerHTML = `
      //       <img src=${img} alt=${altimg}>
      //       <h3 class="menu__item-subtitle">${title}</h3>
      //       <div class="menu__item-descr">${descr}</div>
      //       <div class="menu__item-divider"></div>
      //       <div class="menu__item-price">
      //       <div class="menu__item-cost">Цена:</div>
      //       <div class="menu__item-total"><span>${price}</span> грн/день</div>
      //     </div>
      //       `;
      //       document.querySelector('.menu .container').append(element);
      //     });
      //   }
    
}

export default cards;