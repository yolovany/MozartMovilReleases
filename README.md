![MozartMovil](https://raw.githubusercontent.com/yolovany/MozartMovilReleases/main/header.png)

# MozartMovil

**MozartMovil** es una aplicaciÃ³n para dispositivos Android, complementaria a nuestro sistema ERP **Mozart**, diseÃ±ada para optimizar y automatizar el control de la producciÃ³n agrÃ­cola en campo y empaque. Con MozartMovil, puedes gestionar registros de destajos, reloj checador, y movimientos de almacÃ©n (entradas y salidas) de forma Ã¡gil y directamente desde tu dispositivo mÃ³vil.

---

## 📥 Última Versión: 3.10.0 Build 202609301414

Descarga la versión más reciente para disfrutar de las últimas funcionalidades y mejoras de estabilidad.

*   **Fecha de lanzamiento:** 30 de septiembre, 2026, 02:14 PM
*   **Enlace de descarga:** [**Descargar MozartMovil 3.10.0**](https://github.com/yolovany/MozartMovilReleases/releases/download/3.10.0.2609301414/MozartMovil.Ver.3.10.0.Build.202609301414.apk)

### ✨ Novedades Principales en la Versión 3.10.0

*   **🏷️ Control de Almacén: Confirmaciones por Pasos:** La entrada muestra barricas registradas y pendientes, avanza con una palomita por cada confirmación y evita salir mientras trabaja.
*   **🔁 Control de Almacén: Reintentar sin Perder el Proceso:** Si no hay lugares libres, el aviso explica qué ocurre y permite reintentar sin cerrar ni reiniciar la operación.
*   **⚖️ Control de Almacén: Peso de la Orden Actual:** Patio y cuarto frío calculan el peso por barrica con los kilos y barricas pendientes de la orden abierta.

---

## ðŸš€ CÃ³mo Instalar

Para instalar la aplicaciÃ³n en tu dispositivo Android, sigue estos pasos:

1.  **Descarga el archivo APK** desde el [enlace de la Ãºltima versiÃ³n](#-Ãºltima-versiÃ³n-390-build-202609240009).
2.  **Habilita la instalaciÃ³n de fuentes desconocidas:**
    *   Ve a **Ajustes** > **Seguridad** en tu dispositivo.
    *   Activa la opciÃ³n **"Fuentes desconocidas"** o **"Instalar aplicaciones desconocidas"**. Este paso es necesario porque estÃ¡s instalando la app directamente y no desde la Google Play Store.
3.  **Instala el APK:**
    *   Busca el archivo `.apk` que descargaste (normalmente en la carpeta "Descargas").
    *   Toca el archivo para iniciar la instalaciÃ³n. Sigue las instrucciones en pantalla.
4.  **Â¡Listo!** Una vez instalada, encontrarÃ¡s MozartMovil en tu lista de aplicaciones.

---

## 📜 Historial de Cambios Recientes

### Versión 3.9.0 Build 202609240009 (24 de septiembre, 2026, 12:09 AM)
*   **Novedades:**
    *   **📡 Conexión: Red y arranque más rápidos fuera de la planta:** La aplicación evita esperas repetidas por la red local cuando se usa hotspot, datos móviles o una conexión sin internet.
    *   **📋 Control de Almacén: Listas completas fuera de la red:** Entradas, salidas, reservaciones y traspasos consultan por la dirección disponible y ya no aparecen vacías cuando el servidor responde.
    *   **🔖 Control de Almacén: QR impreso rastreable:** Patio y cuarto frío guardan el mismo código QR que se imprime en la etiqueta.
    *   **🔤 Ventas en Ruta: Claves de pedido con letras:** Venta, lector y reposición aceptan claves alfanuméricas sin reiniciar la aplicación.
    *   **📱 Licencia: Cambio de dispositivo con PIN:** El cambio desde el menú pide el PIN de confirmación de la empresa.

### VersiÃ³n 3.8.2 Build 202609212217 (21 de septiembre, 2026, 10:17 PM)
*   **Novedades:**
    *   **ðŸ›¡ï¸ Registrar Destajos: Si un Destajo no se Puede Guardar, la AplicaciÃ³n lo Dice:** Alerta, vibraciÃ³n, aviso "Error: al insertar localmente" y tarjeta con âœ— "Destajo no registrado" cuando la base local rechaza el registro; antes la pantalla volvÃ­a al reposo como si nada. Borrar el parcial sin red ya no falla.
    *   **ðŸªª Registrar Destajos: La Tarjeta no Pierde el Ãšltimo Destajo:** Al despertar la pantalla, tras imprimir o tras un rechazo, la tarjeta vuelve a mostrar quiÃ©n fue el Ãºltimo registrado y a quÃ© hora, en vez de "Listo para escanear". Se corrigiÃ³ un orden de eventos que dejaba tÃ­tulos viejos y la pantalla azul sin trabajar.
    *   **ðŸ”„ Registrar Destajos: Anillo de "Trabajando" que sÃ­ se Ve:** Un anillo blanco gira alrededor del Ã­cono, separado del cÃ­rculo, mientras registra, imprime o verifica la impresora; en un rechazo se apaga y la tarjeta vuelve a blanco.
    *   **âœ… Calidad: Registrar Destajos Verificado contra la VersiÃ³n Anterior:** 36 escenarios se ejecutan automÃ¡ticamente en el equipo real y se comparan con la versiÃ³n previa a la modernizaciÃ³n: mismas filas, diÃ¡logos, avisos y tickets.

### VersiÃ³n 3.8.1 Build 202609191523 (19 de septiembre, 2026, 3:23 PM)
*   **Novedades:**
    *   **ðŸ§¾ Registrar Destajos: Tarjeta de Estado en vez del Mensaje "Registrando":** Bajo el campo de lectura una tarjeta dice en quÃ© va: azul con anillo mientras registra, âœ“ verde con el nombre del empleado, hora y ficha al terminar, âœ— si se rechazÃ³; las lecturas seguidas se ven como nÃºmero grande. Mismo flujo, validaciones y sonidos de siempre; mientras estÃ¡ azul no entran toques ni un segundo escaneo.
    *   **ðŸ—‚ï¸ Registrar Destajos: Cabecera y ConfiguraciÃ³n en Tarjetas:** La barra muestra "Registrar destajos" con fecha y hora; la configuraciÃ³n va en tarjetas con la clave como chip, el nombre en oraciÃ³n, la tarea destacada y un lÃ¡piz en las filas que se editan con toque largo.
    *   **ðŸ’¬ DiÃ¡logos con el Tema:** Rechazos con ilustraciÃ³n, captura de cantidad, cÃ³digo de rastreo, lote, precio y equivalencia, ticket por empleado e intercambios usan el tÃ­tulo y los mÃ¡rgenes del tema en vez de la franja azul, tambiÃ©n fuera de destajos (reloj checador, pase de lista, tractocamiÃ³n, mantenimientos).
    *   **âš¡ ImpresiÃ³n: La Copia Sale sin Esperar ReconexiÃ³n ni Drenado:** Entre copias la conexiÃ³n se queda abierta y el drenado se descuenta conforme pasa; la pausa entre copias es manual en todas las impresoras, incluida Zebra.
    *   **ðŸ” ImpresiÃ³n: REIMPRIMIR desde la Venta Vuelve a Imprimir:** Recarga lo que saliÃ³ en la Ãºltima tanda antes de imprimir; antes no hacÃ­a nada.
    *   **ðŸ›’ Visita a Cliente: Sin CaÃ­das al Volver de Reimpresiones:** ACEPTAR en el lector NFC/QR ya no tumba la aplicaciÃ³n y una sincronÃ­a que termina con la pantalla cerrada no falla.

### VersiÃ³n 3.8.0 Build 202609191109 (19 de septiembre, 2026, 11:09 AM)
*   **Novedades:**
    *   **ðŸ–¨ï¸ ImpresiÃ³n: Cada Copia Espera a que se Corte la Anterior:** Tras el original aparece "Arranca la tira y toca Continuar" y nada mÃ¡s sale hasta el toque; en Zebra la aplicaciÃ³n ademÃ¡s le pregunta a la impresora si ya terminÃ³. Se acabaron las copias pegadas en un mismo trozo de papel.
    *   **â±ï¸ ImpresiÃ³n: Margen para que la Impresora Despierte:** Al conectar se espera un momento antes de enviar, para que la primera copia no salga sÃ³lo con el pie; cada conexiÃ³n y cada envÃ­o fallido quedan en el historial.
    *   **ðŸ›’ Visita a Cliente: Herramientas Siempre Regresa al Lector:** Cancelar Sincronizar, Enviar datos o Actualizar datos, o entrar a Ver versiones, ya no deja la pantalla del cliente sin botones ni forma de volver a la agenda.

### VersiÃ³n 3.7.1 Build 202609182230 (18 de septiembre, 2026, 10:30 PM)
*   **Novedades:**
    *   **ðŸ›¡ï¸ SincronizaciÃ³n: Una Descarga que no Termina ya no Detiene el Trabajo:** Antes de escribir catÃ¡logos se guarda una copia de la base; si la descarga se corta o falla al guardar, se restaura y el menÃº sigue funcionando con los catÃ¡logos anteriores. El fallo se muestra con Reintentar y Cerrar, y un aviso persiste una vez por sesiÃ³n hasta que una descarga termine bien.
    *   **â±ï¸ SincronizaciÃ³n: Los Flujos AutomÃ¡ticos Corren de Corrido:** La sincronizaciÃ³n tras una venta o un QR, el envÃ­o de datos de TractocamiÃ³n y las actualizaciones de catÃ¡logos de TractocamiÃ³n y Visita a cliente muestran el resultado un momento y se cierran solos, sin pedir Listo.
    *   **ðŸ”‘ Captura de Datos en Campo: Entra Sola tras Actualizar CatÃ¡logos:** Al reiniciar despuÃ©s de cualquier actualizaciÃ³n de catÃ¡logos, con credenciales recordadas la sesiÃ³n inicia sin tocar Entrar y la pantalla aparece ya en "Iniciando sesiÃ³n".
    *   **ðŸŽ¨ DiÃ¡logos Afinados:** Unidad de reparto en TractocamiÃ³n y autorizaciÃ³n del supervisor en Agenda de ventas en ruta con el estilo de la aplicaciÃ³n.

### VersiÃ³n 3.7.0 Build 202609181809 (18 de septiembre, 2026, 6:09 PM)
*   **Novedades:**
    *   **ðŸ”„ SincronizaciÃ³n: Una Pregunta, una Lista y un Resultado Claro:** Actualizar catÃ¡logos y Enviar datos explican quÃ© van a hacer, esperan Iniciar o Enviar, muestran una lista Ãºnica con âœ“ por renglÃ³n y cierran con un resultado grande; si algo falla, âœ— con Reintentar. Agenda, Visita a cliente y TractocamiÃ³n usan la misma ventana.
    *   **ðŸš€ Arranque: Transiciones Suaves y ValidaciÃ³n dentro del Formulario:** Todo entra y sale en fundido, el anillo gira mientras trabaja, el inicio de sesiÃ³n muestra cada paso (servidor, licencia con dÃ­as restantes, usuario, configuraciÃ³n) y la despedida dice "Hasta pronto" antes de cerrar de verdad.
    *   **ðŸ›¡ï¸ Inicio de SesiÃ³n: Sin ConexiÃ³n se Entra con la InformaciÃ³n del Equipo:** Si el servidor no responde, la sesiÃ³n arranca con las tablas locales; "AtrÃ¡s" cierra la aplicaciÃ³n en lugar de reiniciarla en ciclo y el botÃ³n Ajustes de red aparece ante cualquier fallo.
    *   **ðŸŒ Ajustes de Red: Teclado con Punto y Dos Puntos:** Al capturar la direcciÃ³n del servidor el teclado numÃ©rico trae punto y dos puntos para el puerto, y cambia a texto si se escribe un dominio.

### VersiÃ³n 3.6.0 Build 202609171225 (17 de septiembre, 2026, 12:25 PM)
*   **Novedades:**
    *   **ðŸš€ Arranque: Progreso Claro desde que Abre la AplicaciÃ³n:** Una pantalla de marca muestra cada comprobaciÃ³n, explica cualquier condiciÃ³n que detenga el inicio y presenta la acciÃ³n para resolverla; el inicio de sesiÃ³n comparte la misma experiencia y muestra en quÃ© etapa va la validaciÃ³n.
    *   **ðŸ–¨ï¸ Impresoras: ConfiguraciÃ³n Bluetooth Guiada:** Una sola pantalla activa Bluetooth, busca, empareja, elige y prueba la impresora; cada equipo puede llevar un nombre propio para distinguir impresoras del mismo modelo.
    *   **ðŸ”„ SincronizaciÃ³n: EnvÃ­o y CatÃ¡logos con Seguimiento Detallado:** La aplicaciÃ³n muestra las etapas de conexiÃ³n, envÃ­o, descarga y guardado, con el avance de cada tabla y un resumen al terminar; tambiÃ©n estÃ¡ disponible en TractocamiÃ³n, Visita a cliente y Agenda.
    *   **ðŸŒ ConexiÃ³n: Acceso Directo a Ajustes de Red:** Si no se pueden obtener los parÃ¡metros de la empresa, el aviso permite corregir las direcciones del servidor y volver a intentar sin quedar atrapado en el inicio de sesiÃ³n.

### VersiÃ³n 3.5.0 Build 202609152215 (15 de septiembre, 2026, 10:15 PM)
*   **Novedades:**
    *   **ðŸ§­ ConfiguraciÃ³n: Captura Guiada de IP Local e IP Externa:** Los campos de Ajustes de red validan mientras se escribe, muestran quÃ© falta, adaptan sus reglas a IPv4 o dominio y bloquean direcciones que nunca pueden ser un servidor; el diÃ¡logo de Mantenimiento comparte la misma captura.
    *   **ðŸ“¡ ConexiÃ³n al Servidor: ComprobaciÃ³n EspecÃ­fica de MozartWeb:** La aplicaciÃ³n ya no confunde cualquier equipo que responda por HTTP con el servidor; verifica MozartWeb y usa la direcciÃ³n externa cuando la local apunta a otro equipo.

### VersiÃ³n 3.4.2 Build 202609151353 (15 de septiembre, 2026, 1:53 PM)
*   **Novedades:**
    *   **ðŸ“¦ Ventas en Ruta: CatÃ¡logos Completos en Agenda y Visita a Cliente:** Si al guardar una tabla descargada ocurre un error, la descarga de inicio de sesiÃ³n y "Actualizar Datos del Servidor" muestran "Descarga interrumpida" con el nombre de la tabla y ofrecen reintentar, en lugar de seguir con catÃ¡logos vacÃ­os. "Actualizar Datos del Servidor" refresca tambiÃ©n cÃ³digos de barras y almacenes, sin tocar el corte del dÃ­a.
    *   **ðŸš¨ Inicio de SesiÃ³n: El Error que CerrÃ³ la AplicaciÃ³n se Ve al Volver a Abrirla:** El aviso de caÃ­da aparece antes del diÃ¡logo de inicio de sesiÃ³n, con tipo de error, mensaje y punto donde ocurriÃ³.
    *   **âš™ï¸ Inicio de SesiÃ³n: No Inicia SesiÃ³n sin ParÃ¡metros de la Empresa:** Si no se obtienen los parÃ¡metros ni del servidor ni de la base local, se detiene con "Algo saliÃ³ mal" en vez de arrancar con parÃ¡metros en blanco.

### VersiÃ³n 3.4.1 Build 202609151051 (15 de septiembre, 2026, 10:51 AM)
*   **Novedades:**
    *   **ðŸ–¨ï¸ Mantenimientos: Comprobante Completo en Cualquier Zebra:** El comprobante se centra en el papel y cabe igual en RW420, ZQ510 y ZQ520: el encabezado y el folio ya no salen recortados, el domicilio se parte por palabra, FOLIO y CLIENTE van cada uno en su propio renglÃ³n y el nombre del cliente no se repite. La impresiÃ³n en la SM58XX no cambia.
    *   **ðŸ½ï¸ Reloj Checador: Comida y Descanso con la Tarea del Departamento:** El registro masivo de tiempos desde captura de campo, la ediciÃ³n de tiempos en el resumen y los destajos por descanso usan la tarea de comida y descanso del departamento del empleado, como ya hacÃ­a el reloj; editar un tiempo en el resumen ya no reescribe un descanso correcto con la tarea de la empresa.

### VersiÃ³n 3.4.0 Build 202609141235 (14 de septiembre, 2026, 12:35 PM)
*   **Novedades:**
    *   **ðŸ—‚ï¸ Control de AlmacÃ©n: Bajas de RecepciÃ³n con Seguimiento:** Dar de baja una recepciÃ³n envÃ­a una solicitud al servidor y la aplicaciÃ³n muestra su avance en una lÃ­nea de tiempo por documento y etapa hasta que el sistema la confirma, con lista de solicitudes, motivo, errores de red visibles y acceso directo para registrar de nuevo la recepciÃ³n.
    *   **ðŸ¢ Control de AlmacÃ©n: Sin Pantallas Congeladas con el Servidor Lento:** Patio, cuarto frÃ­o, descuentos y traspasos consultan al servidor fuera del hilo de pantalla, y elegir Patio sin un almacÃ©n de transiciÃ³n permitido ya no cierra la aplicaciÃ³n.
    *   **ðŸ­ Control de AlmacÃ©n: Descuentos y Consulta RÃ¡pida:** La orden de producciÃ³n se elige con un botÃ³n y un diÃ¡logo con bÃºsqueda, y el historial de cÃ³digos se abre desde un enlace.
    *   **ðŸ›Ÿ Captura de ArtÃ­culos: Nada se Pierde si la AplicaciÃ³n se Cae:** Las caÃ­das quedan registradas, la aplicaciÃ³n se reinicia y avisa que la captura quedÃ³ guardada; lo capturado se escribe de forma segura ante cortes de energÃ­a.
    *   **ðŸ“ Captura de ArtÃ­culos: Borrador por MÃ³dulo:** Cada mÃ³dulo guarda su propia captura pendiente y al entrar ofrece continuarla o iniciar una nueva; el botÃ³n AtrÃ¡s permite Seguir capturando, Conservar o Descartar.
    *   **ðŸŽ¯ Captura de ArtÃ­culos: Escaneo Confiable:** Un escaneo a la vez, CONTINUAR siempre responde, un doble toque ya no registra el movimiento dos veces y el guardado deja de hacerse lento conforme crece la lista.
    *   **ðŸ“´ Reloj Checador: Modo Local sin Falsas Fallas de ConexiÃ³n:** No tener registros en modo local abre directamente el diÃ¡logo de prorrateo.
    *   **âœ¨ Nueva Apariencia: Un Solo Estilo:** Tema unificado con paleta de marca, menÃºs y listas en tarjetas, barra de tÃ­tulo clara y botÃ³n principal destacado en cada pantalla.

### VersiÃ³n 3.3.0 Build 202609101248 (10 de septiembre, 2026, 12:48 PM)
*   **Novedades:**
    *   **ðŸ” Asistencia: Bloqueos por Inasistencia mÃ¡s Claros:** Reloj checador, destajos y pase de lista respetan el bloqueo calculado para cada empleado; el diÃ¡logo indica la Ãºltima asistencia y el nÃºmero de faltas antes de pedir autorizaciÃ³n, y marcar que ayer no se trabajÃ³ libera Ãºnicamente a quienes faltaron ese dÃ­a.
    *   **âœ… Registro de Tiempos: Una Sola ConfirmaciÃ³n:** Entrada, salida, comida y cambio de centro de costos muestran una confirmaciÃ³n consolidada con fecha, hora y empleados permitidos; los empleados sin pase de lista, contrato o autorizaciÃ³n se distinguen antes de escribir movimientos.
    *   **ðŸ§¾ Registro de Tiempos: Resultados en el Orden de la OperaciÃ³n:** El resumen presenta tarea y tabla de prorrateo en el orden en que participan en el reloj y se adapta a la configuraciÃ³n de cada empresa.
    *   **ðŸ–¨ï¸ Mantenimientos: ImpresiÃ³n Estable y Copias Identificadas:** Registrar imprime ORIGINAL, COPIA CLIENTE y COPIA RESPALDO; las reimpresiones permiten de una a cinco copias identificadas como DUPLICADO; registro e impresiÃ³n trabajan en segundo plano; y la captura ofrece Ãºnicamente el departamento de mantenimiento.
    *   **ðŸ‘ CatÃ¡logos: ConfirmaciÃ³n al Terminar la Descarga:** Rondines y TractocamiÃ³n avisan cuando la actualizaciÃ³n concluye correctamente, y las inasistencias se descargan con la ventana configurada para la empresa.

### VersiÃ³n 3.2.1 Build 202609081254 (8 de septiembre, 2026, 12:54 PM)
*   **Novedades:**
    *   **ðŸ©¹ TractocamiÃ³n: Los Clientes Vuelven a Abrirse en Mantenimientos:** El paquete comprimido de catÃ¡logos armaba la tabla de clientes sin equipos ni rutas; ahora el equipo revisa el paquete antes de reemplazar sus catÃ¡logos y, si llega recortado, lo descarta y baja tabla por tabla.
    *   **ðŸ“¥ TractocamiÃ³n: Doce CatÃ¡logos que no Estaban Bajando:** El camino de respaldo identificaba las tablas por su posiciÃ³n y dejÃ³ de traer doce catÃ¡logos; ahora cada tabla se identifica por su nombre, se agregan rutas 2 y tractocamiÃ³n, y la descarga comprimida espera lo mismo que la de ventas en ruta.
    *   **ðŸ›¡ï¸ Venta en Ruta: La Descarga de la Agenda, a Prueba del Mismo Tropiezo:** Las 35 tablas de la agenda se identifican por nombre y se verificaron completas contra el servidor.

### VersiÃ³n 3.2.0 Build 202609072114 (7 de septiembre, 2026, 9:14 PM)
*   **Novedades:**
    *   **ðŸ§¾ Reimpresiones: Documentos de DÃ­as Pasados:** El mÃ³dulo ya dejaba elegir la fecha, pero al pedir un documento anterior no imprimÃ­a nada. Ahora repone remisiones de venta y recibos de cobranza de cualquier dÃ­a, marcados como REIMPRESION, y tambiÃ©n de clientes que ya no van en la ruta. Una remisiÃ³n cancelada no se reimprime.
    *   **ðŸš€ Venta en Ruta: Descarga de CatÃ¡logos en Dos Segundos:** Entrar a visita a cliente descargaba tabla por tabla y escribÃ­a renglÃ³n por renglÃ³n. Ahora es un solo envÃ­o comprimido y una transacciÃ³n por tabla, con las mismas tablas y los mismos datos de antes.
    *   **âš ï¸ Cobranza: Aviso de Cobros Previos:** Antes de guardar un cobro se muestran los que esa factura ya tiene registrados, con fecha, importe, forma de pago y quiÃ©n los cobrÃ³. No bloquea: los abonos parciales siguen igual.
    *   **ðŸ–¨ï¸ Comprobantes mÃ¡s Cuidados:** El pagarÃ© imprime el importe con el mismo formato que el total del ticket y su cantidad con letra sale del mismo nÃºmero; los datos del cliente se acomodan al ancho del papel; el bloque de saldos dice a quÃ© fecha corresponde; y el cobro de una factura ya liquidada vuelve a imprimirse.
    *   **ðŸ“… RecepciÃ³n: La Fecha al Frente de la Referencia de Lote:** La referencia pasa de terminar con la fecha a empezar con ella en formato `aammdd`, para que el orden alfabÃ©tico refleje la antigÃ¼edad. NingÃºn lote ya emitido se toca y la geometrÃ­a de las etiquetas no cambia.
    *   **ðŸ“¡ ImpresiÃ³n por Bluetooth: Una Sola ConexiÃ³n por Tanda:** La impresiÃ³n abrÃ­a y cerraba la conexiÃ³n entre copias y ahÃ­ se perdÃ­an tiras a medias. Ahora es una sola conexiÃ³n, y si una tanda falla a medias el aviso dice cuÃ¡ntas copias salieron y el reintento continÃºa desde la que falta.
    *   **ðŸ”§ Mantenimientos: Estabilidad, Encabezado y Legibilidad:** Se corrigen tres cierres inesperados al cambiar de pestaÃ±a, guardar e imprimir; el encabezado del ticket se baja junto con los catÃ¡logos y avisa con reintento si falta; y la lista de servicios encabeza con el cliente, fecha, equipo, tareas e importe.
    *   **ðŸš› TractocamiÃ³n: Bluetooth AutomÃ¡tico y Flujo Correcto:** El bluetooth se enciende solo al entrar al mÃ³dulo y sÃ³lo se apaga si fue la aplicaciÃ³n quien lo encendiÃ³. Mantenimientos y Descarga ya no terminan pidiendo el origen de la carga al reanudar.

### VersiÃ³n 3.1.0 Build 202609021354 (2 de septiembre, 2026, 1:54 PM)
*   **Novedades:**
    *   **ðŸŽ¯ Etiquetas de Lote: La Variante se Elige Donde se Imprime:** El selector deja de vivir sÃ³lo en ConfiguraciÃ³n y aparece en el generador de etiquetas y en el diÃ¡logo de confirmaciÃ³n al registrar una entrada. Es el mismo ajuste visto desde los tres puntos.
    *   **ðŸ†• Etiquetas de Lote: Tres Presentaciones del Nuevo Rollo Preimpreso:** Segunda etiqueta preimpresa, con el bloque de lote abajo, vertical, o en las dos posiciones a la vez. Las tres comparten rollo y una sola calibraciÃ³n.
    *   **ðŸ–¨ï¸ Mantenimientos: Ticket en Impresoras SM58XX:** El ticket se armaba siempre para impresoras CPCL y en una SM58XX salÃ­an los comandos impresos como texto. Ahora se detecta el modelo, al guardar y al reimprimir.
    *   **ðŸ› ï¸ Correcciones:** La variante de lote deja de compartir ajuste con el tamaÃ±o de la etiqueta de QR de producto en proceso, que producÃ­a una etiqueta en blanco sin aviso; se corrige el centrado del bloque de lote, y la calibraciÃ³n pasa a guardarse por rollo.

### VersiÃ³n 3.0.0 Build 202609011240 (1 de septiembre, 2026, 12:40 PM)
*   **Novedades:**
    *   **ðŸ§‘â€ðŸŒ¾ Destajos: Captura con la Cuadrilla Mezclada:** El operador escanea a toda su gente sin elegir empresa ni cerrar sesiÃ³n; el prefijo del gafete identifica la empresa del empleado y el destajo se registra ahÃ­, con el precio de su catÃ¡logo.
    *   **ðŸ“‹ Pase de Lista y SelecciÃ³n de Empleados:** La lista trae a toda la cuadrilla mezclada y ordenada por apellido, las operaciones masivas alcanzan a todos, y dos empleados de distinta empresa con el mismo nÃºmero ya se distinguen entre sÃ­.
    *   **â° Reloj Checador: Registro Masivo con Cuadrilla Mixta:** Cada movimiento queda en la empresa del empleado con el horario de su jornada; el resumen, las bÃºsquedas, la ediciÃ³n y el deshacer un lote trabajan sobre la cuadrilla completa.
    *   **ðŸ–¨ï¸ Tickets con la Cuadrilla Completa:** El corte, su reimpresiÃ³n, el corte general y la tira de acumulados salen con toda la gente, cada quien con su nombre, tarifa y destajos.
    *   **âœ… Aviso cuando los CatÃ¡logos no Coinciden:** Al terminar la descarga se revisa que los catÃ¡logos que alimentan el destajo signifiquen lo mismo en todas las empresas, y se pide corregirlo en Mozart antes de operar.
    *   **ðŸ” Departamento, Puesto y NÃ³mina de Cada Empresa:** Estos datos salen del propio empleado y no de la configuraciÃ³n de la empresa principal.
    *   **ðŸ·ï¸ Etiquetas: Lote sobre el Rollo Preimpreso de 4"x6":** La lotificaciÃ³n se imprime sobre el espacio en blanco del rollo en lugar de pegarle encima el vinilo, con calibraciÃ³n de posiciÃ³n independiente por tamaÃ±o de etiqueta.
    *   **ðŸ”§ Mantenimientos: Nombre Comercial en el Ticket:** El ticket imprime el nombre comercial del cliente, al guardar y al reimprimir.
    *   **ðŸ› ï¸ Correcciones:** Descarga de catÃ¡logos sin interrupciones intermitentes, llave de supervisor del reloj funcional de nuevo, bloqueo de operaciones con descarga incompleta y correcciÃ³n de cierres inesperados al eliminar destajos e imprimir.

### VersiÃ³n 2.14.0 Build 202608121120 (12 de agosto, 2026, 11:20 AM)
*   **Novedades:**
    *   **ðŸ”§ Mantenimientos: SelecciÃ³n de Equipo por Escaneo:** El tÃ©cnico escanea el cÃ³digo pegado en el equipo (serie o clave) en lugar de buscarlo en la lista, con confirmaciÃ³n en pantalla del equipo seleccionado y solicitud de permiso de cÃ¡mara al momento de usarla.
    *   **ðŸ“‹ Mantenimientos: Lista de Equipos Real del Cliente:** La lista se arma desde el catÃ¡logo de EQUIPOS, donde el flujo de comodatos de MozartWeb asigna y retira, evitando equipos ya retirados y ausencias de los reciÃ©n asignados.
    *   **ðŸšª Reloj Checador: Quitar Empleado de la Lista sin Movimiento:** Manteniendo presionado su renglÃ³n se quita de la lista al empleado escaneado por error, con opciÃ³n de eliminar los tiempos de la jornada en curso, abarcando las dos fechas en jornadas nocturnas.
    *   **âœ… Reloj Checador: SelecciÃ³n de Empleados Confiable:** La deselecciÃ³n al registrar un tiempo ocurre una sola vez, en lÃ­nea y fuera de lÃ­nea, con reconciliaciÃ³n por Ãºltimo movimiento al abrir el mÃ³dulo y correcciÃ³n de respaldos de consulta invertidos.
    *   **â†©ï¸ Reloj Checador: Revertir una SALIDA Restaura el Estado Previo:** Los empleados afectados vuelven a quedar seleccionados con su tabla de prorrateo y se restauran las horas de pase de lista de destajos.
    *   **ðŸ·ï¸ Cambio de Orden: Etiquetas QR Nuevas y Bloqueo de ReÃºso:** Se generan cÃ³digos QR ligados a la referencia del traspaso de retorno, se conserva la ubicaciÃ³n original de cada barrica y se rechazan etiquetas ya usadas como origen de un traspaso.

### VersiÃ³n 2.13.1 Build 202607150113 (15 de julio, 2026, 1:13 AM)
*   **Novedades:**
    *   **ðŸŒ¸ ProducciÃ³n FLOWERS: Desfase de Fecha en Movimientos:** Ajuste de fecha configurable (-2 a +2 dÃ­as) exclusivo para FLOWERS, aplicable a entradas y traspasos abiertos desde producciÃ³n, validado contra el servidor con respaldo local y remoto.
    *   **ðŸ” Destajos Prorrateados: RepeticiÃ³n Solo por Gafete:** Escanear el gafete permite registrar un destajo prorrateado repetido para el empleado, evitando la restricciÃ³n de la lista que excluye a quienes ya tienen uno registrado hoy.
    *   **ðŸš« Reloj Checador: CorrecciÃ³n de Filtro por Puesto:** Cada registro ahora conserva y se filtra por el puesto que tenÃ­a al momento de capturarse, en lugar de reasignarse retroactivamente al puesto actual.
    *   **ðŸ”“ Acceso a ConfiguraciÃ³n al Fallar la ValidaciÃ³n de Fecha:** Cuando el servidor no responde y la validaciÃ³n de fecha estÃ¡ activa, se ofrece un acceso directo a configuraciÃ³n para desactivarla con la contraseÃ±a de autorizaciÃ³n.
    *   **ðŸ·ï¸ ProducciÃ³n: Renombre de Etiqueta de MenÃº:** "Orden de barricas" ahora se refleja como "orden de producciÃ³n" en el menÃº.

### VersiÃ³n 2.13.0 Build 202606241953 (24 de junio, 2026, 7:53 PM)
*   **Novedades:**
    *   **ðŸ§¹ Destajos Prorrateados: DistribuciÃ³n de Costos Mejorada:** El prorrateo de gastos de limpieza ahora tambiÃ©n considera registros de asistencia (reloj checador), no solo destajos, logrando una distribuciÃ³n mÃ¡s completa. Los destajos prorrateados generados aparecen en el historial del empleado.
    *   **ðŸš« Destajos Prorrateados: Bloqueo de Empleados sin Salida:** Empleados con entrada de reloj checador sin salida se marcan como "SIN SALIDA" y no pueden seleccionarse para prorrateo, tanto al cargar la lista como al escanear gafetes.
    *   **ðŸ“‹ Recepciones: Nuevo Campo de Folio de RemisiÃ³n:** Nuevo campo numÃ©rico para capturar el folio de remisiÃ³n durante la recepciÃ³n, visible en la confirmaciÃ³n y guardado con la entrada del artÃ­culo.
    *   **â±ï¸ Pase de Lista: Tarea EspecÃ­fica del Empleado:** Al registrar entrada desde pase de lista, se asigna la tarea propia del empleado si la tiene configurada; de lo contrario se usa la tarea general.

### VersiÃ³n 2.12.2 Build 202606160904 (16 de junio, 2026, 9:04 AM)
*   **Novedades:**
    *   **âš¡ Traspasos: ValidaciÃ³n de Costos mÃ¡s Eficiente:** La consulta de costos de la barrica al servidor ahora solo se realiza cuando el almacÃ©n origen tiene activa la restricciÃ³n de no permitir salidas sin costo, agilizando la operaciÃ³n y reduciendo los tiempos de espera al escanear.

### VersiÃ³n 2.12.1 Build 202606151350 (15 de junio, 2026, 1:50 PM)
*   **Novedades:**
    *   **ðŸ­ Traspasos: Control de Costos por AlmacÃ©n:** La restricciÃ³n que impedÃ­a traspasar barricas sin costo ahora se puede activar o desactivar por almacÃ©n, permitiendo que cada uno tenga su propia polÃ­tica segÃºn su operaciÃ³n.
    *   **â„ï¸ CorrecciÃ³n en Cuarto FrÃ­o y Traspasos:** Se corrigiÃ³ la validaciÃ³n de artÃ­culos contra grupos incorrectos en cuarto frÃ­o y se reconocen correctamente los grupos de patio, producto en proceso y cuarto frÃ­o en traspasos.
    *   **â±ï¸ Pase de Lista: Entrada AutomÃ¡tica Mejorada:** Al escanear un gafete desde el pase de lista de destajos, el sistema registra automÃ¡ticamente la entrada del empleado en el reloj checador, incluso si la entrada fue eliminada previamente del historial.
    *   **ðŸ”§ Entradas de Producto: Mejor BÃºsqueda de Referencias:** Se corrigiÃ³ la bÃºsqueda de referencias de entradas de producto en proceso y producto terminado, recurriendo automÃ¡ticamente al servidor de respaldo cuando la bÃºsqueda inicial no encuentra resultados.

---

