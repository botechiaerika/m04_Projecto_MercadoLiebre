# m04_Projecto_MercadoLiebre - Mercado LIEBRE

**README IN CONSTRUCTION**
Entrega FINAL: 31  enero entrega 2022

## SPRINT 1

SPRINT #01

1) Crear la estructura de un proyecto express y levantar un servidor
2) Copiar las imágenes que recibiste en su carpeta del proyecto “img”

3. Crear un archivo home.html con la estructura html necesaria. El mismo deberá tener las secciones header, main y footer.

HEADER

- Logo
- BARRA BUSQUEDA
- SLOGAN: “Comprá en cuotas y sin tarjeta de crédito”
  -NAVBAR con siguientes LINKS:
  1. Ofertas
  2. Tiendas Oficiales
  3. Vender
  4. Ayuda
  5. Creá tu cuenta
  6. Ingresá
  7. Mis compras

![preview Header 01] (',/README/preview01_Home.png')

1) Crear estructura de un projecto **NODE JS** y use **EXPRESS**
2) Inserir imagens PRE-DEFINIDAS public/img creada

> NOTA: logo cargado en carpeta SVG por prolijidad

3)Crear un archivo public/home.html con la estructura que conste de HEADER MAIN

### OBJETIVO #02: ESTRUCTURA HTML

HEADER

- Logo

● Lugar para poner la barra de búsqueda

● Comprá en cuotas y sin tarjeta de crédito

● Barra de navegación que posea las siguientes opciones (en el orden que decidas)

○ Oferta

○ Tiendas Oficiales

○ Vender

○ Ayuda

○ Creá tu cuenta

○ Ingresá

○ Mis compras

El main deberá tener dos secciones con información de productos:

● Basado en tu última visita

Imagen de producto

Precio producto

Porcenta de descuento (si tiene)

Nombre de producto

Ejemplos:

imagen de MacBook

$230.000

20% off

MacBook Pro 2019

● Sección de Ofertas

Imagen de producto

Precio de producto

Porcentaje de descuento (si tiene)

Nombre de producto

Ejemplos:

imagen de MacBook

$230.000

20% off

MacBook Pro 2019

El footer deberá tener las siguientes secciones:

El footer deberá tener las siguientes secciones:

● Pagá con tarjeta o efectivo

Con Mercado Liebre Cash, tenés cuotas sin interés con tarjeta o efectivo en puntos de pago. ¡Y siempre es seguro!

● Envío gratis desde $ 2.500

Solo por estar registrad@ en Mercado Liebre tenés envíos gratis en miles de productos. Es un beneficio de Mercado Puntos.

● Seguridad, de principio a fin

¿No te gusta? ¡Devolvelo! En Mercado Liebre, no hay nada que no puedas hacer, porque estás siempre protegid@.

● Copyright © 1999-2020 MercadoLiebre S.R.L.

● Envío gratis desde $ 2.500

Solo por estar registrad@ en Mercado Liebre tenés envíos gratis en miles de productos. Es un beneficio de Mercado Puntos.

imagen del Samsung Galaxy

$70.500

10% off

Samsung Galaxy S10

imagen del Samsung Galaxy

$70.500

10% off

Samsung Galaxy S10

● Seguridad, de principio a fin

¿No te gusta? ¡Devolvelo! En Mercado Liebre, no hay nada que no puedas hacer, porque estás siempre protegid@.

● Copyright © 1999-2020 MercadoLiebre S.R.L.

SPRINT#02

Modificar el header, de nuestro HTML, en cuanto a elementos y estética, es decir modificar en HTML y CSS. Para esto tendremos que trabajar cada elemento que contenga el header (navbar, login bar, search bar) para que quede similar a la muestra de ejemplo.

Paleta de colores

Amarillo: #EAC926;
Azul: #03264C;
Celeste: #1259c3;
Gris oscuro: #666;
Gris claro: #ebebeb;
Verde: #39b54a;

Tipografías

- Familia: 'Roboto'

Tamaños Tipográficos

Cuerpos de texto: 12px

Titulares (Visita/Ofertas): 24px

Precios: 18px

Descuentos: 16px

Descripciones: 16px

Para saber como cargarla:

Iconos

Fontawesome

[https://fontawesome.com/icons?d=gallery&m=free](https://fontawesome.com/icons?d=gallery&m=free)

Modificar el pie de pagina (footer) de nuestro sitio web.

Trabajar cada elemento del mismo para mejorarlo en cuanto a estética.

Tener en consideración los estilos anteriormente brindados.

Dentro del mismo deben cumplirse las siguientes consignas:

El contenido de todos los artículos debe estar centrado

Los iconos deben tener un tamaño de 2em y un margen inferior de 10px (este margen genera una separación de 10 pixeles)

## SPRINT #03

Centrar la sección main

La sección main debe ocupar un 90% de la pantalla

El logo de envio, el precio, el porcentaje de descuento y la descripción del articulo deben estar dentro de una “caja” general por cada articulo

La caja general realizada debe tener borde superior de 1 pixel, línea solida y color #ebebeb

La caja general realizada debe tener separado el contenido de sus bordes en 15 pixeles en cada uno de sus lados

Implementar los cortes:

Navegación en tablets (ancho mínimo 361 px)

Navegación en desktop (ancho mínimo 769 px)

En el caso de mobile la descripción no se vera

Para el header, en la versión mobile ocultar el site y login navbar. Y en las otras versiones mostrarlos pero ocultar la imagen del menu hamburguesa.

Para los dipositivos tablets o superiores agregar box-shadow. De la forma:

box-shadow : 0px 0px 10px rgb ( 100 , 100 , 100).



**CODE NOTES**

# FLEXBOX
-------
#### FLEX-WRAP 
 => Mantiene **WIDTH** de elementos dispuestos aunque uno tenga que passar a next row

 ### EJES - HORIZONTAL y VERTICAL

 #### MAIN AXIS
 EJE PRINCIPAL HORIZONTAL **<--->**

 #### CROSS AXIS 
 EJE VERTICAL **||**

## POSICIONAMIENTO FLEX = LIBERTAD DE ORIENTACION DE MOVIMIENTO
#### START and END

##### Main Axis **START**

DISPOSICION DEFAULT
![DEFAULT]('https://www.fullstackstudent.com/static/5e2c20b154b63094d171bedb8860b7fe/0f67e/figure1.png)

MAIN AXIS START - LEFT SIDE START -->
CROSS AXIS UBICADO A PUNTO MEDIO
MAIN AXIS END - RIGHT SIDE START -->
CROSS AXIS UBICADO A PUNTO MEDIO


EJES AXIS ENTENDER


CONFIGURAR CSS CON MAIN AXIS Y FLEXIS AXIS EN OTRAS ORIENTACIONES

FLEX DIRECTION DEFAULT
--123-MAIN DEFAULT ROW---
MAIN AXIS PRINCIPAL
MAIN START S--->
MAIN END + CROSS END --->END


FLEX-DIRECTION: COLUMN 
    **M**
    **A**
    **I**
    **N**
