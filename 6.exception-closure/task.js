

function parseCount(num) {
    let value = Number.parseInt(num);
    if (Number.isNaN(value)) {
        const parseError = new Error("Невалидное значение");
        throw parseError;
    } else {
        return value;
    }
}

function validateCount(num) {
    try {
        return parseCount(num);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a + b) < c || (a + c) < b || (b + c) < a)
        throw new Error("Треугольник с такими сторонами не существует");
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        let p = 0.5 * this.getPerimeter();
        let result = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(result.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(err) {
        return new Object({
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            },
            getArea() {
                return "Ошибка! Треугольник не существует";
            },
        });
    }
}

const triangle1 = getTriangle(1,3,100);
triangle1.getPerimeter();
triangle1.getArea();