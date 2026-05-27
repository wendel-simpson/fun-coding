var Rectangle = /** @class */ (function () {
    function Rectangle(height, width) {
        this.width = width;
        this.height = height;
        console.log({ height: this.height, wdith: this.width });
    }
    Rectangle.prototype.getHeight = function () {
        return this.height;
    };
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.calculateArea = function () {
        this.area = this.getHeight() * this.getWidth();
    };
    Rectangle.prototype.getArea = function () {
        return this.area;
    };
    return Rectangle;
}());
var rect = new Rectangle(5, 12);
console.log(rect.getArea());
console.log(rect.calculateArea());
console.log(rect.getArea());
console.log(rect.getHeight());
