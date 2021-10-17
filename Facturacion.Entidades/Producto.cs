using System;
using System.Collections.Generic;
using System.Text;

namespace Facturacion.Entidades
{
    public class Producto
    {
        public int IdProducto { get; set; }
        public string Nombre { get; set; }
        public decimal Valor { get; set; }
        public int Cantidad { get; set; }
        public DateTime FechaCreacion { get; set; }
    }
}
