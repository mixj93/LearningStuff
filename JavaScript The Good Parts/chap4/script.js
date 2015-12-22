// 定义一个构造器函数
var Quo = function (status) {
    this.status = status;
}

//Quo实例的公共方法
Quo.prototype.get_status = function() {
    return this.status;
};

//创建一个Quo实例
var myQuo = new Quo("confused");
document.writeln(myQuo.get_status());

//汉诺塔
var hanoi = function (disc, src, aux, dst) {
    if (disc >0) {
        hanoi(disc-1, src, dst, aux);
        document.writeln('Move disc'+disc+' from '+src+' to '+dst+'<br>');
        hanoi(disc-1, aux, src, dst);
    }
};

hanoi(4, 'SRC', 'AUX', 'DST');

//walk_the_DOM
var walk_the_DOM = function walk (node, func) {
    
}