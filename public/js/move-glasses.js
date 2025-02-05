//this and move-hat should really really be one file but I'm so so so tired and want to be done
AFRAME.registerComponent('move-glasses', {
    init: function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.glasses = document.querySelector('#glasses');
        console.log("can anyone hear me");
        //listen for click

        CONTEXT_AF.el.addEventListener('click', function (e) {
            console.log("you have clicked on the glasses");
            CONTEXT_AF.glasses.setAttribute('position', '0.881 1.1254 -0.91');
            CONTEXT_AF.glasses.setAttribute('rotation', '-9.053 0 0');
        });
    }
});