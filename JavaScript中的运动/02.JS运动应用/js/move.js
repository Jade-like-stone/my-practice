/**
 * Created by 孙林旺 on 2018/1/30.
 */
function doMove(obj,json,fn) {
    clearInterval(obj.timer);
    var iCur=0;
    var iSpeed=0;
    obj.timer=setInterval(function () {
        var iBtn=true;
        //定时器每走一下就要把要运动的属性都推进一次
        for(var attr in json){
            var dis=json[attr];
            if (attr=='opacity'){
                iCur=Math.round(css(obj,'opacity')*100);//标准0.3 非标准0.3
            }else {
                iCur=parseInt(css(obj,attr));
            }
            iSpeed=(dis-iCur)/8;
            iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
//                    alert(iCur);
            if (iCur!=dis){
                iBtn=false;
                if (attr=='opacity'){
                    obj.style.opacity=(iCur+iSpeed)/100;
                    obj.style.filter='alpha(opacity='+(iCur+iSpeed)+')'; }
                else {
                    obj.style[attr]=iCur+iSpeed+'px';
                }
            }
        }
        //在这里看下
        if(iBtn){
            clearInterval(obj.timer);
            fn&&fn.call(obj);

        }
    },30);
}

function css(obj,attr) {
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else {
        return getComputedStyle(obj,false)[attr];
    }
}