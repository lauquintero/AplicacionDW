using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Facturacion.Comun.Context
{
    public class DataAccess
    {
        public string ConnectionString { get; set; }
        private IHttpContextAccessor FacContext;
        private static string PROJECT_STAGE = "PROJECT_STAGE";

        public DataAccess(IHttpContextAccessor context)
        {
            FacContext = context;
        }

        public DataAccess(IConfiguration config, IHttpContextAccessor context)
        {
            getConfig(config);
            FacContext = context;
        }

        public DataAccess(IConfiguration config)
        {
            getConfig(config);
        }


        public void getConfig(IConfiguration config)
        {
            var listConnectionion = config.GetSection("ListaConexiones")
                    .GetChildren()
                    .ToList()
                    .Select(x => new
                    {
                        Ambiente = x.GetValue<string>("Ambiente"),
                        Conexion = x.GetValue<string>("Conexion"),
                    });

            var stage = config[PROJECT_STAGE];
            if (!string.IsNullOrEmpty(stage))
            {
                var ambiente = listConnectionion.FirstOrDefault(x => x.Ambiente == stage);
                if (ambiente != null)
                {
                    ConnectionString = ambiente.Conexion;
                }
            }
        }
    }
}
