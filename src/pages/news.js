import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import Spider from 'images/spider_news.svg';
import Bird from 'images/twitter_bird.svg';
import Layout from 'components/layout';

class News extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  /* eslint-disable no-undef */
  componentDidMount() {
    if (twttr.widgets) {
      this.createTimeline();
    } else {
      twttr.ready(this.createTimeline);
    }
  }

  createTimeline = () => {
    twttr.widgets.createTimeline(
      {
        sourceType: 'profile',
        screenName: 'ApiPlatform',
      },
      this.timeline,
    );
  };
  /* eslint-enable no-undef */

  render() {
    const { location } = this.props;
    return (
      <Layout location={location}>
        <div className="news">
          <Helmet title="News" />
          <section className="container">
            <img src={Spider} className="news__spider" alt="spider" />
            <h1>
              What&#39;s <strong>new</strong>?
            </h1>
            <div className="news__content">
              <div className="news__birds">
                <img src={Bird} alt="bird" width="70" height="70" />
                <img src={Bird} alt="bird" width="50" height="50" />
                <img src={Bird} alt="bird" width="40" height="40" />
              </div>
              <div
                className="twitter__timeline"
                ref={(el) => {
                  this.timeline = el;
                }}
              />
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default News;
