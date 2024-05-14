class persona:
    contador_personas = 0 # Variable de clase

    @classmethod
    def generar_siguiente_valor(cls):
        cls.contador_personas += 1
        return cls.contador_personas

    def __init__(self, nombre, edad):
        persona.contador_personas += 1
        self.id_persona = persona.contador_personas
        self.nombre = nombre
        self.edad = edad

    def __str__(self):
        return f'Persona [{self.id_persona} = {self.nombre}, {self.edad}]'    
    


persona1 = persona('Ariel', 40)
print(persona1)
persona2 = persona('Karla', 30)
print(persona2)
persona3 = persona('Laura', 33)
print(persona3)
persona.generar_siguiente_valor()
persona4 = persona('Juan', 23)
print(persona4)



print( f' Valor contador personas: {persona.contador_personas}') 
