import React from  'react'
import {after} from './function/index';
import {castArray} from './lang/index'
import {baseIndexOf,arrayIncludes} from './base'

class Home extends  React.Component {

    componentDidMount() {
        window.after = after
        window.castArray = castArray
        window.baseIndexOf = baseIndexOf
        window.arrayIncludes = arrayIncludes
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