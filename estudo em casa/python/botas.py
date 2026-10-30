import tkinter as tk
import tkinter.messagebox
def somar_numeros():
     try:
         n1 = float(entry_n1.get()) 
         n2 = float(entry_n2.get())
         resultado = n1 + n2
         tkinter.messagebox.showinfo('resultado', f'a soma é: {resultado}')
     except ValueError:
         tkinter.messagebox.showerror('erro', 'por favor, insira números válidos.')

janela=tk.Tk()
janela.title("calculadora")

label_n1 = tk.Label(janela, text="Digite o primeiro número:")
label_n1.grid(row=0, column=0, padx=10, pady=5, sticky="e")
entry_n1 = tk.Entry(janela)
entry_n1.grid(row=0, column=1, padx=5, pady=5)

label_n2 = tk.Label(janela, text="digite o segundo número: ")
label_n2.grid(row=1, column=0, padx=10, pady=5, sticky="e")
entry_n2 = tk.Entry(janela)
entry_n2.grid(row=1, column=1, padx=5, pady=5)

botao_somar = tk.Button(janela, text="somar", command=somar_numeros)
botao_somar.grid(row=2, column=0, columnspan=2, pady=10)

janela.mainloop()