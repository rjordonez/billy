import React, { useState } from 'react';
import './Transactions.css';

function Transactions() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const transactions = [
    {
      merchant: 'Juice Press',
      category: 'Restaurants',
      date: 'Oct 28, 2025',
      type: 'Card',
      cardLast4: '3485',
      logo: '🥤'
    },
    {
      merchant: 'Lyft',
      category: 'Rideshare & taxi',
      date: 'Oct 28, 2025',
      type: 'Card',
      cardLast4: '3485',
      logo: '🚗'
    },
    {
      merchant: 'CAVA',
      category: 'Restaurants',
      date: 'Oct 27, 2025',
      type: 'Card',
      cardLast4: '3485',
      logo: '🥗'
    },
    {
      merchant: 'Uber',
      category: 'Rideshare & taxi',
      date: 'Oct 27, 2025',
      type: 'Card',
      cardLast4: '3485',
      logo: '🚕'
    },
    {
      merchant: 'Chick-fil-A',
      category: 'Restaurants',
      date: 'Oct 26, 2025',
      type: 'Card',
      cardLast4: '3485',
      logo: '🍗'
    },
    {
      merchant: 'Sidecar Doughnuts',
      category: 'Restaurants',
      date: 'Oct 26, 2025',
      type: 'Card',
      cardLast4: '3485',
      logo: '🍩'
    },
    {
      merchant: 'San Jose Mineta Airport',
      category: 'Airline expenses',
      date: 'Oct 25, 2025',
      type: 'Reimbursement',
      cardLast4: '3485',
      logo: '✈️'
    },
    {
      merchant: 'Southwest Airlines',
      category: 'Airline expenses',
      date: 'Oct 25, 2025',
      type: 'Card',
      cardLast4: '3485',
      logo: '🛫'
    },
    {
      merchant: 'UPS Store',
      category: 'Shipping',
      date: 'Oct 24, 2025',
      type: 'Card',
      cardLast4: '3485',
      logo: '📦'
    }
  ];

  return (
    <div className={`transactions-page ${isLightMode ? 'light-mode' : ''}`}>
      <button
        className="theme-toggle"
        onClick={() => setIsLightMode(!isLightMode)}
        aria-label="Toggle theme"
      >
        {isLightMode ? '🌙' : '☀️'}
      </button>

      <button
        className="upload-trigger"
        onClick={() => setShowUploadModal(true)}
      >
        Upload Receipt
      </button>

      {showUploadModal && (
        <div className="modal-overlay" onClick={() => setShowUploadModal(false)}>
          <div className="upload-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setShowUploadModal(false)}>×</button>

            <div className="modal-tabs">
              <button className="tab-button">Request spend</button>
              <button className="tab-button active">Upload card receipts</button>
              <button className="tab-button partial">Out</button>
            </div>

            <div className="upload-zone">
              <div className="upload-zone-content">
                <div className="upload-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="upload-primary">Drag or select receipts for expenses</p>
                <p className="upload-secondary">PDF, JPG, PNG</p>
                <button className="select-files-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Select files
                </button>
              </div>
            </div>

            <div className="other-ways">
              <h3>Other ways to add receipts</h3>
              <div className="ways-list">
                <div className="way-item">
                  <svg className="way-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <a href="#" className="way-link">Email forwarding</a>
                </div>
                <div className="way-item">
                  <svg className="way-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <a href="#" className="way-link">SMS, WhatsApp, or Slack</a>
                </div>
                <div className="way-item">
                  <svg className="way-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <a href="#" className="way-link">Mobile app</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="main-layout">
        {/* Right Side - Transactions */}
        <div className="transactions-container">
        <div className="filter-bar">
          <div className="filter-dropdown">
            <span>All</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="search-input">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input type="text" placeholder="Search or filter" />
          </div>

          <button className="add-filter-btn">
            <span>+</span> Add filter
          </button>
        </div>

        <div className="transactions-table">
          <div className="table-header">
            <div className="header-cell">Merchant</div>
            <div className="header-cell">Transaction date</div>
            <div className="header-cell">Transaction type</div>
          </div>

          <div className="table-body">
            {transactions.map((transaction, index) => (
              <div key={index} className="table-row">
                <div className="merchant-cell">
                  <div className="merchant-logo">
                    {transaction.logo}
                  </div>
                  <div className="merchant-info">
                    <div className="merchant-name">{transaction.merchant}</div>
                    <div className="merchant-category">{transaction.category}</div>
                  </div>
                </div>

                <div className="date-cell">
                  {transaction.date}
                </div>

                <div className="type-cell">
                  <div className="transaction-type">{transaction.type}</div>
                  <div className="card-number">•••• {transaction.cardLast4}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* Budget Tracker */}
        <div className="budget-tracker">
          <div className="budget-header">
            <div>
              <h2 className="budget-title">January 2026 Budget</h2>
              <p className="budget-subtitle">15 days remaining</p>
            </div>
            <a href="#" className="view-details-link">View details</a>
          </div>

          <div className="budget-content">
            {/* Ring Chart */}
            <div className="budget-ring-section">
              <svg className="donut-chart" viewBox="0 0 160 160">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="#333"
                  strokeWidth="12"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="12"
                  strokeDasharray="439.82"
                  strokeDashoffset="219.91"
                  strokeLinecap="round"
                  transform="rotate(-90 80 80)"
                />
              </svg>
              <div className="ring-center">
                <div className="ring-amount">$12,450</div>
                <div className="ring-total">of $25,000</div>
              </div>
            </div>

            {/* Category List */}
            <div className="budget-categories">
              <div className="category-row">
                <div className="category-top">
                  <span className="category-name">Cost of Goods</span>
                  <span className="category-amounts">$8,200 / $10,000</span>
                </div>
                <div className="category-bar">
                  <div className="bar-fill green" style={{width: '82%'}}></div>
                </div>
              </div>

              <div className="category-row">
                <div className="category-top">
                  <span className="category-name">Rent</span>
                  <span className="category-amounts">$2,500 / $3,000</span>
                </div>
                <div className="category-bar">
                  <div className="bar-fill green" style={{width: '83%'}}></div>
                </div>
              </div>

              <div className="category-row">
                <div className="category-top">
                  <span className="category-name">Meals & Entertainment</span>
                  <div className="category-right">
                    <span className="category-amounts">$1,850 / $1,500</span>
                    <span className="over-label">Over</span>
                  </div>
                </div>
                <div className="category-bar">
                  <div className="bar-fill red" style={{width: '100%'}}></div>
                </div>
              </div>

              <div className="category-row">
                <div className="category-top">
                  <span className="category-name">Travel</span>
                  <span className="category-amounts">$900 / $2,000</span>
                </div>
                <div className="category-bar">
                  <div className="bar-fill green" style={{width: '45%'}}></div>
                </div>
              </div>

              <div className="category-row">
                <div className="category-top">
                  <span className="category-name">Other</span>
                  <span className="category-amounts">$1,400 / $1,500</span>
                </div>
                <div className="category-bar">
                  <div className="bar-fill amber" style={{width: '93%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
          <div className="filter-dropdown">
            <span>All</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="search-input">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input type="text" placeholder="Search or filter" />
          </div>

          <button className="add-filter-btn">
            <span>+</span> Add filter
          </button>
        </div>

        <div className="transactions-table">
          <div className="table-header">
            <div className="header-cell">Merchant</div>
            <div className="header-cell">Transaction date</div>
            <div className="header-cell">Transaction type</div>
          </div>

          <div className="table-body">
            {transactions.map((transaction, index) => (
              <div key={index} className="table-row">
                <div className="merchant-cell">
                  <div className="merchant-logo">
                    {transaction.logo}
                  </div>
                  <div className="merchant-info">
                    <div className="merchant-name">{transaction.merchant}</div>
                    <div className="merchant-category">{transaction.category}</div>
                  </div>
                </div>

                <div className="date-cell">
                  {transaction.date}
                </div>

                <div className="type-cell">
                  <div className="transaction-type">{transaction.type}</div>
                  <div className="card-number">•••• {transaction.cardLast4}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
