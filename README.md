<H1>🎉 Sorteo de Amigo Secreto</H1>

📌 Descripcion 

Este proyecto permite agregar amigos a una lista, sortearlos y luego mostrar el amigo seleccionado en pantalla.Es un proyecto que nos permite mejorar las habilidades en Java Script junto con el DOM.

🚀 Instalación
No necesita de una instalacion, Solo descarga o copia los archivo, luego abre el archivo index.

📋 Uso

1-Ingresa el nombre de un amigo en el campo de entrada.

2-Haz clic en el botón "Agregar Amigo" para almacenarlo en la lista.

3-Para realizar el sorteo, haz clic en "Sortear Amigo Secreto".

4-El resultado se mostrará en la pantalla.

📂 Estructura del Código
En el codigo Muestra de igual manera lo que hace cada parte para agilizar la lectura del codigo.

📌 Variables

amigos: Un array vacío donde se almacenarán los nombres de los amigos ingresados.

📌 Funciones

agregarAmigo()

-Toma el nombre ingresado por el usuario en el campo de entrada y lo limpia de espacios innecesarios.

-Verifica que el campo no esté vacío; si lo está, muestra una alerta.

-Comprueba si el amigo ya está en la lista para evitar duplicados.

-Si el nombre es válido y no está repetido, lo agrega al array amigos.

-Limpia el campo de entrada para facilitar la inserción de nuevos nombres.

-Llama a actualizarListaAmigos() para reflejar los cambios en la interfaz.

-actualizarListaAmigos()

-Limpia la lista visual de amigos antes de actualizarla.

-Recorre el array amigos y por cada amigo:

-Crea un elemento <li> con su nombre.

-Lo agrega a la lista en el DOM.

-sortearAmigo()

-Verifica si hay amigos en la lista antes de realizar el sorteo.

-Genera un índice aleatorio dentro del rango del array amigos.

-Obtiene el nombre del amigo correspondiente al índice aleatorio.

-Muestra el nombre sorteado en la interfaz.

-Si la lista está vacía, informa que no hay amigos para sortear.

Asi deberia verse la pagina index: 

![amigui](https://github.com/user-attachments/assets/de249d94-a6ab-49f5-abe1-dd7d568f81c5)

Comprobar con Vercel :
https://challenge-amigo-secreto-one-virid.vercel.app/

