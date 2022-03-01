import React from "react";
import classes from "./GameScreen.module.css";
import cyberhack from "../images/cyberlogo.png";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const GameScreen = () => {
  return (
    <>
      <div className={classes.outercontainer}>
        <div className={classes.nav}>
          <img className={classes.cyberhacklogo} src={cyberhack} alt="" />
        </div>
        <div className={classes.body}>
          <div className={classes.level}>
            <h1>Level 1!</h1>
          </div>
          <div className={classes.questions}>
            <Collapse
              bordered={false}
              defaultActiveKey={["1"]}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              className="site-collapse-custom-collapse"
            >
              <Panel
                header="This is panel header 1"
                key="1"
                className="site-collapse-custom-panel"
              >
                <p>{text}</p>
              </Panel>
              <Panel
                header="This is panel header 2"
                key="2"
                className="site-collapse-custom-panel"
              >
                <p>{text}</p>
              </Panel>
              <Panel
                header="This is panel header 3"
                key="3"
                className="site-collapse-custom-panel"
              >
                <p>{text}</p>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameScreen;
