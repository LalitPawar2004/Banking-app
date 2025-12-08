// primary-transactions.js - Primary account transaction data

const primaryTransactions = [
    { amount: 50, type: 'debit', date: '9 December', description: 'Saving'},
    { amount: 18, type: 'debit', date: '7 December', description: 'Loan' },
    { amount: 35, type: 'debit', date: '7 December', description: 'Loan' },
    { amount: 48, type: 'debit', date: '7 December', description: 'Loan' },
    { amount: 200, type: 'credit', date: '6 December', description: 'Fund Transfer' },
    { amount: 50, type: 'debit', date: '25 November', description: 'Saving'},
    { amount: 18, type: 'debit', date: '30 November', description: 'Loan' },
    { amount: 35, type: 'debit', date: '30 November', description: 'Loan' },
    { amount: 48, type: 'debit', date: '30 November', description: 'Loan' },
    { amount: 5, type: 'debit', date: '25 November', description: 'secondary account'},
    { amount: 50, type: 'debit', date: '25 November', description: 'Saving'},
    { amount: 100, type: 'credit', date: '25 November', description: 'Garwa Biryani'},
    { amount: 18, type: 'debit', date: '23 November', description: 'Loan' },
    { amount: 35, type: 'debit', date: '23 November', description: 'Loan' },
    { amount: 48, type: 'debit', date: '23 November', description: 'Loan' },
    { amount: 50, type: 'debit', date: '18 November', description: 'Saving'},
    { amount: 18, type: 'debit', date: '16 November', description: 'Loan' },
    { amount: 35, type: 'debit', date: '16 November', description: 'Loan' },
    { amount: 48, type: 'debit', date: '16 November', description: 'Loan' },
    { amount: 50, type: 'debit', date: '11 November', description: 'Saving' },
    { amount: 11, type: 'credit', date: '9 November', description: '10+1 offer' },
    { amount: 18, type: 'debit', date: '9 November', description: 'Loan' },
    { amount: 35, type: 'debit', date: '9 November', description: 'Loan' },
    { amount: 48, type: 'debit', date: '9 November', description: 'Loan' },
    { amount: 500, type: 'credit', date: '7 November', description: 'Fund Transfer' },
    { amount: 100, type: 'credit', date: '5 November', description: 'Fund Transfer' },
    { amount: 18, type: 'debit', date: '2 November', description: 'Loan' },
    { amount: 35, type: 'debit', date: '2 November', description: 'Loan' },
    { amount: 48, type: 'debit', date: '2 November', description: 'Loan' },
    { amount: 360, type: 'debit', date: '1 November', description: 'Loan' },
    { amount: 450, type: 'credit', date: '31 October', description: 'Fund Transfer' },
    { amount: 18, type: 'debit', date: '26 October', description: 'Loan' },
    { amount: 35, type: 'debit', date: '26 October', description: 'Loan' },
    { amount: 48, type: 'debit', date: '26 October', description: 'Loan' },
    { amount: 100, type: 'credit', date: '23 October', description: 'Fund Transfer' },
    { amount: 18, type: 'debit', date: '19 October', description: 'Loan' },
    { amount: 35, type: 'debit', date: '19 October', description: 'Loan' },
    { amount: 48, type: 'debit', date: '19 October', description: 'Loan' },
    { amount: 340, type: 'debit', date: '18 October', description: 'ATM Withdrawal' },
    { amount: 1100, type: 'debit', date: '18 October', description: 'ATM' },
    { amount: 340, type: 'credit', date: '18 October', description: 'Saving amount' },
    { amount: 1100, type: 'credit', date: '17 October', description: 'Loan amount' },
    { amount: 60, type: 'debit', date: '17 October', description: 'Saving' },
    { amount: 100, type: 'credit', date: '17 October', description: 'Fund Transfer' },
    { amount: 1000, type: 'debit', date: '16 October', description: 'ATM withdrawal' },
    { amount: 1000, type: 'credit', date: '16 October', description: 'Loan' },
    { amount: 100, type: 'credit', date: '21 September', description: 'Fund transfer' },
    { amount: 40, type: 'debit', date: '14 October', description: 'ATM Withdrawal' },
    { amount: 18, type: 'debit', date: '12 October', description: 'Loan' },
    { amount: 35, type: 'debit', date: '12 October', description: 'Loan' },
    { amount: 48, type: 'debit', date: '12 October', description: 'Loan' },
    { amount: 80, type: 'debit', date: '12 October', description: 'Lalit (Biryani)' },
    { amount: 130, type: 'credit', date: '11 October', description: 'Fund Transfer' },
    { amount: 20, type: 'credit', date: '11 October', description: 'Fund Transfer' },
    { amount: 10, type: 'credit', date: '10 October', description: 'Fund Transfer' },
    { amount: 60, type: 'debit', date: '09 October', description: 'Saving' },
    { amount: 18, type: 'debit', date: '5 October', description: 'Loan' },
    { amount: 35, type: 'debit', date: '5 October', description: 'Loan' },
    { amount: 48, type: 'debit', date: '5 October', description: 'Loan' },
    { amount: 1, type: 'debit', date: '3 October', description: 'ATM Withdrawal' },
    { amount: 200, type: 'credit', date: '3 October', description: 'Fund Transfer' },
    { amount: 60, type: 'debit', date: '3 October', description: 'Saving' },
    { amount: 50, type: 'credit', date: '30 September', description: 'Fund Transfer' },
    { amount: 18, type: 'debit', date: '28 September', description: 'Loan' },
    { amount: 35, type: 'debit', date: '28 September', description: 'Loan' },
    { amount: 48, type: 'debit', date: '28 September', description: 'Loan' },
    { amount: 130, type: 'credit', date: '27 September', description: 'Fund Transfer' },
    { amount: 60, type: 'debit', date: '26 September', description: 'Saving' },
    { amount: 570, type: 'debit', date: '25 September', description: 'Loan Withdrawal' },
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

// Make transactions available globally
window.primaryTransactions = primaryTransactions;

// Primary account specific functions
window.PrimaryAccount = {
    getTransactions: () => primaryTransactions,
    
    getBalance: () => {
        return primaryTransactions.reduce((total, txn) => {
            return total + (txn.type === 'credit' ? txn.amount : -txn.amount);
        }, 0);
    },
    
    getRecentTransactions: (count = 5) => {
        return primaryTransactions.slice(0, count);
    },
    
    getTransactionsByType: (type) => {
        return primaryTransactions.filter(txn => txn.type === type);
    },
    
    getTransactionsByDateRange: (startDate, endDate) => {
        // This would need date parsing implementation
        return primaryTransactions; // Placeholder
    }
};