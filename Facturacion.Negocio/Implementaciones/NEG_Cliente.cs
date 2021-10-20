using Facturacion.Datos.Interfaces;
using Facturacion.Entidades;
using Facturacion.Negocio.Interfaces;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;

namespace Facturacion.Negocio.Implementaciones
{
    public class NEG_Cliente : INEG_Cliente
    {
        #region Constructor

        internal ICliente RepositorioCliente;
        internal IParametrizacion RepositorioParametizacion;

        public NEG_Cliente(ICliente repocliente, IParametrizacion repoparametrizacion){
            RepositorioCliente = repocliente;
            RepositorioParametizacion = repoparametrizacion;
        }

        #endregion

        public IEnumerable<Cliente> ListadoClientesEdad()
        {
            IEnumerable<Entidades.Facturacion> listado = RepositorioCliente.ListadoClienteVentas();
            ObservableCollection<Cliente> _list = new ObservableCollection<Cliente>();
            IEnumerable<Cliente> Result = null;

            if (listado.Count() > 0)
            {
                int edadpar;
                if (int.TryParse(RepositorioParametizacion.ObtenerValorParametrizacion("EdadClientesMinima"), out edadpar))
                {
                   var  query = listado.Where(x => (DateTime.Now.Year - x.Cliente.FechaNacimiento.Year) <= edadpar
                             && x.FechaVenta >= Convert.ToDateTime("2000-02-01 00:00:00") && x.FechaVenta <= Convert.ToDateTime("2000-05-25 00:00:00")
                             );
                    
                    foreach (var item in query)
                    {
                        Cliente cli = new Cliente()
                        {
                            IdCliente = item.Cliente.IdCliente,
                            Identificacion = item.Cliente.Identificacion,
                            Nombre = item.Cliente.Nombre,
                            Apellidos = item.Cliente.Apellidos,
                            FechaNacimiento = item.Cliente.FechaNacimiento
                        };
                        _list.Add(cli);
                    }
                }
                Result = _list.GroupBy(c => c.IdCliente)
                          .Select(g => g.First())
                          .ToList();
            }
            return Result;
        }

        public IEnumerable<Cliente> ListadoClientes(int identificacionCliente)
        {
            throw new NotImplementedException();
        }
    }
}
