import { Component } from 'react'
import Head from 'next/head'
import Container from '../components/Container'
import Logo from '../components/Logo'
import MenuButton from '../components/MenuButton'
import MenuSection from '../components/MenuSection'
import QuickContact from '../components/QuickContact'
import { name, menuSections, menuSectionOrder } from '../wolfs'
import "../wolfs.css"

// html, body, h1, h2, h3, h4, h5, h6, 

const setMenuVisibility = function (menuIsVisible) {
  this.setState({ menuIsVisible })
}

const scrollHandler = function (event) {
  const scrollY = event.currentTarget.scrollY
  this.setState({ scrollY })
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuIsVisible: false,
      scrollY: 0,
    }
    this.setMenuVisibility = setMenuVisibility.bind(this)
  }

  componentDidMount () {
    this.scrollHandler = scrollHandler.bind(this)
    window.addEventListener('scroll', this.scrollHandler)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.scrollHandler)
  }

  render() {
    const { menuIsVisible } = this.state

    return (
      <React.Fragment>
        <Head>
          <title>Wolf's Superior Sandwiches</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <meta name="format-detection" content="telephone=no" />
        </Head>
        <div className="font-serif leading-normal text-scale-0">
          <div className="bg-darkest h-20"></div>
          <Logo
            title={name}
            className="w-250 mx-auto wide:w-500 -mt-2"
          />
          <MenuButton
            onClick={() => this.setMenuVisibility(!menuIsVisible)}
            hidden
          />
          <Container className="py-2">
            <QuickContact />
          </Container>

          <div className="bg-lighter my-3">
            <Container className="p-3 text-scale-2">
              <p>Wolfs Superior Sandwiches offers a tricked out American sandwich shop menu with the classics you know and love, and specialty items you will only find here.</p>
            </Container>
          </div>

          <Container >
            {menuSections
              .slice()
              .sort((sectionA, sectionB) =>
                menuSectionOrder.indexOf(sectionA.title) - menuSectionOrder.indexOf(sectionB.title)
              )
              .map((section, index) =>
              <MenuSection
                className={`mb-3 pb-3 px-3 border-light ${index !== menuSections.length -1 && 'border-b-1'}`}
                key={section.title}
                {...section}
              />
            )}
          </Container>

          <footer className="bg-lighter">
              <Container className="p-3 py-2 text-scale-n1 leading-loose">
                <p><strong>GF</strong> = Available Gluten Free, <strong>SR</strong> = Served on Seeded Roll, <strong>W</strong> = White Pizza</p>
                <p>Consuming raw or undercooked meats, poultry, seafood, shellfish or egg may increase your risk of foodborne illness.</p>
              </Container>
          </footer>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
