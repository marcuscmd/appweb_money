import { FormEvent, useState, useContext } from 'react'
import Modal from 'react-modal'
import { Container, TransactionContainer, RadioBox } from './styles'
import closeImg from '../../assets/close.svg'
import saidaImg from '../../assets/saida.svg'
import entradaImg from '../../assets/entrada.svg'
import { useTransactions } from '../../hooks/useTransaction_context'


interface TransactionProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function TransactionModal({ isOpen, onRequestClose }: TransactionProps) {

    const {createTransaction} = useTransactions();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit')

    async function handleCreateTransaction(event: FormEvent) {
        event.preventDefault();
        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');

        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className='modal-close'>
                <img src={closeImg} alt="Fechar Modal" />
            </button>
            <Container onSubmit={handleCreateTransaction}>
                <h2>Cadastrar transação</h2>
                <input placeholder='Titulo' 
                value={title}
                onChange={event => setTitle(event.target.value)}
                />
                <input type='number' placeholder='Valor'
                value={amount}
                onChange={event => setAmount(Number(event.target.value))}
                 />
                <TransactionContainer>
                    <RadioBox type="button"
                        activeColor='green'
                        isActive={type == 'deposit'}
                        onClick={() => { setType('deposit'); }}
                    >
                        <img src={entradaImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox type="button"
                        activeColor='red'
                        isActive={type == 'withdraw'}
                        onClick={() => { setType('withdraw'); }}>
                        <img src={saidaImg} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>
                </TransactionContainer>
                <input placeholder='Categoria'
                value={category}
                onChange={event => setCategory(event.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}