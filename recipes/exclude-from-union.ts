/*** Example 6. Remove from union ***/
type Animals = 'Dog' | 'Cat' | 'Fish' | 'Bird' | 'Butterfly';

type RemoveWhoCanFly<T> = T extends 'Bird' | 'Butterfly' ? never : T;
type CannotFly = RemoveWhoCanFly<Animals>;

type CannotFlyWithExclude = Exclude<Animals, 'Bird' | 'Butterfly'>;
