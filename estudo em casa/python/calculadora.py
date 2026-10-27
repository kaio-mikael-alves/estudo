"""Calculadora simples executada pelo terminal."""


def ler_numero(mensagem):
    """Pede um número até que a entrada seja válida."""
    while True:
        try:
            return float(input(mensagem).replace(",", "."))
        except ValueError:
            print("Digite um número válido.")


def calcular(numero1, operacao, numero2):
    """Executa a operação escolhida."""
    if operacao == "+":
        return numero1 + numero2
    if operacao == "-":
        return numero1 - numero2
    if operacao == "*":
        return numero1 * numero2
    if operacao == "/":
        if numero2 == 0:
            raise ZeroDivisionError
        return numero1 / numero2
    raise ValueError


def main():
    print("=== Calculadora ===")

    while True:
        numero1 = ler_numero("Primeiro número: ")
        operacao = input("Operação (+, -, *, /): ").strip()
        numero2 = ler_numero("Segundo número: ")

        try:
            resultado = calcular(numero1, operacao, numero2)
            print(f"Resultado: {resultado:g}")
        except ValueError:
            print("Operação inválida.")
        except ZeroDivisionError:
            print("Não é possível dividir por zero.")

        continuar = input("Fazer outro cálculo? (s/n): ").strip().lower()
        if continuar != "s":
            print("Até logo!")
            break


if __name__ == "__main__":
    main()
