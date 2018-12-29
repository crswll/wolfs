import Head from 'next/head'

import Container from '../components/Container'
import Logo from '../components/Logo'
import MenuSection from '../components/MenuSection'
import QuickContact from '../components/QuickContact'
import JsonLd from '../components/JsonLd'

import { name, menuSections, menuSectionOrder, businessJson } from '../wolfs'
import { kebab, getPath, isLive } from '../helpers'
import "../wolfs.css"

// html, body, h1, h2, h3, h4, h5, h6

const Home = () => (
  <React.Fragment>
    <Head>
      <title>Wolf's Superior Sandwiches</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="description" content="Wolf's Superior Sandwiches offers a tricked out American sandwich shop menu with the classics you know and love, and specialty items you will only find here." />
      <link rel="icon" href={getPath('/static/favicon.ico')} />
      <link rel="apple-touch-icon" href={getPath('/static/apple-touch-icon.png')} />
    </Head>
    <div className="bg-darkest h-25"></div>
    <Container>
      <Logo
        title={name}
        className="w-250 mx-auto wide:w-300 -mt-2"
      />
    </Container>
    <Container className="py-2">
      <QuickContact />
    </Container>

    <div className="bg-lighter my-3">
      <Container className="p-3 text-scale-2">
        <p>Wolf's Superior Sandwiches offers a tricked out American sandwich shop menu with the classics you know and love, and specialty items you will only find here.</p>
      </Container>
    </div>

    <Container className="px-3" id="menu">
      <h1 className="text-scale-5 mb-2">Menu</h1>
      <ul className="list-reset text-scale-0 narrow:text-scale-1 mb-2 leading-loose md:leading-normal">
        {menuSectionOrder.map(section =>
          <li key={section} className="inline-block after:comma mr-1">
            <a
              className="text-primary-darker no-underline"
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
          className={`pb-3 pt-3 border-light ${index !== menuSections.length -1 && 'border-b-1'}`}
          headerLevel={2}
          key={section.title}
          id={kebab(section.title)}
          {...section}
        />
      )}
    </Container>

    <footer className="bg-lighter">
        <Container className="p-3 py-2 text-scale-n1 leading-loose">
          <p>Consuming raw or undercooked meats, poultry, seafood, shellfish or egg may increase your risk of foodborne illness.</p>
          <ul className="list-reset mt-2">
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
