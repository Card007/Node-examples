var log = function(){
    console.log.apply(console, arguments)
}

//队列结构，实现先进先出
var Queue = function(){
    this.data = []
}

Queue.prototype.enqueue = function(element){
    this.data.push(element)
}

Queue.prototype.dequeue = function(element){
    return this.data.splice(0,1)[0]
}

Queue.prototype.length = function(){
    return this.data.length
}

Queue.prototype.empty = function(){
    this.data = []
}

//stack 栈
//相当于python的添加和pop
var Stack = function(){
    this.data = []
}

Stack.prototype.push = function(n){
    this.data.push(n)
}

Stack.prototype.pop = function(){
    var index = this.data.length - 1
    return this.data.splice(index,1)[0]
}

Stack.prototype.stop = function(){
    var index = this.data.length - 1
    return this.data[index]
}

//链表
//Node对象，其中包含了element和next，element是在调用类本身的时候导入的数，而next默认为空
//一般为空的话很可能是排在末尾的数
var Node = function(e){
    this.element = e
    this.next = null
}

//链数列表类，包含了node类，将node类作为链表上的链数
//head创建了一个新的链数，默认null为空
var LinkdeList = function(){
    //当创建一个新的链表时，里面会包含一个空的链数
    this.head = new Node()
    this._length = 0
}

//添加新链数
LinkdeList.prototype.append = function(e){
    var node = new Node(e)
    var n = this.head
    while(n.next != null){
        n = n.next
    }
    n.next = node
    this._length++
}


LinkdeList.prototype.indexof = function(e){
    var n = this.head
    for (let i = 0; i < this._length; i++) {
        n = n.next
        if (n.element == e){
            return i
        }
    }
}

LinkdeList.prototype.log = function(){
    var n = this.head.next
    while(n != null){
        log('>',n.element)
        n = n.next
    }
}




























