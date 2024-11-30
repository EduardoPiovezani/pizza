import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 400px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #ff6347;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CheckboxContainer = styled.div`
  margin-bottom: 16px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #ff6347;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #e5533d;
  }
`;

const PizzaForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    tamanho: "",
    sabor: "Calabresa",
    borda: false,
    dataEntrega: "",
    msg: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pedido realizado com sucesso!\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <FormContainer>
      <Title>Pizzaria</Title>
      <form onSubmit={handleSubmit}>
        <Label>Nome:</Label>
        <Input type="text" name="nome" value={formData.nome} onChange={handleChange} required />

        <Label>Email:</Label>
        <Input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <Label>Tamanho:</Label>
        <CheckboxContainer>
          <input type="radio" name="tamanho" value="g" onChange={handleChange} /> Grande
          <br />
          <input type="radio" name="tamanho" value="m" onChange={handleChange} /> Médio
          <br />
          <input type="radio" name="tamanho" value="p" onChange={handleChange} /> Pequeno
        </CheckboxContainer>

        <Label>Sabor:</Label>
        <Select name="sabor" value={formData.sabor} onChange={handleChange}>
          <option value="Calabresa">Calabresa</option>
          <option value="Marguerita">Marguerita</option>
          <option value="Frango Catupiry">Frango Catupiry</option>
          <option value="Portuguesa">Portuguesa</option>
          <option value="Coração">Coração</option>
        </Select>

        <Label>Adicionais:</Label>
        <CheckboxContainer>
          <input
            type="checkbox"
            name="borda"
            checked={formData.borda}
            onChange={handleChange}
          />{" "}
          Borda
        </CheckboxContainer>

        <Label>Data de Entrega:</Label>
        <Input type="date" name="dataEntrega" value={formData.dataEntrega} onChange={handleChange} required />

        <Label>Observação:</Label>
        <textarea
          name="msg"
          rows="4"
          style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          value={formData.msg}
          onChange={handleChange}
        ></textarea>

        <SubmitButton type="submit">Fazer Pedido</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default PizzaForm;
