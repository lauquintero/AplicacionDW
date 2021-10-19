using Facturacion.Entidades;
using Facturacion.Negocio.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
        /// <returns>Listado de productos</returns>
        [HttpGet]
        [Route("ListadoProductos")]
        public ActionResult<List<Producto>> GetProductos()
        {
            var result = NegocioProducto.ListadoProductos();
            return Ok(result);
        }

    }
}
