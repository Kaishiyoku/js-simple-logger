import concat from 'ramda/es/concat';
import format from 'date-fns/format';

const withTimestamp = (metaInformation) => (messages) => {
    const {dateFormat} = metaInformation;
    const currentDate = new Date();
    const formattedDate = format(currentDate, dateFormat);

    return concat([formattedDate], messages);
};

export default withTimestamp;
