import React,{useState} from "react";
function TextForm(props){
    const [text,setText]=useState("enter text here");
    const handleUpclick=()=>{
        // console.log("uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted successsfully","success ");
    }
     const handleLoclick=()=>{
        // console.log("uppercase was clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleOnchange=(event)=>{
        // console.log("on change");
        setText(event.target.value)
    }
    
    return (
        <>
        <div className="div" style={{color: props.mode==='light'?'black':'white'}}>

        
         <h1> text here to analyse</h1>
        <div className="container " >
           
<h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnchange} style={{background: props.mode==='light'?'white':'grey'}}  id="mybox" rows="8"></textarea>
        </div>      
<button className="button btn btn-primary mx-1" onClick={handleUpclick}>convert to UPPERcase</button>
<button className="button btn btn-primary mx-2" onClick={handleLoclick}>convert to LOWERcase</button>
</div>
<div className="container">
<h2>
    your text $ummary

</h2>
<p>{text.split(" ").length} words and { text.length} characters </p>
<p>{0.008 * text.split(" ").length} Minutes read</p>
<h2> Preview</h2>
<p>{text.length>0? text:"Enter something to preview it"}</p>
</div>
</div>
</>
    )
}

export default TextForm;