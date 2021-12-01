import { useNavigation, useNavigationState } from '@react-navigation/core';
import React from 'react';
import { 
    Image
} from 'react-native';

import Ilustration from '../../assets/illustration.png';
import { ButtonIcon, } from '../../components/ButtonIcon';
import { 
    Container, 
    Title,
    //Title1,
    ButtonIcon1,
    SubTitle,
    Content 
} from './styles';

export function Signin() {
    const navigation = useNavigation();

    function handleSignin(){
        navigation.navigate('Home')
    }
    return (
        <Container>
            <Content>
                <Title>
                    Buscamos {`\n`}
                    tranquilidade  {`\n`}
                    para seu futuro ?
                </Title>
                <Image source={Ilustration} />
                <SubTitle>
                    > Os beneficos da Previdência {`\n`} 
                    Santander vão muito além {`\n`} 
                    da aposentadoria. 
                    
                </SubTitle>
                <ButtonIcon 
                    title="Acessar sua Conta"
                    activeOpacity={0.7}
                    disabled={false}
                    onPress={handleSignin}
                />

                {/* <ButtonIcon1
                    title="Atendimento"
                    activeOpacity={0.7}
                    disabled={false}
                    onPress={handleSignin}
                />
                <ButtonIcon2
                    title="ID Santander"
                    activeOpacity={0.7}
                    disabled={false}
                    onPress={handleSignin}
                />
                <ButtonIcon3
                    title="Acessar sua Conta"
                    activeOpacity={0.7}
                    disabled={false}
                    onPress={handleSignin}
                /> */}
            </Content>    
        </Container>
    )
}
