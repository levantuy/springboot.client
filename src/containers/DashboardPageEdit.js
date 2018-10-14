import React, { Component } from 'react';
import { dashboardActions } from '../actions';
import { Members, MembersChart, Traffic } from '../views';
import { Button, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { Responsive, WidthProvider } from "react-grid-layout";
import Select from 'react-select';
import _ from "lodash";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBreakpoint: "lg",
            compactType: "vertical",
            mounted: false,
            layouts: { lg: [] },  
            dashboardValid: '',       
            selectedDashboard: {},
        };
        this.save = this.save.bind(this);
        this.generateDOM = this.generateDOM.bind(this);
        this.props.getAll(2, false);
        this.updateLayout = this.updateLayout.bind(this);
        this.handleChangeDashboard = this.handleChangeDashboard.bind(this);
        this.props.getDictionaries();  
        this.add = this.add.bind(this);      
    }

    static defaultProps = {
        className: "layout",
        rowHeight: 30,
        onLayoutChange: function () { },
        cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },        
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.dashboardList && nextProps.dashboardList.dashboards)
            this.setState({
                layouts: { lg: nextProps.dashboardList.dashboards }
            });       
    }

    shouldComponentUpdate(nextProps) {
        if (!nextProps.dashboardList || nextProps.dashboardList.loading) return false;
        if (nextProps.dashboardDictionary.loading) return false;
        return true;
    }

    componentDidMount() {
        this.setState({ mounted: true });
    }

    generateDOM() {
        return _.map(this.state.layouts.lg, function (l, i) {
            return (
                <div key={l.i} className={l.static ? "static" : ""}>
                    {l.i == 'Members' &&
                        (<Members id={l.id}/>)
                        || l.i == 'MembersChart' &&
                        (<MembersChart id={l.id}/>)
                        || l.i == 'Traffic' &&
                        (<Traffic id={l.id}/>)}
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
        //this.props.onLayoutChange(layout, layouts);        
        this.updateLayout(layout);
    };

    async updateLayout(layout) {
        var listNew = await this.state.layouts.lg;
        await listNew.forEach(element => {
            layout.forEach(elementNew => {
                if (element.i == elementNew.i) {
                    element.x = elementNew.x;
                    element.y = elementNew.y;
                    element.w = elementNew.w;
                    element.h = elementNew.h;
                    Promise.resolve('Done');
                }
            });
        });
        this.setState({ layouts: { lg: listNew } });
    }

    save() {
        this.props.save(this.state.layouts.lg);
    };

    handleChangeDashboard(selectedDashboard){
        this.setState({selectedDashboard});
    }

    add(){
        let data = {
            id: 0,
            userId: 0,
            x:0,
            y:0,
            h:4,
            w:3,
            i: this.state.selectedDashboard.value
        };
        this.props.add(data);
    }

    render() {
        if (this.props.dashboardList && this.props.dashboardList.loading) return (<div></div>);        
        return (<div>
            <Row>                
                <Col xs="12" md="6">
                    <Select id="dashboard_id" name="dashboard_id" value={this.state.selectedDashboard} onChange={this.handleChangeDashboard} 
                        options={this.props.dashboardDictionary.dashboards} />
                    {this.state.dashboardValid.length > 0 ? <span className="text-danger">{this.state.dashboardValid}</span> : null}
                </Col>
                <Col xs="12" md="5">
                    <Button color="primary" onClick={this.add}>Add</Button>
                </Col>
                <Col xs="12" md="1">
                    <Button color="primary" onClick={this.save}>Config save</Button>
                </Col>
            </Row>            
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
        </div>);
    }
}

const mapStateToProps = (state) => ({
    dashboardList: state.dashboardList,
    dashboardDictionary: state.dashboardDictionary,
})

const mapDispatchToProps = (dispatch) => {
    return {
        getAll: (userId, is_static) => {
            dispatch(dashboardActions.getAll(userId, is_static));
        }, save: (dashboards) => {
            dispatch(dashboardActions.save(dashboards));
        }, getDictionaries: () => {
            dispatch(dashboardActions.getDictionaries());
        }, add: (dashboard) => {
            dispatch(dashboardActions.add(dashboard));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);