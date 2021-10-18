using Facturacion.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace Facturacion.Datos.Interfaces
{
    public interface ICliente
    {
        /// <summary>
        /// obtiene todos los clientes
        /// </summary>
        /// <returns></returns>
        IEnumerable<Cliente> ListadoCliente();
        /// <summary>
        /// obtiene la union de la tabla de clientes con facturacion
        /// </summary>
        /// <returns></returns>
        IEnumerable<Entidades.Facturacion> ListadoClienteVentas();
    }
}
