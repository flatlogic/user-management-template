import { createHashHistory } from 'history';

const history = createHashHistory();

export function getHistory() {
  return history;
}

