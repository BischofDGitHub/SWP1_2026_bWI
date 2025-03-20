# Seriöser Teil

Das Backend und das Frontend können gleichzeitig gestarted werden mit concurrently. Dazu muss einmal ein _frontend_ und ein _backend_ Ordner gemacht werden. Concurrently kann einfach über npm installiert werden.

```bash
npm init -y
```

```bash
npm install concurrently
```

Das _package.json_ sollte dann so aussehen:

```JS
{
  "name": "Website mit Datenbank",
  "version": "1.0.0",
  "scripts": {
    "dev": "concurrently \"npm run dev --prefix backend\" \"npm run dev --prefix frontend\""
  },
  "devDependencies": {
    "concurrently": "^9.1.2"
  }
}

```

Der wichtige Teil hier ist das **dev-Skript**, welches einen Befehl im Terminal ausführt. Der Befehl führt jeweils einmal `npm run dev` aus in den Ordnern _backend_ und _frontend_. Jetzt muss sichergestellt werden, dass beide package.json Dateien jeweils ein **dev-Skript** besitzen. Bei Vite (Frontend) sollte dieses schon standartmäßig vorhanden sein. Im einem Node.js Backend könnte das in package.json dann etwa so aussehen:

```JS
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
```

Statt `nodemon server.js` kann auch `node server.js` benutzt werden, jedoch ist nodemon für Entwicklungszwecke angenehmer, da es automatisch neustartet, wenn _server.js_ geändert wird (muss dementsprechend auch installiert sein). Für eine globale Installation kann folgender Befehl genutzt werden:

```bash
npm install -g nodemon
```

## Backend

Befehle zum Aufsetzen des backends

```bash
mkdir backend && cd backend
npm init -y
```

```bash
npm install express mongoose cors dotenv body-parser
```

### MongoDB im Docker Container

Siehe [Anleitung](https://dev.to/speaklouder/mongodb-on-your-local-machine-using-docker-a-step-by-step-guide-4b2h)

## Frontend

Das Frontend dieses Projekts basiert auf vite + React.

```bash
npm create vite@latest
cd ./deinFrontend
npm install
```

### react-router-dom

React-router-dom ermöglicht das Routen auf einer React App.

```bash
npm install react-router-dom
```

Integration in App.tsx

```JSX
import {
  createBrowserRouter,
  Link,
  RouterProvider
} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<div>Hauptseite</div>
    },
    {
        path: "/contact",
        element: <div>Kontakt</div>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
```

### Tailwind

```bash
npm install tailwindcss @tailwindcss/vite
```

Um Tailwind jetzt zu nutzen muss es erst in _vite.config.js_ importiert werden und in _plugins_ tailwind() hinzugefügt werden.

```JS
import tailwindcss from '@tailwindcss/vite'
```

```javascript
plugins: [
    react(),
    tailwindcss()
  ],
```

Als letzter Schritt muss Tailwind noch in _index.css_ importiert werden.

```CSS
@import "tailwindcss";
```

# test

```python
print("Hello world!")
```

```javascript
console.log("Hello World!");
```

```Ausgabe
Hallo Welt!
```

ich kann _schiefe_ Wörter schreiben  
ich kann **fette** Wörter schreiben  
ich kann ~~durchgestrischene~~ Wörter schreiben  
ich kann **_~~alles~~_** kombinieren

Zeilenumbruch entweder mit zwei Leertasten am Ende der Zeile  
oder mit zwei

mal enter

> Ohio Zitat

| Ohio                | Skibidi         | Toilet             |
| ------------------- | --------------- | ------------------ |
| das ist ja verrückt | wow, der hammer | Raphael            |
| nochmal ein text    | zum schauen, ob | alles funktioniert |

![Raphael](Drooling%20Emoticon_%20Sticker%20for%20Sale%20by%20Yael%20Weiss%20_%20Redbubble.jpg)
![test](https://th.bing.com/th/id/OIP.12-bMyvM8MX84yhb0MTckAHaHt?rs=1&pid=ImgDetMain)  
[SuperGeheimeWebsite](https://www.youtube.com/watch?v=xvFZjo5PgG0)

### Stack für Websiten

Stripe
Vercel
NextJS
siehe [Youtube](https://www.youtube.com/watch?v=dNntYdZQ_mk) Video
