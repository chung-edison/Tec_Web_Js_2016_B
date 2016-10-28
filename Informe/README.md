# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `Introducción a la Web` 
### Fecha : `2016-10-27`
### Estudiante : `Edison Alejandro Chung Liu`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `1`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teórico</a>
  * <a href="#www">World Wide Web</a>
  * <a href="#html">HTML</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
  * <a href="#pagweb">Página web con HTML</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Introduccion a la Web`

<a name="objetivos"></a>
## Objetivos

- Desarrollar el conocimiento Web
- Conocer herramientas de desarrolladores web como: postman, inspector web
- Aprender el uso de lenguaje HTML CSS
- Aprender el uso de tags HTML

<a name="marco-teorico"></a>
## Marco Teorico
<a name="www"></a>
### World Wide Web

En informática, la World Wide Web (WWW) o red informática mundial1 es un sistema de distribución de documentos de hipertexto o hipermedios interconectados y accesibles vía Internet. Con un navegador web, un usuario visualiza sitios web compuestos de páginas web que pueden contener texto, imágenes, vídeos u otros contenidos multimedia, y navega a través de esas páginas usando hiperenlaces. (Fuente: [Wikipedia](https://es.wikipedia.org/wiki/World_Wide_Web))

<a href="#cabecera">A la cabecera</a>

<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/WWW_logo_by_Robert_Cailliau.svg/240px-WWW_logo_by_Robert_Cailliau.svg.png" width="300" height="200">
</p>

---

<a name="html"></a>

### HTML

HTML, sigla en inglés de HyperText Markup Language (lenguaje de marcas de hipertexto), hace referencia al lenguaje de marcado para la elaboración de páginas web. Es un estándar que sirve de referencia del software que conecta con la elaboración de páginas web en sus diferentes versiones, define una estructura básica y un código (denominado código HTML) para la definición de contenido de una página web, como texto, imágenes, videos, juegos, entre otros. 

El HTML se escribe en forma de «etiquetas», rodeadas por corchetes angulares (<,>,/). El HTML también puede describir, hasta un cierto punto, la apariencia de un documento, y puede incluir o hacer referencia a un tipo de programa llamado script, el cual puede afectar el comportamiento de navegadores web y otros procesadores de HTML.(Fuente: <a href="https://es.wikipedia.org/wiki/HTML">Wikipedia</a>)

<a href="#cabecera">A la cabecera</a>

---

<a name="desarrollo"></a>
## Desarrollo del informe

<a name="pagweb"></a>
### Página web con HTML y CSS

Abrimos la carpeta HTML como un proyecto de Brackets y creamos un nuevo archivo `Index.html`. Escribimos `html:5` y presionamos tab para crear automáticamente el formato básico de HTML.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

Dentro del tag `<title></title>` va el título de la página web, en este caso `Aprendiendo HTML`.
Dentro del tag `<body></body>` va el contenido de la página web. Para ello usamos cabeceras `<h1>` (la más grande) a `<h6>` (la más pequeña) y párrafos `<p>`.

```
<h1>Cabecera 1</h1>    
<h2>Cabecera 2</h2>
<h3>Cabecera 3</h3>
...

<p>Párrafo 1</p>
<p>Párrafo 2</p>
<p>Párrafo 3</p>
...
```

Para añadir una imagen desde otro sitio web se usa el tag `<img src="link de la imagen" alt="texto alternativo">`.

Los estilos CSS se usan para dar ciertas propiedades al contenido, como colores, bordes, entre otros.
Para añadir una propiedad, se introduce `style` en el tag correspondiente, de la siguiente forma: `<body style="propiedadCSS: valorDeLaPropiedad">`.
Por ejemplo para dar un color de fondo a toda la página se puede usar `<body style="background-color: color">` donde `color` puede ser el nombre del color o el código hexadecimal correspondiente. Esto se puede hacer también en otros tags.

Para crear listas se utilizan los tags `<ul></ul>` para una lista desordenada y `<ol></ol>` para una lista ordenada. Los elementos de la lista se añaden con el tag `<li></li>`.

```
<!-- LISTAS NO ORDENADAS unordered list-->
    <h3>Lista no ordenada</h3>
    <ul>
        <!-- list item -->
        <li>Saint Seiya</li>
        <li>Hyoga</li>
        <li>Shiryu</li>
    </ul>
    
    <!-- USANDO EMMET ul>li*3-->
    <ul>
        <li>Seiya</li>
        <li>Hyoga</li>
        <li>Shiryu</li>
    </ul>
    <h3>Lista ordenada</h3>
    <ol>
        <li>Uno</li>
        <li>Dos</li>
        <li>Tres</li>
        <li>Cuatro</li>
    </ol>
```

Finalmente, para agregar links, se usa el tag `<a href="url">texto del link<a>`. se puede añadir `target="_blank"` para que el link se abra en una nueva pestaña del navegador en lugar de sobre la página web que creamos. También se puede usar una imagen en lugar del texto del link, simplemente poniendo el tag `<img>` dentro del tag `<a>`. Ejemplo: 

```
<a href="https://es.wikipedia.org/wiki/Saint_Seiya" target="_blank"><img src="http://vignette2.wikia.nocookie.net/wikiseriesjaponesas/images/f/f8/Saint_seiya2.jpg/revision/latest?cb=20160724220237&path-prefix=es" alt="Caballeros del zodiaco"></a>
```
Para poder visualizar la página web se puede abrir el archivo Index.html en cualquier navegador, o iniciar un servidor web en la carpeta que lo contiene, en este caso HTML, y conectándose a `localhost:8080` desde el navegador.
Poniendo todo lo anterior en práctica, se creó una simple página web ([Código fuente en GitHub](https://github.com/chung-edison/Tec_Web_Js_2016_B/blob/1-HTML/HTML/Index.html)):

<p align="center">
<img src="https://github.com/chung-edison/Tec_Web_Js_2016_B/blob/1-HTML/Informe/Capturas/pagina.jpg?raw=true">
</p>

<a href="#cabecera">A la cabecera</a>

## Conclusiones y Recomendaciones

- 

<a href="#cabecera">A la cabecera</a>


Author: [Edison Chung](https://github.com/chung-edison)