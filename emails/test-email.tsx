import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

const headerURL = 'https://app.gligle.next.efficax.team/header_background.png';

export const StripeWelcomeEmail = () => (
  <Html>
    <Head></Head>
    <Preview>Test email</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img height={'100%'} style={header} src={headerURL} alt="logo" />

        {/* MAIN */}

        <Section style={body}>
          <Heading style={body__title}>👋 Welcome, Yurii!</Heading>
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
          <Row style={footer__links}>
            <Column>
              <Link style={bold} href="random_email@example.com">
                Contact us
              </Link>
            </Column>
            <Column>
              <Text style={separator}>|</Text>
            </Column>
            <Column>
              <Link style={bold} href="random_email@example.com">
                Privacy Policy
              </Link>
            </Column>
            <Column>
              <Text style={separator}>|</Text>
            </Column>
            <Column>
              <Link style={bold} href="random_email@example.com">
                Mission Statement
              </Link>
            </Column>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default StripeWelcomeEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: ' Outfit, sans-serif',
};

const header = {
  height: '128px',
  width: '100%',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const footer = {
  padding: '40px',
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
};

const separator = {
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '16px',
  color: '#7C7E7C',
  margin: '0 10px',
};
const footer__links = {
  width: '300px',

  margin: '30px 0 auto 0',
};

const body = {
  padding: '40px',
  backgroundColor: '#FFFFFF',
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
