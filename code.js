class Counter {
    constructor() {
      this.elInput = document.querySelector('#total-input');
      this.elAdd = document.querySelector('#add-value');
      this.elSub = document.querySelector('#sub-value');
      this.total = 0;
  
      console.log('ElInput =', this.elInput, this.total);
  
      if (this.elAdd) {
        this.elAdd.addEventListener('click', () => {
          this.total += 1;
          this.updateTotal();
        });
      }
  
      if (this.elSub) {
        this.elSub.addEventListener('click', () => {
          this.total -= 1;
          this.updateTotal();
        });
      }
    }
  
    updateTotal() {
      if (this.elInput) {
        this.elInput.value = this.total;
      }
    }
  }
  
  const counter = new Counter();
  