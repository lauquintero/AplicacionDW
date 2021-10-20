using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Configuration;
using Facturacion.Comun.Context;

#nullable disable

namespace Facturacion.Datos.Modelos
{
    public partial class FacturaDBDigitalContext : DbContext 
    {
        internal ConecctionStringManager _conection = null;

        public FacturaDBDigitalContext()
        {
            _conection = new ConecctionStringManager();
            _connectionString = _conection.GetConecctionString();
        }

        public FacturaDBDigitalContext(DbContextOptions<FacturaDBDigitalContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Cliente> Clientes { get; set; }
        public virtual DbSet<Facturacion> Facturacions { get; set; }
        public virtual DbSet<Parametrizacion> Parametrizacions { get; set; }
        public virtual DbSet<Producto> Productos { get; set; }
        private readonly string _connectionString;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(_connectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Modern_Spanish_CI_AS");

            modelBuilder.Entity<Cliente>(entity =>
            {
                entity.HasNoKey();

                entity.HasIndex(e => e.CliIdentificacion, "IX_Clientes")
                    .IsUnique();

                entity.Property(e => e.CliApellidos)
                    .IsRequired()
                    .HasMaxLength(150)
                    .IsUnicode(false)
                    .HasColumnName("CLI_Apellidos");

                entity.Property(e => e.CliFechaNacimiento)
                    .HasColumnType("date")
                    .HasColumnName("CLI_FechaNacimiento");

                entity.Property(e => e.CliIdCliente)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("CLI_IdCliente");

                entity.Property(e => e.CliIdentificacion)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("CLI_Identificacion");

                entity.Property(e => e.CliNombre)
                    .IsRequired()
                    .HasMaxLength(150)
                    .IsUnicode(false)
                    .HasColumnName("CLI_Nombre");
            });

            modelBuilder.Entity<Facturacion>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Facturacion");

                entity.Property(e => e.FacFechaVenta)
                    .HasColumnType("date")
                    .HasColumnName("FAC_FechaVenta");

                entity.Property(e => e.FacIdCliente).HasColumnName("FAC_IdCliente");

                entity.Property(e => e.FacIdFacturacion)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("FAC_IdFacturacion");

                entity.Property(e => e.FacIdProducto).HasColumnName("FAC_IdProducto");
            });

            modelBuilder.Entity<Parametrizacion>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Parametrizacion");

                entity.Property(e => e.ParNombreConf)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("PAR_NombreConf");

                entity.Property(e => e.ParValorConf)
                    .HasMaxLength(200)
                    .HasColumnName("PAR_ValorConf");
            });

            modelBuilder.Entity<Producto>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.ProCantidad).HasColumnName("PRO_Cantidad");

                entity.Property(e => e.ProFechaCreacion)
                    .HasColumnType("datetime")
                    .HasColumnName("PRO_FechaCreacion");

                entity.Property(e => e.ProIdProducto)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("PRO_IdProducto");

                entity.Property(e => e.ProNombre)
                    .IsRequired()
                    .HasMaxLength(150)
                    .HasColumnName("PRO_Nombre");

                entity.Property(e => e.ProValor)
                    .HasColumnType("decimal(18, 0)")
                    .HasColumnName("PRO_Valor");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }      
}
