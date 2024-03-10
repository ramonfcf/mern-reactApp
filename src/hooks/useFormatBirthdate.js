const formatBirthdate = (dateString) => {
  const dateObj = new Date(dateString);

  const day = dateObj.getUTCDate().toString().padStart(2, "0");
  const monty = (dateObj.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = dateObj.getUTCFullYear();

  const dataFormatada = `${day}/${monty}/${year}`;

  return dataFormatada;
};

export default formatBirthdate;
