Perfecto, aquí tienes la **teoría completa de Python + APIs + httpbin** lista para tu libro interactivo:

***

## 🐍 Python y APIs: Comunícate con Servicios Web

Python es el lenguaje más popular para trabajar con APIs gracias a su librería `requests`, que hace que enviar peticiones HTTP sea tan fácil como escribir código Python simple.  [youtube](https://www.youtube.com/watch?v=ES82kgVf7-4)

***

## 🖼️ Logo de Python

Python fue creado en 1991 por Guido van Rossum y se ha convertido en el lenguaje más usado para ciencia de datos, automatización, y APIs.

---

## 🌐 ¿Qué es una API?

**API** = Application Programming Interface (Interfaz de Programación de Aplicaciones)

Una API es un **puente** que permite que dos programas se comuniquen entre sí a través de internet.  [tech-insider](https://tech-insider.org/fastapi-tutorial-python-rest-api-13-steps-2026/)

### Componentes de una API REST:

- **Cliente:** Tu código Python (o navegador web)
- **Servidor:** La API que recibe tu petición
- **HTTP:** El protocolo de comunicación (GET, POST, PUT, DELETE)
- **JSON:** El formato de datos que se envía y recibe

---

## 🔄 Ciclo de Petición-Respuesta HTTP

**Flujo:**
1. **Cliente** envía una petición HTTP (GET, POST, etc.)
2. **Servidor** procesa la petición
3. **Servidor** devuelve una respuesta con:
   - **Status code:** 200 (éxito), 404 (no encontrado), 500 (error)
   - **Datos:** Generalmente en formato JSON  [owais](https://www.owais.io/blog/2025-10-05_python-requests-library-http-apis-beginners)

---

## 📦 La Librería `requests` de Python

### Instalación:

```bash
pip install requests
```

`requests` es la librería estándar de Python para hacer peticiones HTTP. Es tan fácil de usar que "los humanos lo agradecen".  [stackoverflow](https://stackoverflow.com/questions/9733638/how-to-post-json-data-with-python-requests)

***

## 🎥 Video: Python Requests Library Tutorial

**Duración:** 15 min  
**Enlace:** [Python Requests Library Explained](https://www.youtube.com/watch?v=ES82kgVf7-4)  [youtube](https://www.youtube.com/watch?v=ES82kgVf7-4)

**Temario del video:**
- Instalación de `requests`
- Peticiones GET y POST
- Manejo de respuestas JSON
- Headers y parámetros
- Error handling con try-except  [youtube](https://www.youtube.com/watch?v=dmZ5SBIMxlE)

***

## 🎥 Video: Learn Python Requests - APIs para Principiantes

**Duración:** 12 min  
**Enlace:** [Learn Python Requests | Complete Guide to APIs](https://www.youtube.com/watch?v=zlgACKnDzIc)  [youtube](https://www.youtube.com/watch?v=zlgACKnDzIc)

**Qué aprenderás:**
- Cómo instalar y usar `requests`
- Enviar peticiones GET y POST
- Manejar códigos de estado y errores
- Trabajar con datos JSON  [owais](https://www.owais.io/blog/2025-10-05_python-requests-library-http-apis-beginners)

***

## 🌐 httpbin.org: Tu Laboratorio de APIs

**URL:** [https://httpbin.org/](https://httpbin.org/)

httpbin es un **servicio gratuito** creado por Kenneth Reitz (el mismo creador de `requests`) que te permite:
- Enviar peticiones HTTP de prueba
- Ver exactamente qué datos recibió el servidor
- Probar diferentes métodos: GET, POST, PUT, DELETE, PATCH
- Debuggear tu código sin necesidad de un servidor real  [linkedin](https://www.linkedin.com/learning/python-working-with-rest-and-web-data/using-httpbin-org)

### ¿Cómo funciona?

httpbin **devuelve (echo)** todo lo que le envías. Si mandas un POST con JSON, te responde con ese mismo JSON. Perfecto para probar.  [kennethreitz](https://kennethreitz.org/software/websites/httpbin)

***

## 💻 Ejemplo: POST con JSON a httpbin

### Código Básico:

```python
import requests

# Enviar datos JSON a httpbin
respuesta = requests.post(
    "https://httpbin.org/post",
    json={"led": "on", "mensaje": "hola"}
)

# Ver la respuesta del servidor
print("Status:", respuesta.status_code)
print("JSON recibido:", respuesta.json())
```

**Resultado:**
```
Status: 200
JSON recibido: {
  "json": {
    "led": "on",
    "mensaje": "hola"
  }
}
```



***

## 📊 Métodos HTTP Principales

| Método | Para qué sirve | Ejemplo |
|--------|----------------|---------|
| **GET** | Obtener datos de un servidor | Leer perfil de usuario |
| **POST** | Crear/enviar datos nuevos | Encender LED, registrar usuario |
| **PUT** | Actualizar datos existentes | Cambiar email de usuario |
| **DELETE** | Borrar datos | Eliminar cuenta |

 [codingnomads](https://codingnomads.com/python-requests-library-api-integration-tutorial)

***

## 🔧 Parámetros de `requests.post()`

```python
import requests

# Opción 1: Usar json= (recomendado para JSON)
requests.post("https://httpbin.org/post", json={"clave": "valor"})

# Opción 2: Usar data= (para texto o form-data)
requests.post("https://httpbin.org/post", data="texto plano")

# Opción 3: Agregar headers personalizados
headers = {"Content-Type": "application/json"}
requests.post("https://httpbin.org/post", json={"dato": 123}, headers=headers)
```

**Nota:** Usa `json=` siempre que envíes un diccionario Python. `requests` automáticamente:
- Convierte el dict a JSON
- Agrega el header `Content-Type: application/json`  [stackoverflow](https://stackoverflow.com/questions/9733638/how-to-post-json-data-with-python-requests)

***

## 🖼️ Diagrama: API en Acción

**Flujo del ejemplo:**
1. Cliente (Python) → POST `/post` con JSON `{"led": "on"}`
2. httpbin.org recibe la petición
3. httpbin responde con el mismo JSON que recibió
4. Python lee la respuesta y decide si encender el LED

***


### La Solución: `window.postMessage()`

JavaScript tiene un método llamado `postMessage` que permite comunicación entre ventanas, incluso si están en dominios diferentes.  [imsglobal](https://www.imsglobal.org/spec/lti-cs-pm/v0p1)

***

🌐 httpbin.org: Tu Laboratorio de APIs

URL: https://httpbin.org/

httpbin es un servicio gratuito que permite realizar peticiones HTTP de prueba y ver exactamente qué datos recibió el servidor.

Puedes utilizarlo para:

    Enviar peticiones HTTP de prueba
    Ver exactamente qué datos recibió el servidor
    Probar diferentes métodos: GET, POST, PUT, DELETE, PATCH
    Debuggear tu código sin necesidad de crear un servidor propio

¿Cómo funciona?

httpbin devuelve (echo) todo lo que le envías.

Si mandas un POST con JSON, te responde con ese mismo JSON.

Esto lo hace perfecto para practicar APIs desde Google Colab.

### Paso 1: Python envía mensaje al HTML padre

```python
import requests
from js import window  # Acceder a JavaScript desde Python (Pyodide)

estado = "on"  # El alumno cambia aquí

# 1. Mandar a httpbin (la parte de API)
r = requests.post("https://httpbin.org/post", json={"led": estado})
print("httpbin respondió:", r.json()["json"])

# 2. Avisar al HTML de afuera para que cambie color
window.parent.postMessage(estado, "*")
print(f"LED {estado} enviado a tu HTML!")
```

**Explicación:**
- `from js import window`: En JupyterLite (Pyodide), puedes acceder a APIs del navegador
- `window.parent.postMessage(estado, "*")`: Envía el dato al HTML que contiene el iframe  [davidwalsh](https://davidwalsh.name/window-iframe)

***

## 📘 Código: HTML Externo Escucha el Mensaje

### Paso 2: Tu HTML recibe el mensaje y cambia el LED

```html
<h2>Python - API httpbin</h2>
<div id="led" style="width:80px;height:80px;background:gray;border-radius:50%;margin:20px;transition:0.5s"></div>
<p>Estado: <b id="txt">apagado</b></p>

<iframe id="jupyter" src="./lab/repl/index.html" width="100%" height="500"></iframe>

<script>
// Escuchar mensajes que vienen del iframe (JupyterLite)
window.addEventListener("message", (event) => {
  let estado = event.data;  // Recibe "on" u "off"
  
  if(estado === "on" || estado === "off"){
    document.getElementById('txt').innerText = estado;
    let led = document.getElementById('led');
    
    if(estado === "on"){
      led.style.background = "red";
      led.style.boxShadow = "0 0 25px red";
    } else {
      led.style.background = "gray";
      led.style.boxShadow = "none";
    }
  }
});
</script>
```

**Explicación:**
- `window.addEventListener("message", ...)`: Escucha mensajes entrantes
- `event.data`: Contiene el dato enviado (`"on"` o `"off"`)
- Cambia el estilo del LED según el estado  [stackoverflow](https://stackoverflow.com/questions/9153445/how-to-communicate-between-iframe-and-the-parent-site)

***

## 🖼️ Diagrama: Comunicación Iframe-Parent

```
┌─────────────────────────────────────┐
│  Tu HTML (Parent Window)            │
│  - LED rojo/gris                    │
│  - Escucha postMessage              │
│                                     │
│  ┌───────────────────────────────┐  │
│  │  JupyterLite (iframe)         │  │
│  │  - Python corre aquí          │  │
│  │  - window.parent.postMessage()│  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
           ↑
    mensaje "on" / "off"
```



***

## 🎯 El Reto: Enciende el LED con una API

**Instrucciones:**
1. Cambia `estado = "off"` a `estado = "on"`
2. Ejecuta el código en JupyterLite
3. httpbin responderá con tu JSON
4. Tu HTML externo recibirá el mensaje y el LED se pondrá rojo 🔴

### Código para el alumno:

```python
# RETO PYTHON - API httpbin
import requests
from js import window

estado = "off"  # <- CAMBIA ESTO A "on"

# 1. Manda a httpbin
r = requests.post("https://httpbin.org/post", json={"led": estado})
print("httpbin respondió:", r.json()["json"])

# 2. Avisa a tu HTML de afuera
window.parent.postMessage(estado, "*")
print(f"LED {estado} enviado a tu HTML!")
```

**Lo que aprendes:**
- Python puede comunicarse con APIs reales usando `requests`
- httpbin es un servicio gratuito para probar APIs
- `postMessage` permite comunicación entre iframes y ventanas padre  [stackoverflow](https://stackoverflow.com/questions/9733638/how-to-post-json-data-with-python-requests)

***

## 📚 Recursos Adicionales

### Documentación Oficial:

- [Requests Library Documentation](https://requests.readthedocs.io/)
- [httpbin.org - HTTP Request & Response Service](https://httpbin.org/)  [kennethreitz](https://kennethreitz.org/software/websites/httpbin)
- [MDN: window.postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)  [imsglobal](https://www.imsglobal.org/spec/lti-cs-pm/v0p1)

### Videos:

- [Python Requests Library Tutorial](https://www.youtube.com/watch?v=ES82kgVf7-4)  [youtube](https://www.youtube.com/watch?v=ES82kgVf7-4)
- [Learn Python Requests - APIs](https://www.youtube.com/watch?v=zlgACKnDzIc)  [youtube](https://www.youtube.com/watch?v=zlgACKnDzIc)

### Tutoriales:

- [Python POST JSON with Requests](https://blog.apify.com/python-post-request/)  [blog.apify](https://blog.apify.com/python-post-request/)
- [REST API Integration with Python requests](https://codingnomads.com/python-requests-library-api-integration-tutorial)  [codingnomads](https://codingnomads.com/python-requests-library-api-integration-tutorial)

***

¿Te armo ya el `index.html` final de Python con todos estos recursos, el código del reto y la comunicación iframe funcionando?