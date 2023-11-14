"use strict";
/**
 * Fetches a list of courses from the API.
 *
 * @return {Promise<Curso[]>} A promise that resolves to an array of Curso objects representing the fetched courses.
 */
async function fetchCursos() {
    try {
        const response = await fetch('https://api.origamid.dev/json/cursos.json');
        if (response.ok)
            return response.json();
    }
    catch (_a) { }
    return [];
}
/**
 * Fetches the courses and displays them on the webpage.
 *
 * @return {Promise<void>} - A Promise that resolves when the courses are displayed.
 */
async function showCourses() {
    const courses = await fetchCursos();
    if (courses.length === 0)
        return;
    const courseElements = courses.map((course) => {
        const color = course.nivel === 'iniciante' ? 'blue' : 'red';
        const tags = course.tags.map((tag) => `<span style='margin-right: 1rem;'>#${tag}</span>`).join('');
        return `
      <div>
        <h2 style="color: ${color}">${course.nome}</h2>
        <p>${course.horas}</p>
        <p>${course.aulas}</p>
        <p>${course.gratuito ? 'Gratuito' : 'Pago'}</p>
        <p>${tags}</p>
        <p>Aulas: ${course.idAulas.join(' | ')}</p>
        <p>${course.nivel}</p>
      </div>
    `;
    });
    const html = courseElements.join('');
    document.body.innerHTML = html;
}
showCourses();
