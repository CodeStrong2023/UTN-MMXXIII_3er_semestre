from Gerente import Gerente
from Empleado import Empleado
def imprimir_detalles(objeto):
   # print(objeto)
    print(type(objeto))
    print(objeto.mostrar_detalles())
    if isinstance(objeto, Gerente):
        print(objeto.departamento)
    
    
    
empleado = Empleado("Ariel", 5000)
imprimir_detalles(empleado)

gerente = Gerente("Natalia", 7000, "Sistemas")
imprimir_detalles(gerente) 