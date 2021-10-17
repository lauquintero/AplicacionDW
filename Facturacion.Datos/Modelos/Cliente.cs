using System;
using System.Collections.Generic;

#nullable disable

namespace Facturacion.Datos.Modelos
{
    public partial class Cliente
    {
        public int CliIdCliente { get; set; }
        public string CliNombre { get; set; }
        public string CliApellidos { get; set; }
        public DateTime CliFechaNacimiento { get; set; }
        public string CliIdentificacion { get; set; }
    }
}
