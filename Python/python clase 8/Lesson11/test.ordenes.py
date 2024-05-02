from orden import Orden
from producto import Producto


producto1 = Producto('Camisa', 100.00)
producto2 = Producto('Pantalon', 150.00)
producto3 = Producto('Medias', 45.00)
producto4 = Producto('Campera', 250.00)
producto5 = Producto('Sweter', 95.00)
producto6 = Producto('Blusa', 75.00)



productos1 = [producto1, producto2]
orden1 = Orden(productos1)
orden1.agregar_producto(producto5)
orden1.agregar_producto(producto3)
print(orden1)
print(f'Total de la orden1: {orden1.calcular_total()}')
productos2 = [producto3, producto4]
orden2 = Orden(productos2)
orden1.agregar_producto(producto6)
orden1.agregar_producto(producto2)
print(orden2)
print(f'Total de la orden2: {orden2.calcular_total()}')
