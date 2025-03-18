// Dados dos livros
const livros = [
    { nome: 'O Hobbit', genero: 'aventura', descricao: 'Uma jornada épica no mundo da Terra-média.' },
    { nome: 'Orgulho e Preconceito', genero: 'romance', descricao: 'A história de Elizabeth Bennet e Mr. Darcy.' },
    { nome: '1984', genero: 'ficcao', descricao: 'Uma visão distópica do futuro sob um regime totalitário.' },
    { nome: 'A Guerra dos Tronos', genero: 'historico', descricao: 'A luta pelo Trono de Ferro nas terras de Westeros.' },
    { nome: 'O Senhor dos Anéis', genero: 'aventura', descricao: 'A missão de destruir o anel e salvar o mundo.' },
    { nome: 'A Culpa é das Estrelas', genero: 'romance', descricao: 'Uma história de amor entre dois jovens com câncer.' }
];

// Função para renderizar os livros no catálogo
function renderizarLivros(filtro = 'todos') {
    const container = document.getElementById('livros');
    container.innerHTML = '';

    const livrosFiltrados = filtro === 'todos' ? livros : livros.filter(livro => livro.genero === filtro);

    livrosFiltrados.forEach(livro => {
        const livroDiv = document.createElement('div');
        livroDiv.classList.add('livro');
        livroDiv.innerHTML = `
            <h3>${livro.nome}</h3>
            <p>${livro.descricao}</p>
            <button>Saiba mais</button>
        `;
        container.appendChild(livroDiv);
    });
}

// Função para filtrar os livros
function filtrarLivros() {
    const generoSelecionado = document.getElementById('genero').value;
    renderizarLivros(generoSelecionado);
}

// Renderizar os livros ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderizarLivros();
});
