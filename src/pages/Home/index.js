import React, { Component } from "react";
import { connect } from "react-redux";

import { getList } from "./api";
// import { toast } from "@/utils/message";
import { DatePicker, Space } from "antd";

import "./style.scss";

import { setCount } from "@/store/actions";

export default
@connect((state) => ({
  count: state.count.count,
}))
class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // toast("你大爷");
    this.getData();
  }

  async getData() {
    try {
      const data = await getList();
      console.log(data);
    } catch (error) {
      console.log(error, "error");
    }
  }

  render() {
    return (
      <div className="home-wrapper">
        <Space direction="vertical">
          <DatePicker />
          <DatePicker picker="week" />
          <DatePicker picker="month" />
          <DatePicker picker="quarter" />
          <DatePicker picker="year" />
        </Space>
        <h2>欢迎来到浩哥基础模版</h2>
        <div className="home-content flex-center">
          <p>{this.props.count}</p>
          <button
            onClick={() =>
              this.props.dispatch(setCount({ count: this.props.count + 1 }))
            }
          >
            增加
          </button>
        </div>
        <button
          className="home-jump-to"
          onClick={() => this.props.history.push("/test")}
        >
          跳转/test
        </button>
      </div>
    );
  }
}
