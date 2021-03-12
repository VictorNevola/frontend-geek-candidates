import { NextPage } from 'next';
import { IFiltersAvailbles } from './types';
import api from '../services/api';
import CandidatesContextProvider from '../context/candidates';
import { Filters } from '../components/Filters';
import { Cards } from '../components/Cards';
import { Section, Main, H1, Strong, Em, Content } from './styles';


const Home: NextPage<IFiltersAvailbles> = ({ technologies, experiences, localizations }) => {

  return (
    <>
      <Section>
        <Main>
          <H1> Os melhores <Strong>candidados</Strong> para seus <Strong>requisitos</Strong> </H1>
          <Em>Para filtrar os candidatos conforme sua escolha, selecione os filtros abaixo</Em>

          <Content>
              <CandidatesContextProvider>
                <Filters technologies={technologies} experiences={experiences} localizations={localizations} />
                <Cards />
              </CandidatesContextProvider>
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