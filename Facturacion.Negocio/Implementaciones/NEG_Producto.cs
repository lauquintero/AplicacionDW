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

        public List<Producto> ListadoProductos()
        {
            return (List<Producto>)RepositorioProducto.ListadoProducto();
        }

        public List<ProductosVentasAño> ListadoProductosAno()
        {
            return (List<Entidades.ProductosVentasAño>)RepositorioProducto.ListadoProductoFacturados();            
        }

        public List<Producto> ListadoProductosStock()
        {
            List<Producto> listado = (List<Producto>)RepositorioProducto.ListadoProducto();
            List<Producto> Result = new List<Producto>();

            if (listado != null && listado.Count > 0)
            {
                int cantidadunidadesminimas;
                if (int.TryParse(RepositorioParametizacion.ObtenerValorParametrizacion("stockMinimo"),out cantidadunidadesminimas))
                {
                    Result = (List<Producto>)listado.Where(x=>x.Cantidad < cantidadunidadesminimas);
                }                   
            }

            return Result;

        }
    }
}
