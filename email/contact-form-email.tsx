import * as React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};


export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> =
  ({ message, senderEmail }) => {
    return (
      <Html lang='en' >
        <Head />
        <Preview>Email Header</Preview>
        <Tailwind>
          <Body className="bg-gray-100 text-black">
            <Container>
              <Section className="bg-white border border-black/10 my-10 px-10 py-4 rounded-md">
                <Heading className="bg-white border border-black/10 my-10 px-10 py-4 rounded-md">
                  You received the following message from the company landing page:
                </Heading>
                <Text>{message}</Text>
                <Hr />
                <Text>The sender's email is: {senderEmail}</Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>

    );
  }

