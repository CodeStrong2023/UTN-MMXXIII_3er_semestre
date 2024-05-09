class Monitor:

    contador_Monitores = 0

    def __init__(self, marca, tamaño):
        Monitor.contador_Monitores += 1
        self._id_monitor = Monitor.contador_Monitores
        self._marca = marca
        self._tamaño = tamaño

    def __str__(self):
        return f'Id: {self._id_monitor}, Marca: {self._marca}, Tamaño: {self._tamaño}'

if __name__ == '__main__':
    Monitor1 = Monitor('HP', '15 Pulgadas')
    print(Monitor1)
    Monitor2 = Monitor('Acer', '27 Pulgadas')
    print(Monitor2)
