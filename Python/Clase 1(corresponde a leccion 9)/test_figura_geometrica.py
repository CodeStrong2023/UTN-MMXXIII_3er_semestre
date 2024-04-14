from Cuadrado import Cuadrado
from Rectangulo import Rectangulo

Cuadrado1 = Cuadrado(4, "Rojo")
print(Cuadrado1.ancho)
print(Cuadrado1.alto)
print(f'El area del cuadrado es: {Cuadrado1.Calcular_area()}')


# MRO = Method Resolution Order
print(Cuadrado.mro())

print(Cuadrado1)

rectangulo1 = Rectangulo(4, 8, "Azul")
print(f'Calculo de area de rectangulo: {rectangulo1.Calcular_area()}')
print(rectangulo1)