

export const Card = (props) => {

  return (

    <div
      style={{
        backgroundColor: '#303030',
        padding: 20,
        margin: 20,
        borderRadius: 8,
        border: '1px solid #808080',
        width: 200,
        height: 370,
        cursor: 'defult',
      }}
    >
      <a target="_blank" href={props.link}>
        <img src={props.imagem} width='100%' />
      </a>
      <h2
        style={{
          marginTop: 10,
          textAlign: 'center'
        }}
      >{props.titulo}</h2>
    </div>
  )
}
