import React from 'react';
import { Avatar, Modal, Button, Input } from 'antd';

import {
  ExpertContainer,
  ExpertTitle,
  ExpertDetail,
  ExpertName,
  ExpertPhoneNumber,
  ExpertDetailModal,
  ExpertContactContainer,
  ExpertData,
  ExpertAbout,
  UserContactDetail,
  MessageContainer,
  UserOtherContainer,
  ExpertAvatar,
  MessageSubmitButton,
  ContacatLocalExpertHeading,
  MessageModalContainer,
  MessageModalFooter
  } from './Expert.js';

import './Expert.css';

class Expert extends React.Component {
  constructor(props) {
    super(props);
    let { expert } = props;
    this.handleCancel = this.handleCancel.bind(this);
    this.state = {
      title: expert.occupation,
      name: expert.name,
      phone: expert.phone,
      photo_url: expert.photo,
      about: expert.about,
      loading: false,
      visible: false,
     }
  }
  render() {
    const { TextArea } = Input;
    return(
      <ExpertContainer onClick={this.showModal}>
        <Avatar size={50} src={this.state.photo_url} />
        <ExpertDetail>
          <ExpertTitle>
            {this.state.title}
          </ExpertTitle>
          <ExpertName>
            {this.state.name}
          </ExpertName>
          <ExpertPhoneNumber>
            {this.state.phone}
          </ExpertPhoneNumber>
        </ExpertDetail>
        <Modal
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
          bodyStyle={{height: "42vh"}}
          closable={false}
        >
          <ExpertContactContainer>
            <ExpertDetailModal>
              <ExpertAvatar>
                <Avatar size={130} src={this.state.photo_url} shape="square" />
              </ExpertAvatar>
              <ExpertData>
                <ExpertTitle>
                  {this.state.title}
                </ExpertTitle>
                <ExpertName>
                  {this.state.name}
                </ExpertName>
                <ExpertPhoneNumber>
                  {this.state.phone}
                </ExpertPhoneNumber>
                <ExpertAbout>
                  {this.state.about}
                </ExpertAbout>
              </ExpertData>
            </ExpertDetailModal>
            <ContacatLocalExpertHeading>
              Contact a local expert today!
            </ContacatLocalExpertHeading>
            <MessageContainer>
              <UserContactDetail>
                <Input style={{ width: 220 }} placeholder="Name" size="small" />
                <Input style={{ width: 220 }} placeholder="Email" size="small" />
                <Input style={{ width: 220 }} placeholder="Phone" size="small" />
              </UserContactDetail>
              <UserOtherContainer>
                <Input style={{ width: 220 }} placeholder="Investment $ Range" size="small" />
                <TextArea style={{ width: 220 }} placeholder="Other" />
              </UserOtherContainer>
            </MessageContainer>
            <MessageSubmitButton> Submit </MessageSubmitButton>
            <MessageModalFooter>
              For quickest results fill out this form and call the experts phone number listed above!
            </MessageModalFooter>
          </ExpertContactContainer>
        </Modal>
      </ExpertContainer>
    );
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = (e) => {
    e.stopPropagation();
    this.setState({
      visible: false
    });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    let expert = nextProps.expert;
    return {
      title: expert.occupation,
      name: expert.name,
      phone: expert.phone,
      photo_url: expert.photo,
      about: expert.about
    }
  }
}

export default Expert;
