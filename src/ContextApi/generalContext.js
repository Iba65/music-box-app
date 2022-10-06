import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer.js';
export const GeneralContext = React.createContext();

const initialState = {
  discSelect: {},
  songsAlbum: {},
  errors: {},
};

export function GeneralProvider(props) {
  const [generalState, generalDispatch] = useReducer(reducer, initialState);
  const value = React.useMemo(() => ({ generalState, generalDispatch }), [
    generalState,
  ]);
  return (
    <GeneralContext.Provider value={value}>
      {props.children}
    </GeneralContext.Provider>
  );
}

GeneralProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
