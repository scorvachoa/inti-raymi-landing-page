# Inti Raymi 2026 - Festival del Sol

Plataforma web interactiva de turismo vivencial para el Inti Raymi, la ceremonia inca más importante del año en Sacsayhuamán, Cusco - Perú.

## Tecnologías

- HTML5 semántico (`<picture>`, `<figure>`, `<figcaption>`, `<table>`, `<form>`)
- CSS3 (Grid, Flexbox, transiciones, media queries, `:nth-child`)
- Bootstrap 5 (tabs)
- JavaScript vanilla (lightbox, validación, envío simulado)
- PHP (send.php - manejador de formulario)

## Estructura

```
inti-raymi/
├── index.html               # Landing page
├── send.php                 # Form handler
├── css/styles.css           # Styles
├── js/lightbox.js           # Gallery lightbox
├── img/banner.png           # Hero background
├── zona-illapa.html         # Zona Illapa detail
├── zona-chasca.html         # Zona Chasca detail
├── zona-inti.html           # Zona Inti Super VIP detail
├── zona-quilla.html         # Zona Killa VIP detail
├── zona-qorikancha.html     # Zona Qorikancha detail
└── Informe_Tecnico_Inti_Raymi_2026.docx
```

## Secciones

- **Zonas**: 5 tarjetas con picture + figure semántico, hover scale(1.05)
- **Precios**: Tabs con 5 zonas, tabla de tarifas por panel
- **Paquetes**: Tabla comparativa de 4 combos (5 columnas)
- **Reserva**: Formulario con validación nativa HTML5

## Responsive

| Breakpoint | Comportamiento |
|---|---|
| >1024px | 3 columnas, hero fullscreen |
| 1024px | 2 columnas, layout apilado |
| 768px | 1 columna, tabs scrolleables |
| 480px | Header vertical, galería 1 columna |

## Imágenes

55 imágenes únicas distribuidas sin repetición por archivo. Cada `<picture>` incluye 3 breakpoints.

## Formulario

Campos: nombre (minlength=5), email, teléfono (pattern), fecha (date + min dinámico), destino (select), presupuesto (range 500–5000 USD).
