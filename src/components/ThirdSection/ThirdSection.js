import React from 'react';
import './ThirdSection.css';

import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const ThirdSection = () => {
  return (
    <div className='block-style'>
      <div className='block'>
        <Title level={3} style={{ color: 'white' }}>Backend</Title>
        <Paragraph style={{ color: 'white' }}>
          C#, Python, Java, Go, PHP, Embedded developers, System Developers
        </Paragraph>
      </div>
      <div className='block'>
        <Title level={3} style={{ color: 'white' }}>Frontend</Title>
        <Paragraph style={{ color: 'white' }}>
          JavaScript, React, React Native, Redux, Vue, Angular
        </Paragraph>
      </div>
      <div className='block'>
        <Title level={3} style={{ color: 'white' }}>Мобильная разработка</Title>
        <Paragraph style={{ color: 'white' }}>Kotlin, Swift</Paragraph>
      </div>
      <div className='block'>
        <Title level={3} style={{ color: 'white' }}>Базы данных</Title>
        <Paragraph style={{ color: 'white' }}>
          MySQL, MS SQL, PostgreSQL, Oracle, MongoDB, REDIS
        </Paragraph>
      </div>
      <div className='block'>
        <Title level={3} style={{ color: 'white' }}>Администрирование</Title>
        <Paragraph style={{ color: 'white' }}>
          Системные администраторы, DevOps, SRE, SysOPS, MLOps
        </Paragraph>
      </div>
      <div className='block'>
        <Title level={3} style={{ color: 'white' }}>Инструменты поиска</Title>
        <Paragraph style={{ color: 'white' }}>
          HeadHunter, Хабр.Карьера, Amazing Hiring, Linkedin, GitHub, Getmatch,
          Telegram, VK, Stackoverflow
        </Paragraph>
        <Paragraph className='bold-p' style={{ color: 'white' }}>
          Собственная база кандидатов по всему СНГ
        </Paragraph>
      </div>
    </div>
  );
};

export default ThirdSection;
