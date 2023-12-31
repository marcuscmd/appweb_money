import { useEffect, useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps{
    onOpenModalTransaction: () => void;
}

export function Header({ onOpenModalTransaction }: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenModalTransaction}>
                    Nova Transação
                </button>

            </Content>
        </Container>
    )

}