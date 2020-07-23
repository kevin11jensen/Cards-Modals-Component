import React from 'react';
import styled from 'styled-components';
import './App.css';

function App() {
  
  return (
    <ModalWrapper>
      <div className = 'cards-container-top'>

        <div className = 'card'>
          <img src = '' alt = '' />
          <h3>Card Title</h3>
          <p>Card Text</p>
          <button onClick = {() => {document.getElementById('modal1').style.display = 'block'}} className = 'modal-open' data-modal = 'modal1'>Open Modal 1</button>
        </div>

        <div className = 'card'>
          <img src = '' alt = '' />
          <h3>Card Title</h3>
          <p>Card Text</p>
          <button onClick = {() => {document.getElementById('modal2').style.display = 'block'}} className = 'modal-open' data-modal = 'modal2'>Open Modal 2</button>
        </div>

        <div className = 'card'>
          <img src = '' alt = '' />
          <h3>Card Title</h3>
          <p>Card Text</p>
          <button onClick = {() => {document.getElementById('modal3').style.display = 'block'}} className = 'modal-open' data-modal = 'modal3'>Open Modal 3</button>
        </div>

      </div>
      <div className = 'cards-container-bottom'>

        <div className = 'card'>
          <img src = '' alt = '' />
          <h3>Card Title</h3>
          <p>Card Text</p>
          <button onClick = {() => {document.getElementById('modal4').style.display = 'block'}} className = 'modal-open' data-modal = 'modal4'>Open Modal 4</button>
        </div>

        <div className = 'card'>
          <img src = '' alt = '' />
          <h3>Card Title</h3>
          <p>Card Text</p>
          <button onClick = {() => {document.getElementById('modal5').style.display = 'block'}} className = 'modal-open' data-modal = 'modal5'>Open Modal 5</button>
        </div>

        <div className = 'card'>
          <img src = '' alt = '' />
          <h3>Card Title</h3>
          <p>Card Text</p>
          <button onClick = {() => {document.getElementById('modal6').style.display = 'block'}} className = 'modal-open' data-modal = 'modal6'>Open Modal 6</button>
        </div>

      </div>
      
      <div className = 'modal' id = 'modal1'>
        <div className = 'modal-content'>
          <div className = 'modal-header'>
            Modal1
            <button onClick = {() => {document.getElementById('modal1').style.display = 'none'}} className = 'modal-close'>X</button>
          </div>
          <div className = 'modal-body'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <div className = 'modal-footer'>
            <button onClick = {() => {document.getElementById('modal1').style.display = 'none'}} className = 'modal-close'>
              Close
            </button>
          </div>
        </div>
      </div>

      <div className = 'modal' id = 'modal2'>
        <div className = 'modal-content'>
          <div className = 'modal-header'>
            Modal2
            <button onClick = {() => {document.getElementById('modal2').style.display = 'none'}} className = 'modal-close'>X</button>
          </div>
          <div className = 'modal-body'>
            Lorem ipsum dolor, sit amet consectetur ajss.
          </div>
          <div className = 'modal-footer'>
            <button onClick = {() => {document.getElementById('modal2').style.display = 'none'}} className = 'modal-close'>
              Close
            </button>
          </div>
        </div>
      </div>

      <div className = 'modal' id = 'modal3'>
        <div className = 'modal-content'>
          <div className = 'modal-header'>
            Modal3
            <button onClick = {() => {document.getElementById('modal3').style.display = 'none'}} className = 'modal-close'>X</button>
          </div>
          <div className = 'modal-body'>
            Lorem ipsum dolor, sit amet consectetur ajss.
          </div>
          <div className = 'modal-footer'>
            <button onClick = {() => {document.getElementById('modal3').style.display = 'none'}} className = 'modal-close'>
              Close
            </button>
          </div>
        </div>
      </div>


      <div className = 'modal' id = 'modal4'>
        <div className = 'modal-content'>
          <div className = 'modal-header'>
            Modal4
            <button onClick = {() => {document.getElementById('modal4').style.display = 'none'}} className = 'modal-close'>X</button>
          </div>
          <div className = 'modal-body'>
            Lorem ipsum dolor, sit amet consectetur ajss.
          </div>
          <div className = 'modal-footer'>
            <button onClick = {() => {document.getElementById('modal4').style.display = 'none'}} className = 'modal-close'>
              Close
            </button>
          </div>
        </div>
      </div>

      <div className = 'modal' id = 'modal5'>
        <div className = 'modal-content'>
          <div className = 'modal-header'>
            Modal5
            <button onClick = {() => {document.getElementById('modal5').style.display = 'none'}} className = 'modal-close'>X</button>
          </div>
          <div className = 'modal-body'>
            Lorem ipsum dolor, sit amet consectetur ajss.
          </div>
          <div className = 'modal-footer'>
            <button onClick = {() => {document.getElementById('modal5').style.display = 'none'}} className = 'modal-close'>
              Close
            </button>
          </div>
        </div>
      </div>

      <div className = 'modal' id = 'modal6'>
        <div className = 'modal-content'>
          <div className = 'modal-header'>
            Modal6
            <button onClick = {() => {document.getElementById('modal6').style.display = 'none'}} className = 'modal-close'>X</button>
          </div>
          <div className = 'modal-body'>
            Lorem ipsum dolor, sit amet consectetur ajss.
          </div>
          <div className = 'modal-footer'>
            <button onClick = {() => {document.getElementById('modal6').style.display = 'none'}} className = 'modal-close'>
              Close
            </button>
          </div>
        </div>
      </div>

    </ModalWrapper>
  );
}

export default App;

const ModalWrapper = styled.div `
  background: lightgray;
  height: 100vh;
  .cards-container-top {
    display: flex;
    justify-content: center;
    @media (max-width: 425px) {
      flex-direction: column;
      align-items: center;
    }
    .card {
      text-align: center;
      width: 25%;
      margin: 1%;
      background: white;
      height: 20rem;
      @media (max-width: 425px) {
        width: 95%;
      }
    }
  }
  .cards-container-bottom {
    display: flex;
    justify-content: center;
    @media (max-width: 425px) {
      flex-direction: column;
      align-items: center;
    }
    .card {
      text-align: center;
      width: 25%;
      margin: 1%;
      background: white;
      height: 20rem;
      @media (max-width: 425px) {
        width: 95%;
      }
    }
  }
  .modal-open {
    padding: 2% 5%;
    font-size: 1.6rem;
    background: transparent;
    border: 2px solid black;
    color: royalblue; 
  }
  .modal {
    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    display: none;
    
    animation: modal-open .5s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-content {
    background: white;
    margin: 3% auto;
    height: 66vh;
    width: 50%;
    overflow: auto;
    border-radius: .5rem;
    z-index: 4;
    padding: 3%;
    
    @media (max-width: 425px) {
      width: 99%;
      height: 99vh;
      margin: 0;
    }
  }
  .modal-header {
    font-weight: 500;
    font-size: 2.6rem;
    
    .modal-close {
      float: right;
      font-size: 1.6rem;
      background: transparent;
      border: 2px solid black;
      padding: 2% 5%;
    }
  }
  .modal-body {
    color: gray;
    font-size: 1.6rem;
    padding: 3%;
  }
  .modal-footer {
    color: lightgray;
    .modal-close {
      padding: 2% 5%;
      font-size: 1.6rem;
      background: transparent;
      border: 2px solid black;
      color: blue;
    }
  }
  @keyframes modal-open {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
