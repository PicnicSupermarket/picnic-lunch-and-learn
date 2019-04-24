import React, { Component } from "react";

import remark from "remark";
import remark2react from "remark-react";

export class Notes extends Component {
  constructor() {
    super();
    this.state = {
      text: null
    };
  }

  componentDidMount() {
    const markdownPath = require(`../../sessions/${
      this.props.match.params.id
    }.md`);

    fetch(markdownPath)
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          text: text
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.text &&
          remark()
            .use(remark2react)
            .processSync(this.state.text).contents}
      </React.Fragment>
    );
  }
}
