## Floweather app by Francisco Veiras

## Importante!!!

- Para correr el proyecto en un entorno de desarrollo local:

Es importante cambiar las rutas https://floweather.vercel.app/api/places por http://localhost:3000/api/places

Las respectivas busquedas se encuentran en la ruta ./pages/index.js y ./pages/country/location.js

Luego: 

```bash
npm run dev
```

## Tecnologías aplicadas: 

Se procedió poner cada pais en una ruta propia para mantener la locación cuando se envíe mediante enlace.

NextJs: Debido a la rapidez del mismo en Data Fetching, mejoras en SEO, Fast refresh y Dynamic Routes.

ChakraUi: Ya que los estilos no se toman en cuenta para el challenge decidí ir por esta librería que facilita el escribir css. 
