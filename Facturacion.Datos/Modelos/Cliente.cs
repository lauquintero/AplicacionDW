using Facturacion.Datos.Interfaces;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;

#nullable disable

namespace Facturacion.Datos.Modelos
{
    public partial class Cliente : ICliente
    {
        #region Constructor

        #endregion

        public int CliIdCliente { get; set; }
        public string CliNombre { get; set; }
        public string CliApellidos { get; set; }
        public DateTime CliFechaNacimiento { get; set; }
        public string CliIdentificacion { get; set; }

        public IEnumerable<Entidades.Cliente> ListadoCliente()
        {
            IEnumerable<Cliente> lisClientes = null;
            ObservableCollection<Entidades.Cliente> Result = new ObservableCollection<Entidades.Cliente>();             

            using (FacturaDBDigitalContext db = new FacturaDBDigitalContext())
            {
                lisClientes = (from c in db.Clientes
                               select c);
            }

            if (lisClientes.Count() > 0)
            {                  
                foreach (var item in lisClientes)
                {
                    Entidades.Cliente _cli = new Entidades.Cliente();
                    _cli.IdCliente = item.CliIdCliente;
                    _cli.Nombre = item.CliNombre;
                    _cli.Apellidos = item.CliApellidos;
                    _cli.FechaNacimiento = item.CliFechaNacimiento;
                    _cli.Identificacion = item.CliIdentificacion;
                    Result.Add(_cli);
                }
            }              

            return Result;
        }

        public IEnumerable<Entidades.Facturacion> ListadoClienteVentas()
        {
            List<Entidades.Facturacion> Result = new List<Entidades.Facturacion>();

            using (FacturaDBDigitalContext db = new FacturaDBDigitalContext())
            {
                var Clientes = db.Facturacions.Join(db.Clientes, fac => fac.FacIdCliente, cli => cli.CliIdCliente, (fac, cli) => new { fac, cli }).ToList();
               
                if (Clientes.Count() > 0)
                {
                    foreach (var item in Clientes)
                    {
                        Entidades.Facturacion fac = new Entidades.Facturacion();                         
                        fac.Cliente.IdCliente = item.cli.CliIdCliente;
                        fac.Cliente.Identificacion = item.cli.CliIdentificacion;
                        fac.Cliente.Nombre = item.cli.CliNombre;
                        fac.Cliente.Apellidos = item.cli.CliApellidos;
                        fac.FechaVenta = item.fac.FacFechaVenta;
                        fac.IdFacturacion = item.fac.FacIdFacturacion;

                        Result.Add(fac);
                    }
                }   
            }
            return Result;
        }
    }       
}
