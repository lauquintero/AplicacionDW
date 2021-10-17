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
Create PROCEDURE dbo.ListadoProductosAño

AS
BEGIN
	
	Select PRO_Nombre, SUM(P.PRO_Valor)
	from Productos P inner join Facturacion F on P.PRO_IdProducto = F.FAC_IdProducto
	where YEAR(F.FAC_FechaVenta) = 2000
	group by PRO_Nombre

END
GO
