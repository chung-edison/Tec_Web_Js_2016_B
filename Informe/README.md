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
  * <a href="#api">Controlador, modelo y API</a>
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

Sails crea una nueva carpeta con el nombre del proyecto.

<a href="#cabecera">A la cabecera</a>

<a name="install"></a>
### Controlador, modelo y API

<a href="#cabecera">A la cabecera</a>

<a name="conrec"></a>

## Conclusiones y Recomendaciones

- 
- 

<a href="#cabecera">A la cabecera</a>


Author: [Edison Chung](https://github.com/chung-edison)