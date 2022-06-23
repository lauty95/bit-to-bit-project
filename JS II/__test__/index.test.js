const {
    obtenerMayor,
    incrementarPorUno,
    devolverUltimoElemento,
    arrayContiene,
    numeroMasGrande,
    breakStatement,
    continueStatement,
    estaEnRango,
    esEntero,
    fizzBuzz,
    operadoresLogicos,
    esPrimo,
    tablaDelSeis,
    tieneTresDigitos,
    doWhile
} = require('../homework');

describe('obtenerMayor(x, y)', function () {
    it('should return x if it is larger than y', function () {
        expect(obtenerMayor(10, 5)).toBe(10);
    });
    it('should return y if it is larger than x', function () {
        expect(obtenerMayor(50, 100)).toBe(100);
    });
    it('should return either one if they are the same', function () {
        expect(obtenerMayor(1000, 1000)).toBe(1000);
    });
});

describe('estaEnRango(num)', function () {
    it('should return true if num is inside range', function () {
        expect(estaEnRango(35.5)).toBe(true);
        expect(estaEnRango(40)).toBe(true);
        expect(estaEnRango(49)).toBe(true);
        expect(estaEnRango(21)).toBe(true);
    });
    it('should return false if outside of range', function () {
        expect(estaEnRango(10)).toBe(false);
        expect(estaEnRango(20)).toBe(false);
        expect(estaEnRango(50)).toBe(false);
        expect(estaEnRango(100)).toBe(false);
    });
});

describe('esEntero(num)', function () {
    it('should return true if num is 5', function () {
        expect(esEntero(5)).toBe(true);
    });
    it('should return false if num is 0.5', function () {
        expect(esEntero(0.5)).toBe(false);
    });
    it('should return true if num is -20', function () {
        expect(esEntero(-20)).toBe(true);
    });
    it('should return true for 0', function () {
        expect(esEntero(0)).toBe(true);
    });
});

describe('fizzBuzz(num)', function () {
    it('should return fizz if divisible by 3', function () {
        expect(fizzBuzz(9)).toBe('fizz');
    });
    it('should return buzz if divisible by 5', function () {
        expect(fizzBuzz(10)).toBe('buzz');
    });
    it('should return fizzbuzz if divisible by 3 and 5', function () {
        expect(fizzBuzz(15)).toBe('fizzbuzz');
    });
    it('should return num if not divisible by 3 or 5', function () {
        expect(fizzBuzz(4)).toBe(4);
    });
});

describe('operadoresLogicos(num1, num2, num3)', function () {
    it('should return \'Número 1 es mayor y positivo\' if num1 is positive and if it is greater than num2 and num3', function () {
        expect(operadoresLogicos(50, 2, 15)).toBe('Número 1 es mayor y positivo');
    });
    it('should return \'Hay negativos\' if any of the arguments are negative', function () {
        expect(operadoresLogicos(80, -1, 2)).toBe('Hay negativos');
    });
    it('should return num3 + 1 if num3 is greater than num1 and num2', function () {
        expect(operadoresLogicos(1, 3, 10)).toBe(11);
    });
    it('should return \'Error\' if any of the arguments are equal 0', function () {
        expect(operadoresLogicos(1, 0, 10)).toBe('Error');
    });
    it('should return false if none of the conditions are met', function () {
        expect(operadoresLogicos(10, 30, 6)).toBe(false);
    });
});

describe('esPrimo(num)', function () {
    it('should return true if num is prime', function () {
        expect(esPrimo(7)).toBe(true);
        expect(esPrimo(97)).toBe(true);
    });
    it('should return false if num is not prime', function () {
        expect(esPrimo(10)).toBe(false);
        expect(esPrimo(100)).toBe(false);
        expect(esPrimo(0)).toBe(false);
        expect(esPrimo(1)).toBe(false);
    });
});

describe('tablaDelSeis()', function () {
    it('should return multiplication table of 6', function () {
        expect(tablaDelSeis()).toEqual([0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]);
    });
});

describe('tieneTresDigitos(numero)', function () {
    it('should return true if numero has 3 digits', function () {
        expect(tieneTresDigitos(100)).toBe(true);
        expect(tieneTresDigitos(820)).toBe(true);
        expect(tieneTresDigitos(900)).toBe(true);
        expect(tieneTresDigitos(10)).toBe(false);
        expect(tieneTresDigitos(20000)).toBe(false);
    });
});

describe('doWhile(numero)', function () {
    it('should add 5 to number until reaching a limit of 8 times and return the sum value', function () {
        expect(doWhile(5)).toBe(45);
        expect(doWhile(100)).toBe(140);
        expect(doWhile(-1)).toBe(39);
    });
});

describe('incrementarPorUno(arr)', function () {
    it('should return the array with each value incremented by one', function () {
        expect(incrementarPorUno([10, 10, 16, 12])).toEqual([11, 11, 17, 13]);
        expect(incrementarPorUno([97, 100, 80, 55, 72, 94])).toEqual([98, 101, 81, 56, 73, 95]);
        expect(incrementarPorUno([])).toEqual([]);
    });
});

describe('devolverUltimoElemento(arr)', function () {
    it('should return the last item in the array', function () {
        expect(devolverUltimoElemento([10, 10, 16, 12])).toBe(12);
        expect(devolverUltimoElemento([97, 100, 80, 55, 72, 94])).toBe(94);
        expect(devolverUltimoElemento(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe('doing?');
    });
});

describe('arrayContiene(arr, item)', function () {
    it('should return true if the array contains the item', function () {
        expect(arrayContiene([10, 10, 16, 12], 10)).toBe(true);
        expect(arrayContiene([97, 100, 80, 55, 72, 94], 'Hola')).toBe(false);
        expect(arrayContiene([], true)).toBe(false);
    });
});

describe('numeroMasGrande(numbers)', function () {
    it('should return the largest number', function () {
        expect(numeroMasGrande([10, 10, 16, 12])).toBe(16);
        expect(numeroMasGrande([97, 100, 80, 55, 72, 94])).toBe(100);
        expect(numeroMasGrande([97, 10000, 80, 55, 7.2, -94])).toBe(10000);
    });
});

describe('breakStatement(numero)', function () {
    it('should return an array with the values ​​resulting from adding 2 in each iteration', function () {
        expect(breakStatement(50)).toEqual([52, 54, 56, 58, 60, 62, 64, 66, 68, 70]);
    });
    it('should stop the execution if the sum value and the iteration number match', function () {
        expect(breakStatement(-4)).toEqual('Se interrumpió la ejecución');
    });
});

describe('continueStatement(numero)', function () {
    it('should return an array with the values ​​resulting from adding 2 in each iteration when the iteration number is different from 5', function () {
        expect(continueStatement(50)).toEqual([52, 54, 56, 58, 60, 62, 64, 66, 68]);
        expect(continueStatement(-4)).toEqual([-2, 0, 2, 4, 6, 8, 10, 12, 14]);
    });
});