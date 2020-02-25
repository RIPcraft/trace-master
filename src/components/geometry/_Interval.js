export class Interval {
  constructor(min, max) {
    this.min = min;
    this.max = max;
    const self = this;
    const reset = () => self.set();
    this.min.oninput = reset;
    this.max.onblur = reset;
    this.crt = min.valueAsNumber;
    this.sgm = 0;
  }

  static continuu = { checked: true }

  static system = { set() {} }

  static segmentare = { valueAsNumber: 0 }

  set() {
    this.sgm = 0;
    this.crt = this.min.valueAsNumber;
    if (this.continuu.checked) this.system.set();
  }

  next() {
    this.crt = this.min.valueAsNumber + (
      this.max.valueAsNumber - this.Min.valueAsNumber
    ) * (this.sgm += 1)
    / this.segmentare.valueAsNumber;
    return this.sgm <= this.segmentare.valueAsNumber;
  }
}
