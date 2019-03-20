import * as React from "react";

export default class PetShopWindow extends React.Component<any, any> {
  render() {
    const { pets } = this.props;

    return (
      <ul>
        {pets.map((p, i) => (
          <li key={i}>{p.name}</li>
        ))}
      </ul>
    );
  }
}
