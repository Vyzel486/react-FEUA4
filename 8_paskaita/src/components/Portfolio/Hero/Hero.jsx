
const Hero = ({title, description, children }) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <div>{children}</div>
    </div>
  )
}

export default Hero