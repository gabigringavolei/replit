const pessoas = [
                   { nome: "bagriel", sobrenome: "pangão", idade: "18" },
                   { nome: "avid", sobrenome: "gheta", idade: "26" },
                   { nome: "oohh", sobrenome: "nanana", idade: "54" },
                   { nome: "joseph", sobrenome: "belmont", idade: "18" },
                   { nome: "batman", sobrenome: "pelado", idade: "18" },
                   { nome: "melmão", sobrenome: "pingueludo", idade: "18" },
];

let escolaEmai = "@escola.pr.gov.br";

for (pessoa of pessoas) {
                   console.log(
 `${pessoa.nome}.${pessoa.sobrenome} ${escolaEmai}`,
                   );
                   console.log("\n");
}
