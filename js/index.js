var oLiList =  Array.prototype.slice.call(document.getElementsByTagName('li'));
oLiList.forEach(function(ele,index){
    ele.addEventListener('mouseenter',function(e){
        addClass(this,e,'in');
    })
    ele.addEventListener('mouseleave',function(e){
        addClass(this,e,'out');
    })
})

function addClass(ele,e,state){
    var  w=ele.offsetWidth;
    var h=ele.offsetHeight;
    var x = e.offsetX - w/2;
    var y = e.offsetY - h/2;
    var d=(Math.round((Math.atan2(y,x)*(180/Math.PI)+180)/90)+3)%4;
    var direction;
    switch(d){
        case 0:direction = '-top';break;
        case 1:direction = '-right';break;
        case 2:direction ='-bottom' ;break;
        case 3:direction ='-left' ;
    }
    ele.className = state +direction;
}