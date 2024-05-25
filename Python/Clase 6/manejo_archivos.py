# Declaramos una variable
try:
    archivo = open('prueba.txt', 'w', encoding='UTF8')  # La w es de write que significa escribir.
    archivo.write('Programamos con diferentes tipos de archivos, ahora en txt.\n')
    archivo.write('Los acentos son importantes para las palabras\n')
    archivo.write('como por ejemplo: acción, ejecución y producción\n')
    archivo.write('las letras son: r (read), a (append), w (write), x (crea un archivo)\n')
    archivo.write('t (para texto o text), b (archivos binarios), w+ (lee y escribe), r+(escribe y lee)\n')
    archivo.write('Saludos al profesor\n')
    archivo.write('Con esto terminamos.')
except Exception as e:
    print(e)
finally:
    archivo.close()  # Con esto se debe cerrar el archivo
