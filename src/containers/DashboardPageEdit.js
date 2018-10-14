import React, { Component } from 'react';
import { dashboardActions } from '../actions';
import { Members, MembersChart, Traffic } from '../views';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Responsive, WidthProvider } from "react-grid-layout";
import _ from "lodash";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBreakpoint: "lg",
            compactType: "vertical",
            mounted: false,
            layouts: { lg: this.props.initialLayout },            
        };
        this.save = this.save.bind(this);
        this.generateDOM = this.generateDOM.bind(this);
        this.props.getAll(2, this.state.id);
        this.updateLayout = this.updateLayout.bind(this);
    }

    static defaultProps = {
        className: "layout",
        rowHeight: 30,
        onLayoutChange: function () { },
        cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
        initialLayout: []
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.dashboardList && nextProps.dashboardList.dashboards)
            this.setState({
                layouts: { lg: nextProps.dashboardList.dashboards }
            });
    }

    shouldComponentUpdate(nextProps) {
        if (!nextProps.dashboardList || nextProps.dashboardList.loading) return false;
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
                        (<Members />)
                        || l.i == 'MembersChart' &&
                        (<MembersChart />)
                        || l.i == 'Traffic' &&
                        (<Traffic />)}
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

    render() {
        if (this.props.dashboardList && this.props.dashboardList.loading) return (<div></div>);        
        return (<div>
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
        </div>);
    }
}

const mapStateToProps = (state) => ({
    dashboardList: state.dashboardList,
})

const mapDispatchToProps = (dispatch) => {
    return {
        getAll: (userId, is_static) => {
            dispatch(dashboardActions.getAll(userId, is_static));
        }, save: (dashboards) => {
            dispatch(dashboardActions.save(dashboards));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);