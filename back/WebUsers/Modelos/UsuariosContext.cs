using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebUsers.Modelos
{
    public class UsuariosContext: DbContext
    {
        public UsuariosContext(DbContextOptions<UsuariosContext>options) : base(options) { }
        public DbSet<Usuarios> Usuarios { get; set; }

    }
}
