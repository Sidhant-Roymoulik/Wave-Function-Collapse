class Cell {
  constructor(value, index) {
    this.collapsed = false;
    this.index = index;
    this.restricted = [];
    if (value instanceof Array) {
      this.options = value;
    } else {
      this.options = [];
      for (let i = 0; i < value; i++) {
        this.options[i] = i;
      }
    }
  }
  collapse() {
    this.collapsed = true;
  }
}
