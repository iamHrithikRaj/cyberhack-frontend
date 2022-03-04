import React from 'react';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import classes from './Questions.module.css';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Questions = () => {
  return (
    <Collapse accordion className={classes.questions} defaultActiveKey={['1']}>
      <Panel
        header='This is panel header 1'
        key='1'
        className={classes.question}
      >
        <p>{text}</p>
      </Panel>
      <Panel header='This is panel header 2' key='2'>
        <p>{text}</p>
      </Panel>
      <Panel header='This is panel header 3' key='3'>
        <p>{text}</p>
      </Panel>
      <Panel header='This is panel header 4' key='4'>
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};

export default Questions;
