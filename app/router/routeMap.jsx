import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from '../containers'
import Home from '../containers/Home'
import Project from '../containers/Project'
import NotFound from '../containers/404'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps
class RouterMap extends React.Component {
    updateHandle() {
        
    }
    render() {
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='/project' component={Project}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}
export default RouterMap