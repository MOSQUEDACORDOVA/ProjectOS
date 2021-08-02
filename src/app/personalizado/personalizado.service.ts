import { Injectable } from '@angular/core';

export const DOM_PA=window.location.hostname;
//si es un desarrollador puede escoger el proyecto que desea visualiar

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
  public NOTIFICACIONES; 

  constructor() { 
    this.SeleccionarProyecto();
    this.SeleccionarProyecto();
  }
  SeleccionarProyecto(){
    //titulo del proyecto
    var identificador=sessionStorage.getItem('SS_proyecto_actual');
    //var identificador="PYT-21";
    var menu_collapse=false;
    var notificaciones=false;
    switch(sessionStorage.getItem('SS_proyecto_actual')){
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
    this.NOTIFICACIONES=notificaciones;
  }
}
