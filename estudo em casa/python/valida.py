# validar cpf
def validar_cpf(cpf):
    # remover caracteres não númericos
    cpf = ''.join(filter(str.isdigit, cpf))
    # verificar se o cpf possui 11 dígitos
    if len(cpf) !=11:
        return False
    # verificar se todos os dígitos são iguais
    if cpf == cpf[0] * len(cpf):
        return False
    # calcular o primeiro dígito verificador
    soma = sum(int(cpf[i]) * (10 - i) for i in range(9))
    resto = soma % 11
    if resto < 2:
        digito1 = 0
    else:
        digito1= 11-resto
    # calcular o segundo dígito verificador
    soma = sum(int(cpf[i]) * (11 - i) for i in range(10))
    resto = soma % 11
    if resto<2:
        digito2=0
    else:
        digito2=11-resto
    # verificar se os dígitos verificadores são iguais aos do cpf
    if int(cpf[9]):
        return digito1 == int(cpf[9]) and digito2 == int(cpf[10])
    return False
print(validar_cpf(''))  # True