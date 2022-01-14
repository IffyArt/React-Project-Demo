import React from 'react';

// 建立一個單純顯示 UI 的純組件
class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

// function TodoList(props) {
//   return (
//     <ul>
//       {props.items.map((item) => (
//         <li key={item.id}>{item.text}</li>
//       ))}
//     </ul>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // 改變輸入匡內容
  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  // 送出輸入匡內容
  handleSubmit(e) {
    //取消表單預設事件
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }

    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };

    // class 需要透過 setState 才能修改 constructor 的內容
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: '',
    }));
  }

  // render 是宣染畫面用的操作，最終的 UI 將藉由 return 回程，有時會在該函式內進行資料整理
  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='new-todo'>What needs to be done?</label>
          <input
            id='new-todo'
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }
}

export default App;
