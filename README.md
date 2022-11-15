## Tabla de contenido

1. [Instalar y correr la aplicación](#Instalar-y-correr-la-aplicación)
2. [Llamado a la API](#Llamado-a-la-API)
3. [Estilos](#Estilos)
4. [Componentes](#Componentes)

# Instalar y correr la aplicación

#### Clonar repositorio

1. En vas la consola te ubicas en la carpeta que quieres hacer el clon, corriento este comando en la consola `$ git clone url...`.
2. Luego se mueve hacia la carpeta que se acaba de crear `$ cd nameFile `.

#### Instalar dependencias Frontend (React)

1. Una vez estes en la carpeta que se clonó se deben instalar todas las dependencia con el siguiente comando `$ npm install` o según su instalador de dependencias, vale aclara que se uso la versión v14.21.1 de node.js para este proyecto.

2. Finalizada la instalación de todas las dependencias, puede iniciar el proyecto con `$ npm start`. Y en el http://localhost:3000/ la aplicación de React estará funcionando.

# Manejo de estado

Se uso Redux(toolkit) para controlar el estado de manera global
creando el store y un solo slicer llamado **productsSlice** en donde
hoy dos actions que permiten manejar el estado. El estado inicial es un objeto vacio para el `producto` y otro para el añadir al `carrito de compras`.

#### Los reducers de este slice son:

- **setProducts**: Recibe y actualiza el producto que se trae del llamado a la API.Y se le agrega una propieda `amount` inicializada en `'0'` que es la cantidad del producto agregando al carrito por defecto,

- **setCart**: Recibe la variante del producto que se desea añadir al `carrito de compras` y cada vez que el usuario modifica la información seleccionada se actualizará.

# Llamado a la API

Se utilizó `Axios` y en la carpeta `api` se exportó la función `fetchAllProducts()` para ser usada en el componente `Product.jsx` y con el cual se obtiene toda la información de la API para actualizar el storage del estado `products` de redux.

# Estilos

Se hizo uso del preprocesador SASS, para tener centralizado los estilos en una archivo `main.scss` importados y separados según el componente que se quiera modificar.

# Componentes

#### Carousel.jsx :

1. Este componente recibe por props el string de cada imagen(url) en un Array.

2. **loaded:** permite darle un efecto de carga a la imagen que se le agregó transition en el opacity desde el CSS, combinandola con un setTimeOut en cada cambio de imagen.

3. **selectNewImage:** Esta función verifica el next y prev de la imagen para evitar llegar al -1 y en la ultima imagen pasar a la posición 1 nuevamente.

4. **handleClickCurrentImage:** De un click te lleva a la imagen que quiere ver el usuario.

5. **seeCurrentImage:** Retorna un total de spans según la cantidad de imagenes que vienen en el array, para que el usuario visualice cual esta observando en el momento.

#### AmountProductAndTotalPrice.jsx :

1. Este recibe por props, el `price` del producto en string, `product` que es el estado del producto y `setProduct` su actualizador.

2. **onChange:** Se usa método `.slice(0,2)` de javascript para que al actualizar el valor del total de productos que se quiere el usuario, no ponga mas de dos digitos.

3. **onClick:** Aqui verificamos que el usuario no pueda agregar -1 productos al carrito de compras, y le permite sumar y restar la cantidad que quiere solo dando clicks.

#### Modal.jsx :

1. Este recibe por props, title(string), color(string), size(string), amount(string), price(string), nameVariant(string), showModal(contiene un string vacío), setShowModal(actualizador de showModal, si se le pasa 'show' el modal se mostrará).

#### SelectColor.jsx :

1.  Este recibe por props, colors(es un objeto con la infomación del color) y handleOnchangeInputRadioColor(que permite obtener el valor el color que selecciona el usuario).

#### SelectSize.jsx :

1. Este recibe por props, sizes(que es un objeto que contiene la información referente a las tallas) y handleOnchangeInputRadioSize(que permite obtener el valor de la talla que selecciona el usuario).

#### Product.jsx :

1. Este es el componente principal donde se llaman todos los demas.

2. Se hace un dispatch de redux de la función `fetchAllProducts()` para traer la información del producto.

3. La función `handleClick()` es la que permite a través de un dispatch de `setCart()` actualizar la información del `Cart` de redux y mostrarla al usuario.
