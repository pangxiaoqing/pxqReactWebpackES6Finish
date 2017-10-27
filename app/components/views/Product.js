import React, { Component } from 'react'
import NavLink from '../NavLink'

export default class extends Component{
    render () {
        let props = this.props,
            params = props.params,
            url = '/account/'+params.account
        return (
            <div>
                <h2>作品中心</h2>
                <p><NavLink to={url}>切换到认证歌曲</NavLink></p>
                <div>
                    作品分类：
                    <span>作词</span><span>作曲</span>
                    <span>录音</span><span>全部</span>
                </div>
                <div>
                    作品标签：
                    <span>华语</span><span>民谣</span>
                    <span>流行</span><span>摇滚</span>
                    <span>电子</span><span>轻音乐</span>
                    <span>怀旧</span><span>治愈</span>
                    <span>全部</span>
                </div>
            </div>
        )
    }
}