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
                <Canvas style={{ height: '60%' }}>
                    <CupCake/>
                </Canvas>
            </S.CanvasWrapper>

            <S.SubText>Birthday Party Invitation</S.SubText>
            <S.KoreanText>24번째 생일 파티에 초대합니다</S.KoreanText>

            <S.WhiteContainer>
                <S.TitleText>Time Table</S.TitleText>
                <S.TableRow>
                    <S.PlainText>15:00</S.PlainText>
                    <S.PlainText>글램핌장 입실, 바다 감상</S.PlainText>
                </S.TableRow>
                <S.TableRow>
                    <S.PlainText>16:00</S.PlainText>
                    <S.PlainText>발렌타인 초콜릿 만들기</S.PlainText>
                </S.TableRow>
                <S.TableRow>
                    <S.PlainText>17:30</S.PlainText>
                    <S.PlainText>맛있는 바비큐와 라면</S.PlainText>
                </S.TableRow>
                <S.TableRow>
                    <S.PlainText>19:00</S.PlainText>
                    <S.PlainText>불멍과 마시멜로 타임</S.PlainText>
                </S.TableRow>
                <S.TableRow>
                    <S.PlainText>20:00</S.PlainText>
                    <S.PlainText>오로라 모닥불 만들기</S.PlainText>
                </S.TableRow>
                <S.TableRow>
                    <S.PlainText>21:00</S.PlainText>
                    <S.PlainText>로맨틱 영화보기</S.PlainText>
                </S.TableRow>
                <S.TableRow>
                    <S.PlainText>23:00</S.PlainText>
                    <S.PlainText>모루인형 멍구 만들기</S.PlainText>
                </S.TableRow>
                <S.TableRow>
                    <S.PlainText>00:00</S.PlainText>
                    <S.PlainText>Happy Birthday!</S.PlainText>
                </S.TableRow>
            </S.WhiteContainer>

            <S.KoreanText>아래 준비물 지참이 필요합니다</S.KoreanText>
            <S.WhiteContainer>
                <S.NeedText>생일 파티를 즐길 체력</S.NeedText>
                <S.NeedText>오로라 모닥불을 위한 마법 가루</S.NeedText>
                <S.NeedText isLast='True'>먹고 싶은 만큼의 마시멜로우</S.NeedText>
            </S.WhiteContainer>
        
            <S.KoreanText>그럼, 2월 12일에 만나요! 👋🏻</S.KoreanText>
        </S.Wrapper>
    );
}

export default HomePage;