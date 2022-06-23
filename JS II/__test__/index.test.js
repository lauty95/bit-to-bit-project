const {
    obtenerMayor,
    incrementarPorUno,
    devolverUltimoElemento,
    arrayContiene,
    numeroMasGrye,
    breakStatement,
    continueStatement,
    estaEnRango,
    esEntero,
    fizzBuzz,
    operadoresLogicos,
    esPrimo,
    tablaDelSees,
    tieneTresDigitos,
    doWhile
} = require('../homework');

describe('obtenerMayor(x, y)', function () {
    it('debería devolver x si es mas grye que y', function () {
        expect(obtenerMayor(10, 5)).toBe(10);
    });
    it('debería devolver y si es mas grye que x', function () {
        expect(obtenerMayor(50, 100)).toBe(100);
    });
    it('debería devolver el mismo valor', function () {
        expect(obtenerMayor(1000, 1000)).toBe(1000);
    });
});

describe('estaEnRango(num)', function () {
    it('debería devolver true si num está en rango', function () {
        expect(estaEnRango(35.5)).toBe(true);
        expect(estaEnRango(40)).toBe(true);
        expect(estaEnRango(49)).toBe(true);
        expect(estaEnRango(21)).toBe(true);
    });
    it('debería devolver false si está fuera de rango', function () {
        expect(estaEnRango(10)).toBe(false);
        expect(estaEnRango(20)).toBe(false);
        expect(estaEnRango(50)).toBe(false);
        expect(estaEnRango(100)).toBe(false);
    });
});

describe('esEntero(num)', function () {
    it('debería devolver true si num es 5', function () {
        expect(esEntero(5)).toBe(true);
    });
    it('debería devolver false si num es 0.5', function () {
        expect(esEntero(0.5)).toBe(false);
    });
    it('debería devolver true si num es -20', function () {
        expect(esEntero(-20)).toBe(true);
    });
    it('debería devolver true for 0', function () {
        expect(esEntero(0)).toBe(true);
    });
});

describe('fizzBuzz(num)', function () {
    it('debería devolver fizz si divisible por 3', function () {
        expect(fizzBuzz(9)).toBe('fizz');
    });
    it('debería devolver buzz si divisible por 5', function () {
        expect(fizzBuzz(10)).toBe('buzz');
    });
    it('debería devolver fizzbuzz si divisible por 3 y 5', function () {
        expect(fizzBuzz(15)).toBe('fizzbuzz');
    });
    it('debería devolver num si no es divisible por 3 o 5', function () {
        expect(fizzBuzz(4)).toBe(4);
    });
});

describe('operadoresLogicos(num1, num2, num3)', function () {
    it('debería devolver \'Número 1 es mayor y positivo\' si num1 es positivo y si es mayor que num2 y num3', function () {
        expect(operadoresLogicos(50, 2, 15)).toBe('Número 1 es mayor y positivo');
    });
    it('debería devolver \'Hay negativos\' si alguno es negativo', function () {
        expect(operadoresLogicos(80, -1, 2)).toBe('Hay negativos');
    });
    it('debería devolver num3 + 1 si num3 es mayor que num1 y num2', function () {
        expect(operadoresLogicos(1, 3, 10)).toBe(11);
    });
    it('debería devolver \'Error\' si alguno de los argumentos es 0', function () {
        expect(operadoresLogicos(1, 0, 10)).toBe('Error');
    });
    it('debería devolver false si no se cumple alguna de las condiciones', function () {
        expect(operadoresLogicos(10, 30, 6)).toBe(false);
    });
});

describe('esPrimo(num)', function () {
    it('debería devolver true si num es primo', function () {
        expect(esPrimo(7)).toBe(true);
        expect(esPrimo(97)).toBe(true);
    });
    it('debería devolver false si num no es primo', function () {
        expect(esPrimo(10)).toBe(false);
        expect(esPrimo(100)).toBe(false);
        expect(esPrimo(0)).toBe(false);
        expect(esPrimo(1)).toBe(false);
    });
});

describe('tablaDelSees()', function () {
    it('debería devolver la tabla del 6', function () {
        expect(tablaDelSees()).toEqual([0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]);
    });
});

describe('tieneTresDigitos(numero)', function () {
    it('debería devolver true si numero tiene 3 digitos', function () {
        expect(tieneTresDigitos(100)).toBe(true);
        expect(tieneTresDigitos(820)).toBe(true);
        expect(tieneTresDigitos(900)).toBe(true);
        expect(tieneTresDigitos(10)).toBe(false);
        expect(tieneTresDigitos(20000)).toBe(false);
    });
});

describe('doWhile(numero)', function () {
    it('debe sumar 5 al número hasta llegar a un límite de 8 veces y devolver el valor de la suma', function () {
        expect(doWhile(5)).toBe(45);
        expect(doWhile(100)).toBe(140);
        expect(doWhile(-1)).toBe(39);
    });
});

describe('incrementarPorUno(arr)', function () {
    it('debería devolver el array con cada valor incrementado por 1', function () {
        expect(incrementarPorUno([10, 10, 16, 12])).toEqual([11, 11, 17, 13]);
        expect(incrementarPorUno([97, 100, 80, 55, 72, 94])).toEqual([98, 101, 81, 56, 73, 95]);
        expect(incrementarPorUno([])).toEqual([]);
    });
});

describe('devolverUltimoElemento(arr)', function () {
    it('debería devolver el último ítem del array', function () {
        expect(devolverUltimoElemento([10, 10, 16, 12])).toBe(12);
        expect(devolverUltimoElemento([97, 100, 80, 55, 72, 94])).toBe(94);
        expect(devolverUltimoElemento(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe('doing?');
    });
});

describe('arrayContiene(arr, item)', function () {
    it('debería devolver true si el array contiene el item', function () {
        expect(arrayContiene([10, 10, 16, 12], 10)).toBe(true);
        expect(arrayContiene([97, 100, 80, 55, 72, 94], 'Hola')).toBe(false);
        expect(arrayContiene([], true)).toBe(false);
    });
});

describe('breakStatement(numero)', function () {
    it('debería devolver un array con los valores resultantes de sumar 2 en cada iteración', function () {
        expect(breakStatement(50)).toEqual([52, 54, 56, 58, 60, 62, 64, 66, 68, 70]);
    });
    it('should stop the execution si the sum value y the iteration number match', function () {
        expect(breakStatement(-4)).toEqual('Se interrumpió la ejecución');
    });
});

describe('continueStatement(numero)', function () {
    it('debería devolver un array con los valores resultantes de sumar 2 en cada iteración cuando el número de iteración sea diferente de 5', function () {
        expect(continueStatement(50)).toEqual([52, 54, 56, 58, 60, 62, 64, 66, 68]);
        expect(continueStatement(-4)).toEqual([-2, 0, 2, 4, 6, 8, 10, 12, 14]);
    });
});
