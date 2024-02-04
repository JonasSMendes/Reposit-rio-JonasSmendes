const openProject = (projetos) => {
    document.getElementById(projetos + '-template').style.display = 'block';
}

const closeProject = (projetos) => {

    document.getElementById(projetos + '-template').style.display = 'none';
}