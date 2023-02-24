;(function () {
  'use strict'

  let timerId

  const get = (target) => {
    return document.querySelector(target)
  }

  const $progressBar = get('.progress-bar')
  
  const throttle = (callback, time) => { // 기본적인 throttle
    if (timerId) return
    timerId = setTimeout(() => {
      callback()
      timerId = undefined
    }, time)
  }

  const onScroll = () => {
    const heigth = 
    document.documentElement.scrollHeight - 
    document.documentElement.clientHeight // 페이지 스크롤 총 길이 구하기
    
    const scrollTop = document.documentElement.scrollTop

    const scrollWidth = (scrollTop / heigth) * 100
    $progressBar.style.width = scrollWidth + '%'
  }
  window.addEventListener('scroll', () => {
    throttle(onScroll, 50)
  })
})()
