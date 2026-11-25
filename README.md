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

## Publicar en la EC2
El frontend y el backend corren en la misma EC2. Vite publica el frontend en el puerto 4173 y reenvía `/api` al backend en el 3000, así que la página no necesita saber la IP de la API.

1. En el grupo de seguridad de la EC2, abrir los puertos **4173** (frontend) y **3000** (Swagger) para la IP de quien va a usar la página.
2. Dejar los dos procesos corriendo en segundo plano, para que sigan activos aunque se cierre VS Code:
   ```
   cd ~/NutriVida-backend
   nohup npm start > ~/backend.log 2>&1 &
   cd ~/NutriVida
   nohup npm run publicar > ~/frontend.log 2>&1 &
   ```
3. Revisar que respondan: `curl -s localhost:3000/api/v1/health` y `curl -s -o /dev/null -w "%{http_code}" localhost:4173`.
4. Abrir `http://IP_PUBLICA_EC2:4173` (la página) y `http://IP_PUBLICA_EC2:3000/api/docs` (Swagger) desde otro computador.

La IP pública cambia cada vez que se reinicia el laboratorio de AWS Academy: hay que revisarla en EC2 antes de presentar. Para detener los procesos: `fuser -k 3000/tcp 4173/tcp`.

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