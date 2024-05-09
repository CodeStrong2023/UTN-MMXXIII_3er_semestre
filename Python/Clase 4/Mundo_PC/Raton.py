from Mundo_PC.Dispositivo_Entrada import DispositivoEntrada
class Raton(DispositivoEntrada):

    contador_Ratones = 0

    def __init__(self, marca, tipo_entrada):
        Raton.contador_Ratones += 1
        self._id_raton = Raton.contador_Ratones
        super().__init__(marca, tipo_entrada)

    def __str__(self):
        return f'Id: {self._id_raton}, Marca: {self._marca}, Tipo Entrada: {self._tipo_entrada}'

# Hacemos pruebas

if __name__ == "__main__":
    raton1 = Raton('HP', 'USB')
    print(raton1)
    raton2 = Raton('Acer', 'Bluetooth')
    print(raton2)