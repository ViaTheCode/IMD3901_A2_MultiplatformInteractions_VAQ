//thank you a-frame documentation

AFRAME.registerComponent('log', {
    schema: { type: 'string' },

    init: function () {
        let sceneEl = document.querySelector('a-scene');

        AFRAME.registerComponent('do-something-once-loaded', {
            init: function () {
                // This will be called after the entity has properly attached and loaded.
                console.log('I am ready!');
            }
        });

        let entityEl = document.createElement('a-entity');
        entityEl.setAttribute('do-something-once-loaded', '');
        sceneEl.appendChild(entityEl);

        entityEl.setAttribute('gltf-model', '#plant_model');

        //gltf-model="#plant_model"
        let stringToLog = this.data;
        console.log(stringToLog);
    }
});