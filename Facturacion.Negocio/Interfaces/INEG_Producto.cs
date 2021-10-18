using Facturacion.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace Facturacion.Negocio.Interfaces
{
    public interface INEG_Producto
    {
        /// <summary>
        /// Listado de todos los productos
        /// </summary>
        /// <returns></returns>
        List<Producto> ListadoProductos();

        /// <summary>
        /// Listado de productos por ano
        /// </summary>
        /// <returns></returns>
        List<ProductosVentasAño> ListadoProductosAno();
        
        /// <summary>
        /// Listado del stock de los productos
        /// </summary>
        /// <returns></returns>
        List<Producto> ListadoProductosStock();         
    }
}
