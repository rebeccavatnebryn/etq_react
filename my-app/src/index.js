import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Image, Grid, List } from 'semantic-ui-react';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';

class TopMenu extends React.Component {

  render() {
    const whiteItem= {color: 'white'}
    return (
        <div className="background-pic">
          <Menu borderless className="topMenu" >
          <Menu.Item><Image src="https://cdn.freebiesupply.com/logos/thumbs/2x/etq-amsterdam-logo.png" alt="logo"
                            height="100px"/></Menu.Item>
          <Menu.Item style={whiteItem}>Men</Menu.Item>
          <Menu.Item style={whiteItem}>Woman</Menu.Item>
          <Menu.Item style={whiteItem}>Permanent collection</Menu.Item>
          <Menu.Item style={whiteItem} position="right">Search</Menu.Item>
          <Menu.Item style={whiteItem}>Help</Menu.Item>
          <Menu.Item style={whiteItem}>My Account</Menu.Item>
          <Menu.Item style={whiteItem}>0</Menu.Item>
        </Menu>
        </div>
    );
  }
}

class MiddlePart extends React.Component {

  render() {
    return (
        <div>
          <Grid container className="middleText">
            <Grid.Row className="text01">
              Fall Winter - 2019 PT 03
            </Grid.Row>
            <Grid.Row className="text02">
              Explore the new collection
            </Grid.Row>
          </Grid>
        </div>

    );
  }
}

class MiddlePartTwo extends React.Component {

  render() {
    return (
        <div className="threePics">
          <Grid container verticalAlign="middle">
            <Grid.Row columns="three">
              <Grid.Column>
                <Image
                    src="https://www.etq-amsterdam.com/wp-content/uploads/2019/08/low-1-white-fitpic-1x1-816x816-c-default.jpg"
                    alt="pic1"/>
              </Grid.Column>
              <Grid.Column>
                <Image src="https://www.etq-amsterdam.com/wp-content/uploads/2019/09/1568624438.jpg" alt="pic1"/>
              </Grid.Column>
              <Grid.Column>
                <Image
                    src="https://www.etq-amsterdam.com/wp-content/uploads/2019/07/96A3122-e1565613801664-816x816-c-default.jpg"
                    alt="pic1"/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    )
  }

}

class Footer extends React.Component {

  render() {
    return (
        <div className="footer-background">
          <Grid columns="five">
            <Grid.Column width={4}>
              <b>About</b>
              <List>
                <List.Item>Founded in 2010 in Amsterdam, ETQ derived under the mindset of eliminating over-accessorized
                  branding and focusing primarily on letting the quality of the product speak for itself. Read
                  more/List.Item>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <b> Address</b>
              <List>
                <List.Item>Singel 465</List.Item>
                <List.Item>1012 WP Amsterdam</List.Item>
                <List.Item>The Netherlands</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <b> Contact</b>
              <List>
                <List.Item>Email us</List.Item>
                <List.Item>+31 (0) 202 615 614</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <b>Info</b>
              <List>
                <List.Item>Shipping info</List.Item>
                <List.Item>Contact</List.Item>
                <List.Item>Careers</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <b>Follow us</b>
              <List>
                <List.Item>Instagram</List.Item>
                <List.Item>Facebook</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

class Etq extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddlePart/>
          <MiddlePartTwo/>
          <Footer/>
        </div>
    )
  }
}

ReactDOM.render(<Etq/>, document.getElementById('root'));
