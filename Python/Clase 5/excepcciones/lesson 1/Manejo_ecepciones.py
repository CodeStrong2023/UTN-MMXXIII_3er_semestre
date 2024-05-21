from NumerosIgualesExcepcion import NumerosIgualesExcepcion

resultado = None



try:
    a= int(input('Digite el primer numero: '))
    b= int(input('Digite el segundo numero: '))
    if a==b:
        raise NumerosIgualesExcepcion('Son numeros iguales') 
    resultado = a/b #modificamos
except TypeError as e:
    print(f'TypeError - Ocurrio un error:  {type(e)}')    

except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrio un error:  {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrio un error:  {type(e)}')
else:
    print('No hubo ninguna excepcion')
finally:
    print('Ejecuciopn de este bloque finally')
    
        
print(f'Resultado: {resultado}')
print('seguimos...')