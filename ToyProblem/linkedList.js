const LinkedList = function () {
    // TODO: 여기에 코드를 작성합니다.
    this.head = null;
    this.tail = null;
  };
  
  // 메소드
  LinkedList.prototype.addToTail = function (value) {
      let obj = this.makeNode(value);
      if(this.head === null) {
        this.head = obj;
        this.tail = this.head;
      }
      else{
        this.tail.next = obj;
        this.tail = this.tail.next;
      }
  };
  
  LinkedList.prototype.removeHead = function () {
    let value = this.head.value;
    if(this.head.next === null) {
        this.head = null;
        this.tail = null;
        return value;
    }
    this.head = this.head.next;
    return value;
  };
  
  LinkedList.prototype.contains = function (value) {
    let node = this.head;
    while(node){
        if(node.value === value){
            return true;
        }else{
            node = node.next;
        }
    }
    return false;
  };
  
  LinkedList.prototype.makeNode = function (value) {
      return {value, next: null};
  };
  
  let list = new LinkedList();
  list.addToTail(4);
  list.removeHead();
  console.log(list);