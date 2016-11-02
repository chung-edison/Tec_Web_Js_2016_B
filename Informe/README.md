# Introducción a la Web

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="300" height="200">
</p>

### Tema : `CSS` 
### Fecha : `2016-11-01`
### Estudiante : `Edison Alejandro Chung Liu`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `2`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teórico</a>
  * <a href="#css">CSS</a>
  * <a href="#bootstrap">Bootstrap</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
  * <a href="#tag">Estilos CSS para tags</a>
  * <a href="#clase">Estilos CSS por clase o ID</a>
  * <a href="#hoja">Hoja de estilos</a>
  * <a href="#boot">Bootstrap</a>
  * <a href="#grids">Grids</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `CSS`

<a name="objetivos"></a>
## Objetivos

- Aprender el uso de estilos CSS.
- Aprender el uso de clases e IDs de CSS.
- Conocer frameworks para CSS tales como Bootstrap.
- Aprender el uso de grids en HTML.

<a name="marco-teorico"></a>
## Marco Teorico
<a name="css"></a>
### CSS

Hojas de Estilo en Cascada (Cascading Style Sheets), es un mecanismo simple que describe cómo se va a mostrar un documento en la pantalla, o cómo se va a imprimir, o incluso cómo va a ser pronunciada la información presente en ese documento a través de un dispositivo de lectura. Esta forma de descripción de estilos ofrece a los desarrolladores el control total sobre estilo y formato de sus documentos.

CSS se utiliza para dar estilo a documentos HTML y XML, separando el contenido de la presentación. Los Estilos definen la forma de mostrar los elementos HTML y XML. CSS permite a los desarrolladores Web controlar el estilo y el formato de múltiples páginas Web al mismo tiempo. Cualquier cambio en el estilo marcado para un elemento en la CSS afectará a todas las páginas vinculadas a esa CSS en las que aparezca ese elemento.

(Fuente: [Guía breve de CSS](http://www.w3c.es/Divulgacion/GuiasBreves/HojasEstilo))

<a href="#cabecera">A la cabecera</a>

<a name="bootstrap"></a>

### Bootstrap

<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Boostrap_logo.svg" height="200">
</p>

Bootstrap es un framework libre y de código abierto para el diseño de sitios web y aplicaciones web. Contiene plantillas de diseño basadas en HTML y CSS para tipografía, formas, botones, navegación y otros componentes de interfaz, así como extensiones opcionales de JavaScript. A diferencia de otros frameworks web, solo se dedica al desarrollo de la interfaz.

(Fuente: <a href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)">Wikipedia</a>)

<a href="#cabecera">A la cabecera</a>

---

<a name="desarrollo"></a>
## Desarrollo del informe

<a name="tag"></a>
### Estilos CSS para tags

Para dar el mismo estilo a todos los tags del mismo tipo, CSS permite definir grupos de propiedades en el `<head>` con el nombre del tag, de la siguiente manera:

```
nombreTag {
    Propiedad1:valorPropiedad1;
    Propiedad2:valorPropiedad2;
    ...
}
```

Por ejemplo, para dar un color de fondo a toda la página, otro color de fondo a `<body>`, y el mismo color a todas las cabeceras del tipo `<h1>`:

```
html{
    background-color: #a38d3f;
}
body{
    background-color: #a2b6d5;
}
h1{
    background-color: #c3a224;
}
```

<p align="center">
<img src="https://github.com/chung-edison/Tec_Web_Js_2016_B/blob/2-CSS/Informe/Capturas/tags.jpg?raw=true">
</p>

<a href="#cabecera">A la cabecera</a>

<a name="clase"></a>
### Estilos CSS por clase o ID

Para dar estilos a ciertos tags, se pueden usar clases:

```
.nombreClase{
    propiedades...
}
```

También se pueden usar IDs:

```
#id{
    propiedades...
}
```

Por ejemplo, se declaran las clases y los IDs:

```
/*POR CLASE*/
.nombreClaseRojo{
    background-color: red;
}
.nombreClaseAzul{
    background-color: blue;
}
.nombreClaseAmarillo{
    background-color: yellow;
}
/*POR ID*/
#parrafoverde{
    background-color: green;
}
```

Y se los aplican a los tags de la siguiente manera:

```
<h1>Hola</h1>
<p class="nombreClaseRojo">Parrafo Rojo</p>
<h1 class="nombreClaseAmarillo">Amigos</h1>
<p class="nombreClaseAzul">Parrafo Azul</p>
<h1>Politecnicos</h1>
<p id="parrafoverde" class="nombreClaseAmarillo">Parrafo Amarillo</p>
```

<p align="center">
<img src="https://github.com/chung-edison/Tec_Web_Js_2016_B/blob/2-CSS/Informe/Capturas/claseid.jpg?raw=true">
</p>

En la imagen anterior, se puede observar en el inspector que `Parrafo amarillo` es en realidad de color verde, aunque se le asignó la clase `nombreClaseAmarillo`. El ID `#parrafoverde` toma prioridad sobre la clase debido a que se lo definió a continuación de la primera, y el inspector muestra que las propiedades de `<p>` y de `nombreClaseAmarillo` han sido tachadas, es decir, no se aplican a este párrafo. Las últimas clases o tags declaradas toman prioridad sobra las primeras.

<a href="#cabecera">A la cabecera</a>

<a name="hoja"></a>
### Hoja de estilos

Se pueden separar las declaraciones de los estilos CSS en un archivo `*.css` separado de los archivos `*.html`.
Por ejemplo, en este caso se usa el archivo `estilos.css`. Dentro de esta `hoja de estilos` se colocan tan solo las declaraciones de estilos CSS, sin ningún tag: 

```
html{
    background-color: #a38d3f;
}
body{
    background-color: #a2b6d5;
}
h1{
    background-color: #c3a224;
}
p{
    background-color: darkkhaki;
}
cualquiera{
    background-color: cornsilk;
}
.nombreClaseRojo{
    background-color: red;
}
.nombreClaseAzul{
    background-color: blue;
}
.nombreClaseAmarillo{
    background-color: yellow;
}
#parrafoverde{
    background-color: green;
}
```
        
Y para poder usar estos estilos, en la cabecera `<head>` de los archivos HTML se añade lo siguiente:

*  Si la hoja de estilos está en la misma carpeta:

```
<link rel="stylesheet" href="estilos.css">
```

*  Si no está en la misma carpeta, se usa la ubicación relativa a la carpeta principal.

```
<link rel="stylesheet" href="Estilos1/Estilos2/estilos.css">
```

De este modo se pueden cambiar los estilos de forma global sin alterar el contenido de los archivos HTML.

Las prioridades se aplican de la misma manera que con las clases e IDs: si se referencian dos hojas de estilos y ambas modifican los mismos elementos, la última que se referenció es la que tendrá efecto.

<a href="#cabecera">A la cabecera</a>

<a name="boot"></a>
### Bootstrap

Para utilizar el framework CSS de Bootstrap se debe referenciar el CDN (Content Delivery Network) correspondiente, que se puede conseguir en `https://www.bootstrapcdn.com/`.

<p align="center">
<img src="https://github.com/chung-edison/Tec_Web_Js_2016_B/blob/2-CSS/Informe/Capturas/cdn.jpg?raw=true">
</p>

Dentro del `<head>` del archivo HTML se copia el CSS completo para HTML: 

```
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```

Esto permite utilizar, además de los estilos CSS, clases `<div>` definidas por el framework. Por ejemplo, `container` y `row`, o contenedor y fila respectivamente:

```
<!--    .container -->
    <div class="container" style="background-color:yellow">
      <!--    .row*3>h1 -->
        <div class="row" style="background-color:green">
            <h1>Fila1</h1>
        </div>
        <div class="row" style="background-color:blue">
            <h1>Fila2</h1>
        </div>
        <div class="row" style="background-color:red">
            <h1>Fila3</h1>
        </div>
        <h1>Hola estoy dentro del div</h1>
    </div>
```

<p align="center">
<img src="https://github.com/chung-edison/Tec_Web_Js_2016_B/blob/2-CSS/Informe/Capturas/div.jpg?raw=true">
</p>

Para tener compatibilidad con dispositivos móviles o pantallas de distintas resoluciones, solo es necesario agregar al `<head>` lo siguiente: 

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

<a href="#cabecera">A la cabecera</a>

<a name="grids"></a>
### Grids

Un grid necesita estar dentro de un contenedor `container`, y está formado por filas `row` y columnas. La anchura de una columna está definida por cuántas unidades de columna ocupan. En total, un grid tiene 12 unidades de columnas, es decir, puede tener como máximo 12 columnas de 1 y como mínimo 1 columna de 12. Puede haber combinaciones de columnas de distinta anchura.

```
GRID PARA COLUMNAS

1 1 1 1 1 1 1 1 1 1 1 1 = 12
        
2   2   2   2   2   2   = 12
        
3     3     3     3     = 12
        
3     2   3     1  3    = 12
```

Existen 4 tipos de columnas: `md`, `sm`, `lg` y `xs`. Para compatibilidad con distintas resoluciones:
*  `md` se reduce en 990px
*  `sm` se reduce en 768px
*  `lg` se reduce en 1200px
*  `xs` no se reduce

Para definir una columna en un div, el nombre de la clase corresponde a `col-tipo-anchura`, por ejemplo `col-md-4`.

```
<div class="container" style="background-color:yellow">
        <div class="row" style="background-color:green">       
            <h1>Fila1</h1>
            <div class="col-md-4">
                <h2>Columna md 4 - 1</h2>
            </div>
            <div class="col-md-4">
                <h2>Columna md 4 - 2</h2>
            </div>
            <div class="col-md-4">
                <h2>Columna md 4 - 3</h2>
            </div>              
        </div>
        
        <div class="row" style="background-color:blue">
                <h1>Fila2</h1>
            <div class="col-sm-3">
                <h3>CSM3 - 1</h3>
            </div>
            <div class="col-sm-3">
                <h3>CSM3 - 2</h3>
            </div>
            <div class="col-sm-3">
                <h3>CSM3 - 3</h3>
            </div>
            <div class="col-sm-3">
                <h3>CSM3 - 4</h3>
            </div>
        </div>
        
        <div class="row" style="background-color:red">        
            <h1>Fila3</h1>
            <div class="col-lg-6">
                <h3>CLG6 - 1</h3>
            </div>
            <div class="col-lg-6">
                <h3>CLG6 - 2</h3>
            </div>
        </div>
        
        <div class="row">
            <div class="col-xs-2">
                <h2>CXS2 - 1</h2>
            </div>
            <div class="col-xs-5">
                <h2>CXS5 - 2</h2>
            </div>
            <div class="col-xs-5">
                <h2>CXS5 - 3</h2>
            </div>
        </div>
```

<p align="center">
<img src="https://github.com/chung-edison/Tec_Web_Js_2016_B/blob/2-CSS/Informe/Capturas/grid.jpg?raw=true">
</p>

<a href="#cabecera">A la cabecera</a>

<a name="conrec"></a>

## Conclusiones y Recomendaciones

- CSS es una forma fácil de dar estilos rápidos a todo un archivo HTML, ya que no es necesario agregar las propiedades a cada tag uno por uno.
- El uso de una hoja de estilos aparte facilita la modificación de los estilos sin alterar el contenido de los archivos HTML.
- El framework CSS de Bootstrap provee una gran cantidad de elementos, mediante clases para div.
- Los grids pueden usarse para dar cierta organización a los elementos de una página web.

<a href="#cabecera">A la cabecera</a>


Author: [Edison Chung](https://github.com/chung-edison)