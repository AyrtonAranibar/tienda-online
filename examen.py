# Programa 1
def sumaImparesNumero(numero): 
    suma = 0 
    for i in range(numero): 
        if i % 2 != 0: 
            suma += i 
    return suma 

numero = int(input('Ingrese el numero: ')) 

print(sumaImparesNumero(numero)) 

# Programa 2
def es_capicua(numero): 
    str_numero = str(numero) 
    cadena_invertida = "" 
    for letra in str_numero: 
        cadena_invertida = letra + cadena_invertida 
    if (str_numero == cadena_invertida): 
        print("Es capicua") 
    else: 
        print("No es capicua") 

# Numero capicua 
es_capicua(5555) 
# Numero no capicua 
es_capicua(5659) 