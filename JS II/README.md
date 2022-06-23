# JavaScript 2

## Undefined y null

Hay un par de objetos Javascript que realmente no encajan en ningún tipo de dato. Esos son los valores `undefined` y` null`. Obtendrás `undefined` cuando busques _algo_ que no existe, como una variable que aún no tiene un valor. `undefined` simplemente significa que lo que estás pidiendo no existe.

```javascript
console.log(variableInexistente); // undefined
```

`null` es un objeto que nosotros, los desarrolladores, establecemos cuando queremos decirles a otros desarrolladores que el elemento que están buscando existe, pero no hay ningún valor asociado con él. Mientras que `undefined` está configurado por Javascript,` null` está configurado por un desarrollador. Si alguna vez recibes `null`, debes saber que otro desarrollador estableció ese valor en` null`

```javascript
let numeroTelefono = '11-1234-5678';
numeroTelefono = null;

numeroTelefono; // null
```

Una última cosa a tener en cuenta, ni `undefined` ni` null` son cadenas, están escritas tal como están sin comillas, como un booleano.

## Veracidad

En estas lecciones hemos hablado sobre los valores booleanos, `true` y` false`. Cuando se usa una declaración `if` u otra declaración que espera un valor booleano (como `!`, _NOT_), y la expresión dada no es un valor booleano, Javascript hará algo llamado "coerción de tipo" y transformará lo que sea que se le entregue a un valor booleano. Esto se conoce como "truthy" y "falsey". Cada tipo de datos tiene una veracidad. Acá hay unos ejemplos:

```javascript
// Datos que son forzados a verdaderos/"true"
true
1
' '
[] // Un array
{} // Un objeto
function() {}

// Datos que son forzados a falsos/"false"
false
0
undefined
null
'' // Una cadena vacía
```

## Operadores lógicos

Podemos combinar dos expresiones de igualdad y preguntar si alguna de las dos es verdadera, si ambas son verdaderas o si ninguna de ellas es verdadera. Para hacer esto, utilizaremos operadores lógicos.

### &&

El primer operador lógico que veremos es el operador "Y" ("AND"). Está escrito con dos símbolos (`&&`). Esto evaluará ambas expresiones y devolverá verdadero si AMBAS expresiones son `true`. Si uno (o ambos) de ellos es falso, este operador devolverá `false`:

```javascript
if (100 > 10 && 10 === 10) {
    console.log('Ambas declaraciones son ciertas, este código se ejecutará');
}

if (10 === 9 && 10 > 9) {
    console.log('Una de las declaraciones es false, por lo que && devolverá false, y este código no se ejecutará');
}
```

### ||

El siguiente es el operador "Ó" ("OR"). Está escrito con dos barras verticales (`||`). Determinará si una de las expresiones es `true`. Devolverá `true` si una (o ambas) de las expresiones es` true`. Devolverá `false` si AMBAS expresiones son` false`:

```javascript
if (100 > 10 || 10 === 10) {
    console.log('Ambas declaraciones son ciertas, este código se ejecutará');
}

if (10 === 9 || 10 > 9) {
    console.log('Una de las declaraciones es true, por lo que || devolverá true y este código se ejecutará');
}

if (10 === 9 || 1 > 9) {
    console.log('Ambas declaraciones son falsas, por lo que || devolverá false y este código no se ejecutará');
}
```

### !

El último operador lógico es el operador "NOT" ("NO"). Está escrito como un solo signo de exclamación (`!`). Vimos este operador antes al determinar la igualdad (`!==`). Como antes, el operador NOT devolverá el valor booleano opuesto de lo que se le pasa:

```javascript
if (!false) {
    console.log('El ! devolverá true, porque es lo contrario de false, así que ste código se ejecutará');
}

if (!(1 === 1)) {
    console.log('1 es igual a 1, de modo que la expresión devuelve true. El operador ! devolverá lo contrario de eso, por lo que este código NO se ejecutará');
}
```

### Notas sobre operadores lógicos

Un par de cosas a tener en cuenta sobre los operadores lógicos.

* Las expresiones se evalúan en orden, y la computadora omitirá cualquier expresión redundante. En una declaración `&&`, si la primera expresión es `false`, la segunda expresión no se evaluará porque AMBAS expresiones deben ser` true`. Lo mismo para la declaración `||`. Si la primera expresión es `verdadero`, la segunda no se evaluará porque solo debe haber una declaración` verdadero` para cumplir con los requisitos del operador.

* Usá paréntesis. Como vimos en el segundo ejemplo de operador `!`, usamos paréntesis para evaluar PRIMERO lo que estaba dentro de los paréntesis, luego aplicamos el operador `!`. Podemos ajustar cualquier expresión entre paréntesis y se evaluará antes de evaluar la expresión como un todo.

## Ternario

El ternario en JavaScript es otra manera de hacer un if más corto de escribir.

```javascript
var edad = 16;

edad > 18 ? console.log('Es mayor') : console.log('Es menor')
```

También se puede aplicar con los operadores lógicos. Por ejemplo, si solo queremos que alguna función se ejecute si es mayor de edad podemos escribir lo siguiente:

```javascript
var edad = 16;

edad > 18 && puedePasar()
```

Y si queremos que, si la primer condicion no se cumple, se ejecute otra cosa:

```javascript
var edad = 16;

edad < 18 && noPuedePasar()
```

## Bucles `for`

Estructura del bucle for

```javascript
for (let i = 0                 ; i < 10                 ; i++          ) {
// | Declaramos una variable | Expresión condcicional | Incrementamos la variable |
    console.log(i);
}
```

### for .. in
La instrucción for-in itera sobre todas las propiedades enumerables de un objeto que está codificado por cadenas por ejemplo: 

```javascript
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// imprime:
// "a: 1"
// "b: 2"
// "c: 3"
```

### for .. of

La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son los strings o arrays.

```javascript
let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31
```

### forEach

El método forEach() ejecuta una función indicada una vez por cada elemento del array.

```javascript
const array = ['a', 'b', 'c'];

array.forEach(elemento => console.log(elemento));

// "a"
// "b"
// "c"
```
