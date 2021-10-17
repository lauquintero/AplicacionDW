using System;
using System.Collections.Generic;
using System.Text;

namespace Facturacion.Entidades
{
    public class Cliente
    {
        public int IdCliente { get; set; }
        public string Nombre { get; set; }
        public string Apellidos { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public string Identificacion { get; set; }
    }
}
