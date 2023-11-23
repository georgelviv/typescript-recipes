/*** String union autocomplete ***/
type LooseAutocomplete<T extends string> = T | Omit<string, T>;
type Color = LooseAutocomplete<'Red' | 'Blue'>;

const red: Color = 'Red';

/*** Example 9. Conditional arguments ***/
type LogInEvent = {
  type: 'login',
  payload: {
    email: string
  }
}

type LogOutEvent = {
  type: 'logout'
}

type AppEvent = LogInEvent | LogOutEvent;

const sendEvent = <Type extends AppEvent['type']>(
  ...args: Extract<AppEvent, {type: Type}> extends { payload: infer TPayload }
  ? [type: Type, payload: TPayload]
  : [Type]
) => {}

sendEvent('login', {email: 'email'})
sendEvent('logout')