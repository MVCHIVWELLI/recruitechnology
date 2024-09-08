import React from "react";
import './SecondSection.css';
import {
  Divider,
  Typography,
  ConfigProvider,
  Button,
  Space,
  Steps,
  Carousel,
  Table,
  Collapse,
} from "antd";
import { Panel, PanelGroup, Placeholder } from "rsuite";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(26, 32, 39, 0)' :  'rgba(255, 255, 255, 0)' ,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  
  fontcolor: 'white', // Цвет текста
  border: '1px solid white', // Цвет границы
  maxWidth: 800,
  borderRadius: theme.spacing(10),
}));

const step1 = `Вы рассказываете нам о вакансиях и мы вместе формируем портрет кандидата`;
 const step2 = `Рекрутеры начинают поиск релевантных кандидатов и проводят первичное собеседование`;
 const step3 = `В первые 5 дней после начала сотрудничества с нами, вы начнете получать от нас первых кандидатов с сопроводительным письмом от наших рекрутеров`;
 const step4 = `Согласовываем даты собеседований с вашим нанимающим менеджером`;
 const step5 = `Успешным финалистам высылаем оффер и поддерживаем с ним связь на протяжении всего испытательного срока`;

const SecondSection = () => {
  return (
    <div className="Block">
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Mulish",
            colorText:"white",
            fontSize:18
          },
        }}
      >
           <Box sx={{ flexGrow: 6, overflow: 'hidden', px: 3 }}>
           <div className="item">
            <Stack spacing={2} direction="row" alignItems="center">
              <Avatar sx={{ bgcolor: "black" }}>1</Avatar>
              <Typography noWrap>{`Вы рассказываете нам о вакансиях и мы вместе формируем портрет кандидата`}</Typography>
            </Stack>
          </div>
          <div className="item">
            <Stack spacing={2} direction="row" alignItems="center">
              <Stack>
                <Avatar sx={{ bgcolor: "black" }}>2</Avatar>
              </Stack>
              <Stack sx={{ minWidth: 0 }}>
                <Typography color="white" noWrap>{`Рекрутеры начинают поиск релевантных кандидатов и проводят первичное собеседование`}</Typography>
              </Stack>
            </Stack>
          </div>
          <div className="item">
            <Stack spacing={2} direction="row" alignItems="center">
              <Stack>
                <Avatar sx={{ bgcolor: "black" }}>3</Avatar>
              </Stack>
              <Stack sx={{ minWidth: 0 }}>
                <Typography color="white" noWrap>{`В первые 5 дней после начала сотрудничества с нами, вы начнете получать от нас первых кандидатов с сопроводительным письмом от наших рекрутеров`}</Typography>
              </Stack>
            </Stack>
          </div>
          <div className="item">
            <Stack spacing={2} direction="row" alignItems="center">
              <Stack>
                <Avatar sx={{ bgcolor: "black" }}>4</Avatar>
              </Stack>
              <Stack sx={{ minWidth: 0 }}>
                <Typography color="white" noWrap>{`Согласовываем даты собеседований с вашим нанимающим менеджером`}</Typography>
              </Stack>
            </Stack>
          </div>
          <div className="item">
            <Stack spacing={2} direction="row" alignItems="center">
              <Stack>
                <Avatar sx={{ bgcolor: "black" }}>5</Avatar>
              </Stack>
              <Stack sx={{ minWidth: 0 }}>
                <Typography color="white" noWrap>{`Успешным финалистам высылаем оффер и поддерживаем с ним связь на протяжении всего испытательного срока`}</Typography>
              </Stack>
            </Stack>
          </div>
     
        
   
    
    </Box>
    
      </ConfigProvider>
     
    </div>
  );
};

export default SecondSection;
