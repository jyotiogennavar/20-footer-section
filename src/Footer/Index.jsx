import React from "react";
import styled from "styled-components";

import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";

// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64" xml:space="preserve"><path style="fill:#aad15d" d="M61.651 34.332c-5.422 11.14-19.194 14.467-26.046 13.401 6.769-4.825 16.245-9.204 16.245-9.204s-9.227 2.405-17.046 7.911c.923-2.322 3.343-6.489 7.548-9.544 5.406-3.933 11.895-4.795 19.299-2.564z"/><path style="fill:#90b74b" d="M33.525 42.613c.038 1.308-.098 2.337-.295 3.131a.1.1 0 0 0-.015.045C24.851 28.13 9.242 21.815 8.758 21.626c.537.318 14.256 8.553 22.34 25.781-.287.008 0 0-.348-.015C24.964 47.12 10.951 43.407 0 16.113c9.06-.401 18.234 2.76 24.79 8.599 5.529 4.923 8.546 11.109 8.735 17.901z"/></svg>

const WaveSVG = () => {
  return (
    <svg id="wave" viewBox="0 0 1440 190" version="1.1">
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stop-color="rgba(40, 54, 24, 1)" offset="0%"></stop>
          <stop
            stop-color="rgba(202.879, 230.325, 111.391, 1)"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient-0)"
        d="M0,57L10,47.5C20,38,40,19,60,25.3C80,32,100,63,120,79.2C140,95,160,95,180,98.2C200,101,220,108,240,120.3C260,133,280,152,300,136.2C320,120,340,70,360,53.8C380,38,400,57,420,53.8C440,51,460,25,480,34.8C500,44,520,89,540,117.2C560,146,580,158,600,161.5C620,165,640,158,660,139.3C680,120,700,89,720,72.8C740,57,760,57,780,72.8C800,89,820,120,840,117.2C860,114,880,76,900,76C920,76,940,114,960,129.8C980,146,1000,139,1020,114C1040,89,1060,44,1080,28.5C1100,13,1120,25,1140,50.7C1160,76,1180,114,1200,107.7C1220,101,1240,51,1260,38C1280,25,1300,51,1320,50.7C1340,51,1360,25,1380,19C1400,13,1420,25,1430,31.7L1440,38L1440,190L1430,190C1420,190,1400,190,1380,190C1360,190,1340,190,1320,190C1300,190,1280,190,1260,190C1240,190,1220,190,1200,190C1180,190,1160,190,1140,190C1120,190,1100,190,1080,190C1060,190,1040,190,1020,190C1000,190,980,190,960,190C940,190,920,190,900,190C880,190,860,190,840,190C820,190,800,190,780,190C760,190,740,190,720,190C700,190,680,190,660,190C640,190,620,190,600,190C580,190,560,190,540,190C520,190,500,190,480,190C460,190,440,190,420,190C400,190,380,190,360,190C340,190,320,190,300,190C280,190,260,190,240,190C220,190,200,190,180,190C160,190,140,190,120,190C100,190,80,190,60,190C40,190,20,190,10,190L0,190Z"
      ></path>
    </svg>
  );
};

export const Footer = () => {
  return (
    <>
      <WaveSVG />
      <Container>
        <FooterContent />
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 22rem;

  background-color: #283618;
  color: #fefae0;
  font-family: "poppins", sans-serif;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

const FooterContent = () => {
  return (
    <Wrapper>
      <NewsletterSignUp>
        <h2>Subscribe for our newsletter</h2>
        <p>Get the latest news and updates from our team</p>
        <input type="email" placeholder="Enter your email address" />
        <button>Subscribe</button>
      </NewsletterSignUp>
      <Grid>
        <ContentColumn>
          <Subheading>Company</Subheading>
          <Link>About Us</Link>
          <Link>Jobs</Link>
          <Link>Press</Link>
          <Link>Blog</Link>
        </ContentColumn>
        <ContentColumn>
          <Subheading>Resources</Subheading>
          <Link>Help</Link>
          <Link>Accessibility</Link>
          <Link>Privacy Policy</Link>
          <Link>Terms</Link>
        </ContentColumn>
        <ContentColumn>
          <Subheading>Contact</Subheading>
          <Link>
            <strong>Phone:</strong> 123-456-7890
          </Link>
          <Link>
            <strong>Address:</strong> 1234 Elm St. New York, NY 10001 USA
          </Link>
          <SocialIcons>
            <FaLinkedin />
            <FaXTwitter />
            <FaDiscord />
          </SocialIcons>
        </ContentColumn>
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem 4rem;
  display: flex;
  gap: 10rem;
  color: #fefae0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
  }
`;

const NewsletterSignUp = styled.div`
  flex: 1;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    padding: 1rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
    border: none;
  }

  button {
    width: 100%;
    padding: 0.8rem;
    border: none;
    border-radius: 1rem;
    background-color: #bc6c25;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover {
    transform: scale(0.9);
  }

  @media (max-width: 768px) {
    h2 {
      text-align: center;
    }

    p {
      text-align: center;
    }
  }
`;

const Grid = styled.div`
  max-width: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    max-width: 100%;
    grid-template-columns: 1fr;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  width: 100px;

  svg {
    color: #fff;
    font-size: 1.5rem;
  }

  svg:hover {
    color: #bc6c25;
  }
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  a {
    color: #fff;
    margin: 5px 0;
  }

  a:hover {
    text-decoration: underline;
  }

  strong {
    color: #fff;
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Subheading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Link = styled.a`
  margin: 5px 0;
  text-decoration: none;
`;

export default Footer;
