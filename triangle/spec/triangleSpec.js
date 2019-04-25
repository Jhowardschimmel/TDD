
describe('Triangle', function() {

    it('should test whether a Triangle has three sides', function() {
       
        var triangle = new Triangle(3,4,5);
        expect(triangle.side1).toEqual(3);
        expect(triangle.side2).toEqual(4);
        expect(triangle.side3).not.toEqual(6);

        
    });
  

  

    it('should correctly determine whether three lengths can be made into a triangle', function() {
      var notTriangle = new Triangle(3,9,22);
      expect(notTriangle.checkType()).toEqual('not a triangle');
    });
    
    it('should determine if the user input a length of zero for any argument and return not a triangle', function() {
        var notTriangle = new Triangle(0, 0, 0);
        expect(notTriangle.checkType()).toEqual('not a triangle');
    })

    it('should determine if a triangle is equilateral', function() {
        var triangle = new Triangle(7,7,7);
      expect(triangle.checkType()).toEqual('this is an equilateral triangle');
    });
    
    it('should determine if a triangle is scalene', function() {
        var triangle = new Triangle(3,7,9);
        expect(triangle.checkType()).toEqual('this is a scalene triangle');
    });

    it('should determine if a triangle is isosceles', function() {
        var triangle = new Triangle(2,2,3);
        expect(triangle.checkType()).toEqual('this is an isosceles triangle');
    });
    
    it('should determine that a triangle can be formed at the limit of the inequality in the isosceles case', function() {
        var triangle = new Triangle(3,3,6);
        expect(triangle.checkType()).toEqual('this is a degenerate triangle');
    })
    it('should determine that a triangle can be formed at the limit of the inequality in the scalene case', function() {
        var triangle = new Triangle(1,2,3);
        expect(triangle.checkType()).toEqual('this is a degenerate triangle');
    })
    it('should determine that a triangle has positive lengths', function() {
        var notTriangle = new Triangle(-5, 3, 3);
        expect(notTriangle.checkType()).toEqual('not a triangle');
    })
  });