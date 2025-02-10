import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;
`;

export const CanvasWrapper = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-37%);
    width: 100%;
    height: 100%;
    z-index: 1;
`;

export const MainText = styled.p`
    font-family: 'FuturaExtra', sans-serif;
    font-size: 80px;
    color: rgba(255, 255, 255, ${(props) => props.opacity || 1});
    margin: -6px;
`;

export const SubText = styled.p`
    font-size: 20px;
    color: white;
    margin-top: 410px;
    font-weight: 700;
`;

export const KoreanText = styled.p`
    font-size: 15px;
    color: rgba(255, 255, 255, 0.68);
    margin-top: 12px;
    font-weight: 500;
`;

export const WhiteContainer = styled.div`
    width: 78%;
    height: auto;
    padding: 20px;
    margin-top: 17px;
    margin-bottom: 20px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TitleText = styled.p`
    font-size: 15px;
    color: black;
    font-weight: 500;
    margin-bottom: 15px;
`;

export const TableRow = styled.div`
    width: 90%;
    margin-top: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const PlainText = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: black;
`;

export const NeedText = styled.p`
    font-size: 12px;
    margin-bottom: ${(props) => props.isLast=='True' ? '0px' : '12px'};
`;