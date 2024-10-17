  const login = "Admin"
  const senha = "1234"

 let l, s = ""

while (l != login || s != senha){
  
  l = prompt("Digite o login: ")
  s = prompt("Digite a senha: ")

  if (l != login || s != senha){
    alert("Login ou senha incorretos")
    break 
  }
    window.location.replace("www.alura.com.br") 
                            
}