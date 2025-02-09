import { Canvas } from '@react-three/fiber';
import CupCake from "../components/CupCake";
import * as S from './Styles';


const HomePage = () => {
    return(
        <S.Wrapper>
            <S.MainText>HAPPY</S.MainText>
            <Canvas style={{ height: '45%' }}>
                <CupCake/>
            </Canvas>
        </S.Wrapper>
    );
}

export default HomePage;