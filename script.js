document.addEventListener('DOMContentLoaded', () => {
    // Navegação suave para âncoras internas (quando forem adicionadas)
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Ações para os links dos projetos (podem ser adaptadas depois que os arquivos forem adicionados)
    const projetos = document.querySelectorAll('section:nth-of-type(2) a');
  
    projetos.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const texto = link.textContent.trim();
  
        switch (texto) {
          case 'Currículo (PDF)':
            alert('O arquivo PDF ainda não foi vinculado.');
            break;
          case 'Apresentação em Slides':
            alert('A apresentação ainda não foi vinculada.');
            break;
          case 'Projeto PHET':
            alert('O link do projeto PHET ainda não foi definido.');
            break;
          default:
            alert('Link não reconhecido.');
        }
      });
    });
  });
