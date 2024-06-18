-- Tabela de Inscrições
CREATE TABLE inscricoes (
    id SERIAL PRIMARY KEY,
   	usuario_id INT NOT NULL REFERENCES Usuarios(id),
    curso_id INT NOT NULL REFERENCES Cursos(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP
);