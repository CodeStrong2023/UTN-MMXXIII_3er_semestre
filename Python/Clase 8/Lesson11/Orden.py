from Producto import Producto
class Orden:
    contador_ordenes = 0
    
    def __init__(self, productos):
        Orden.contador_ordenes += 1
        self.__id_orden = Orden.contador_ordenes
        self.__productos = productos
        
    def agregar_producto(self, producto):
        self.__productos.append(producto)
        
    def calcular_total(self):
        total = 0
        for producto in self.__productos:
            total += producto.precio
        return total
    
    def __str__(self):
        productos_str = ''
        for producto in self.__productos:
            productos_str += producto.__str__() + ' | '
        
        return f'Orden: {self.__id_orden}, Productos: {productos_str}'
    
if __name__ == '__main__':
    producto1 = Producto('Camisa', 100.00)
    producto2 = Producto('Pantalon', 150.00)
    productos1 = [producto1, producto2]
    orden1 = Orden(productos1)
    print(orden1)
    orden2 = Orden(productos1)
    print(orden2)
#tarea Modificar la orden 2, ingresando nuevos producots con sus nombres y precuiosa
#Crear una nueva lista de productos y agregarla a la orden 2

    producto3 = Producto('Zapatos', 200.00)
    producto4 = Producto('Corbata', 50.00)
    productos2 = [producto3, producto4]
    orden2.agregar_producto(producto3)
    orden2.agregar_producto(producto4)
    print(orden2)
    