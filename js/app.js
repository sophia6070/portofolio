const movies = [
  {
    id: 1,
    title: '죄 많은 소녀',
    director: 'After My Death | 2018.09.13',
    poster: '1.죄 많은 소녀.png',
    text: '같은 반 친구 ‘경민’의 갑작스런 실종으로 마지막까지 함께 있었던 ‘영희’는 가해자로 지목된다. 주변의 모든 사람들이 ‘영희’를 의심한다. 죄 많은 소녀가 된 ‘영희’의 한 순간에 깨져버린 삶을 표현했다.',
  },
  {
    id: 2,
    title: '거인',
    director: ' Set Me Free | 2014.11.13',
    poster: '',
    text: '구역질 나는 집을 나와 보호시설인 그룹홈에서 자란 열일곱 ‘영재’. 시설을 나가야 할 나이가 되었지만, 집으로는 결코 돌아가고 싶지 않아 초조하다.눈칫밥을 먹으며 하루하루 버틴다.절망을 먹고 거인처럼 자란‘영재’의 절망적임을 표현했다.',
  },
  {
    id: 3,
    title: '파수꾼',
    director: 'Bleak Night | 2011.03.03',
    poster: '',
    text: '한 소년이 죽었다. 천진하고 순수했던 그 시절, 미성숙한 소통의 오해가 불러 일으킨 비극적 파국. 독단적 우정이 가져온 폭력과 그 상처의 전염은 우리를 아프고 충격적인 결말로 이끌어간다. 서로가 전부였던 이 세 친구들 사이의 관계를 표현했다.',
  },
  {
    id: 4,
    title: '레옹',
    director: 'Leon | 1995.02.18',
    poster: '',
    text: '뿌리 없이 떠도는 킬러 레옹은 어느 날 옆집 소녀 마틸다의 일가족이 몰살 당하는 것을 목격한다. 그 사이 심부름을 갔다 돌아 온 마틸다는 가족들이 처참히 몰살 당하자 레옹에게 도움을 청한다. 가족의 원수를 갚기 위해 킬러가 되기로 결심한 12세 소녀 마틸다와 킬러 레옹의 어둡고 힘든 삶을 표현했다.',
  },
]

const poster = document.getElementById('poster')
const num = document.getElementById('num')
const title = document.getElementById('title')
const director = document.getElementById('director')
const info = document.getElementById('info')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let currentIndex = 0

next.addEventListener('click', function () {
  currentIndex++
  if (currentIndex > movies.length - 1) {
    currentIndex = 0
  }
  showmovie(currentIndex)
})

prev.addEventListener('click', function () {
  currentIndex--
  if (currentIndex < 0) {
    currentIndex = movies.length - 1
  }
  showmovie(currentIndex)
})

function showmovie(currentIndex) {
  const item = movies[currentIndex]

  poster.src = item.poster
  num.textContent = item.id
  title.textContent = item.title
  director.textContent = item.director
  info.textContent = item.text
}

function init() {
  showmovie(currentIndex)
}

init()
