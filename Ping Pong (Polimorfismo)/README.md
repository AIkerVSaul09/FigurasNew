# Breakout Game

Este código es un juego de pelota (o "Pong")[^1] en el que el objetivo es rebotar la pelota con una paleta para evitar que la pelota caiga al suelo. La pelota puede tener tres formas diferentes: una elipse, un triángulo o un cuadrado, y su forma y color cambian aleatoriamente cada vez que se presiona la tecla "Enter". El jugador gana puntos cada vez que la pelota golpea la paleta, y el juego termina cuando la pelota cae al suelo sin ser atrapada por la paleta. El juego se reinicia cuando se presiona la tecla "Espacio".

## Variables Globales y Constantes

En la parte superior del código se definen varias variables globales y constantes que se utilizan en todo el programa. La función `setup()` se llama una vez al inicio del juego y se utiliza para inicializar las variables, el tamaño del lienzo y las configuraciones iniciales.

## Función `draw()`

La función `draw()` se llama continuamente después de `setup()` y se encarga de dibujar los elementos del juego en el lienzo. En esta función se dibuja la pelota, la paleta, el puntaje y se llama a los métodos `update()` y `draw()` de la pelota.

## Clase `Ball`

La clase `Ball` define la pelota del juego. Tiene un constructor que inicializa la forma de la pelota como una elipse. La clase también tiene métodos `draw()` y `update()` que se encargan de dibujar y actualizar la posición de la pelota en el lienzo, respectivamente.

## Clases `Triangulo` y `Cuadrado`

Las clases `Triangulo` y `Cuadrado` extienden la clase `Ball` mediante herencia y tienen su propio método `draw()` para dibujar las figuras correspondientes. Esto muestra el concepto de herencia en el que se puede crear una nueva clase a partir de una clase existente para extender su funcionalidad.

## Polimorfismo

El polimorfismo se muestra en la función `keyPressed()`, que es un controlador de evento que se llama cuando el usuario presiona una tecla. En esta función, se verifica si la tecla presionada es `ENTER` o `SPACE`. Si se presiona `ENTER`, se actualiza la forma de la pelota, el color y la velocidad de la pelota. Si se presiona `SPACE`, se reinicia el juego con la forma de pelota predeterminada y todas las configuraciones se establecen en sus valores iniciales. Esto demuestra que una función puede tener diferentes comportamientos dependiendo del contexto en el que se llama.

En conclusión, el código utiliza métodos y clases para definir los elementos del juego, condiciones y botones para controlar el comportamiento del juego, y herencia y polimorfismo para extender la funcionalidad del juego.

## UML
![image](https://github.com/AIkerVSaul09/FigurasNew/blob/main/Ping%20Pong%20(Polimorfismo)/PingPong.png?raw=true)


# Referencia
[^1]:https://editor.p5js.org/annawasson/sketches/BQFIoo6s2
