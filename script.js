// script.js - Enhanced with better UX features

// ====== GLOBAL VARIABLES ======
let currentPrimaryBalance = 0;
let currentSecondaryBalance = 0;
let currentActiveTab = 'primary';

// ====== INITIALIZATION ======
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Add loading states
    setLoadingStates(true);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        // Load and calculate balances
        loadBalances();
        
        // Set current date
        setCurrentDate();
        
        // Initialize UI components
        initializeReceiptsSection();
        initializeTransactionTabs();
        initializeSearchFunctionality();
        
        // Render all transactions
        renderAllTransactions();
        
        // Remove loading states
        setLoadingStates(false);
        
        // Add subtle animations
        animateElements();
    }, 800);
}

function setLoadingStates(loading) {
    const elements = document.querySelectorAll('.loading');
    elements.forEach(element => {
        if (loading) {
            element.style.animation = 'pulse 1.5s ease-in-out infinite';
        } else {
            element.style.animation = 'none';
        }
    });
}

// ====== BALANCE MANAGEMENT ======
function loadBalances() {
    calculateBalances();
    displayBalances();
    updateTransactionCounts();
}

function calculateBalances() {
    currentPrimaryBalance = window.primaryTransactions ? 
        calculateBalance(window.primaryTransactions) : 0;
    currentSecondaryBalance = window.secondaryTransactions ? 
        calculateBalance(window.secondaryTransactions) : 0;
}

function calculateBalance(transactions) {
    return transactions.reduce((total, txn) => {
        return total + (txn.type === 'credit' ? txn.amount : -txn.amount);
    }, 0);
}

function displayBalances() {
    const totalBalance = currentPrimaryBalance + currentSecondaryBalance;
    
    // Animate balance updates
    animateBalanceUpdate('primary-balance', currentPrimaryBalance);
    animateBalanceUpdate('secondary-balance', currentSecondaryBalance);
    animateBalanceUpdate('total-balance', totalBalance);
}

function animateBalanceUpdate(elementId, finalValue) {
    const element = document.getElementById(elementId);
    const startValue = parseInt(element.textContent.replace(/,/g, '')) || 0;
    const duration = 1000;
    const startTime = performance.now();
    
    function updateValue(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        const currentValue = startValue + (finalValue - startValue) * easeOut;
        element.textContent = Math.round(currentValue).toLocaleString('en-IN');
        
        if (progress < 1) {
            requestAnimationFrame(updateValue);
        } else {
            element.textContent = finalValue.toLocaleString('en-IN');
        }
    }
    
    requestAnimationFrame(updateValue);
}

// ====== DATE DISPLAY ======
function setCurrentDate() {
    const now = new Date();
    const options = { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric',
        weekday: 'long'
    };
    document.getElementById("current-date").textContent =
        now.toLocaleDateString("en-IN", options);
}

// ====== RECEIPTS SECTION ======
function initializeReceiptsSection() {
    const receiptsContainer = document.getElementById('receipts-container');
    const toggleBtn = document.getElementById('toggle-receipts-btn');
    let isVisible = false;

    const allActions = [
        { title: 'Loan Chart', link: 'LoanChart.html', icon: 'fa-chart-line' },
        { title: 'Saving Chart', link: 'SavingChart.html', icon: 'fa-piggy-bank' },
        { title: 'Loan Receipt 200 Rs', link: 'LoanReceipt1.html', icon: 'fa-receipt' },
        { title: 'Loan Receipt 600 Rs', link: 'LoanReceipt2.html', icon: 'fa-receipt' },
        { title: 'Loan Receipt 1100 Rs', link: 'LoanReceipt3.html', icon: 'fa-receipt' },
        { title: 'Loan Receipt 1000 Rs', link: 'LoanReceipt4.html', icon: 'fa-receipt' },
        { title: 'Saving Receipt 339 Rs', link: 'SavingReceipt.html', icon: 'fa-piggy-bank' },
        { title: 'Saving Receipt 388 Rs', link: 'SavingReceipt1.html', icon: 'fa-piggy-bank' },
        { title: 'Loan Receipt 3999 Rs', link: 'LoanReceipt5.html', icon: 'fa-receipt' },
        { title: 'Saving Receipt 422 Rs', link: 'SavingReceipt2.html', icon: 'fa-piggy-bank' },
        { title: 'Your Application', link: 'Application.html', icon: 'fa-file-signature' }
    ];

    toggleBtn.addEventListener('click', () => {
        if (!isVisible) {
            showAllActions(receiptsContainer, allActions);
            toggleBtn.innerHTML = '<i class="fas fa-eye-slash me-2"></i>Hide All Actions';
            isVisible = true;
        } else {
            hideAllActions(receiptsContainer);
            toggleBtn.innerHTML = '<i class="fas fa-receipt me-2"></i>View All Receipts / Applications';
            isVisible = false;
        }
        
        // Add button feedback
        toggleBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            toggleBtn.style.transform = 'scale(1)';
        }, 150);
    });
}

function showAllActions(container, actions) {
    container.innerHTML = '';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(150px, 1fr))';
    container.style.gap = '15px';
    container.style.marginTop = '20px';
    
    actions.forEach((item, index) => {
        setTimeout(() => {
            const actionElement = createActionElement(item);
            actionElement.style.opacity = '0';
            actionElement.style.transform = 'translateY(20px)';
            container.appendChild(actionElement);
            
            // Animate in
            setTimeout(() => {
                actionElement.style.opacity = '1';
                actionElement.style.transform = 'translateY(0)';
                actionElement.style.transition = 'all 0.3s ease';
            }, 50);
        }, index * 100);
    });
}

function createActionElement(action) {
    const a = document.createElement('a');
    a.href = action.link;
    a.className = 'btn-action';
    a.innerHTML = `<i class="fas ${action.icon}"></i><span>${action.title}</span>`;
    
    // Add click animation
    a.addEventListener('click', (e) => {
        e.preventDefault();
        a.style.transform = 'scale(0.95)';
        setTimeout(() => {
            window.location.href = action.link;
        }, 150);
    });
    
    return a;
}

function hideAllActions(container) {
    container.style.opacity = '0';
    container.style.transform = 'translateY(-10px)';
    container.style.transition = 'all 0.3s ease';
    
    setTimeout(() => {
        container.style.display = 'none';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 300);
}

// ====== TRANSACTION MANAGEMENT ======
function renderAllTransactions() {
    renderTransactions(window.primaryTransactions, "primary-transactions");
    renderTransactions(window.secondaryTransactions, "secondary-transactions");
    updateTransactionCounts();
}

function renderTransactions(transactions, elementId) {
    const container = document.getElementById(elementId);
    
    if (!transactions || transactions.length === 0) {
        container.innerHTML = createNoTransactionsMessage();
        return;
    }
    
    container.innerHTML = '';
    
    transactions.forEach((txn, index) => {
        setTimeout(() => {
            const transactionElement = createTransactionElement(txn);
            transactionElement.style.opacity = '0';
            transactionElement.style.transform = 'translateX(-20px)';
            container.appendChild(transactionElement);
            
            // Staggered animation
            setTimeout(() => {
                transactionElement.style.opacity = '1';
                transactionElement.style.transform = 'translateX(0)';
                transactionElement.style.transition = 'all 0.4s ease';
            }, 50);
        }, index * 50);
    });
}

function createNoTransactionsMessage() {
    return `
        <div class="no-transactions">
            <i class="fas fa-receipt"></i>
            <h5>No transactions yet</h5>
            <p class="text-muted">Transactions will appear here once you start using your account.</p>
        </div>
    `;
}

function createTransactionElement(transaction) {
    const div = document.createElement("div");
    div.className = `transaction ${transaction.type} fade-in`;
    div.innerHTML = `
        <div class="transaction-icon">
            <i class="fas ${transaction.type === 'credit' ? 'fa-arrow-down' : 'fa-arrow-up'}"></i>
        </div>
        <div class="transaction-details">
            <div class="transaction-description">${transaction.description}</div>
            <div class="transaction-date">${transaction.date}</div>
        </div>
        <div class="transaction-amount">
            ${transaction.type === 'credit' ? '+' : '-'}₹${transaction.amount.toLocaleString('en-IN')}
        </div>
    `;
    
    // Add click effect
    div.addEventListener('click', function() {
        this.style.backgroundColor = '#f1f5f9';
        setTimeout(() => {
            this.style.backgroundColor = '';
        }, 200);
    });
    
    return div;
}

function updateTransactionCounts() {
    const primaryCount = window.primaryTransactions ? window.primaryTransactions.length : 0;
    const secondaryCount = window.secondaryTransactions ? window.secondaryTransactions.length : 0;
    const totalCount = currentActiveTab === 'primary' ? primaryCount : secondaryCount;
    
    document.getElementById('transaction-count').textContent = 
        `${totalCount} transaction${totalCount !== 1 ? 's' : ''}`;
}

// ====== TAB MANAGEMENT ======
function initializeTransactionTabs() {
    const tabPrimary = document.getElementById("tab-primary");
    const tabSecondary = document.getElementById("tab-secondary");
    const primarySection = document.getElementById("primary-section");
    const secondarySection = document.getElementById("secondary-section");

    tabPrimary.addEventListener("click", () => {
        switchToTab('primary', tabPrimary, tabSecondary, primarySection, secondarySection);
    });

    tabSecondary.addEventListener("click", () => {
        switchToTab('secondary', tabSecondary, tabPrimary, secondarySection, primarySection);
    });
}

function switchToTab(activeTab, activeTabElement, inactiveTabElement, activeSection, inactiveSection) {
    // Update active tab
    activeTabElement.classList.add("active");
    inactiveTabElement.classList.remove("active");
    
    // Add tab switch animation
    activeSection.style.opacity = '0';
    activeSection.style.display = "block";
    
    inactiveSection.style.opacity = '0';
    inactiveSection.style.display = "none";
    
    setTimeout(() => {
        activeSection.style.opacity = '1';
        activeSection.style.transition = 'opacity 0.3s ease';
    }, 50);
    
    // Update current active tab
    currentActiveTab = activeTab;
    updateTransactionCounts();
    
    // Update search for current tab
    updateSearchForCurrentTab(activeTab);
}

// ====== SEARCH FUNCTIONALITY ======
function initializeSearchFunctionality() {
    const searchInput = document.getElementById('txn-search');
    if (searchInput) {
        let searchTimeout;
        
        searchInput.addEventListener('input', (event) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                handleTransactionSearch(event);
            }, 300);
        });
        
        // Clear search on escape
        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                searchInput.value = '';
                handleTransactionSearch(event);
                searchInput.blur();
            }
        });
    }
}

function handleTransactionSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    const transactions = currentActiveTab === 'primary' ? 
        window.primaryTransactions : window.secondaryTransactions;
    const containerId = currentActiveTab === 'primary' ? 
        'primary-transactions' : 'secondary-transactions';
    
    if (searchTerm === '') {
        renderTransactions(transactions, containerId);
    } else {
        const filteredTransactions = transactions.filter(txn => 
            txn.description.toLowerCase().includes(searchTerm) ||
            txn.amount.toString().includes(searchTerm) ||
            txn.date.toLowerCase().includes(searchTerm) ||
            txn.type.toLowerCase().includes(searchTerm)
        );
        renderTransactions(filteredTransactions, containerId);
        
        // Show search results count
        const countElement = document.getElementById('transaction-count');
        const originalText = countElement.textContent;
        countElement.textContent = `${filteredTransactions.length} of ${transactions.length} transactions`;
        
        // Restore original text after 3 seconds if search is cleared
        setTimeout(() => {
            if (event.target.value === '') {
                updateTransactionCounts();
            }
        }, 3000);
    }
}

function updateSearchForCurrentTab(activeTab) {
    const searchInput = document.getElementById('txn-search');
    if (searchInput.value.trim() !== '') {
        searchInput.dispatchEvent(new Event('input'));
    }
}

// ====== ANIMATIONS ======
function animateElements() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
}

// ====== UTILITY FUNCTIONS ======
function formatCurrency(amount) {
    return '₹' + amount.toLocaleString('en-IN');
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} position-fixed`;
    notification.style.cssText = `
        top: 70px;
        right: 20px;
        z-index: 1060;
        min-width: 300px;
        box-shadow: var(--shadow-medium);
        border-radius: 12px;
        opacity: 0;
        transform: translateX(100px);
        transition: all 0.3s ease;
    `;
    notification.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-${getNotificationIcon(type)} me-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

function getNotificationIcon(type) {
    const icons = {
        info: 'info-circle',
        success: 'check-circle',
        warning: 'exclamation-triangle',
        danger: 'exclamation-circle'
    };
    return icons[type] || 'info-circle';
}

// Export functions for use in other modules
window.BankApp = {
    calculateBalance,
    formatCurrency,
    showNotification,
    refreshData: function() {
        loadBalances();
        renderAllTransactions();
        showNotification('Data refreshed successfully', 'success');
    }
};

// Add keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Refresh data with F5
    if (event.key === 'F5') {
        event.preventDefault();
        window.BankApp.refreshData();
    }
    
    // Search focus with Ctrl+K or Cmd+K
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        const searchInput = document.getElementById('txn-search');
        if (searchInput) {
            searchInput.focus();
        }
    }
});

// Add online/offline detection
window.addEventListener('online', function() {
    showNotification('Connection restored', 'success');
});

window.addEventListener('offline', function() {
    showNotification('You are currently offline', 'warning');
});
