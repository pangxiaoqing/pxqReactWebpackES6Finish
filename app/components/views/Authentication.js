import React,{ Component } from 'react';
import NavLink from '../NavLink';

export default class extends Component{
    handleClick (cur,next) {

        this.refs[cur].style.display = 'none'
        this.refs[next].style.display = 'block'
        //document.getElementById("steps2").style.display='block'
    }
    render () {
        let props = this.props,
            params = props.params,
            url = '/account/'+params.account
        return (
            <div>
                {/*<p><NavLink to={url}>返回</NavLink> 认证歌曲</p>
			<h1>认证歌曲</h1>*/}
                <div className="first-step" ref='steps1'>
                    <div className='substep'>
                        <div>
                            <div className='step'>
                                <p className='information information-img ys'>基本信息</p>
                                <p className='copyright-h copyright-h-img'>版权合约</p>
                                <p className='copyright-f  copyright-h-img'>版权分配</p>
                                <p className='pay copyright-h-img4'>支付</p>
                            </div>
                            <div className="basis-info">
                                <table className="song">
                                    <tr>
                                        <th height="55" align="right">歌曲名称</th>
                                        <td><input type="text" placeholder="李白" /></td>
                                        <th align="right">演唱者</th>
                                        <td><input type="text" placeholder="歌手姓名" /></td>
                                    </tr>
                                    <tr>
                                        <th height="55" align="right">作词</th>
                                        <td><input type="text" placeholder="作词人姓名" /></td>
                                        <th align="right">作曲</th>
                                        <td><input type="text" placeholder="作曲人姓名" /></td>
                                    </tr>
                                    <tr>
                                        <th height="55" align="right">时长</th>
                                        <td><input type="text" placeholder="歌曲时长" /></td>
                                        <th align="right">ISRC码</th>
                                        <td><input type="text" placeholder="没有填无" /></td>
                                    </tr>
                                    <tr>
                                        <th height="55" align="right">歌曲文件</th>
                                        <td><input  className="song-file" type="text" placeholder="自动读取文件名" />
                                            <input className='add-file' type="button" value="添加文件"/></td>
                                        <th align="right">歌曲地址</th>
                                        <td><input className="music-address" type="text" placeholder="自动生成"/></td>
                                    </tr>
                                    <tr >
                                        <th height="55" align="right" className="song-file" colspanName='3'>封面文件</th>
                                        <td><input className="song-file" type="text" placeholder="自动读取文件名" />
                                            <input className='add-file' type="button" value="添加文件"/></td>
                                        <th align="right">封面地址</th>
                                        <td><input className="music-address" type="text" placeholder="自动生成"/></td>
                                    </tr>
                                    <tr>
                                        <th height="55">作品风格</th>
                                        <td colSpan="3" className="kind"><span>摇滚</span><span>流行</span><span>中国风</span><span>民谣</span><span>blues</span><span>R&B</span><span>电子</span><span>爵士</span></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='substep substep-mar-top'>
                        <div className="basis-info2">
                            <table className="songs">
                                <thead>
                                <tr>
                                    <th height="85">版权所有者</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th height="55">姓名</th>
                                    <td><input type="text" placeholder="版权所有人"/></td>
                                </tr>
                                <tr>
                                    <th height="55">联系方式</th>
                                    <td><input type="text" placeholder="电话"/></td>
                                </tr>
                                <tr>
                                    <th height="55">完成时间</th>
                                    <td><input type="text" placeholder="录音完成时间"/></td>
                                </tr>
                                <tr>
                                    <th height="55">首次出版时间</th>
                                    <td><input type="text" placeholder="首次出版时间"/></td>
                                </tr>
                                <tr>
                                    <th height="55">首次出版格式</th>
                                    <td>
                                        <select name=""  className="music-select">
                                            <option value="数字">数字</option>
                                            <option value="数字">数字</option>
                                            <option value="数字">数字</option>
                                        </select>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <table className="singer">
                                <thead>
                                <tr>
                                    <th height="85">版权所有者</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th height="55">姓名</th>
                                    <td><input type="text" placeholder="版权持有人"/></td>
                                </tr>
                                <tr>
                                    <th height="55">联系方式</th>
                                    <td><input type="text" placeholder="电话"/></td>
                                </tr>
                                <tr>
                                    <th height="55">完成时间</th>
                                    <td>
                                        <select name="" className="music-select">
                                            <option value="大陆">大陆</option>
                                            <option value="大陆">大陆</option>
                                            <option value="大陆">大陆</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th height="55">首次出版时间</th>
                                    <td>
                                        <select name="" className="music-select">
                                            <option value="大陆">大陆</option>
                                            <option value="大陆">大陆</option>
                                            <option value="大陆">大陆</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th height="55">首次出版格式</th>
                                    <td>
                                        <select name="" className="music-select">
                                            <option value="原版">原版</option>
                                            <option value="原版">原版</option>
                                            <option value="原版">原版</option>
                                        </select>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="btn"><span>上一步</span><span onClick={this.handleClick.bind(this,'steps1','steps2')}>下一步</span><span className="qx">取消</span></div>
                    </div>
                </div>
                <div className='substep second-steps' style={{display:'none'}} ref='steps2'>
                    <div>
                        <div className='step'>
                            <p className='information information-img2 ys'>基本信息</p>
                            <p className='copyright-h copyright-h-img2 ys'>版权合约</p>
                            <p className='copyright-f copyright-h-img'>版权分配</p>
                            <p className='pay copyright-h-img4'>支付</p>
                        </div>
                    </div>
                    <div className="answer_2">
                        <table>
                            <tbody>
                            <tr><td height="42" align="left">1、电影配音</td></tr>
                            <tr><td height="46">a.作为主题曲：<input type="text"/>$</td><td>b.作为配音：<input type="text"/>$</td><td>c.如果电影被做成实体，如DVD：<input type="text"/>$</td></tr> <tr><td height="35" align="left">2、广告</td> </tr> <tr> <td height="46">a.作为主题曲：<input type="text"/>$/年</td><td>b.作为配音：<input type="text"/>$/年</td></tr> <tr><td height="38" align="left">3、公共场所使用</td></tr>
                            <tr><td height="37">a.作为主题曲：<input type="text"/>$/年</td><td>b.作为配音：<input type="text"/>
                                $/年</td>
                                <td>c.如果电影被做成实体，如DVD：<input type="text"/> $/年</td> </tr>
                            <tr> <td height="33" align="left">4、广播</td></tr>
                            <tr><td height="42">a.作为主题曲：<input type="text"/> $/年</td><td>b.作为配音：<input type="text"/> $/年</td> <td>c.如果电影被做成实体，如DVD：<input type="text"/>$/年</td></tr>
                            <tr><td height="33" align="left">5、流媒体播放</td></tr>
                            <tr><td height="44">a.作为主题曲：<input type="text"/>$/年</td><td>b.作为配音：<input type="text"/>$/年</td><td>c.如果电影被做成实体，如DVD：<input type="text"/>$/年</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="btn"><span onClick={this.handleClick.bind(this,'steps2','steps1')}>上一步</span><span onClick={this.handleClick.bind(this,'steps2','steps3')}>下一步</span><span className="qx">取消</span></div>
                </div>
                <div className='substep third-steps' style={{display:'none'}} ref='steps3'>
                    <div>
                        <div className='step'>
                            <p className='information information-img2 ys'>基本信息</p>
                            <p className='copyright-h copyright-h-img3 ys'>版权合约</p>
                            <p className='copyright-f copyright-h-img3 ys'>版权分配</p>
                            <p className='pay copyright-h-img4'>支付</p>
                        </div>
                    </div>
                    <div>
                        <table className="song">
                            <tbody>
                            <tr><th height="55">版权类型</th><td><input className="longness" type="text"/></td></tr>
                            <tr><th height="55">版权所有者</th><td><input className="longness" type="text"/></td></tr>
                            <tr><th height="55">版权收益(%)</th><td><input className="longness" type="text"/></td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="btn"><span onClick={this.handleClick.bind(this,'steps3','steps2')}>上一步</span><span onClick={this.handleClick.bind(this,'steps3','steps4')}>下一步</span><span className="qx">取消</span></div>
                </div>
                <div className='substep fourth-steps' style={{display:'none'}} ref='steps4'>
                    <div>
                        <div className='step'>
                            <p className='information information-img2 ys'>基本信息</p>
                            <p className='copyright-h copyright-h-img3 ys'>版权合约</p>
                            <p className='copyright-f copyright-h-img3 ys'>版权分配</p>
                            <p className='pay copyright-h-img5'>支付</p>
                        </div>
                    </div>
                    <div>
                        <table className="song">
                            <tbody>
                            <tr><th height="55" colSpan="2">您需要支付100元认证费用，我们将从您的账户中扣除！</th></tr>
                            <tr><th height="55">账户余额：</th><td>30000元</td></tr>
                            <tr><th height="55">支付密码：(%)</th><td><input className="longness" type="password"/></td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="btn"><span onClick={this.handleClick.bind(this,'steps4','steps3')}>上一步</span><span><NavLink to='/' style={{color:'#fff'}}>确认支付</NavLink></span><span className="qx">取消</span></div>
                </div>
            </div>
        )
    }
}