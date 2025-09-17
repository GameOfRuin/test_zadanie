export enum Tables {
  transactions = 'transactions',
  users = 'users',
}

export enum Columns {
  id = 'id',

  balance = 'balance',
  amount = 'amount',
  action = 'action',

  userId = 'userId',

  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum Action {
  deposit = 'deposit',
  withdrawal = 'withdrawal',
  purchase = 'purchase',
}
