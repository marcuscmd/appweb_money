import { Summary } from '../summary'
import { TransactionTable } from '../transaction_table'
import {Container} from './styles'

export function Dashboard(){
    return(
        <Container>
            <Summary />
            <TransactionTable/>
        </Container>
    )
}