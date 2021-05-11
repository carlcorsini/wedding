/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container
    className="opaque"
    style={{ borderRadius: '15px', paddingBottom: '1em' }}
    text>
    <Header
      as="h1"
      content="Estefany & Carl"
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as="h2"
      content="The Wedding of Estefany & Carl"
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
      }}
    />
    <Header
      as="h5"
      content="June 5th, 2021"
      inverted
      style={{
        fontSize: mobile ? '1em' : '1.2em',
        fontWeight: 'normal',
        marginTop: mobile ? '1em' : '1.2em',
      }}
    />
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}>
          <Segment
            className="home-heading"
            inverted
            textAlign="center"
            style={{ minHeight: 1000, padding: '1em 0em' }}
            vertical>
            <div className="opaque">
              <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size="large">
                <Container>
                  <Menu.Item position="right">
                    <Button
                      as="a"
                      inverted
                      color="green"
                      size="huge"
                      href="https://www.zola.com/registry/carlandestefany"
                      target="_blank"
                      animated>
                      <Button.Content visible>Wedding Registry</Button.Content>
                      <Button.Content hidden>
                        <Icon name="gift" />
                      </Button.Content>
                    </Button>
                    <Button
                      href="#details"
                      inverted={!fixed}
                      style={{ marginLeft: '0.5em' }}>
                      Details
                    </Button>
                    <Button
                      href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3A5270f9355e0849bdbac75b2b7971e74a%40thread.tacv2%2F1620184307481%3Fcontext%3D%257b%2522Tid%2522%253a%2522a56162b0-44e1-44ff-b810-b703aa81c222%2522%252c%2522Oid%2522%253a%2522cfed5b4a-cf8f-4d16-8227-7855007877e6%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=c9c842e9-ca5b-48b9-89a2-3f5405d2c298&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true"
                      target="_blank"
                      as="a"
                      inverted={!fixed}
                      primary={fixed}
                      style={{ marginLeft: '0.5em' }}>
                        <Icon name="microsoft"/>
                    Join Live Meeting
                    </Button>
                  </Menu.Item>
                </Container>
              </Menu>
            </div>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}>
            <Menu.Item href="#details" as="a">
              Details
            </Menu.Item>
            <Menu.Item
              href="https://www.zola.com/registry/carlandestefany"
              as="a">
              Registry
            </Menu.Item>
            <Menu.Item
              href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3A5270f9355e0849bdbac75b2b7971e74a%40thread.tacv2%2F1620184307481%3Fcontext%3D%257b%2522Tid%2522%253a%2522a56162b0-44e1-44ff-b810-b703aa81c222%2522%252c%2522Oid%2522%253a%2522cfed5b4a-cf8f-4d16-8227-7855007877e6%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=c9c842e9-ca5b-48b9-89a2-3f5405d2c298&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true"
              target="_blank"
              as="a">
                <Icon name="microsoft"/>
            Join Live Meeting
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              className="home-heading"
              inverted
              textAlign="center"
              style={{ minHeight: 250, padding: '1em 0em' }}
              vertical>
              <Container className="opaque">
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item >
                    <Button
                      href="https://www.zola.com/registry/carlandestefany"
                      target="_blank"
                      as="a"
                      inverted>
                      <Icon name="gift" />
                      Registry
                    </Button>
                  </Menu.Item>
                  <Menu.Item>
                    <Button
                      href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3A5270f9355e0849bdbac75b2b7971e74a%40thread.tacv2%2F1620184307481%3Fcontext%3D%257b%2522Tid%2522%253a%2522a56162b0-44e1-44ff-b810-b703aa81c222%2522%252c%2522Oid%2522%253a%2522cfed5b4a-cf8f-4d16-8227-7855007877e6%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=c9c842e9-ca5b-48b9-89a2-3f5405d2c298&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true"
                      target="_blank"
                      as="a"
                      inverted>
                      <Icon name="microsoft" />
                      Teams
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header
              id="details"
              as="h2"
              style={{ fontSize: '2em', fontStyle: 'italic' }}>
              Wedding Details
            </Header>
            <p style={{ fontSize: '1.75em' }}>
              Save the rapidly approaching date of June 5th, 2021.
            </p>
            <p style={{ fontSize: '1.5em' }}>
              Estefany Rodriguez Solano and Carl Corsini are getting married
              Saturday, June 5th, 2021 @ 4pm
            </p>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Location
            </Header>
            <p style={{ fontSize: '1.5em' }}>The Ranch</p>
            <p style={{ fontSize: '1.33em' }}>25 Nelson Lane</p>
            <p style={{ fontSize: '1.33em' }}>Cotati, California</p>
          </Grid.Column>
          <Grid.Column floated="right" width={8}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Timing
            </Header>
            <p style={{ fontSize: '1.5em' }}>Guests Arrive: 3pm</p>
            <p style={{ fontSize: '1.5em' }}>Ceremony: 4pm</p>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Attire
            </Header>
            <p style={{ fontSize: '1.33em' }}>Flats recommended</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Container>
            <Image
              style={{ marginTop: '2em' }}
              src="https://github.com/carlcorsini/wedding/blob/main/src/pics/The%20Wedding%20of%20Estefany%20&%20Carl.png?raw=true"></Image>
          </Container>
        </Grid.Row>
      </Grid>
    </Segment>
  </ResponsiveContainer>
);

export default HomepageLayout;
