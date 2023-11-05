class Counter {
    constructor() {
      this.elInput = document.querySelector('#total-input');
      this.elAdd = document.querySelector('#add-value');
      this.elSub = document.querySelector('#sub-value');
      this.elResetButton = document.querySelector('#reset-button');
      this.total = 0;
  
      console.log('ElInput =', this.elInput, this.total);
  
      if (this.elAdd) {
        this.elAdd.addEventListener('click', () => {
          console.log('elAdd =', this.elAdd);
          this.total++;
          this.updateTotal();
        });
      }
  
      if (this.elSub) {
        this.elSub.addEventListener('click', () => {
          console.log('ElSub =', this.elSub);
          this.total--;
          this.updateTotal();
        });
      }

      if (this.elInput) {
        this.elInput.addEventListener('change', () => {
          const newValue = Number(this.elInput.value);
          console.log('elInput', newValue);

          if (isNaN(newValue)) {
            this.total = 0;
            this.updateTotal();
            return;
          }

          this.total = Number(this.elInput.value);
          this.updateTotal();
        });
      }

      if (this.elResetButton) {
        this.elResetButton.addEventListener('click', () => {
          this.total = 0;
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
  