using Facturacion.Datos.Interfaces;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using Microsoft.EntityFrameworkCore;

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
            }

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

            return Result;
        }

        public IEnumerable<Entidades.ProductosVentasAño> ListadoProductoFacturados()
        {
            IEnumerable<Entidades.ProductosVentasAño> listProductos = null;
            ObservableCollection<Entidades.Facturacion> Result = new ObservableCollection<Entidades.Facturacion>();

            using (FacturaDBDigitalContext db = new FacturaDBDigitalContext())
            {
                listProductos = (IEnumerable<Entidades.ProductosVentasAño>)db.Productos.FromSqlRaw("ListadoProductosAño");

                //var list =  db.Facturacions.Join(db.Productos, fac => fac.FacIdProducto, pro => pro.ProIdProducto, (fac, pro) => new { fac, pro }).ToList();

                //foreach (var item in list)
                //{
                //    Entidades.Facturacion fac = new Entidades.Facturacion()
                //    {
                //        Cliente = new Entidades.Cliente() { IdCliente = item.fac.FacIdCliente },
                //        IdFacturacion = item.fac.FacIdFacturacion,
                //        FechaVenta = item.fac.FacFechaVenta,
                //        Productos = new Entidades.Producto()
                //        {
                //            IdProducto = item.pro.ProIdProducto,
                //            Nombre = item.pro.ProNombre,
                //            Cantidad = item.pro.ProCantidad,
                //            Valor = item.pro.ProValor,
                //            FechaCreacion = item.pro.ProFechaCreacion
                //        }
                //    };
                //    Result.Add(fac);
                //};
            }

            return listProductos;
        }
    }
}
