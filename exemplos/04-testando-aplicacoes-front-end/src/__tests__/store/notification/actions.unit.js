import * as actions from '../../../store/notification/actions';

describe('Creators', () => {
  it.each([
    ['clearNotification', actions.CLEAR_NOTIFICATION],
  ])('%s deve criar uma ação com o tipo %s', (creator, type) => {
    const action = actions[creator]();

    expect(action.type).toEqual(type);
  });
});
