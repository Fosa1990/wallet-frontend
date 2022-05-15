import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ModalAddTransactions() {
  const notify = () =>
    toast.error('Error, somesing go wrong', { autoClose: 3000 });
  return (
    <div>
      <h2>Добавить транзакцию</h2>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
      <form>
        <input type="checkbox" id="switch" />
        <label for="switch">Toggle</label>
        <label>
          <input type="text" />
        </label>
        <label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </label>
      </form>
    </div>
  );
}
