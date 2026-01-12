import React from 'react';
import './FinancialDashboard.css';

const FinancialDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-grid">
        {/* Top Row - 4 Cards */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Total Cash</h3>
            <span className="date-label">April 2025</span>
          </div>
          <div className="card-amount">$106,000</div>
          <span className="badge badge-teal">↓ 11% MoM</span>
          <div className="mini-chart">
            <svg viewBox="0 0 100 30" className="area-chart" preserveAspectRatio="none">
              <defs>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.05"/>
                </linearGradient>
              </defs>
              <path d="M0,20 Q10,18 20,18 T40,22 Q50,16 60,15 T80,19 Q90,14 100,12 L100,30 L0,30 Z"
                    fill="url(#areaGradient)" stroke="#14B8A6" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
            </svg>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h3>Gross Income</h3>
            <span className="tag-badge tag-orange">CASH</span>
          </div>
          <div className="card-amount">$84,250</div>
          <span className="badge badge-teal">↓ 24% MoM</span>
          <div className="mini-chart">
            <svg viewBox="0 0 100 30" className="area-chart" preserveAspectRatio="none">
              <defs>
                <linearGradient id="incomeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.05"/>
                </linearGradient>
              </defs>
              <path d="M0,15 Q20,12 40,18 T80,14 Q90,16 100,13 L100,30 L0,30 Z"
                    fill="url(#incomeGradient)" stroke="#14B8A6" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
            </svg>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h3>Net Burn</h3>
            <span className="tag-badge tag-orange">CASH</span>
          </div>
          <div className="card-amount negative">-$12,400</div>
          <span className="badge badge-orange">Over 1000% MoM</span>
          <div className="mini-chart">
            <svg viewBox="0 0 100 30" className="area-chart" preserveAspectRatio="none">
              <defs>
                <linearGradient id="burnGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F97316" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#F97316" stopOpacity="0.05"/>
                </linearGradient>
              </defs>
              <path d="M0,18 Q20,16 40,20 T80,10 Q90,12 100,15 L100,30 L0,30 Z"
                    fill="url(#burnGradient)" stroke="#F97316" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
            </svg>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h3>Top Expenses</h3>
          </div>
          <div className="expense-list">
            <div className="expense-item">
              <span className="expense-name">Payroll</span>
              <div className="expense-right">
                <span className="expense-amount">$45,200</span>
                <span className="expense-change positive">+2.1%</span>
              </div>
            </div>
            <div className="expense-item">
              <span className="expense-name">Advertising</span>
              <div className="expense-right">
                <span className="expense-amount">$18,600</span>
                <span className="expense-change negative">-12.4%</span>
              </div>
            </div>
            <div className="expense-item">
              <span className="expense-name">Software</span>
              <div className="expense-right">
                <span className="expense-amount">$8,900</span>
                <span className="expense-change positive">+5.7%</span>
              </div>
            </div>
            <div className="expense-item">
              <span className="expense-name">Office</span>
              <div className="expense-right">
                <span className="expense-amount">$4,200</span>
                <span className="expense-change negative">-3.2%</span>
              </div>
            </div>
            <div className="expense-item">
              <span className="expense-name">Travel</span>
              <div className="expense-right">
                <span className="expense-amount">$2,800</span>
                <span className="expense-change positive">+8.9%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - 2 Wide Cards */}
        <div className="dashboard-card wide-card">
          <div className="card-header">
            <h3>Cash Flow</h3>
          </div>
          <div className="cash-flow-chart">
            <svg viewBox="0 0 300 120" className="flow-chart-svg">
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.05"/>
                </linearGradient>
              </defs>
              <path d="M0,50 Q25,45 50,40 T100,45 Q125,42 150,35 T200,40 Q225,38 250,30 T300,25 L300,100 L0,100 Z"
                    fill="url(#flowGradient)" stroke="#14B8A6" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
              {/* Month labels */}
              <text x="0" y="115" fontSize="8" fill="#94a3b8" textAnchor="start">Jan</text>
              <text x="50" y="115" fontSize="8" fill="#94a3b8" textAnchor="middle">Mar</text>
              <text x="100" y="115" fontSize="8" fill="#94a3b8" textAnchor="middle">May</text>
              <text x="150" y="115" fontSize="8" fill="#94a3b8" textAnchor="middle">Jul</text>
              <text x="200" y="115" fontSize="8" fill="#94a3b8" textAnchor="middle">Sep</text>
              <text x="250" y="115" fontSize="8" fill="#94a3b8" textAnchor="middle">Nov</text>
              <text x="300" y="115" fontSize="8" fill="#94a3b8" textAnchor="end">Dec</text>
            </svg>
          </div>
        </div>

        <div className="dashboard-card wide-card">
          <div className="card-header">
            <h3>Runway</h3>
          </div>
          <div className="runway-amount">
            <div className="runway-number">23 Months</div>
            <div className="runway-subtitle">~1.5 Years</div>
          </div>
          <div className="runway-chart">
            <svg viewBox="0 0 300 80" preserveAspectRatio="none">
              <defs>
                <linearGradient id="runwayGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.05"/>
                </linearGradient>
              </defs>
              <path d="M0,10 Q30,11 60,15 T120,28 Q150,34 180,50 T240,72 Q270,76 300,80 L300,80 L0,80 Z"
                    fill="url(#runwayGradient)" stroke="#14B8A6" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;
