describe("Calculator", function(){
	 var calculator;
	 beforeEach(function(){
		 calculator = new Calculator();
	});
		it("should add numbers 1 and 2", function(){
		expect(calculator.add(1,2)).toEqual(3);	
		});
	
	
		it("should substract numbers 9 and 2", function(){
		expect(calculator.subtract(9,2)).toEqual(7);	
		});
	
	
		it("should multiply numbers 4 and 3", function(){
		expect(calculator.multiply(4,3)).toEqual(12);	
		});
	
	
		it("should divide numbers 10 and 2", function(){
		expect(calculator.divide(10,2)).toEqual(5);	
			
		});
		it("does not divide by 0", function(){
		expect( calculator.divide( 5, 0 ) ).toEqual( NaN ); })
});

 describe( "ScientificCalculator", function(){ 
 	var calculator;
	beforeEach( function(){
		calculator = new ScientificCalculator();
	});
	it("extends Calculator", function(){
		expect( calculator ).to.be.instanceOf( Calculator );
		expect( calculator ).to.be.instanceOf( ScientificCalculator );
	 });
	it("returns the sine of PI / 2", function(){
		expect( calculator.sin( Math.PI / 2 ) ).toEqual( 1 ); 	
	});
	it("returns the cosine of PI", function(){
		expect( calculator.cos( Math.PI ) ).toEqual( -1 );
	 });
	it("returns the tangent of 0", function(){
		expect( calculator.tan( 0 ) ).toEqual( 0 );
	 });
	it("returns the logarithm of 1", function(){ 
		expect( calculator.log( 1 ) ).toEqual( 0 ); 
	});
});