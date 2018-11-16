export default ({ title, ...props }) => {
  return (
    <div {...props}>
      <h1>{title}</h1>
    </div>
  )
}
