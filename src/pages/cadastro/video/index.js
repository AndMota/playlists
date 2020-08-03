import React, {useEffect, useState} from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm'
import Button from '../../../components/Button'
import FormField from '../../../components/FormField'
import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'

function CadastroVideo(){
    const history = useHistory();
    const [categorias, setCategorias]= useState([]);
    const categoryTittles= categorias.map(({titulo})=> titulo);
    const {handleChange, valores} = useForm({
      titulo: 'Video padrão',
      url: 'https://www.youtube.com/watch?v=vv_T8XRnFwU',
      categoria: 'Front End'
    });

    useEffect(()=> {
      categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
       setCategorias(categoriasFromServer);
      });
    }, []);

    return (
      <PageDefault>
        <h1> Cadastro de Video</h1>

        <form onSubmit={(event) => {
          event.preventDefault();

          const categoriaEscolhida = categorias.find((categoria)=> {
          return categoria.titulo === valores.categoria;
          });

          videosRepository.create({
            titulo: valores.titulo,
            url: valores.url,
            categoriaId: categoriaEscolhida.id,
          })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
        }}> 
      <FormField 
         label="Título do Vídeo"
         name="titulo"
         value={valores.titulo}
         onChange={handleChange}
       />
      <FormField 
         label="URL do Vídeo"
         name="url"
         value={valores.url}
         onChange={handleChange}
       />

      <FormField 
         label="Categoria"
         name="categoria"
         value={valores.categoria}
         onChange={handleChange}
         suggestions={categoryTittles}
       />
       <Button type= "submit">
         Cadastrar
       </Button>
      </form>

        <Link to="/cadastro/categoria">
            Cadastrar Categoria
        </Link>
      </PageDefault>
    )
  };

  export default CadastroVideo;