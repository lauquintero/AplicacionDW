using Microsoft.Extensions.DependencyInjection;
using System;

namespace Facturacion.Singleton
{
    public static class Singleton
    {
        public static IServiceCollection Registro(this IServiceCollection Servicios)
        {
            
            return Servicios;
        }
    }
}
