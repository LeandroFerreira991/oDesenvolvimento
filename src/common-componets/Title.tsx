
import styled from 'styled-components'

interface PropsTitleRegular {
    color: string;
}

export const TitleRegular = styled.text<PropsTitleRegular>`
    font-family: 'Archivo Black';
    font-style: normal;
    font-weight: 900;
    font-size: 5vw;
    font-family: 'Archivo Black', sans-serif;
    color:  ${(propsTitleRegular) => propsTitleRegular.color};
`