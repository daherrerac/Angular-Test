using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebUsers.Modelos
{
    public class Usuarios
    {
        public long Id { get; set; }
        public long Identificacion { get; set; }
        public string Nombre { get; set; }
        public long Edad { get; set; }
        public string FNacimiento { get; set; }
    }
}
