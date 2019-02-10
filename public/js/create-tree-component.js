AFRAME.registerComponent('create-tree-component', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.soundElem = document.querySelector('#createSound');

        Context_AF.el.addEventListener('click', function(event) {
            console.log("tree");

            Context_AF.createTree();

            Context_AF.soundElem.components['sound'].stopSound(); 
            Context_AF.soundElem.components['sound'].playSound();

        });

    },

    
    createTree : function() {
        const Context_AF = this;
        let treeElem = document.createElement('a-entity');

        //create trees at random places on the plane
        function generateNumber() {
            return(Math.floor(Math.random() *4) ) 
        }
                
        function generatePositionVector(){
            return(generateNumber() + " " + 0 + " " + generateNumber() );
        }

        treeElem.setAttribute('obj-model', {obj:'/assets/models/Tree.obj'});
        treeElem.setAttribute('material', {src:'/assets/textures/Tree_texture.png'});
        treeElem.setAttribute('remove-component', {}); 
        treeElem.setAttribute('position', generatePositionVector());
        treeElem.setAttribute('scale', {x:0.01, y:0.01, z:0.01});
        treeElem.setAttribute('rotation', {x:0, y:90, z:0});
       
        let scene = document.querySelector('a-scene');
        scene.appendChild(treeElem);

        console.log(generateNumber());

        console.log(generatePositionVector());
      
    }
});