using Facturacion.Entidades;
using Facturacion.Negocio.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.ObjectModel;

namespace FacturacionDigitalW.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class ProductoController : Controller
    {
        internal INEG_Producto NegocioProducto;        

        #region Constructor
        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="NegProducto"></param>
        public ProductoController(INEG_Producto NegProducto)
        {
            NegocioProducto = NegProducto;              
        }
        #endregion

        /// <summary>
        /// Obtener Listado Productos 
        /// </summary>
        /// <returns>ObservableCollection<Producto></returns>
        [HttpGet]
        [Route("ListadoProductos")]
        public ActionResult<ObservableCollection<Producto>> GetProductos()
        {
            var result = NegocioProducto.ListadoProductos();
            return Ok(result);
        }

        /// <summary>
        /// Obtiene un listado de productos que esten por debajo de la marca del Stock Parametrizacion.MinimoStockPermitido
        /// </summary>
        /// <returns>ObservableCollection<Producto></returns>
        [HttpGet]
        [Route("ListadoProductosStock")]
        public ActionResult<ObservableCollection<Producto>> GetProductosStock()
        {
            var result = NegocioProducto.ListadoProductos();
            return Ok(result);
        }

        /// <summary>
        /// Obtiene un listado de valores de venta acumulado mes a mes agrupado por producto
        /// </summary>
        /// <returns>ObservableCollection<Producto></returns>
        [HttpGet]
        [Route("ListadoProductosAno")]
        public ActionResult<ObservableCollection<Producto>> GetProductosAno()
        {
            var result = NegocioProducto.ListadoProductosAno();
            return Ok(result);
        }

    }
}
