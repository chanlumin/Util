import React from  'react'
import {after} from './function/index';
import {castArray,isArguments} from './lang/index'
import {baseIndexOf,arrayIncludes,getTag} from './base'

class Home extends  React.Component {

    componentDidMount() {
        window.after = after
        window.castArray = castArray
        window.baseIndexOf = baseIndexOf
        window.arrayIncludes = arrayIncludes
        window.getTag = getTag
        window.isArguments = isArguments
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