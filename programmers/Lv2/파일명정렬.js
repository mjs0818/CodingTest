function solution(files) {
  // 영문 대소문자, 숫자, 공백, 마침표, - 만 포함, 영문자로 시작하며 숫자를 하나 이상 포함
  // HEAD, NUMBER, TAIL 로 구성 => HEAD 는 숫자아닌 문자열, NUMBER는 최대 5자의 숫자, TAIL은 나머지 부분으로 숫자가 있을 수도 있고 빈문자 일 수 있음
  // 정렬 기준 1. HEAD 사전 순(대소문자 구분x) 2. Number 숫자 순으로 정렬 숫자 앞의 0 은 무시됨 3. HEAD와 Number가 같다면 순서가 바뀌면 안됨

  // 파일명 분리
  const split = (file) => {
    let HEAD = '',
      NUMBER = '',
      TAIL = '';
    let number = '0123456789';

    // HEAD 분리
    for (let i = 0; i < file.length; i++) {
      if (number.includes(file[i])) {
        HEAD = file.slice(0, i);
        file = file.slice(i, file.length);
        break;
      }
    }

    // NUMBER, TAIL 분리
    for (let i = 0; i < file.length; i++) {
      if (!number.includes(file[i])) {
        NUMBER = file.slice(0, i);
        TAIL = file.slice(i, file.length);
        break;
      }
    }

    if (NUMBER === '') NUMBER = file;
    return [HEAD, NUMBER, TAIL];
  };

  let splitFiles = files.map((file) => split(file));

  // HEAD 기준으로 정렬 대소문자 구분하지 않기 때문에 하나로 통일
  const sort = (a, b) => {
    if (a[0].toLowerCase() === b[0].toLowerCase()) {
      // HEAD가 같으면 NUMBER 기준 정렬
      if (Number(a[1]) > Number(b[1])) return [b, a];
      else return [a, b];
    }
    if (a[0].toLowerCase() > b[0].toLowerCase()) {
      return [b, a];
    } else return [a, b];
  };

  for (let i = splitFiles.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      [splitFiles[j], splitFiles[j + 1]] = sort(splitFiles[j], splitFiles[j + 1]);
    }
  }
  return splitFiles.map((file) => file.join(''));
}
