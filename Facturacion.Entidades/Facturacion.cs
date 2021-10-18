using System;
using System.Collections.Generic;
using System.Text;

namespace Facturacion.Entidades
{
    public class Facturacion
    {
        public int IdFacturacion { get; set; }
        public Producto Productos { get; set; }
        public Cliente Cliente { get; set; }        
        public DateTime FechaVenta { get; set; }
    }
}
