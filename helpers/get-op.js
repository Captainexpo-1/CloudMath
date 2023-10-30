const mathFunctions = require('./mathFunctions')
const two_tetrate_five = require('../hardcodes/two-tetrate-five.json')

function GetOperation(req){
    
    const a = Number(req.a)
    const b = Number(req.b)
    const c = Number(req.c)
    const d = Number(req.d)
    const e = Number(req.e)
    const f = Number(req.f)
    switch(req.operation){
        case("add"):
            return a + b;
        case("subtract"):
            return a - b;
        case("multiply"):
            return a * b;
        case("divide"):
            return a / b
        case("sin"):
            return Math.sin(a)
        case("cos"):
            return Math.cos(a)
        case("tan"):
            return Math.tan(a)
        case("quadratic-formula"):
            return [
            (-b + Math.sqrt(b**2 - 4*a*c))/(2*a),
            (-b - Math.sqrt(b**2 - 4*a*c))/(2*a)
            ]
        case("pythagorean-theorem"):
            return Math.sqrt(a**2 + b**2)
        case("factorial"):
            return mathFunctions.factorialize(a)
        case("tetration"):
            if(a == 2 && b == 5){
            return two_tetrate_five.result
            }
            return mathFunctions.tetration(a, b)
        case("square-root"):
            return Math.sqrt(a)
        case("cube-root"):
            return Math.cbrt(a)
        case("cube"):
            return a**3
        case("square"):
            return a**2
        case("cubic-formula"):
            return mathFunctions.cubic_formula(a,b,c,d)
        case("random-number"):
            return Math.random()
        default:
            return "Invalid Operation"
    }
}

module.exports = {GetOperation:GetOperation}