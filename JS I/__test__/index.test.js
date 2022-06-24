const {
    nuevaString,
    nuevoNum,
    nuevoBool,
    nuevaMultiplicacion,
    nuevoModulo,
    devolverString,
    tienenMismaLongitud,
    sonIguales,
    menosQueDiez,
    mayorQueCinco,
    suma,
    resta,
    divide,
    multiplica,
    obtenerResto,
    esPar,
    esImpar,
    cuadrado,
    cubo,
    elevar,
    redondear,
    redondearHaciaArriba,
    numeroRandom,
    esPositivo,
    agregarSimboloExclamacion,
    combinarNombres,
    areaRectangulo,
    perimetro,
    areaDelTriangulo,
    deCelsiusAFahrenheit,
} = require('../activities')

describe('nuevaString', function () {
    it('Deberia ser un string', function () {
        expect(typeof nuevaString).toBe('string');
    });
});

describe('nuevoNum', function () {
    it('Deberia ser un numero', function () {
        expect(typeof nuevoNum).toBe('number');
    });
});

describe('nuevoBool', function () {
    it('Deberia ser un booleano', function () {
        expect(typeof nuevoBool).toBe('bulean');
    });
});

describe('nuevaMultiplicacion', function () {
    it('Deberia ser un booleano', function () {
        expect(nuevaMultiplicacion).toBe(true);
    });
});

describe('nuevoModulo', function () {
    it('Deberia ser un booleano', function () {
        expect(nuevoModulo).toBe(true);
    });
});

describe('Devolver String', () => {
    test('Deberia devolver el string provisto por parámetro', () => {
        let param = 'Soy un parámetro'
        expect(devolverString(param)).toBe(param)
    })
})

describe('Devolver Suma', () => {
    test('Deberia devolver la suma de los 2 números', () => {
        expect(suma(2, 3)).toBe(5)
        expect(suma(1, 0)).toBe(1)
        expect(suma(-1, 11)).toBe(10)
    })
})

describe('Devolver Resta', () => {
    test('Deberia devolver la resta de los 2 números', () => {
        expect(resta(2, 3)).toBe(-1)
        expect(resta(-2, 0)).toBe(-2)
        expect(resta(0, 0)).toBe(0)
    })
})

describe('Devolver Producto', () => {
    test('Deberia devolver la multiplica de los 2 números', () => {
        expect(multiplica(2, 3)).toBe(6)
        expect(multiplica(-1, 3)).toBe(-3)
        expect(multiplica(20, 0)).toBe(0)
    })
})

describe('Devolver División', () => {
    test('Deberia devolver la división de los 2 números', () => {
        expect(divide(6, 3)).toBe(2)
        expect(divide(10, 10)).toBe(1)
    })
})

describe('Devolver Igualdad', () => {
    test('Deberia devolver true si son iguales o false si no lo son', () => {
        expect(sonIguales(2, 3)).toBe(false)
        expect(sonIguales(3, 3)).toBe(true)
        expect(sonIguales('2', '3')).toBe(false)
    })
})

describe('Devolver Menos que 10', () => {
    test('Deberia devolver true si es menor a 10 o false si no lo es', () => {
        expect(menosQueDiez(2)).toBe(true)
        expect(menosQueDiez(20)).toBe(false)
        expect(menosQueDiez(10)).toBe(false)
    })
})

describe('Devolver Mayor que 5', () => {
    test('Deberia devolver true si es mayor que 5 o false si no lo es', () => {
        expect(mayorQueCinco(5)).toBe(false)
        expect(mayorQueCinco(6)).toBe(true)
        expect(mayorQueCinco(-5)).toBe(false)
    })
})

describe('Devolver Resto', () => {
    test('Deberia devolver el resto de los 2 números', () => {
        expect(obtenerResto(2, 3)).toBe(2)
        expect(obtenerResto(5, 5)).toBe(0)
        expect(obtenerResto(13, 3)).toBe(1)
    })
})

describe('Es Par', () => {
    test('Deberia devolver true si par o false si no lo es', () => {
        expect(esPar(5)).toBe(false)
        expect(esPar(6)).toBe(true)
        expect(esPar(-5)).toBe(false)
        expect(esPar(0)).toBe(true)
    })
})

describe('Es Impar', () => {
    test('Deberia devolver true si impar o false si no lo es', () => {
        expect(esImpar(5)).toBe(true)
        expect(esImpar(6)).toBe(false)
        expect(esImpar(17)).toBe(true)
        expect(esImpar(0)).toBe(false)
    })
})

describe('Devolver el Cuadrado', () => {
    test('Deberia devolver el cuadrado de los números', () => {
        expect(cuadrado(5)).toBe(25)
        expect(cuadrado(6)).toBe(36)
        expect(cuadrado(-5)).toBe(25)
    })
})

describe('Devolver el Cúbo', () => {
    test('Deberia devolver el cúbo de los números', () => {
        expect(cubo(5)).toBe(125)
        expect(cubo(6)).toBe(216)
        expect(cubo(-5)).toBe(-125)
    })
})

describe('Devolver si tienen o no la misma logintud', () => {
    test('Deberia devolver true si tienen la misma cantidad de caracteres o false si no', () => {
        expect(tienenMismaLongitud('Lautaro', 'Alexis')).toBe(false)
        expect(tienenMismaLongitud('Arbol', 'cinco')).toBe(true)
    })
})

describe('Devolver la potencia', () => {
    test('Deberia devolver la potencia de los números', () => {
        expect(elevar(5, 3)).toBe(125)
        expect(elevar(6, 0)).toBe(1)
        expect(elevar(-5, 1)).toBe(-5)
    })
})

describe('Devolver el número Redondeado', () => {
    test('Deberia devolver el número redondeado', () => {
        expect(redondear(5.5)).toBe(6)
        expect(redondear(5.4)).toBe(5)
    })
})

describe('Devolver el próximo entero', () => {
    test('Deberia devolver el próximo entero', () => {
        expect(redondearHaciaArriba(5.5)).toBe(6)
        expect(redondearHaciaArriba(5.1)).toBe(6)
    })
})

describe('Devolver un número entre 0 y 1', () => {
    test('Deberia devolver un número random entre 0 y 1', () => {
        expect(typeof numeroRandom()).toBe('number');
        expect(numeroRandom()).toBeGreaterThanOrEqual(0);
        expect(numeroRandom()).toBeLessThan(1);
    })
})

describe('Devolver Positividad', () => {
    test('Deberia devolver "Es positivo", "Es negativo" o false', () => {
        expect(esPositivo(5)).toBe("Es positivo")
        expect(esPositivo(-3)).toBe("Es negativo")
        expect(esPositivo(0)).toBe(false)
    })
})

describe('Devolver Positividad con Exlmanación!', () => {
    test('Deberia devolver el string con un signo de admiración al final', () => {
        expect(agregarSimboloExclamacion('5')).toBe("5!")
        expect(agregarSimboloExclamacion('Hola!')).toBe('Hola!!')
    })
})

describe('Devolver nombres combinados', () => {
    test('Deberia devolver el nombre + un espacio + el apellido', () => {
        expect(combinarNombres('Ada', 'Lovelace')).toBe("Ada Lovelace")
    })
})

describe('Devolver el área del rectángulo', () => {
    test('Deberia devolver el área de un rectángulo', () => {
        expect(areaRectangulo(5, 3)).toBe(15)
        expect(areaRectangulo(6, 1)).toBe(6)
        expect(areaRectangulo(0, 2)).toBe(0)
    })
})

describe('Devolver el Perímetro', () => {
    test('Deberia devolver el perímetro de un cuadrado', () => {
        expect(perimetro(5)).toBe(20)
        expect(perimetro(6)).toBe(24)
        expect(perimetro(0)).toBe(0)
    })
})

describe('Devolver el área del triángulo', () => {
    test('Deberia devolver el área de un triángulo', () => {
        expect(areaDelTriangulo(10, 5)).toBe(25)
        expect(areaDelTriangulo(20, 10)).toBe(100)
        expect(areaDelTriangulo(0, 15)).toBe(0)
    })
})

describe('Devolver la temperatura en Fahrenheit', () => {
    test('Deberia devolver la temperatura de Celsius a Fahrenheit', () => {
        expect(deCelsiusAFahrenheit(50)).toBe(122)
        expect(deCelsiusAFahrenheit(0)).toBe(32)
        expect(deCelsiusAFahrenheit(-50)).toBe(-58)
    })
})
