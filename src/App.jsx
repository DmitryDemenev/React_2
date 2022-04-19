import React,{useEffect, useState} from "react";
import './styles/App.css'

function App() {
  const [messageList,setMessageList] = useState([]);
  const [message,setMessage] = useState('')
  const [userName,setUserName] = useState('')
  

  const userChange = (e) => {

    setUserName(e.target.value)

  }

  const textChange = (e) => {

    setMessage(e.target.value)

    
  }
  const sendMessage = () => {
    if (userName !== '' && message !== ''){
      const newPost = {author:userName, text: message}
      setMessageList([...messageList,newPost]);      
    }
    else {alert('Заполните все поля')}
  }

  useEffect( () => {
    let time;
    if (messageList.length>0 && messageList[messageList.length-1].author !== 'Роберт Левандовски'){
      time = setInterval(() => {
        setMessageList([...messageList,newPost])}, 1500);
      const newPost = {author:'Роберт Левандовски', text: `Hi, ${userName} !!!!`}// Кажется эта строчка не совсем корректна)
    }
    return () => {

      if (time) {
        clearInterval(time);
      }

    }
  },[messageList])

  return (
    <div className="full-form">
      <form
        className="input-form"
        style={{
          width: 300,
          marginTop: 100,
          backgroundColor: "beige",
          padding: 15,
          border: "1px solid",
        }}
      >
        <div class="mb-3">
          <label htmlFor = "exampleFormControlInput1" className="form-label">
            User name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="John"
            value = {userName}
            onChange = {userChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea 
            placeholder="Введите текст"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            type="text"
            value = {message}
            onChange = {textChange}
          ></textarea>
        </div>
        <button type="button" className="btn btn-dark" onClick={sendMessage}>
          Send
        </button>
      </form>
      {messageList.map(element => (
        <div className='post'
        style={{
            width:900,
            marginTop: 10,
            backgroundColor: "beige",
            padding: 15,
            border: "1px solid",
          }}>
        <p>Сообщение: {element.text}</p>
        <sup>Автор: {element.author}</sup>
        </div>
      ))}
      
    </div>

  );
}

export default App;
