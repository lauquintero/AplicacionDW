use FacturaDBDigital
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
alter PROCEDURE dbo.ListadoClientesEdad

AS
BEGIN
	
	Select C.CLI_Nombre + C.CLI_Apellidos as 'NombreCliente'
	from Facturacion F inner join Clientes C on F.FAC_IdCliente = C.CLI_IdCliente
	where DATEDIFF(year, C.CLI_FechaNacimiento, GETDATE()) < (select [PAR_ValorConf] from [Parametrizacion] where [PAR_NombreConf] = 'EdadClientesMinima')
	and F.FAC_FechaVenta between '2000-01-02' and '2000-05-25'

END
GO
