function Calculator() {

        return{
            add : function (arg1, arg2) {
                return arg1 + arg2;
            },
            subtract : function (arg1, arg2) {
                return arg1 - arg2;
            },
            multiply : function (arg1, arg2) {
                return arg1 * arg2;
            },
            divide : function (arg1, arg2) {
            	if (arg2 === 0){
            		return NaN;
				}else return arg1 / arg2;
            }
        }
    };
    /*add;
    subtract;
    multiply;
    divide;*/
    function ScientificCalculator() {

    };

    ScientificCalculator.prototype = new Calculator();
    ScientificCalculator.prototype.constructor = Calculator;

    ScientificCalculator.prototype.sin = function(x) {
        return Math.sin(x);
    }

    ScientificCalculator.prototype.cos = function(x) {
        return Math.cos(x);
    }

    ScientificCalculator.prototype.tan = function(x) {
        return Math.tan(x);
    }

    ScientificCalculator.prototype.log = function(x) {
       return Math.log(x);
    }

	