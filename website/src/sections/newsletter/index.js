import React, { useState } from 'react';

import addToMailChimp from 'gatsby-plugin-mailchimp';
import Form from '../../components/form';
import Emoji from '../../components/emoji';

import Section from '../../components/section';

import schema from './schema';
import messages from './messages';

import * as S from './styles';

const Newsletter = () => {
  const [result, setResult] = useState('');
  const [sending, setSending] = useState(false);

  const getPathName = () => window.location.pathname;

  const subscribe = ({
    FNAME,
    email,
    pathname = getPathName()
  }) => addToMailChimp(email, { FNAME, pathname });

  const onSubmit = async (values) => {
    setSending(true);
    try {
      const { result } = await subscribe(values);
      setResult(result);
    } catch (err) {
      setResult('warning');
    }
    setSending(false);
  };

  const renderMessage = () => result && !sending && (
    <S.Message type={result}>
      {messages[result].text}
    </S.Message>
  );

  return (
    <Section light>
      <S.Newsletter>
        <S.Title>
          <Emoji aria-label="caixa de correspondências" content="📬" /> Newsletter
        </S.Title>
        <S.Text>
          Fique por dentro das novidades sobre livro (como sorteios e lançamento) e posts do autor.
        </S.Text>
        <S.Form>
          <Form schema={schema} onSubmit={onSubmit} disabled={sending} />
        </S.Form>
        {renderMessage()}
      </S.Newsletter>
    </Section>
  );
};

export default Newsletter;
