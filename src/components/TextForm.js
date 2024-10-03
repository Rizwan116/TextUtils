import React, { useState } from 'react';



export default function TextForm(props) {


  const handleUpClick = () => {
    // console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    if(newText === "") {
      props.showAlert("Please insert Text first", "warning");
    } else(props.showAlert("Text Changed to uppercase", "success")
  )
  }

  const handleLoClick = () => {
    // console.log("uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText)
    if(newText === "") {
      props.showAlert("Please insert Text first", "warning");
    } else(props.showAlert("chaneged to lowercase", "success")
  )

  }

  const handleClearClick = () => {
    // console.log("uppercase was clicked");
    let newText = '';
    setText(newText)
    if(newText === "") {
      props.showAlert("Please insert Text first", "warning");
    } else(props.showAlert("Text has been Cleared", "success")
  )
  }


  const handleCopyClick =  () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    if(text.value === "") {
      props.showAlert("Please insert Text first", "warning");
    } else(props.showAlert("Text has been copied", "success")
  )

}

 const handleExtraSpaces = () => {
    let value = setText;
    let newText = text.split(/['']+/);
    setText(newText.join(" "));
    if(value === newText) {
      props.showAlert("Text has been copied", "warning") 
    } else props.showAlert("Extra Spaces has been removed", "success")

   

    // if(newText = newText) {
    //   props.showAlert("Text has been copied", "success")
    // } else if (newText != setText) {
    //   props.showAlert("Text has been copied", "warning")
    // } else {
    //   props.showAlert("Text has been copied", "primary")
    // }
 }


  const handleOnChange = (event) => {
    // console.log("onchange");
    setText(event.target.value);

  }

  // const [text, setText] = useState('Enter Text Here');
  const [text, setText] = useState('');

  return (
    
    <>
   <div>
   <div className='container'  style={{color: props.mode === 'dark'? 'white': '#1c1c1c' }}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea style={{ backgroundColor: props.mode === 'dark'? 'grey': 'white' , color: props.mode === 'dark'?'white': '#1c1c1c'}} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter Text Here'></textarea>
        </div>

        <button className="btn btn-primary mx-2 mb-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 mb-2 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 mb-2 my-1" onClick={handleClearClick}>
          Clear
        </button>

        <button className="btn btn-primary mx-2 mb-2 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>

        <button className="btn btn-primary mx-2 mb-2 my-1" onClick={handleExtraSpaces}>
          Remove Extra Text
        </button>

        {/* <button  className="btn btn-primary mx-2" onClick={this.downloadTxtFile}>
          Download Text
        </button> */}
    </div>

    <div className="container my-3" style={{
           color: props.mode === 'dark'? 'white': '#1c1c1c'
        }}>
      <h2>Your text summary</h2>
      <p> {text.split(" ").filter((element) => {
        return element.length!==0
      }).length} words and {text.length} charecters</p>
      <p>{0.008 * text.split(" ").length} Minures read</p>

      <h2>Preview</h2>
      <p>{text.length>0?text: "Enter Something on the above textbox to Preview in it here"}</p>
    </div>

   </div>
    </>

   
  )
}
