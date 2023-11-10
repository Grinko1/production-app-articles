import { type StateSchemaKey, type ReduxStoreWithManager } from 'app/providers/storeProvider';
import { useEffect, type ReactNode } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { type Reducer } from 'redux';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};
type ReducersListEntries = [StateSchemaKey, Reducer];
interface DynamicModuleLoaderProps {
  children?: ReactNode;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const { children, reducers, removeAfterUnmount = true } = props;
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;
  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntries) => {
      store.reducerManager.add(name, reducer);

      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, _]: ReducersListEntries) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY  ${name} reducer` });
        });
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{children}</>;
};
