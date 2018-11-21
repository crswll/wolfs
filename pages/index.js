import { Component } from 'react'
import Head from 'next/head'
import Container from '../components/Container'
import Logo from '../components/Logo'
import MenuButton from '../components/MenuButton'
import MenuSection from '../components/MenuSection'
import QuickContact from '../components/QuickContact'
import { name, menuSections } from '../wolfs'

import "../wolfs.css"

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
            className="w-200 mx-auto wide:w-500 -mt-2"
          />
          <MenuButton
            onClick={() => this.setMenuVisibility(!menuIsVisible)}
            hidden
          />
          <Container className="text-center text-darkest font-sans uppercase text-scale-0 font-400 py-2">
            <QuickContact />
          </Container>

          <div className="bg-lighter my-3">
            <Container className="p-3 text-scale-2">
              <p>Wolfs Superior Sandwiches offers a tricked out American sandwich shop menu with the classics you know and love, and specialty items you will only find here.</p>
            </Container>
          </div>

          <Container>
            {menuSections.map(section =>
              <MenuSection
                className="py-3"
                key={section.title}
                {...section}
              />
            )}
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
