# JavaScript 3

## Introducción a los Objetos

Los objetos y las matrices son similares en ciertas cosas, y muy diferentes en otras. Mientras que los array pueden contener múltiples elementos relacionados unos con otros, los objetos contienen mucha información sobre una sola cosa. Los objetos se instancian usando llaves (`{}`).

```javascript
const nuevoObjeto = {};
```

### Pares Clave:Valor (`Key:Value`)

A diferencia de las matrices que tienen elementos valorados en índices, los objetos usan un concepto llamado pares de clave:valor. La clave (_key_) es el identificador y el valor (_value_) es el valor que queremos guardar en esa clave. Las claves son únicas en un objeto, solo puede haber una clave de ese nombre, aunque, varias claves pueden tener el mismo valor. Los valores pueden ser cualquier tipo de dato de Javascript; cadena, número, booleano, matriz, función o incluso otro objeto. En esta demostración crearemos un objeto `usuario`.

```javascript
const usuario = {
    username: 'leonardoq',
    password: 'password123',
    lovesJavascript: false,
    favoriteNumber: 42
};
```

### Acceder a los valores

Una vez que tengamos los pares clave-valor, podemos acceder a esos valores llamando al nombre del objeto y la clave. Hay dos formas diferentes de hacer esto, usando puntos o usando corchetes.

Con la notación de puntos podemos llamar al nombre del objeto, un punto y el nombre de la clave. Así como llamamos a la propiedad `.length` en una matriz. La propiedad de longitud es un par de clave-valor.

```javascript
user.lovesJavascript; // false
user.username;        // leonardoq
```

La notación de corchetes es como llamar a un elemento en una matriz, aunque con corchetes debemos usar una cadena o número, o una variable que apunte a una cadena o número. Se puede llamar a cada clave envolviéndola con comillas:

```javascript
const passString = 'password';
user['lovesJavascript']; // false
user['username'];        // leonardoq
user[passString];        // password123
```

### Asignación de valores

Asignar valores funciona igual que acceder a ellos. Podemos asignarlos, cuando creamos el objeto, con notación de puntos o con notación de corchetes:

```javascript
const nuevoUsuario = {
    esNuevo: true
}

const loveJSString = 'lovesJavascript';

nuevoUsuario.username = 'otro.nombre.de.usuario';
nuevoUsuario['password'] = '12345';
nuevoUsuario[loveJSString] = true;
```

## Eliminando propiedades

Si queremos eliminar una propiedad, podemos hacerlo usando la palabra clave `delete`:

```javascript
const nuevoObjeto = {
    eliminarEstaPropiedad: true
};

delete nuevoObjeto.eliminarEstaPropiedad;
```

## Métodos

En los objetos, los valores se pueden establecer en funciones. Las funciones guardadas en un objeto se denominan métodos. Hemos utilizado muchos métodos hasta ahora como: `.length`,` .push`, `.pop`, etc., son todos métodos. Podemos establecer una clave para un nombre y el valor para una función. Al igual que otras veces que llamamos métodos, llamaremos a este método usando notación de puntos y paréntesis finales (Nota: podemos llamar a un método con argumentos como lo haríamos con una función normal):

```javascript
const nuevoObjeto = {
    decirHola: function() {
        console.log('Los #includes son grandiosos!');
    }
}

nuevoObjeto.decirHola(); //Los #includes son grandiosos!
```

## Bucles `for…in`

A veces queremos iterar sobre cada par clave-valor en nuestro objeto. Con las matrices, utilizamos un estándar para el bucle y una variable de número de índice. Los objetos no contienen índices numéricos, por lo que el bucle estándar no funcionará para los objetos. Javascript tiene un segundo tipo de bucle for integrado llamado "_for ... in loop_".

```javascript
const usuario = {
    username: 'leonardoq',
    password: 'password123',
    lovesJavascript: true,
    favoriteNumber: 42
};

for (let clave in usuario){
    console.log(clave);
    console.log(usuario[clave]);
}

// username
// 'leonardoq'
// password
// 'password123'
// lovesJavascript
// true
// favoriteNumber
// 42
```

## Callbacks

Un concepto muy importante en Javascript es la capacidad de pasar una función como argumento a otra función. Estas funciones se denominan `callbacks`. Estas funciones pueden llamarse en cualquier momento y pasar argumentos dentro de la función. Pronto descubriremos por qué las devoluciones de llamada son tan importantes para Javascript. La convención es usar `cb` como argumento para la variable que se usará de callback.

```javascript
function decirHolaAlUsuario(usuario) {
    return 'Hola ' + usuario + '!';
}

function decirAdiosAlUsuario(usuario) {
    return 'Adiós ' + usuario + '!';
}

function crearSaludo(usuario, cb) {
    return cb(usuario);
}

crearSaludo('Dan', decirHolaAlUsuario); // 'Hello Dan!'
crearSaludo('Dan', decirAdiosAlUsuario); // 'Goodbye Dan!'
```

## Más métodos de Arrays

`.forEach` es un bucle for integrado en cada array. `.forEach` toma un callback como su único argumento, e itera sobre cada elemento de la matriz y llama al callback en él. El callback puede tomar dos argumentos, el primero es el elemento en sí, el segundo es el índice del elemento (este argumento es opcional).

```javascript
const autos = ['Ford', 'Chevrolet', 'Toyota', 'Tesla'];

// Podemos escribir el callback en los paréntesis como una función anónima
autos.forEach(function(elemento, indice) {
    console.log(elemento);
});

// O podemos crear una instancia de una función para usarla como callback.
// Además, no necesitamos usar el argumento de índice, si no lo necesitas, no dudes en omitirlo.
function mostrarNombres(elemento) {
    console.log(elemento);
}

// And call that function in the forEach parentheses
autos.forEach(mostrarNombres);
```

### `.reduce`

`.reduce` ejecutará un bucle en nuestra matriz con la intención de reducir cada elemento en un elemento que se devuelve. Como es el primer argumento, acepta un callback que toma dos argumentos, primero un 'acumulador' (el resultado del método de reducción hasta ahora), y el segundo es el elemento en el que se encuentra actualmente. El callback debe contener siempre una declaración de devolución ("return"). `.reduce` también toma un segundo argumento opcional, que sería el acumulador de arranque ("starting accumulator"). Si no se suministra el acumulador de arranque, la reducción comenzará en el primer elemento de la matriz. `.reduce` siempre devolverá el acumulador cuando termine de recorrer los elementos.

```javascript
const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
const palabras = [ 'Hola,', 'mi', 'nombre', 'es', 'Martin'];

// Podemos escribir la función anónima directamente en los paréntesis de .reduce
// Si omitimos el elemento inicial, siempre comenzará en el primer elemento.
const suma = numeros.reduce(function(acc, elemento){
    return acc + elemento;
});

// Podemos escribir una función fuera de los parents de .reduce (para usar varias veces más tarde)
function multiplicarDosNumeros(a, b) {
    return a * b;
}

const productos = numeros.reduce(multiplicarDosNumeros);

// .reduce funciona en cualquier tipo de datos.
// En este ejemplo configuramos un acumulador de arranque
const frases = palabras.reduce(function(acc, elemento) {
    return acc + ' ' + elemento;
}, 'Frase completa:');

console.log(suma); // 45
console.log(productos); // 362880
console.log(frases); // "Frase completa: Hola, mi nombre es Martin"
```
### `.map`

`.map` se usa cuando queremos cambiar cada elemento de una matriz de la misma manera. `.map` toma una devolución de llamada como único argumento. Al igual que el método `.forEach`, el callback tiene el elemento y el índice de argumentos opcionales. A diferencia de `.reduce`,` .map` devolverá toda la matriz.

```javascript
const numeros = [2, 3, 4, 5];

function multiplicarPorTres(elemento) {
    return elemento * 3;
}

const doble = numeros.map(function(elemento) {
    return elemento * 2;
});

const triple = numeros.map(multiplicarPorTres)

console.log(doble); // [ 4, 6, 8, 10 ]
console.log(triple); // [ 6, 9, 12, 15 ]
```
