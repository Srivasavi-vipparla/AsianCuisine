class BBQC extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<img src ="bbq.jpg" width="300" height="300"><br><br></br>`;
    }
  }
  
  customElements.define('bbq-c', BBQC);

  class VietnameseDumplings extends HTMLElement {
    connectedCallback() {
      this.innerHTML = ` <img src ="dumplings.jpg" width="300" height="300"> `;
    }
  }
  
  customElements.define('vietnamese-dumplings', VietnameseDumplings);

  class BurmeseKhaoSuey extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<img src ="suey.jpg" width="300" height="300">`;
    }
  }
  
  customElements.define('burmese-khao-suey', BurmeseKhaoSuey);

  class GrilledFish extends HTMLElement {
    connectedCallback() {
      this.innerHTML = ` <img src ="grilledfish.jpg" width="300" height="300">`;
    }
  }
  
  customElements.define('grilled-fish', GrilledFish);

  class ChilliChicken extends HTMLElement {
    connectedCallback() {
      this.innerHTML = ` <img src ="chillichicken.jpg" width="300" height="300">`;
    }
  }
  
  customElements.define('chilli-chicken', ChilliChicken);

  class ThaiFishCurry extends HTMLElement {
    connectedCallback() {
      this.innerHTML = ` <img src ="thai.jpg" width="300" height="300"> `;
    }
  }
  
  customElements.define('thai-fish-curry', ThaiFishCurry);

  class DicedChicken
  extends HTMLElement {
    connectedCallback() {
      this.innerHTML = ` <img src ="beans.jpg" width="300" height="300">`;
    }
  }
  
  customElements.define('diced-chicken', DicedChicken);

 

  class  PrawnTempura  extends HTMLElement {
    connectedCallback() {
      this.innerHTML = ` <img src ="jpt.jpg" width="300" height="300"> `;
    }
  }
  
  customElements.define('prawn-tempura', PrawnTempura);

  class  ChickenSalad  extends HTMLElement {
    connectedCallback() {
      this.innerHTML = ` <img src ="salad.jpg" width="300" height="300">`;
    }
  }
  
  customElements.define('chicken-salad', ChickenSalad);
 

  class   LettuceWrap  extends HTMLElement {
    connectedCallback() {
      this.innerHTML = ` <img src ="wrap.jpg" width="300" height="300">`;
    }
  }
  
  customElements.define('lettuce-wrap', LettuceWrap);

  class   UdonNoodle  extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `  <img src ="noodles.jpg" width="300" height="300">`;
    }
  }
  
  customElements.define('udon-noodle', UdonNoodle);
  



