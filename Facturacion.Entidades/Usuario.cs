using System;
using System.Collections.Generic;
using System.Text;

namespace Facturacion.Entidades.Modelos
{
    public partial class Usuario
    {
        private string _name;

        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        private string _lastName;

        public string LastName
        {
            get { return _lastName; }
            set { _lastName = value; }
        }
    }
}
