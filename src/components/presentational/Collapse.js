import React from "react";
import "./Collapse.css";

export class Collapse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expandedItem: null
    };
  }

  static defaultProps = { items: [], backgroundColor: "#ffffff" };
  render() {
    return (
      <div className="CollapsibleItems">
        <ul>
          {this.props.items.map((item, i) => {
            return (
              <li
                key={`item-${i}`}
                className={`item-${i} ${this.state.expandedItem === i &&
                  "open"}`}
                onClick={() => {
                  if (this.state.expandedItem === i) {
                    this.setState({ expandedItem: null });
                  } else {
                    this.setState({ expandedItem: i });
                  }
                }}
              >
                <h4 className="headingItem">{item.heading}</h4>
                <p className="expansionItem">{item.expansion}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
