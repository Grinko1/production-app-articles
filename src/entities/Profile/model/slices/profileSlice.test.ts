// describe('counterSlice.test description', () => {
//   test('should increment value', () => {
//     const state: DeepPartial<CounterSchema> = {
//       value: 2
//     };
//     expect(
//       counterReducer(state as CounterSchema, counterActions.increment)
//     ).toEqual({ value: 3 });
//   });
//   test('should decrement value', () => {
//     const state: DeepPartial<CounterSchema> = {
//       value: 2
//     };
//     expect(
//       counterReducer(state as CounterSchema, counterActions.decrement)
//     ).toEqual({ value: 1 });
//   });
//   test('value undefined return NaN', () => {
//     const state: DeepPartial<CounterSchema> = {
//       value: undefined
//     };
//     expect(
//       counterReducer(state as CounterSchema, counterActions.decrement)
//     ).toEqual({ value: NaN });
//   });
//   test('work with empty state', () => {
//     expect(counterReducer(undefined, counterActions.increment)).toEqual({
//       value: 1
//     });
//   });
// });
