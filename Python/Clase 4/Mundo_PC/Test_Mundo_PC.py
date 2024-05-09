from Mundo_PC.Computadora import Computadora
from Mundo_PC.Monitor import Monitor
from Mundo_PC.Orden import Orden
from Mundo_PC.Raton import Raton
from Mundo_PC.Teclado import Teclado

teclado1 = Teclado('HP', 'USB')
monitor1 = Monitor('HP', '15 Pulgadas')
raton1 = Raton('HP', 'USB')
computadora1 = Computadora('HP', monitor1, teclado1, raton1)

teclado2 = Teclado('Acer', 'Bluetooth')
monitor2 = Monitor('Acer', '27 Pulgadas')
raton2 = Raton('Acer', 'Bluetooth')
computadora2 = Computadora('Acer', monitor2, teclado2, raton2)

teclado3 = Teclado('Gamer', 'Bluetooth')
monitor3 = Monitor('Gamer', '32 Pulgadas')
raton3 = Raton('Gamer', 'Bluetooth')
computadora3 = Computadora('HP', monitor3, teclado3, raton3)

teclado4 = Teclado('Apple', 'Bluetooth')
monitor4 = Monitor('Apple', '27 Pulgadas')
raton4 = Raton('Apple', 'Bluetooth')
computadora4 = Computadora('Apple', monitor4, teclado4, raton4)

teclado5 = Teclado('Samsung', 'Bluetooth')
monitor5 = Monitor('Samsung', '27 Pulgadas')
raton5 = Raton('Samsung', 'Bluetooth')
computadora5 = Computadora('Acer', monitor5, teclado5, raton5)

computadora6 = Computadora('Samsung', monitor1, teclado2, raton5)
computadora7 = Computadora('Gamer', monitor2, teclado3, raton4)

computadora1 = [computadora1, computadora2, computadora4, computadora7]
orden1 = Orden(computadora1)
orden1.Agregar_Computadora(computadora3)
print(orden1)

computadora2 = [computadora3, computadora5, computadora6]
orden2 = Orden(computadora2)
orden2.Agregar_Computadora(computadora7)
print(orden2)
