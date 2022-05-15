import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";



export const Feedback = (props) => {

  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");
  const [ans3, setAns3] = useState("");
  const [ans4, setAns4] = useState("");
  const [ans5, setAns5] = useState("");
  const [ans6, setAns6] = useState("");
  let errMsg = "Form Fields are empty!"
  const navigate = useNavigate();
  


  
  const insert = () =>{
    if(ans1 === "" || ans1 === null || ans2 === "" || ans2 === null ||ans3 === "" || ans3 === null ||ans4 === "" || ans4 === null  || ans5 === "" || ans5 === null  || ans6 === "" || ans6 === null){
      console.log(errMsg);
      // alert.show("Some error has occured, Try again!");
    //  navigate('/error');
    }
    else{
      axios
      .post("http://localhost:3001/insert", {
        title:props.title,
        ans1: ans1,
        ans2: ans2,
        ans3: ans3,
        ans4: ans4,
        ans5: ans5,
        ans6: ans6,
        
      })
      .then((response) => {
        props.setRecords([...props.records, response.data]);
      });
      // console.log(props.title);
      // console.log(ans1);
      // console.log(ans2);
      // console.log(ans3);
      // console.log(ans4);
      // console.log(ans5);
      // console.log(ans6);
      navigate('/thankyou');
      props.setCasethank("");
      props.setTitle("");

      

    }

  }

  let h3Style = {
    padding: "15px",
  };

  let div2Style = {
    margin: "auto",
    height: "400px",
    width: "90%",
    padding: "10px",
  };

  let shadowDiv = { width: "100%", height: "470px", borderRadius: "45px" };
  let starStyle = { color: "red", pdding: "2px", marginbottom: "5px" };
  let accrdBody = { display: "inline-flex" };
  let rbtnPaddingfirst = { marginRight: "8px", marginLeft: "8px" };
  let rbtnPadding = { marginRight: "8px" };
  let btnDiv = {textAlign: "center",padding:"8px",marginTop:"20px"};

  return (
    <div className="container">
      <h3 className="text-center" style={h3Style}>
        Fill The Feedback of 
        {" " + props.title + " "} 
        Activity
      </h3>
      <div style={div2Style}>
        <div className="shadow-lg p-3 bg-body" style={shadowDiv}>
          <form autoComplete="off" method="POST">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Q1. How satisfied are you with the variety of topics
                    presented at the conference?<span style={starStyle}>*</span>
                  </button>
                  <input type="hidden" name="question1" value="Q1" />
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body" style={accrdBody}>
                    <div className="form-check" style={rbtnPaddingfirst}>
                      <input
                        required
                        className="form-check-input"
                        type="radio"
                        name="q1op"
                        id="flexRadioDefault1"
                        value="verySatisfied"
                        onChange={(e) => setAns1(e.target.value)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Very satisfied
                        <input
                          type="hidden"
                          name="q1op1"
                          value="verySatisfied"
                        />
                      </label>
                    </div>
                    <div className="form-check" style={rbtnPadding}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="q1op"
                        value="Somewhat Satisfied"
                        id="flexRadioDefault1"
                        onChange={(e) => setAns1(e.target.value)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Somewhat satisfied
                      </label>
                    </div>
                    <div className="form-check" style={rbtnPadding}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="q1op"
                        value="Neither satisfied nor dissatisfied"
                        id="flexRadioDefault1"
                        onChange={(e) => setAns1(e.target.value)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Neither satisfied nor dissatisfied
                      </label>
                    </div>
                    <div className="form-check" style={rbtnPadding}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="q1op"
                        value="Somewhat dissatisfied"
                        id="flexRadioDefault1" onChange={(e) => setAns1(e.target.value)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Somewhat dissatisfied
                      </label>
                    </div>
                    <div className="form-check" style={rbtnPadding}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="q1op"
                        value="Very dissatisfied"
                        id="flexRadioDefault1" onChange={(e) => setAns1(e.target.value)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Very dissatisfied
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                aria-controls="flush-collapseTwo">
                                Q2. I’m happy with the amount of information presented in today’s sessions.<span style={starStyle}>*</span>
                            </button>

                        </h2>
                        <input type="hidden" name="question2" value="Q2" />
                        <div id="flush-collapseTwo" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div style={accrdBody}>


                                    <div className="form-check" style={rbtnPaddingfirst}>
                                        <input required name="q2op" value="Strongly agree" className="form-check-input" type="radio" 
                                            id="flexRadioDefault1" onChange={(e) => setAns2(e.target.value)} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Strongly agree
                                        </label>
                                    </div>
                                    <div className="form-check" style={rbtnPadding}>
                                        <input className="form-check-input" value="Agree" name="q2op" type="radio" onChange={(e) => setAns2(e.target.value)} 
                                            id="flexRadioDefault1" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Agree
                                        </label>
                                    </div>
                                    <div className="form-check" style={rbtnPadding}>
                                        <input className="form-check-input" value="Neither agree nor disagree" name="q2op" type="radio" 
                                            id="flexRadioDefault1" onChange={(e) => setAns2(e.target.value)} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Neither agree nor disagree
                                        </label>
                                    </div>
                                    <div className="form-check" style={rbtnPadding}>
                                        <input className="form-check-input" value="Disagree" name="q2op" type="radio" onChange={(e) => setAns2(e.target.value)} 
                                            id="flexRadioDefault1" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Disagree
                                        </label>
                                    </div>
                                    <div className="form-check" style={rbtnPadding}>
                                        <input className="form-check-input" name="q2op" value="Strongly disagree" type="radio" onChange={(e) => setAns2(e.target.value)} 
                                            id="flexRadioDefault1" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Strongly disagree
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* q2 ends here */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree" aria-expanded="false"
                                aria-controls="flush-collapseThree">
                                Q3. What was your favorite part of the conference?<span style={starStyle}>*</span>
                            </button>
                            
                        </h2>
                        <input type="hidden" name="question3" value="Q3" />
                        {/* <input type="hidden" name="question3" value="Q3" /> */}
                        <div id="flush-collapseThree" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="form-check">
                                    <input required type="text" name="q3op" defaultValue={ans3} className="form-control" onChange={(e) => setAns3(e.target.value)} id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Enter your answer here." />

                                </div>

                            </div>
                        </div>
                    </div>
                    {/* q3 ends here*/}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFour" aria-expanded="false"
                                aria-controls="flush-collapseFour">
                                Q4. Do you have any suggestions for next year’s event?<span style={starStyle}>*</span>
                            </button>
                        </h2>
                        <input type="hidden" name="question4" value="Q4" />
                        <div id="flush-collapseFour" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="form-check">
                                    <input required type="text" defaultValue={ans4} onChange={(e) => setAns4(e.target.value)} name="q4op" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Enter your answer here." />

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* q4 ends here */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFive" aria-expanded="false"
                                aria-controls="flush-collapseFive">
                                Q5. Are you planning to return to next year’s event?<span style={starStyle}>*</span>
                            </button>
                        </h2>
                        <input type="hidden" name="question5" value="Q5" />
                        <div id="flush-collapseFive" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body" style={accrdBody}>
                                <div className="form-check" style={rbtnPaddingfirst}>
                                    <input required className="form-check-input" name="q5op" type="radio" value="Yes" onChange={(e) => setAns5(e.target.value)} 
                                        id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check" style={rbtnPadding}>
                                    <input className="form-check-input" name="q5op" value="No" type="radio" 
                                        id="flexRadioDefault1" onChange={(e) => setAns5(e.target.value)} />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        No
                                    </label>
                                </div>
                                <div className="form-check" style={rbtnPadding}>
                                    <input className="form-check-input" type="radio" name="q5op" value="I don't know" onChange={(e) => setAns5(e.target.value)}
                                        id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        I don't know
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* q5 ends here */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingSix">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseSix" aria-expanded="false"
                                aria-controls="flush-collapseSix">
                                Q6. The event provided me with valuable information.<span style={starStyle}>*</span>
                            </button>


                        </h2>
                        <input type="hidden" name="question6" value="Q6" />
                        <div id="flush-collapseSix" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body" style={accrdBody}>
                                <div className="form-check" style={rbtnPaddingfirst}>
                                    <input className="form-check-input" required type="radio" name="q6op" value="True" onChange={(e) => setAns6(e.target.value)}
                                        id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        True
                                    </label>
                                </div>
                                <div className="form-check" style={rbtnPadding}>
                                    <input className="form-check-input" type="radio" name="q6op" value="False"
                                        id="flexRadioDefault1" onChange={(e) => setAns6(e.target.value)} />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        False
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
   
                <div style={btnDiv}>
                    <button type="submit" onClick={insert} className="btn btn-primary btn-sm">Submit</button>
                    </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
