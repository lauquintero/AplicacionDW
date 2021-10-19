using Facturacion.Datos.Interfaces;
using System;
using System.Collections.Generic;

#nullable disable

namespace Facturacion.Datos.Modelos
{
    public partial class Facturacion: IFacturacion
    {
        public int FacIdFacturacion { get; set; }
        public int FacIdProducto { get; set; }
        public int FacIdCliente { get; set; }
        public DateTime FacFechaVenta { get; set; }
    }
}
