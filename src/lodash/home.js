import React from  'react'
import {after} from './function/index';
import {castArray} from './lang/index'

class Home extends  React.Component {

    componentDidMount() {
        window.after = after
        window.castArray = castArray
        
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