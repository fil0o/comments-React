import React from 'react';
import ReactDOM from 'react-dom';
import UserInfo from './comment';
import AddComment from './add-comment';
import css from './style.css';



// Сохранение в localStorage
function saveLocalStorage(comments) {
  var commentsLocal = JSON.stringify(comments);
  localStorage.setItem('localComments', commentsLocal);
}


// Классовый компонент Comment
class Comment extends React.Component {
  constructor(props) {
      super(props);


      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);

      const localStorageItem = localStorage.getItem('localComments');
      const comments = localStorageItem ? JSON.parse(localStorageItem) : [];

      this.state = {
        comments,
        noComment: 'Комментариев еще нету!',
        inputName: '',
        inputText: ''
      };

  }

  //   Временное сохранение полей в state по ключам
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  // Добавление нового комментария в state и localStorage
  handleClick(){
    const authorName = this.state.inputName.trim() ? this.state.inputName : 'Аноним';
    const textComment = this.state.inputText.trim();
    const comments = this.state.comments;

    if (!this.state.inputText.trim()){
        alert('Введите текс комментария');
        this.setState({
          inputText: ''
        })
        return;
    }
    comments.push({
        name: authorName,
        text: textComment,
        date: new Date()
      });

    saveLocalStorage(comments);

    this.setState({
      comments,
      inputName: '',
      inputText: ''
    })
  }

  //  Удаление комментария из state и localStorage
  delComment(key){
    const comments = this.state.comments;
    comments.splice(key, 1);

    saveLocalStorage(comments);

    this.setState({ comments });

  }

  render() {
    return (
      <div className="comments">

          {this.state.comments.length > 0 ? (
            <div className="listComment">

              {this.state.comments.map((comment, i) =>
                <div  key={i} className="comment">
                  <UserInfo
                  user={comment}
                  delComment={this.delComment.bind(this)}
                  />
                </div>
              )}

            </div>
          ) : (
            <div className="noComment">{this.state.noComment}</div>
          )}

        <AddComment
        inputName={this.state.inputName}
        inputText={this.state.inputText}
        handleChange={this.handleChange.bind(this)}
        handleClick={this.handleClick.bind(this)}
        />

      </div>
    );
  }

}

// Рендер страницы
ReactDOM.render(
  <Comment />,
    document.getElementById('app')
);
