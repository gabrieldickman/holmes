const fetchClient = async (cpf) => {
  const response = await fetch(`http://localhost:3333/cliente/?cpf=${cpf}`);

  const data = await response.json();

  return data.data;
};

export default fetchClient;
