import React from 'react';

// Компонент добавления нового коммента
class AddComment extends React.Component{

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.props.handleChange(event);
  }

  handleClick(){
    this.props.handleClick();
  }

  render(){
    const name = this.props.inputName;
    const text = this.props.inputText;
    return (
      <div className="addComment">

        <input
          name="inputName"
          value={name}
          type="text"
          placeholder="Имя автора"
          onChange={this.handleChange}
        />

        <textarea
          name="inputText"
          value={text}
          placeholder="Текст комментария"
          onChange={this.handleChange}
        >
        </textarea>

        <button
          className="buttonSub"
          onClick={this.props.handleClick}
          >Добавить комментарий</button>

      </div>
    )
  }

}

export default AddComment;
