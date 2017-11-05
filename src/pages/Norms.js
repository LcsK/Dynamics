import React from 'react';
import { Icon, Container, Content, Title } from 'native-base';

export default class Norms extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Normas',
    drawerIcon: () => (
      <Icon name='md-menu' />
    )
  }
  render() {
    return(
      <Container>
          <Content>
            <Title style={{color:'black'}}>
              Normas
            </Title>
          </Content>
        </Container>
    );
  }
}
