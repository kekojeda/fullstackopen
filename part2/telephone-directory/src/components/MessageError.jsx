const MessageError = ({message}) =>{
    const msgStyle = {
        color: "red", 
        background: "#f8d7da",
        fontSize: 18, 
        border: "2px solid #f5c6cb", 
        borderRadius: 8, 
        padding: "12px 20px",
        marginBottom: 20, 
        textAlign: "center"
    };

    if(message === null) {
        return null
    }

    return (
       <div style={msgStyle}>
        {message}
       </div>

    )
}

export {MessageError}