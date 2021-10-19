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
        private readonly ILogger<ProductoController> _logger;
        private IConfiguration _conf;

        #region Constructor
        public ProductoController(INEG_Producto NegProducto, ILogger<ProductoController> logger, IConfiguration configuration)
        {
            NegocioProducto = NegProducto;
            _logger = logger;
            _conf = configuration;
        }
        #endregion

        /// <summary>
        /// Obtener Listado Productos 
        /// </summary>
        /// <returns>Listado de productos</returns>
        [HttpGet]
        [Route("ListadoProductos")]
        public ActionResult<List<Producto>> GetPreEnvio()
        {
            var result = NegocioProducto.ListadoProductos();
            return Ok(result);
        }

    }
}
