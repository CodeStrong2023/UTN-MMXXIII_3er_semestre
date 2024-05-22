from ManejoArchivos import ManejoArchivos
# Manejo de contexto with: sinstaxis simplificada, abre y cierra el archivo
# with open('prueba.txt', 'r', encoding='utf8') as archivo:
    # print(archivo.read())
# No hace falta ni el try, ni el finally
# en el contexto de with lo que se ejecuta de manera automatica
# Utiliza diferentes métodos: __enter__ (este es el método que abre) y __exit__ (método que cierra)

with ManejoArchivos('prueba.txt') as archivo:
    print(archivo.read())