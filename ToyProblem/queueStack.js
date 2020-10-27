/**
 * Stack
 */
const Stack = function () {
    this.top = 0;
    this.array = [];
    // Stack 맨 위에 item을 추가합니다
    this.push = function (item) {
      this.array[this.top] = item;
      this.top++;
    };
  
    // Stack 맨 위의 item을 제거합니다
    this.pop = function () {
      this.top--;
      return this.array[this.top];
    };
  
    // Stack 안에 있는 item 개수를 반환합니다
    this.size = function () {
      return this.top;
    };
  };
  
  /**
   * Queue
   */
  const Queue = function () {
    // 두 개의 Stack 인스턴스를 이용해 Queue를 구현하세요.
    let inbox = new Stack();
    let outbox = new Stack();
    // Queue에 item을 추가합니다
    this.enqueue = function (item) {
      inbox.push(item);
    };
  
    // Queue로부터 item을 제거합니다
    this.dequeue = function () {
      let remove;
      while(inbox.size() > 0){
        outbox.push(inbox.pop());
      }
      remove = outbox.pop();
      while(outbox.size() > 0){
        inbox.push(outbox.pop());
      }
      return remove;
    };
  
    // Queue 안에 있는 item 개수를 반환합니다
    this.size = function () {
      return inbox.size();
    };
  };
