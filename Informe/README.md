# Sails

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Sails` 
### Fecha : `2017-01-05`
### Estudiante : `Edison Alejandro Chung Liu`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `5`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teórico</a>
  * <a href="#sails">Sails</a>
  * <a href="#assets">Assets</a>
  * <a href="#views">Views</a>
  * <a href="#pipeline">Pipeline</a>
  * <a href="#controller">Controller</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
  * <a href="#install">Instalando Sails</a>
  * <a href="#server">Servidor Web de Sails</a>
  * <a href="#pipe">Pipeline y Layout</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Sails`

<a name="objetivos"></a>
## Objetivos

- Aprender sobre Sails y sus componentes.
- Crear un proyecto Sails y levantar su servidor Web.
- Utilizar los componentes de Sails para modificar el sitio Web.

<a name="marco-teorico"></a>
## Marco Teorico

<a name="sails"></a>
### Sails

<p align="center">
<img src="http://sailsjs.com/images/hero_squid.png">
</p>

Sails es el framework MVC más popular para Node.js, diseñado para emular el patrón MVC familiar de frameworks como Ruby on Rails, pero con soporte para los requisitos de aplicaciones modernas: APIs basados en datos con una arquitectura orientada a servicios.

(Fuente: [Sails](http://sailsjs.com/))

<a href="#cabecera">A la cabecera</a>

<a name="assets"></a>
### Assets

Se refieren a archivos estáticos (js, css, imágenes, etc) en el servidor que se quieren hacer accesibles al mundo exterior. En Sails, estos archivos se colocan en la carpeta `assets/`. 

(Fuente: [Documentación de Sails](http://sailsjs.com/documentation/concepts/assets))

<a href="#cabecera">A la cabecera</a>

<a name="views"></a>
### Views (Vistas)

En Sails, las vistas son plantillas markup que se compilan en el servidor en páginas HTML. En la mayoría de casos, las vistas son usadas como la respuesta a una petición HTTP.

Alternativamente, una vista puede ser compilada directamente en una string HTML para usar en el código de backend. Por ejemplo, para envier emails HTML o construir strings XML para una API de legado.

(Fuente: [Documentación de Sails](http://sailsjs.com/documentation/concepts/views))

<a href="#cabecera">A la cabecera</a>

<a name="pipeline"></a>
### Pipeline

Sails utiliza un archivo `pipeline.js` para determinar el orden en que las hojas de estilo, JavaScript y plantillas del lado del cliente deberían ser compiladas y enlazadas como etiquetas `<string>` o `<link>`.

(Fuente: [Documentación de Sails](http://sailsjs.com/documentation/anatomy/tasks/pipeline.js))

<a href="#cabecera">A la cabecera</a>

<a name="controller"></a>
### Controllers (Controladores)

Los controladores son los objetos principales en una aplicación Sails, que son responsables de responder a peticiones de un navegador web, aplicación móvil o cualquier otro sistema capaz de comunicarse con un servidor. Usualmente actúan como un middleman entre los modelos y las vistas. para muchas aplicaciones, los controladores contienen la mayoría de la lógica del negocio del proyecto.

(Fuente: [Documentación de Sails](http://sailsjs.com/documentation/concepts/controllers))

<a href="#cabecera">A la cabecera</a>

---

<a name="desarrollo"></a>
## Desarrollo del informe

<a name="install"></a>
### Instalando Sails

Para instalar Sails, se necesita el gestor de paquetes npm, por lo que se requiere que Node.js ya esté instalado con anterioridad.

El comando para instalar Sails es:

```
>npm install sails -g
```

El proceso de instalación puede demorar varios minutos.

<a href="#cabecera">A la cabecera</a>

<a name="server"></a>
### Servidor Web de Sails

Para crear un nuevo proyecto con Sails, se debe abrir una consola de comandos en la carpeta en la que queremos crear el proyecto y utilizar el comando: 

```
>sails new NuevoProyecto
```

Sails crea una nueva carpeta con el nombre del proyecto. Los archivos relacionados a la página web se encuentran dentro de la carpeta assets, y los archivos HTMl se encuentran dentro de la carpeta app.

<p align="center">
<img src="https://github.com/chung-edison/Tec_Web_Js_2016_B/blob/11-Sails%232/Informe/Capturas/carpeta.JPG?raw=true">
</p>

Por ejemplo, en la carpeta app se creó un archivo `index.html` al que se le añadió lo siguiente:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hola Mundo</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <h1>Hola Mundo</h1>
    <img src="../images/holamundo.png" alt="Hola Mundo">
    <script src="app.js"></script>
</body>
</html>
```

Y un archivo `app.js` que contiene lo siguiente:

```
alert("No es bueno usar alertas.");
```

En la carpeta styles se creó `estilos.css` que contiene:

```
body {
    background-color: darkblue;
    color: white;
}

a {
    color: white;
}
```

Una vez creados los archivos, se debe levantar el servidor Web, para lo cual se abre una consola de comandos en la carpeta correspondiente al proyecto Sails, y se ejecuta el comando `sails lift`.

<p align="center">
<img src="https://github.com/chung-edison/Tec_Web_Js_2016_B/blob/11-Sails%232/Informe/Capturas/lift1.jpg?raw=true">
</p>

Sails pide escoger una de las siguientes opciones para la base de datos:

1. SAFE MODE no altera la base de datos
2. ALTER MODE altera la base de datos si se hicieron cambios en los modelos
3. DELETE MODE borra toda la base de datos y rehace los modelos

Sails recomienda no escoger las opciones 2 o 3 si se trabaja con datos de producción.

<p align="center">
<img src="https://github.com/chung-edison/Tec_Web_Js_2016_B/blob/11-Sails%232/Informe/Capturas/lift2.jpg?raw=true">
</p>

Una vez levantado el servidor Web, se accede a él a través de localhost con el puerto 1337.

Para visualizar los cambios realizados anteriormente en la carpeta app, se utiliza la url `http://localhost:1337/app/index.html`. En este caso aparecerá la alerta creada en `app.js` y "Hola Mundo" de `index.html` con los estilos definidos en `estilos.css`.

<p align="center">
<img src="https://github.com/chung-edison/Tec_Web_Js_2016_B/blob/11-Sails%232/Informe/Capturas/holamundo.jpg?raw=true">
</p>

Todo lo que se quiera mostrar en la página Web debe estar guardado en la carpeta assets, por ejemplo, para mostrar una imagen `holamundo.png` se la debe guardar en la carpeta `assets/images/` y se puede acceder a ella directamente mediante la url `http://localhost:1337/images/holamundo.png`.

<p align="center">
<img src="https://github.com/chung-edison/Tec_Web_Js_2016_B/blob/11-Sails%232/Informe/Capturas/imagen.JPG?raw=true">
</p>

<a href="#cabecera">A la cabecera</a>

<a name="pipe"></a>
### Pipeline y Layout

Dentro de la carpeta `tasks/`, se encuentra el archivo `pipeline.js`, que contiene todos los archivos que deben ser inyectados a los archivos html antes de presentarlos. Es este archivo se puede definir una hoja de estilos general y/o archivos JavaScript que se ejecutaran en todas las páginas del sitio Web.

Por ejemplo, para utilizar la misma hoja de `estilos.css` en todos los archivos html:

```
// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
//  'styles/**/*.css'
    'styles/**/estilos.css'
];
```

En la carpeta `views/`, se encuentran las plantillas que Sails inyecta en los archivos html. Estas plantillas contienen partes de código html. `layout.ejs` tiene la estructura completa de la página web, pero no incluye contenidos, mientras que `homepage.ejs` contiene tan solo estos últimos.

Por ejemplo, se puede modificar `layout.ejs` para contener un menú que se mostrará en todo el sitio Web:

```
...
<body>
   <h1>Hola</h1>
   <ul>
       <li><a href="/Quito">Quito</a></li>
       <li><a href="/Guayaquil">Guayaquil</a></li>
       <li><a href="/Cuenca">Cuenca</a></li>
       <li><a href="/">Home</a></li>
   </ul>
    <%- body %>
    <h1>Adios</h1>
...
```

Y se puede modificar `homepage.ejs` para que contenga otro estilo:

```
<style>
    .rojo{
        background-color:red;
    }
</style>

<div class="rojo">
    <h1>AQUI EMPIEZA EL HOMEPAGE</h1>

    <p>Ya no somos tan noobs en Sailsjs</p>


    <h1>AQUI FINALIZA EL HOMEPAGE</h1>
</div>
```

El resultado al ingresar a la url `http://localhost:1337/` es el siguiente:

<p align="center">
<img src="https://github.com/chung-edison/Tec_Web_Js_2016_B/blob/11-Sails%232/Informe/Capturas/home.jpg?raw=true">
</p>

<a href="#cabecera">A la cabecera</a>

<a name="conrec"></a>

## Conclusiones y Recomendaciones

- Sails es un framework bastante útil y sencillo a la hora de crear aplicaciones Web.
- La estructura de Sails puede parecer compleja cuando se intenta utilizarlo por primera vez, por lo que es recomendable revisar la documentación sobre los conceptos en su sitio Web oficial antes de empezar.
- Se pueden crear plantillas y utilizarlas a través de todo el sitio Web, en lugar de tener que copiar y modificar cada archivo html para que contengan algunos los mismos elementos.

<a href="#cabecera">A la cabecera</a>


Author: [Edison Chung](https://github.com/chung-edison)