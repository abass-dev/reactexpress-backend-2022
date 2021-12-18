import { Component } from 'react';

class clients extends Component {
constructor() {
    super();
    this.state = {
      clients: []
    };
  }

  componentDidMount() {
    fetch('/api/clients')
      .then(res => res.json())
      .then(clients => this.setState({clients}))
  }
render() {
  return (
    <div>
    <h2>Nos clients</h2>
    {this.state.clients.map(client =>
    <li> {client.id}: {client.firstName} {client.lastName}</li>)}
    </div>
   );
 }
}

export default clients;
