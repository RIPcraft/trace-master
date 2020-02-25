export class Segment {
  static ids = {};

  constructor(a, b) {
    this.a = a;
    this.b = b;
    do {
      this.id = 1 + Math.floor(Math.random() * 2147483647);
    } while (Segment.ids[this.id]);
    Segment.ids[this.id] = this;
  }

  get length() {
    const d = this.a.dif(this.b);
    return Math.sqrt(d.x * d.x + d.y * d.y);
  }

  get origin() {
    return this.a.clone();
  }
}
