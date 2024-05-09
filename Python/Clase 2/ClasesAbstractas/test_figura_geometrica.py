from Cuadrado import Cuadrado
from Rectangulo import Rectangulo
from FiguraGeometrica import FiguraGeometrica

print('Creacion del objeto clase Cuadrado'.center(50, '_'))
Cuadrado1 = Cuadrado(4, "Rojo")
Cuadrado1.alto = -10 #dando un valor erroneo al alto para que figue el error
# print(Cuadrado1.ancho)
# print(Cuadrado1.alto)
print(f'El area del cuadrado es: {Cuadrado1.Calcular_area()}')

# MRO = Method Resolution Order
# print(Cuadrado.mro())

print(Cuadrado1)

print('Creacion del objeto clase Rectangulo'.center(50, '_'))
rectangulo1 = Rectangulo(4, 8, "Azul")
rectangulo1.ancho = 16 #dando un valor erroneo al ancho para que figue el error
print(f'Calculo de area de rectangulo: {rectangulo1.Calcular_area()}')
print(rectangulo1)
#print(Rectangulo.mro())

# figura1 = FiguraGeometrica() No se puede instancias, es abstracta
print(Cuadrado.mro())