using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebUsers.Modelos;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace WebUsers.Datos
{
    public static class InitDataUsers
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var _context = new UsuariosContext(serviceProvider.GetRequiredService<DbContextOptions<UsuariosContext>>()))
            {
                if (_context.Usuarios.Any())
                {
                    return;
                }
                _context.Usuarios.AddRange(
                    new Usuarios { Identificacion= 12345, Nombre = "Luis Miguel", Edad = 10, FNacimiento="20-01-2011" },
                    new Usuarios { Identificacion= 12367, Nombre = "Ricardo Perez", Edad =20, FNacimiento="10-01-2001" },
                    new Usuarios { Identificacion = 12877, Nombre = "Juan Perez", Edad = 20, FNacimiento = "10-01-2001" },
                    new Usuarios { Identificacion = 92367, Nombre = "Maria Perez", Edad = 20, FNacimiento = "10-01-2001" },
                    new Usuarios { Identificacion = 62367, Nombre = "Fernanda Lopez", Edad = 20, FNacimiento = "10-01-2001" },
                    new Usuarios { Identificacion = 52367, Nombre = "Ricardo Rodriguez", Edad = 20, FNacimiento = "10-01-2001" },
                    new Usuarios { Identificacion = 33679, Nombre = "William Orjuela", Edad = 20, FNacimiento = "10-01-2001" },
                    new Usuarios { Identificacion = 99999, Nombre = "Pedro Cadavid", Edad = 20, FNacimiento = "10-01-2001" },
                    new Usuarios { Identificacion = 12098, Nombre = "Ricardo Rodriguez", Edad = 20, FNacimiento = "10-01-2001" },
                    new Usuarios { Identificacion = 101923, Nombre = "Alfonso Gomez", Edad = 20, FNacimiento = "10-01-2001" }
                 );

                _context.SaveChanges();
            }
        }           
            
    }
}
