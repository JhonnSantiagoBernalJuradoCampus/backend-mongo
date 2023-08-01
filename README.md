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
## Alquileres
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
## Automoviles
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
## Clientes
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
## Empleados
1. Metodo: **GET**
- Endpoint: `/empleado`

  Obtener todos los empleados. **Ejemplo** de datos de salida:
  ```js
  [
    {
      "_id": 1,
      "ID_Empleado": 1,
      "Nombre": "James Ronald",
      "Apellido": "Bernal Bermudez",
      "DNI": 91514559,
      "Direccion": "Cr8 #12-12",
      "Telefono": 3127141832,
      "Cargo": "Jefe de almacen"
    },
    {
      "_id": 2,
      "ID_Empleado": 2,
      "Nombre": "Stiven",
      "Apellido": "Carvajal",
      "DNI": 84392389,
      "Direccion": "Cr4 #20-40",
      "Telefono": 3124234876,
      "Cargo": "Trainer"
    },
    {
      "_id": 3,
      "ID_Empleado": 3,
      "Nombre": "Miguel",
      "Apellido": "Carrillo",
      "DNI": 64432341,
      "Direccion": "Cr2 #54-21",
      "Telefono": 312343245,
      "Cargo": "Coordinador"
    },
    {
      "_id": 4,
      "ID_Empleado": 4,
      "Nombre": "Jolver",
      "Apellido": "Prado",
      "DNI": 53423412,
      "Direccion": "Cr43 #76-98",
      "Telefono": 312334344,
      "Cargo": "CEO"
    },
    {
      "_id": 5,
      "ID_Empleado": 5,
      "Nombre": "Andres",
      "Apellido": "Sepulveda",
      "DNI": 65423442,
      "Direccion": "Cr12 #12-12",
      "Telefono": 312314322,
      "Cargo": "Aseo"
    }
  ]
  ```
## Registro_devoluciones
1. Metodo: **GET**
- Endpoint: `/devolucion`

  Obtener todos los registro_devoluciones. **Ejemplo** de datos de salida:
  ```js
  [
    {
      "_id": 1,
      "ID_Registro": 1,
      "alquiler_id": 1,
      "empleado_id": 1,
      "Fecha_Devolucion": "20/08/2023",
      "Combustible_Devuelto": "5,16",
      "Kilometraje_Devuelto": 4000,
      "Monto_Adicional": "123,12"
    },
    {
      "_id": 2,
      "ID_Registro": 2,
      "alquiler_id": 1,
      "empleado_id": 1,
      "Fecha_Devolucion": "30/08/2023",
      "Combustible_Devuelto": "4,70",
      "Kilometraje_Devuelto": 5000,
      "Monto_Adicional": "120,12"
    },
    {
      "_id": 3,
      "ID_Registro": 3,
      "alquiler_id": 1,
      "empleado_id": 1,
      "Fecha_Devolucion": "28/08/2023",
      "Combustible_Devuelto": "12.21",
      "Kilometraje_Devuelto": 1000,
      "Monto_Adicional": "100.1"
    },
    {
      "_id": 4,
      "ID_Registro": 4,
      "alquiler_id": 1,
      "empleado_id": 1,
      "Fecha_Devolucion": "21/08/2023",
      "Combustible_Devuelto": "6,2",
      "Kilometraje_Devuelto": 500,
      "Monto_Adicional": "210.124"
    },
    {
      "_id": 5,
      "ID_Registro": 5,
      "alquiler_id": 1,
      "empleado_id": 1,
      "Fecha_Devolucion": "26/08/2023",
      "Combustible_Devuelto": "12.21",
      "Kilometraje_Devuelto": 200,
      "Monto_Adicional": "98.21"
    }
  ]
  ```
## Registro_entregas
1. Metodo: **GET**
- Endpoint: `/entrega`

  Obtener todos los registro_entregas. **Ejemplo** de datos de salida:
  ```js
  [
    {
      "_id": 1,
      "ID_Registro": 1,
      "alquiler_id": 1,
      "empleado_id": 1,
      "Fecha_Entrega": "20/08/2023",
      "Combustible_Entregado": "40,12",
      "Kilometraje_Entregado": 200
    },
    {
      "_id": 2,
      "ID_Registro": 2,
      "alquiler_id": 1,
      "empleado_id": 1,
      "Fecha_Entrega": "21/08/2023",
      "Combustible_Entregado": "30,2",
      "Kilometraje_Entregado": 10
    },
    {
      "_id": 3,
      "ID_Registro": 3,
      "alquiler_id": 1,
      "empleado_id": 1,
      "Fecha_Entrega": "26/08/2023",
      "Combustible_Entregado": "12,5",
      "Kilometraje_Entregado": 100
    },
    {
      "_id": 4,
      "ID_Registro": 4,
      "alquiler_id": 1,
      "empleado_id": 1,
      "Fecha_Entrega": "30/08/2023",
      "Combustible_Entregado": "50,31",
      "Kilometraje_Entregado": 400
    },
    {
      "_id": 5,
      "ID_Registro": 5,
      "alquiler_id": 1,
      "empleado_id": 1,
      "Fecha_Entrega": "29/08/2023",
      "Combustible_Entregado": "90,13",
      "Kilometraje_Entregado": 500
    }
  ]
  ```
## Reservas
1. Metodo: **GET**
- Endpoint: `/reserva`

  Obtener todas las reservas. **Ejemplo** de datos de salida:
  ```js
  [
    {
      "_id": 1,
      "ID_Reserva": 1,
      "cliente_id": 1,
      "automovil_id": 1,
      "Fecha_Reserva": "11/08/2023",
      "Fecha_Inicio": "18/08/2023",
      "Fecha_Fin": "20/08/2023",
      "Estado": "Reservado"
    },
    {
      "_id": 2,
      "ID_Reserva": 2,
      "cliente_id": 1,
      "automovil_id": 1,
      "Fecha_Reserva": "13/08/2023",
      "Fecha_Inicio": "19/08/2023",
      "Fecha_Fin": "22/08/2023",
      "Estado": "Reservado"
    },
    {
      "_id": 3,
      "ID_Reserva": 3,
      "cliente_id": 1,
      "automovil_id": 1,
      "Fecha_Reserva": "15/08/2023",
      "Fecha_Inicio": "16/08/2023",
      "Fecha_Fin": "21/08/2023",
      "Estado": "Reservado"
    },
    {
      "_id": 4,
      "ID_Reserva": 4,
      "cliente_id": 1,
      "automovil_id": 1,
      "Fecha_Reserva": "20/08/2023",
      "Fecha_Inicio": "28/08/2023",
      "Fecha_Fin": "30/08/2023",
      "Estado": "Reservado"
    },
    {
      "_id": 5,
      "ID_Reserva": 5,
      "cliente_id": 1,
      "automovil_id": 1,
      "Fecha_Reserva": "12/08/2023",
      "Fecha_Inicio": "15/08/2023",
      "Fecha_Fin": "17/08/2023",
      "Estado": "Reservado"
    }
  ]
  ```
## Sucursal_automoviles
1. Metodo: **GET**
- Endpoint: `/reserva`

  Obtener todas las reservas. **Ejemplo** de datos de salida:
  ```js
  [
    {
      "_id": 1,
      "sucursal_id": 1,
      "automovil_id": 1,
      "Cantidad_Disponible": 5
    },
    {
      "_id": 2,
      "sucursal_id": 2,
      "automovil_id": 3,
      "Cantidad_Disponible": 3
    },
    {
      "_id": 3,
      "sucursal_id": 5,
      "automovil_id": 2,
      "Cantidad_Disponible": 4
    },
    {
      "_id": 4,
      "sucursal_id": 4,
      "automovil_id": 1,
      "Cantidad_Disponible": 4
    },
    {
      "_id": 5,
      "sucursal_id": 4,
      "automovil_id": 5,
      "Cantidad_Disponible": 4
    }
  ]
  ```