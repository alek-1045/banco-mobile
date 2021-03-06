import React, { ReactNode } from "react";
import { theme } from "../../global/styles/theme";
import { Container } from "./styles";

interface Props {
    children: ReactNode;
}

export function Background({ children }: Props) {
    const { secondary70, secondary90 } = theme.colors
    return (
        <Container
            colors={[secondary90, secondary90, secondary70]}
        >    
            {children}
        </Container>
    )
}