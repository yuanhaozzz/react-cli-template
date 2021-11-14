import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.less';

import { setCount } from '@/store/actions';

export default
@connect((state) => ({
    count: state.count.count,
}))
class Home extends Component {
    render() {
        return (
            <div>
                home
                <p>{this.props.count}</p>
                <button onClick={() => this.props.dispatch(setCount({ count: this.props.count + 1 }))}>asaa</button>
                <button onClick={() => this.props.history.push('/test')}>跳转</button>
            </div>
        );
    }
}
