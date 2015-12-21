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

var quo;