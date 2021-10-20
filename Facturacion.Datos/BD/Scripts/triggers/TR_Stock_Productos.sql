use FacturaDBDigital
go
CREATE TRIGGER TR_Stock_Productos ON dbo.Facturacion
    FOR INSERT
AS
    DECLARE @login_name VARCHAR(128)
	declare @idprod int
    SELECT  @login_name = login_name
    FROM    sys.dm_exec_sessions
    WHERE   session_id = @@SPID
 
		IF EXISTS ( SELECT 0 FROM Inserted  )
			BEGIN

			set @idprod = (select f.FAC_IdProducto	from Inserted f)
			  
			update Productos set PRO_Cantidad = (select Pro.PRO_Cantidad - 1 from Productos Pro where Pro.PRO_IdProducto = @idprod)
			where  PRO_IdProducto = @idprod
				
			END
GO