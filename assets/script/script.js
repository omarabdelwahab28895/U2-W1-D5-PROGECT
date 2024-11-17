const toggleSvgVisibility = (svgElements) => {
  const index = Math.ceil(Math.random() * svgElements.length)
  if (index < svgElements.length) {
    if (svgElements[index].getAttribute('opacity') === '1') {
      svgElements[index].setAttribute('opacity', '0')
    } else {
      svgElements[index].setAttribute('opacity', '1')
    }
  }
}

window.onload = () => {
  const svg = document.getElementById('animated-svg')
  if (svg) {
    const paths = document.getElementsByTagName('g')
    const svgElements = []
    for (let i = 0; i < paths.length; i++) {
      if (paths[i].getAttribute('stroke-linecap') === 'butt') {
        svgElements.push(paths[i])
      }
    }
    setInterval(() => {
      toggleSvgVisibility(svgElements)
    }, 50)
  }
}

let myNav = document.getElementById('primaryNav')
let mybutt = document.getElementById('introSection-button')

window.onscroll = () => {
  if (
    document.body.scrollTop >= 400 ||
    document.documentElement.scrollTop >= 400
  ) {
    myNav.classList.add('scroll')
    mybutt.style.backgroundColor = '#1a8917'
  } else {
    myNav.classList.remove('scroll')
    mybutt.style.backgroundColor = '#191919'
  }
}