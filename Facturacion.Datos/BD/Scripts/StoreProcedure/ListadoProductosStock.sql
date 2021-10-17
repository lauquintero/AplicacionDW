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
Create PROCEDURE dbo.ListadoProductosStock

AS
BEGIN
	
	Select PRO_Nombre, PRO_Cantidad 
	from Productos 
	where PRO_Cantidad < (select [PAR_ValorConf] from [Parametrizacion] where [PAR_NombreConf] = 'MinimoStockPermitido')

END
GO
