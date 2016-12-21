## Comandos Importantes

### Instalar sailsjs

Sailsjs es un servidor web que se conecta a bases de datos y puede funcionar con aplicaciones en tiempo real, ayudándonos a crear REST APIs.

```
> npm install -g sails
```

### Crear un proyecto en Sailsjs

```
> sails new 'NombreProyecto'
```

### Levantar el servidor

```
> sails lift
```

Sails pide opciones si no están definidas:

1. SAFE MODE no se va a alterar la base de datos.
2. ALTER MODE se va a alterar la base de datos si nosotros hicimos cambios en los modelos por ejemplo.
3. DELETE MODE borra todos los datos de la base y vuelve a crear los modelos.

### Servidor Web de Sailsjs

Se encuentra localizado en la carpeta **assets**.
Acceder mediante URL: `http://localhost:1337/app/index.html`

Si se hacen cambios en los archivos de congif hay que reiniciar el servidor.

## Generar Controladores Sailsjs

Para generar controladores se utiliza el siguiente comando:

```
> sails generate controller 'NombreControlador'
```

## Generar Modelos en Sailsjs

´´´
> sails generate model NombreModelo
´´´

## Generar APIs en Sailsjs

´´´
> sails generate api NombreAPI
´´´

Un Api es la fusión de un **Controlador** y de un **Modelo**.

# API REST

## Modelo Usuario

### Crear Usuarios

URL:

´http://localhost:1337/Usuario´

Metodo HTTP:

´POST´

Datos:


´´´javascript
{
    nombre:'Edison',
    apellido:'Chung',
    correo:'edison.chung@epn.edu.ec'
}
´´´