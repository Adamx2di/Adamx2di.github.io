document.getElementById("explodedView").addEventListener('click', function() {
    var model = document.getElementById("3d_model")
    var animationMixer = model.components["animation-mixer"].mixer
    const clipAction = animationMixer._actions[0];
    clipAction.paused = false;
    clipAction.time = 0;
    animationMixer.update(1);
    clipAction.paused = true;
})

document.getElementById("assembledView").addEventListener('click', function() {
    var model = document.getElementById("3d_model")
    var animationMixer = model.components["animation-mixer"].mixer
    const clipAction = animationMixer._actions[0];
    clipAction.paused = false;
    clipAction.time = 0;
    animationMixer.update(0);
    clipAction.paused = true;
})

document.getElementById("animationSlider").addEventListener("input" , function() {
    const sliderAnimationValue = event.target.value
    var model = document.getElementById("3d_model")
    var animationMixer = model.components["animation-mixer"].mixer
    const clipAction = animationMixer._actions[0];
    clipAction.paused = false;
    clipAction.time = 0;
    animationMixer.update(sliderAnimationValue);
    clipAction.paused = true;
})

/* Set the width of the side navigation to 250px and the right margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main-content").style.marginRight = "250px";
}

/* Set the width of the side navigation to 0 and the right margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main-content").style.marginRight = "0";
}