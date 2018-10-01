import React from  'react'
import {after} from './function/index';

class Home extends  React.Component {

    componentDidMount() {
        window.after = after
    }
    render() {
        return (
            <div>
                Home 页面
            </div>
        )

    }
}

export default Home