
import products from './mock.json'

const MapExample = () => {

    return (
        <table border={1}>
            <thead>
                <th>Nombre</th>
                <th>Desc</th>
                <th>precio</th>
                <th>imagen</th>
                <th></th>
            </thead>
            <tbody>
                {products.map(elem => {
                    return (
                        <tr>
                            <td> { elem.nombre }</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        

    )

}

export default MapExample