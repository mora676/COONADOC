import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Seeclient = () => {
    const [clients, setClients] = useState([
        {
            nombre: "Juan Pérez",
            correo: "juanperez@example.com",
            telefono: "3111234567",
            asunto: "Solicitud de información",
            mensaje: "Quisiera saber más sobre sus servicios.",
            afiliado: "Sí",
            atendido: false
        },
        {
            nombre: "María Rodríguez",
            correo: "maria.rodriguez@example.com",
            telefono: "3109876543",
            asunto: "Problema técnico",
            mensaje: "No puedo acceder a mi cuenta.",
            afiliado: "No",
            atendido: false
        },
        {
            nombre: "Carlos Gómez",
            correo: "cgomez@example.com",
            telefono: "3124567890",
            asunto: "Felicitación",
            mensaje: "Excelente atención. Gracias.",
            afiliado: "Sí",
            atendido: false
        },
        {
            nombre: "Ana López",
            correo: "ana.lopez@example.com",
            telefono: "3146549870",
            asunto: "Consulta general",
            mensaje: "¿Cuál es el horario de atención?",
            afiliado: "Sí",
            atendido: false
        },
        {
            nombre: "Luis Pérez",
            correo: "luisperez@example.com",
            telefono: "3178521345",
            asunto: "Reclamo",
            mensaje: "No estoy satisfecho con el servicio.",
            afiliado: "No",
            atendido: false
        },
        {
            nombre: "Eva Martínez",
            correo: "eva.martinez@example.com",
            telefono: "3197684321",
            asunto: "Sugerencia",
            mensaje: "Creo que podrían mejorar la web.",
            afiliado: "Sí",
            atendido: false
        },
    ]);

    const [filter, setFilter] = useState('');

    // Función para filtrar los clientes
    const filteredClients = clients.filter(client =>
        client.nombre.toLowerCase().includes(filter.toLowerCase()) ||
        client.correo.toLowerCase().includes(filter.toLowerCase()) ||
        client.asunto.toLowerCase().includes(filter.toLowerCase())
    );

    const marcarComoAtendido = (index) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: `¿Quieres marcar como completado al cliente ${clients[index].nombre}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, atender',
            cancelButtonText: 'No, cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                const nuevosClientes = [...clients];
                nuevosClientes[index].atendido = true;
                setClients(nuevosClientes);

                Swal.fire({
                    title: 'Cliente Atendido',
                    text: `El cliente ${nuevosClientes[index].nombre} ha sido marcado como atendido.`,
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                });
            }
        });
    };

    return (
        <div className="box-to-container-main">
            <div className="container mt-4">
                <h1 className="mb-4">Clientes por Atender</h1>

                {/* Campo de búsqueda */}
                <input
                    type="text"
                    className="form-control mb-4"
                    placeholder="Buscar por nombre, correo o asunto..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />

                <table className="table table-bordered table-custom">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Teléfono</th>
                            <th>Asunto</th>
                            <th>Mensaje</th>
                            <th>Afiliado</th>
                            <th>Estado</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredClients.map((client, index) => (
                            <tr key={index}>
                                <td>{client.nombre}</td>
                                <td>{client.correo}</td>
                                <td>{client.telefono}</td>
                                <td>{client.asunto}</td>
                                <td>{client.mensaje}</td>
                                <td>{client.afiliado}</td>
                                <td>
                                    <span className={`badge ${client.atendido ? 'badge-atendido' : 'badge-pendiente'}`}>
                                        {client.atendido ? 'Atendido' : 'Pendiente'}
                                    </span>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-atender"
                                        onClick={() => marcarComoAtendido(index)}
                                        disabled={client.atendido}
                                    >
                                        {client.atendido ? 'Completado' : 'Atender'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Seeclient;
