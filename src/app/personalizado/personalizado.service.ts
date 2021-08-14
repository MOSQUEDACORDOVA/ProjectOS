import { Injectable } from '@angular/core';
var dominio=window.location.hostname;
var dominio_actual="";
if(dominio=="localhost" || dominio=="projectos-666.web.app"){
  dominio_actual="desarrollo";
}else{
  dominio_actual=dominio;
  switch(dominio){
    case 'pyt4.mosquedacordova.com' || 'bwater.com': 
    sessionStorage.setItem('SS_proyecto_actual', 'PYT-4');
    break
    case 'pyt21.mosquedacordova.com' || 'cbfcapital.com': 
    sessionStorage.setItem('SS_proyecto_actual', 'PYT-21');
    break
    case 'pyt24.mosquedacordova.com' || 'minner.com': 
    sessionStorage.setItem('SS_proyecto_actual', 'PYT-24');
    break
  }
}
export const DOM_PA=dominio_actual;
var identificador=sessionStorage.getItem('SS_proyecto_actual');
//obtenemos todos los link del head
var n_estilos = document.getElementsByTagName("link");
for(var n=0; n<=n_estilos.length-1; n++){
  //obtenemos los link que sean estilos de proyectos (pyt_)
  var estilo=n_estilos[n].href;
  var estilo_De_proyecto = estilo.indexOf('PYT-');
  if(estilo_De_proyecto!== -1){
    //eliminamos todos menos el del proyecto correspondiente
    var mi_proyecto_actual = estilo.indexOf(identificador);
    if(mi_proyecto_actual== -1){
      n_estilos[n].href="";
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class PersonalizadoService {
  public IDE_PA;
  public NOM_PA;
  public TITULO;
  public DES_PA;
  public KEY_PA;
  public FAV_PA;
  public LOG_PNG_PA;
  public ICO_SVG_PA; 
  public MENU_COL_PA; 
  public RUT_PRI_PA; 
  public MOD_PRI_PA; 
  public REGISTRO_PERSONALIZADO;
  public NOTIFICACIONES; 

  constructor() { 
    this.SeleccionarProyecto();
  }
  SeleccionarProyecto(){
    var identificador=sessionStorage.getItem('SS_proyecto_actual');
    //var identificador="PYT-21";
    var menu_collapse=false;
    var notificaciones=false;
    switch(sessionStorage.getItem('SS_proyecto_actual')){
      case 'PYT-4': 
        var nombre="B•Water";
        var titulo="B•Water | Hidratación consciente";
        var descripcion="B•Water | Hidratación consciente";
        var keywords="Agua potable";
        var favicon="assets/images/ico/pyt_4_favicon.ico";
        var logo_png="assets/images/logo/pyt_4_logo.png";
        var icono_svg="assets/images/logo/pyt_4_logo.png";
        var RutaPrincipal="pyt4/tablero";
        var ModuloPrincipal="pyt4";
        var Registro_personalizado=true;
        notificaciones=true;
      break
      case 'PYT-21': 
        var nombre="CBFX Capital";
        var titulo="CBFX Capital";
        var descripcion="CBFX Capital";
        var keywords="CBFX Capital";
        var favicon="assets/images/ico/pyt_25_favicon.ico";
        var logo_png="assets/images/logo/pyt_25_logo.png";
        var icono_svg="";
        var RutaPrincipal="pyt21/tablero";
        var ModuloPrincipal="pyt21";
        var Registro_personalizado=false;
        notificaciones=true;
      break
      case 'PYT-24': 
        var nombre="Miner";
        var titulo="Miner";
        var descripcion="Miner";
        var keywords="Miner";
        var favicon="assets/images/ico/pyt_24_favicon.ico";
        var logo_png="assets/images/logo/pyt_24_logo.png";
        var icono_svg="assets/images/logo/logo.svg";
        var RutaPrincipal="dashboard/proyectos";
        var ModuloPrincipal="dashboard";
        var Registro_personalizado=false;
      break
      case 'PYT-25': 
        var nombre="ProjectOS";
        var titulo="ProjectOS";
        var descripcion="ProjectOS";
        var keywords="ProjectOS";
        var favicon="assets/images/ico/favicon.ico";
        var logo_png="assets/images/logo/logo.png";
        var icono_svg="assets/images/logo/logo.svg";
        var RutaPrincipal="tablero/proyectos";
        menu_collapse=true;
        var ModuloPrincipal="tablero";
        var Registro_personalizado=false;
      break
      default: 
        var nombre="localhost";
        var titulo="localhost";
        var descripcion="localhost";
        var keywords="localhost";
        var favicon="assets/images/ico/favicon.ico";
        var logo_png="assets/images/logo/logo.png";
        var icono_svg="assets/images/logo/logo.svg";
        var RutaPrincipal="tablero/proyectos";
        var ModuloPrincipal="tablero";
        var Registro_personalizado=false;
      break
    }
    this.IDE_PA=identificador;
    this.NOM_PA=nombre;
    this.TITULO=titulo;
    this.DES_PA=descripcion;
    this.KEY_PA=keywords;
    this.FAV_PA=favicon;
    this.LOG_PNG_PA=logo_png;
    this.ICO_SVG_PA=icono_svg;
    this.MENU_COL_PA=menu_collapse;
    this.RUT_PRI_PA=RutaPrincipal;
    this.MOD_PRI_PA=ModuloPrincipal;
    this.REGISTRO_PERSONALIZADO=Registro_personalizado;
    this.NOTIFICACIONES=notificaciones;
  }
}
