import './TransactionHistory.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className="TransactionTable">
      <thead className="TransactionThead">
        <tr className="title">
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(items => (
          <tr key={items.id}>
            <td>{items.type}</td>
            <td>{items.amount}</td>
            <td>{items.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
