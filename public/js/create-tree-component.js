AFRAME.registerComponent('create-tree-component', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.soundElem = document.querySelector('#createSound');

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            //object clicked - lets create a cow!
            Context_AF.createTree();

            Context_AF.soundElem.components['sound'].stopSound(); //stop first so we aren't trying to play more than once at same time
            Context_AF.soundElem.components['sound'].playSound();
        });
    },
    createTree : function() {
        const Context_AF = this;

        //create element, than add attributes you want. If you are creating many =you want to 
        //consider "pooling" elements (i.e. not creating/deleting a bunch but just hiding/showing a certain MAX amount with visibility="true" or "false" )
        //see here: https://www.html5rocks.com/en/tutorials/speed/static-mem-pools/ 
        //see here: https://aframe.io/docs/0.8.0/components/pool.html
        let treeElem = document.createElement('a-entity');
        treeElem.setAttribute('obj-model', {obj:'/assets/models/tree.obj'});
        treeElem.setAttribute('material', {src:'/assets/textures/tree_texture.png'});
        treeElem.setAttribute('remove-component', {}); 
        treeElem.setAttribute('position', {x:2, y:0, z:-4});
        
        let scene = document.querySelector('a-scene');
        scene.appendChild(treeElem);
    }
});