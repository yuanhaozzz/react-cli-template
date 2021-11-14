import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setCount } from '@/store/actions';

import './style.less';
class Test extends Component {
    render() {
        return (
            <div>
                Test
                <p>
                    {' '}
                    <p>{this.props.count}</p>
                </p>
                <button onClick={() => this.props.setCount(4)}>aaa</button>
                <button onClick={() => this.props.history.push('/')}>跳转</button>
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        count: state.count.count,
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        setCount: (data) => {
            console.log(data);
            dispatch(setCount({ count: 5 }));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
