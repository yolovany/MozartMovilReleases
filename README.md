![MozartMovil](https://raw.githubusercontent.com/yolovany/MozartMovilReleases/main/header.png)

# MozartMovil

**MozartMovil** es una aplicación para dispositivos Android, complementaria a nuestro sistema ERP **Mozart**, diseñada para optimizar y automatizar el control de la producción agrícola en campo y empaque. Con MozartMovil, puedes gestionar registros de destajos, reloj checador, y movimientos de almacén (entradas y salidas) de forma ágil y directamente desde tu dispositivo móvil.

---

## 📥 Última Versión: 2.13.1 Build 202607150113

Descarga la versión más reciente para disfrutar de las últimas funcionalidades y mejoras de estabilidad.

*   **Fecha de lanzamiento:** 15 de julio, 2026, 1:13 AM
*   **Enlace de descarga:** [**Descargar MozartMovil 2.13.1**](https://github.com/yolovany/MozartMovilReleases/releases/download/2.13.1.2607150113/MozartMovil.Ver.2.13.1.Build.202607150113.apk)

### ✨ Novedades Principales en la Versión 2.13.1

*   **🌸 Producción FLOWERS: Desfase de Fecha en Movimientos:** Ajuste de fecha configurable (-2 a +2 días) exclusivo para FLOWERS, aplicable a entradas y traspasos abiertos desde producción, validado contra el servidor con respaldo local y remoto.
*   **🔁 Destajos Prorrateados: Repetición Solo por Gafete:** Escanear el gafete permite registrar un destajo prorrateado repetido para el empleado, evitando la restricción de la lista que excluye a quienes ya tienen uno registrado hoy.
*   **🚫 Reloj Checador: Corrección de Filtro por Puesto:** Cada registro ahora conserva y se filtra por el puesto que tenía al momento de capturarse, en lugar de reasignarse retroactivamente al puesto actual.
*   **🏷️ Producción: Renombre de Etiqueta de Menú:** "Orden de barricas" ahora se refleja como "orden de producción" en el menú.

---

## 🚀 Cómo Instalar

Para instalar la aplicación en tu dispositivo Android, sigue estos pasos:

1.  **Descarga el archivo APK** desde el [enlace de la última versión](#-última-versión-2131-build-202607150113).
2.  **Habilita la instalación de fuentes desconocidas:**
    *   Ve a **Ajustes** > **Seguridad** en tu dispositivo.
    *   Activa la opción **"Fuentes desconocidas"** o **"Instalar aplicaciones desconocidas"**. Este paso es necesario porque estás instalando la app directamente y no desde la Google Play Store.
3.  **Instala el APK:**
    *   Busca el archivo `.apk` que descargaste (normalmente en la carpeta "Descargas").
    *   Toca el archivo para iniciar la instalación. Sigue las instrucciones en pantalla.
4.  **¡Listo!** Una vez instalada, encontrarás MozartMovil en tu lista de aplicaciones.

---

## 📜 Historial de Cambios Recientes

### Versión 2.13.0 Build 202606241953 (24 de junio, 2026, 7:53 PM)
*   **Novedades:**
    *   **🧹 Destajos Prorrateados: Distribución de Costos Mejorada:** El prorrateo de gastos de limpieza ahora también considera registros de asistencia (reloj checador), no solo destajos, logrando una distribución más completa. Los destajos prorrateados generados aparecen en el historial del empleado.
    *   **🚫 Destajos Prorrateados: Bloqueo de Empleados sin Salida:** Empleados con entrada de reloj checador sin salida se marcan como "SIN SALIDA" y no pueden seleccionarse para prorrateo, tanto al cargar la lista como al escanear gafetes.
    *   **📋 Recepciones: Nuevo Campo de Folio de Remisión:** Nuevo campo numérico para capturar el folio de remisión durante la recepción, visible en la confirmación y guardado con la entrada del artículo.
    *   **⏱️ Pase de Lista: Tarea Específica del Empleado:** Al registrar entrada desde pase de lista, se asigna la tarea propia del empleado si la tiene configurada; de lo contrario se usa la tarea general.

### Versión 2.12.2 Build 202606160904 (16 de junio, 2026, 9:04 AM)
*   **Novedades:**
    *   **⚡ Traspasos: Validación de Costos más Eficiente:** La consulta de costos de la barrica al servidor ahora solo se realiza cuando el almacén origen tiene activa la restricción de no permitir salidas sin costo, agilizando la operación y reduciendo los tiempos de espera al escanear.

### Versión 2.12.1 Build 202606151350 (15 de junio, 2026, 1:50 PM)
*   **Novedades:**
    *   **🏭 Traspasos: Control de Costos por Almacén:** La restricción que impedía traspasar barricas sin costo ahora se puede activar o desactivar por almacén, permitiendo que cada uno tenga su propia política según su operación.
    *   **❄️ Corrección en Cuarto Frío y Traspasos:** Se corrigió la validación de artículos contra grupos incorrectos en cuarto frío y se reconocen correctamente los grupos de patio, producto en proceso y cuarto frío en traspasos.
    *   **⏱️ Pase de Lista: Entrada Automática Mejorada:** Al escanear un gafete desde el pase de lista de destajos, el sistema registra automáticamente la entrada del empleado en el reloj checador, incluso si la entrada fue eliminada previamente del historial.
    *   **🔧 Entradas de Producto: Mejor Búsqueda de Referencias:** Se corrigió la búsqueda de referencias de entradas de producto en proceso y producto terminado, recurriendo automáticamente al servidor de respaldo cuando la búsqueda inicial no encuentra resultados.

### Versión 2.12.0 Build 202606041230 (4 de junio, 2026, 12:30 PM)
*   **Novedades:**
    *   **Nuevo Módulo de Destajos Prorrateados:** Nuevo módulo para distribuir destajos generales entre múltiples centros de costos utilizados en la jornada, con opción para generar lista dinámica mediante escaneo de gafetes.
    *   **⏱️ Pase de Lista con Entrada Automática:** Al acceder a "Pase de lista" desde la actividad de destajos, el sistema registra automáticamente la entrada de los empleados que aún no han checado su llegada, ahorrando tiempo al supervisor.

### Versión 2.11.7 Build 202605230113 (23 de mayo, 2026, 01:13 AM)
*   **Novedades:**
    *   **🔍 Búsqueda Inteligente de Empleados por Folio:** Mejoramos la búsqueda de empleados al escanear por folio en destajos. El sistema verifica si el grupo del empleado requiere clave adicional, cruzando información entre el folio escaneado y los datos del empleado para asegurar que solo el personal autorizado registre destajos.
    *   **🧊 Nuevo Módulo: Entradas a Cuarto Frío:** Nuevo sistema para gestionar entradas de productos al cuarto frío, con pantalla de inicio para capturar la información inicial y pantalla de confirmación para revisar y validar los datos antes de guardarlos. Incluye validaciones en cada paso para evitar errores en el inventario de productos refrigerados.
    *   **🌐 Actualización de Conexiones con Servidores:** Renovamos las referencias de comunicación con los servicios de Usuarios y Datos de Empresa, garantizando mayor eficiencia y estabilidad de conexión con los servidores de MozartWeb.
    *   **🚪 Control de Acceso al Módulo de Cuarto Frío:** Solo los usuarios con permisos adecuados podrán acceder al nuevo módulo de entradas a cuarto frío. El administrador configura desde el sistema central qué usuarios tienen habilitado este módulo especializado.

### Versión 2.11.6 Build 202605181255 (18 de mayo, 2026)
*   **Novedades:**
    *   **🧾 Registro del Ayudante del Vendedor en Cortes de Venta:** Se incluye ahora el ayudante del vendedor en el registro de cortes de venta para módulos de visita a cliente.

### Versión 2.11.5 Build 202605051249 (5 de mayo, 2026)
*   **Novedades:**
    *   **📦 Inventarios Reales (Sin Negativos):** Ajustamos el cálculo interno de existencias. El sistema ignora automáticamente registros con valores negativos al sumar totales de un artículo o ubicación, mejorando la obtención de ubicaciones disponibles en todos los procesos de control de almacén.
    *   **🏷️ Filtros Precisos para Etiquetas QR:** Corregimos la lógica de visualización en el módulo de Generación de Etiquetas QR, donde los grupos de artículos no siempre se filtraban correctamente. Al generar QRs se enlistan artículos de patio y de producción en proceso.

### Versión 2.11.4 Build 202604291459 (29 de abril, 2026)
*   **Novedades:**
    *   **🛡️ Mayor Estabilidad en el Registro de Destajos:** Validación reforzada para evitar errores y duplicados, especialmente en zonas con conectividad intermitente.
    *   **🏷️ Etiquetas QR para Artículos de Patio:** Generación e impresión de códigos QR para artículos del grupo "patio" de forma manual.
    *   **🖨️ Reimpresión de Remisiones desde el Servidor:** Acceso a remisiones históricas directamente desde el servidor si no están en el dispositivo.
    *   **📋 Escaneo QR/NFC Opcional en Visitas:** Configuración por vendedor para hacer opcional el escaneo al iniciar una visita a cliente.
    *   **🚗 Mayor Control en el Kilometraje:** Validación automática de valores de kilómetros para evitar errores de captura.

### Versión 2.11.3 Build 202604210442 (21 de abril, 2026)
*   **Novedades:**
    *   **⚡ Escaneo Sin Interrupciones (Cero Pausas):** Se eliminó el límite de velocidad entre escaneos, permitiendo capturas de destajos tan rápidas como el dispositivo lo permita.
    *   **🛠️ Mensajes Claros y Rastro de Errores:** Mensajes de error descriptivos y un historial silencioso que guarda un rastro detallado para que soporte técnico pueda dar soluciones instantáneas.

### Versión 2.11.2 Build 202603261137 (26 de marzo, 2026, 11:37 AM)
*   **Correcciones:**
    *   **📱 Consulta Rápida de Códigos QR:** Se implementó persistencia para que los códigos leídos se agreguen automáticamente al historial, permitiendo su posterior reimpresión y consulta.
    *   **🏷️ Optimización en Generador de Etiquetas:** Se eliminó el filtrado restrictivo de grupos de patio en la carga de artículos, permitiendo una visibilidad global de las claves.
    *   **🛠️ Errores al Mostrar Lista de Artículos:** Se corrigieron errores y se previnieron posibles interrupciones en el proceso de listado.

### Versión 2.11.1 Build 202603240842 (24 de marzo, 2026)
*   **Correcciones:**
    *   **📱 Errores al Mostrar Lista de Artículos:** Se corrigieron errores y se previnieron posibles interrupciones en el proceso de listado.

### Versión 2.10.0 Build 202603131620 (13 de marzo, 2026, 04:20 PM)
*   **Novedades:**
    *   **📶 Validación de Conexión Inteligente:** La aplicación busca rutas alternativas de forma automática si un servidor de validación falla, mejorando la estabilidad en zonas con señal intermitente.
    *   **🛡️ Mayor Seguridad al Desmarcar Empleados:** Ahora se solicita confirmación al deseleccionar trabajadores en la lista de pase de lista, evitando borrar la asistencia de alguien por accidente.
    *   **👥 Control Inteligente de Reingresos:** Se eliminó la creación automática de registros genéricos al escanear un empleado que no está en la lista activa; el sistema busca en el historial de empleados inactivos antes de mostrar una alerta.
    *   **🏷️ Nuevo Formato de Lectura para Gafetes (Ficha-Consecutivo):** Nueva opción para leer fichas de 10 caracteres, extrayendo los 6 números de la ficha e ignorando los 4 dígitos del consecutivo.

### Versión 2.9.0 Build 202603101447 (10 de marzo, 2026)
*   **Novedades:**
    *   **🏷️ Etiquetas Inteligentes en Inglés:** Las etiquetas y códigos QR de producto terminado ahora aplican automáticamente el formato en inglés cuando el perfil del cliente así lo requiere.

### Versión 2.8.9 Build 202603090915 (9 de marzo, 2026)
*   **Mejoras:**
    *   **✨ Interfaz y Navegación Mejoradas:** Los contadores inician ahora desde "1 de X", más opciones al finalizar el registro en el checador, títulos más amigables y pantalla inicial (Splash) más limpia.
    *   **📧 Soporte y Notificaciones Proactivas:** Reactivación del sistema de alertas automáticas a soporte técnico por errores inusuales o cambios de licencias.
*   **Correcciones:**
    *   **⏱️ Corrección en Registro de Tiempos:** Solucionado el bloqueo al intentar registrar SALIDA, COMIDA, DESCANSO o CAMBIO DE CC sin una ENTRADA previa.

### Versión 2.8.8 Build 2026030413251 (4 de marzo, 2026)
*   **Novedades:**
    *   **📅 Búsqueda y Reimpresión de Remisiones de Días Atrás:** Libertad en el calendario con un nuevo selector de fecha y acceso inmediato a recibos de cualquier día pasado.
*   **Mejoras:**
    *   **🔄 Mensaje de Carga al Comprobar Conexión en Descarga de Catálogos:** Retroalimentación en vivo, manejo de errores claro y detección inteligente de red.
    *   **🌐 Resiliencia en Redes Inestables:** Mayor tolerancia de espera y efectividad en ruta reduciendo errores por tiempo agotado.
*   **Correcciones:**
    *   **📱 Corrección de Errores al Reemplazar Dispositivos en la Licencia:** Enfoque en equipos activos y optimización del proceso de migración de movimientos.
    *   **⚡ Impresiones Fluidas:** Cero interrupciones en la validación por Bluetooth y prevención de cierres con validaciones de seguridad estrictas.

### Versión 2.8.7 Build 2026022707531 (27 de febrero, 2026)
*   **Novedades:**
    *   **🏷️ Formato de Etiqueta en Inglés por Cliente:** El formato de fechas (Mfg Date / Best By) se define ahora por cliente, eliminando la configuración global.
    *   **🔄 Eliminación de Configuración Global:** Se elimina la opción general antigua para mayor claridad y orden.
    *   **🖨️ Impacto en Impresión:** La impresión por Bluetooth y ZPL respeta la configuración individual del cliente.

### Versión 2.8.6 Build 2026012102482 (21 de enero, 2026)
*   **Novedades:**
    *   **🚛 Optimización en Traspasos (Patios y Transición):** Selección automática de ubicación para almacenes de transición y autocorrección de ubicación siguiente en caso de conflicto.
*   **Correcciones:**
    *   **🗑️ Corrección al Eliminar Traspasos Completos:** Solución a error interno al intentar borrar un traspaso completo, asegurando que la operación se cancele limpiamente.
    *   **🔧 Mejoras de Estabilidad:** Ajustes en la generación de etiquetas QR y blindaje contra cierres inesperados en carga de datos.

### Versión 2.8.6 Build 2026010613091 (06 de enero, 2026)
*   **Novedades:**
    *   **🛡️ Protección de Órdenes Activas**: Antes de registrar Entradas o Traspasos, la aplicación ahora verifica automáticamente que la Orden de Producción siga disponible.
    *   **🦓 Corrección en Escáneres Zebra**: Solucionamos la lectura del código de supervisor al intentar borrar destajos.

### Versión 2.8.5 Build 2025121915272 (19 de diciembre, 2025)
*   **Novedades:**
    *   **🏷️ Etiquetas más limpias:** Corrección en el formato al imprimir referencias largas.
    *   **🛡️ Ajuste visual:** Ahora se muestra el código de referencia completo impreso en tus productos.

### Versión 2.8.5 Build 2025121614281 (16 de diciembre de 2025)
*   **Novedades:**
    *   **🏷️ Generador de Etiquetas QR:** Nuevo módulo para crear etiquetas, búsqueda inteligente de referencias, integración con inventario.
    *   **🛡️ Seguridad y Control:** Bloqueo de duplicados en inventarios y traspasos, validación de horario en reloj.
    *   **🖨️ Mejoras en Impresión:** Etiquetas más limpias (referencias largas), códigos QR simplificados en traspasos de misma ubicación.

### Versión 2.8.4 Build 2025121101051 (11 de diciembre de 2025)
*   **Novedades:**
    *   **🔄 Escaneo Flexible de QR:** Opción para permitir códigos repetidos temporalmente en inventarios y traspasos.
    *   **🛡️ Seguridad Automática:** Desactivación automática de "permitir repetidos" al finalizar la tarea.
*   **Correcciones:**
    *   **🛠️ Estabilidad en Traspasos:** Solución a cierres al confirmar traspasos masivos.

### Versión 2.8.3 Build 2025121012472 (10 de diciembre de 2025)
*   **Novedades:**
    *   **🔄 Flexibilidad en Ubicaciones:** Gestión de ubicaciones repetidas en almacenes "EN TRANSICIÓN".
    *   **📦 Control de Inventario (Validación):** Candado de seguridad y validación de referencias en tiempo real.
    *   **🔍 Consulta al Toque:** Acceso rápido a detalles de productos desde el inventario.

### Versión 2.8.3 Build 2025120409351 (4 de diciembre de 2025)
*   **Novedades:**
    *   **👥 Trabajo en Equipo (Reloj Checador):** Mejor visibilidad de empleados en múltiples dispositivos.
    *   **📲 Pantalla Principal (Modo Online):** Menú simplificado al estar conectado.

### Versión 2.8.2 Build 2025120211362 (2 de diciembre de 2025)
*   **Novedades:**
    *   **🧹 Limpieza Automática:** El sistema elimina datos antiguos para mantener la app ligera.
*   **Correcciones:**
    *   **🖨️ Corrección en Impresión:** Solución definitiva a cierres al imprimir desde historial.

### Versión 2.8.2 Build 2025120114241 (1 de diciembre de 2025)
*   **Novedades:**
    *   **Descarga de Catálogos Acelerada:** Descargas simultáneas y pantalla siempre activa durante la actualización.
*   **Correcciones:**
    *   **Corrección en Impresión de Etiquetas:** Solución a cierres inesperados al reimprimir desde el historial.
    *   **Estabilidad y Diagnóstico:** Registros internos más inteligentes y mayor detalle en reportes de error.

### Versión 2.8.1 Build 2025112713071 (27 de noviembre de 2025)
*   **Novedades:**
    *   **Descarga de catálogos más rápida:** Proceso ágil y menor consumo de datos.
    *   **QRs más confiables en traspasos:** Inclusión de índice interno para unicidad.
*   **Mejoras:**
    *   **Mejor orden en referencias internas:** Limpieza y eliminación de duplicados.
    *   **Mejoras en traspasos y producción:** Lógica mejorada y ocultamiento de almacenes especiales.
*   **Correcciones:**
    *   **Mejor impresión:** Referencias más limpias y simplificación de lógica.
    *   **Correcciones y ajustes generales:** Solución a problemas de diálogos y selección de almacenes.

### Versión 2.8.0 Build 2025112410512 (24 de noviembre de 2025)
*   **Novedades:**
    *   **Nuevo Portal de Manuales:** Acceso más rápido y mejor compatibilidad con Notion.
    *   **Navegación Web mejorada:** Funcionalidad pull-to-refresh y botón de cierre.
*   **Mejoras:**
    *   **Sincronización optimizada:** Procesos más rápidos.
    *   **Arranque acelerado:** Reducción del tiempo de carga inicial.
    *   **Mejor gestión de red:** Detección precisa de internet y conexión al servidor.
*   **Correcciones:**
    *   **Actualizaciones más confiables:** Verificación de versiones estable.
    *   **Limpieza interna:** Código simplificado y mayor estabilidad.
    *   Correcciones generales en visor web.

### Versión 2.8.0 Build 2025112114201 (21 de noviembre de 2025)
*   **Novedades:**
    *   **Cálculo de Caducidades:** Ajuste en el cálculo basado en meses configurados por artículo o cliente.
*   **Mejoras:**
    *   **Traspasos:** Detección automática de almacenes "Patio", flujo optimizado en almacenes de transición y validaciones seguras.
    *   **Etiquetas:** Simplificación interna del generador de etiquetas.
*   **Correcciones:**
    *   Solución a problemas de navegación en selección de almacenes y consistencia en ubicaciones repetidas.

### Versión 2.7.9 (19 de noviembre de 2025)
*   **Novedades:**
    *   **Módulo de Inventario Físico:** Realiza inventarios completos escaneando códigos QR de artículos y ubicaciones.
    *   **Optimización de Imágenes:** Compresión y carga eficiente de imágenes de artículos.
    *   **Autorización por QR para Eliminar Destajos:** Requiere escaneo de QR de supervisor para eliminar registros.
*   **Mejoras:**
    *   Optimizaciones en traspasos, registros en bitácora y estabilidad general.

### Versión 2.7.8 (05 de noviembre de 2025)
*   **Novedades:**
    *   Opción para invertir colores de las firmas al imprimir tickets, mejorando la legibilidad.
*   **Correcciones:**
    *   Solucionado un problema que impedía imprimir códigos QR correctamente en etiquetas ZPL.

### Versión 2.7.7 (23 de octubre de 2025)
*   **Novedades:**
    *   Etiquetas de formato ZPL ahora incluyen información adicional como referencia de entrada y conteo de barricas.
*   **Mejoras:**
    *   Validación más precisa de códigos QR en traspasos de almacén, mostrando mensajes de error más específicos.

### Versión 2.7.6 (21 de octubre de 2025)
*   **Novedades:**
    *   Depuración automática de archivos de registro y respaldos antiguos.
    *   Validación de formato y contenido de códigos QR en traspasos.
    *   Nuevo campo "Piezas por libra" en la recepción de producto.
*   **Optimizaciones:**
    *   Gestión de logs mejorada, con compresión ZIP para el envío.

---

## 📚 Documentación y Soporte

*   **Aprende a usar la aplicación:**
    Consulta nuestro [**Portal de Manuales de Infotek**](https://infotek.notion.site/Portal-de-manuales-de-Infotek-b5bc7bb7fa244d9a972dd5033aaf7bc6) para guías detalladas.

*   **¿Necesitas ayuda?**
    *   **Email:** jovany.infotek@gmail.com
    *   **WhatsApp:** (646) 237 7268
