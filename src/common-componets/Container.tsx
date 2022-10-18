
import styled from 'styled-components'

interface PropsContainer {
    color: string;
}

export const Container = styled.div<PropsContainer>`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 660px;
    font-family: 'Archivo Black', sans-serif;
    background: linear-gradient(90deg, ${(propsContainer) => propsContainer.color} 50%, #F5F5F5 50%);
`