import React from "react";
import {
  Divider,
  Typography,
  ConfigProvider,
  Button,
  Space,
  Steps,
  Carousel,
} from "antd";

import { CustomProvider } from "rsuite";

import "@fontsource/mulish";
import "./Layout.css";
const { Title, Paragraph, Text, Link } = Typography;

const Layout = () => {
  return (
    <div>
      <div className="Layout">
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "Mulish",
            },
          }}
        >
          <Typography style={{ color: "white" }}>
            <Title style={{ color: "white", fontSize: "30px", fontWeight:"bold"  }}>
              RecruITechnology
            </Title>
            <Paragraph style={{ color: "white", fontSize: "14px" }}>
              Закроем потребности вашего бизнеса в найме разработчиков, DevOps и
              SRE специалистов
            </Paragraph>
            <Paragraph style={{ color: "white", fontSize: "14px" }}>
              Только самые сильные кандидаты по вашему портрету
            </Paragraph>
          </Typography>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default Layout;
