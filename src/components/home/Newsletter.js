import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

class Newsletter extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      status: '',
      message: '',
    };
  }

  // Update state each time user edits their email address
  _handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  _postEmailToMailchimp = (email) => {
    addToMailchimp(email)
      .then((result) => {
        if ('success' !== result.result) {
          this.setState({
            status: 'error',
            message: result.msg,
          });
        } else {
          // Email address succesfully subcribed to Mailchimp
          this.setState({
            status: 'success',
            message: 'Thank you! Youʼll receive your first email shortly.',
          });
        }
      })
      .catch(() => {
        // Network failures, timeouts, etc
        this.setState({
          status: 'error',
          message: 'There was a problem adding your email address, please try again.',
        });
      });
  }

  _handleFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState(
      {
        status: 'sending',
        message: null,
      },
      // setState callback (subscribe email to MC)
      this._postEmailToMailchimp(this.state.email),
    );
  }

  render() {
    return (
      <section id="newsletterSection" className="home__part home__newsletter">
        <div className="container newsletter__container">
          <h1 className="newsletter__title">
            Sign up for our Mailing List
          </h1>
          <article className="newsletter__content">
            <p>
              We are still sharpening our swords and crafting our armor. Join the mailing list
              now to be one of the first notified when FA is available for additional sign ups.
            </p>
          </article>
          <div className="newsletter__form">

            {
              ('success' === this.state.status || 'error' === this.state.status) && (
                <div className={`newsletter__message${this.state.status}`}>{this.state.message}</div>
              )
            }

            <form
              id="email-capture"
              method="post"
              noValidate
            >
              <div className="input ui">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                  onChange={this._handleEmailChange}
                />
              </div>

              <button
                type="submit"
                className="ui button"
                onClick={this._handleFormSubmit}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Newsletter;
