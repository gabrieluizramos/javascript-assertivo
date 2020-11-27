import React from 'react';

import Section from '../../components/section';

const BannerSection = () => (
  <Section light>
    <h3><span role="img" aria-label="livro">📖</span> Esse livro é pra mim?</h3>
    <p>
      Se você trabalha com desenvolvimento de software ou possui interesse em aprender sobre testes, buscando entregar um produto com maior qualidade e confiabilidade, então <b>sim, esse livro é para você</b>.
    </p>
    <p>
      Ao final de todo o processo você vai saber como aplicar nos seus projetos de forma eficiente os mais variados tipos testes: de <b>unidade</b>, de <b>integração</b>, de <b>carga</b>, de <b>regressão visual</b> e de <b>ponta-a-ponta</b>.
    </p>
    <p>
      Todo o material envolvido tem como intuito fundamentar uma base sólida nos mais amplos cenários de testes possíveis com diversos exercícios, desafios e projetos práticos ao longo de sua jornada.
    </p>
  </Section>
);

export default BannerSection;
