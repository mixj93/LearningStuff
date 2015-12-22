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
document.writeln(myQuo.get_status()+"<br>");

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
    func(node);
    node = node.firstChild;
    while(node) {
        walk(node, func);
        node = node.nextSibling;
    }
}

var getElementsByAttribute = function(att, value) {
    var results = [];

    walk_the_DOM(document.body, function(){
        var actual = node.nodeType === 1 && node.getAttribute(att);
        if(typeof actual === 'string' && (actual === value || typeof value !== 'string')) {
            results.push(node);
        }
    });

    return results;
};