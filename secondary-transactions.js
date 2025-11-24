// secondary-transactions.js - Secondary account transaction data

const secondaryTransactions = [
    // Currently no transactions for secondary account
    // Add transactions here when they become available
    // Example format:
    { amount: 100, type: 'credit', date: '25 November', description: 'FD' }
];

// Make transactions available globally
window.secondaryTransactions = secondaryTransactions;

// Secondary account specific functions
window.SecondaryAccount = {
    getTransactions: () => secondaryTransactions,
    
    getBalance: () => {
        return secondaryTransactions.reduce((total, txn) => {
            return total + (txn.type === 'credit' ? txn.amount : -txn.amount);
        }, 0);
    },
    
    getRecentTransactions: (count = 5) => {
        return secondaryTransactions.slice(0, count);
    },
    
    getTransactionsByType: (type) => {
        return secondaryTransactions.filter(txn => txn.type === type);
    },
    
    addTransaction: (amount, type, date, description) => {
        const newTransaction = {
            amount: amount,
            type: type,
            date: date,
            description: description
        };
        secondaryTransactions.unshift(newTransaction); // Add to beginning
        return newTransaction;
    },
    
    // Utility function to check if account is active
    isAccountActive: () => {
        return secondaryTransactions.length > 0;
    },
    
    // Get account summary
    getAccountSummary: () => {
        const balance = window.SecondaryAccount.getBalance();
        const totalCredits = secondaryTransactions
            .filter(txn => txn.type === 'credit')
            .reduce((sum, txn) => sum + txn.amount, 0);
        const totalDebits = secondaryTransactions
            .filter(txn => txn.type === 'debit')
            .reduce((sum, txn) => sum + txn.amount, 0);
            
        return {
            balance: balance,
            totalTransactions: secondaryTransactions.length,
            totalCredits: totalCredits,
            totalDebits: totalDebits,
            lastTransaction: secondaryTransactions[0] || null
        };
    }
};