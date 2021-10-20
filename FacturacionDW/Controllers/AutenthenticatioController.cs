using Facturacion.Entidades.Modelos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Facturacion.Comun.Jwt;

namespace FacturacionDW.Controllers
{
    [ApiController]
    [Route("Api/[controller]")]
    public class AutenthenticatioController : ControllerBase
    {

        private IConfiguration _conf;

        public AutenthenticatioController(IConfiguration configuration) 
        {
            _conf = configuration;
        }

        [HttpGet]
        public ActionResult Get()
        {
            var user = Authenticate();
            var token = TokenService.GenerateToken(user);
            return Ok(token);
        }

        private Usuario Authenticate()
        {
            return new Usuario
            {
                Name = "Test",
                LastName = "Tes"
            };
        }
    }
}
