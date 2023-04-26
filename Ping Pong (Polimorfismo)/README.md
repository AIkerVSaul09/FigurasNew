# Breakout Game

Este código es un juego de pelota (o "Pong") en el que el objetivo es rebotar la pelota con una paleta para evitar que la pelota caiga al suelo. La pelota puede tener tres formas diferentes: una elipse, un triángulo o un cuadrado, y su forma y color cambian aleatoriamente cada vez que se presiona la tecla "Enter". El jugador gana puntos cada vez que la pelota golpea la paleta, y el juego termina cuando la pelota cae al suelo sin ser atrapada por la paleta. El juego se reinicia cuando se presiona la tecla "Espacio".

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
![image](https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Diagrama%20sin%20t%C3%ADtulo.drawio#R7Vpdb6M4FP01kXYfWvEVkjxOaLOr3Y4UTSpN%2B%2BjEDlh1MGucJplfvzaY8GGgpC2TPiBVKr6%2BGNv3nHsPDiPb2x3%2FYiAKvlOIyMgy4HFk340sy3QnjvgnLafUMpm5qcFnGCqn3LDCv5AyGsq6xxDFJUdOKeE4Khs3NAzRhpdsgDF6KLttKSk%2FNQI%2B0gyrDSC69SeGPEitU2uS2%2F9G2A%2ByJ5vuLO3ZgcxZrSQOAKSHgsm%2BH9keo5SnV7ujh4jcvGxf0vsWDb3niTEU8i43xK%2F%2FWvPv69ncWP0zZf%2BRR%2Fo8u1GjvAKyVwte4tBf0tBXk%2BanbCfiA94REIrWfEtDvlI9pmgDgv1QXG%2FEVBAThlfEOBab%2BE11cBoJ6ybABD6AE93LCcccbF6y1jygDP8SwwKixhTdjCs8WG7JYyXvFGZDWBmKhc8y2wWzYvoOjiXHBxBzZdhQQkAU4%2FV5GTvAfBzOKed0p5wOAeZoFYGN9DkIiMuJ8F02yS0mxKOEsmSLbM9bLDxP2NWuil1Ax8ZwmWcQCPYgukOcnYSLusE2FXMUcWwFo0OOQjOzBQUE2oYyAoV8%2Fzx0Dg5xofBxAVYsDSs3a0DIJlm%2F5RIZxrW88uVV0reKEIJNfTK2DV0BiOr6jjW2U40N1jnCOs8IQEgyBuvdScSkR8p93SH3eKrpjTeUNa3xB4B4H2ssE4DhCfoZfUEZtEKa0k5H22JRoB9BW95IvliAWFD7IfG5c3LLD4UdaaLi3i1JslSAIUShJA7lgIOUJZISEcUhT7A1nos%2FgTbPuB2PxmJKnmibeVv8SXfGPRqKBQGcIB8JCh6QpOFb7OrEoua0plNLUclyu1HJMpyeqGRrVNKAQHAS8xQIWemp5hwFjDcAsMMSoHnEHyUg7m5MDRW2jgq7BgEErBFZ0hhzTOX4LPWtIOOt4JchjsMAMcz7jHrXDDrtKehOTdDnMeL76I8%2F9SQh%2BiADh2WSXJoccBwRcFrJNNPg8oJOS1H6YgSlw%2FuTjSxsSWkbks2lsJt2g51r9YQ7V8OdCCIZ9N119Z01m5X0nePUpCe3Biem2ZfAm%2BgCL06V2CBSesgb7sUipQ4Omd%2Bno2E6aJQeNEp70MdWt6D3JVFmdRJFypAWhdLQtY8g4GgQHVdJHm7HWjLuq5RkNaqApEeGQejvCR2Ux3WVh2mXlYfbFS3TvkqNqR9DFpLLID76eGkx6jHyVdSHqZ82DvLjE45I2sN%2Bbf1h1h2MDVLiqqmga3XoLxXoB2feHojqAAcpcWUp4TjlH6m%2BgJQYD1Lid%2BcP54tLCf0AdJASnyAl2sN%2BdSmhn2YOUuLKqeDqUsLSD7jujxyFUP8hXhi%2Fye%2BHRGtNqCzlc2FStd500%2BYCy%2Bcn4SnsH6P7ECKoOsSOsdOTbNw67iwzPEvfW8PN2nfHovvdqdhaCq6K9UvRkhjTuSKofblUKduWIeSJj9oCNquPV12AGCKA49fyM%2BsipIZbSrzmUsGeGCWpMLErZ08x3bMNUnflcdYGsioDjauHWOmitYESwJzX%2BIHf7vWjrTbwqBzSDI8j5k8pGExbtZ8TtFgpWkQ7B4dsnAqNKjRysBWBJvNCO866QyoNU1sOsDtiL83QreAbt5xZfhSPTgWPk3fi0Z5VBrJ%2BMx71w7MsVLWApFFSXgqALOQ1K3upybwhBjsawscAh5X3HdPJDIUsKBGUvXSJAhRQn4aA3OfWt4rmWr3YNCdRN6VJhu0bQxBn%2Bp40mjHPuJ2a4wLzzItZ94nscTqSp%2BH8X2FSbMrUmVifQhTHKuP7TJxLiTKuMM6uVoAGoggoglPBTQmh7hOeGK3zcswP%2Bs%2Fa%2Fe3ZpM1fXKQrrNydLZdutzG6MHOIZv5hceqef55t3%2F8P)
