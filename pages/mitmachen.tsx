import Head from 'next/head'
import Image from 'next/image'

import { Col, Row } from 'react-bootstrap'

import Layout, { siteTitle } from '../components/Layout'
import FBIcon from '../components/navigation/FbIcon'
import InstaIcon from '../components/navigation/InstaIcon'

const Mitmachen = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | mitmachen!</title>
      </Head>

      <div>
        Hey! Du willst mitmachen, wie gut! Es kommt jetzt natürlich darauf an,
        <span className="font-italic"> was genau du machen möchtest</span>.
        <br />
        Um dir eine Übersicht zu geben, haben wir die verschiedenen
        Anlaufstellen farbig markiert, je nachdem ob du{' '}
        <br className="d-none d-lg-block" />
        <span className="theater-spielen">Theater spielen </span>{' '}
        <span className="dot theater-spielen-bg" title="theater spielen" />,{' '}
        <span className="theater-ansehen">Theater ansehen</span>{' '}
        <span className="dot theater-ansehen-bg" title="theater ansehen" /> oder{' '}
        <span className="theater-organisieren">Theater organisieren</span>{' '}
        <span
          className="dot theater-organisieren-bg"
          title="theater organisieren"
        />{' '}
        willst.
      </div>

      <Row className="mt-5">
        <Col sm={4}>
          <Image
            src="/images/schaulustv3.png"
            alt="Schaulust Logo"
            width={688}
            height={420}
            layout="responsive"
          />
          <div className="font-weight-bold font-italic mt-2">
            Schaulust e.V.
          </div>
          <div className="text-justify">
            ist eine Theaterplattform, die von Studierenden der Uni Bayreuth
            gegründet wurde, um Projekte im theater am campus der Universität
            auf organisatorischer, künstlerischer und vor allem finanzieller
            Ebene zu unterstützen. Wenn du irgendwelche Fragen zur Umsetzung
            deines Projekts hast, sind wir deine Ansprechpersonen!
          </div>
          <div>
            <div>
              <FBIcon
                href="https://www.facebook.com/Schaulust.eV"
                title="schaulust auf facebook"
              />{' '}
              <a
                href="https://www.facebook.com/Schaulust.eV"
                title="schaulust auf facebook"
                target="_blank"
                rel="noopener"
                className="text-reset"
              >
                @schaulust.ev
              </a>
            </div>
            <div>
              <InstaIcon
                href="https://www.instagram.com/e.v.schaulust/"
                title="schaulust auf instagram"
              />{' '}
              <a
                href="https://www.instagram.com/e.v.schaulust/"
                title="schaulust auf instagram"
                target="_blank"
                rel="noopener"
                className="text-reset"
              >
                @e.v.schaulust
              </a>
            </div>
            <div>
              mail:{' '}
              <a
                className="text-reset"
                href="mailto:info@schaulustev.de"
                title="mail an schaulust senden"
              >
                info@schaulustev.de
              </a>
            </div>
          </div>
          <div>
            <span
              className="dot theater-ansehen-bg mr-2"
              title="theater ansehen"
            ></span>
            <span
              className="dot theater-organisieren-bg"
              title="theater organisieren"
            ></span>
          </div>
        </Col>

        <Col sm={4}>
          <Image
            src="/images/tacv2.png"
            alt="tac logo"
            width={688}
            height={420}
            layout="responsive"
          />
          <div className="font-weight-bold font-italic mt-2">
            arbeitskreis theater am campus
          </div>
          <div className="text-justify">
            kümmert sich um die Öffentlichkeitsarbeit der studentischen
            Theaterkultur der Uni Bayreuth.
            <br />
            Wir erstellen jedes Semester neue Spielpläne, vertreten die
            Theaterkultur im Studierendenparlament und durch uns bekommt ihr
            auch immer die neusten Infos zu Theaterprojekten!
            <br />
            (diese coole Website hier ist auch von uns erstellt ;) )
          </div>
          <div>
            <span
              className="dot theater-ansehen-bg mr-2"
              title="theater ansehen"
            ></span>
            <span
              className="dot theater-organisieren-bg"
              title="theater organisieren"
            ></span>
          </div>
        </Col>
        <Col sm={4} />

        <Col sm={4} className="mt-sm-2">
          <Image
            src="/images/schwarze_schafev2.png"
            alt="Schwarze Schafe Logo"
            width={688}
            height={420}
            layout="responsive"
          />
          <div className="font-weight-bold font-italic mt-2">
            die schwarzen schafe
          </div>
          <div className="text-justify">
            sind eine studentische Theatergruppe unter dem Dach der katholischen
            Hochschulgemeinde Bayreuth. 1x pro Semester findet eine Produktion
            von meist klassischen stücken statt, wie etwa 'Gott des Gemetzels',
            'Dracula' oder auch 'Besuch der alten Dame'.
          </div>
          <div>
            <div>
              <FBIcon
                href="https://www.facebook.com/schwarzeschafebayreuth/"
                title="schwarze schafe auf facebook"
              />{' '}
              <a
                href="https://www.facebook.com/schwarzeschafebayreuth/"
                title="schwarze schafe auf facebook"
                target="_blank"
                rel="noopener"
                className="text-reset"
              >
                @schwarzeschafebayreuth
              </a>
            </div>
            <div>
              mail:{' '}
              <a
                className="text-reset"
                href="mailto:schafevorstand@gmail.com"
                title="mail an schwarze schafe senden"
              >
                schafevorstand@gmail.com
              </a>
            </div>
          </div>
          <div>
            <span
              className="dot theater-spielen-bg mr-2"
              title="theater spielen"
            ></span>
            <span
              className="dot theater-ansehen-bg mr-2"
              title="theater ansehen"
            ></span>
            <span
              className="dot theater-organisieren-bg"
              title="theater organisieren"
            ></span>
          </div>
        </Col>

        <Col sm={4} className="mt-sm-2">
          <Image
            src="/images/abdcv2.png"
            alt="American British Drama Club Logo"
            width={688}
            height={420}
            layout="responsive"
          />
          <div className="font-weight-bold font-italic mt-2">
            American British Drama Club
          </div>
          <div className="text-justify">
            ist eine studentische Theatergruppe, die englischsprachige Stücke
            auf die Bühne bringt.
          </div>
          <div>
            <FBIcon
              href="https://www.facebook.com/abdcbayreuth"
              title="american british drama club auf facebook"
            />{' '}
            <a
              href="https://www.facebook.com/abdcbayreuth"
              title="american british drama club auf facebook"
              target="_blank"
              rel="noopener"
              className="text-reset"
            >
              @abcdbayreuth
            </a>
          </div>
          <div>
            mail:{' '}
            <a
              className="text-reset"
              href="mailto:abdc.bayreuth@gmx.de"
              title="mail an abdc senden"
            >
              abdc.bayreuth@gmx.de
            </a>
          </div>
          <div>
            <span
              className="dot theater-spielen-bg mr-2"
              title="theater spielen"
            ></span>
            <span
              className="dot theater-ansehen-bg mr-2"
              title="theater ansehen"
            ></span>
            <span
              className="dot theater-organisieren-bg"
              title="theater organisieren"
            ></span>
          </div>
        </Col>

        <Col sm={4} className="mt-4 mt-sm-2">
          <div className="d-none d-sm-block">
            <Image
              src="/images/empty_logo.png"
              alt="Kein Logo"
              width={688}
              height={420}
              layout="responsive"
            />
          </div>
          <div className="font-weight-bold font-italic mt-2">
            projekte der studierenden
          </div>
          <div className="text-justify">
            Die Theaterstudent*innen realisieren freie Projekte und
            Abschlussprojekte. Von Performance über Tanz bis zu Musiktheater
            gibt's hier alles!
          </div>
          <div>
            <span
              className="dot theater-spielen-bg mr-2"
              title="theater spielen"
            ></span>
            <span
              className="dot theater-ansehen-bg mr-2"
              title="theater ansehen"
            ></span>
            <span
              className="dot theater-organisieren-bg"
              title="theater organisieren"
            ></span>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default Mitmachen
