USE [master]
GO
/****** Object:  Database [FacturaDBDigital]    Script Date: 20/10/2021 2:53:53 p. m. ******/
CREATE DATABASE [FacturaDBDigital]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'FacturaDBDigital', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\FacturaDBDigital.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'FacturaDBDigital_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\FacturaDBDigital_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [FacturaDBDigital] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [FacturaDBDigital].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [FacturaDBDigital] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [FacturaDBDigital] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [FacturaDBDigital] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [FacturaDBDigital] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [FacturaDBDigital] SET ARITHABORT OFF 
GO
ALTER DATABASE [FacturaDBDigital] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [FacturaDBDigital] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [FacturaDBDigital] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [FacturaDBDigital] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [FacturaDBDigital] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [FacturaDBDigital] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [FacturaDBDigital] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [FacturaDBDigital] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [FacturaDBDigital] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [FacturaDBDigital] SET  DISABLE_BROKER 
GO
ALTER DATABASE [FacturaDBDigital] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [FacturaDBDigital] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [FacturaDBDigital] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [FacturaDBDigital] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [FacturaDBDigital] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [FacturaDBDigital] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [FacturaDBDigital] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [FacturaDBDigital] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [FacturaDBDigital] SET  MULTI_USER 
GO
ALTER DATABASE [FacturaDBDigital] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [FacturaDBDigital] SET DB_CHAINING OFF 
GO
ALTER DATABASE [FacturaDBDigital] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [FacturaDBDigital] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [FacturaDBDigital] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'FacturaDBDigital', N'ON'
GO
ALTER DATABASE [FacturaDBDigital] SET QUERY_STORE = OFF
GO
USE [FacturaDBDigital]
GO
/****** Object:  Table [dbo].[Clientes]    Script Date: 20/10/2021 2:53:54 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Clientes](
	[CLI_IdCliente] [int] IDENTITY(1,1) NOT NULL,
	[CLI_Nombre] [varchar](150) NOT NULL,
	[CLI_Apellidos] [varchar](150) NOT NULL,
	[CLI_FechaNacimiento] [date] NOT NULL,
	[CLI_Identificacion] [varchar](20) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Facturacion]    Script Date: 20/10/2021 2:53:54 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Facturacion](
	[FAC_IdFacturacion] [int] IDENTITY(1,1) NOT NULL,
	[FAC_IdProducto] [int] NOT NULL,
	[FAC_IdCliente] [int] NOT NULL,
	[FAC_FechaVenta] [date] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Parametrizacion]    Script Date: 20/10/2021 2:53:54 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Parametrizacion](
	[PAR_NombreConf] [nvarchar](50) NOT NULL,
	[PAR_ValorConf] [nvarchar](200) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Productos]    Script Date: 20/10/2021 2:53:54 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Productos](
	[PRO_IdProducto] [int] IDENTITY(1,1) NOT NULL,
	[PRO_Nombre] [nvarchar](150) NOT NULL,
	[PRO_Valor] [decimal](18, 0) NOT NULL,
	[PRO_Cantidad] [int] NOT NULL,
	[PRO_FechaCreacion] [datetime] NOT NULL
) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Clientes]    Script Date: 20/10/2021 2:53:54 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_Clientes] ON [dbo].[Clientes]
(
	[CLI_Identificacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  StoredProcedure [dbo].[ListadoClientesEdad]    Script Date: 20/10/2021 2:53:54 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Laureano Quintero
-- Create date: 15-10-2021
-- Description:	Listado de productos
--ListadoClientesEdad 
-- =============================================
CREATE PROCEDURE [dbo].[ListadoClientesEdad]

AS
BEGIN
	
	Select C.CLI_Nombre + C.CLI_Apellidos as 'NombreCliente'
	from Facturacion F inner join Clientes C on F.FAC_IdCliente = C.CLI_IdCliente
	where DATEDIFF(year, C.CLI_FechaNacimiento, GETDATE()) < (select [PAR_ValorConf] from [Parametrizacion] where [PAR_NombreConf] = 'EdadClientesMinima')
	and F.FAC_FechaVenta between '2000-01-02' and '2000-05-25'

END
GO
/****** Object:  StoredProcedure [dbo].[ListadoProductos]    Script Date: 20/10/2021 2:53:54 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Laureano Quintero
-- Create date: 15-10-2021
-- Description:	Listado de productos
--ListadoProductos null
-- =============================================
CREATE PROCEDURE [dbo].[ListadoProductos]
@llave nvarchar(150) = null	

AS
BEGIN
	
	DECLARE @SQLString NVARCHAR(500); 
    
	set @SQLString = 'SELECT PRO_Nombre ,PRO_Valor,PRO_Cantidad 
					  from Productos'
	if(@llave is not null)
		if(TRY_PARSE(@llave AS int) IS not NULL)
			set @SQLString += 'where PRO_IdProducto = ' + @llave;		
		else
			set @SQLString += 'where PRO_Nombre like  ''\%' + @llave + '''\%';		

	exec sp_executesql  @SQLString  

END
GO
/****** Object:  StoredProcedure [dbo].[ListadoProductosAño]    Script Date: 20/10/2021 2:53:54 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Laureano Quintero
-- Create date: 15-10-2021
-- Description:	Listado de productos
--ListadoProductosStock 
-- =============================================
Create PROCEDURE [dbo].[ListadoProductosAño]

AS
BEGIN
	
	Select PRO_Nombre, SUM(P.PRO_Valor)
	from Productos P inner join Facturacion F on P.PRO_IdProducto = F.FAC_IdProducto
	where YEAR(F.FAC_FechaVenta) = 2000
	group by PRO_Nombre

END
GO
/****** Object:  StoredProcedure [dbo].[ListadoProductosStock]    Script Date: 20/10/2021 2:53:54 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Laureano Quintero
-- Create date: 15-10-2021
-- Description:	Listado de productos
--ListadoProductosStock 
-- =============================================
Create PROCEDURE [dbo].[ListadoProductosStock]

AS
BEGIN
	
	Select PRO_Nombre, PRO_Cantidad 
	from Productos 
	where PRO_Cantidad < (select [PAR_ValorConf] from [Parametrizacion] where [PAR_NombreConf] = 'MinimoStockPermitido')

END
GO
USE [master]
GO
ALTER DATABASE [FacturaDBDigital] SET  READ_WRITE 
GO
