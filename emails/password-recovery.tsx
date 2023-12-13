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

export const PasswordRecovery = () => (
  <Html>
    <Head></Head>
    <Preview>Password recovery</Preview>
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
          <h1 style={body__title}>
            <span style={{ verticalAlign: 'text-bottom' }}>👋</span> Hello, Serhiy!
          </h1>
          <Text style={body__text}>
            We’ve received your password reset request. To complete password recovery, click the
            button:
          </Text>

          <Button href="https://example.com" style={body__button}>
            Reset your password
          </Button>
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

export default PasswordRecovery;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: ' Outfit, sans-serif',
  margin: '0 !important',
};

const container = {
  maxWidth: '600px',
  width: '100%',
  backgroundColor: '#ffffff',
  margin: '0 auto',
  marginBottom: '64px',
};

const footer = {
  padding: '40px 7.5%',
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
  padding: '40px 7.5%',
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
