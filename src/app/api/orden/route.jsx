import { NextResponse } from "next/server";
import { sql, connect } from '../../../libs/sqlserver'; 

export async function GET(req) {
    try {
        // Conectar a la base de datos
        await connect();

        // Obtener los parámetros de consulta de la URL
        const url = new URL(req.url);
        const page = parseInt(url.searchParams.get('page')) || 1; // Default page to 1 if not provided
        const limit = 20;
        const offset = (page - 1) * limit;

        // Realizar la consulta con limitación y orden
        const result = await sql.query`
            SELECT TOP 1 *
            FROM Orden_Pedidos
            ORDER BY created DESC
        `;

        // Preparar la respuesta con la clave 'orden'
        const response = {
            orden: result.recordset // Cambia 'recordsets' por 'orden'
        };

        return NextResponse.json(response);
    } catch (error) {
        console.log('Error al listar las ordenes', error);
        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 500,
            }
        );
    }
}
