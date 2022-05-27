import React from 'react';

import './Grid.css';

const Grid = (props) => {
  return (
    <div className='app__grid'>
        <table>
            <thead>
                <tr>
                    {props.titles.map((title,idx) => {
                        return <th key={idx}>{title}</th>
                    })}
                    {props.actionButtons ? <th></th> : null}
                </tr>
            </thead>
            <tbody>
                {props.data.map((product, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{product.name}</td>
                                <td>{product.trackingId}</td>
                                <td>{product.date}</td>
                                <td>
                                    <span  className={`${product.status === 'Approved' ? 'accept' : product.status === 'Pending' ? 'reject' : 'primary'}`}>{product.status}</span>
                                </td>
                                <td><a href='/' className='app__grid-link'>Details</a></td>
                            </tr>
                        )
                })}
            </tbody>
        </table>
    </div>
  );
};

export default Grid;