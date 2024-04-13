const MessageSucces = ({message}) =>{
    const msgStyle = {
        color: "green", 
        background: "#dff0d8",
        fontSize: 18, 
        border: "2px solid #c3e6cb", 
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

export {MessageSucces}