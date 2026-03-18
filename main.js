const { createApp } = window.Vue;

createApp({
  data() {
    return {
      nome: "Fellipe Ribeiro Alves",
      projects: [
        {
          title: "Sistema Bancário — Acadêmico - Python",
          description:
            "Controle de depósitos, saques, extratos e organização de dados.",
          techs: ["Python"]
        },
        {
          title: "Sistema de Jogo de Xadrez — Acadêmico - Java",
          description:
            "Aplicação de Programação Orientada a Objetos.",
          techs: ["Java"]
        },
        {
          title: "Formulário para Venda de Carros — Acadêmico - HTML, CSS, JavaScript",
          description:
            "Validação de dados e simulação de informações.",
          techs: ["HTML", "CSS", "JavaScript"]
        },
        {
          title: "Interface Inspirada no Instagram — Acadêmico - HTML, CSS, JavaScript",
          description:
            "Interface responsiva para desktop e mobile.",
          techs: ["HTML", "CSS", "JavaScript"]
        }
      ],
      contato: {
        email: "felliperibeiro14@hotmail.com",
        linkedin: "https://linkedin.com/in/felliperibeiro7",
        linkedinLabel: "linkedin.com/in/felliperibeiro7",
        github: "https://github.com/Ribeiro0",
        githubLabel: "github.com/Ribeiro0",
        telefone: "(11) 94016-7615",
        telefoneLink: "+5511940167615"
      },
      form: {
        nome: "",
        email: "",
        mensagem: ""
      }
    };
  },
  methods: {
    enviarFormulario() {
      alert(
        `Obrigado pela mensagem, ${this.form.nome || "pessoa"}! No futuro, você pode integrar este formulário ao seu e-mail ou backend.`
      );
      this.form.nome = "";
      this.form.email = "";
      this.form.mensagem = "";
    }
  }
}).mount("#app");

