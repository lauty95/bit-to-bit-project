const {
    crearGato,
    agregarPropiedad,
    invocarMetodo,
    multiplicarNumeroDesconocidoPorCinco,
    eliminarPropiedad,
    nuevoUsuario,
    tieneEmail,
    tienePropiedad,
    verificarPassword,
    actualizarPassword,
    agregarAmigo,
    pasarUsuarioAPremium,
    sumarLikesDeUsuario,
    agregarMetodoCalculoDescuento,
    mayuscula,
    invocarCallback,
    operacionMatematica,
    sumarArray,
    forEach,
    map,
    filter,
} = require('../activities');

describe('crearGato(nombre, edad)', function () {
    it('debería crear un nuevo gato con las propiedades nombre y edad', function () {
        expect(crearGato('Bola de Nieves', 1).nombre).toBe('Bola de Nieves');
        expect(crearGato('Bola de Nieves', 1).edad).toBe(1);
        expect(crearGato('Bola de Nieves II', 5).nombre).toBe('Bola de Nieves II');
        expect(crearGato('Bola de Nieves II', 5).edad).toBe(5);
    });
    it('debería tener un metodo llamado meow meow', function () {
        expect(crearGato('Bola de Nieves III', 2).meow()).toBe('Meow!');
    });
});

describe('agregarPropiedad(object, property)', function () {
    it('debería agregar la propiedad al objeto con el valor null', function () {
        const object = {
            x: 1,
            y: 2,
        };
        const updatedObject = {
            x: 1,
            y: 2,
            z: null,
        };
        expect(agregarPropiedad(object, 'z')).toEqual(updatedObject);
    });
});

describe('invocarMetodo(object, method)', function () {
    it('debería invocar el metodo del objeto', function () {
        const object = {
            x: 0,
            incrementX: function () {
                this.x++;
            },
        }
        invocarMetodo(object, 'incrementX');
        expect(object.x).toBe(1);
    });
});

describe('multiplicarNumeroDesconocidoPorCinco(mysteryNumberObject)', function () {
    it('debería devolver el mysteryNumber multiplicado por 5', function () {
        const mysteryBox = { numeroMisterioso: 999 };
        expect(multiplicarNumeroDesconocidoPorCinco(mysteryBox)).toBe(4995);
        mysteryBox.numeroMisterioso = -5;
        expect(multiplicarNumeroDesconocidoPorCinco(mysteryBox)).toBe(-25);
    });
});

describe('eliminarPropiedad(object, property)', function () {
    it('debería borrar la propiedad del objeto', function () {
        const updatedObject = {
            x: 1,
            y: 2,
        };
        const object = {
            x: 1,
            y: 2,
            z: null,
        };
        expect(eliminarPropiedad(object, 'z')).toEqual(updatedObject);
    });
});

describe('nuevoUsuario(nombre, email, password)', function () {
    it('debería devolver un nuevo objeto con las propiedades: usuario con nomre email y password', function () {
        const user = {
            nombre: 'Maira',
            email: 'maira@email.com',
            password: 'contraseña',
        };
        expect(nuevoUsuario(user.nombre, user.email, user.password)).toEqual(user);
        const user2 = {
            nombre: 'Samuel',
            email: 'samuel@email.com',
            password: 'password',
        };
        expect(nuevoUsuario(user2.nombre, user2.email, user2.password)).toEqual(user2);
    });
});

describe('tieneEmail(user)', function () {
    it('debería devolver true si el objeto del usuario tiene un valor definido para la propiedad email', function () {
        expect(tieneEmail({ usernombre: 'Samuel', email: 'samuel@email.com' })).toEqual(true);
        expect(tieneEmail({ usernombre: 'Jhon', email: null })).toEqual(false);
        expect(tieneEmail({ usernombre: 'Antonio' })).toEqual(false);
    });
});

describe('tienePropiedad(object, property)', function () {
    it('debería devolver true si el objeto tiene definida la propiedad pasada por argumento', function () {
        const obj = {
            x: true,
        };
        expect(tienePropiedad(obj, 'x')).toEqual(true);
        expect(tienePropiedad(obj, 'y')).toEqual(false);
    });
});

describe('verificarPassword(user, password)', function () {
    it('debería devolver true true si el password coincide', function () {
        const user = {
            password: 'Me encanta JS!',
        };
        const password = 'Me encanta JS!';
        expect(verificarPassword(user, password)).toBe(true);
    });
    it('debería devolver false si el password no coincide', function () {
        const user = {
            password: 'Me encanta JS!',
        };
        const password = 'Hacker time!';
        expect(verificarPassword(user, password)).toBe(false);
    });
});

describe('actualizarPassword(user, password)', function () {
    it('debería devolver el objeto usuario con la nueva contraseña', function () {
        const user = {
            password: 'Me encanta JS!',
        };
        const password = 'Me encanta JS mucho más!';
        expect(actualizarPassword(user, password).password).toBe(password);
    });
});

describe('agregarAmigo(user, newFriend)', function () {
    it('debería agregar el nuevo amigo al final del array.', function () {
        const user = {
            amigos: ['Ben', 'Austen', 'Ryan', 'Mike', 'Young'],
        };
        const newFriend = 'Shay';
        expect(agregarAmigo(user, newFriend).amigos.pop()).toBe(newFriend);
    });
});

describe('pasarUsuarioAPremium(users)', function () {
    it('debería devolver el array users con cada propiedad seteada a true', function () {
        const users = [
            { esPremium: false },
            { esPremium: false },
            { esPremium: false },
            { esPremium: false },
            { esPremium: false },
        ];
        const updatedUsers = [
            { esPremium: true },
            { esPremium: true },
            { esPremium: true },
            { esPremium: true },
            { esPremium: true },
        ];
        expect(pasarUsuarioAPremium(users)).toEqual(updatedUsers);
    });
});

describe('sumarLikesDeUsuario(user)', function () {
    it('debería devolver la suma de likes de todos los posts de los usuarios', function () {
        const user = {
            usernombre: 'Jhon Doe',
            password: 'JavaScript es genial!',
            posts: [
                {
                    id: '1',
                    title: 'Leo Q!',
                    likes: 10
                },
                {
                    id: '2',
                    title: 'Maira!',
                    likes: 100
                },
                {
                    id: '3',
                    title: 'Qué es un JavaScript?',
                    likes: 35
                },
                {
                    id: '4',
                    title: 'El poder de los #Includes',
                    likes: 42
                },
                {
                    id: '5',
                    title: 'Chrome no consume tanta Ram',
                    likes: 99
                },
            ],
        };
        expect(sumarLikesDeUsuario(user)).toBe(286);
    });
});

describe('agregarMetodoCalculoDescuento(storeItem)', function () {
    const storeItem = {
        precio: 80,
        porcentajeDeDescuento: 0.1,
    };
    const storeItem2 = {
        precio: 5,
        porcentajeDeDescuento: 0.5,
    };

    it('debería agregar el metodo \'calcularPrecioDescuento\'', function () {
        expect(agregarMetodoCalculoDescuento(storeItem).calcularPrecioDescuento).toBeDefined();
        expect(agregarMetodoCalculoDescuento(storeItem2).calcularPrecioDescuento).toBeDefined();
    });
    it('debería retornar el descuento de precio del nuevo metodo \'precioConDescuento\'', function () {
        expect(agregarMetodoCalculoDescuento(storeItem).calcularPrecioDescuento()).toBe(72);
        expect(agregarMetodoCalculoDescuento(storeItem2).calcularPrecioDescuento()).toBe(2.5);
    });
});

describe('mayuscula(nombre)', function () {
    it('debería devolver el mismo nombre con la primer letra Mayúscula', function () {
        expect(mayuscula("mario")).toBe("Mario");
        expect(mayuscula("ana")).toBe("Ana");
    });
});

describe('invocarCallback(cb)', function () {
    it('debería invocar la función callback pasa por parámetro', function () {
        const cb = jest.fn();
        invocarCallback(cb);
        expect(cb).toHaveBeenCalled();
    });
});

describe('operacionMatematica(n1, n2, cb)', function () {
    it('debería funcionar jajaja', function () {
        const cb = jest.fn();
        operacionMatematica(100, 20, cb);
        expect(cb).toHaveBeenCalled();
    });
});

describe('sumarArray(cb)', function () {
    it('debería pasar la suma del array por el cb', function (done) {
        sumarArray([1, 2, 3, 4, 5], function (sum) {
            expect(sum).toBe(15);
            done();
        });
    });
});

describe('forEach(arr, cb)', function () {
    it('debería pasar los items del array por la función cb', function () {
        const nums = [];
        forEach([1, 2, 3, 4, 5], function (num) {
            nums.push(num);
        });
        expect(nums).toEqual([1, 2, 3, 4, 5]);
    });
});

describe('map(arr, cb)', function () {
    it('debería retornar un array con todos los elementos procesados', function () {
        const squares = map([1, 2, 3, 4, 5], function (num) {
            return num * num;
        });
        expect(squares).toEqual([1, 4, 9, 16, 25]);
    });
});

describe('filter(array)', function () {
    it('debería devolver un array solo con las palabras que inician con "a"', function () {
        var array = ['abajo', 'pera', 'escalera', 'alerta', 'indice', 'azteca', 'arbol', 'buzo'];
        expect(filter(array)).toEqual(["abajo", "alerta", "azteca", "arbol"]);
    });
});
