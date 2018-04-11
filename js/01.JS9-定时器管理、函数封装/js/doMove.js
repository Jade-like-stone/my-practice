/**
 * Created by 孙林旺 on 2018/1/14.
 */
function doMove(obj,attr,dist,target,bFn) {
    dist= parseInt(getStyle(obj,attr))<target?dist:-dist;
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
        var speed=parseInt(getStyle(obj,attr))+dist;

        if (speed>target&&dist>0||speed<target&&dist<0){
            speed=target;
        }
        obj.style[attr]=speed+'px';
        if (speed==target){
            clearInterval(obj.timer);
            if (bFn){
                bFn();}
        }
    },30);

}
function getStyle ( obj, attr ) { return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle( obj )[attr]; }