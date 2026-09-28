# QA Automation Framework

Framework base de automatización de pruebas E2E desarrollado con **Playwright + TypeScript**.

El objetivo de este proyecto es disponer de una estructura reutilizable para futuros proyectos de QA Automation.

## 🛠️ Tecnologías

* Node.js
* TypeScript
* Playwright
* Git
* GitHub

## 📋 Requisitos previos

Antes de ejecutar el proyecto es necesario tener instalado:

* Node.js
* npm
* Git

Versiones utilizadas actualmente:

```text
Node.js: v24.21.0
npm: 11.19.0
Git: 2.55.0
```

## 🚀 Instalación

Clonar el repositorio:

```bash
git clone https://github.com/kikefema/QA-Automation-core.git
```

Entrar en el proyecto:

```bash
cd QA-Automation-core
```

Instalar las dependencias:

```bash
npm install
```

Instalar el navegador Chromium utilizado por Playwright:

```bash
npx playwright install chromium
```

## ▶️ Ejecución de tests

### Ejecutar todos los tests

```bash
npm test
```

### Ejecutar un test concreto

```bash
npx playwright test tests/example.spec.ts
```

### Ejecutar los tests mostrando el navegador

```bash
npm run test:headed
```

### Ejecutar los tests en modo Debug

```bash
npm run test:debug
```

## 📊 Reporte HTML

Después de ejecutar los tests, Playwright genera un reporte HTML.

Para abrirlo:

```bash
npm run test:report
```

También se puede utilizar directamente:

```bash
npx playwright show-report
```

## 📁 Estructura del proyecto

```text
QA-Automation/
│
├── tests/
│   └── example.spec.ts
│
├── pages/
│   └── PlaywrightHomePage.ts
│
├── fixtures/
│
├── utils/
│
├── test-data/
│
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

### tests/

Contiene los tests automatizados.

### pages/

Contiene los Page Objects utilizados para separar la lógica de interacción con la aplicación de los tests.

### fixtures/

Contendrá fixtures personalizados de Playwright.

### utils/

Contendrá funciones auxiliares y utilidades reutilizables.

### test-data/

Contendrá los datos utilizados por los tests cuando sea necesario separarlos de la lógica de automatización.

### playwright.config.ts

Contiene la configuración global de Playwright.

## 🔧 Scripts disponibles

| Comando               | Descripción                              |
| --------------------- | ---------------------------------------- |
| `npm test`            | Ejecuta todos los tests                  |
| `npm run test:headed` | Ejecuta los tests mostrando el navegador |
| `npm run test:debug`  | Ejecuta los tests en modo Debug          |
| `npm run test:report` | Abre el reporte HTML                     |

## 🌿 Git

Crear una nueva rama:

```bash
git checkout -b nombre-de-la-rama
```

Comprobar el estado:

```bash
git status
```

Añadir cambios:

```bash
git add .
```

Crear un commit:

```bash
git commit -m "Descripción del cambio"
```

Subir los cambios:

```bash
git push
```

## 📌 Estado del proyecto

Proyecto en desarrollo.

La arquitectura se irá ampliando progresivamente incorporando nuevas capas y buenas prácticas de automatización.

### Próximos pasos

* Fixtures personalizados
* Utilidades reutilizables
* Gestión de datos de prueba
* Configuración por entornos
* Validaciones y buenas prácticas de TypeScript
* Linting y formateo
* Documentación adicional
* Integración opcional con Cucumber
