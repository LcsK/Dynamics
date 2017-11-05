import React from 'react';
import { Icon, Container, Content, Title } from 'native-base';

export default class Projects extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Projetos',
    drawerIcon: () => (
      <Icon name='md-paper' />
    )
  }
  render() {
    return(
      <Container>
          <Content>
            <Title style={{color:'black'}}>
              Projetos
            </Title>
          </Content>
        </Container>
    );
  }
}
