import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter, Button, Col, Row } from 'reactstrap';
import { Responsive, WidthProvider } from "react-grid-layout";
import 'react-grid-layout/css/styles.css';
import _ from "lodash";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

class Acomponent extends Component {
  render() {
    return (<div>
      <Row>
        <Col xs="12" md="12">
          <Card>
            <CardHeader>
              <h3>Title</h3>
            </CardHeader>
            <CardBody>
              <p>contents</p>
            </CardBody>
            <CardFooter>
              <Button>Save</Button>
              <Button>Cancel</Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>)
  }
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBreakpoint: "lg",
      compactType: "vertical",
      mounted: false,
      layouts: { lg: this.props.initialLayout }
    };
    this.save = this.save.bind(this);
    this.handleChangeLayout = this.handleChangeLayout.bind(this);
  }

  static defaultProps = {
    className: "layout",
    rowHeight: 30,
    onLayoutChange: function () { },
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    initialLayout: [
      { i: 'a', x: 0, y: 0, w: 3, h: 6 },
      { i: 'b', x: 3, y: 0, w: 3, h: 6 },
      { i: 'c', x: 6, y: 0, w: 3, h: 6 }
    ]
  };

  componentDidMount() {
    this.setState({ mounted: true });
  }

  generateDOM() {
    return _.map(this.state.layouts.lg, function (l, i) {
      return (
        <div key={l.i} className={l.static ? "static" : ""}>
          {i > 0 ? (<Acomponent />) : (<Acomponent />)}
        </div>
      );
    });
  }

  onBreakpointChange = breakpoint => {
    this.setState({
      currentBreakpoint: breakpoint
    });
  };

  onCompactTypeChange = () => {
    const { compactType: oldCompactType } = this.state;
    const compactType =
      oldCompactType === "horizontal"
        ? "vertical"
        : oldCompactType === "vertical" ? null : "horizontal";
    this.setState({ compactType });
  };

  onLayoutChange = (layout, layouts) => {
    this.props.onLayoutChange(layout, layouts);
  };

  save() {
    console.log(this.state.layout);
  };

  handleChangeLayout(layout) {
    console.log(layout);
    this.setState({ layout });
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs="12" md="12">
          </Col>
          <Button color="primary" onClick={this.save}>Configuration save</Button>
          <ResponsiveReactGridLayout
            {...this.props}
            layouts={this.state.layouts}
            onBreakpointChange={this.onBreakpointChange}
            onLayoutChange={this.onLayoutChange}
            // WidthProvider option
            measureBeforeMount={false}
            // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
            // and set `measureBeforeMount={true}`.
            useCSSTransforms={this.state.mounted}
            compactType={this.state.compactType}
            preventCollision={!this.state.compactType}
          >
            {this.generateDOM()}
          </ResponsiveReactGridLayout>
        </Row>
      </div>
    )
  }
}

export default Dashboard;