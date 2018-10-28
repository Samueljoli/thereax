import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'antd';
import { Fade } from 'react-reveal';
import { isMobile } from 'react-device-detect';
import ReapForm from '../ReapForm';
import media from '../../helpers/media';

import './index.css';

const StyledH1 = styled.h1`
  margin-bottom: 0;
  font-size: 3em;
`;

const StyledH4 = styled.h4`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StyledCol = styled(Col)`
  height: 80vh;
  text-align: center;
  padding: 60px;

  ${media.sm`
    height: 100vh;
    text-align: left;
    padding: 100px;
  `}
`;

const Img = styled.img`
  height: auto;
  width: 100%

  ${media.sm`
    height: auto;
    width: 70%
  `}
`;

const colBaseStyle = {
  lg: 12,
  sm: 24,
};

class LandingPage extends Component {
  state = { showModal: false };

  showModal = () => {
    this.setState({
      showModal: true,
    });
  }

  onSuccess = () => {
    this.setState({
      showModal: false,
    });
  }

  onFailure = () => {
    this.setState({
      showModal: false
    });
  }

  swap = (elements) => {
    const first = elements[0];
    elements[0] = elements[1];
    elements[1] = first;
  }

  sectionTwo = () => {
    const section = [
      <StyledCol key="section-two-img" {...colBaseStyle}>
          <Fade delay={isMobile ? 500 : 1000}>
            <Img src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/home_redesign/Android_trading_still.png" />
          </Fade>
      </StyledCol>,
      <StyledCol key="section-two-copy" {...colBaseStyle}>
        <Fade top delay={500}>
          <StyledH1>Search for free.</StyledH1>
        </Fade>
        <Fade bottom delay={1000}>
          <div>
            <StyledH4>We believe that owning real estate should work for everyone, not just the wealthy.</StyledH4>
            <StyledH4>We’ve pioneered algorithms to consolidate large amounts of public information to put everything you need to be informed about your real estate purchase right at your finger tips.</StyledH4>
          </div>
        </Fade>
      </StyledCol>
    ];

    if (isMobile) {
      this.swap(section);
    }

    return section;
  };

  sectionFour = () => {
    const section = [
      <StyledCol key="section-two-img" {...colBaseStyle}>
          <Fade delay={isMobile ? 500 : 1000}>
            <Img src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/home_redesign/Android_trading_still.png" />
          </Fade>
      </StyledCol>,
      <StyledCol key="section-two-copy" {...colBaseStyle}>
        <Fade top delay={500}>
          <StyledH1>Learn by doing.</StyledH1>
        </Fade>
        <Fade bottom delay={1000}>
          <div>
            <StyledH4>With REAX, you can learn to invest in the real estate as you build out your portfolio.</StyledH4>
            <StyledH4>Discover new areas or property types through Tags, and track your favorites with a personalized news feed, and more.</StyledH4>
          </div>
        </Fade>
      </StyledCol>
    ];

    if (isMobile) {
      this.swap(section);
    }

    return section;
  }

  render() {

    return (
      <Row style={{ backgroundColor: 'white' }}>
        <StyledCol {...colBaseStyle} style={{ marginTop: 64 }}>
          <Fade top delay={500}>
            <StyledH1>Real estate.</StyledH1>
            <StyledH1>Easier than ever before.</StyledH1>
          </Fade>
          <Fade bottom delay={1500}>
            <div>
              <StyledH4>REAX lets you learn where to invest in the market for free.</StyledH4>
            </div>
          </Fade>
          <Fade delay={2500}>
            <Button
              type="primary"
              onClick={this.showModal}
              size="large"
            >
              Sign Up
            </Button>
          </Fade>
        </StyledCol>
        <StyledCol {...colBaseStyle} style={{ marginTop: 64 }}>
          <Fade delay={isMobile ? 500 : 1500}>
            <Img src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/home_redesign/iPhoneHome_still.png" />
          </Fade>
        </StyledCol>
        {this.sectionTwo()}
        <StyledCol key="section-two-copy" {...colBaseStyle}>
          <Fade top delay={500}>
            <StyledH1>No manual needed.</StyledH1>
          </Fade>
          <Fade bottom delay={1000}>
            <div>
              <StyledH4>We’ve designed REAX to mimic stock exchanges. It’s fast, familiar, simple, and just works.</StyledH4>
            </div>
          </Fade>
        </StyledCol>
        <StyledCol key="section-three-img" {...colBaseStyle}>
          <Fade delay={isMobile ? 500 : 1000}>
            <div className="asset-placeholder" />
          </Fade>
        </StyledCol>
        {this.sectionFour()}
        <ReapForm
          message="Some copy"
          showModal={this.state.showModal}
          onClose={this.onFailure}
          onSuccess={this.onSuccess}
        />
      </Row>
    );
  }
}

export default LandingPage;
