AFRAME.registerComponent('model-switch', {
    init: function() {
        const model = document.getElementById("3d_model")
        const switchButton = document.getElementById('modelSwitcher')
        const switchModel = () => {
            const currentModel = model.getAttribute("gltf-model")
            model.removeAttribute('gltf-model')

            if (currentModel.endsWith("-M.glb")) {
                model.setAttribute('gltf-model', `${currentModel.substring(0, currentModel.length-6)}.glb`)
                // console.log(`${currentModel.substring(0, currentModel.length-6)}.glb`)
            } else {
                model.setAttribute('gltf-model', `${currentModel.substring(0, currentModel.length-4)}-M.glb`)
                // console.log(`${currentModel.substring(0, currentModel.length-4)}-M.glb`)
            }
            
            //console.log(model.getAttribute("gltf-model"))
        }
        switchButton.onclick = switchModel
    }
  });


  