import React from "react";

export default function About(props) {

  const linkedin= ()=>
  {
    window.location.href="https://www.linkedin.com/in/mohit-singh-726a611b1"
  }
    
  return (
  
    <>
      <div className="container-fluid  text-light">
        <div className="accordion accordion-flush " id="accordionFlushExample">
          <div className={`${(props.mode==="dark")?"accordion-item-dark":"accordion-item"}`}>
            <h2 className="accordion-header " id="flush-headingOne">
              <button
                className={`${(props.mode==="dark")?"accordion-button-dark collapsed text-muted":"accordion-button collapsed text-muted"}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="true" 
                aria-controls="flush-collapseOne"
              >
                About me
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse "
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className={`accordion-body text-${props.mode==='dark'?'muted':'dark'}`}>
                <h6 className={`text-${props.mode==='dark'?'white':'dark'}`}><b>Learner | Engineer | Coder</b></h6><hr/>
                Yes, This three words describe me better.<br/>
                By profession, I am a Software Engineer having expertise in RPA.<br/>
                But web development is one of my intrest and I continously try to learn new techs.<br/>
                This is my first react web application.
                <br/>
                Hope, You have like it!!!

              </div>
            </div>
          </div>
          <div className={`${(props.mode==="dark")?"accordion-item-dark":"accordion-item"}`}>
            <h2 className="accordion-header " id="flush-headingTwo">
              <button
                className={`${(props.mode==="dark")?"accordion-button-dark collapsed text-muted":"accordion-button collapsed text-muted"}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Purpose
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse "
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className={`accordion-body text-${props.mode==='dark'?'muted':'dark'}`}>
                The purpose of creating this web applicationis is to provide an simple, free text utility plateform.<br/>
                You can perform convert your text to <b>UPPER Case</b> , <b>lower case</b>
                 , <b>Count total numbers of words</b> and <b>characters.</b><br/>
                 You can <b>Copy</b> the final text and use it wherever you want to use.


              </div>
            </div>
          </div>
          <div className={`${(props.mode==="dark")?"accordion-item-dark":"accordion-item"}`}>
            <h2 className="accordion-header " id="flush-headingThree">
              <button
                className={`${(props.mode==="dark")?"accordion-button-dark collapsed text-muted":"accordion-button collapsed text-muted"}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Contact Us
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse "
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className={`accordion-body text-${props.mode==='dark'?'muted':'dark'}`}>
                <h6 className={`text-${props.mode==='dark'?'white':'dark'}`}><b>Want to contact me?</b></h6><hr/>
                Feel free to reach if you have any feedback or suggestion.<br/><br />
                <i class="bi bi-envelope-fill"></i>&nbsp; &nbsp; mail to: mohitsinghkanpur2@gmail.com<br />
                <i className="bi-linkedin" onClick={linkedin} target="_blank"></i>&nbsp; <i class="bi bi-instagram"></i>&nbsp;&nbsp;<i class="bi bi-twitter"></i>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

