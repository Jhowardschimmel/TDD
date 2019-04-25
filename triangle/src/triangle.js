function Triangle(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;

}


Triangle.prototype.checkType = function () {
    const isNotTriangle = (this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2));

    const isZero = (this.side1 === 0) || (this.side2 === 0) || (this.side3 === 0);


    const isEquilateral = (this.side1 === this.side2) && (this.side1 === this.side3);


    const isDegenerate = (this.side1 === (this.side2 + this.side3)) || (this.side2 === (this.side1 + this.side3)) || (this.side3 === (this.side1 + this.side2));


    const isScalene = (this.side1 !== this.side2) && (this.side1 !== this.side3) && (this.side2 !== this.side3);


    const isIsosceles = (this.side1 === this.side2) || (this.side1 === this.side3) || (this.side2 === this.side3);
    

    if (isNotTriangle) {
        return 'not a triangle';
    }
    else if (isZero) {
        return 'not a triangle';
    }
    else if (isEquilateral) {
        return 'this is an equilateral triangle';
    }
    else if (isDegenerate) {
        return 'this is a degenerate triangle';
    }

    else if (isScalene) {
        return 'this is a scalene triangle';
    }
    else if (isIsosceles) {
        return 'this is an isosceles triangle';
    }

};

