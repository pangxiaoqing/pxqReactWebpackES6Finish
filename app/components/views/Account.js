import React,{ Component } from 'react';
import NavLink from '../NavLink';
import Account from '../plugin/Account';

export default class extends Component{
    render () {
        let props = this.props,
            params = props.params,
            url = '/authentication/'+params.account,
            p_product = '/product/'+params.account,
            title = '账户'+params.account;


        return (
            <div className='container'>
                <div className='area-block'>
                    <ul className='account-info'>
                        <li className='account-info-category ys'><h4 className='account-info-title account_color fl'>{title}<p className='u-name'>0X123ASDQEQ123123QWEQ</p></h4></li>
                        <li className='account-info-remaining'>余额：<span className='z_ti4'>1000eth</span></li>
                        <li className='account-info-count'>已认证作品数量：<span className='z_ti4'>10首</span></li>
                        <li className='account-info-btn z_ti2'>
                            <NavLink to={url}><i></i> 认证歌曲</NavLink>
                            {/*<NavLink to={p_product}>切换到作品中心</NavLink>*/}
                        </li>
                    </ul>
                </div>
                <div>
                    <Account />
                </div>
            </div>
        )
    }
}