import React, { FC, useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Table: FC = () => {
    // const dispatch = useDispatch()
    const {logout, fetchData} = useActions()
    const {data, error} = useTypedSelector(state => state.data)

    useEffect(() => {
        fetchData()
    }, [])

    if (data.length !== 0) {
        return (
            <>
                <button onClick={logout}>
                    Выйти
                </button>
                <div>
                    HELLO WORLD
                </div>
                <div className='table'>
                    <div className='table__title'>
                        <div className='table__title__item'>Дата</div>
                        <div className='table__title__item'>Откуда</div>
                        <div className='table__title__item'>Куда</div>
                        <div className='table__title__item'>Кол-во пассажиров</div>
                        <div className='table__title__item'>Цель поездки</div>
                    </div>
                    {data.map((item, index) => {
                        return (
                            <div className='table__title__item table__item' key={index}>
                                <div className='table__title__item'>{item.date}</div>
                                <div className='table__title__item'>{item.from}</div>
                                <div className='table__title__item'>{item.to}</div>
                                <div className='table__title__item'>{item.passengers}</div>
                                <div className='table__title__item'>{item.purpose}</div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    } else {
        return (
            <>
                <button onClick={logout}>
                    Выйти
                </button>
                <div>{error}</div>
            </>
        )
    }

};

export default Table;