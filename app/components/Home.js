import React,{ Component } from 'react';
import AddAccount from './plugin/AddAccount';
import Account from './plugin/Account';


export default class Home extends Component{
    render(){
        return(
            <div className='container'>
                <div className='area-block'>
                    <div className='title-header'>
                        <h2 className='account-title'><i className='i'></i> 账户总预览</h2>
                    </div>
                    <div className='account-block'>
                        <ul className='account-list'>
                            <li>
                                <p className='account-name'>账户A</p>
                                <p className='account-number'>0X123ASDQEQ123123QWEQ</p>
                            </li>
                            <li>
                                <p className='account-name'>账户B</p>
                                <p className='account-number'>0X123ASDQEQ123123QWEQ</p>
                            </li>
                            <li>
                                <p className='account-name'>账户B</p>
                                <p className='account-number'>0X123ASDQEQ123123QWEQ</p>
                            </li>
                            <li>
                                <p className='account-name'>账户B</p>
                                <p className='account-number'>0X123ASDQEQ123123QWEQ</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <AddAccount />
                <Account />
            </div>
        )
    }
}
