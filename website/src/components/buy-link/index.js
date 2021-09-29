import React from 'react';

import Link from '../link';

const BuyLink = ({ color }) => (
  <Link
    href="https://www.casadocodigo.com.br/"
    color={color}
    disabled
  >
    ⏳ compre o livro (em breve)
  </Link>
);

export default BuyLink;
