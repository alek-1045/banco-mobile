import React from 'react';
import { Avatar } from '../Avatar';
import { 
    Container,
    Content,
    User,
    UserName,
    Message,
    Imagem
    //Buttons,
    
} from './styles';
import off from '../../assets/off.png' 
import { Image } from 'react-native';

export function Profile() {
    return (
        
        <Container>
            
                <Content>
                    <User>
                        <UserName>
                            Acessar sua conta
                        </UserName>
                    </User>
                
                    <Message>
                     Lembrar meu cpf{`\n`} 
                    
                    </Message>
                    <Imagem source={off} />
                
                </Content>
            
        </Container>
    )
}