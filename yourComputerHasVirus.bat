@echo off


mkdir backend
cd backend


call npm init -y 
call npm i express dotenv cors body-parser
REM call wird hier verwendet, weil npm sonst das Batch Skript beendet 


echo PORT=5000 > .env


echo const express = require("express"); > server.js
echo const bodyParser = require("body-parser"); >> server.js
echo const cors = require("cors"); >> server.js
echo require("dotenv").config(); >> server.js
echo. >> server.js
echo const app = express(); >> server.js
echo. >> server.js
echo app.use(bodyParser.urlencoded({ extended: false })); >> server.js
echo app.use(bodyParser.json()); >> server.js
echo app.use(express.json()); >> server.js
echo app.use(cors()); >> server.js
echo. >> server.js
echo const PORT = process.env.PORT ^|^| 5000; >> server.js
echo app.listen(PORT, () =^> console.log(`Server running on port ${PORT}`)); >> server.js


echo node_modules > .gitignore
echo .env >> .gitignore
echo .env* >> .gitignore


cd ..


call npx create-vite@latest frontend --template react-ts
REM start /wait npm create vite@latest


cd frontend


call npm i
call npm i @tailwindcss/vite react-router-dom


echo let fs = require("fs"); > temp.cjs
echo let file = "vite.config.ts"; >> temp.cjs
echo let data = fs.readFileSync(file, "utf8").split("\n"); >> temp.cjs
echo let index = data.findLastIndex((line) =^> line.includes("import")); >> temp.cjs
echo data.splice(index + 1, 0, 'import tailwindcss from \'@tailwindcss/vite\''); >> temp.cjs
echo index = data.findIndex((line) =^> line.includes("plugins")); >> temp.cjs
echo if (index !== -1) data[index] = "\tplugins: [\n\t\treact(),\n\t\ttailwindcss(),\n\t],"; >> temp.cjs
echo data.splice(index + 1, 0, '\tserver: {\n\t\thost: true,\n\t\tport: 3000\n\t}'); >> temp.cjs
echo fs.writeFileSync(file, data.join("\n")); >> temp.cjs
echo file = "./src/index.css"; >> temp.cjs
echo fs.writeFileSync(file, '@import "tailwindcss";'); >> temp.cjs
echo file = "./src/App.css"; >> temp.cjs
echo fs.writeFileSync(file, ""); >> temp.cjs
echo file = "App.tsx"; >> temp.cjs
echo fs.writeFileSync(file, ""); >> temp.cjs


node temp.cjs
del /f /q temp.cjs
REM /f, um schreibgeschuetzte Dateien zu loeschen (force)
REM /q um im quiet Modus ausgefuehrt werden, d.h. es wird nicht nach Confirmation gefragt


cd src
mkdir components



echo import "./App.css"; > App.tsx
echo import { createBrowserRouter, RouterProvider } from "react-router-dom"; >> App.tsx
echo. >> App.tsx
echo function App() { >> App.tsx
echo     const router = createBrowserRouter([ >> App.tsx
echo         { >> App.tsx
echo             path: '/', >> App.tsx
echo             element: ^<div^>made by David Bischof {":)"}^</div^>, >> App.tsx
echo         } >> App.tsx
echo     ]); >> App.tsx
echo. >> App.tsx
echo     return ( >> App.tsx
echo         ^<^> >> App.tsx
echo             ^<RouterProvider router={router} /^> >> App.tsx
echo         ^</^> >> App.tsx
echo     ); >> App.tsx
echo } >> App.tsx
echo. >> App.tsx
echo export default App; >> App.tsx


