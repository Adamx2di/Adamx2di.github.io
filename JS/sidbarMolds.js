fetch("./molds.json")
.then(response => response.json())
.then(data => {
    const moldsMenu = document.getElementById("moldMenu")
    const model = document.getElementById("3d_model")
    data.names.forEach(name => {
        const link = document.createElement('a');
        link.textContent = name
        link.onclick = () => {
            model.removeAttribute('gltf-model');
            model.setAttribute('gltf-model', `./moldsAssets/${name}.glb`);
        }
        moldsMenu.appendChild(link)
    });

})


               