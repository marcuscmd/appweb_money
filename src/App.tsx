import { Dashboard } from "./components/dashboard";
import { Header } from "./components/header";
import Modal from "react-modal";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { TransactionModal } from "./components/modal_transaction";
import { TransactionsProvider } from "./hooks/useTransaction_context";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpen(!isNewTransactionModalOpen);
  }
  return (
    <TransactionsProvider>
      <Header onOpenModalTransaction={handleOpenNewTransactionModal} />
      <Dashboard />
      <TransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleOpenNewTransactionModal}/>
      <GlobalStyle />
    </TransactionsProvider>
  );
}