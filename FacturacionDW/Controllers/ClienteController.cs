using Facturacion.Entidades;
using Facturacion.Negocio.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.ObjectModel;

namespace FacturacionDW.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class ClienteController : Controller
    {
        internal INEG_Cliente NegocioCliente;

        #region Constructor
        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="NegProducto"></param>
        public ClienteController(INEG_Cliente NegCliente)
        {
            NegocioCliente = NegCliente;
        }
        #endregion

        /// <summary>
        /// Obtener Listado de clientes que compren segun la edad 
        /// </summary>
        /// <returns>ObservableCollection<Cliente></returns>
        [HttpGet]
        [Route("ListadoClientesEdad")]
        public ActionResult<ObservableCollection<Cliente>> GetClientesEdad()
        {
            var result = NegocioCliente.ListadoClientesEdad();
            return Ok(result);
        }

        /// <summary>
        /// obtienes un estimado de la proxima fecha de compra 
        /// </summary>
        /// <returns>ObservableCollection<Cliente></returns>
        [HttpPost]
        [Route("ProximaCompraEstimada")]
        public ActionResult<string> GetClienteFechaProximaCompra(int identificacion )
        {
            var result = NegocioCliente.ProximaCompraEstimada(identificacion);
            return Ok(result);
        }
    }
}
