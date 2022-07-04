
# JavaScript 1

## Introducción a Javascript

JavaScript es un lenguaje de programación que fue creado originalmente para ser usado en el front-end de una pǻgina web. La idea original era poder dar dinamismo a las páginas webs, que en un principio eran estáticas. La introducción del "motor V8" de Google ha mejorado la velocidad y el funcionamiento de JS. Haciendo que JS (javascript) sea la lengua franca de la web, llegando inclusive al Back-End a través de NodeJs.


## Variables

Javascript es un lenguaje de tipado dinámico, una variable se puede configurar (y restablecer) a cualquier tipo, no necesitamos declarar su tipo al iniciar la variable.

Para crear una variable en JavaScript utilizamos la palabra clave `var`, seguida de un espacio y el nombre de la variable. Además de declarar una variable, podemos asignarle un valor usando el signo `=`.

> Nota: Las palabras claves o keywords son palabras especiales que utiliza el lenguaje para indicar algo. No podremos usas las palabras claves del lenguaje cómo nombres de variables.
Existen tres formas de declarar una variable:

```javascript
    var nombre = 'Bart';
    let apellido = 'Simpson';
    const comidafavorita = 'Pizza';
```

`var` Esta es una _palabra clave_ genérica para "variable".

`let` es una nueva palabra clave de ES6, esto asignará una variable muy similar a `var`, pero con un comportamiento un poco diferente. Lo más notable es que difiere al crear un "nivel de _scope_".

`const` es una variable que no se podrá cambiar. Esto es la abreviatura de "constante".

### console.log

```javascript
console.log();
```

Este método muy simple nos permitirá imprimir en la consola todo lo que pongamos entre paréntesis.

## Tipos de Datos

Un tipo de datos Primitivo, son tipos de datos básicos que vienen previamente definidos con el lenguaje. Usando estos tipos de datos primitivos vamos a poder crear tipos de datos más complejos. 

* __undefined__: Este representa que algo no está definido, como por ejemplo cuando declaramos una variable y no le asignamos nada, toma el valor `undefined` por defecto.
* __null__: Este tambien representa que algo no existe. Lo vamos a usar para decir que una variable está vacía o no tiene nada adentro. (No es lo mismo decir que una variable no está definida, a que NO tiene nada adentro. En el segundo caso _sabemos_ que no tiene nada.)
* __Boolean__: true o false.
* __Number__: Este tipo de datos representa un número real. En JavaScript todos los números son representados como tipo flotantes.
* __String__ : Una secuencia de caractéres.

### Strings

Las "strings" son bloques de texto, siempre se definirán entre comillas, ya sea simple o doble. Cualquier texto entre comillas es una cadena o string.

```javascript
var nombrePerro = 'firulais';
```
### Numbers

Los números son solo eso, números. Los números NO se envuelven en comillas. Pueden ser negativos también. Javascript tiene una limitación en el tamaño de un número (+/- 9007199254740991)

```javascript
var positivo = 27;
var negativo = -40;
var flotante = 2.71828182846;
```

### Boolean

Esencialmente significa que tiene dos opciones, activar o desactivar, 0 o 1, verdadero o falso. En Javascript usamos booleanos para significar verdadero o falso.

```javascript
var meEncantaLaLasagna = true;
```

Los valores posibles de un dato booleando en JS son: `true` o `false`.

## Math

Los operadores matemáticos trabajan en JavaScript tal como lo harían en su calculadora.

### + - * / =

```javascript
1 + 1 = 2
2 * 2 = 4
2 - 2 = 0
2 / 2 = 1
```

### %

Algo que quizás no haya visto antes es el Módulo (`%`), este operador matemático dividirá los dos números y devolverá el resto.

```javascript
21 % 5 = 1;
21 % 6 = 3;
21 % 7 = 0;
```

## Objetos Globales y métodos

Javascript tiene una serie de objetos integrados para que los usemos. Ya hemos visto, y hemos estado usando, el objeto de consola y su método `log`. Otro de estos objetos es `Math`. `Math` tiene varios métodos, al igual que` console` tiene `log`. Para agregar a esto, algunos de nuestros tipos de datos también tienen métodos incorporados.

### Math.pow

Podemos usar el método `pow` en` Math` para devolver un número elevado a un exponente. Tomará dos números.

```javascript
Math.pow(2,2) = 4;
Math.pow(3,2) = 9;
Math.pow(3,3) = 27;
```

### Math.round , Math.floor, Math.ceil

`Math` también tiene métodos que redondearán los números para nosotros. `.round` redondeará un número al número entero más cercano. `.floor` siempre redondeará un número al número entero más cercano hacia abajo. `.ceil` siempre se redondeará al número entero más cercano hacia arriba.

```javascript
Math.round(6.5) = 7;
Math.round(6.45) = 6;
Math.floor(6.999) = 6;
Math.ceil(6.0001) = 7;
```

### Funciones String

El tipo de datos "string" tiene varios métodos, entre ellos:

`length` Esto devolverá la cantidad de caracteres en esa cadena.

```javascript
var nombreGato = 'felix';
console.log(nombreGato.length); // 5
```

`toUpperCase` y `toLowerCase` transforman la cadena en mayusculas y minusculas respectivamente.

```javascript
var nombreGato = 'Felix';
console.log(nombreGato.toUpperCase()); // "FELIX"
```

```javascript
var nombreGato = 'Felix';
console.log(nombreGato.toLowerCase()); // "felix"
```

`charAt` Esto devolverá el caracter en la posición que se pasa por parámetro. Un dato interesante es que los strings son válidos como arrays, por lo que se puede hacer lo que se muestra en el ejemplo.
Recordemos que el primer valor es el 0.

```javascript
var nombreGato = 'felix';
console.log(nombreGato.charAt(2)); // l
console.log(nombreGato[2]); // l
```

`includes` Esto devolverá un booleano si encuentra lo que buscas por parámetro.
```javascript
var nombreGato = 'Felix';
console.log(nombreGato.includes("ix")); // true
```

`substring` extrae caracteres desde indiceA hasta indiceB sin incluirlo.
```javascript
var nombreGato = 'Felix';
console.log(nombreGato.substring(2,4)); // "li"
```

`indexOf` y `lastIndexOf` busca el primer y el último índice respectivamente de lo que se busque por parámetro.

```javascript
var nombreGato = 'yo hago yoga hoy';
console.log(nombreGato.indexOf('yo')); // 0 (es la primer posición)
console.log(nombreGato.lastIndexOf('yo')); // 8
```

`replace` y `replaceAll` busca y reemplaza los datos pasados por parámetros. En el primer caso solo lo hace con la primer coincidencia, el 2do lo hace con todos.

```javascript
var nombreGato = 'yo hago yoga hoy';
console.log(nombreGato.replace('yo', 'no')); // 'no hago yoga hoy'
console.log(nombreGato.replaceAll('yo', 'no')); // 'no hago noga hoy'
```

## Introducción a las Funciones

Las funciones son una parte muy importante de todo lenguaje de programacion y sobre todo en JavaScript. Són tipos particulares de Objetos, llamados `callable objects` u objetos invocables.

Ahora que tenemos un conjunto de variables, necesitamos funciones para calcularlas, cambiarlas, hacer algo con ellas. Hay tres formas en que podemos construir una función.

```javascript
    function miFuncion() {}
    const otraFuncion = function () {};
    const yOtra = () => {};
```

### Anatomía de una Función

```javascript
function miFuncion() {}
```

```javascript
function logHola() {
    console.log('hola!');
}
logHola();
```

En este ejemplo declaramos una función `logHola` y la configuramos en` console.log` `'hello'`. Entonces podemos ver que para ejecutar esta función, necesitamos escribir el nombre y los paréntesis. Esta es la sintaxis para ejecutar una función. Una función siempre necesita paréntesis para ejecutarse.

### Argumentos

Ahora que podemos ejecutar una función básica, vamos a comenzar a pasarle argumentos.

```javascript
function logHola(nombre) {
    console.log('Hola, ' + nombre);
}
logHola('Martin');
```

Si agregamos una variable a los paréntesis cuando declaramos la función, podemos usar esta variable dentro de nuestra función. Iniciamos el valor de esta variable pasándola a la función cuando la llamamos. Entonces en este caso `nombre = 'Martin'`. También podemos pasar otras variables a esto:

```javascript
function logHola(nombre) {
    console.log('Hola, ' + nombre);
    console.log( `Hola, ${nombre}`);
}
var miNombre = 'Antonio';
logHola(miNombre);
```

Podemos agregar múltiples argumentos colocando una coma entre ellos:

```javascript
function sumarDosNumeros(a, b) {
  var suma = a + b;
  return suma;
}
sumarDosNumeros(1, 5); // 6
```
### Scope

```javascript
function dividirDosNumeros(a, b) {
  var producto = a / b;
  return producto;
}
dividirDosNumeros(6, 3); // 2
console.log(producto); // undefined
```
Si intentamos `console.log` algo que declaramos dentro de la función, devolverá `undefined` porque no tenemos acceso a él fuera de la función. Esto se llama Scope ("alcance"). La única forma de acceder a algo dentro de la función es devolverlo.

## Control de flujo y operadores de comparación

En este ejemplo, vamos a utilizar operadores de control de flujo y comparación. El flujo de control ("control flow") es una forma de que nuestra función verifique si algo es `true`, y ya sea ejecutando el código suministrado si es así o avanzando si no lo es. Para esto usaremos la palabra clave `if`:

```javascript
function puedeManejar(edad) {
    if (edad > 18) {
        return true;
    }
    return false;
}
puedeManejar(22); // true
```

Aquí estamos tomando un número (`edad`) y verificando si la declaración es` true` (`22>18`), lo es, por lo que devolveremos` true`, y la función se detendrá. Si no es así, omitirá ese código y la función devolverá `false`.

El símbolo "mayor que" (`>`) que ve en el último ejemplo se llama _Operador de comparación_. Los operadores de comparación evalúan dos elementos y devuelven `verdadero` o` falso`. Estos operadores son: `<`, `<=`, `>`, `> =`, `===`, `! ==`.
