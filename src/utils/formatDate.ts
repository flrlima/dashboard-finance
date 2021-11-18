const formatDate = (date: string): string => {

    const dateValid = new Date(date);
    const year = dateValid.getFullYear();
    
    const day = dateValid.getDate() > 9 ? dateValid.getDate() : `0${dateValid.getDate()}`;
    
    const monthValid = dateValid.getMonth() + 1;
    const month = monthValid > 9 ? monthValid : `0${monthValid}`;    

    return `${day}/${month}/${year}`;
};

export default formatDate;