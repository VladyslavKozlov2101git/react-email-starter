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

const location = 'https://greenertides.4-com.pro/letter__location.png';
const logo = 'https://greenertides.4-com.pro/letter__test.png';
const star = 'https://greenertides.4-com.pro/letter__rating.png';

export const JobAlert = () => (
  <Html>
    <Head></Head>
    <Preview>Job Alert</Preview>
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
          <Heading style={body__title}>👋 Hello there!</Heading>
          <Text style={body__text}>We’ve found a job you may be interested in.</Text>

          {/* JOBS */}

          <Section style={job_container}>
            <div>
              <img
                style={{
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  margin: '0 12px 0 0 ',
                  border: '1px solid #DCDCE0',
                  float: 'left',
                }}
                src={logo}
                alt="logo"
              />
              <div>
                <p style={job_bold_text}>Greyparrot</p>
                <div>
                  <img style={job_star} src={star} alt="star" />
                  <Text style={job_bold_text}>4.8 </Text>
                  <Text style={job_regular_text}>Sustainability score</Text>
                  <Text style={job_regular_text}>•</Text>
                  <Text style={job_bold_text}>77% </Text>
                  <Text style={job_regular_text}>Trust score</Text>
                </div>
              </div>
            </div>

            <Heading style={job_title} as="h2">
              UI/UX Designer
            </Heading>
            <div style={job_location}>
              <Text style={job_bold_text}>£40k - £70k</Text>
              <Text style={job_regular_text}>•</Text>
              <img style={job_regular_text} src={location} alt="location" />
              <Text style={job_regular_text}>London, England</Text>
            </div>
            <Text style={job_description}>
              Joining us as our first UI/UX hire, you’ll join the product team and have a
              significant impact on how we shape the next version of our product. We are
              re-designing our ecosystem, and building a design system around what we’ve got and
              what we want to build in order to support the customer’s experience with our product
              as we scale. This role is suited to...
            </Text>
            <Button href="https://example.com" style={job_button}>
              See full job details
            </Button>
          </Section>

          <Section style={job_container}>
            <div>
              <img
                style={{
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  margin: '0 12px 0 0 ',
                  border: '1px solid #DCDCE0',
                  float: 'left',
                }}
                src={logo}
                alt="logo"
              />
              <div>
                <p style={job_bold_text}>Greyparrot</p>
                <div>
                  <img style={job_star} src={star} alt="star" />
                  <Text style={job_bold_text}>4.8 </Text>
                  <Text style={job_regular_text}>Sustainability score</Text>
                  <Text style={job_regular_text}>•</Text>
                  <Text style={job_bold_text}>77% </Text>
                  <Text style={job_regular_text}>Trust score</Text>
                </div>
              </div>
            </div>

            <Heading style={job_title} as="h2">
              UI/UX Designer
            </Heading>
            <div style={job_location}>
              <Text style={job_bold_text}>£40k - £70k</Text>
              <Text style={job_regular_text}>•</Text>
              <img style={job_regular_text} src={location} alt="location" />
              <Text style={job_regular_text}>London, England</Text>
            </div>
            <Text style={job_description}>
              Joining us as our first UI/UX hire, you’ll join the product team and have a
              significant impact on how we shape the next version of our product. We are
              re-designing our ecosystem, and building a design system around what we’ve got and
              what we want to build in order to support the customer’s experience with our product
              as we scale. This role is suited to...
            </Text>
            <Button href="https://example.com" style={job_button}>
              See full job details
            </Button>
          </Section>
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

export default JobAlert;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: ' Outfit, sans-serif',
  margin: '0 !important',
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

const job_title = {
  color: '#1E1E2E',
  fontSize: '20px',
  lineHeight: '32px',
  fontWeight: 'bold',
  margin: '24px 0 0 0',
};

const job_location = {
  display: 'inline-block',
};

const job_container = {
  padding: '40px 0',
  borderBottom: '1px solid #DCDCE0',
};
const job_description = {
  color: '#1E1E2E',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: '400',
  margin: '24px 0 0 0',
};

const job_bold_text = {
  display: 'inline-block',
  margin: '0 8px 0 0 ',
  color: '#1E1E2E',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 'bold',
};

const job_star = {
  width: '16px',
  height: '16px',
};

const job_regular_text = {
  display: 'inline-block',
  margin: '0 8px 0 0 ',
  color: '#7C7E7C',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: '400',
};

const job_button = {
  borderRadius: '28px',
  background: '#68B84C',
  padding: '16px 0',
  width: '194px',
  color: '#FFFFFF',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '56px',
  textAlign: 'center' as const,
  display: 'block',
  margin: '24px 0 0 0',
};
