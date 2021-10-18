using Facturacion.Negocio.Interfaces;
using Facturacion.Negocio.Implementaciones;
using Microsoft.Extensions.DependencyInjection;
using System;
using Facturacion.Datos.Interfaces;
using Facturacion.Datos.Modelos;

namespace Facturacion.Singleton
{
    public static class Singleton
    {
        public static IServiceCollection Registro(this IServiceCollection Servicios)
        {
            ///Servicio/Negocio
            Servicios.AddSingleton<INEG_Producto,NEG_Producto>();  
            Servicios.AddSingleton<INEG_Cliente,NEG_Cliente>();            
            ///Servicio/Repocitorio de datos
            Servicios.AddSingleton<ICliente,Cliente>(); 
            Servicios.AddSingleton<IProducto,Producto>(); 
            
            return Servicios;
        }
    }
}
