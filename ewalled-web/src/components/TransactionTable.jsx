import "../styles/components/TransactionTable.css";
import { useState } from "react";
import { transactions } from "../data/transactions";

function TransactionTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = transactions.filter(
    (transaction) =>
      transaction.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.fromTo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sorted = filtered.sort((a, b) => {
    const fieldA = sortField === "amount" ? a.amount : a.date;
    const fieldB = sortField === "amount" ? b.amount : b.date;
    if (sortOrder === "asc") {
      return fieldA > fieldB ? 1 : -1;
    } else {
      return fieldA < fieldB ? 1 : -1;
    }
  });

  const totalPages = Math.ceil(sorted.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginated = sorted.slice(startIdx, startIdx + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="table-container">
      <div className="table-controls">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
        />
        <div className="select-controls-transactions">
          <p>Show</p>
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={5}>Last 5 transactions</option>
            <option value={10}>Last 10 transactions</option>
            <option value={15}>Last 15 transactions</option>
          </select>
        </div>
        <div className="sort-controls">
          <p>Sort By</p>
          <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </div>
      </div>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>Type</th>
            <th>From / To</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((transaction, index) => (
            <tr
              key={transaction.id}
              className={index % 2 === 0 ? "even" : "odd"}
            >
              <td>{transaction.date}</td>
              <td>{transaction.type}</td>
              <td>{transaction.fromTo}</td>
              <td>{transaction.description}</td>
              <td style={{ color: transaction.amount > 0 ? "green" : "red" }}>
                {transaction.amount > 0
                  ? `+ ${transaction.amount.toLocaleString()}`
                  : `- ${Math.abs(transaction.amount).toLocaleString()}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => handlePageChange(1)} className="buttonFirst">
          First
        </button>
        {(() => {
          const startPage = Math.max(1, currentPage - 1);
          const endPage = Math.min(totalPages, startPage + 2);

          const pageButtons = [];
          for (let i = startPage; i <= endPage; i++) {
            pageButtons.push(
              <button
                key={i}
                onClick={() => handlePageChange(i)}
                style={{
                  fontWeight: currentPage === i ? "bold" : "normal",
                  backgroundColor: currentPage === i ? "#0061ff" : "white",
                  color: currentPage === i ? "white" : "black",
                }}
              >
                {i}
              </button>
            );
          }

          return pageButtons;
        })()}
        <button
          onClick={() =>
            handlePageChange(() => {
              if (currentPage < totalPages) {
                return currentPage + 1;
              }
              return currentPage;
            })
          }
          className="buttonNext"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default TransactionTable;
