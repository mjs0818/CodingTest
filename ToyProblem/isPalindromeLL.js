const isPalindromeLL = function (head) {
    // TODO: 여기에 코드를 작성합니다.
    if(head.next === null) {
      return true;
    }
    
    while(head.next){

      let array = [];
      while(head) {
          array.push(head.value);
          head = head.next;
      }
      if(array.length % 2 === 0) {
        left = array.slice(0, array.length/2);
        right = array.slice(array.length/2);
      }else{
        left = array.slice(0, Math.floor(array.length/2));
        right = array.slice(Math.floor(array.length/2) + 1);
      }
      right.reverse();
  
      left = left.join('');
      right = right.join('');
      console.log(left,right);
      if(left === right) {
        return true;
      }else {
        return false;
      }
    }
  };
  
  // 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
  let Node = function (value) {
    this.value = value;
    this.next = null;
  };
  
  let makeLinkedList = (arr) => {
    const nodes = arr.map((data) => new Node(data));
    for (let i = 1; i < nodes.length; i++) {
      nodes[i - 1].next = nodes[i];
    }
    return nodes[0];
  };
  
  let head = makeLinkedList([1,2,3,4,5,4,3,2,1]);
  console.log(isPalindromeLL(head));