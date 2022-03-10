# Walmart challenge backend

Walmart Api nos permite buscar productos por id, brand o description. En caso que la busqueda sea un palindrome retorna el precio con un 50% de descuento. Y solo buscara por brad o descripcion cuando el largo de busqueda se mayor que 3.

Configuraciones de entorno , puerto , base de datos en .env
Actualmente esta configurado para trabajar con mongodb proporcionado por walmart intrucciones para levantar en el repo :
https://github.com/walmartdigital/products-db 


## Comandos

1. Clonar e instalar mongodb en docker : https://github.com/walmartdigital/products-db
   Este comando es para montar mongodb en docker y ademas provisionar con data base.
```
make database-up
```  

2. Bajar Repositorio
```
   git clone https://github.com/sergioarro/base-challenge-api-js.git  
```

3. Instalar 
```
   npm install  
```

4. Levantar en Local
```
   npm run start OR npm run dev (Levanta con nodemon para desarrolladores)
```

5. Levantar en docker 
```
   npm run docker:run  
```

6. Prueba endpoint local por id
```
    curl --request GET --url http://localhost:3030/product/{id}
```
7. Endpoint local por palindrome
```
   curl --request GET --url http://localhost:3030/productdiscount/adsda  
```

## Pruebas 

1. Correr pruebas unitarias
```
   npm run test  
```

2. Pruebas unitarias con covertura
```
  npm run coverage   
```
