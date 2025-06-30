let interactionsImg = document.querySelectorAll('.carteira, .quadro, .Sell')
let boxes = document.querySelectorAll('.huge, .quality, .resource, .community')
let exemperfil = document.querySelectorAll('.Step, .Andry, .Zaid, .Laila')
let infosDireict = document.querySelectorAll('.antiondireitaOne , .antiondireitaTwo')
// modelo de observar o conteudo
const Myobserv = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('carteira', 'quadro', 'Sell')
          entry.target.classList.add('show')
        } 
    })
})

interactionsImg.forEach((ImgsI)=> {
  Myobserv.observe(ImgsI)
})

//Scroll baixo pra cima
const observ = new IntersectionObserver((Puxando) => {
  Puxando.forEach((atribuindo ) => {
    if (atribuindo.isIntersecting) {
      //primeiro vamos remover e dps adicionar para n da erro de codigo
      atribuindo.target.classList.remove('huge', 'quality', 'resource', 'community')
      atribuindo.target.classList.add('Transitiontop')
    }
  })
})

boxes.forEach((element) => {
    observ.observe(element)
})

const Artes = new IntersectionObserver((Avatares) => {
  Avatares.forEach((AVAs) => {
    if(AVAs.isIntersecting){
      AVAs.target.classList.remove('Step', 'Andry', 'Zaid', 'Laila')
      AVAs.target.classList.add('Transitiontop')
    } 
  })
})

exemperfil.forEach((Ok)=> {
  Artes.observe(Ok)
})

const description = new IntersectionObserver((Desc) => {
  Desc.forEach((glass) => {
    if(glass.isIntersecting) {
      glass.target.classList.remove('antiondireitaOne', 'antiondireitaTwo');
      glass.target.classList.add('show')
    }
  })
})

 infosDireict.forEach((Yes) => {
  description.observe(Yes)
})

const adies = document.querySelector('#AddMais')
function toggleDarkMode() {
  let body = document.querySelector('body')
  let Home = document.querySelector('#Home')
  let End = document.querySelector('#TheEnd')
  /*Imgs dos patrocinio */
  let Mask = document.querySelector('.Mask')
  let BitGo = document.querySelector('.BitGo')
  let CoinBase = document.querySelector('.CoinBase')
  let TrustWallet = document.querySelector('.TrustWallet')
  let Exodus = document.querySelector('.Exodus')

  if (!body.classList.contains('Dark')) {
    body.classList.add('Dark')
    Home.style.background = 'rgba(31, 21, 43, 1)' 
    End.style.background = 'rgba(31, 21, 43, 1)'

    Mask.setAttribute('src', './Assets/Componentes/Marcas/MetaMaskDark.svg')
    BitGo.setAttribute('src','./Assets/Componentes/Marcas/BitGoDark.svg')
    CoinBase.setAttribute('src', './Assets/Componentes/Marcas/CoinBase.svg')
    TrustWallet.setAttribute('src', './Assets/Componentes/Marcas/TrustWalletDark.svg')
    Exodus.setAttribute('src', './Assets/Componentes/Marcas/EXODUSDark.svg')

  } else {
    body.classList.remove('Dark')
    Home.style.background = 'url(./Assets/Background/BackgroundHome.jpg)'
    End.style.background = 'url(./Assets/Background/End.jpg)'

    Mask.setAttribute('src', './Assets/Componentes/Marcas/MetaMask.svg')
    BitGo.setAttribute('src','./Assets/Componentes/Marcas/BitGo.svg')
    CoinBase.setAttribute('src', './Assets/Componentes/Marcas/CoinBase.svg')
    TrustWallet.setAttribute('src', './Assets/Componentes/Marcas/TrustWallet.svg')
    Exodus.setAttribute('src', './Assets/Componentes/Marcas/EXODUS.svg')
  }
}
 
function onMobileToggle() {
  let NavBar = document.querySelector('nav');
  let active = NavBar.style.right === '0px';
  let Toggle = document.querySelector('.TOGGLE')
  if (!active) {
    NavBar.style.right = '0';
    NavBar.style.top = '0';
    Toggle.style.right = '5%'
    Toggle.style.top = '6%'
    Toggle.style.position = 'fixed'
  } else {
    NavBar.style.right = '-100%'; // Ou a posição inicial desejada quando estiver oculto
    NavBar.style.top = '0';  // Mantenha isso se a posição superior deve ser alterada
    Toggle.style.top = '0'
    Toggle.style.position = 'relative'
  }
}

