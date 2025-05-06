# 🙌 Tienda CLI - Gestión de Productos desde la Terminal

Este proyecto es una aplicación de línea de comandos (CLI) construida con **Node.js**, que permite gestionar productos de una tienda en línea utilizando la [FakeStore API](https://fakestoreapi.com/). Desarrollado como parte del curso de Node.js en TechLab, este sistema pone a prueba el manejo de APIs, estructuras, POO y lógica dinámica en un entorno profesional.

##  ✅ Cumple con todos los requisitos de la pre-entrega! 

✅ Se ejecuta desde la terminal con npm run start

✅ Usa process.argv para interpretar comandos

✅ Hace peticiones a la API de FakeStore con fetch

✅ Usa programación orientada a objetos

✅ Tiene módulos organizados (models, services)

---

## 🚀 ¿Qué puedes hacer con este proyecto?

- Consultar todos los productos disponibles.
- Consultar un producto por ID.
- Crear un nuevo producto.
- Eliminar un producto por ID.

Todo desde tu **terminal**, utilizando comandos simples.

---

## 📦 Instalación

1. Clona el repositorio o copia los archivos en un directorio:

```
git clone <url-del-repo>
cd tienda-cli
```

2. Instala dependencias (si fuera necesario en una versión futura):

```
npm install
```

3. Ejecuta comandos con:


```
npm run start <método> <recurso> [parámetros]

```

# Comandos Disponibles
---

✅ Consultar todos los productos

```
npm run start GET products

```

🔍 Consultar un producto específico

```
npm run start GET products/15

```

➕ Crear un nuevo producto

```
npm run start POST products <title> <price> <category>

```
Ejemplo:

```
npm run start POST products "T-Shirt-Rex" 300 remeras

```

❌ Eliminar un producto

```
npm run start DELETE products/7
```

📦 Estructura del Proyecto

```
tienda-cli/
├── models/
│   └── Product.js          # Clase Producto
├── services/
│   └── apiService.js       # Lógica para comunicarse con la API
├── index.js                # Punto de entrada principal
├── package.json            # Configuración del proyecto

```

## Tecnologías Utilizadas

```
Node.js (ESModules)

Programación Orientada a Objetos (POO)

Fetch API (mediante node-fetch o global en nuevas versiones)

FakeStoreAPI

```

📚 Notas

```
Este proyecto usa "type": "module" para habilitar ESModules (import / export).

Asegúrate de tener Node.js versión 18 o superior para usar fetch sin instalar dependencias adicionales.

```

---
---
✨ Autor

Proyecto desarrollado como pre-entrega para el curso de Node.js de TechLab.
#Leonardo Suppa
---

