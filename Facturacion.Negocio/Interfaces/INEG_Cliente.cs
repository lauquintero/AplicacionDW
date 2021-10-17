using Facturacion.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace Facturacion.Negocio.Interfaces
{
    public interface INEG_Cliente
    {
        /// <summary>
        /// Listado de clientes edad
        /// </summary>
        /// <returns></returns>
        List<Cliente> ListadoClientesEdad();

        /// <summary>
        /// Listado clientes con relacion de ventas
        /// </summary>
        /// <returns></returns>
        List<Cliente> ListadoClientesVentas();
    }
}
