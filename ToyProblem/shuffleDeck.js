const shuffleDeck = function (deck) {
    // TODO: 코드를 여기에 작성합니다.
    let shuffled = [];
    while(deck.length!==0){
      let random = Math.floor(Math.random() * deck.length);
      shuffled.push(deck[random])
      deck.splice(random, 1);
    }
    return shuffled;
  };
  
  // 테스트의 편의를 위해 "정렬 상태 카드덱 생성기"를 제공해 드리겠습니다!
  // (이 함수를 마음껏 변경하셔도 됩니다. 이 함수의 원본이 테스트 파일에도 또 있으니까요)
  const orderedDeck = function () {
    let suits = ['♥', '♣', '♠', '♦'];
    let values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    let deck = [];
  
    suits.forEach(function (suit) {
      values.forEach(function (value) {
        deck.push(value + suit);
      });
    });
  
    return deck;
  };
  