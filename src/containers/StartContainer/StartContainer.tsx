import { useNavigate } from "react-router-dom";
import StartStyle from "./Start.style";
import { Button, Card } from "antd";
import { FC } from "react";

export const StartContainer: FC = () => {
  let navigate = useNavigate();

  return (
    <Card style={StartStyle.card}>
      <h1>Let's start quiz</h1>
      <Button
        onClick={() => {
          navigate("/Quiz");
        }}
        style={StartStyle.button}
        type="primary"
        size="large"
      >
        Start
      </Button>
    </Card>
  );
};
