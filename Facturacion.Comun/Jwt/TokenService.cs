using System;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Protocols;
using Facturacion.Datos.Modelos;

namespace Facturacion.Comun.Jwt
{
    public static class TokenService
    {
        public static string GenerateToken(Usuario user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.Default.GetBytes(ConfigurationManager.AppSetting["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            ClaimsIdentity claimsIdentity = new ClaimsIdentity(
                new[] {
                    new Claim(ClaimTypes.Name, user.Name)
                    }
                );

            var tokenHandler = new JwtSecurityTokenHandler();
            var jwtSecurityToken = tokenHandler.CreateJwtSecurityToken(
                audience: ConfigurationManager.AppSetting["Jwt:aud"],
                issuer: ConfigurationManager.AppSetting["Jwt:Issuer"],
                subject: claimsIdentity,
                notBefore: DateTime.UtcNow,
                expires: DateTime.UtcNow.AddHours(24),
                signingCredentials: credentials);

            var jwtTokenString = tokenHandler.WriteToken(jwtSecurityToken);
            return jwtTokenString;
        }
    }

    public static class ConfigurationManager
    {
        public static IConfiguration AppSetting { get; set; }
        static ConfigurationManager()
        {
            AppSetting = new ConfigurationBuilder()
                    .SetBasePath(System.IO.Directory.GetCurrentDirectory())
                    .AddJsonFile("appsettings.json")
                    .Build();
        }
    }
}
