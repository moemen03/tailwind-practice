
const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button className="flex justify-center items-center 
    gap-2 px-7 py-4 border 
    font-montserrat text-lg leading-none
     bg-[#295DA8] rounded-full text-white
     border-[#1853a5]
      hover:bg-[#0d3f86] duration-500
     ">
        {label}

        {/* <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5" /> */}
        {iconURL && (
        <img
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      )}
    </button>
  )
}

export default Button
