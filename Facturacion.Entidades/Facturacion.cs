using System;
using System.Collections.Generic;
using System.Text;

namespace Facturacion.Entidades
{
    public class Facturacion
    {
        public int IdFacturacion { get; set; }
        public List<Producto> Productos { get; set; }
        public int IdCliente { get; set; }
        public DateTime FechaVenta { get; set; }
    }
}
