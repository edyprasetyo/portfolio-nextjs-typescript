import Terminal from '@nitric/react-animated-term';
import type { NextPage } from 'next';
import { db } from '../lib/db';
import Layout from './layout/layout';


export const getServerSideProps = async ({ }) => {
  const list = await db.visitor.findMany();
  return { props: { list } };
};

const Home: NextPage = ({ list }: any) => {
  function showProfile() {
    window.open('https://www.instagram.com/edyprasetyo_', '_blank');
  }

  const termLines = [
    {
      'text': 'Hello',
      'cmd': true
    },
    {
      'text': 'I\'m Edy Prasetyo',
      'cmd': false
    },
    {
      'text': '',
      'cmd': false
    },
    {
      'text': 'Current Job',
      'cmd': true
    },
    {
      'text': 'RnD Programmer Supervisor - Full Stack',
      'cmd': false
    },
    {
      'text': '',
      'cmd': false
    },
    {
      'text': 'Experienced Building Complex App Using :',
      'cmd': true
    },
    {
      'text': 'Go Lang(Beego/Gin), Java Script(NextJS-ReactJS)',
      'cmd': false
    },
    {
      'text': '',
      'cmd': false
    },
    {
      'text': 'C#(ASP.Net Framework/Core), Java, Swift, PHP(Laravel)',
      'cmd': false
    },
    {
      'text': '',
      'cmd': false
    },
    {
      'text': 'Type Script(Angular/ReactJS), Dart(Flutter)',
      'cmd': false
    },

  ]

  return (
    <Layout>
      <div id="home">
        <div style={{ height: "80px" }}></div>
        <div className="index-clip">
        </div>
        <div className="container index-container">
          <div className="row">
            <div className="col-lg-6 pt-3 img-profile-parent justify-content-center align-self-center">
              <span onClick={showProfile}>
                <h1>
                  {list[0].IP}
                </h1>

                <img className="img-fluid img-profile" src="/images/profile_4.png" />
              </span>
            </div>
            <div className="col-lg-6 pt-5">
              <div className="h1 text-green mb-2">
                <strong>
                  <Terminal
                    lines={termLines}
                    interval={100}
                  />
                </strong>
              </div>
              {/* <IndexCode></IndexCode> */}
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Home
