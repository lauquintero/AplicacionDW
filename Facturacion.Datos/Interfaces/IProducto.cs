using System;
using System.Collections.Generic;
using System.Text;

namespace Facturacion.Datos.Interfaces
{
    public interface IProducto
    {
        /// <summary>
        /// Listado de productos
        /// </summary>
        /// <returns></returns>
        IEnumerable<Entidades.Producto> ListadoProducto();
        /// <summary>
        /// listado de productos facturados
        /// </summary>
        /// <returns></returns>
        IEnumerable<Entidades.ProductosVentasAño> ListadoProductoFacturados();
    }
}
