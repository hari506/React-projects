import { useState } from "react";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";
import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = (props) => {
    let [value, setVal] = useState('');
    const {chatId, creds} = props;

    const handleInputChnage = event => {
        setVal(event.target.value)
        isTyping(props, chatId)
    }

    const handleUploadOnChange = event => {
        sendMessage(creds, chatId, {files : event.target.files}, {text: ''})
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        let text = value.trim()
        if(text.length > 0){
            sendMessage(creds, chatId, {text})
        }

        setVal('')
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input
              className="message-input"
              placeholder="send a message"
              value={value}
              onChange={handleInputChnage}
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon" />
                </span>
            </label>

            <input
              type="file"
              multiple={false}
              style={{display: 'none'}}
              id="upload-button"
              onChange={handleUploadOnChange.bind(this)}
            />
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon" />
            </button>
        </form>
    )
}

export default MessageForm;