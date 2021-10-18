using Facturacion.Datos.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

#nullable disable

namespace Facturacion.Datos.Modelos
{
    public partial class Parametrizacion :IParametrizacion
    {
        public string ParNombreConf { get; set; }
        public string ParValorConf { get; set; }

        public string ObtenerValorParametrizacion(string Key)
        {
            string valorResult = null;

            using (FacturaDBDigitalContext db = new FacturaDBDigitalContext())
            {
                var Result = (from p in db.Parametrizacions
                               where p.ParNombreConf == Key
                               select p).FirstOrDefault();
                if (Result != null)
                {
                    valorResult = Result.ParValorConf;
                }
            }            

            return valorResult;
        }
    }
}
