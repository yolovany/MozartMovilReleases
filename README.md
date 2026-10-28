![MozartMovil](https://raw.githubusercontent.com/yolovany/MozartMovilReleases/main/header.png)

# MozartMovil

**MozartMovil** es una aplicación para dispositivos Android, complementaria a nuestro sistema ERP **Mozart**, diseñada para optimizar y automatizar el control de la producción agrícola en campo y empaque. Con MozartMovil, puedes gestionar registros de destajos, reloj checador, y movimientos de almacén (entradas y salidas) de forma ágil y directamente desde tu dispositivo móvil.

---

## 📥 Última Versión: 3.16.1 Build 202610272315

Descarga la versión más reciente para disfrutar de las últimas funcionalidades y mejoras de estabilidad.

*   **Fecha de lanzamiento:** 27 de octubre, 2026, 11:15 PM
*   **Enlace de descarga:** [**Descargar MozartMovil 3.16.1**](https://github.com/yolovany/MozartMovilReleases/releases/download/3.16.1.2610272315/MozartMovil.Ver.3.16.1.Build.202610272315.apk)

### ✨ Novedades Principales en la Versión 3.16.1

*   **📤 Visita a Cliente: Ventas con Varios Cortes Pendientes:** Con dos o más cortes pendientes, todas sus ventas se envían; antes la sincronización fallaba en cada intento.
*   **👥 Visita a Cliente: Clientes Nuevos en la Descarga:** Solo se guardan los clientes que faltan; la descarga ya no falla con claves repetidas.
*   **🔁 Visita a Cliente: Ventana de Sincronización:** Ya no queda a la vista el aviso anterior con Reintentar, y las fallas por billetes o monedas se muestran con Reintentar.
*   **📋 Agenda Inicial: Ventas Pendientes de Otro Día:** La pantalla ya no se cierra al mandar ventas pendientes de días anteriores.
*   **🔐 Inicio y Cierre de Día: Código de Autorización:** Un código mal escrito se rechaza como inválido en vez de cerrar la app.

---
## 🚀 Cómo Instalar

Para instalar la aplicación en tu dispositivo Android, sigue estos pasos:

1.  **Descarga el archivo APK** desde el [enlace de la última versión](#-última-versión-3161-build-202610272315).
2.  **Habilita la instalación de fuentes desconocidas:**
    *   Ve a **Ajustes** > **Seguridad** en tu dispositivo.
    *   Activa la opción **"Fuentes desconocidas"** o **"Instalar aplicaciones desconocidas"**. Este paso es necesario porque estás instalando la app directamente y no desde la Google Play Store.
3.  **Instala el APK:**
    *   Busca el archivo `.apk` que descargaste (normalmente en la carpeta "Descargas").
    *   Toca el archivo para iniciar la instalación. Sigue las instrucciones en pantalla.
4.  **¡Listo!** Una vez instalada, encontrarás MozartMovil en tu lista de aplicaciones.

---

## 📜 Historial de Cambios Recientes
### Versión 3.16.0 Build 202610210459 (21 de octubre, 2026, 4:59 AM)
*   **Novedades principales:**

*   **🔁 Visita a Cliente: Una Sincronización a la Vez:** Si se pide otra mientras una corre, se hace al terminar la primera; la misma venta ya no llega dos veces al servidor ni falla la descarga con claves repetidas.
*   **🧾 Visita a Cliente: Folios y Reimpresiones:** La sincronización ya no se detiene con dos folios nuevos de una serie, y al reimprimir ya no se pide la firma si la empresa no captura firmas.
*   **⏱️ Reloj: Registro de Tiempos Rápido:** El registro por tipo y la búsqueda de empleados vuelven a ser ágiles con miles de empleados en el catálogo.
*   **🛢️ Producción: Barricas sin Costo:** El cambio de orden de producción no acepta barricas sin costo cuando el almacén no permite salidas de producto sin costo.

### Versión 3.15.0 Build 202610190907 (19 de octubre, 2026, 9:07 AM)
*   **Novedades principales:**

*   **🌤️ Campo: Envío de Tarde en Segundo Plano:** De 2:00 a 8:00 PM lo capturado sube solo tras 5 minutos sin uso, sin sacar al usuario de su pantalla ni mandar Excel; si falla, lo reintenta.
*   **🌙 Campo: Sincronización de Noche más Confiable:** Espera 20 minutos sin uso, no se repite en la misma madrugada y reintenta si el servidor no puede confirmar la protección de los datos.
*   **📥 Campo: Sin Descargas Repetidas:** Si la noche ya descargó, el arranque y «Nuevo día detectado» no vuelven a descargar.

### Versión 3.14.0 Build 202610172145 (17 de octubre, 2026, 9:45 PM)
*   **Novedades principales:**

*   **🧾 Campo: Rechazados por el Servidor:** Lo que la sincronización de noche dejó aparte se ve arriba de Historial de envíos, con su motivo, y se vuelve a mandar con **Reintentar**.
*   **🟠 Campo: Aviso en el Menú:** Franja ámbar con cuántos registros rechazó el servidor; al tocarla abre Historial de envíos.
*   **🗓️ Campo: Detalle Legible:** Fechas en día/mes/año y el rondín con su hora.

### Versión 3.13.0 Build 202610171552 (17 de octubre, 2026, 3:52 PM)
*   **Novedades principales:**

*   **🌙 Campo: Sincronización Automática de Noche:** De madrugada el equipo envía lo pendiente y actualiza catálogos solo; reintenta hasta las 5:00, se configura y se prueba desde Configuración, y avisa en el menú si algo quedó pendiente.
*   **📶 Conexión: VPN con Datos Móviles:** Con la misma IP local y externa, Actualizar catálogos con datos ya no falla al instante con «No se pudo conectar con el servidor».
*   **📱 Inicio de Sesión: Pantallas Pequeñas:** El botón Entrar queda a la vista con un logo más chico y sin textos de sobra; en equipos con las animaciones del sistema apagadas, los indicadores de carga vuelven a moverse.

### Versión 3.12.1 Build 202610142242 (14 de octubre, 2026, 10:42 PM)
*   **Novedades principales:**

*   **🏷️ Estabilidad: Etiquetas de Entradas sin Cierres:** Imprimir las etiquetas de una entrada a producto terminado (y en proceso, recepción y generador QR) ya no cierra la app.
*   **📥 Estabilidad: Base de Datos Incompleta:** Iniciar descarga en el aviso «Base de datos» ya no cierra la app; la descarga empieza y termina.
*   **📅 Ventas en Ruta: Agenda sin Visitas Mezcladas:** Cerrar o reagendar una visita sin pedido ya no afecta a las demás, y la siguiente no hereda la venta de la anterior.

### Versión 3.12.0 Build 202610101758 (10 de octubre, 2026, 5:58 PM)
*   **Novedades principales:**

*   **🔁 Estabilidad: Sin Reinicios en Ciclo:** Tras un cierre por error la app vuelve al inicio de sesión con el aviso, en vez de reabrirse y cerrarse cada segundo; también corrige la batería baja al registrar destajos y las horas 7 h adelantadas.
*   **📤 Campo, Rondines y Planes: Envío más Confiable:** Un envío cortado ya no queda como enviado; Rondines y Planes mandan todo lo pendiente con la ventana de progreso y Reintentar; con MozartWeb 2026.10.10.0 los reenvíos no duplican.
*   **📱 Serial del Equipo: Siempre Presente:** El serial ya no queda vacío y lo mandan también traspasos, Control de inventarios y Tractocamión.
*   **🧾 Soporte: Bitácora Completa:** Pantallas, toques, llamadas al servidor y red quedan en la bitácora (sin contraseñas); tras un cierre por error se envía sola.

### Versión 3.11.1 Build 202610091949 (9 de octubre, 2026, 7:49 PM)
*   **Novedades principales:**

*   **🛢️ Control de Almacén: Entradas a Patio y Cuarto Frío sin Registros a Medias:** Si la entrada no se termina de registrar, se deshace lo grabado, las ubicaciones quedan libres y Reintentar vuelve a elegir con las libres de ese momento.
*   **📶 Control de Almacén: Deshacer sin Conexión:** Lo que no se pudo deshacer por falta de red queda guardado en el equipo y se manda solo; traspasos y devoluciones usan lo mismo.
*   **🖥️ Control de Almacén: Servidor Actualizado:** Con MozartWeb 2026.10.09.0 las ubicaciones apartadas regresan al deshacer, un movimiento ya leído se da de baja y un traspaso reintentado no queda doble.

### Versión 3.11.0 Build 202610081004 (8 de octubre, 2026, 10:04 AM)
*   **Novedades principales:**

*   **🚚 Ventas en Ruta: El Camión Arranca en 0:** Solo se vende lo que se registra como carga del día; se quita la ventana «Sobrantes» y, con el servidor actualizado, una carga menor al mínimo pide al supervisor.
*   **🛣️ Ventas en Ruta: Cierre del Día sin Bloqueos:** Combustible en litros de 1 a 400, recorrido máximo opcional y las unidades con kilometraje inválido ya pueden cerrar.
*   **🧾 Impresión: Ticket de Mantenimiento con Dos Empresas:** Lleva los datos completos de las dos empresas del servicio y la bitácora guarda el texto enviado.
*   **🔒 Instalación: Menos Permisos:** Se quitan 14 permisos que Android no concede o que la app no usa.

### Versión 3.10.2 Build 202610060751 (6 de octubre, 2026, 07:51 AM)
*   **Novedades principales:**

*   **↩️ Control de Almacén: Devoluciones al Almacén de Transición:** La reubicación ofrece el botón «Transición» cuando las barricas salieron de ahí y, con el servidor actualizado, su ubicación queda apartada 6 horas para devolverlas con la misma etiqueta.
*   **🔎 Control de Almacén: Qué Produce la Orden:** La confirmación del traspaso a producción dice qué produce la orden elegida.
*   **🛡️ Control de Almacén: Traspasos sin Registros a Medias:** Si un traspaso o una devolución no se termina de registrar, se borra lo grabado y se ofrece Reintentar.
*   **🖨️ Impresión: Impresora de 80 mm Conserva su Modelo:** El modelo elegido a mano ya no regresa al anterior al cambiar de impresora y queda ligado a su equipo Bluetooth.

### Versión 3.10.1 Build 202610021459 (2 de octubre, 2026, 2:59 PM)
*   **Novedades principales:**

*   **🛡️ Control de Almacén: Devoluciones que Confirman la Ubicación:** Si no se puede confirmar que el lugar está libre, avisa y permite reintentar en vez de devolver la barrica encima de otra.
*   **🖨️ Impresión: Papel de 80 mm Corregido:** En visita a cliente, el total de venta y el recibo de cobranza caben en el papel; acumulados, destajos y reloj checador salen con el ancho correcto.
*   **📐 Configuración: Pantalla a Todo lo Ancho:** La configuración aprovecha todo el ancho del equipo.

### Versión 3.10.0 Build 202609301414 (30 de septiembre, 2026, 2:14 PM)
*   **Novedades principales:**

*   **🏷️ Control de Almacén: Confirmaciones por Pasos:** La entrada muestra barricas registradas y pendientes, avanza con una palomita por cada confirmación y evita salir mientras trabaja.
*   **🔁 Control de Almacén: Reintentar sin Perder el Proceso:** Si no hay lugares libres, el aviso explica qué ocurre y permite reintentar sin cerrar ni reiniciar la operación.
*   **⚖️ Control de Almacén: Peso de la Orden Actual:** Patio y cuarto frío calculan el peso por barrica con los kilos y barricas pendientes de la orden abierta.
*   **🖨️ Impresión: Impresora de 80 mm:** Se elige en Configuración y aprovecha el papel completo en visita a cliente, reimpresiones, entrega de efectivo, mantenimiento y tractocamión.

### Versión 3.9.0 Build 202609240009 (24 de septiembre, 2026, 12:09 AM)
*   **Novedades principales:**

*   **📡 Conexión: La Red de la Planta sólo se Usa cuando se Está en Ella:** Con datos, sin red o en un hotspot de teléfono se va directo a la dirección externa; en otra Wi-Fi se prueba la de la planta una vez y se recuerda. Fuera de la planta el inicio de sesión bajó de 39 a 9 segundos y los catálogos de 130 a 39.
*   **🔌 Conexión: Sin Internet ya no se Queda "Preparando MozartMovil":** Con datos sin saldo o Wi-Fi sin salida, el arranque bajó de casi 2 minutos a menos de 10 segundos; la búsqueda de versión no lo detiene más de 8 segundos.
*   **🚀 Arranque: Inicio y Sesión más Rápidos:** Sin las pausas intencionales, el arranque es unos 3 segundos más rápido y el inicio de sesión unos 5.
*   **📋 Conexión: Listas Completas Fuera de la Red:** Entradas a patio y cuarto frío, salidas de recepción, reservación y traspasos ya no muestran "Sin órdenes de producción" cuando el servidor sí responde por la dirección externa.
*   **🔖 Control de Almacén: Patio y Cuarto Frío Guardan el QR Impreso:** El código de la etiqueta queda en la entrada, como en producto en proceso, para rastrear cada barrica o pallet.
*   **🔤 Ventas en Ruta: Claves de Pedido con Letras:** Venta, lector y reposición las aceptan sin reiniciarse; el código de autorización no distingue mayúsculas.
*   **📱 Licencia: Cambio de Dispositivo con el PIN de la Empresa:** Desde el menú se pide el PIN de confirmación que tiene soporte, igual que desde el inicio de sesión.



### Versión 3.8.2 Build 202609212217 (21 de septiembre, 2026, 10:17 PM)
*   **Novedades:**
    *   **🛡️ Registrar Destajos: Si un Destajo no se Puede Guardar, la Aplicación lo Dice:** Alerta, vibración, aviso "Error: al insertar localmente" y tarjeta con ✗ "Destajo no registrado" cuando la base local rechaza el registro; antes la pantalla volvía al reposo como si nada. Borrar el parcial sin red ya no falla.
    *   **🪪 Registrar Destajos: La Tarjeta no Pierde el Último Destajo:** Al despertar la pantalla, tras imprimir o tras un rechazo, la tarjeta vuelve a mostrar quién fue el último registrado y a qué hora, en vez de "Listo para escanear". Se corrigió un orden de eventos que dejaba títulos viejos y la pantalla azul sin trabajar.
    *   **🔄 Registrar Destajos: Anillo de "Trabajando" que sí se Ve:** Un anillo blanco gira alrededor del ícono, separado del círculo, mientras registra, imprime o verifica la impresora; en un rechazo se apaga y la tarjeta vuelve a blanco.
    *   **✅ Calidad: Registrar Destajos Verificado contra la Versión Anterior:** 36 escenarios se ejecutan automáticamente en el equipo real y se comparan con la versión previa a la modernización: mismas filas, diálogos, avisos y tickets.

### Versión 3.8.1 Build 202609191523 (19 de septiembre, 2026, 3:23 PM)
*   **Novedades:**
    *   **🧾 Registrar Destajos: Tarjeta de Estado en vez del Mensaje "Registrando":** Bajo el campo de lectura una tarjeta dice en qué va: azul con anillo mientras registra, ✓ verde con el nombre del empleado, hora y ficha al terminar, ✗ si se rechazó; las lecturas seguidas se ven como número grande. Mismo flujo, validaciones y sonidos de siempre; mientras está azul no entran toques ni un segundo escaneo.
    *   **🗂️ Registrar Destajos: Cabecera y Configuración en Tarjetas:** La barra muestra "Registrar destajos" con fecha y hora; la configuración va en tarjetas con la clave como chip, el nombre en oración, la tarea destacada y un lápiz en las filas que se editan con toque largo.
    *   **💬 Diálogos con el Tema:** Rechazos con ilustración, captura de cantidad, código de rastreo, lote, precio y equivalencia, ticket por empleado e intercambios usan el título y los márgenes del tema en vez de la franja azul, también fuera de destajos (reloj checador, pase de lista, tractocamión, mantenimientos).
    *   **⚡ Impresión: La Copia Sale sin Esperar Reconexión ni Drenado:** Entre copias la conexión se queda abierta y el drenado se descuenta conforme pasa; la pausa entre copias es manual en todas las impresoras, incluida Zebra.
    *   **🔁 Impresión: REIMPRIMIR desde la Venta Vuelve a Imprimir:** Recarga lo que salió en la última tanda antes de imprimir; antes no hacía nada.
    *   **🛒 Visita a Cliente: Sin Caídas al Volver de Reimpresiones:** ACEPTAR en el lector NFC/QR ya no tumba la aplicación y una sincronía que termina con la pantalla cerrada no falla.

### Versión 3.8.0 Build 202609191109 (19 de septiembre, 2026, 11:09 AM)
*   **Novedades:**
    *   **🖨️ Impresión: Cada Copia Espera a que se Corte la Anterior:** Tras el original aparece "Arranca la tira y toca Continuar" y nada más sale hasta el toque; en Zebra la aplicación además le pregunta a la impresora si ya terminó. Se acabaron las copias pegadas en un mismo trozo de papel.
    *   **⏱️ Impresión: Margen para que la Impresora Despierte:** Al conectar se espera un momento antes de enviar, para que la primera copia no salga sólo con el pie; cada conexión y cada envío fallido quedan en el historial.
    *   **🛒 Visita a Cliente: Herramientas Siempre Regresa al Lector:** Cancelar Sincronizar, Enviar datos o Actualizar datos, o entrar a Ver versiones, ya no deja la pantalla del cliente sin botones ni forma de volver a la agenda.

### Versión 3.7.1 Build 202609182230 (18 de septiembre, 2026, 10:30 PM)
*   **Novedades:**
    *   **🛡️ Sincronización: Una Descarga que no Termina ya no Detiene el Trabajo:** Antes de escribir catálogos se guarda una copia de la base; si la descarga se corta o falla al guardar, se restaura y el menú sigue funcionando con los catálogos anteriores. El fallo se muestra con Reintentar y Cerrar, y un aviso persiste una vez por sesión hasta que una descarga termine bien.
    *   **⏱️ Sincronización: Los Flujos Automáticos Corren de Corrido:** La sincronización tras una venta o un QR, el envío de datos de Tractocamión y las actualizaciones de catálogos de Tractocamión y Visita a cliente muestran el resultado un momento y se cierran solos, sin pedir Listo.
    *   **🔑 Captura de Datos en Campo: Entra Sola tras Actualizar Catálogos:** Al reiniciar después de cualquier actualización de catálogos, con credenciales recordadas la sesión inicia sin tocar Entrar y la pantalla aparece ya en "Iniciando sesión".
    *   **🎨 Diálogos Afinados:** Unidad de reparto en Tractocamión y autorización del supervisor en Agenda de ventas en ruta con el estilo de la aplicación.

### Versión 3.7.0 Build 202609181809 (18 de septiembre, 2026, 6:09 PM)
*   **Novedades:**
    *   **🔄 Sincronización: Una Pregunta, una Lista y un Resultado Claro:** Actualizar catálogos y Enviar datos explican qué van a hacer, esperan Iniciar o Enviar, muestran una lista única con ✓ por renglón y cierran con un resultado grande; si algo falla, ✗ con Reintentar. Agenda, Visita a cliente y Tractocamión usan la misma ventana.
    *   **🚀 Arranque: Transiciones Suaves y Validación dentro del Formulario:** Todo entra y sale en fundido, el anillo gira mientras trabaja, el inicio de sesión muestra cada paso (servidor, licencia con días restantes, usuario, configuración) y la despedida dice "Hasta pronto" antes de cerrar de verdad.
    *   **🛡️ Inicio de Sesión: Sin Conexión se Entra con la Información del Equipo:** Si el servidor no responde, la sesión arranca con las tablas locales; "Atrás" cierra la aplicación en lugar de reiniciarla en ciclo y el botón Ajustes de red aparece ante cualquier fallo.
    *   **🌐 Ajustes de Red: Teclado con Punto y Dos Puntos:** Al capturar la dirección del servidor el teclado numérico trae punto y dos puntos para el puerto, y cambia a texto si se escribe un dominio.

### Versión 3.6.0 Build 202609171225 (17 de septiembre, 2026, 12:25 PM)
*   **Novedades:**
    *   **🚀 Arranque: Progreso Claro desde que Abre la Aplicación:** Una pantalla de marca muestra cada comprobación, explica cualquier condición que detenga el inicio y presenta la acción para resolverla; el inicio de sesión comparte la misma experiencia y muestra en qué etapa va la validación.
    *   **🖨️ Impresoras: Configuración Bluetooth Guiada:** Una sola pantalla activa Bluetooth, busca, empareja, elige y prueba la impresora; cada equipo puede llevar un nombre propio para distinguir impresoras del mismo modelo.
    *   **🔄 Sincronización: Envío y Catálogos con Seguimiento Detallado:** La aplicación muestra las etapas de conexión, envío, descarga y guardado, con el avance de cada tabla y un resumen al terminar; también está disponible en Tractocamión, Visita a cliente y Agenda.
    *   **🌐 Conexión: Acceso Directo a Ajustes de Red:** Si no se pueden obtener los parámetros de la empresa, el aviso permite corregir las direcciones del servidor y volver a intentar sin quedar atrapado en el inicio de sesión.

### Versión 3.5.0 Build 202609152215 (15 de septiembre, 2026, 10:15 PM)
*   **Novedades:**
    *   **🧭 Configuración: Captura Guiada de IP Local e IP Externa:** Los campos de Ajustes de red validan mientras se escribe, muestran qué falta, adaptan sus reglas a IPv4 o dominio y bloquean direcciones que nunca pueden ser un servidor; el diálogo de Mantenimiento comparte la misma captura.
    *   **📡 Conexión al Servidor: Comprobación Específica de MozartWeb:** La aplicación ya no confunde cualquier equipo que responda por HTTP con el servidor; verifica MozartWeb y usa la dirección externa cuando la local apunta a otro equipo.

### Versión 3.4.2 Build 202609151353 (15 de septiembre, 2026, 1:53 PM)
*   **Novedades:**
    *   **📦 Ventas en Ruta: Catálogos Completos en Agenda y Visita a Cliente:** Si al guardar una tabla descargada ocurre un error, la descarga de inicio de sesión y "Actualizar Datos del Servidor" muestran "Descarga interrumpida" con el nombre de la tabla y ofrecen reintentar, en lugar de seguir con catálogos vacíos. "Actualizar Datos del Servidor" refresca también códigos de barras y almacenes, sin tocar el corte del día.
    *   **🚨 Inicio de Sesión: El Error que Cerró la Aplicación se Ve al Volver a Abrirla:** El aviso de caída aparece antes del diálogo de inicio de sesión, con tipo de error, mensaje y punto donde ocurrió.
    *   **⚙️ Inicio de Sesión: No Inicia Sesión sin Parámetros de la Empresa:** Si no se obtienen los parámetros ni del servidor ni de la base local, se detiene con "Algo salió mal" en vez de arrancar con parámetros en blanco.

## 📚 Documentación y Soporte

*   **Aprende a usar la aplicación:**
    Consulta nuestro [**Portal de Manuales de Infotek**](https://infotek.notion.site/Portal-de-manuales-de-Infotek-b5bc7bb7fa244d9a972dd5033aaf7bc6) para guías detalladas.

*   **¿Necesitas ayuda?**
    *   **Email:** jovany.infotek@gmail.com
    *   **WhatsApp:** (646) 237 7268
