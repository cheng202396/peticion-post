import React, { useState, useEffect } from 'react';

function ConsultaAlumnos() {
    const [alumnos, setAlumnos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://test-deploy-12.onrender.com/estudiantes')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Verifica la estructura de los datos
                setAlumnos(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Cargando alumnos...</p>;
    if (error) return <p>Error al cargar alumnos: {error.message}</p>;

    const filteredAlumnos = alumnos.filter(alumno => 
        alumno.Carnet && alumno.Carnet.includes(searchTerm) // Busca por "Carnet"
    );

    return (
        <div>
            <h2>Lista de Alumnos</h2>
            <input
                type="text"
                placeholder="Buscar por carnet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredAlumnos.length > 0 ? (
                    filteredAlumnos.map((alumno) => (
                        <li key={alumno._id}>{alumno.Estudiante} (Carnet: {alumno.Carnet})</li>
                    ))
                ) : (
                    <li>No se encontraron alumnos.</li>
                )}
            </ul>
        </div>
    );
}

export default ConsultaAlumnos;
