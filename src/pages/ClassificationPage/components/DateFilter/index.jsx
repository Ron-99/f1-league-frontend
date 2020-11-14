import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { Date } from './style';

import * as moment from 'moment';
import 'moment/locale/pt-br';

const DateFilter = ({page, setPage, setDates, dates, setDate, setDateLabel, dateLabel }) => {


    const nextDate = () => {
        if (page === 0) return;

        const pageNumber = page - 1;
        setPage(pageNumber);

        moment.locale('pt-br');
        setDates(dates[pageNumber].substr(0, 10));
        setDate(dates[pageNumber].substr(0, 10));
        setDateLabel(moment(dates[pageNumber].substr(0, 10)).format('LL'));
    }

    const prevDate = () => {
        if (page === dates.length - 1) return;

        const pageNumber = page + 1;

        setPage(pageNumber);

        moment.locale('pt-br');
        

        setDates(dates[pageNumber].substr(0, 10));
        setDate(dates[pageNumber].substr(0, 10));
        setDateLabel(moment(dates[pageNumber].substr(0, 10)).format('LL'));
        
    }

    return (
        <Date>
            {page !== dates.length - 1 ? <FontAwesomeIcon className="arrow" onClick={prevDate} icon={faArrowLeft} size="2x" /> : ""}
            <h3>Dia {dateLabel}</h3>
            {page !== 0 ? <FontAwesomeIcon className="arrow" onClick={nextDate} icon={faArrowRight} size="2x" /> : ""}
        </Date>
    )
}

export default DateFilter;