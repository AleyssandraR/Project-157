AFRAME.registerComponent('cursor-listener', {
    schema:{
        selectedItemId:{type:'string', default:''}
    },

    init:function(){
        this.handleMouseEnter()
        this.handleMouseLeave()
    },

    handlePlacesListState:function(){
        const id=this.el.getAttribute('id')
        var placesId=['taj-mahal', 'budapest', 'new-york-city', 'eiffel-tower']
        if(placesId.includes(id)){
            const placesContainer=document.querySelector('#places-container')
            placesContainer.setAttribute('cursor-listener', {selectedItemId:id})
            this.el.setAttribute('material', {color:'orange', opacity:1})
        }
    },

    handleMouseEnter:function(){
        this.el.addEventListener('mouseenter', ()=>{
            this.handlePlacesListState()

        })
    },

    handleMouseLeave:function(){
        this.el.addEventListener('mouseleave', ()=>{
            const{selectedItemId}=this.data
            if(selectedItemId){
                const el=document.querySelector(`#${selectedItemId}`)
                const id=el.getAttribute('id')
                if(id==selectedItemId){
                    el.setAttribute('material', {color:'#0077cc', opacity:1})
                }
            }
        })
    }
})