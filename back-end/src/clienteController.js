
require("dotenv").config(); // require for .env archive

const token = process.env.TOKEN_BD; // variable of token

const getCpf = async (req, res) => {
    
    const { id } = req.query;
    const fetchDataCliente = await fetch(
        "https://ixc.brasildigital.net.br/webservice/v1/cliente",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Basic " + Buffer.from(token).toString("base64"),
                ixcsoft: "listar",
            },
            body: JSON.stringify({
                qtype: "cliente.id",
                query: `${id}`,
                oper: "=",
                page: "1",
                rp: "2",
                sortorder: "desc",
            }),
        }
    )

        .then((data) => data.json())
        .catch((error) => {
        return res.status(404);
        });

    const normalizeData = (
        [{ id, razao, telefone_celular, cnpj_cpf }]
    ) => {
        const newData = {
            contrato: id,
            nome: razao,
            contato_celular: telefone_celular,
            cnpj_cpf,
        };
        return newData;
    };
    // Try catch to don't break the app
    try {
        return res
            .status(200)
            .json(
                normalizeData(
                    fetchDataCliente.registros,
                )
            );
    } catch (error) {
        return res.status(200).json({ msg: " um erro aconteceu" });
    }
};

module.exports = {
    getCpf,
}