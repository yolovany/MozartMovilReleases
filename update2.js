[
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//                                                                      ARCHIVO DE CONTROL                                                          		        //
	//                                       Archivo para el control de versiones de la aplicación MozartMovil y MozartWebServices	                                    //
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

        // Información de la clase UpdateInfo2.
 		    // - VersionCode: código de versión escrito en el manifiesto.
 		    // - VersionName: nombre de versión escrito en el manifiesto.
 		    // - DownloadURL: url del archivo de instalación a descargar.
 		    // - Size: tamaño en bytes del instalador a descargar.
            // - Companies: arreglo de empresas que aplican para actualización.
 		    // - Users: arreglo de usuarios de las empresas que aplican para actualización.
 		    // - MasterKey: Contraseña para acceso con licencia temporal de 1 día. Para que la MasterKey funcione debe estar en GLOBALES o en la empresa actual.
 		    // - ApiLevels: arreglo de números de API correspondiente a la versión de Android.
 		    // - BuildVersion: Número de compilación (revisión) en formato YYYYMMDDHHMM.
 		    // - DevicesSerialNumbers: Arreglo de números seriales de dispositivos móviles admitidos.
 		    // - ScheduleDateRelease: String que indica la fecha de lanzamiento programada en formato YYYY-MM-DD.
 		    // - ReleasesNotesURL: Enlace de las notas de versión en Github.
 		    // - Required: booleano para especificar si la actualización es requerida.
 		    // - NotificationEmails: Arreglo de correos electrónicos que recibirán correo de notificación de MozartMovil (beta).
 		    // - ErrorEmails: Arreglo de correos electrónicos que recibirán correo de notificación de MozartMovil cuando falle (beta).
 		    // - DisableEmailNotifications: booleano para activar o inactivar envío de notificaciones por correo desde MozartMovil.
 		    // - PayConditions: Esta clase la utiliza especificarle a MozartWebServices el número de movimientos para considerar un dispositivo como parte de la factura del mes.
 		    // - SerialDeviceFormats: Se utiliza para la validación de números seriales de dispositivos en MozartMovil.


	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//                                                          CONTROL DE ACTUALIZACIONES POR EMPRESA                                                                  //
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

			// IMPORTANTE:
			// NO BORRAR NINGUNA EMPRESA PARA EVITAR FALLAS EN MOZARTMOVIL Y MOZARTWEBSERVICES.
			{
				"CommonName":"RANCHO NUEVO",
				"VersionCode":246,
				"VersionName":"2.4.6",
				"BuildVersion":2023121511052,
				"DownloadURL":"https://github.com/yolovany/MozartMovilReleases/releases/download/2.4.6.2311290155/MozartMovil.Ver.2.4.6.Build.2023121511052.apk",
				"ReleasesNotesURL":"https://github.com/yolovany/MozartMovilReleases/releases/tag/2.4.6.2311290155",
				"Size":51559721,
				"Companies":["RANCHO_NUEVO"],
				"EnableSimultaneousScanLock":false,
				"MasterKey":"Mozart2010"
			},
			{
				"CommonName":"FLOWERS",
				"VersionCode":251,
				"VersionName":"2.5.1",
				"BuildVersion":2024041510581,
				"DownloadURL":"https://github.com/yolovany/MozartMovilReleases/releases/download/2.5.1.24041510581/MozartMovil.Ver.2.5.1.Build.2024041510581.apk",
				"ReleasesNotesURL":"https://github.com/yolovany/MozartMovilReleases/releases/tag/2.5.1.24041510581",
				"Size":24973608,
				"EnableSimultaneousScanLock":false,
				"Companies":["FLOWERS"],
				"MasterKey":"Mozart2010"
			},
			{
				"CommonName":"RANCHO EDGARMUNGUIA",
				"VersionCode":246,
				"VersionName":"2.4.6",
				"BuildVersion":2023121511052,
				"DownloadURL":"https://github.com/yolovany/MozartMovilReleases/releases/download/2.4.6.2311290155/MozartMovil.Ver.2.4.6.Build.2023121511052.apk",
				"ReleasesNotesURL":"https://github.com/yolovany/MozartMovilReleases/releases/tag/2.4.6.2311290155",
				"Size":51559721,
				"EnableSimultaneousScanLock":false,
				"Companies":["EDGARMUNGUIA"],
				"MasterKey":"Mozart2010"
			},
			{
				"CommonName":"AGRÍCOLA NKR",
				"VersionCode":0,
				"VersionName":"0.0.0",
				"BuildVersion":0,
				"DownloadURL":"https://github.com/yolovany/MozartMovilReleases/releases/download/2.3.6.2210211915/MozartMovil.Ver.2.3.6.Build.202210211915.apk",
				"ReleasesNotesURL":"https://github.com/yolovany/MozartMovilReleases/releases/tag/2.3.6.2210211915",
				"Size":49825908,
				"EnableSimultaneousScanLock":false,
				"Companies":["AGRICOLA_NKR"],
				"MasterKey":"Mozart2010"
			},
			{   "CommonName":"RANCHO HH AND SONS",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
				"VersionCode":0,
				"VersionName":"0.0.0",
				"BuildVersion":0,
				"DownloadURL":"https://github.com/yolovany/MozartMovilReleases/releases/download/2.3.6.2210211915/MozartMovil.Ver.2.3.6.Build.202210211915.apk",
				"ReleasesNotesURL":"https://github.com/yolovany/MozartMovilReleases/releases/tag/2.3.6.2210211915",
				"Size":49825908,
				"EnableSimultaneousScanLock":false,
				"Companies":["HH_SONS","EL_ENCANTO"],
				"MasterKey":"Mozart2010"
			},
			{
				"CommonName":"RANCHO DOS MARES",
				"VersionCode":0,
				"VersionName":"0.0.0",
				"BuildVersion":0,
				"DownloadURL":"https://github.com/yolovany/MozartMovilReleases/releases/download/2.4.5.2310101546/MozartMovil.Ver.2.4.5.Build.2023101015462.apk",
				"ReleasesNotesURL":"https://github.com/yolovany/MozartMovilReleases/releases/tag/2.4.5.2310101546",
				"Size":51071864,
				"EnableSimultaneousScanLock":false,
				"Companies":["DOSMARES"],
				"MasterKey":"Mozart2010"
			},
			{	
				"CommonName":"RANCHO SECO",
				"VersionCode":0,
				"VersionName":"0.0.0",
				"BuildVersion":0,
				"DownloadURL":"https://github.com/yolovany/MozartMovilReleases/releases/download/2.3.6.2210211915/MozartMovil.Ver.2.3.6.Build.202210211915.apk",
				"ReleasesNotesURL":"https://github.com/yolovany/MozartMovilReleases/releases/tag/2.3.6.2210211915",
				"Size":49825908,
				"EnableSimultaneousScanLock":false,
				"Companies":["AFRAGARIA2019","FFPRODUCTORES","HORTALIZAS2019","RS2019"],
				"MasterKey":"Mozart2010"
			},
			{
				"CommonName":"AGRÍCOLA VEMA",
				"VersionCode":0,
				"VersionName":"0.0.0",
				"BuildVersion":0,
				"DownloadURL":"https://github.com/yolovany/MozartMovilReleases/releases/download/2.3.6.2210211915/MozartMovil.Ver.2.3.6.Build.202210211915.apk",
				"ReleasesNotesURL":"https://github.com/yolovany/MozartMovilReleases/releases/tag/2.3.6.2210211915",
				"Size":49825908,
				"EnableSimultaneousScanLock":false,
				"Companies":["VEMA","AGRICOLA_HNOS_VEGA"],
				"MasterKey":"Mozart2010"
			},
			{
				"CommonName":"RANCHO HERMANOS MAGAÑA",
				"VersionCode":0,
				"VersionName":"0.0.0",
				"BuildVersion":0,
				"DownloadURL":"https://github.com/yolovany/MozartMovilReleases/releases/download/2.4.5.2310101546/MozartMovil.Ver.2.4.5.Build.2023101015461.apk",
				"ReleasesNotesURL":"https://github.com/yolovany/MozartMovilReleases/releases/tag/2.4.5.2310101546",
				"Size":51071864,
				"EnableSimultaneousScanLock":false,
				"DevicesSerialNumbers":["21263523022243","22164523020204"],
				"Companies":["MAGANA2016"],
				"MasterKey":"Mozart2010"
			},
			{
				"CommonName":"RANCHO SAN RAFAEL",
				"VersionCode":0,
				"VersionName":"0.0.0",
				"BuildVersion":0,
				"DownloadURL":"https://github.com/yolovany/MozartMovilReleases/releases/download/2.2.2.2201041215/MozartMovil.Ver.2.2.2.Build.202201041215.apk",
				"ReleasesNotesURL":"https://github.com/yolovany/MozartMovilReleases/releases/tag/2.2.2.2201041215",
				"Size":49403598,
				"EnableSimultaneousScanLock":false,
				"Companies":["SANRAFAEL"],
				"MasterKey":"Mozart2010"
			},
			{
				"CommonName":"RANCHO DON JUANITO",
				"VersionCode":0,
				"VersionName":"0.0.0",
				"BuildVersion":0,
				"DownloadURL":"https://github.com/yolovany/MozartMovilReleases/releases/download/2.4.3.2307191316/MozartMovil.Ver.2.4.3.Build.2023071913161.apk",
				"ReleasesNotesURL":"https://github.com/yolovany/MozartMovilReleases/releases/tag/2.4.3.2307191316",
				"Size":50866820,
				"EnableSimultaneousScanLock":false,
				"Companies":["RDJ2016"],
				"MasterKey":"Mozart2010"
			},
			{
				"CommonName":"RANCHO SANTA MONICA",
				"VersionCode":0,
				"VersionName":"0.0.0",
				"BuildVersion":0,
				"DownloadURL":"https://github.com/yolovany/MozartMovilReleases/releases/download/2.4.0.2304111523/MozartMovil.Ver.2.4.0.Build.2023041115232.apk",
				"ReleasesNotesURL":"https://github.com/yolovany/MozartMovilReleases/releases/tag/2.4.0.2304111523",
				"Size":50489901,
				"EnableSimultaneousScanLock":false,
				"Companies":["SANTAMONICA"],
				"DevicesSerialNumbers":["B10C90BB4D363C11","R52MA0ZGBKJ","R52MA0ZHAJF","R52N81FLB8P","V790202011000498"],
				"MasterKey":"Mozart2010"
			},
			{
				"CommonName":"MERCADOS EL ROBLE",
				"VersionCode":247,
				"VersionName":"2.4.7",
				"BuildVersion":2024010612230,
				"DownloadURL":"https://github.com/yolovany/MozartMovilReleases/releases/download/2.4.7.24010612230/MozartMovil.Ver.2.4.7.Build.2024010612230.apk",
				"ReleasesNotesURL":"https://github.com/yolovany/MozartMovilReleases/releases/tag/2.4.7.24010612230",
				"Size":51559721,
				"EnableSimultaneousScanLock":false,
				"Companies":["DISTRIB_NOROESTE"],
				"MasterKey":"Mozart2010"
			},
			{
				"CommonName":"PUREANDCLEAR",
				"VersionCode":254,
				"VersionName":"2.5.4",
				"BuildVersion":2024110714301,
				"DownloadURL":"https://github.com/yolovany/MozartMovilReleases/releases/download/2.5.4.24110714301/MozartMovil.Ver.2.5.4.Build.2024110714301.apk",
				"ReleasesNotesURL":"https://github.com/yolovany/MozartMovilReleases/releases/tag/2.5.4.24110714301",
				"Size":24998367,
				"EnableSimultaneousScanLock":false,
				"Companies":["PUREANDCLEAR","YUMAWATERCO"],
				"MasterKey":"Mozart2010"
			},
			{
				"CommonName":"CRISTAPURO",
				"VersionCode":0,
				"VersionName":"0.0.0",
				"BuildVersion":0,
				"DownloadURL":"https://github.com/yolovany/MozartMovilReleases/releases/download/2.1.9.2110291915/MozartMovil.Ver.2.1.9.Build.202110291915.apk",
				"ReleasesNotesURL":"https://github.com/yolovany/MozartMovilReleases/releases/tag/2.1.9.2110291915",
				"Size":49543184,
				"EnableSimultaneousScanLock":false,
				"Companies":["CRISTA","QI"],
				"MasterKey":"Mozart2010"
			},
			{
				"CommonName":"AGRÍCOLA FRUVAS",
				"VersionCode":246,
				"VersionName":"2.4.6",
				"BuildVersion":2024012321502,
				"DownloadURL":"https://github.com/yolovany/MozartMovilReleases/releases/download/2.4.7.24010612230/MozartMovil.Ver.2.4.7.Build.2024012321502.apk",
				"ReleasesNotesURL":"https://github.com/yolovany/MozartMovilReleases/releases/tag/2.4.7.24010612230",
				"Size":51600681,
				"EnableSimultaneousScanLock":false,
				"Companies":["FRUVAS"],
				"MasterKey":"Mozart2010"
			},
			{
				"CommonName":"AGRÍCOLA VEGEX",
				"VersionCode":258,
				"VersionName":"2.5.8",
				"BuildVersion":2025010611589,
				"DownloadURL":"https://github.com/yolovany/MozartMovilReleases/releases/download/2.5.8.25010611589/MozartMovil.Ver.2.5.8.Build.2025010611589.apk",
				"ReleasesNotesURL":"https://github.com/yolovany/MozartMovilReleases/releases/tag/2.5.8.25010611589",
				"Size":25014830,
				"EnableSimultaneousScanLock":false,
				"Companies":["VEGEX","SHANI"],
				"MasterKey":"Mozart2010"
			},
			{
				"CommonName":"PRODUCTORA SC PRODUCE",
				"VersionCode":267,
				"VersionName":"2.6.7",
				"BuildVersion":2025072409301,
				"DownloadURL":"https://github.com/yolovany/MozartMovilReleases/releases/download/2.6.7.25072409301/MozartMovil.Ver.2.6.7.Build.2025072409301.apk",
				"ReleasesNotesURL":"https://github.com/yolovany/MozartMovilReleases/releases/tag/2.6.7.25072409301",
				"Size":25254223,
				"Companies":["SC_PRODUCE","SC_PRUEBAS"],
				"MasterKey":"Mozart2010"
			},
			
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//                                                                            OTRAS VARIABLES                                                                       //
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

			{
				"CommonName":"GLOBAL",
				"Companies":["GLOBAL"],
				"NotificationEmails":["jovany.infotek@gmail.com","fabiola.infotek@gmail.com","rumago@gmail.com"],
				"ErrorEmails":["jovany.infotek@gmail.com"],
				"MasterKey":"Mozart2010",
				"CompaniesWithRollCall":["VEGEX","SANRAFAEL","HH_SONS"],
				"CompaniesWithEnabledDateVerification":["SANTAMONICA"],
				"CompaniesKeys":["SANTAMONICA:santamonica2022"],
				
				"PayConditions":
				{
					"DESTAJOS_TAREAS":25,
					"ENTRADAS_ARTICULOS":25,
					"RELOJ_CHECADOR_TIEMPOS":25,
					"RONDINES":25,
					"SALIDAS_ARTICULOS":25,
					"PLANES_TRABAJO_EMPLEADOS":25
				},
				"SerialDeviceFormats":
				[
					{
						"Devices":["BV5200","BV4900","BV7100"],
						"Manufacturer":"Blackview",
						"Formats":["[a-z-0-9-A-Z]{16}"],
						"FormatsDescription":"debe ser alfanumérico de 16 caracteres"
					},
					{
						"Devices":["BV5500Plus"],
						"Manufacturer":"wheatek",
						"Formats":["[a-z-0-9-A-Z]{18}"],
						"FormatsDescription":"debe ser alfanumérico de 18 caracteres"
					},
					{
						"Devices":["NBP-60"],
						"Manufacturer":"alps",
						"Formats":["[0-9]{7}"],
						"FormatsDescription":"debe ser un número de 7 dígitos"
					},
					{
						"Devices":["TC15","TC21","TC26"],
						"Manufacturer":"Zebra Technologies",
						"Formats":["[0-9]{14}"],
						"FormatsDescription":"debe ser un número de 14 dígitos"
					},
					{
						"Devices":["TC52"],
						"Manufacturer":"Zebra Technologies",
						"Formats":["[0-9]{8}"],
						"FormatsDescription":"debe ser un número de 8 dígitos"
					},
					{
						"Devices":["U8000S","AN60","T80S"],
						"Manufacturer":"alps",
						"Formats":["[0-9]{12}"],
						"FormatsDescription":"debe ser un número de 12 dígitos"
					},
					{
						"Devices":["N60"],
						"Manufacturer":"BLD",
						"Formats":["[0-9]{12}"],
						"FormatsDescription":"debe ser un número de 12 dígitos"
					},
					{
						"Devices":["V790pro"],
						"Manufacturer":"V790pro",
						"Formats":["[V790][0-9]{15}"],
						"FormatsDescription":"debe contener una cadena \"V790\" y 15 números considerando los números de la cadena"
					},
					{
						"Devices":["X704A","X704V","TB125FU"],
						"Manufacturer":"LENOVO",
						"Formats":["[a-z-0-9-A-Z]{8}"],
						"FormatsDescription":"debe ser alfanumérico de 8 caracteres"
					},
					{
						"Devices":["gtowifi","gta3xlwifi","a22","x1s","a31","beyondxq","dm2q","r9s","a05m"],
						"Manufacturer":"samsung",
						"Formats":["[a-z-0-9-A-Z]{11}"],
						"FormatsDescription":"debe ser Alfanumérico de 11 caracteres"
					},
					{
						"Devices":["beyond2q","dm3q"],
						"Manufacturer":"samsung",
						"Formats":["[a-z-0-9-A-Z]{16}"],
						"FormatsDescription":"debe ser Alfanumérico de 16 caracteres"
					},
					{
						"Devices":["generic_x86"],
						"Manufacturer":"unknown",
						"Formats":["[0-9-A-Z]{16}"],
						"FormatsDescription":"debe ser Alfanumérico de 16 caracteres"
					},
					{
						"Devices":["generic_x86_arm","generic_x86"],
						"Manufacturer":"Google",
						"Formats":["[0-9-A-Z]{16}"],
						"FormatsDescription":"debe ser Alfanumérico de 16 caracteres"
					},
					{
						"Devices":["merlin"],
						"Manufacturer":"Xiaomi",
						"Formats":["[0-9-A-Z]{12}"],
						"FormatsDescription":"debe ser Alfanumérico de 12 caracteres"
					},
					{
						"Devices":["Armor_X6_Pro"],
						"Manufacturer":"Ulefone",
						"Formats":["[0-9-A-Z]{16}"],
						"FormatsDescription":"debe ser Alfanumérico de 16 caracteres"
					},
					{
						"Devices":["RS35"],
						"Manufacturer":"CipherLab",
						"Formats":["[0-9-A-Z]{15}"],
						"FormatsDescription":"debe ser Alfanumérico de 15 caracteres"
					},
					{
						"Devices":["EDA52"],
						"Manufacturer":"Honeywell",
						"Formats":["[a-z-0-9-A-Z]{10}"],
						"FormatsDescription":"debe ser alfanumérico de 10 caracteres"
					}
				]
			}
]
