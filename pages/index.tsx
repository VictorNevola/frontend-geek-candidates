import { NextPage } from 'next';
import { IFiltersAvailbles } from './types';
import api from '../services/api';
import FiltersContextProvider from '../Context/filter';
import { Filters } from '../components/Filters';
import { Section, Main, H1, Strong, Em, Content } from './styles';


const Home: NextPage<IFiltersAvailbles> = ({ technologies, experiences }) => {

  return (
    <>
      <Section>
        <Main>
          <H1> As melhores vagas para <Strong>programadores</Strong> e <Strong>desenvolvedores</Strong> </H1>
          <Em>Para filtrar os candidatos conforme sua escolha, selecione os filtros abaixo</Em>

          <Content>
              <FiltersContextProvider>
                <Filters technologies={technologies} experiences={experiences} />
              </FiltersContextProvider>
          </Content>

        </Main>
      </Section>
    </>

  )
}


Home.getInitialProps = async () => {

  const filters: IFiltersAvailbles = await api.get('api/filtersAvailables').then(data => data.data);

  return filters
}

export default Home;