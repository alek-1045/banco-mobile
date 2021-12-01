import React from "react";
import { TouchableOpacityProps } from 'react-native'
//import arrow from '../../../assets/arrow.png';


import { 
    Container,
    // IconWrapper,
    // Imagem,
    Title,
    // Title1,
} from "./styles";

interface Props extends TouchableOpacityProps {
    title?: string;
}

export function ButtonIcon({ title, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Title>
                {title}
            </Title>
            {/* <Title1>
                {title}
            </Title1> */}
        </Container>
    )
}