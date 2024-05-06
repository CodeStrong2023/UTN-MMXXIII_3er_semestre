class Orden:

    contador_Ordenes = 0

    def __init__(self, Computadoras):
        Orden.contador_Ordenes += 1
        self._id_orden = Orden.contador_Ordenes
        self._computadoras = Computadoras

    def Agregar_Computadora(self, Computadoras):
        self._computadoras.append(Computadoras)

    def __str__(self):
        Computadoras_str = ''
        for Computadora in self._computadoras:
            Computadoras_str += Computadora.__str__()
        return f'''
            Orden: {self._id_orden}
            Computadoras: {Computadoras_str}
        '''
