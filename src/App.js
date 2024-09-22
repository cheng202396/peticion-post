import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import ConsultaAlumnos from './components/ConsultaAlumnos';
import CursoForm from './components/CursoForm';

function App() {
    return (
        <div style={{ padding: '20px' }}>
            <nav>
                <ul>
                    <li>
                        <Link to="/consulta-alumnos">Consulta de Alumnos</Link>
                    </li>
                    <li>
                        <Link to="/cursos">Creación de Cursos</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/consulta-alumnos" element={<ConsultaAlumnos />} />
                <Route path="/cursos" element={<CursoForm />} />
            </Routes>
        </div>
    );
}

export default App;
