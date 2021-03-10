import { HeaderStyle, Wrapper, Main } from './styles';
import Image from 'next/image'

export const Header = () => {

    return(
        <HeaderStyle>

            <Wrapper>
                <Main>
                <Image
                    src="/images/logo-geekhunter.png"
                    alt="Logo"
                    width={184}
                    height={32}
                />
                </Main>
                
            </Wrapper>
            
        </HeaderStyle>
    )

};