export class Point {
  static ids = {};

  constructor({ x, y }) {
    this.x = x;
    this.y = y;
    do {
      this.id = 1 + Math.floor(Math.random() * 2147483647);
    } while (Point.ids[this.id]);
    Point.ids[this.id] = this;
  }

  add({ x, y }) {
    return new Point({ x: this.x + x, y: this.y + y });
  }

  dif({ x, y }) {
    return new Point({ x: this.x - x, y: this.y - y });
  }

  mul(a) {
    return new Point({ x: this.x * a, y: this.y * a });
  }

  div(a) {
    return new Point({ x: this.x / a, y: this.y / a });
  }

  dis(p) {
    const d = this.dif(p);
    return Math.sqrt(d.x * d.x + d.y * d.y);
  }

  ang({ x, y }) {
    return Math.PI - Math.atan2(y - this.y, this.x - x);
  }

  inc(a, r) {
    return this.add({
      x: Math.cos(a) * r,
      y: Math.sin(a) * r,
    });
  }

  mid(p, i, t) {
    return this.add(p.dif(this).mul(i).div(t));
  }

  static prj(a, b, c) {
    return a ? (a * a - b * b + c * c) / (2 * c) : 0;
  }

  per(p, d) {
    const l = this.dis(p);
    return !l ? p : new Point(
      d * (this.y - p.y) / l + p.x,
      d * (p.x - this.x) / l + p.y,
    );
  }

  tri(p, a, b) {
    const t = this.dis(p);
    const i = this.prj(a, b, t);
    return this.per(this.mid(p, i, t), Math.sqrt(a * a - i * i));
  }

  det(a, b) {
    return a.x * b.y + b.x * this.y + a.y * this.x - b.y * this.x - a.x * this.y - a.y * b.x;
  }

  eqd(p, a, b) {
    const d = this.dis(p);
    if (!d) return p;
    const s = this.per(p, d);
    const { x, y } = p;
    const ax = x - this.x;
    const ay = this.y - y;
    const bx = x - s.x;
    const by = s.y - y;
    const da = a + (this.y * x - this.x * y);
    const db = b + (s.y * x - s.x * y);
    return new Point(
      (da * bx - db * ax) / (ay * bx - ax * by),
      (da * by - db * ay) / (ax * by - ay * bx),
    );
  }
}
