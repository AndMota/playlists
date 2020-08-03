import React, {useState, useEffect} from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField'
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria(){
  const valoresIniciais={
    nome: '',
    descricao: '',
    cor: '',
  }

  const {handleChange, valores, clearForm} = useForm(valoresIniciais);
  const[categorias, setCategorias] = useState([]);



  useEffect(()=> {
    const URL = 'http://localhost:8080/categorias/';
    fetch(URL)
    .then(async (respostaDoServidor) =>{
      const resposta = await respostaDoServidor.json();
      setCategorias([
        ...resposta,
      ]);
    });
  },
  [

  ]);
  
    return (
      <PageDefault>
      <h1> Cadastro de Categoria: {valores.nome}</h1>
      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          valores
        ]);
        clearForm();
       }}>
      
       <FormField 
         label="Nome da Categoria "
         type="text"
         name="nome"
         value={valores.nome}
         onChange={handleChange}
       />

       <FormField
         label="Descrição"
         type="textarea"
         name="descricao"
         value={valores.descricao}
         onChange={handleChange}
       />

       <FormField
         label="Cor: "
         type="color"
         name="cor"
         value={valores.cor}
         onChange={handleChange}
       />

        <Button>
          Cadastrar
        </Button>

        {categorias===0 && <div>
          Loading...
          </div>}
      </form>

      <ul>
        {categorias.map((categoria)=> {
          return(
            <li key={`${categoria.titulo}`}> 
              {categoria.titulo}
            </li>
          )
        }
        )}
      </ul>
        <Link to="/">
            Ir para home
        </Link>
      </PageDefault>
    )
  };

  export default CadastroCategoria;