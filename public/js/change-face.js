AFRAME.registerComponent('change-face', {
    schema: {
        please: { type: 'boolean', default: true } //it broke when I didn't do this
    },
    init: function () {

        const CONTEXT_AF = this;       // a refrence to THIS component cause javascript or whatever
        CONTEXT_AF.guy = document.querySelector('#guy');


        let scene = document.querySelector('a-scene');


        //thank you a-frame documentation
        AFRAME.registerComponent('do-something-once-loaded', {
            init: function () {
                // This will be called after the entity has properly attached and loaded.
                console.log('I am ready!');
            }
        });

        let shapeType = 1;
        let isCriminal = 0;     //random number from 1-3 (inclusive). if it's 3 it will be the correct guy to catch
        let eyeType = 0;        //random number from 1-3, determines eye type
        let hairType = 0;       //1-3, type of hair 
        let glassesType = 0;    //0-2, type of glasses (0 is no glasses)
        let hatType = 0;            //0-1, yes hat or no hat 

        CONTEXT_AF.el.addEventListener('click', function (e) {

            let shape = document.querySelector('#hair');
            shape.parentNode.removeChild(shape);

            let eyeEl = document.querySelector('#eyes')
            eyeEl.parentNode.removeChild(eyeEl);

            let glassesEl = document.querySelector('#glasses');
            glassesEl.parentNode.removeChild(glassesEl);

            let hatEl = document.querySelector('#hat');
            hatEl.parentNode.removeChild(hatEl);

            shapeType = Math.floor((Math.random() * 3) + 1);
            hairType = Math.floor((Math.random() * 3) + 1);
            eyeType = Math.floor((Math.random() * 3) + 1);
            glassesType = Math.floor((Math.random() * 3));
            hatType = Math.floor((Math.random() * 2));

            console.log('button clicked');
            console.log(shapeType);

            let hair = document.createElement('a-entity');
            hair.setAttribute('do-something-once-loaded', '');
            CONTEXT_AF.guy.appendChild(hair);

            let eyes = document.createElement('a-entity');
            eyes.setAttribute('do-something-once-loaded', '');
            CONTEXT_AF.guy.appendChild(eyes);
            let r_eye = document.createElement('a-entity');
            r_eye.setAttribute('do-something-once-loaded', '');
            eyes.appendChild(r_eye);
            let l_eye = document.createElement('a-entity');
            l_eye.setAttribute('do-something-once-loaded', '');
            eyes.appendChild(l_eye);

            let glasses = document.createElement('a-entity');
            glasses.setAttribute('do-something-once-loaded', '');
            CONTEXT_AF.guy.appendChild(glasses);

            let hat = document.createElement('a-entity');
            hat.setAttribute('do-something-once-loaded', '');
            CONTEXT_AF.guy.appendChild(hat);

            if (hairType === 1) {
                hair.setAttribute('gltf-model', '#brown_hair_model');
                hair.setAttribute('position', '0 2.3 -2');
                hair.setAttribute('scale', '0.4 0.3 0.4');
            } else if (hairType === 2) {
                hair.setAttribute('gltf-model', '#buzzed_hair_model');
                hair.setAttribute('position', '0 2.36 -2');
                hair.setAttribute('scale', '0.3 0.1 0.3');
            } else if (hairType === 3) {
                hair.setAttribute('gltf-model', '#swirly_hair_model');
                hair.setAttribute('position', '-0.09 2.391 -2');
                hair.setAttribute('scale', '0.15 0.15 0.15');
            }

            if (eyeType === 1) {
                eyes.setAttribute('gltf-model', '#cat_eyes_model');
                eyes.setAttribute('position', '0 2.047 -1.717');
                eyes.setAttribute('scale', '0.1 0.1 0.1');
            } else if (eyeType === 2) {
                r_eye.setAttribute('gltf-model', '#eye1_model');
                r_eye.setAttribute('position', '0.087 2.056 -2.158');
                r_eye.setAttribute('scale', '1.5 1.5 1.5');
                l_eye.setAttribute('gltf-model', '#eye1_model');
                l_eye.setAttribute('position', '-0.159 2.056 -2.158');
                l_eye.setAttribute('scale', '1.5 1.5 1.5');
            } else if (eyeType === 3) {
                r_eye.setAttribute('gltf-model', '#eye2_model');
                r_eye.setAttribute('position', '0.146 2.063 -1.722');
                r_eye.setAttribute('rotation', '9.983 89.87 31.459');
                r_eye.setAttribute('scale', '2 2 2');
                l_eye.setAttribute('gltf-model', '#eye2_model');
                l_eye.setAttribute('position', '-0.127 2.063 -1.722');
                l_eye.setAttribute('rotation', '9.983 49.94 31.459');
                l_eye.setAttribute('scale', '2 2 2');
            }

            if (glassesType === 1) {
                glasses.setAttribute('gltf-model', '#sunglasses_model');
                glasses.setAttribute('position', '0 1.852 -1.665');
                glasses.setAttribute('scale', '0.025 0.025 0.025');
            } else if (glassesType === 2) {
                glasses.setAttribute('gltf-model', '#goggles_model');
                glasses.setAttribute('position', '0 2.032 -1.841');
                glasses.setAttribute('scale', '0.35 0.35 0.35');
            }

            if (hatType === 1) {
                hat.setAttribute('gltf-model', '#top_hat_model');
                hat.setAttribute('position', '0 2.49 -2.027');
                hat.setAttribute('scale', '0.3 0.3 0.3');
            }

            hair.setAttribute('id', 'hair');
            eyes.setAttribute('id', 'eyes');
            r_eye.setAttribute('id', 'r_eye');
            l_eye.setAttribute('id', 'l_eye');
            glasses.setAttribute('id', 'glasses');
            hat.setAttribute('id', 'hat');

        });



    }
});