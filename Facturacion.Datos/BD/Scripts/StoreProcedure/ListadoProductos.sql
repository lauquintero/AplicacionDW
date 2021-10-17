use FacturaDBDigital
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
Create PROCEDURE dbo.ListadoProductos
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
