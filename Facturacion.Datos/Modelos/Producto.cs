using Facturacion.Datos.Interfaces;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Data.SqlClient;
using System.Data;

#nullable disable

namespace Facturacion.Datos.Modelos
{
    public partial class Producto : IProducto 
    {
        public int ProIdProducto { get; set; }
        public string ProNombre { get; set; }
        public decimal ProValor { get; set; }
        public int ProCantidad { get; set; }
        public DateTime ProFechaCreacion { get; set; }


        public IEnumerable<Entidades.Producto> ListadoProducto()
        {
            IEnumerable<Producto> listProductos = null;
            ObservableCollection<Entidades.Producto> Result = new ObservableCollection<Entidades.Producto>();

            using (FacturaDBDigitalContext db = new FacturaDBDigitalContext())
            {
                listProductos = (from p in db.Productos
                               select p);
                if (listProductos.Count() > 0)
                {
                    foreach (var item in listProductos)
                    {
                        Entidades.Producto _pro = new Entidades.Producto();
                        _pro.IdProducto = item.ProIdProducto;
                        _pro.Nombre = item.ProNombre;
                        _pro.Cantidad = item.ProCantidad;
                        _pro.Valor = item.ProValor;
                        _pro.FechaCreacion = item.ProFechaCreacion;
                        Result.Add(_pro);
                    }
                }
            }

            return Result;
        }

        public IEnumerable<Entidades.ProductosVentasAño> ListadoProductoFacturados()
        {              
            ObservableCollection<Entidades.ProductosVentasAño> Result = new ObservableCollection<Entidades.ProductosVentasAño>();

            using (FacturaDBDigitalContext db = new FacturaDBDigitalContext())
            { 
                var connection = (SqlConnection)db.Database.GetDbConnection();
                var command = connection.CreateCommand();
                command.CommandType = CommandType.StoredProcedure;
                command.CommandText = "ListadoProductosAno";

                connection.Open();
                var Query = command.ExecuteReader();

                while (Query.Read())
                {
                    Entidades.ProductosVentasAño fac = new Entidades.ProductosVentasAño()
                    {
                        Nombreproducto = Query[0].ToString(),
                        Mes = Query[1].ToString(),
                        valorvendido = Convert.ToDecimal(Query[2].ToString())
                    };
                    Result.Add(fac);
                };
            }

            return Result;
        }
    }
}
