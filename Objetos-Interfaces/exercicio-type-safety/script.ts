interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: string;
}

async function getCursos() : Promise<unknown> {
  try {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    return await response.json();
  }catch {}

  return null;
}

function isCurso(data: unknown): data is Curso {
  if (data === null || typeof data !== 'object') {
    return false;
  }
  const requiredKeys = ['nome', 'horas', 'aulas', 'gratuito', 'tags', 'idAulas', 'nivel'];
  for (const key of requiredKeys) {
    if (!(key in data)) {
      return false;
    }
  }
  return true;
}

async function handleDataCursos() {
  const cursos = await getCursos();
  
  if (Array.isArray(cursos) && cursos.length > 0) {
    const html = cursos
      .filter(isCurso)
      .map(curso => `
        <div class="card">
          <h2>${curso.nome}</h2>
          <p>Horas: ${curso.horas}</p>
          <p>Aulas: ${curso.aulas}</p>
          <p>Gratuito: ${curso.gratuito}</p>
          <p>Tags: ${curso.tags}</p>
          <p>ID Aulas: ${curso.idAulas}</p>
          <p>Nivel: ${curso.nivel}</p>
        </div>
      `)
      .join("");
    document.body.innerHTML = html;
  }
}

handleDataCursos();
