import styled from 'styled-components/native';

// export const Container = styled.View`
//     flex: 1;
//     align-items: center;
//     justify-content: center;
//     background-color: ${({ theme }) => theme.colors.background};
    
// `

// export const Content = styled.View`
//     margin-top: -60px;
//     padding: -20px;
//     justify-content: center;
// `

// export const Title = styled.Text`
//     color: ${({ theme }) => theme.colors.heading};
    
//     font-size: 30px;
//     margin-top: 38px;
//     padding: 50px;
// `

// export const SubTitle = styled.Text`
//     color: ${({ theme }) => theme.colors.heading};
//     font-size: 15px;
    
//     margin-bottom: 64px;
//     margin-top: 20px;
// `
// export const Image = styled.View`
//     justify-content: center;
// `
export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
`

export const Content = styled.View`
    margin-top: -40px;
    padding: 50px;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.heading};
    text-align: center;
    font-size: 40px;
    margin-bottom: 16px;
`

export const SubTitle = styled.Text`
    color: ${({ theme }) => theme.colors.heading};
    font-size: 15px;
    text-align: center;
    margin-bottom: 64px;
`

export const ButtonIcon1 = styled.View`
    flex: 1px;
    font-size: 15px;
    text-align: center;
    color: ${({ theme }) => theme.colors.heading};
`