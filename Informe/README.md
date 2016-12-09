# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `npm` 
### Fecha : `2016-12-08`
### Estudiante : `Edison Alejandro Chung Liu`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `4`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teórico</a>
  * <a href="#nodejs">Node.js</a>
  * <a href="#npm">npm</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
  * <a href="#usonodejs">Utilizando Node.js</a>
  * <a href="#usonpm">Utilizando npm</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `npm`

<a name="objetivos"></a>
## Objetivos

- Aprender sobre Node.js y npm.
- Utilizar Node.js para programar en JavaScript.
- Utilizar npm para crear un paquete de código JavaScript.
- Publicar el paquete de ejemplo en el registro npm.

<a name="marco-teorico"></a>
## Marco Teorico
<a name="nodejs"></a>
### Node.js

<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width=400>
</p>

Node.js® es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Node.js usa un modelo de operaciones E/S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente. El ecosistema de paquetes de Node.js, npm, es el ecosistema mas grande de librerías de código abierto en el mundo.

(Fuente: [node.js](https://nodejs.org/es/))

<a href="#cabecera">A la cabecera</a>

<a name="npm"></a>
### npm

<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" width=400>
</p>

npm es muchas cosas.
- npm es el gestor de paquetes para Node.js. Fue creado en 2009 como un proyecto open source para ayudar a desarrolladores de JavaScript a compartir fácilmente módulos empaquetados de código.
- El Registro npm es una colección pública de paquetes de código open-source para Node.js, aplicaciones web de front-end, aplicaciones móviles, robots, routers y otras incontables necesidades de la comundad JavaScript.
- npm es el cliente de línea de comandos que permite a los desarrolladores instalar y publicar dichos paquetes.
- npm, Inc, es la empresa que aloja y mantiene todo lo anterior.

(Fuente: [www.npmjs.com](https://www.npmjs.com/about))

<a href="#cabecera">A la cabecera</a>

---

<a name="desarrollo"></a>
## Desarrollo del informe

<a name="usonodejs"></a>
### Uso de Node.js

Se puede descargar Node.js desde la página oficial: [node.js](https://nodejs.org/es/)

En este caso se utiliza la versión v6.9.2 LTS que es la recomendada.

Una vez instalado Node.js, se puede utilizar a través de la línea de comandos de Windows, cmd, mediante el comando `node`. A partir de este punto se puede programar en JavaScript dentro de la línea de comandos.

<p align="center">
<img src="https://github.com/chung-edison/Tec_Web_Js_2016_B/blob/7-Node/Informe/Capturas/node1.jpg?raw=true">
</p>

Para salir de node, se presiona `ctrl + c` dos veces.

La otra manera de utilizar Node.js es creando un archivo con la extensión `.js`. Por ejemplo, para calcular la suma de dos números:

```javascript
var numero1 = 1,
    numero2 = 2;

console.log(numero1 + numero2);
```
El código anterior se guarda en un archivo `app.js`, que puede ser ejecutado abriendo la línea de comandos en la carpeta respectiva y utilizando el comando `node app.js`.

<p align="center">
<img src="https://github.com/chung-edison/Tec_Web_Js_2016_B/blob/7-Node/Informe/Capturas/node2.jpg?raw=true">
</p>

<a href="#cabecera">A la cabecera</a>

<a name="usonpm"></a>
### Uso de npm

Para poder publicar un paquete en el registro npm, es necesario poseer una cuenta en el sitio web oficial de [npmjs.com](https://www.npmjs.com/)

Para este ejemplo, se modifica el archivo creado anteriormente, agregándole un module.exports y creando la función imprimirSuma1y2():

```javascript
module.exports = {
    imprimirSuma1y2: imprimirSuma1y2,
}

function imprimirSuma1y2(){

var numero1 = 1,
    numero2 = 2;

console.log(numero1 + numero2);
}
```

En la línea de comandos dentro de la carpeta contenedora de `app.js`, se ejecuta el comando `npm init` y se llenan los campos respectivos para generar el archivo `package.json`. El archivo "main", que en este caso es `app.js` se define en `entry point`.

<p align="center">
<img src="https://github.com/chung-edison/Tec_Web_Js_2016_B/blob/7-Node/Informe/Capturas/npm1.jpg?raw=true">
</p>

Se inicia sesión en la cuenta creada anteriormente mediante el comando `npm login`, y se publica el paquete mediante le comando `npm publish`.

<p align="center">
<img src="https://github.com/chung-edison/Tec_Web_Js_2016_B/blob/7-Node/Informe/Capturas/npm2.jpg?raw=true">
</p>

Se puede ver el paquete publicado en el perfil correspondiente a la cuanta de npm.

<p align="center">
<img src="https://github.com/chung-edison/Tec_Web_Js_2016_B/blob/7-Node/Informe/Capturas/npm3.jpg?raw=true">
</p>

Para utilizar el paquete, primero hay que instalarlo mediante el comando `npm i nombrepaquete`. Si se requiere una instalación global, se añade el parámetro `-g`, caso contrario se instalará localmente en la carpeta seleccionada.

Para probar el paquete, se crea un nuevo archivo `app.js`:


```
var calculadora = require("tecnologiaswebcedison");

console.log(calculadora.imprimirSuma1y2());
```

Como requiere el paquete subido anteriormente, se instala con el comando `npm i tecnologiaswebcedison`, y se crea una nueva carpeta `node_modules` que contiene el paquete requerido:

<p align="center">
<img src="https://github.com/chung-edison/Tec_Web_Js_2016_B/blob/7-Node/Informe/Capturas/npm4.jpg?raw=true">
</p>

Al ejecutar `app.js` se obtiene el siguiente resultado y se comprueba que efectivamente funciona el paquete:

<p align="center">
<img src="https://github.com/chung-edison/Tec_Web_Js_2016_B/blob/7-Node/Informe/Capturas/npm5.jpg?raw=true">
</p>

Finalmente, para eliminar el paquete, se ejecuta el comando `npm uninstall nombrepaquete`.

<a href="#cabecera">A la cabecera</a>

<a name="conrec"></a>

## Conclusiones y Recomendaciones

- Node.js es fácil de usar para programar en JavaScript.
- npm permite publicar y utilizar paquetes creados en JavaScript, para brindar nuevas funcionalidades según sea necesario.
- Los comandos respectivos son simples y prácticos.

<a href="#cabecera">A la cabecera</a>


Author: [Edison Chung](https://github.com/chung-edison)