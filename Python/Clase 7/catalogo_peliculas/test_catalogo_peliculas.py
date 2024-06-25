from dominio.Pelicula import Pelicula
from servicio.catalogo_peliculas import CatalogoPeliculas as cp

opcion = None
while opcion != 4:
    try:
        print('Opciones:')
        print('1. Agregar película')
        print('2. Listar películas')
        print('3. Eliminar catálogo de películas')
        print('4. Salir')
        opcion = int(input('Digite una opción de menu (1-4): '))
        if opcion == 1:
            nombre_pelicula = input('Proporciona el nombre de la película: ')
            cp.agregar_pelicula(nombre_pelicula)
        elif opcion == 2:
            cp.listar_peliculas()
        elif opcion == 3:
            cp.eliminar()
    except Exception as e:
        print(f'Ocurrió un error: {e}')
        opcion = None 