import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';

export const Wrapper = styled.div`
    width: 10 0%;
    max-width: 100%;
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