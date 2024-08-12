import Card from "@/components/Card";
import Cardbase from "@/components/Cardbase";
import { sql, connect } from '../../libs/sqlserver'; 

async function page() {
    try {
        // Asegúrate de que la conexión se establezca antes de la consulta
        await connect();

        // Realiza la consulta
        const preparedQuery = `SELECT TOP 10 * FROM articulos`; 
        const result = await sql.query(preparedQuery);

        // Mapea los resultados
        const items = result.recordset; // Usa `recordset` para acceder a los resultados de la consulta

        return (
            <div className="container">
                <h3 className="text-center py-4">Todas las Tareas ({items.length})</h3>
                <div className="row">
                    {items.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
        );
    } catch (err) {
        console.error('Error al obtener datos:', err);
        return (
            <div className="container">
                <h3 className="text-center py-4">Error al obtener datos</h3>
            </div>
        );
    }
}

export default page;
