## Equipo 6

## Integrantes
- Jairo Cid (jair.cid@duocuc.cl)
- Anita Olivares (anit.olivares@duocuc.cl)
- Isidora Quinteros (isi.quinteros@duocuc.cl)

## Caso
Clínica Nutricional NutriVida (Forma D)

## Descripción del caso
NutriVida es una clínica de nutrición fundada en 2016 en Temuco, con 4 nutricionistas que atienden
cerca de 60 pacientes por semana. Hoy agenda sus citas en papel y por teléfono, y el 20 % de las
citas termina en inasistencia. La aplicación permite a los pacientes agendar, cancelar y reprogramar
citas en línea y revisar su progreso; a los nutricionistas, gestionar su agenda y la ficha de sus
pacientes; y al administrador, gestionar el catálogo, los usuarios y ver reportes.

## Estructura del proyecto
```
src/
├── components/
│   ├── atoms/        Boton, Input, Selector, AreaTexto, Precio, Etiquetas...
│   ├── molecules/    CampoFormulario, TarjetaServicio, BarraFiltros, BotonesAccion...
│   ├── organisms/    BarraNavegacion, FormularioRegistro, CatalogoServicios, TablaServicios...
│   └── templates/    PlantillaPrincipal, PlantillaPanel
├── pages/            Páginas públicas
│   ├── paciente/     Panel del paciente
│   ├── nutricionista/ Panel del nutricionista
│   └── admin/        Panel del administrador
├── context/          Sesión y solicitud en curso (Context)
├── hooks/            useTituloPagina, useSesion, useSolicitud
├── services/         CRUD con persistencia en localStorage
├── data/             Datos iniciales (la "base de datos" simulada)
├── routes/           RutaProtegida (acceso por rol)
└── utils/            Validaciones y funciones puras
```

## Tecnologías
- React + Vite
- React Bootstrap y Bootstrap 5
- React Router
- Vitest + Testing Library (pruebas unitarias)
- Axios (comunicación con la API REST)

## Backend
El frontend consume la API REST de NutriVida (Node.js, Express, PostgreSQL y JWT):
https://github.com/JairoCidM/NutriVida-backend

Ahí están el inicio de sesión, el registro y la gestión de usuarios, y la documentación con Swagger.

## Cómo ejecutar el proyecto
Primero hay que levantar el backend en la misma EC2, en el puerto 3000, siguiendo su README. Luego:
```
npm install
npm run dev
```
Vite reenvía las solicitudes a `/api` hacia `http://localhost:3000`, así que el frontend no necesita la IP de la API.

Para publicarlo en la EC2:
```
npm run build
npm run preview -- --port 4173
```
La página queda en `http://IP_PUBLICA_EC2:4173`, con el puerto 4173 abierto en el grupo de seguridad.

## Pruebas
```
npm run test:run   # ejecuta todas las pruebas una vez
npm run test:cov   # pruebas + reporte de cobertura
```

## Usuarios de prueba (datos ficticios)
| Rol | Correo | Contraseña |
|---|---|---|
| Administrador | admin@nutrivida.cl | admin1234 |
| Nutricionista | carolina.fuentes@nutrivida.cl | nutri1234 |
| Paciente | ana.perez@correo.cl | paciente123 |