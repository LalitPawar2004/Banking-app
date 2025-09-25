// Sample data
    const transactions = [
        { amount: 60, type: 'debit', date: '26 September', description: 'Saving' },
{ amount: 570, type: 'debit', date: '25 September', description: 'LOAN Withdrawal' },
        { amount: 600, type: 'credit', date: '25 September', description: 'Fund Transfer' },
        { amount: 18, type: 'debit', date: '21 September', description: 'Loan' },
         { amount: 35, type: 'debit', date: '21 September', description: 'Loan' },
         { amount: 48, type: 'debit', date: '21 September', description: 'Loan' },
        { amount: 60, type: 'credit', date: '19 September', description: 'Fund Transfer' },
        { amount: 60, type: 'debit', date: '19 September', description: 'Saving' },
        { amount: 10, type: 'credit', date: '16 September', description: 'Shev Murmura' },
      { amount: 200, type: 'debit', date: '14 September', description: 'ATM Withdrawal' },
      { amount: 1, type: 'credit', date: '14 September', description: 'Kamgar' },
      { amount: 10, type: 'debit', date: '13 September', description: 'ADDA' },
      { amount: 52, type: 'credit', date: '13 September', description: 'Fund Transfer' },
      { amount: 40, type: 'credit', date: '12 September', description: 'Fund Transfer' },
      { amount: 20, type: 'debit', date: '12 September', description: 'ATM Withdrawal' },
      { amount: 60, type: 'debit', date: '12 September', description: 'Saving' },
      { amount: 200, type: 'credit', date: '12 September', description: 'Fund Transfer' },
      { amount: 100, type: 'credit', date: '12 September', description: 'Fund Transfer' },
      { amount: 27, type: 'credit', date: '11 September', description: 'Fund Transfer' }
    ];

    let balance = 0;

    // Calculate balance
    transactions.forEach(txn => {
      if (txn.type === 'credit') {
        balance += txn.amount;
      } else {
        balance -= txn.amount;
      }
    });

    // Display balance
    document.getElementById('balance').textContent = balance.toLocaleString('en-IN');
    document.getElementById('account-balance').textContent = balance.toLocaleString('en-IN');
    
    // Display current date
    const now = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    document.getElementById('current-date').textContent = now.toLocaleDateString('en-IN', options);

    // Display transactions
    const txnContainer = document.getElementById('transactions');

    transactions.forEach(txn => {
      const txnDiv = document.createElement('div');
      txnDiv.className = `transaction ${txn.type}`;
      
      txnDiv.innerHTML = `
        <div class="transaction-icon">
          <i class="fas ${txn.type === 'credit' ? 'fa-arrow-down' : 'fa-arrow-up'}"></i>
        </div>
        <div class="transaction-details">
          <div class="transaction-description">${txn.description}</div>
          <div class="transaction-date">${txn.date}</div>
        </div>
        <div class="transaction-amount">
          ${txn.type === 'credit' ? '+' : '-'}₹${txn.amount.toLocaleString('en-IN')}
        </div>
      `;
      
      txnContainer.appendChild(txnDiv);
    });
