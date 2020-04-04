import Head from 'next/head'
import classnames from 'classnames'

import Container from '../components/Container'
import Logo from '../components/Logo'
import MenuSection from '../components/MenuSection'
import QuickContact from '../components/QuickContact'
import JsonLd from '../components/JsonLd'
import FacebookLogo from '../components/Facebook'

import { name, menuSections, menuSectionOrder, businessJson, networks } from '../wolfs'
import { kebab, getPath, isLive } from '../helpers'

const [ fb ] = networks

// html, body, h1, h2, h3, h4, h5, h6

const Home = () => (
  <React.Fragment>
    <Head>
      <title>Wolf's Superior Sandwiches</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="description" content="Wolf's Superior Sandwiches offers a tricked out American sandwich shop menu with the classics you know and love, and specialty items you will only find here." />
      <link rel="icon" href={getPath('/favicon.ico')} />
      <link rel="apple-touch-icon" href={getPath('/apple-touch-icon.png')} />
      <meta name="apple-mobile-web-app-title" content="Wolf's Sandwiches" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    </Head>
    <div className="bg-lighter" style={{ height: 12 }}></div>

    <Container className="relative" style={{ width: 250 }}>
      <Logo title={name} className="w-full mx-auto -mt-2" />
      <div className="absolute bottom-0 right-0" style={{ width: 50, height: 50 }}>
        <a href={fb.url} className="flex items-center justify-center w-full h-full mr-1 rounded-full bg-facebook" style={{ color: '#fff' }}>
          <FacebookLogo style={{ width: 25, height: 25 }} className="fill-current" title={fb.text} />
        </a>
      </div>
    </Container>

    <Container className="py-2">
      <QuickContact />
    </Container>

    <div className="my-3 text-darker">
      <Container className="px-3 text-scale-2">
        <p>Wolf's Superior Sandwiches offers a tricked out American sandwich shop menu with the classics you know and love, and specialty items you will only find here.</p>
      </Container>
    </div>

    <Container className="px-3" id="menu">
      <h1 className="mb-2 text-scale-5 text-darkest">Menu</h1>
      <ul className="mb-2 leading-loose list-reset text-scale-0 text-dark narrow:text-scale-1 md:leading-normal">
        {menuSectionOrder.map(section =>
          <li key={section} className="inline-block mr-1 after:comma">
            <a
              className="no-underline text-primary"
              href={`#${kebab(section)}`}
              children={section}
            />
          </li>
        )}
      </ul>
      {menuSections
        .slice()
        .sort((sectionA, sectionB) =>
          menuSectionOrder.indexOf(sectionA.title) - menuSectionOrder.indexOf(sectionB.title)
        )
        .map((section, index) =>
        <MenuSection
          className={classnames(
            'pb-3 pt-3 border-lighter',
            { 'border-b': index !== menuSections.length -1 }
          )}
          headerLevel={2}
          key={section.title}
          id={kebab(section.title)}
          {...section}
        />
      )}
    </Container>

    <footer className="bg-lighter text-darker">
        <Container className="p-3 py-2 leading-loose text-scale-n1">
          <p>Consuming raw or undercooked meats, poultry, seafood, shellfish or egg may increase your risk of foodborne illness.</p>
          <ul className="mt-2 list-reset">
            <li><strong>GF</strong> = Available Gluten Free</li>
            <li><strong>SR</strong> = Served on Seeded Roll</li>
            <li><strong>W</strong> = White Pizza</li>
          </ul>
        </Container>
    </footer>

    <JsonLd data={businessJson} />

    {isLive && (
      <React.Fragment>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-131070716-1"></script>
        <script
          dangerouslySetInnerHTML={{__html: `
            window.dataLayer = window.dataLayer || []
            function gtag(){ dataLayer.push(arguments) }
            gtag('js', new Date())
            gtag('config', 'UA-131070716-1')
          `}}
        />
      </React.Fragment>
    )}
  </React.Fragment>
)

export default Home
