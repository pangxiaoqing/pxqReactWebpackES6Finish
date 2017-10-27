import React,{ Component } from 'react';
import { createStore } from 'redux';
import rootReducer from './../redux/reducers/Reducer';
import Actions from './../redux/actions/account';

let json = [
    {
        time : '2017-10-10',
        work : '行云流水',
        pay_account : '6225 8801 4318 5976',
        get_account : '6225 8801 4318 5976',
        money : '1000eth',
        type : '认证作品',
        content : '歌曲'
    },
    {
        time : '2015-01-10',
        work : '行云流水b',
        pay_account : 'ccc',
        get_account : 'ddd',
        money : '100eth',
        type : '购买版权',
        content : '歌曲'
    },
    {
        time : '2017-10-10',
        work : '行云流水',
        pay_account : '6225 8801 4318 5976',
        get_account : '6225 8801 4318 5976',
        money : '1000eth',
        type : '认证作品',
        content : '歌曲'
    },
    {
        time : '2015-01-10',
        work : '行云流水b',
        pay_account : 'ccc',
        get_account : 'ddd',
        money : '100eth',
        type : '购买版权',
        content : '歌曲'
    },
    {
        time : '2017-10-10',
        work : '行云流水',
        pay_account : '6225 8801 4318 5976',
        get_account : '6225 8801 4318 5976',
        money : '1000eth',
        type : '认证作品',
        content : '歌曲'
    },
    {
        time : '2015-01-10',
        work : '行云流水b',
        pay_account : 'ccc',
        get_account : 'ddd',
        money : '100eth',
        type : '购买版权',
        content : '歌曲'
    },
    {
        time : '2017-10-10',
        work : '行云流水',
        pay_account : '6225 8801 4318 5976',
        get_account : '6225 8801 4318 5976',
        money : '1000eth',
        type : '认证作品',
        content : '歌曲'
    },
    {
        time : '2015-01-10',
        work : '行云流水b',
        pay_account : 'ccc',
        get_account : 'ddd',
        money : '100eth',
        type : '购买版权',
        content : '歌曲'
    }
];

let store = createStore(rootReducer('account').operate);//const store = createStore(reducer)

export default class extends Component{
    constructor(props){
        super(props);
        this.state = {
            json:json
        }
    }
    componentDidMount(){
        store.subscribe(this.onChange);
    }
    onChange(){
        this.setState({
            json:store.getState()
        })
    }
    handleClick(){
        let self = this;
        store.dispatch(Actions().applyData(json))//返回json
    }

    render () {
        let state = this.state;
        let data = state.json;
        return (
            <div className='area-block'>
                <div className='title-header'>
                    <h2 className='deal-title'><i className='i'></i> 交易记录</h2>
                    <div className='so-bar'>
                        <input type="text" ref="works" className='so-text' placeholder="账户地址/作品名称" />
                        <button type="button" className='so-btn' onClick={this.handleClick.bind(this)}>搜索</button>
                    </div>
                </div>
                <div className='table-block'>
                    <table className='deal-table' style={{width:'100%'}}>
                        <thead>
                        <tr>
                            <th width="12%">交易时间</th>
                            <th width="11%">作品名称</th>
                            <th width="22%">付款账户</th>
                            <th width="22%">收款账户</th>
                            <th width="11%">交易金额</th>
                            <th width="11%">交易类型</th>
                            <th width="11%">交易内容</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data.map(function(item){
                                return <tr><td>{item.time}</td><td>{item.work}</td><td>{item.pay_account}</td><td>{item.get_account}</td><td>{item.money}</td><td>{item.type}</td><td>{item.content}</td></tr>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
