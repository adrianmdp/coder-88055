import { useEffect, useState } from "react"

const Users = () => {

    // Necesitamos 2 estados de usuarios, uno que se mantenga con los datos originales
    // y otro que lo usamos para mostrar en pantalla con o sin filtro (usersToSHow)
    const [users, setUsers] = useState(undefined)
    const [usersToShow, setUsersToShow] = useState(undefined)
    const [albums, setAlbums] = useState(undefined)

    const obtenerUsuarios = async () => {

        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if (response.ok) {
            const data = await response.json()
            setUsers(data)
        }

    }

    useEffect(() => {
        obtenerUsuarios()
    }, [])

    // Agregué este useEffect para que usersToShow se actualice siempre que haya cambios en users 
    // En nuestro código esto sólo pasa una vez pero podría darse en otros casos.
    useEffect(() => {
        setUsersToShow(users)
    }, [users])

    const handleShowAlbums = async (userId) => {

        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)

        if (response.ok) {
            const data = await response.json()
            setAlbums(data)
        }

    }

    // Resuelvo la busqueda con expresión regular y 
    // agregué la posibilidad de buscar por name, username
    // website y email
    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        const regex = new RegExp(searchTerm, 'i'); // 'i' ignora mayúsculas/minúsculas

        const newUsers = users.filter(user =>
            regex.test(user.name) ||
            regex.test(user.username) ||
            regex.test(user.website) ||
            regex.test(user.email));

        setUsersToShow(newUsers);
    };

    if (!usersToShow) return (<> Cargando... </>)

    return (
        <>
            <div>
                <label htmlFor="search">Filtro</label>
                <input type="text" name="search" id="search" onChange={handleSearch} />
            </div>
            <div>
                <select name="" id="">
                    <option value="">Deportes</option>
                    <option value="">Música</option>
                </select>
            </div>
            {usersToShow.length > 0
                ? (
                    <table border={1}>
                        <thead></thead>
                        <tbody>
                            {usersToShow.map(user => {
                                return (
                                    <>
                                        <tr key={'user' + user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.website}</td>
                                            <td>
                                                <button onClick={() => handleShowAlbums(user.id)}>Ver albums</button>
                                            </td>
                                        </tr>
                                        {albums && user.id === albums[0].userId &&
                                            (
                                                albums.map(album => {
                                                    return (
                                                        <tr key={'album' + album.id}>
                                                            <td>Album {album.id}</td>
                                                            <td colSpan={5}>{album.title}</td>
                                                        </tr>
                                                    )
                                                })

                                            )
                                        }
                                    </>
                                )
                            })}

                        </tbody>
                    </table>
                ) : (<p>No se encontraron usuarios</p>)
            }
        </>
    )

}

export default Users