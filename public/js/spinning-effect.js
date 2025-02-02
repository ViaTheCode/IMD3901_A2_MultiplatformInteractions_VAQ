AFRAME.registerComponent('spinning-effect', {
    schema: {
        duration: { type: 'number', default: 20000 } //duration is the time for one revolution and is in milliseconds
    },
    init: function () {
        //callrd when the component is first initialized (AFTER Aframe and the scene have been initialize)

        const CONTEXT_AF = this;       // a refrence to THIS component cause javascript is stupid and I hate it
        CONTEXT_AF.walls = document.querySelector('#walls');
        CONTEXT_AF.isSpinning = false;    //state of the spin

        //lets's add the animation component in javascript
        CONTEXT_AF.walls.setAttribute('animation', { property: 'rotation.y', to: 360, loop: true, easing: 'linear', dur: CONTEXT_AF.data.diration, enabled: false })

        //listen for click
        CONTEXT_AF.el.addEventListener('click', function (e) {
            if (CONTEXT_AF.isSpinning === true) {
                //stop spinning
                console.log('stop spinning');
                CONTEXT_AF, walls.setAttribute('animation', { enabled: false });
                CONTEXT_AF.isSpinning = false;
            } else {
                //start spinning
                console.log('start spinning');
                CONTEXT_AF, walls.setAttribute('animation', { enabled: true });
                CONTEXT_AF.isSpinning = true;
            }
        });
    }
});