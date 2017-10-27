import React,{ Component } from 'react';
import $ from 'jquery';
import NavLink from '../NavLink';

export default class extends Component{
    handleClick(e){
        let target = e.target;
        if(target.nodeName == "BUTTON"){
            if(target.getAttribute('name') === 'add'){
                $('#add_b').show();
            }
            if(target.getAttribute('name') === 'cancel'){
                $('#add_b').hide();
            }
            if(target.getAttribute('name') === 'sure'){
                // $('#manage').append('<li><a href="/account/C">账户C</a></li>')
                /*$('#manage').append('<li><a href="/account/C"><i className=\'i i-u\'></i>账户C</a></li>');*/
                // $('#add_b').hide();
            }
        }
    }
    render(){
        return(
            <div className='area-block' onClick={e=>this.handleClick(e)}>
                <div id='add_a'>
                    <button type='button' name='add' ref='add' className='add-button'>新增账户+</button>
                </div>
                <div className='add-account-mode' id='add_b' style={{display:'none'}}>
                    <div className='add-account-body'>
                        <ul>
                            <li>
                                <label>用户名：</label>
                                <input type='text' ref='username' className='text-box text-user' />
                            </li>
                            <li>
                                <label>密码：</label>
                                <input type='password' ref='password' className='text-box text-pwd' />
                            </li>
                        </ul>
                        <div className='add-account-foot'>
                            <button type='button' name='sure' ref='sure' className='sure-btn'> 确定 </button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button type='button' name='cancel' ref='cancel' className='cancel-btn'> 取消 </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}