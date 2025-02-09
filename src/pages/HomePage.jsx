import { Canvas } from '@react-three/fiber';
import CupCake from "../components/CupCake";
import * as S from './Styles';


const HomePage = () => {
    return(
        <S.Wrapper>
            <S.MainText opacity={0.4}>HAPPY</S.MainText>
            <S.MainText opacity={0.68}>B-DAY</S.MainText>
            <S.MainText opacity={1.0}>SEOJIN</S.MainText>

            <S.CanvasWrapper>
                <Canvas style={{ height: '60%', backgroundColor: '#' }}>
                    <CupCake/>
                </Canvas>

            </S.CanvasWrapper>
        </S.Wrapper>
    );
}

export default HomePage;