import React, { useState } from 'react';

function CursoForm() {
    const [nombre, setNombre] = useState('');
    const [creditos, setCreditos] = useState(0);
    const [descripcion, setDescripcion] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const cursoData = {
            nombre,
            creditos: Number(creditos),
            descripcion
        };

        fetch('https://test-deploy-12.onrender.com/cursos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cursoData),
        })
        .then(response => response.json())
        .then(data => {
            setMensaje('Curso agregado exitosamente!');
            setNombre('');
            setCreditos(0);
            setDescripcion('');
        })
        .catch(error => {
            setMensaje('Error al agregar el curso.');
            console.error('Error:', error);
        });
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Agregar Nuevo Curso</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Nombre del curso" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <input 
                        type="number" 
                        placeholder="Créditos" 
                        value={creditos} 
                        onChange={(e) => setCreditos(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Descripción" 
                        value={descripcion} 
                        onChange={(e) => setDescripcion(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" style={{ marginTop: '10px' }}>Enviar Curso</button>
            </form>
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
}

export default CursoForm;
