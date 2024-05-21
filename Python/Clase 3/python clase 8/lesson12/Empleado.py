class Empleado:
    def __init__(self, nombre, sueldo):
        self.nombre = nombre
        self.sueldo = sueldo

    def __str__(self):
        return f'Empleado: {self.nombre}, salario: {self.sueldo}'

    def __repr__(self):
        return f'Empleado: {self.nombre}, salario: {self.sueldo}'