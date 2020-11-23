// 좌표평면 위의 두 점 사이의 거리르 계산하는 함수입니다.
function calculateDistance(p1, p2) {
  const yDiff = p2[0] - p1[0]
  const xDiff = p2[1] - p1[1]
  return Math.sqrt(Math.pow(yDiff, 2) + Math.pow(xDiff, 2))
}

const TSP = function (places) {
  let currentMinDist = Number.MAX_VALUE
  const LENGTH = places.length
  function traverse(lastVisited, visited, totalDist, visitNum) {
    if (visitNum === LENGTH) {
      if (currentMinDist > totalDist) {
        currentMinDist = totalDist
      }
      return
    }

    visited.forEach((value, idx) => {
      if (value === false) {
        // 아직 방문하지 않은 도시와
        // 마지막으로 방문한 도시와의 거리를 구한다.
        const distToNext = calculateDistance(places[lastVisited], places[idx])
        visited[idx] = true
        traverse(idx, visited, totalDist + distToNext, visitNum + 1)
        visited[idx] = false
      }
    })
  }

  // 각 도시의 현재 방문 여부를 관리하는 배열
  const visited = Array(LENGTH).fill(false)
  places.forEach((_, idx) => {
    // 각 도시에서 출발하는 경우를 구분한다.
    visited[idx] = true
    traverse(idx, visited, 0, 1)
    visited[idx] = false
  })

  return currentMinDist
}
