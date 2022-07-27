import React, {useState} from 'react'
// import './TextForm.css'


export default function TextForm(props) {
    const [text, setText] = useState('');
    const [email, setemail] = useState('To know click on "Get MailId" Button');
    // text="New text" Wrong way
    // setText("I want to change it"); correct way
    const HandleUpClick = () =>{
      // console.log("Convert to upper case");
      let newText=text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to upper case", "success ");
    }
    const HandleLoClick = () =>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lower case", "success ");
    }
    const HandleOnChange = (event) =>{
      // console.log("On Change");
      setText(event.target.value);
    }
    const replaceString=()=>{
      let repval=prompt("Enter the word to be replaced:")
      // let tobereplaced= new RegExp(repval,'g');

      let toreplace=prompt("Enter the text that you want to replace with:");
      
      let newText= text.replaceAll(repval,toreplace);
      setText(newText);
      props.showAlert("The word is replaced successfully", "success ");
    }
    const getEmail=()=>{
      //hello@gmail.com
      let arr=text.split(" ");
      let s="";
      for (let index = 0; index < arr.length; index++) 
      {
      if(arr[index].length > 10)
      {
        // console.log(arr[index]);
        if(arr[index].substring(arr[index].length-10)==="@gmail.com")
        {
             s= s+" "+arr[index].toString();
        }
      }
     }
     setemail(s);
     props.showAlert("Email Id's are listed below", "success ");
    }
    const ClearText = () =>{
      setText("");
      props.showAlert("Text is cleared", "success ");
    }
    const CopyText = () =>{
      navigator.clipboard.writeText(text);
      document.getSelection().removeAllRanges();
      props.showAlert("Text is copied successfully", "success ");
    }
    const RemoveSpace = () =>{
     let arr=text.split(/[ ]+/);
     setText(arr.join(" "));
     props.showAlert("Spaces are removed", "success ");
    }
  return (
    <>
    <div className='container'>
       <div className="mb-3">
        <h1 className='my-3'style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>
       <textarea className="form-control" value={text} onChange={HandleOnChange} style={{backgroundColor: props.mode==='light'?'white':'transparent', color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
       </div>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleUpClick}>Convert To UpperCase</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleLoClick}>Convert To LowerCase</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={replaceString}>Replace Word</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={getEmail}>Get MailId</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ClearText}>Clear Text</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={CopyText}>Copy Text</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={RemoveSpace}>Remove Extra Space</button>
    </div>
    <div className="conatiner my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h3>Your Text Summary</h3>
      {/* <p><b>{text === '' ? "0" :(text.replace(/\s+/g, ' ').trim().split(' ').length)}</b> words and <b>{text.replace(/\s+/g, '').length} </b> characters</p> */}
      <p><b>{text.split(/\s+/).filter((element)=>{return element !== ""}).length}</b> words and <b>{text.replace(/\s+/g, '').length} </b> characters</p>
      <p><b>{text.split(/\s+/).filter((element)=>{return element !== ""}).length*0.008}</b> minutes are taken to read the words</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    <div style={{color: props.mode==='light'?'black':'white'}}>
      <h3>The Mail Id's In Text</h3>
      <p>{email}</p>
    </div>
    </>
  )
}
