# AI & Algorithmic Trading: Research Synthesis for Building a Robust AI Trading Platform

> **Compiled from 14 leading papers (2024-2026) on AI-driven financial markets**
> **Purpose: Actionable technical guidance for architecting and deploying an AI trading platform**

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Platform Architecture Overview](#platform-architecture-overview)
3. [Core Agent Design Patterns](#core-agent-design-patterns)
4. [Multi-Agent Orchestration](#multi-agent-orchestration)
5. [LLM-Driven Signal Generation](#llm-driven-signal-generation)
6. [Reinforcement Learning for Trading](#reinforcement-learning-for-trading)
7. [Market Regime Detection & Adaptation](#market-regime-detection--adaptation)
8. [Portfolio Optimization](#portfolio-optimization)
9. [Sentiment Analysis & NLP](#sentiment-analysis--nlp)
10. [Risk Management & Safety](#risk-management--safety)
11. [Lead-Lag & Cross-Asset Signals](#lead-lag--cross-asset-signals)
12. [Memory, Explainability & Audit](#memory-explainability--audit)
13. [Implementation Roadmap](#implementation-roadmap)
14. [Key Metrics & Benchmarks](#key-metrics--benchmarks)
15. [Paper References](#paper-references)

---

## 1. Executive Summary

The state of the art in AI trading has evolved from static rule-based systems to **agentic, multi-agent architectures** that combine:

- **LLM-based reasoning** for qualitative analysis, sentiment interpretation, and strategy generation
- **Deep reinforcement learning** for dynamic portfolio allocation and execution
- **Multi-agent coordination** where specialized agents (analyst, risk manager, executor) collaborate through structured deliberation
- **Regime-aware adaptation** using Bayesian models and volatility-filtered environments
- **Memory systems** with layered short-term/long-term knowledge for interpretable decision-making

The most effective modern system is **not a single model** but an **orchestration of specialized agents**, each handling a specific function, communicating through typed contracts, governed by safety layers.

**Key result from literature:**
- Hybrid AI trading systems achieved **135.49% return over 24 months** (vs. ~80% for S&P 500) using EMA+MACD+RSI+FinBERT+XGBoost with regime filtering (Pillai et al., 2026)
- Multi-agent orchestration achieved **20.42% return with Sharpe ratio 2.63** on stock trading and **8.39% on BTC** with minimal drawdown (Li et al., Columbia)
- LLM-driven sentiment trading (OPT model) achieved **Sharpe 3.05, 355% gain** over 2 years on US financial news (Kirtac & Germano, UCL/LSE)
- DRL portfolio optimization (BAVAR-BLED/TD3) achieved **Sharpe 1.72, Sortino 2.70** on Dow Jones constituents (Mikriukov et al.)

---

## 2. Platform Architecture Overview

### Recommended Architecture: `AgenticOrchestrator`

```
┌─────────────────────────────────────────────────────────┐
│                    HUMAN OVERSIGHT LAYER                  │
│         (Strategy Parameters, Risk Limits, Goals)        │
└──────────────────────┬──────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────┐
│                   ORCHESTRATOR AGENT                      │
│    (Task Allocation, Conflict Resolution, Audit Trail)   │
└────┬──────────┬──────────┬──────────┬──────────┬────────┘
     │          │          │          │          │
┌────▼───┐ ┌────▼───┐ ┌────▼───┐ ┌────▼───┐ ┌────▼───┐
│ Alpha  │ │ Sent.  │ │ Tech.  │ │ Risk   │ │ Port.  │
│ Agent  │ │ Agent  │ │ Agent  │ │ Agent  │ │ Agent  │
└───┬────┘ └───┬────┘ └───┬────┘ └───┬────┘ └───┬────┘
    │          │          │          │          │
┌───▼──────────▼──────────▼──────────▼──────────▼───┐
│              SHARED MEMORY & STATE                   │
│   (Market Data, Positions, Signals, Audit Logs)     │
└─────────────────────┬──────────────────────────────┘
                      │
┌─────────────────────▼──────────────────────────────┐
│               EXECUTION ENGINE                        │
│    (Order Management, Broker Interface,Latency)      │
└─────────────────────────────────────────────────────┘
```

### Key Architectural Principles (from Li et al., "Financial Agents Orchestration")

1. **Planner Agent**: Decomposes high-level goals into tasks (e.g., "generate alpha for tech stocks today")
2. **Alpha Agents**: Generate trading signals using different methodologies (sentiment, technical, fundamental)
3. **Risk Agent**: Validates signals against risk constraints before execution
4. **Portfolio Agent**: Combines validated signals into optimal position allocations
5. **Backtest Agent**: Continuously validates strategies against historical data
6. **Execution Agent**: Handles order routing and latency optimization
7. **Audit Agent**: Maintains compliance and decision traceability
8. **Memory Agent**: Stores market events, decisions, and outcomes for retrieval

---

## 3. Core Agent Design Patterns

### 3.1 ReAct (Reason + Act) Pattern

The most widely adopted pattern. The agent alternates between:
- **Reasoning**: "Given what I know, what should I do next?"
- **Action**: Execute the next step (API call, trade, analysis)
- **Observation**: Capture the result
- **Reflection**: Update understanding and decide next action

```
Thought → Action → Observation → Thought → Action → ...
```

### 3.2 Self-Reflection Pattern (SEP Framework)

From Koa et al. (NUS, "Self-Reflective LLMs for Stock Prediction"):
1. **Summarize**: Extract key information from input (news, social media)
2. **Explain**: Generate reasoning for why a signal matters
3. **Predict**: Output the prediction with the explanation as training signal

This creates a **self-improving loop** where the model trains on its own reflective outputs, eliminating need for human annotators.

### 3.3 Z-Score Trigger Engine (AgenticAITA)

From Letteri (University of L'Aquila):
- Monitor market statistics continuously
- Only activate LLM inference when |z-score| > threshold (e.g., 1.5σ or 2.0σ)
- This creates **cognitive resource efficiency**: the LLM only "thinks" during anomalous conditions
- Reduces API costs by ~80% while maintaining responsiveness to regime shifts

### 3.4 Typed JSON Contracts Between Agents

All inter-agent communication uses structured JSON:
```json
{
  "agent_id": "alpha_sentiment",
  "signal": "BUY",
  "ticker": "AAPL",
  "confidence": 0.87,
  "reasoning": "Positive earnings surprise, strong social sentiment",
  "timestamp": "2026-06-29T10:30:00Z",
  "source": "FinBERT+NewsAPI",
  "risk_impact": {"var_delta": -0.02, "exposure": 0.05}
}
```

---

## 4. Multi-Agent Orchestration

### 4.1 Sequential Deliberative Pipeline

The core agentic loop (AgenticAITA framework):

```
Analyst Agent → Risk Manager → Executor Agent
     ↓              ↓              ↓
  "Buy AAPL"    "Approved"    "Execute 100 shares"
                   or
               "Rejected: exposure limit hit"
```

Each agent has:
- **Typed input/output contracts** (JSON schemas)
- **Hard-gate safety layers** (deterministic checks that cannot be overridden)
- **Audit trail** (every decision is serialized and logged)

### 4.2 Agentic Friction Rate (AFR)

A key metric from AgenticAITA: **11.5% agentic friction rate** across 76 assets over 5 days.
- AFR = percentage of decisions where agents disagree and require additional negotiation
- Non-trivial AFR confirms genuine multi-agent reasoning (not rubber-stamping)
- Target: 8-15% AFR is healthy (too low = agents are redundant, too high = system is inefficient)

### 4.3 Inference Gating Protocol

Mutex-based cognitive resource scheduler:
- Only one agent can activate LLM inference per asset at a time
- Prevents concurrent contradictory LLM calls
- Ensures reproducible audit trails
- Serializes agent activations to avoid race conditions

### 4.4 Correlation-Break Diversification Score

Operationalizes portfolio-level thinking within individual agent reasoning:
- Each alpha agent is aware of existing portfolio holdings
- Signals that correlate with existing positions are penalized
- Diversification emerges from agent-level signal filtering

---

## 5. LLM-Driven Signal Generation

### 5.1 From Static Code Evolution (AlgoEvolve, Sharma & Shroff, IIIT Delhi)

**Algorithm**: LLM-driven meta-evolution of trading programs
- LLM generates Python trading strategy code
- Code is executed and evaluated on historical data
- Results feed back to LLM for strategy improvement
- **Meta-evolutionary outer loop**: evolves the PROMPTS guiding inner loop strategy synthesis

**Key Findings:**
- Emergent regime-adaptive strategy logic appears autonomously
- System discovers shifts in trading rules without human prompting
- Prompt evolution balances exploration vs. exploration
- Consistently reduces zero-trade failures over generations
- Best strategies employ **dynamic position sizing** based on recent volatility

### 5.2 LLM Trading Agents (MadEvolve, Kvasiuk et al., UW-Madison)

**Framework**: Adapted from DeepMind's AlphaEvolve (originally for cosmology)
- LLM ensemble evaluates and mutates trading strategies
- Population management: elite strategies are preserved, weak ones mutated
- Applied to Bitcoin trading with separate evolution of:
  - Feature sets for signal generation
  - Execution strategy parameters
  - Joint feature + execution pipeline

**Key Results:**
- Significant improvement over baseline on all metrics
- Feature evolution discovers non-obvious indicators
- Joint evolution outperforms separate optimization
- P-hacking probability carefully controlled (< 0.01)

### 5.3 AlgoEvolve Prompt Architecture

```
Meta-Prompt (evolves over generations):
  "Generate a trading strategy that adapts between 
   trend-following and mean-reversion based on 
   detected market volatility regime"

Inner Prompt (specific to current generation):
  "Write a Python function that takes OHLCV data and 
   returns BUY/SELL/HOLD signals using a dual-threshold 
   approach where thresholds adjust based on 20-day 
   realized volatility"

Output: Executable Python code → backtest → score → evolve
```

---

## 6. Reinforcement Learning for Trading

### 6.1 Core RL Formulation

Standard formulation used across papers:

```
Objective: max_π E[Σ γ^t R_t]

Where:
  R_t = r_t / σ_t  (volatility-scaled return)
  γ = discount factor
  π = policy mapping states → actions
  
State:  [price features, volume, technical indicators, 
         portfolio positions, market regime ID]
Action: [position weights, order types, sizing]
Reward: risk-adjusted return (Sharpe-like)
```

### 6.2 Deep RL Portfolio Optimization (BAVAR-BLED Framework)

From Mikriukov et al. (U of Liverpool / Xi'an Jiaotong-Liverpool):

**Architecture:**
```
BAVAR (Bayesian-Averaging Vector Autoregressive)
    ↓ (regime-aware return estimates + covariance)
BLED (Black-Litterman with Elliptical Distributions)
    ↓ (Student's t-distribution for fat tails)
TD3 (Twin Delayed DDPG) executes allocation
    ↓
Transformer Networks → view construction
CNNs → dynamic risk-aversion estimates
```

**Innovation over standard Markowitz/Black-Litterman:**
- Multi-scale temporal features (BAVAR captures regime changes)
- Student's t-distributions model fat tails (realistic extreme events)
- Risk-aversion is dynamically learned, not fixed
- Applied to 29 Dow Jones stocks, 10-year backtest

**Results:** Sharpe 1.72, Sortino 2.70 (significantly outperforms equal-weight, HRP, NCO baselines)

### 6.3 Multi-Agent RL for Market Making (Wang et al., King's College London)

**Framework:** Hierarchical MARL with adversarial training
- **Top-level**: Self-interested market maker (Agent A)
- **Bottom layer**: Three competitor types:
  - B1: Self-interested (max own PnL)
  - B2: Competitive (min opponent's PnL)  
  - B*: Hybrid (modulates between B1 and B2 behavior)

**Key Findings:**
- B2 captures dominant market share but tightens spreads (good for efficiency)
- B* adapts self-interestedly, secures market share with milder adverse impact
- **Interaction-level metrics** quantify behavioral asymmetry
- Implication for platform design: monitor for emergent collusion patterns

### 6.4 Financially Guided Deep Portfolio (Fernandes & Desell)

**Framework:** Direct optimization of financial metrics as differentiable loss

```python
# Instead of: predict returns → then optimize weights
# Do: model(weights) → Sharpe/Omega/CVaR → backpropagate

loss = - Sharpe_ratio(portfolio_returns) 
      + λ * CVaR_penalty
      + μ * Risk_parity_deviation

# AttentionLSTM learns: weights = f(market_features, historical_regimes)
# Walk-forward: expand window quarterly, rebalance quarterly
```

**Results on 50 S&P 500 stocks (2007-2023):**
- AttentionLSTM + Omega-CVaR-RiskParity loss
- 2022-2023: Sharpe 0.29, return +7.86% vs S&P 500: -4.52%, Sharpe -0.02
- **Outperformed by 12.38 percentage points (270% relative improvement)**

---

## 7. Market Regime Detection & Adaptation

### 7.1 Regime-Switching Models

From Pillai et al. (Amrita University) — the 135% return system:

```
Regime Filter Logic:
  IF volatility > threshold AND trend_direction = DOWN:
    → "CRASH" regime → reduce exposure, tighten stops
  ELSE IF volatility < low_threshold AND trend = UP:
    → "BULL" regime → increase position sizes
  ELSE:
    → "NORMAL" regime → standard sizing
```

**Signals Combined:**
1. Trend-following: EMA crossover, MACD
2. Mean-reversion: RSI extremes, Bollinger Band violations
3. Sentiment: FinBERT on earnings calls + news
4. ML signal aggregation: XGBoost ensemble
5. Regime filter: adjusts exposure multiplier

### 7.2 BAVAR Regime Detection

From Mikriukov et al.:
- **Vector Autoregressive models** at multiple time scales
- Each VAR represents a different market regime
- **Bayesian averaging** weights regimes by posterior probability
- Regime weights feed into Black-Litterman expected returns
- Enables smooth transitions between regimes (no hard switching)

### 7.3 DeltaLag (HKUST): Dynamic Lead-Lag Detection

**Key Innovation:** End-to-end deep learning for pair-specific lead-lag:
- **Sparsified cross-attention** identifies which stocks lead others
- Lag values are pair-specific (not fixed)
- Current return of leading stock → predicts future return of lagging stock
- Used for **long-short pair trading** or **predictive portfolio construction**

**Architecture:**
```python
# Input: returns of N stocks at time t
# Cross-attention: stock_i attends to all stocks_j with learned lag
# Output: predicted return for stock_i at t + lag_i
model = SparsifiedCrossAttention(
    n_stocks=N,
    attention_heads=8,
    sparsity=0.9  # only top 10% connections active
)
```

---

## 8. Portfolio Optimization

### 8.1 End-to-End Differentiable Portfolio

Instead of the traditional "predict then optimize" pipeline:

```
Traditional:  Data → Model → Predicted Returns → Markowitz → Weights
                                    ↑
                              Error compounding here

End-to-End:   Data → Model(params) → Weights → Portfolio Metrics → Loss → Backprop
                                                          ↑
                                              Sharpe/Omega/CVaR directly
```

### 8.2 Key Financial Metrics to Optimize

| Metric | Formula | When to Use |
|--------|---------|-------------|
| Sharpe Ratio | (R_p - R_f) / σ_p | General risk-adjusted return |
| Sortino Ratio | (R_p - R_f) / σ_downside | When downside risk matters most |
| CVaR (Expected Shortfall) | E[loss \| loss > VaR] | Tail risk management |
| Omega Ratio | Σ gains / Σ losses | Non-normal return distributions |
| Risk Parity | Equal risk contribution | Multi-asset diversification |

### 8.3 Transaction Cost Modeling

Always include realistic costs:
- Bid-ask spread: 5-10 bps for liquid equities
- Market impact: √(volume/daily_volume) × spread
- Slippage: stochastic delay between signal and execution
- Commission: per-trade or per-share

---

## 9. Sentiment Analysis & NLP

### 9.1 LLM Sentiment Trading (Kirtac & Germano, UCL/LSE)

**Most impactful finding for platform design:**

| Model | Accuracy | Sharpe (after 10bps costs) | 2-Year Gain |
|-------|----------|---------------------------|-------------|
| OPT (GPT-3 based) | 74.4% | 3.05 | 355% |
| FINBERT | 68.2% | 1.89 | 189% |
| BERT | 65.1% | 1.42 | 142% |
| Loughran-McDonald Dict | 58.3% | 0.71 | 71% |

**Takeaway:** Use the largest/most capable LLM available. OPT significantly outperforms domain-specific models for sentiment trading.

**Implementation Details:**
- Input: Financial news headlines + articles (2010-2023)
- Output: Positive / Negative / Neutral with confidence
- Trading rule: Long positive-sentiment stocks, short negative
- Rebalance: Weekly based on accumulated sentiment scores

### 9.2 Multimodal Stock Signal Architecture

From Karadaş et al. (2025):
- Combine: **price data** + **text data** (news) + **social media signals**
- Each modality processed by specialized encoder
- **Cross-modal attention** fuses information
- Output: probability distribution over price movement directions

```
Price Data → LSTM / Temporal CNN
News Text → FinBERT / LLM encoder  
Social    → Graph Neural Network
              ↓
         Cross-Modal Attention
              ↓
         Prediction Head (direction + magnitude)
```

### 9.3 Aspect-Based Sentiment for Finance

From van der Heever et al. (2026):
- Instead of overall sentiment, extract sentiment per **aspect**:
  - "Revenue growth" → Positive
  - "Management quality" → Negative
  - "Competitive position" → Positive
- Aspects mapped to specific tickers/companies
- More granular than document-level sentiment
- Enables targeted trading on specific company attributes

---

## 10. Risk Management & Safety

### 10.1 Hard-Gate Safety Layer (AgenticAITA)

Non-negotiable checks that run before ANY trade:
```
1. Position size ≤ max_single_position (e.g., 5% of portfolio)
2. Sector exposure ≤ max_sector_exposure (e.g., 25%)
3. Portfolio VaR ≤ max_daily_var (e.g., 2% of NAV)
4. Gross exposure ≤ max_gross (e.g., 200%)
5. Net exposure within long-only or long/short bounds
6. No trading during market circuit breakers
7. Kill switch: halt all trading if daily loss > X%
```

These checks are **deterministic** — they cannot be overridden by any agent.

### 10.2 Volatility-Scaled Position Sizing

Used across multiple papers:
```
target_position = signal_strength × (target_vol / realized_vol) × max_position

Where:
  target_vol = 15% annualized (configurable)
  realized_vol = 20-day rolling realized volatility
  max_position = 5% of portfolio
```

### 10.3 Stress Testing & Scenario Analysis

Automated stress tests should run daily:
- Historical scenarios: 2008 crash, COVID crash, 2022 rate hikes
- Hypothetical scenarios: sudden volatility spike, liquidity drain, correlation breakdown
- Monte Carlo: 10,000 paths with fat-tailed distributions

### 10.4 Inter-Agent Conflict Resolution

When agents disagree:
1. **Structured debate**: agents present reasoning in JSON
2. **Confidence-weighted voting**: higher weight to agents with better recent track record
3. **Risk agent veto**: risk agent can override any decision
4. **Escalation to human**: for positions exceeding certain size thresholds

---

## 11. Lead-Lag & Cross-Asset Signals

### 11.1 Lead-Lag Effect in Practice

From DeltaLag (HKUST):
- Large-cap stocks lead small-cap stocks within same sector
- Futures lead spot markets (by minutes)
- Options implied volatility leads realized volatility
- **Cross-asset lead-lag is the strongest alpha source**

**Implementation:**
```
1. For each target stock:
   a. Find top-K leading stocks (by cross-correlation)
   b. Learn optimal lag value per pair (via cross-attention)
   c. Use leading stock features + learned lag → predict target return
   
2. Pair trading: long the lagger when leading stock signals up
```

### 11.2 Feature Engineering for Lead-Lag

- **Lag-aligned features**: Return of leading stock at t-lag
- **Momentum differential**: Return_leader - Return_lagger
- **Volatility ratio**: σ_leader / σ_lagger
- **Volume surge indicator**: Volume_current / Volume_20d_avg
- **Cross-correlation at multiple lags**: 1min, 5min, 15min, 1h

---

## 12. Memory, Explainability & Audit

### 12.1 Layered Memory Architecture (FINMEM Framework)

```
Working Memory:
  └── Current day's prices, news summaries, active signals

Short-Term Memory (Shallow Layer):
  └── Daily news, intraday price events (rolled off after 30 days)

Medium-Term Memory (Intermediate Layer):
  └── Quarterly earnings, major economic events (rolled off after 1 year)

Long-Term Memory (Deep Layer):
  └── Annual reports, strategic changes, long-term performance (retained permanently)
```

### 12.2 Retrieval-Augmented Generation for Trading

At decision time, retrieve:
- Relevant past trades in similar conditions
- News articles from similar market regimes
- Analyst reports on the specific ticker
- Historical performance of similar signals

### 12.3 Explainability Requirements

Every trade decision must produce:
1. **Signal explanation**: Why buy/sell (human-readable)
2. **Confidence score**: Probability calibration
3. **Risk impact**: VaR contribution, exposure change
4. **Alternative actions**: What else was considered and why rejected
5. **Agent attribution**: Which agent(s) drove the decision

### 12.4 Audit Trail (Critical for Compliance)

```
Decision Log:
{
  "timestamp": "2026-06-29T10:30:00Z",
  "decision": "BUY 100 AAPL @ $185.42",
  "agents_invoked": ["alpha_sentiment", "risk_manager", "portfolio_opt"],
  "agent_chain": [
    {"agent": "alpha_sentiment", "output": "BUY AAPL, confidence=0.87"},
    {"agent": "risk_manager", "output": "APPROVED, exposure_within_limits"},
    {"agent": "portfolio_opt", "output": "Allocate 2.3% of portfolio"}
  ],
  "market_regime": "LOW_VOLATILITY_BULL",
  "sentiment_score": 0.73,
  "technical_signal": "EMA_BULLISH_CROSSOVER",
  "position_sizing_reasoning": "vol_scaled: target_vol/realized_vol = 0.85"
}
```

---

## 13. Implementation Roadmap

### Phase 1: Foundation (Weeks 1-4)
```
□ Set up data pipeline (real-time + historical)
□ Implement basic sentiment agent (FinBERT or LLM-based)
□ Build risk management layer with hard gates
□ Create execution engine (paper trading first)
□ Deploy shared memory store (Redis/PostgreSQL)
```

### Phase 2: Intelligence (Weeks 5-8)
```
□ Implement regime detection (volatility + trend classification)
□ Build lead-lag detection module (DeltaLag approach)
□ Add LLM reasoning agent (ReAct pattern)
□ Implement portfolio optimizer (differentiable Sharpe)
□ Build backtesting framework
```

### Phase 3: Multi-Agent (Weeks 9-12)
```
□ Deploy orchestrator agent with JSON contract system
□ Add self-reflection loop for strategy improvement
□ Implement agentic friction monitoring
□ Build automated stress testing
□ Create dashboard for agent decision visualization
```

### Phase 4: Advanced Features (Weeks 13-16)
```
□ LLM strategy evolution (AlgoEvolve/MadEvolve approach)
□ Multi-agent RL for dynamic allocation
□ Cross-asset signal integration (options, futures)
□ Quantum-classical optimization (optional, for large portfolios)
□ Explainability report generation
```

---

## 14. Key Metrics & Benchmarks

### Trading Performance Metrics to Track

| Metric | Target | Notes |
|--------|--------|-------|
| Annualized Sharpe Ratio | > 1.5 | Industry standard for good strategies is >1.0 |
| Sortino Ratio | > 2.0 | Focuses on downside risk |
| Maximum Drawdown | < -10% | Critical for drawdown-averse investors |
| Calmar Ratio | > 1.5 | Return / Max Drawdown |
| Win Rate | > 55% | For directional trades |
| Profit Factor | > 1.5 | Gross wins / Gross losses |
| Avg Trade Duration | Context-dependent | HFT: minutes, Swing: days |
| Agentic Friction Rate | 8-15% | Multi-agent health metric |

### Validation Benchmarks

| Benchmark | Description | Why |
|-----------|-------------|-----|
| Equal-Weight Portfolio | 1/N allocation | Simplest possible strategy to beat |
| S&P 500 Buy & Hold | Market return baseline | Market efficiency test |
| HRP (Hierarchical Risk Parity) | Modern portfolio theory | Industry-standard risk diversification |
| NCO (Nested Clusters Optimization) | Advanced portfolio optimization | State-of-the-art classical methods |
| Random Trading Random entry/exit | Sanity check | Should significantly underperform |

---

## 15. Paper References

1. **Aldridge, I., An, J., Burke, R., et al.** (2026). "Agentic Artificial Intelligence in Finance: A Comprehensive Survey." arXiv:2604.21672.
2. **Letteri, I.** (2026). "AgenticAITA: A Proof-of-Concept about Deliberative Multi-Agent Reasoning for Autonomous Trading Systems." arXiv:2605.12532.
3. **Sharma, D. & Shroff, G.** (2026). "AlgoEvolve: LLM-driven Meta-evolution of Algorithmic Trading Programs." arXiv:2606.26173.
4. **Kvasiuk, Y., Li, T., et al.** (2026). "MadEvolve: Evolutionary Optimization of Trading Systems with Large Language Models." arXiv:2605.23007.
5. **Zhou, W., Wang, S., et al.** (2025). "DeltaLag: Learning Dynamic Lead-Lag Patterns in Financial Markets." arXiv:2511.00390.
6. **Li, J., Grover, A., et al.** (2025). "Orchestration Framework for Financial Agents: From Algorithmic Trading to Agentic Trading." arXiv:2512.02227.
7. **Pillai, V.N.K., Ajith, A., et al.** (2026). "Generating Alpha: A Hybrid AI-Driven Trading System." arXiv:2601.19504.
8. **Kirtac, K. & Germano, G.** (2024). "Sentiment trading with large language models." arXiv:2412.19245.
9. **Koa, K.J.L., Ma, Y., et al.** (2024). "Learning to Generate Explainable Stock Predictions using Self-Reflective Large Language Models." arXiv:2402.03659.
10. **Wang, Z., Ventre, C., & Polukarov, M.** (2025). "Multi-Agent Reinforcement Learning for Market Making: Competition without Collusion." arXiv:2510.25929.
11. **Mikriukov, D., Sun, R., et al.** (2026). "Addressing Market Regime Changes and Heavy-Tailed Returns in Portfolio Optimization via Bayesian VAR and Elliptical Black-Litterman." arXiv:2606.09104.
12. **Fernandes, R. & Desell, T.** (2026). "Financially Guided Deep Portfolio Optimization." arXiv:2605.28853.
13. **Weinberg, A.I.** (2026). "Quantum-Assisted Optimal Rebalancing with Uncorrelated Asset Selection for Algorithmic Trading." arXiv:2603.16904.
14. **Karadaş, F., Eravcı, B., et al.** (2025). "Multimodal Stock Price Prediction." arXiv:2502.05186.

---

## Key Design Decision Summary

| Decision | Recommended Choice | Rationale |
|----------|-------------------|-----------|
| Agent Architecture | Multi-agent with orchestrator | Better specialization, safety, explainability |
| LLM for Reasoning | GPT-4/Claude-class (largest available) | OPT showed 74.4% accuracy vs 68% for domain-specific |
| Signal Generation | Multi-modal (sentiment + technical + lead-lag) | Pillai et al. showed 135% return with hybrid approach |
| Portfolio Optimization | End-to-end differentiable (Sharpe/Omega) | 270% improvement over traditional methods |
| Regime Detection | Bayesian multi-scale VAR | Handles fat tails and regime transitions |
| Risk Layer | Deterministic hard gates (non-negotiable) | Prevents catastrophic losses regardless of agent reasoning |
| Position Sizing | Volatility-scaled (target vol / realized vol) | Universal best practice across all papers |
| Memory System | Layered (working + short + medium + long term) | FINMEM framework for stable, interpretable decisions |
| Validation | Walk-forward with expanding window | Prevents look-ahead bias, most robust method |
| Execution | Start with paper trading, then live with limits | All papers validate on historical data first |

---

*Research synthesis compiled June 2026. All papers available on arXiv. This document should be treated as a living reference — update as new research is published.*
