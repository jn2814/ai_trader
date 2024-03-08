CREATE TABLE user (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  risk_level TEXT,
  turnover_constraint TEXT,
  algorithm_choice INTEGER,
  stock_universe TEXT,
  update_date TEXT
);

CREATE TABLE stock (
  ticker TEXT PRIMARY KEY,
  date DATETIME NOT NULL,
  open FLOAT, 
  high FLOAT,
  low FLOAT,
  close FLOAT, 
  universe float,
  balance float, 
  shares_held INTEGER,
  MACD float,
  RSI float,
  CCI float,
  ADX float,
  turbulence float 
);

CREATE TABLE portfolio (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	ticker TEXT, 
	shares_held INTEGER,
	dollar_amount FLOAT,
	action_performed TEXT
);

CREATE TABLE backtest (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	daily_return FLOAT,
	turnover TEXT
);