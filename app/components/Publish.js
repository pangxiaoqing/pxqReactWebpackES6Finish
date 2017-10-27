import React,{ Component } from 'react';
import NavLink from './NavLink';

export default class Publish extends Component{
    render(){
        return(
            <div className='wraper'>
                <div className='sidebar'>
                    <div className='u-photo'><img src='/images/user-photo.jpg' /></div>
                    <ul className='sider-list' id='manage'>
                        <li><NavLink to='/' onlyActiveOnIndex><i className='i i-h'></i> 音乐坊首页</NavLink></li>
                        <li><NavLink to='/account/A'><i className='i i-u'></i> 账户A</NavLink></li>
                        <li><NavLink to='/account/B'><i className='i i-u'></i> 账户B</NavLink></li>

                    </ul>
                </div>
                <div className='mainarea'>
                    { this.props.children }
                </div>
            </div>
        )
    }
}