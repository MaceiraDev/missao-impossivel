import React from 'react'
import { Header } from './components/Header'
import { Card } from './components/Card'
import { Footer } from './components/Footer'

import banner from './imagens/banner.jpg'
import card1 from './imagens/card1.jpg'
import card2 from './imagens/card2.jpg'
import card3 from './imagens/card3.jpg'
import card4 from './imagens/card4.jpg'

import styles from './styles.module.css'
import './styles/global.css'
// npm install
// npm run start


// https://github.com/profchines
function App() {

  return (
    <>
      <Header />
      <img width="100%" src={banner} />
      <h1
        style={{
          margin: 15
        }}
      >Filmes Disponíveis</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Card imagem={card1} titulo={'Missão Impossivel 2'} link={'https://www.google.com/search?q=miss%C3%A3o+imposs%C3%ADvel+2&sca_esv=562027865&sxsrf=AB5stBiirfpHEO6JzrhpFOrb8sN6vWjJSw%3A1693607040432&ei=gGTyZMb1GfDQ1sQP5LOusAo&ved=0ahUKEwjGtaLwuYqBAxVwqJUCHeSZC6YQ4dUDCBA&uact=5&oq=miss%C3%A3o+imposs%C3%ADvel+2&gs_lp=Egxnd3Mtd2l6LXNlcnAiFW1pc3PDo28gaW1wb3Nzw612ZWwgMjIHECMYigUYJzIIEC4YgAQYsQMyBRAuGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQLhiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIXEC4YgAQYsQMYlwUY3AQY3gQY4ATYAQNIjQNQLFgscAF4AZABAJgBc6ABc6oBAzAuMbgBA8gBAPgBAcICChAAGEcY1gQYsAPCAgoQABiKBRiwAxhDwgIOEAAY5AIY1gQYsAPYAQHCAhAQLhiKBRjIAxiwAxhD2AEC4gMEGAAgQYgGAZAGE7oGBggBEAEYCboGBggCEAEYCLoGBggDEAEYFA&sclient=gws-wiz-serp'} />
        <Card imagem={card2} titulo={'Missão Impossivel 3'} link={'https://www.google.com/search?q=miss%C3%A3o+imposs%C3%ADvel+3&sca_esv=562027865&sxsrf=AB5stBhaFuigr3ROYKs-vuUTj4p2j-YGQA%3A1693607075723&ei=o2TyZKjXK63S1sQP4a66qAk&ved=0ahUKEwjotIyBuoqBAxUtqZUCHWGXDpUQ4dUDCBA&uact=5&oq=miss%C3%A3o+imposs%C3%ADvel+3&gs_lp=Egxnd3Mtd2l6LXNlcnAiFW1pc3PDo28gaW1wb3Nzw612ZWwgMzIKEC4YsQMYigUYQzIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIZEC4YsQMYigUYQxiXBRjcBBjeBBjgBNgBAkiXpAJQgqICWIGjAnACeAGQAQCYAXigAe4BqgEDMC4yuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICChAAGIoFGLADGEPCAhAQLhiKBRjIAxiwAxhD2AEBwgIHECMYigUYJ8ICBBAjGCfCAgUQLhiABMICChAuGIoFGLEDGEPCAgcQLhiKBRhD4gMEGAAgQYgGAZAGFLoGBggBEAEYCLoGBggCEAEYFA&sclient=gws-wiz-serp'} />
        <Card imagem={card3} titulo={'Missão Impossivel Nação Secreta'} link={'https://www.google.com/search?q=miss%C3%A3o+imposs%C3%ADvel+na%C3%A7%C3%A3o+secreta&sca_esv=562027865&sxsrf=AB5stBiCUhwOYvlIL6HzcqQHxwz1jk7bdg%3A1693606996862&ei=VGTyZPChNMnk1sQPo_aC-Ac&oq=miss%C3%A3o%3A+imposs%C3%ADvel+%E2%80%93n&gs_lp=Egxnd3Mtd2l6LXNlcnAiGW1pc3PDo286IGltcG9zc8OtdmVsIOKAk24qAggAMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSN4nUKYhWKYhcAV4AZABAJgBfKABfKoBAzAuMbgBAcgBAPgBAcICBxAjGLADGCfCAgoQABhHGNYEGLAD4gMEGAAgQYgGAZAGCQ&sclient=gws-wiz-serp'} />
        <Card imagem={card4} titulo={'Missão Impossivel Acerto de Contas'} link={'https://www.google.com/search?q=miss%C3%A3o%3A+imposs%C3%ADvel+%E2%80%93+acerto+de+contas+parte+1&oq=MI&gs_lcrp=EgZjaHJvbWUqBggBECMYJzIGCAAQRRg5MgYIARAjGCcyCQgCECMYJxiKBTIGCAMQRRg7MgYIBBBFGDsyDQgFEAAYgwEYsQMYgAQyEAgGEC4YxwEYsQMY0QMYgAQyCggHEC4YsQMYgAQyDQgIEAAYgwEYsQMYgAQyCggJEAAYsQMYgATSAQgyOTY3ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8'} />
      </div >
      <Footer />
    </>
  );
}

export default App;
