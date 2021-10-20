use FacturaDBDigital
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Laureano Quintero
-- Create date: 15-10-2021
-- Description:	Listado de productos
--ListadoProductosAno 
-- =============================================
alter PROCEDURE dbo.ListadoProductosAno

AS
BEGIN
	
	Select P.PRO_Nombre as Nombreproducto, MONTH(F.FAC_FechaVenta) as Mes , SUM(P.PRO_Valor) as valorVendido
	from Productos P inner join Facturacion F on P.PRO_IdProducto = F.FAC_IdProducto
	where YEAR(F.FAC_FechaVenta) = 2000
	group by PRO_Nombre, F.FAC_FechaVenta

END
GO
