# Conexion a MongoDB
Este proyecto lo iniciamos con el proposito de aprender como realizar una conexion a mongo desde express
# Instalacion
1. Debe clonar el repositorio: `https://github.com/JhonnSantiagoBernalJuradoCampus/backend-mongo.git`
2. Debe abrir la terminal de su editor de codigo ejecutar el comando `npm i`
3. Al archivo `.env.example` cambiele el nombre a `.env`
4. Debe cambiar el  `<password>` en el archivo .env a la super contraseña `12345`
5. En la terminal ejecute el comando `npm run dev`.
# Endpoints
El servidor que estara utilizando es: **http://127.2.3.4:5010**
## Alquiler
1. Metodo: **GET**
- Endpoint: `/alquiler`

  Obtener todos los alquileres. **Ejemplo** de datos de salida:
  ```js
  [
    {
      "_id": 1,
      "ID_Alquiler": 1,
      "cliente_id": 1,
      "automovil_id": 1,
      "Fecha_Inicio": "19/08/2023",
      "Fecha_Fin": "21/08/2023",
      "Costo_Total": "600.000",
      "Estado": "Alquilado"
    },
    {
      "_id": 2,
      "ID_Alquiler": 2,
      "cliente_id": 1,
      "automovil_id": 1,
      "Fecha_Inicio": "20/08/2023",
      "Fecha_Fin": "22/08/2023",
      "Costo_Total": "400.000",
      "Estado": "Alquilado"
    },
    {
      "_id": 3,
      "ID_Alquiler": 3,
      "cliente_id": 1,
      "automovil_id": 1,
      "Fecha_Inicio": "21/08/2023",
      "Fecha_Fin": "23/08/2023",
      "Costo_Total": "500.000",
      "Estado": "Alquilado"
    },
    {
      "_id": 4,
      "ID_Alquiler": 4,
      "cliente_id": 1,
      "automovil_id": 1,
      "Fecha_Inicio": "22/08/2023",
      "Fecha_Fin": "24/08/2023",
      "Costo_Total": "800.000",
      "Estado": "Alquilado"
    },
    {
      "_id": 5,
      "ID_Alquiler": 5,
      "cliente_id": 1,
      "automovil_id": 1,
      "Fecha_Inicio": "24/08/2023",
      "Fecha_Fin": "27/08/2023",
      "Costo_Total": "900.000",
      "Estado": "Alquilado"
    }
  ]
  ```
## Automovil
1. Metodo: **GET**
- Endpoint: `/automovil`

  Obtener todos los automoviles. **Ejemplo** de datos de salida:
  ```js
  [
    {
      "_id": 1,
      "ID_Automovil": 1,
      "Marca": "Renault",
      "Modelo": "Renault Sandero",
      "Anio": 2023,
      "Tipo": "Carro",
      "Capacidad": "4 personas",
      "Precio_Diario": "500.000"
    },
    {
      "_id": 2,
      "ID_Automovil": 2,
      "Marca": "Renault",
      "Modelo": "Renault 123",
      "Anio": 2020,
      "Tipo": "Carro",
      "Capacidad": "4 personas",
      "Precio_Diario": "300.000"
    },
    {
      "_id": 3,
      "ID_Automovil": 3,
      "Marca": "Renault",
      "Modelo": "Renault 321",
      "Anio": 2021,
      "Tipo": "Carro",
      "Capacidad": "4 personas",
      "Precio_Diario": "122.000"
    },
    {
      "_id": 4,
      "ID_Automovil": 4,
      "Marca": "Renault",
      "Modelo": "Renault 432",
      "Anio": 2010,
      "Tipo": "Carro",
      "Capacidad": "5 personas",
      "Precio_Diario": "600.000"
    },
    {
      "_id": 5,
      "ID_Automovil": 5,
      "Marca": "Renault",
      "Modelo": "Renault 543",
      "Anio": 2019,
      "Tipo": "Carro",
      "Capacidad": "4 personas",
      "Precio_Diario": "102.000"
    }
  ]
  ```
## Cliente
1. Metodo: **GET**
- Endpoint: `/cliente`

  Obtener todos los clientes. **Ejemplo** de datos de salida:
  ```js
  [
    {
      "_id": 1,
      "ID_Cliente": 1,
      "Nombre": "Jhon Santiago",
      "Apellido": "Bernal Jurado",
      "DNI": 109821901,
      "Direccion": "Cr 6 #90-12",
      "Telefono": 3123860654,
      "Email": "jbernalsantiago@gmail.com"
    },
    {
      "_id": 2,
      "ID_Cliente": 2,
      "Nombre": "Daniel",
      "Apellido": "Hernandez",
      "DNI": 489213981,
      "Direccion": "Cr 4 #20-10",
      "Telefono": 3123342422,
      "Email": "danielhernandez@gmail.com"
    },
    {
      "_id": 3,
      "ID_Cliente": 3,
      "Nombre": "Diego",
      "Apellido": "Quintero",
      "DNI": 109532412,
      "Direccion": "Cr 3 #30-2",
      "Telefono": 3118124324,
      "Email": "diegoquintero@gmail.com"
    },
    {
      "_id": 4,
      "ID_Cliente": 4,
      "Nombre": "Angie",
      "Apellido": "Cala",
      "DNI": 100532853,
      "Direccion": "Cr 1 #50-40",
      "Telefono": 3118128028,
      "Email": "angiecala@gmail.com"
    },
    {
      "_id": 5,
      "ID_Cliente": 5,
      "Nombre": "Angela",
      "Apellido": "Esperanza",
      "DNI": 63542975,
      "Direccion": "Cr 20 #10-10",
      "Telefono": 3166010786,
      "Email": "angelaesperanza@gmail.com"
    }
  ]
  ```