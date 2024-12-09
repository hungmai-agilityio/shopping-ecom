export enum TYPE {
  PRIMARY = 'primary',
  SECOND = 'second',
  THIRD = 'third'
}

export enum INPUT_TYPE {
  FILE = 'file',
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email'
}

export enum SIZE {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

export enum CELL {
  TD = 'td',
  TH = 'th'
}

export enum KEY {
  USER = 'user'
}

export enum TIME_STATUS {
  STALE_TIME = 1000 * 60 * 60, // milliseconds * seconds * minutes = 1 hour
  COOKIE_TIME = 60 * 60 * 24 * 2 // seconds * minutes * hour * day
}
