import React from 'react';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import classes from './Questions.module.css';
import QuestionHeader from './QuestionHeader';
import QuestionBody from './QuestionBody';
import { CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const Questions = (props) => {
  return (
    <Collapse
      bordered={false}
      accordion
      className={classes.questions}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      defaultActiveKey={['1']}
      expandIconPosition='right'
    >
      <Panel
        header={
          <QuestionHeader
            sno='1'
            title='Lorem Ipsum Dolor'
            points='10'
            solved='1000'
            total='1500'
          />
        }
        key='1'
        collapsible={props.collapsibles[0]}
        className={classes.question1}
      >
        <QuestionBody question='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' />
      </Panel>
      <Panel
        header={
          <QuestionHeader
            sno='2'
            title='Lorem Ipsum Dolor'
            points='10'
            solved='1000'
            total='1500'
          />
        }
        key='2'
        collapsible={props.collapsibles[1]}
        className={classes.question2}
      >
        <QuestionBody question='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' />
      </Panel>
      <Panel
        header={
          <QuestionHeader
            sno='3'
            title='Lorem Ipsum Dolor'
            points='10'
            solved='1000'
            total='1500'
          />
        }
        key='3'
        collapsible={props.collapsibles[2]}
        className={classes.question3}
      >
        <QuestionBody question='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' />
      </Panel>
      <Panel
        header={
          <QuestionHeader
            sno='4'
            title='Lorem Ipsum Dolor'
            points='10'
            solved='1000'
            total='1500'
          />
        }
        key='4'
        collapsible={props.collapsibles[3]}
        className={classes.question4}
      >
        <QuestionBody question='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' />
      </Panel>
    </Collapse>
  );
};

export default Questions;
