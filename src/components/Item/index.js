const Item = props => {
  const {details, del} = props
  const {imageUrl, name, id, genre, duration} = details

  const ondel = () => {
    del(id)
  }
  return (
    <div>
      <img src={imageUrl} alt="track" />
      <h1>{name}</h1>
      <p>{genre}</p>
      <p>{duration}</p>
      <button type="button" data-testid="delete" onClick={ondel}>
        delete
      </button>
    </div>
  )
}
export default Item
