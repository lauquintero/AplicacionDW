use FacturaDBDigital
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
Create PROCEDURE dbo.ListadoClientesVentas

AS
BEGIN
	
	Select C.CLI_Nombre + C.CLI_Apellidos as 'NombreCliente', C.CLI_Identificacion ,F.FAC_FechaVenta
	from Facturacion F inner join Clientes C on F.FAC_IdCliente = C.CLI_IdCliente
	
END
GO
