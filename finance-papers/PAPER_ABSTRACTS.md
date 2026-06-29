# Paper Abstracts & Metadata

## Core Papers (Directly Related to AI Trading Platform)

---

### 1. Agentic Artificial Intelligence in Finance: A Comprehensive Survey
**ID:** 2604.21672 | **Date:** 2026-04-23 | **Link:** [https://arxiv.org/abs/2604.21672](https://arxiv.org/abs/2604.21672)  
**Authors:** Irene Aldridge, Jolie An, Riley Burke, Michael Cao, Chia-Yi Chien, Kexin De (Cornell University, ORIE)

**Abstract:** This comprehensive survey synthesizes recent advances in agentic AI across multiple dimensions of financial operations, including system architecture, market applications, regulatory frameworks, and systemic implications. Examines how agentic AI differs from traditional algorithmic trading and generative AI through its capacity for goal-oriented autonomy, continuous learning, and multi-agent coordination. Analysis shows that while agentic AI offers substantial potential for enhanced market efficiency, liquidity provision, and risk management, it also introduces novel challenges related to market stability, regulatory compliance, interpretability, and systemic risk.

---

### 2. AgenticAITA: Deliberative Multi-Agent Reasoning for Autonomous Trading Systems
**ID:** 2605.12532 | **Date:** 2026-05-01 | **Link:** [https://arxiv.org/abs/2605.12532](https://arxiv.org/abs/2605.12532)  
**Author:** Ivan Letteri (University of L'Aquila, DEWS Research Center)

**Abstract:** Introduces AgenticAITA, an agentic AI framework that replaces the traditional signal-then-execute paradigm with a fully autonomous deliberative loop in which multiple specialized LLM agents reason, negotiate, and act in concert. Four architectural contributions: (i) Adaptive Z-Score Trigger Engine gating LLM inference on statistically anomalous conditions, (ii) Sequential Deliberative Pipeline (Analyst → Risk Manager → Executor agents), (iii) Inference Gating Protocol (mutex-based cognitive resource scheduler), (iv) Correlation-Break Diversification composite score. Validated over 5-day live dry-run: 157 zero-intervention invocations across 76 assets, 11.5% agentic friction rate.

**Key Metrics:** 157 autonomous decisions, zero human interventions, 11.5% AFR

---

### 3. AlgoEvolve: LLM-driven Meta-evolution of Algorithmic Trading Programs
**ID:** 2606.26173 | **Date:** 2026-06-24 | **Link:** [https://arxiv.org/abs/2606.26173](https://arxiv.org/abs/2606.26173)  
**Authors:** Dhruv Sharma, Gautam Shroff (IIIT Delhi)

**Abstract:** Presents AlgoEvolve, an LLM-driven evolutionary framework that generates, evaluates, and iteratively improves executable trading strategies expressed as Python code. Meta-evolutionary outer loop evolves the prompts guiding inner loop program synthesis. Across experiments, system exhibits emergent regime-adaptive strategy logic including autonomous shifts in trading rules. Prompt evolution balances exploration/exploitation while reducing zero-trade failures.

**Key Innovation:** Two-level evolution — inner loop evolves strategies, outer loop evolves the prompts that guide strategy creation

---

### 4. MadEvolve: Evolutionary Optimization of Trading Systems with LLMs
**ID:** 2605.23007 | **Date:** 2026-05-21 | **Link:** [https://arxiv.org/abs/2605.23007](https://arxiv.org/abs/2605.23007)  
**Authors:** Yurii Kvasiuk, Tianyi Li, Owen Colegrove, Moritz Münchmeyer (UW-Madison / Event Horizon Labs)

**Abstract:** Adapts DeepMind's Alpha-Evolve framework for computational cosmology to algorithmic trading. Demonstrates utility for evolving feature sets, optimizing execution strategy components, and jointly evolving the feature+execution pipeline. Applied to Bitcoin trading with careful p-hacking probability control.

**Key Result:** Joint evolution of features + execution outperforms separate optimization

---

### 5. DeltaLag: Learning Dynamic Lead-Lag Patterns in Financial Markets
**ID:** 2511.00390 | **Date:** 2025-11-01 | **Link:** [https://arxiv.org/abs/2511.00390](https://arxiv.org/abs/2511.00390)  
**Authors:** Wanyun Zhou, Saizhuo Wang, Mihai Cucuringu, Zihao Zhang, Xiang Li et al. (HKUST / UCLA / Oxford)

**Abstract:** First end-to-end deep learning method that discovers and exploits dynamic lead-lag structures with pair-specific lag values for portfolio construction. Employs sparsified cross-attention to identify relevant lead-lag pairs, then leverages lag-aligned raw features from leading stocks to predict lagger stock returns. Evaluated showing consistent improvement over baseline methods.

**Key Innovation:** Sparsified cross-attention with pair-specific learned lags (not fixed)

---

### 6. Orchestration Framework for Financial Agents: Agentic Trading
**ID:** 2512.02227 | **Date:** 2025-12-01 | **Link:** [https://arxiv.org/abs/2512.02227](https://arxiv.org/abs/2512.02227)  
**Authors:** Jifeng Li, Arnav Grover, Abraham Alpuerto, Yupeng Cao, Xiao-Yang Liu (Columbia / Purdue / RPI / Stevens)

**Abstract:** Maps components of traditional algorithmic trading to specialized agents: planner, orchestrator, alpha agents, risk agents, portfolio agents, backtest agents, execution agents, audit agents, and memory agent.

**Key Results:**
- Stock trading (hourly, 04/2024–12/2024): **20.42% return, Sharpe 2.63, Max DD -3.59%** (vs S&P 500: 15.97%)
- BTC trading (minute, 07/2025–08/2025): **8.39% return, Sharpe 0.38, Max DD -2.80%** (vs BTC price: +3.80%)

---

### 7. Sentiment Trading with Large Language Models
**ID:** 2412.19245 | **Date:** 2024-12-26 | **Link:** [https://arxiv.org/abs/2412.19245](https://arxiv.org/abs/2412.19245)  
**Authors:** Kemal Kirtac, Guido Germano (UCL / LSE)

**Abstract:** Analyzes OPT, BERT, FINBERT, and Loughran-McDonald dictionary on 965,375 US financial news articles (2010-2023). OPT model achieves 74.4% accuracy predicting stock returns. Long-short strategy with 10bps transaction costs yields Sharpe 3.05. August 2021–July 2023: **355% gain**.

**Key Result:** OPT (GPT-3 class) >> FINBERT >> BERT >> Dictionary for sentiment trading

---

### 8. Self-Reflective LLMs for Explainable Stock Predictions (SEP Framework)
**ID:** 2402.03659 | **Date:** 2024-02-06 | **Link:** [https://arxiv.org/abs/2402.03659](https://arxiv.org/abs/2402.03659)  
**Authors:** Kelvin J.L. Koa, Yunshan Ma, Ritchie Ng, Tat-Seng Chua (NUS / Eastspring Investments)

**Abstract:** Proposes Summarize-Explain-Predict (SEP) framework using verbal self-reflective agent and PPO. The reflective agent learns to explain past stock movements through self-reasoning. PPO trainer trains model to generate explanations at test time. Training samples come from self-reflection, eliminating need for human annotators. Eliminates the expensive requirement for expert-labeled explanation data.

**Key Innovation:** Self-generated training data from reflection → no human labels needed

---

### 9. Multi-Agent RL for Market Making: Competition without Collusion
**ID:** 2510.25929 | **Date:** 2025-10-29 | **Link:** [https://arxiv.org/abs/2510.25929](https://arxiv.org/abs/2510.25929)  
**Authors:** Ziyi Wang, Carmine Ventre, Maria Polukarov (King's College London)

**Abstract:** Hierarchical MARL framework studying algorithmic collusion in market making. Agent A (market maker) trained against three competitors: B1 (self-interested), B2 (competitive/adversarial), B* (hybrid). B2 captures dominant market share with tighter spreads. B* adapts with milder adverse impact. Interaction-level metrics quantify behavioral asymmetry.

**Key Finding:** Adversarial competitor (B2) improves market efficiency; hybrid (B*) adapts to avoid collusion

---

### 10. DRL Portfolio Optimization: BAVAR-BLED Framework
**ID:** 2606.09104 | **Date:** 2026-06-08 | **Link:** [https://arxiv.org/abs/2606.09104](https://arxiv.org/abs/2606.09104)  
**Authors:** Daniil Mikriukov, Ruoyu Sun, Angelos Stefanidis et al. (U of Liverpool / XJTLU)

**Abstract:** BAVAR captures multi-scale temporal features for regime-aware estimates. BLED uses Student's t-distributions for fat-tailed return estimates. TD3 architecture with transformer networks for view construction and CNNs for dynamic risk-aversion.

**Sharpe 1.72, Sortino 2.70** on 29 Dow Jones stocks over 10 years (outperforms MVP, HRP, NCO, equal-weight)

---

### 11. Financially Guided Deep Portfolio Optimization
**ID:** 2605.28853 | **Date:** 2026-05-16 | **Link:** [https://arxiv.org/abs/2605.28853](https://arxiv.org/abs/2605.28853)  
**Authors:** Rahul Fernandes, Travis Desell

**Abstract:** End-to-end framework optimizing differentiable surrogates of Sharpe, Omega, CVaR, Risk Parity directly. AttentionLSTM with Omega-CVaR-RiskParity loss. 50 S&P 500 stocks, 2007-2023, quarterly rebalance with transaction costs.

**2022-2023:** Sharpe 0.29, +7.86% vs S&P 500: Sharpe -0.02, -4.52% (12.38pp outperformance, 270% relative)

---

### 12. Hybrid AI-Driven Trading System (Generating Alpha)
**ID:** 2601.19504 | **Date:** 2026-01-27 | **Link:** [https://arxiv.org/abs/2601.19504](https://arxiv.org/abs/2601.19504)  
**Authors:** Varun Narayan Kannan Pillai, Akshay Ajith, Sumesh K J (Amrita University)

**Abstract:** Combines EMA/MACD trend-following, RSI/Bollinger mean-reversion, FinBERT sentiment, XGBoost signal aggregation, and regime-filtered exposure adjustment.

**Result:** **135.49% return over 24 months** (final portfolio $235,492.83), outperforming S&P 500 and NASDAQ-100

---

### 13. Quantum-Assisted Portfolio for Algorithmic Trading
**ID:** 2603.16904 | **Date:** 2026-03-04 | **Link:** [https://arxiv.org/abs/2603.16904](https://arxiv.org/abs/2603.16904)  
**Author:** Abraham Itzhak Weinberg

**Abstract:** Hybrid classical-quantum framework. Ledoit-Wolf shrinkage + hierarchical clustering for decorrelated asset selection from S&P 500. Entropy-regularized Genetic Algorithm on GPU. Walk-forward QUBO scheduling via QAOA for optimal rebalancing timing.

---

### 14. Multimodal Stock Price Prediction
**ID:** 2502.05186 | **Date:** 2025-01-23 | **Link:** [https://arxiv.org/abs/2502.05186](https://arxiv.org/abs/2502.05186)  
**Authors:** Furkan Karadaş, Bahaeddin Eravcı, Ahmet Murat Özbayoğlu

**Abstract:** Combines financial metrics, tweets, and news articles using multimodal ML. Real-time sentiment, investor mood, temporal patterns fused via cross-modal attention for price direction prediction.
