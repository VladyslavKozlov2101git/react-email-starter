import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

const headerURL = 'https://greenertides.4-com.pro/letter__background.png';
const headerTitle = 'https://greenertides.4-com.pro/letter__header.jpg';

export const ActivateEmail = () => (
  <Html>
    <Head></Head>
    <Preview>Activate email</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* MAIN */}
        <div
          style={{
            background: `url(${headerURL})`,
            height: '128px',
            backgroundSize: 'contain',
            position: 'relative',
          }}>
          <img
            style={{
              width: '198px',
              height: '24px',
              padding: '52px 0',
              display: 'block',
              margin: '0 auto',
            }}
            src={headerTitle}
            alt="text"
          />
        </div>

        <Section style={body}>
          <Heading style={body__title}>👋 Welcome, Serhiy!</Heading>
          <Text style={body__text}>
            We’re so glad that you’re now a member of the GreenerTides community. To get started,
            you need to confirm your email address by clicking the button below.
          </Text>

          <Button href="https://example.com" style={body__button}>
            Activate your account
          </Button>

          <Text style={body__thanks}>Thanks for joining!</Text>
        </Section>

        {/* FOOTER ELEMENT */}

        <Section style={footer}>
          <Text style={text}>If you did not register this account, please ignore this email.</Text>
          <Text style={text}>
            This message was sent to{' '}
            <Link style={bold} href="random_email@example.com">
              random_email@example.com
            </Link>
          </Text>
          <div style={{ display: 'inline-block', margin: '30px 0 0 0' }}>
            <Link style={bold} href="random_email@example.com">
              Contact us
            </Link>
            <Text style={separator}>|</Text>
            <Link style={bold} href="https://greenertides.4-com.pro/privacy-policy">
              Privacy Policy
            </Link>
            <Text style={separator}>|</Text>
            <Link style={bold} href="https://greenertides.4-com.pro/mission-statement">
              Mission Statement
            </Link>
          </div>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ActivateEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: ' Outfit, sans-serif',
  margin: '0 !important',
};

const header = {
  height: '128px',
  width: '100%',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  marginBottom: '64px',
};

const footer = {
  padding: '40px 20px',
  backgroundColor: '#F5F6F8',
};

const text = {
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '16px',
  color: '#7C7E7C',
  margin: '0',
};
const bold = {
  fontWeight: 'bold',
  fontSize: '12px',
  lineHeight: '16px',
  color: '#1E1E2E',
  margin: '0',
  whiteSpace: 'nowrap',
};

const separator = {
  display: 'inline-block',
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '16px',
  color: '#7C7E7C',
  margin: '0 5px',
};

const body = {
  padding: '40px 20px',
  backgroundColor: '#FFFFFF',
  borderBottom: '1px solid #DCDCE0',
};
const body__title = {
  color: '#1E1E2E',
  fontSize: '24px',
  fontWeight: 'bold',
  lineHeight: '32px',
};

const body__text = {
  margin: '8px 0 0 0',
  color: '#1E1E2E',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '24px',
};

const body__thanks = {
  margin: '40px 0 0 0',
  color: '#1E1E2E',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '24px',
};

const body__button = {
  margin: '40px 0 0 0',
  borderRadius: '28px',
  background: '#68B84C',
  padding: '16px 0',
  width: '100%',
  color: '#FFFFFF',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '56px',
  textAlign: 'center' as const,
  display: 'block',
};
