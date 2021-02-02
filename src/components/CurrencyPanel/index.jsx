import React, {useEffect, useState} from 'react';
import { apiurl, proxyurl } from '../../services/api';

import { Grid, Panel, TextTitle, TextSubTitle, Div, H1 } from './styles';

const Currency = () => {
  const [dollar, setDollar] = useState();
  const [euro, setEuro] = useState();

  useEffect(() => {
    fetch(proxyurl + apiurl)
      .then(res => res.json())
      .then(data => {
        const dollarQuotation = (data.currencies.USD.buy)
        const dollarToReal = dollarQuotation
          .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})

        const euroQuotation = (data.currencies.EUR.buy)
        const euroToReal = euroQuotation
          .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})

        setDollar(dollarToReal)
        setEuro(euroToReal)
      })
      .catch(() => console.log("Can’t access " + apiurl + " response. Blocked by browser?"))
  }, [])

  return (
    <>
      <Grid>
        <Panel>
          <TextTitle>USD</TextTitle>
          <TextSubTitle>Dólar Americano</TextSubTitle>
          <Div>
            <H1>{dollar}</H1>
          </Div>
        </Panel>

        <Panel>
        <TextTitle>EUR</TextTitle>
        <TextSubTitle>Euro</TextSubTitle>
        <Div>
          <H1>{euro}</H1>
        </Div>
        </Panel>
      </Grid>
    </>
  );
}

export default Currency;
