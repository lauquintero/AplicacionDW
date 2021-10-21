using Facturacion.Entidades;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Text;

namespace Facturacion.Negocio.Interfaces
{
    public interface INEG_Cliente
    {
        /// <summary>
        /// Listado de clientes edad
        /// </summary>
        /// <returns></returns>
        IEnumerable<Cliente> ListadoClientesEdad();

        /// <summary>
        /// Listado clientes con relacion de ventas
        /// </summary>
        /// <returns>string</returns>
        string ProximaCompraEstimada(int identificacionCliente);
    }
}
