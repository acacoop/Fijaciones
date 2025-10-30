# Fijaciones

Aplicación web moderna para importar fijaciones de diferentes ciudades.

## 🚀 Características

- **Interfaz moderna**: Diseño limpio y responsivo con gradientes y animaciones
- **Arquitectura modular**: Componentes reutilizables construidos con React y TypeScript
- **Notificaciones toast**: Feedback visual inmediato con pop-ups elegantes
- **Estados de carga**: Indicadores visuales durante las peticiones API
- **Completamente tipado**: TypeScript para mayor seguridad y mantenibilidad

## 📋 Estructura del Proyecto

```
src/
├── components/
│   ├── Button.tsx          # Componente de botón reutilizable
│   ├── Button.css          # Estilos del botón
│   ├── Toast.tsx           # Sistema de notificaciones
│   └── Toast.css           # Estilos de notificaciones
├── hooks/
│   └── useApiCall.ts       # Hook personalizado para llamadas API
├── types/
│   └── index.ts            # Definiciones de tipos TypeScript
├── App.tsx                 # Componente principal
├── App.css                 # Estilos principales
├── main.tsx               # Punto de entrada
└── index.css              # Estilos globales
```

## 🛠️ Tecnologías

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **CSS3** - Estilos con gradientes y animaciones modernas

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## ⚙️ Configuración

Los endpoints de API se configuran en `src/App.tsx`:

```typescript
const ENDPOINTS = {
  Rosario: '/api/fijaciones/rosario',
  Cordoba: '/api/fijaciones/cordoba',
  'Bahia Blanca': '/api/fijaciones/bahia-blanca',
};
```

**Importante**: Modifica estas URLs con tus endpoints reales antes de usar en producción.

## 🎨 Componentes

### Button
Botón reutilizable con estados de carga y estilos modernos.

**Props:**
- `city` (string): Nombre de la ciudad
- `onClick` (function): Manejador de click
- `loading` (boolean): Estado de carga
- `disabled` (boolean): Estado deshabilitado

### Toast
Sistema de notificaciones con animaciones y auto-cierre.

**Props:**
- `message` (string): Mensaje a mostrar
- `type` ('success' | 'error'): Tipo de notificación
- `onClose` (function): Manejador de cierre
- `duration` (number): Duración en ms (default: 4000)

### useApiCall Hook
Hook personalizado para manejar peticiones HTTP.

**Retorna:**
- `loading` (string | null): Ciudad con petición activa
- `callEndpoint` (function): Función para ejecutar peticiones

## 🌐 Uso

1. El usuario ve tres botones: Rosario, Córdoba, y Bahía Blanca
2. Al presionar un botón, se ejecuta una petición POST al endpoint configurado
3. Durante la petición, el botón muestra un spinner de carga
4. Al completar, aparece una notificación toast con el resultado
5. La notificación se cierra automáticamente después de 4 segundos

## 📱 Responsive

La aplicación es completamente responsive y se adapta a:
- Desktop (> 768px)
- Tablet (480px - 768px)
- Mobile (< 480px)

## 🎯 Próximos Pasos

- [ ] Conectar con endpoints reales
- [ ] Agregar tests unitarios
- [ ] Implementar caché de resultados
- [ ] Agregar más ciudades según necesidad
- [ ] Implementar retry logic para peticiones fallidas

## 📄 Licencia

Este proyecto es privado.
