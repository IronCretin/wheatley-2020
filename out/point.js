let Point = /** @class */ (() => {
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        *[Symbol.iterator]() {
            yield this.x;
            yield this.y;
        }
        plus(p) {
            return new Point(this.x + p.x, this.y + p.y);
        }
        minus(p) {
            return new Point(this.x - p.x, this.y - p.y);
        }
        equals(p) {
            return this.x == p.x && this.y == p.y;
        }
        manhatan() {
            return Math.abs(this.x) + Math.abs(this.y);
        }
        chebyshev() {
            return Math.max(Math.abs(this.x), Math.abs(this.y));
        }
    }
    Point.origin = new Point(0, 0);
    return Point;
})();
export default Point;
//# sourceMappingURL=point.js.map