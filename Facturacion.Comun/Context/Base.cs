using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Facturacion.Comun.Context
{
    public class Base
    {
        private DataAccess contexto;

        public DataAccess Contexto { get => contexto; private set => contexto = value; }

        public Base(DataAccess context)
        {
            contexto = context;
        }
    }
}
