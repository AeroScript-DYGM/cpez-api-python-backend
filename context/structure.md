# Estructura — Capítulo Python (APIs / httpbin)

## 0. Metadata
- **Lenguaje:** Python
- **Plataforma del reto:** JupyterLite
- **Tema:** Peticiones HTTP — cómo un programa "habla" con un servidor
- **Duración lectura teoría:** ≤ 10 min

---

## 1. Objetivo de aprendizaje
Que el alumno entienda qué es una API, cómo se manda una petición HTTP desde Python, y cómo el resultado puede reflejarse fuera del código (en este caso, en un LED visual).

---

## 2. Teoría (10 min o menos)

1. **Intro (1 min)** — gancho: vas a mandar un mensaje desde tu código a un servidor real en internet, y ese mensaje va a prender un LED.
2. **¿Qué es una API? (2 min)** — un servidor que recibe datos y responde; no necesitas saber cómo funciona por dentro, solo qué mandarle y qué esperar de vuelta.
3. **El método POST (2 min)** — enviar datos al servidor (a diferencia de GET, que solo pide datos).
4. **`requests.post()` por dentro (3 min)** — qué hace la librería `requests`:
   - arma la petición HTTP (headers, body en JSON)
   - la manda por la red a `httpbin.org`
   - recibe la respuesta y la convierte de vuelta a datos de Python (`r.json()`)
5. **Cierre (2 min)** — el servidor `httpbin` no hace nada con el dato, solo te lo regresa como eco: sirve para comprobar que tu petición llegó bien formada.

---
3. Reto interactivo (Google Colab)

Código inicial (LED apagado):

import requests

estado = "off"  # <- alumno cambia aquí

r = requests.post(
    "https://httpbin.org/post",
    json={"led": estado}
)

print("httpbin respondió:", r.json()["json"])


Acción del alumno: cambiar estado = "off" a estado = "on"

Resultado esperado: la respuesta de httpbin regresa:

{'led': 'on'}


Feedback visual: el resultado se muestra directamente en Google Colab. Si la respuesta contiene {'led': 'on'}, el alumno habrá completado correctamente el reto y puede mostrar un mensaje de éxito como:

🎉 ¡Reto superado!
🔴 LED encendido


Objetivo del reto: comprobar que el alumno puede modificar una variable en Python, enviar el valor mediante una petición POST y verificar la respuesta de una API.
---

## 4. Archivos a generar
- Texto teoría (secciones 2.1–2.5) con `info.md`
- `<iframe>` embebido con elhttps://colab.research.google.com/drive/1WUjHV60AzoKohuBeYH_aDlzlB1qboMOf?usp=sharing
- LED visual (div con `background`/`box-shadow`) controlado por `window.addEventListener("message", ...)`
- Bloque de código inicial mostrado como referencia (readonly), incluyendo la línea `window.parent.postMessage(estado, "*")` para que el alumno vea cómo se comunica con la página