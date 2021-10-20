using Facturacion.Datos.Interfaces;
using Facturacion.Entidades;
using Facturacion.Negocio.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Facturacion.Negocio.Implementaciones
{
    public class NEG_Producto : INEG_Producto
    {
        #region Constructor

        internal IProducto RepositorioProducto;
        internal IParametrizacion RepositorioParametizacion;

        public NEG_Producto(IProducto repoproducto, IParametrizacion repoparametrizacion)
        {
            RepositorioProducto = repoproducto;
            RepositorioParametizacion = repoparametrizacion;
        }

        #endregion

        public IEnumerable<Producto> ListadoProductos()
        {
            return RepositorioProducto.ListadoProducto();
        }

        public IEnumerable<ProductosVentasAño> ListadoProductosAno()
        {
            return RepositorioProducto.ListadoProductoFacturados();            
        }

        public IEnumerable<Producto> ListadoProductosStock()
        {
            IEnumerable<Producto> listado = RepositorioProducto.ListadoProducto();
            IEnumerable<Producto> Result = null;

            if (listado != null && listado.Count() > 0)
            {
                int cantidadunidadesminimas;
                if (int.TryParse(RepositorioParametizacion.ObtenerValorParametrizacion("MinimoStockPermitido"),out cantidadunidadesminimas))
                {
                    Result = listado.Where(x=>x.Cantidad < cantidadunidadesminimas);
                }                   
            }

            return Result;

        }
    }
}
