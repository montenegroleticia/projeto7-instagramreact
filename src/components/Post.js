import { useState } from "react";

export default function Post(props) {
  const [curtido, setCurtido] = useState("heart-outline");
  const [salvo, setSalvo] = useState("bookmark-outline");
  const [comentarioCurtido, setComentarioCurtido] = useState("heart-outline");

  function curtir(){
    if (curtido === "heart-outline"){
      setCurtido("heart");
    } else {
      setCurtido("heart-outline")
    }
  }

  function salvar(){
    if (salvo === "bookmark-outline"){
      setSalvo("bookmark");
    } else {
      setSalvo("bookmark-outline")
    }
  }

  function curtirComentario(){
    if (comentarioCurtido === "heart-outline"){
      setComentarioCurtido("heart");
    } else {
      setComentarioCurtido("heart-outline")
    }
  }

  return (
    <div data-test="post" className="post">
      <div className="perfil">
        <div className="user-perfil">
          <img src={props.image} alt={props.name} />
          <h2>{props.name}</h2>
        </div>
        <div>
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div data-test="post-image" className="conteudo-post">
        <img src={props.post} alt={props.name} />
      </div>

      <div className="infos">
        <div className="infos-emoji">
          <div className="esquerda-emoji">
            <ion-icon onClick={curtir} name={curtido}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div className="direita-emoji">
            <ion-icon onClick={salvar} name={salvo}></ion-icon>
          </div>
        </div>
        <div className="curtidas">
          <img src={props.curtidoImage} alt={props.curtidoName} />
          <p>
            Curtido por <strong>{props.curtidoName}</strong> e
            <strong> outras {props.curtidas} pessoas</strong>
          </p>
        </div>
        <div className="comentario">
          <h2>{props.name}</h2>
          <p>{props.texto}</p>
        </div>
        <div className="cinza-comentarios">
          <p>Veja todos os {props.comentarios} comentários</p>
        </div>
        <div className="comentario-icon">
          <div className="comentarios">
            <h2>{props.comentarioUser}</h2>
            <p>{props.comentario}</p>
          </div>
          <div>
            <ion-icon
              onClick={curtirComentario}
              name={comentarioCurtido}
              className="icone-comentario"
            ></ion-icon>
          </div>
        </div>
        <div className="add-comentario">
          <ion-icon name="happy-outline"></ion-icon>
          <input type="text" placeholder="Adicione um comentário..." />
          <a href="">Publicar</a>
        </div>
      </div>
    </div>
  );
}
