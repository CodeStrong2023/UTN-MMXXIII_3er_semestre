from Mundo_PC.Monitor import Monitor
from Mundo_PC.Raton import Raton
from Mundo_PC.Teclado import Teclado


class Computadora:

    contador_Computadoras = 0

    def __init__(self, Nombre, Monitor, Teclado, Raton):
        Computadora.contador_Computadoras += 1
        self._id_computadora = Computadora.contador_Computadoras
        self._nombre = Nombre
        self._monitor = Monitor
        self._teclado = Teclado
        self._raton = Raton

    def __str__(self):
        return f'''
            {self._nombre}: {self._id_computadora}
            Monitor: {self._monitor}
            Teclado: {self._teclado}
            Ratón: {self._raton}
        '''

if __name__ == '__main__':
    teclado1 = Teclado('HP', 'USB')
    monitor1 = Monitor('HP', '15 Pulgadas')
    raton1 = Raton('HP', 'USB')
    computadora1 = Computadora ('HP', monitor1, teclado1, raton1)
    print(computadora1)

    teclado2 = Teclado('Acer', 'Bluetooth')
    monitor2 = Monitor('Acer', '27 Pulgadas')
    raton2 = Raton('Acer', 'Bluetooth')
    computadora2 = Computadora ('Acer', monitor2, teclado2, raton2)
    print(computadora2)