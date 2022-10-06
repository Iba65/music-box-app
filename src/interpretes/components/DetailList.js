import * as React from 'react';

export const DetailList = ({data}) => {
    return (
        <ul>
          {data.length > 0 ?
            data.map(dato => (
              <li>{dato}</li>
            ))
          : null}
        </ul>
    );
};