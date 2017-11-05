import React from 'react';
import { Icon, Container, Content, Title } from 'native-base';

export default class Home extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Ínicio',
    drawerIcon: () => (
      <Icon name='md-home' />
    )
  }
  render() {
    return(
      <Container>
          <Content>
            <Title style={{color:'black'}}>
              Home
            </Title>
          </Content>
        </Container>
    );
  }
}
