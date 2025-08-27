import React from "react";
import { Modal, CardGroup,Button } from 'react-bootstrap';
import CardResume from "./CardResume";
import CardResumeHobbies from "./CardResume/CardResumeHobbies";

export default function Resume({ showModal,setStep,setModal }) {
  const favouriteFruit=localStorage.getItem('fruitName');
  // console.log(favouriteFruit)
  const fruitIcon=localStorage.getItem('iconFruit')
  const hobbiesStorage=JSON.parse(localStorage.getItem('hobbies'))
  // console.log(hobbiesStorage)
  const additionalHobbie=localStorage.getItem('additionalHobbie');
  const comment=localStorage.getItem("comment")

const clearForm=()=>{
  localStorage.clear();
  setModal(false);
  setStep(1);
}
  return (
    <Modal
      show={showModal}
      size="lg"
      aria-labelledby="container-modal-title-vcenter"
      centered
      onHide={clearForm}
    
    >
      <Modal.Header closeButton>
        <Modal.Title id="container-modal-title-vcenter">
          Congratulations!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Here is your resume</h4>
        <CardGroup className="mt-4">
          {favouriteFruit && fruitIcon && (
            <CardResume Title={fruitIcon} subtitle='Your favourite fruit is ' text={favouriteFruit}></CardResume>
          ) }
          {hobbiesStorage && (
            <CardResumeHobbies subtitle="Your hobbies" text={additionalHobbie} hobbiesStorage={hobbiesStorage}></CardResumeHobbies>
          ) }
          {comment && (
            <CardResume subtitle="And for the last this is the comment" text={comment}></CardResume>
          )}
        </CardGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button  onClick={clearForm}>Exit and clear form </Button>
      </Modal.Footer>
    </Modal>
  );
}
// LLEGO EN VIDEO 129
