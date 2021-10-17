using System;
using System.Collections.Generic;

#nullable disable

namespace Facturacion.Datos.Modelos
{
    public partial class Producto
    {
        public int ProIdProducto { get; set; }
        public string ProNombre { get; set; }
        public decimal ProValor { get; set; }
        public int ProCantidad { get; set; }
        public DateTime ProFechaCreacion { get; set; }
    }
}
