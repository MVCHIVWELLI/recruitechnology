import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout/Layout";
import SecondSection from "./components/SecondSection/SecondSection";
import ThirdSection from "./components/ThirdSection/ThirdSection";
import FourSection from "./components/FourSection/FourSection";
import React, { useRef } from "react";
import { Space, ConfigProvider, Button, FloatButton } from "antd";
import { Link, Element } from "react-scroll";
import { FaTelegramPlane } from "react-icons/fa";

function App() {
  
  return (
    <div className="App">
      <Layout />
      {/* <Space size="middle"> */}
        {/* <Button ghost="true" shape="round" size="large">
          <Link to="secondSection" smooth={true} duration={500} offset={150}>
            Этапы сотрудничества
          </Link>
        </Button>
        
        <Button ghost="true" shape="round" size="large">
        <Link to="thirdSection" smooth={true} duration={500} offset={-50}>
          Направления подбора
          </Link>
        </Button> */}


      {/* </Space> */}

      <div className="SectionsContainer">
      <Element name="secondSection" className="secondSection" >
  <div>
    <h2 style={{ fontSize: '25px', fontWeight: 'bold', color:"white" }}>Этапы сотрудничества</h2>
    <SecondSection name="secondSection" className="secondSection" />
  </div>
</Element>
        <Element name="thirdSection" className="thirdSection">
        <h2 style={{ fontSize: '25px', fontWeight: 'bold', color:"white" }}>Направления подбора</h2>
  <ThirdSection name="thirdSection" className="thirdSection" />
  <div style={{ marginTop: '20px' }}> {/* Добавляем отступ между ThirdSection и кнопкой */}
    <Button
    shape="round"
      ghost
      size="large"
      style={{
        margin: '10px auto', // Расположение по центру с 10px отступом сверху
        width: '160px', // Ширина кнопки
      }}
      href="https://t.me/AlexeyRecruting"
    >
      Оставить заявку
    </Button>
  </div>
</Element>
      
     
        
    

      </div>
      
      
      
    </div>
  );
}

export default App;
