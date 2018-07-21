const monthDayYear = (input) => {
    const date = !!input ? new Date(input) : new Date();
    let month = `${date.getMonth() + 1}`,
        day = `${date.getDate()}`,
        year = `${date.getFullYear()}`;

    month.length < 2 && (month = `0${month}`);
    day.length < 2 && (day = `0${day}`);

    return { month, day, year }
}

const forHTML = (date) => {
    const { month, day, year } = monthDayYear(date)
    return [year, month, day].join('-');
}

const forReadability = (date) => {
    const { month, day, year } = monthDayYear(date)
    return [month, day, year].join('/');
}

const formatDate = {
    forHTML,
    forReadability
}

export default formatDate;